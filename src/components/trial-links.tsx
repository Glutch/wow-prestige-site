import type { Trial } from "@/lib/wow";
import {
  npcIds,
  spellIds,
  zoneIds,
  questsByTrial,
  npcUrl,
  spellUrl,
  zoneUrl,
  questUrl,
  npcSearchUrl,
  type WowheadLink,
} from "@/data/wowhead";

function linksFor(trial: Trial): WowheadLink[] {
  const links: WowheadLink[] = [];

  for (const npc of trial.targets ?? []) {
    if (npcIds[npc]) links.push({ label: npc, url: npcUrl(npcIds[npc]), kind: "NPC" });
  }
  const patterns =
    trial.pattern == null ? [] : Array.isArray(trial.pattern) ? trial.pattern : [trial.pattern];
  for (const p of patterns) {
    links.push({ label: `“${p}…” NPCs`, url: npcSearchUrl(p), kind: "Search" });
  }
  for (const q of questsByTrial[trial.id] ?? []) {
    links.push({ label: q.name, url: questUrl(q.id), kind: "Quest" });
  }
  for (const spell of [trial.spell, trial.aura, trial.requireBuff]) {
    if (spell && spellIds[spell])
      links.push({ label: spell, url: spellUrl(spellIds[spell]), kind: "Spell" });
  }
  if (trial.zone && zoneIds[trial.zone]) {
    links.push({ label: trial.zone, url: zoneUrl(zoneIds[trial.zone]), kind: "Zone" });
  }
  return links;
}

/** A quiet row of Wowhead Classic references under a deed. */
export function TrialLinks({ trial }: { trial: Trial }) {
  const links = linksFor(trial);
  if (links.length === 0) return null;
  return (
    <p className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.75rem] text-muted-foreground">
      <span className="uppercase tracking-[0.18em] text-muted-foreground/70">Wowhead</span>
      {links.map((l) => (
        <a
          key={l.kind + l.url}
          href={l.url}
          target="_blank"
          rel="noreferrer"
          className="text-gold/80 underline-offset-2 transition-colors hover:text-gold hover:underline"
        >
          {l.label}
          <span className="ml-0.5 text-muted-foreground/70">({l.kind.toLowerCase()})</span>
        </a>
      ))}
    </p>
  );
}
