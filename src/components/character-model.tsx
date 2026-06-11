"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { CharacterModelConfig } from "@/data/models";

// Wowhead's viewer is a jQuery plugin loaded as a global script; everything
// here must happen in the browser, in order: globals → jQuery → viewer.min.js
// → the wow-model-viewer wrapper (its module init reads the globals).
const VIEWER_BASE = "/modelviewer/classic/";
// Wowhead versions the viewer code under deployment/viewer/<hash>/ — the
// unversioned viewer/viewer.min.js is stale and requests model files that no
// longer exist. Current hash: `modelViewerVersion.wow.classic` in any
// wowhead.com/classic page source.
const VIEWER_SCRIPT = `${VIEWER_BASE}deployment/viewer/c3f890f/viewer.min.js`;

declare global {
  interface Window {
    CONTENT_PATH?: string;
    WOTLK_TO_RETAIL_DISPLAY_ID_API?: string;
    jQuery?: unknown;
    ZamModelViewer?: unknown;
  }
}

const scriptPromises = new Map<string, Promise<void>>();

function loadScript(src: string): Promise<void> {
  let p = scriptPromises.get(src);
  if (!p) {
    p = new Promise<void>((resolve, reject) => {
      const el = document.createElement("script");
      el.src = src;
      el.onload = () => resolve();
      el.onerror = () => {
        // Drop the poisoned cache entry so a retry can load it fresh.
        scriptPromises.delete(src);
        el.remove();
        reject(new Error(`Failed to load ${src}`));
      };
      document.head.appendChild(el);
    });
    scriptPromises.set(src, p);
  }
  return p;
}

type Viewer = {
  destroy?: () => void;
  /** Dispatches to the loaded actor, queueing while the model still loads. */
  method?: (name: string, args?: unknown[]) => void;
};

export function CharacterModel({
  config,
  className,
}: {
  config: CharacterModelConfig;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  // useId survives hydration; strip its delimiters so it works as a jQuery
  // selector (the viewer takes a selector string, not an element).
  const reactId = useId();
  const containerId = `character-model-${reactId.replace(/[^a-zA-Z0-9-]/g, "")}`;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    // display:none (the model is desktop-only) — a hidden canvas can't get a
    // WebGL context, so don't fetch megabytes of model data for nothing.
    if (container.clientWidth === 0) return;
    let cancelled = false;
    let viewer: Viewer | undefined;

    // Rotate-only: swallow wheel events in capture before the viewer's canvas
    // sees them, so the model can't zoom but the page still scrolls.
    const blockZoom = (e: WheelEvent) => e.stopPropagation();
    container.addEventListener("wheel", blockZoom, { capture: true });

    (async () => {
      // The viewer's data fetches occasionally get a CDN error page instead
      // of JSON; one bad response must not cost us the model, so retry the
      // whole init with backoff.
      for (let attempt = 0; attempt < 3; attempt++) {
        if (attempt > 0) {
          await new Promise((r) => setTimeout(r, attempt * 3000));
        }
        if (cancelled) return;
        try {
          window.CONTENT_PATH = VIEWER_BASE;
          await loadScript("https://code.jquery.com/jquery-3.7.1.min.js");
          await loadScript(VIEWER_SCRIPT);
          const { generateModels } = await import("wow-model-viewer");
          if (cancelled) return;
          const aspect =
            container.clientHeight > 0
              ? container.clientWidth / container.clientHeight
              : 0.75;
          viewer = (await generateModels(
            aspect,
            `#${containerId}`,
            { ...config },
            "classic",
          )) as unknown as Viewer;
          if (cancelled) {
            viewer?.destroy?.();
            return;
          }
          if (config.animation) {
            // The viewer drops method calls that land before the actor's load
            // promise is registered, so re-apply the pose a few times.
            const animation = config.animation;
            for (const delay of [0, 1000, 2500, 5000]) {
              setTimeout(() => {
                if (cancelled) return;
                try {
                  viewer?.method?.("setAnimation", [animation]);
                } catch {
                  /* unknown animation — keep the default pose */
                }
              }, delay);
            }
          }
          setReady(true);
          return;
        } catch (e) {
          // A half-initialized viewer may have left a canvas behind.
          try {
            viewer?.destroy?.();
          } catch {
            /* already gone */
          }
          viewer = undefined;
          container.replaceChildren();
          if (attempt === 2) {
            // No model is a cosmetic loss — leave the hero as it was.
            console.warn("character model failed to load", e);
          }
        }
      }
    })();

    return () => {
      cancelled = true;
      container.removeEventListener("wheel", blockZoom, { capture: true });
      try {
        viewer?.destroy?.();
      } catch {
        /* viewer may already be gone */
      }
      container.replaceChildren();
    };
  }, [config, containerId]);

  return (
    <div
      ref={containerRef}
      id={containerId}
      className={className}
      style={{
        opacity: ready ? 1 : 0,
        transition: "opacity 700ms ease",
        transform: "scale(0.9)",
        transformOrigin: "center",
      }}
    />
  );
}
