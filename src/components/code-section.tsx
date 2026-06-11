import type { PrestigeClass } from "@/lib/wow";
import { ruleLines } from "@/lib/wow";

function Kicker({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="mb-3">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold/90">
        {title}
      </p>
      <p className="mt-0.5 text-[0.78rem] text-muted-foreground">{sub}</p>
    </div>
  );
}

/** The class's code as one oath tablet: machine-enforced vows beside
 *  roleplay honor rules, the break/restore cries carved along the foot.
 *  Compact enough to live inside the hero, under the rank row. */
export function CodeSection({ c }: { c: PrestigeClass }) {
  return (
    <div className="wow-panel rounded-sm">
      {/* ---- engraved header ---- */}
      <div className="flex items-center gap-4 px-6 pt-5">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/50" aria-hidden />
        <h2 className="font-display text-base font-bold uppercase tracking-[0.3em] text-gold">
          <span className="mr-3 text-gold/60" aria-hidden>✦</span>
          The Code
          <span className="ml-3 text-gold/60" aria-hidden>✦</span>
        </h2>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/50" aria-hidden />
      </div>
      <p className="mt-1 text-center text-[0.78rem] italic text-muted-foreground">
        Sworn when the path is taken. Kept until death.
      </p>

      {/* ---- vows | honor ---- */}
      <div className="mt-4 grid gap-6 px-6 pb-5 md:grid-cols-2 md:gap-0 md:divide-x md:divide-border/50">
        <div className="md:pr-6">
          <Kicker
            title="Sworn Vows"
            sub="Enforced by the addon — break one and the screen burns red until you atone."
          />
          <ul className="space-y-2">
            {ruleLines(c).map((r) => (
              <li key={r} className="flex gap-2.5 text-[0.92rem] leading-snug text-foreground/90">
                <span className="mt-px text-gold" aria-hidden>✦</span>
                {r}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:pl-6">
          <Kicker
            title="Rules of Honor"
            sub="The addon cannot see these. Your word is the only enforcement."
          />
          <ul className="space-y-2">
            {(c.honorRules ?? []).map((r) => (
              <li key={r} className="flex gap-2.5 text-[0.92rem] leading-snug text-foreground/90">
                <span className="mt-px text-gold/55" aria-hidden>◇</span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---- the cries ---- */}
      {(c.breakCry || c.restoreCry) && (
        <div className="grid gap-3 border-t border-border/50 bg-black/25 px-6 py-4 md:grid-cols-2 md:gap-0 md:divide-x md:divide-border/40">
          {c.breakCry && (
            <div className="md:pr-6">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-horde/80">
                If a vow breaks
              </p>
              <p className="mt-1 text-[0.9rem] italic leading-snug text-horde">
                “{c.breakCry}”
              </p>
            </div>
          )}
          {c.restoreCry && (
            <div className="md:pl-6">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-quality-uncommon/70">
                When honor is restored
              </p>
              <p className="mt-1 text-[0.9rem] italic leading-snug text-quality-uncommon">
                “{c.restoreCry}”
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
