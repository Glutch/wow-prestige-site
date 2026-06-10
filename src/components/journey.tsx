import type { PrestigeClass } from "@/lib/wow";
import { RANKS } from "@/lib/wow";
import { TrialCard } from "@/components/trial-card";

/** The full trial journey: the lifelong grudge, then four chapters along
 *  a vertical road, each gated by its rank trial. */
export function Journey({ c }: { c: PrestigeClass }) {
  if (!c.trials || !c.chapters) return null;

  const byChapter = (i: number) => c.trials!.filter((t) => t.chapter === i);
  const chapterTitle = (i: number) =>
    c.chapters!.find((ch) => ch.index === i)?.title ?? `Chapter ${i}`;

  return (
    <div className="space-y-14">
      {/* lifelong */}
      {byChapter(0).length > 0 && (
        <section>
          <ChapterHeading title={chapterTitle(0)} subtitle="Lifelong — the count never closes" />
          <div className="mt-5 space-y-4">
            {byChapter(0).map((t) => (
              <TrialCard key={t.id} trial={t} />
            ))}
          </div>
        </section>
      )}

      {/* the four chapters along the road */}
      <div className="relative">
        <div className="road absolute bottom-0 left-[7px] top-0 w-px sm:left-[9px]" aria-hidden />
        <div className="space-y-14">
          {[1, 2, 3, 4].map((i) => {
            const trials = byChapter(i);
            if (trials.length === 0) return null;
            const levels = trials.map((t) => t.level ?? 0).filter(Boolean);
            const range =
              levels.length > 0
                ? `levels ${Math.min(...levels)}–${Math.max(...levels)}`
                : "";
            return (
              <section key={i} className="relative pl-8 sm:pl-10">
                <span
                  aria-hidden
                  className="ember-pulse absolute left-0 top-1 size-[15px] rounded-full border-2 border-gold bg-background sm:size-[19px]"
                />
                <ChapterHeading
                  title={chapterTitle(i)}
                  subtitle={`Walked as ${RANKS[i - 1]}${range ? ` · ${range}` : ""}${
                    i < 4 ? ` · ends in the trial that makes a ${RANKS[i]}` : " · deeds of legend"
                  }`}
                />
                <div className="mt-5 space-y-4">
                  {trials.map((t) => (
                    <TrialCard key={t.id} trial={t} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ChapterHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header>
      <h3 className="font-display text-xl font-bold tracking-wide text-gold sm:text-2xl">
        {title}
      </h3>
      <p className="mt-1 text-sm uppercase tracking-[0.18em] text-muted-foreground">
        {subtitle}
      </p>
    </header>
  );
}
