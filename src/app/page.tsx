import Link from "next/link";
import { prestigeClasses } from "@/lib/wow";
import { ClassCard } from "@/components/class-card";
import { WowIcon } from "@/components/wow-icon";
import { ItemLink } from "@/components/item-link";

export default function Home() {
  const featured = prestigeClasses.find((c) => c.id === "mountainking")!;
  const rest = prestigeClasses.filter((c) => c.id !== "mountainking").slice(0, 7);

  return (
    <div>
      {/* ---- hero ---- */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url(https://wow.zamimg.com/uploads/screenshots/normal/84153.jpg)" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:py-32">
          <p className="rise text-sm uppercase tracking-[0.35em] text-gold/80">
            Classic Era · Hardcore
          </p>
          <h1 className="rise mt-4 font-display text-4xl font-black leading-tight text-foreground sm:text-6xl" style={{ animationDelay: "120ms" }}>
            Don&apos;t just play a class.
            <br />
            <span className="text-gold">Swear yourself to one.</span>
          </h1>
          <p className="rise mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/85" style={{ animationDelay: "240ms" }}>
            Prestige Classes turns the old Warcraft RPG legends into living
            rulesets for Classic Hardcore. Pick a path, keep its vows, walk its
            trials — and the addon watches every step. Break a vow and the
            screen burns red. Die, and your epitaph tells the whole story.
          </p>
          <div className="rise mt-9 flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: "360ms" }}>
            <Link
              href="/classes/mountain-king"
              className="rounded border border-gold/70 bg-gold/10 px-6 py-3 font-display text-sm font-bold uppercase tracking-widest text-gold transition-colors hover:bg-gold/20"
            >
              Walk the Mountain King&apos;s path
            </Link>
            <Link
              href="/classes"
              className="rounded border border-border px-6 py-3 font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              All 25 paths
            </Link>
          </div>
        </div>
      </section>

      {/* ---- the loop ---- */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: "inv_misc_book_07",
              title: "Vows, enforced",
              body: "Forbidden armor, sworn weapons, talent disciplines, pets, professions — checked live, every time your gear or talents change. The path knows when you stray.",
            },
            {
              icon: "ability_warrior_challange",
              title: "Trials, witnessed",
              body: "Hunts, pilgrimages, rites, relics and feats of arms across four chapters. Ranks are earned, not given: each ascension demands the level and the deed.",
            },
            {
              icon: "spell_holy_sealofprotection",
              title: "A record that outlives you",
              body: "Honorifics stack on your name. Every break is counted, every deed remembered — and on Hardcore, all of it is written into your death epitaph.",
            },
          ].map((f, i) => (
            <div key={f.title} className="wow-panel rise rounded-sm p-6" style={{ animationDelay: `${i * 120}ms` }}>
              <WowIcon token={f.icon} size={40} alt="" />
              <h2 className="mt-4 font-display text-lg font-bold text-gold">{f.title}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- featured: mountain king ---- */}
      <section className="relative overflow-hidden border-y border-border/60">
        <div
          className="absolute inset-0 bg-cover bg-[center_70%] opacity-25"
          style={{ backgroundImage: "url(https://wow.zamimg.com/uploads/screenshots/normal/28288.jpg)" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-4">
              <WowIcon token={featured.icon} size={56} alt={featured.name} />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold/80">The first written journey</p>
                <h2 className="font-display text-3xl font-black text-foreground">Mountain King</h2>
              </div>
            </div>
            <p className="mt-5 leading-relaxed text-foreground/85">{featured.fantasy}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Twenty-five deeds from Coldridge Valley to the Molten Core. Kneel
              before Magni. Forge your own <ItemLink name="Heavy Copper Maul" /> at
              the Great Forge. Mourn on the Thandol Span, stand as living stone,
              end the Usurper — and maybe, one day, carry{" "}
              <ItemLink name="Sulfuras, Hand of Ragnaros" />.
            </p>
            <Link
              href="/classes/mountain-king"
              className="mt-7 inline-block rounded border border-gold/70 bg-gold/10 px-6 py-3 font-display text-sm font-bold uppercase tracking-widest text-gold transition-colors hover:bg-gold/20"
            >
              Read the full chronicle
            </Link>
          </div>
        </div>
      </section>

      {/* ---- grid teaser ---- */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl font-bold text-foreground">The 25 paths</h2>
          <Link href="/classes" className="text-sm text-gold hover:underline">
            View all →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ClassCard c={featured} index={0} />
          {rest.map((c, i) => (
            <ClassCard key={c.id} c={c} index={i + 1} />
          ))}
        </div>
      </section>
    </div>
  );
}
