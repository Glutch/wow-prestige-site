import { itemByName } from "@/data/items";
import { ItemTooltip } from "@/components/item-tooltip";

/** An item name that shows its real classic tooltip on hover/focus —
 *  pure CSS, no client JS. Falls back to plain text for unknown items. */
export function ItemLink({ name }: { name: string }) {
  const item = itemByName.get(name);
  if (!item) return <>{name}</>;
  return (
    <span className="group/item relative inline-block" tabIndex={0}>
      <a
        href={`https://classic.wowhead.com/item=${item.id}`}
        target="_blank"
        rel="noreferrer"
        className={`item-link q-${item.quality}`}
      >
        [{item.name}]
      </a>
      <span className="pointer-events-none invisible absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 opacity-0 transition-opacity duration-150 group-hover/item:visible group-hover/item:opacity-100 group-focus-within/item:visible group-focus-within/item:opacity-100">
        <ItemTooltip item={item} />
      </span>
    </span>
  );
}

/** Renders a sentence, turning every known item name into an ItemLink. */
export function Linkify({ text }: { text: string }) {
  const names = [...itemByName.keys()].sort((a, b) => b.length - a.length);
  const parts: React.ReactNode[] = [];
  let rest = text;
  let key = 0;
  outer: while (rest.length > 0) {
    for (const name of names) {
      const at = rest.indexOf(name);
      if (at !== -1) {
        if (at > 0) parts.push(rest.slice(0, at));
        parts.push(<ItemLink key={key++} name={name} />);
        rest = rest.slice(at + name.length);
        continue outer;
      }
    }
    parts.push(rest);
    break;
  }
  return <>{parts}</>;
}
