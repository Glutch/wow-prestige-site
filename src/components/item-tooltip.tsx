import type { WowItem } from "@/data/items";
import { WowIcon } from "@/components/wow-icon";

/** The tooltip box itself, faithful to the classic in-game layout. */
export function ItemTooltip({ item }: { item: WowItem }) {
  return (
    <div className="wow-tooltip">
      <div className="mb-1 flex items-start gap-2">
        <WowIcon token={item.icon} size={36} alt="" />
        <span className={`q-${item.quality} text-[0.95rem] font-semibold leading-tight`}>
          {item.name}
        </span>
      </div>
      {item.unique && <div>Unique</div>}
      {item.bind && <div>{item.bind}</div>}
      {item.slot && (
        <div className="flex justify-between">
          <span>{item.slot}</span>
          <span>{item.type}</span>
        </div>
      )}
      {item.damage && (
        <div className="flex justify-between">
          <span>{item.damage}</span>
          <span>{item.speed}</span>
        </div>
      )}
      {item.dps && <div>{item.dps}</div>}
      {item.stats?.map((s) => <div key={s}>{s}</div>)}
      {item.durability && <div>{item.durability}</div>}
      {item.maxStack && <div>Max Stack: {item.maxStack}</div>}
      {item.requires && <div>{item.requires}</div>}
      {item.effects?.map((e) => (
        <div key={e} className="t-green">
          {e}
        </div>
      ))}
      {item.flavor && <div className="t-yellow italic">&quot;{item.flavor}&quot;</div>}
    </div>
  );
}
