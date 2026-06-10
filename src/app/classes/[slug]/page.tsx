import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { prestigeClasses, classBySlug, slugOf, FACTION_TEXT, RANKS } from "@/lib/wow";
import { WowIcon } from "@/components/wow-icon";
import { CodeSection } from "@/components/code-section";
import { Journey } from "@/components/journey";
import { EpitaphCard } from "@/components/epitaph-card";

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
};
const DEFAULT_BG = "https://wow.zamimg.com/uploads/screenshots/normal/84153.jpg";

export default async function ClassPage({ params }: { params: Params }) {
  const { slug } = await params;
  const c = classBySlug(slug);
  if (!c) notFound();

  const hasJourney = !!c.trials?.length;
  const honorifics = (c.trials ?? []).flatMap((t) => [
    ...(t.milestones?.map((m) => m.honorific).filter(Boolean) ?? []),
    ...(t.honorific ? [t.honorific] : []),
  ]) as string[];

  return (
    <div>
      {/* ---- hero ---- */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${HERO_BG[c.id] ?? DEFAULT_BG})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
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
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-20 px-4 py-16 sm:px-6">
        {/* ---- the code ---- */}
        <section>
          <h2 className="mb-6 font-display text-2xl font-bold text-foreground">The Code</h2>
          <CodeSection c={c} />
        </section>

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
              <EpitaphCard />
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
