import type { PrestigeClass } from "@/lib/wow";
import { loreByClass } from "@/data/lore";

/** The path's backstory — WC3 manual text, ability legends, the history the
 *  journey walks. Only renders for classes with written lore. */
export function LoreSection({ c }: { c: PrestigeClass }) {
  const sections = loreByClass[c.id];
  if (!sections?.length) return null;

  return (
    <section>
      <h2 className="mb-2 font-display text-2xl font-bold text-foreground">The Legend</h2>
      <p className="mb-8 max-w-2xl text-muted-foreground">
        Where this path comes from — Warcraft III, the old sourcebooks, and
        two centuries of dwarven grudge. Nothing here is invented.
      </p>
      <div className="grid gap-10 lg:grid-cols-2">
        {sections.map((s) => (
          <div key={s.heading} className="wow-panel rounded-sm p-6">
            <h3 className="font-display text-lg font-bold text-gold">{s.heading}</h3>
            {s.quote && (
              <blockquote className="mt-4 border-l-2 border-gold/50 pl-4 italic leading-relaxed text-[#c8b878]">
                “{s.quote.text}”
                <cite className="mt-2 block text-xs not-italic uppercase tracking-[0.18em] text-muted-foreground">
                  — {s.quote.source}
                </cite>
              </blockquote>
            )}
            {s.paragraphs.map((p) => (
              <p key={p.slice(0, 32)} className="mt-4 leading-relaxed text-foreground/85">
                {p}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
