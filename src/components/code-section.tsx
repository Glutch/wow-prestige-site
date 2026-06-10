import type { PrestigeClass } from "@/lib/wow";
import { ruleLines } from "@/lib/wow";

/** The class's code: machine-enforced vows beside roleplay honor rules. */
export function CodeSection({ c }: { c: PrestigeClass }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="wow-panel rounded-sm p-6">
        <h3 className="font-display text-lg font-bold text-gold">Vows the addon enforces</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Checked live. Break one and the screen burns red until you atone.
        </p>
        <ul className="mt-4 space-y-2.5">
          {ruleLines(c).map((r) => (
            <li key={r} className="flex gap-2.5 leading-snug text-foreground/90">
              <span className="mt-0.5 text-gold" aria-hidden>✓</span>
              {r}
            </li>
          ))}
        </ul>
        {c.breakCry && (
          <p className="mt-5 border-l-2 border-horde/60 pl-3 text-[0.92rem] italic text-horde">
            “{c.breakCry}”
          </p>
        )}
        {c.restoreCry && (
          <p className="mt-2 border-l-2 border-quality-uncommon/50 pl-3 text-[0.92rem] italic text-quality-uncommon">
            “{c.restoreCry}”
          </p>
        )}
      </div>

      <div className="wow-panel rounded-sm p-6">
        <h3 className="font-display text-lg font-bold text-gold">Honor rules</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          The addon cannot see these. Your word is the only enforcement.
        </p>
        <ul className="mt-4 space-y-2.5">
          {(c.honorRules ?? []).map((r) => (
            <li key={r} className="flex gap-2.5 leading-snug text-foreground/90">
              <span className="mt-0.5 text-gold" aria-hidden>•</span>
              {r}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
