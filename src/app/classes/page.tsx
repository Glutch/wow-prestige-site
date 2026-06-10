import type { Metadata } from "next";
import { prestigeClasses } from "@/lib/wow";
import { ClassCard } from "@/components/class-card";

export const metadata: Metadata = {
  title: "The 25 Paths — Prestige Classes",
  description:
    "Every prestige class: Blademaster, Mountain King, Beastmaster, Demon Hunter and more — each a Classic-legal race/class combo with vows and trials.",
};

export default function ClassesPage() {
  const written = prestigeClasses.filter((c) => c.trials?.length);
  const unwritten = prestigeClasses.filter((c) => !c.trials?.length);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <header className="max-w-2xl">
        <h1 className="font-display text-4xl font-black text-foreground">The 25 Paths</h1>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Each prestige class binds a Classic-legal race and class combination
          to a code: vows the addon enforces, honor rules only you can keep,
          and — for written journeys — chapters of trials with ranks to earn.
        </p>
      </header>

      <section className="mt-10">
        <h2 className="text-sm uppercase tracking-[0.25em] text-gold">Journeys written</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {written.map((c, i) => (
            <ClassCard key={c.id} c={c} index={i} />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
          Journeys not yet written — vows and honor rules already enforced
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {unwritten.map((c, i) => (
            <ClassCard key={c.id} c={c} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
