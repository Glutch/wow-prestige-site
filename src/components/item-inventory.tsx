import type { PrestigeClass } from "@/lib/wow";
import { itemByName, type WowItem } from "@/data/items";
import { suggestedByClass } from "@/data/suggested";
import { ItemTooltip } from "@/components/item-tooltip";
import { WowIcon } from "@/components/wow-icon";

const SLOT_RING: Record<WowItem["quality"], string> = {
  poor: "border-quality-poor/50",
  common: "border-quality-common/40",
  uncommon: "border-quality-uncommon/60",
  rare: "border-quality-rare/70",
  epic: "border-quality-epic/70",
  legendary: "border-quality-legendary/80 shadow-[0_0_14px_rgba(255,128,0,0.35)]",
};

/** Every known item this class's journey references, in journey order.
 *  Anything in the class's suggested-gear list is excluded: spoils are
 *  what the deeds award, not the shopping list along the way. */
function collectItems(c: PrestigeClass): WowItem[] {
  const suggested = new Set((suggestedByClass[c.id] ?? []).map((s) => s.name));
  const found = new Map<string, WowItem>();
  for (const trial of c.trials ?? []) {
    const explicit = [...(trial.items ?? []), ...(trial.item ? [trial.item] : [])];
    for (const name of explicit) {
      const item = itemByName.get(name);
      if (item && !suggested.has(name)) found.set(item.name, item);
    }
    // Items only mentioned in prose (the crafted maul...). completionNotes
    // are deliberately excluded: they name what the path REFUSES (Ironfoe,
    // the Ravager) — rejected loot is not a spoil. Those still get their
    // tooltip via Linkify inside the deed card.
    const prose = `${trial.objective} ${trial.text ?? ""}`;
    for (const [name, item] of itemByName) {
      if (!found.has(name) && !suggested.has(name) && prose.includes(name)) {
        found.set(name, item);
      }
    }
  }
  return [...found.values()];
}

/** A bag-style inventory of the journey's items — hover a slot for the
 *  real Classic tooltip. */
export function ItemInventory({ c }: { c: PrestigeClass }) {
  const loot = collectItems(c);
  if (loot.length === 0) return null;

  return (
    <div className="wow-panel inline-block rounded-sm px-4 py-3">
      <p className="mb-2.5 text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
        The spoils of this path
      </p>
      <ul className="flex flex-wrap gap-2">
        {loot.map((item) => (
          <li key={item.id} className="group/slot relative hover:z-[9999] focus-within:z-[9999]" tabIndex={0}>
            <a
              href={`https://classic.wowhead.com/item=${item.id}`}
              target="_blank"
              rel="noreferrer"
              aria-label={item.name}
              className="block"
            >
              <span
                className={`block rounded-[7px] border-2 bg-black/60 p-0.5 transition-transform duration-150 group-hover/slot:scale-110 ${SLOT_RING[item.quality]}`}
              >
                <WowIcon token={item.icon} size={44} alt={item.name} />
              </span>
            </a>
            <span className="pointer-events-none invisible absolute left-1/2 top-full z-[9999] mt-2 -translate-x-1/2 opacity-0 transition-opacity duration-150 group-hover/slot:visible group-hover/slot:opacity-100 group-focus-within/slot:visible group-focus-within/slot:opacity-100">
              <ItemTooltip item={item} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
