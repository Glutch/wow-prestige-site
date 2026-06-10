import { iconUrl } from "@/lib/wow";
import { cn } from "@/lib/utils";

/** A square WoW spell/item icon from the Wowhead CDN, with the classic
 *  dark inset ring. */
export function WowIcon({
  token,
  size = 44,
  className,
  alt = "",
}: {
  token: string;
  size?: number;
  className?: string;
  alt?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={iconUrl(token)}
      width={size}
      height={size}
      alt={alt}
      loading="lazy"
      className={cn(
        "rounded-[6px] border border-black/80 shadow-[inset_0_0_0_1px_rgba(255,210,100,0.25),0_2px_8px_rgba(0,0,0,0.6)]",
        className
      )}
    />
  );
}
