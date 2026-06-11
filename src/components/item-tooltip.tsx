import type { WowItem } from "@/data/items";
import { itemLore } from "@/data/item-lore";
import { WowIcon } from "@/components/wow-icon";

/** The tooltip box itself, faithful to the classic in-game layout.
 *  Built from <span>s (block via CSS) because it gets portaled into
 *  prose <p> tags via ItemLink — a <div> there is invalid HTML and
 *  trips React hydration. */
export function ItemTooltip({ item }: { item: WowItem }) {
  return (
    <span className="wow-tooltip block">
      <span className="mb-1 flex items-start gap-2">
        <WowIcon token={item.icon} size={36} alt="" />
        <span className={`q-${item.quality} text-[0.95rem] font-semibold leading-tight`}>
          {item.name}
        </span>
      </span>
      {item.unique && <span className="block">Unique</span>}
      {item.bind && <span className="block">{item.bind}</span>}
      {item.slot && (
        <span className="flex justify-between">
          <span>{item.slot}</span>
          <span>{item.type}</span>
        </span>
      )}
      {item.damage && (
        <span className="flex justify-between">
          <span>{item.damage}</span>
          <span>{item.speed}</span>
        </span>
      )}
      {item.bonusDamage && <span className="block">{item.bonusDamage}</span>}
      {item.dps && <span className="block">{item.dps}</span>}
      {item.stats?.map((s) => (
        <span key={s} className="block">
          {s}
        </span>
      ))}
      {item.durability && <span className="block">{item.durability}</span>}
      {item.maxStack && <span className="block">Max Stack: {item.maxStack}</span>}
      {item.requires && <span className="block">{item.requires}</span>}
      {item.effects?.map((e) => (
        <span key={e} className="t-green block">
          {e}
        </span>
      ))}
      {item.flavor && <span className="t-yellow block italic">&quot;{item.flavor}&quot;</span>}
      {itemLore[item.name] && (
        <span className="t-lore mt-1.5 block border-t border-[#5a4d28]/60 pt-1.5 italic">
          {itemLore[item.name]}
        </span>
      )}
    </span>
  );
}
