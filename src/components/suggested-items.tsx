import type { PrestigeClass } from "@/lib/wow";
import { SLOT_RING } from "@/lib/wow";
import { itemByName, type WowItem } from "@/data/items";
import { itemUrl } from "@/data/wowhead";
import { suggestedByClass } from "@/data/suggested";
import { ItemTooltip } from "@/components/item-tooltip";
import { WowIcon } from "@/components/wow-icon";
import { Panel } from "@/components/panel";

/** Thematic gear worth chasing — not required by any deed, but every piece
 *  belongs in the hands of this class. Hover for the real tooltip. */
export function SuggestedItems({ c }: { c: PrestigeClass }) {
  const picks = (suggestedByClass[c.id] ?? [])
    .map((s) => ({ ...s, item: itemByName.get(s.name) }))
    .filter((s): s is typeof s & { item: WowItem } => !!s.item);
  if (picks.length === 0) return null;

  return (
    <Panel heading="Suggested arms for the path" inline>
      <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
        {picks.map(({ item, note }) => (
          <li key={item.id} className="group/slot relative hover:z-[9999] focus-within:z-[9999]" tabIndex={0}>
            <a
              href={itemUrl(item.id)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3"
            >
              <span
                className={`block shrink-0 rounded-[6px] border-2 bg-black/60 p-0.5 transition-transform duration-150 group-hover/slot:scale-110 ${SLOT_RING[item.quality]}`}
              >
                <WowIcon token={item.icon} size={34} alt={item.name} />
              </span>
              <span className="min-w-0">
                <span className={`item-link q-${item.quality} block text-sm leading-tight`}>
                  {item.name}
                </span>
                <span className="block text-xs leading-snug text-muted-foreground">
                  {note}
                </span>
              </span>
            </a>
            <span className="pointer-events-none invisible absolute left-6 top-full z-[9999] mt-1 opacity-0 transition-opacity duration-150 group-hover/slot:visible group-hover/slot:opacity-100 group-focus-within/slot:visible group-focus-within/slot:opacity-100">
              <ItemTooltip item={item} />
            </span>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
