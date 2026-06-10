import Link from "next/link";
import type { PrestigeClass } from "@/lib/wow";
import { slugOf, FACTION_TEXT } from "@/lib/wow";
import { WowIcon } from "@/components/wow-icon";

export function ClassCard({ c, index = 0 }: { c: PrestigeClass; index?: number }) {
  const hasJourney = !!c.trials?.length;
  const card = (
    <article
      className={`wow-panel rise relative h-full rounded-sm p-4 transition-transform duration-200 ${
        hasJourney
          ? "hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,180,60,0.15)]"
          : "opacity-65"
      }`}
      style={{ animationDelay: `${Math.min(index * 45, 700)}ms` }}
    >
      <div className="flex items-start gap-3">
        <WowIcon token={c.icon} size={44} alt={c.name} />
        <div className="min-w-0">
          <h3 className="font-display text-[1.02rem] font-bold leading-tight text-foreground">
            {c.name}
          </h3>
          <p className={`text-[0.78rem] ${FACTION_TEXT[c.faction]}`}>
            {c.faction} · {(c.races ?? ["Any race"]).join(", ").replace("NightElf", "Night Elf")}
          </p>
        </div>
      </div>
      <p className="mt-3 line-clamp-3 text-[0.88rem] leading-relaxed text-muted-foreground">
        {c.fantasy}
      </p>
      <div className="mt-3 border-t border-border/60 pt-2.5 text-[0.75rem] uppercase tracking-[0.15em]">
        {hasJourney ? (
          <span className="text-gold">
            ⚒ Journey written — {c.trials!.length} deeds
          </span>
        ) : (
          <span className="text-muted-foreground">Journey not yet written</span>
        )}
      </div>
    </article>
  );

  return (
    <Link href={`/classes/${slugOf(c)}`} className="block h-full">
      {card}
    </Link>
  );
}
