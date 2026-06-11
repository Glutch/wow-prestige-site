import type { PrestigeClass } from "@/lib/wow";

/** Per-class flavor for the sample epitaph: a fitting hero name, a days-walked
 *  figure, and the lifelong counter's final tally. */
const SAMPLE: Record<string, { hero: string; days: number; count: number }> = {
  mountainking: { hero: "Dunhelm", days: 84, count: 214 },
  blademaster: { hero: "Gorvash", days: 77, count: 209 },
};
const FALLBACK = { hero: "Aldric", days: 60, count: 150 };

/** A mock of the death epitaph the addon prints to chat on Hardcore —
 *  the record that outlives the character. Built from the class's own
 *  journey data: its honorifics, its deed count, its lifelong counter. */
export function EpitaphCard({ c }: { c: PrestigeClass }) {
  const sample = SAMPLE[c.id] ?? FALLBACK;
  const trials = c.trials ?? [];

  // Titles in journey order: milestone honorifics first (the lifelong
  // counter leads the file), then deed honorifics.
  const titles = trials.flatMap((t) => [
    ...(t.milestones?.map((m) => m.honorific).filter(Boolean) ?? []),
    ...(t.honorific ? [t.honorific] : []),
  ]) as string[];

  const counter = trials.find((t) => t.epitaph);
  const counterLine = counter?.epitaph?.replace("%d", String(sample.count));

  return (
    <div className="wow-panel mx-auto max-w-xl overflow-hidden rounded-sm p-4 font-mono text-[0.78rem] leading-relaxed sm:p-6 sm:text-[0.85rem]">
      <p className="overflow-hidden whitespace-nowrap text-muted-foreground">------------------------------------------</p>
      <p className="text-gold">
        Here fell {sample.hero}, Paragon of the {c.name}.
      </p>
      <p className="text-muted-foreground">
        Level 60. Walked the path for {sample.days} days.
      </p>
      <p className="text-quality-uncommon">Every vow honored to the end. Died with honor.</p>
      <p className="text-muted-foreground">
        {trials.length - 2} of {trials.length} deeds of the path done.
      </p>
      {titles.length > 0 && (
        <p className="text-gold">Titles earned: {titles.join(", ")}.</p>
      )}
      {counterLine && <p className="text-muted-foreground">{counterLine}</p>}
      <p className="overflow-hidden whitespace-nowrap text-muted-foreground">------------------------------------------</p>
    </div>
  );
}
