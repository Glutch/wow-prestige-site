import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-display text-lg font-bold tracking-wide text-gold">
          ⚒ Prestige Classes
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/classes" className="text-muted-foreground transition-colors hover:text-gold">
            The 25 Paths
          </Link>
          <Link
            href="/classes/mountain-king"
            className="text-muted-foreground transition-colors hover:text-gold"
          >
            Mountain King
          </Link>
          <a
            href="https://github.com/Glutch/wow-prestige-classes"
            className="rounded border border-border px-3 py-1.5 font-display text-xs font-semibold text-gold transition-colors hover:bg-secondary"
          >
            Get the addon
          </a>
        </nav>
      </div>
    </header>
  );
}
