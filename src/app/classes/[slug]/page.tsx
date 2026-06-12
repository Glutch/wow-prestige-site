import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { prestigeClasses, classBySlug, slugOf, FACTION_TEXT, RANKS } from "@/lib/wow";
import { WowIcon } from "@/components/wow-icon";
import { CodeSection } from "@/components/code-section";
import { Journey } from "@/components/journey";
import { EpitaphCard } from "@/components/epitaph-card";
import { ItemInventory } from "@/components/item-inventory";
import { SuggestedItems } from "@/components/suggested-items";
import { LoreSection } from "@/components/lore-section";
import { PathIdentity } from "@/components/path-identity";
import { CharacterModel } from "@/components/character-model";
import { modelForClass } from "@/data/models";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return prestigeClasses.map((c) => ({ slug: slugOf(c) }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const c = classBySlug(slug);
  if (!c) return {};
  return {
    title: `${c.name} — Prestige Classes`,
    description: c.fantasy,
  };
}

const HERO_BG: Record<string, string> = {
  mountainking: "https://wow.zamimg.com/uploads/screenshots/normal/1260971.jpg",
  blademaster:
    "https://wow.zamimg.com/uploads/screenshots/normal/1024918-durotar-tiragarde-keep-view.jpg",
  beastmaster: "https://wow.zamimg.com/uploads/screenshots/normal/70250.jpg",
  // Sunset in Mulgore — the hour between An'she and Mu'sha.
  spiritwalker: "https://wow.zamimg.com/uploads/screenshots/normal/9349.jpg",
  // The Scholomance library, green candles and old bones.
  necromancer: "https://wow.zamimg.com/uploads/screenshots/normal/67442.jpg",
};
const DEFAULT_BG = "https://wow.zamimg.com/uploads/screenshots/normal/84153.jpg";

export default async function ClassPage({ params }: { params: Params }) {
  const { slug } = await params;
  const c = classBySlug(slug);
  if (!c) notFound();

  const hasJourney = !!c.trials?.length;
  const model = modelForClass(c);
  const honorifics = (c.trials ?? []).flatMap((t) => [
    ...(t.milestones?.map((m) => m.honorific).filter(Boolean) ?? []),
    ...(t.honorific ? [t.honorific] : []),
  ]) as string[];

  return (
    <div>
      {/* ---- hero ---- */}
      {/* no overflow-hidden here — item tooltips at the hero's edge must
          escape; the bg layers are inset-0 and cannot overflow anyway */}
      <section className="relative border-b border-border/60">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-55"
          style={{ backgroundImage: `url(${HERO_BG[c.id] ?? DEFAULT_BG})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/15 via-background/45 to-background" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          {model && (
            <div className="absolute right-0 top-0 hidden h-[480px] w-[400px] lg:block">
              <CharacterModel config={model} className="h-full w-full" />
            </div>
          )}
          <Link href="/classes" className="text-sm text-muted-foreground hover:text-gold">
            ← All paths
          </Link>
          <div className="rise mt-6 flex items-center gap-5">
            <WowIcon token={c.icon} size={72} alt={c.name} className="ember-pulse" />
            <div>
              <h1 className="font-display text-4xl font-black text-foreground sm:text-5xl">
                {c.name}
              </h1>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                <span className={FACTION_TEXT[c.faction]}>{c.faction}</span>
                {" · "}
                {(c.races ?? ["Any race"]).join(", ").replace("NightElf", "Night Elf")}
                {" · "}
                {(c.classes ?? []).map((t) => t[0] + t.slice(1).toLowerCase()).join(" / ")}
                {" · "}
                {c.source}
              </p>
            </div>
          </div>
          <p className="rise mt-6 max-w-3xl text-lg italic leading-relaxed text-[#c8b878]" style={{ animationDelay: "150ms" }}>
            “{c.fantasy}”
          </p>
          {hasJourney && (
            <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "280ms" }}>
              {RANKS.map((r, i) => (
                <span
                  key={r}
                  className="rounded-sm border border-gold/40 bg-black/40 px-3 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-gold"
                >
                  {i + 1}. {r}
                </span>
              ))}
              <span className="self-center text-xs text-muted-foreground">
                — each rank earned by level <em>and</em> deed
              </span>
            </div>
          )}
          {/* the rise animation makes each wrapper a stacking context, so a
              hovered panel must out-rank its siblings for tooltips to show */}
          {hasJourney ? (
            <div
              className="rise mt-8 grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(260px,320px)]"
              style={{ animationDelay: "400ms" }}
            >
              <div className="min-w-0 space-y-4">
                <CodeSection c={c} />
                <div className="relative hover:z-[70] focus-within:z-[70]">
                  <ItemInventory c={c} />
                </div>
                <div className="relative hover:z-[70] focus-within:z-[70]">
                  <SuggestedItems c={c} />
                </div>
              </div>
              <PathIdentity c={c} stacked />
            </div>
          ) : (
            <div className="rise mt-8 space-y-4" style={{ animationDelay: "340ms" }}>
              <CodeSection c={c} />
              <PathIdentity c={c} />
            </div>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-20 px-4 py-16 sm:px-6">
        {/* ---- the legend ---- */}
        <LoreSection c={c} />

        {/* ---- the journey ---- */}
        {hasJourney ? (
          <>
            {honorifics.length > 0 && (
              <section>
                <h2 className="mb-2 font-display text-2xl font-bold text-foreground">
                  Honorifics to earn
                </h2>
                <p className="mb-5 text-muted-foreground">
                  Deeds of renown append titles to your name — shown on your
                  record, announced to the world, carved into your epitaph.
                </p>
                <div className="flex flex-wrap gap-3">
                  {honorifics.map((h) => (
                    <span
                      key={h}
                      className="rounded-sm border border-gold/50 bg-gold/10 px-4 py-2 font-display text-sm font-bold text-gold"
                    >
                      “{h}”
                    </span>
                  ))}
                </div>
              </section>
            )}

            <section>
              <h2 className="mb-2 font-display text-2xl font-bold text-foreground">
                The Journey — {c.trials!.length} deeds
              </h2>
              <p className="mb-8 max-w-2xl text-muted-foreground">
                All of it detected automatically while you play: the kill, the
                place, the rite, the relic in your hands. Hover any item to see
                its true Classic tooltip.
              </p>
              <Journey c={c} />
            </section>

            <section>
              <h2 className="mb-2 text-center font-display text-2xl font-bold text-foreground">
                And at the end of the road
              </h2>
              <p className="mb-6 text-center text-muted-foreground">
                On Hardcore every story ends once. The addon writes yours.
              </p>
              <EpitaphCard c={c} />
            </section>
          </>
        ) : (
          <section className="wow-panel rounded-sm p-8 text-center">
            <h2 className="font-display text-xl font-bold text-gold">
              This journey is not yet written
            </h2>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-muted-foreground">
              The {c.name}&apos;s vows and honor rules are already enforced by the
              addon today. Its chapters of trials — hunts, rites, relics and
              rank ordeals like the Mountain King&apos;s — are still being
              chronicled.
            </p>
            <Link
              href="/classes/mountain-king"
              className="mt-6 inline-block rounded border border-gold/70 bg-gold/10 px-5 py-2.5 font-display text-xs font-bold uppercase tracking-widest text-gold transition-colors hover:bg-gold/20"
            >
              See a written journey
            </Link>
          </section>
        )}
      </div>
    </div>
  );
}
