import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="whitespace-nowrap font-display text-base font-bold tracking-wide text-gold sm:text-lg">
          ⚒ Prestige Classes
        </Link>
        <nav className="flex items-center gap-3 text-sm sm:gap-6">
          <Link href="/classes" className="whitespace-nowrap text-muted-foreground transition-colors hover:text-gold">
            The 25 Paths
          </Link>
          <Link
            href="/classes/mountain-king"
            className="hidden whitespace-nowrap text-muted-foreground transition-colors hover:text-gold sm:inline"
          >
            Mountain King
          </Link>
          <a
            href="https://github.com/Glutch/wow-prestige-classes"
            className="whitespace-nowrap rounded border border-border px-2.5 py-1.5 font-display text-xs font-semibold text-gold transition-colors hover:bg-secondary sm:px-3"
          >
            Get the addon
          </a>
        </nav>
      </div>
    </header>
  );
}
