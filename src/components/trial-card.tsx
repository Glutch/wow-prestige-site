import type { Trial } from "@/lib/wow";
import { WowIcon } from "@/components/wow-icon";
import { Linkify } from "@/components/item-link";
import { TrialLinks } from "@/components/trial-links";
import { trialIcons } from "@/data/trial-icons";

const KIND_ICON: Record<Trial["kind"], string> = {
  kill: "ability_warrior_savageblow",
  counter: "inv_misc_book_06",
  proc: "spell_holy_sealofmight",
  multihit: "spell_nature_thunderclap",
  loot: "inv_pick_02",
  equip: "inv_hammer_05",
  cast: "trade_blacksmithing",
  emote: "spell_holy_layonhands",
  visit: "inv_misc_map_01",
};

const KIND_LABEL: Record<Trial["kind"], string> = {
  kill: "Hunt",
  counter: "Grudge",
  proc: "Feat of arms",
  multihit: "Feat of arms",
  loot: "Labor",
  equip: "Relic",
  cast: "Craft",
  emote: "Rite",
  visit: "Pilgrimage",
};

function Chip({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "gold" | "red" }) {
  const tones = {
    default: "border-border text-muted-foreground",
    gold: "border-gold/50 text-gold",
    red: "border-horde/50 text-horde",
  };
  return (
    <span className={`rounded-sm border px-1.5 py-0.5 text-[0.68rem] uppercase tracking-wider ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function TrialCard({ trial }: { trial: Trial }) {
  return (
    <div className="wow-panel relative rounded-sm p-4 transition-transform duration-200 hover:-translate-y-0.5 hover:z-40 sm:p-5">
      <div className="flex items-start gap-4">
        <div className="relative shrink-0">
          <WowIcon token={trialIcons[trial.id] ?? KIND_ICON[trial.kind]} size={44} alt={KIND_LABEL[trial.kind]} />
          {trial.level && (
            <span className="absolute -bottom-1.5 -right-1.5 rounded-sm border border-gold/60 bg-black px-1 font-display text-[0.65rem] font-bold text-gold">
              {trial.level}
            </span>
          )}
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <h4 className="font-display text-base font-bold text-foreground">
              {trial.name}
            </h4>
            <Chip>{KIND_LABEL[trial.kind]}</Chip>
            {trial.rankTrial && <Chip tone="gold">⚑ Rank Trial</Chip>}
            {trial.solo && <Chip tone="red">Alone</Chip>}
            {trial.cleanOnly && <Chip tone="red">Vows clean</Chip>}
            {trial.requireBuff && <Chip tone="red">During {trial.requireBuff}</Chip>}
            {!trial.targets && trial.requireElite && <Chip tone="red">Elite foe</Chip>}
            {(trial.count ?? 1) > 1 && <Chip>×{trial.count}</Chip>}
          </div>
          <p className="mt-1.5 text-[0.95rem] text-foreground/90">
            <Linkify text={trial.objective} />
          </p>
          {trial.text && (
            <p className="mt-2 border-l-2 border-gold/30 pl-3 font-body text-[0.92rem] italic leading-relaxed text-[#c8b878]">
              “{trial.text}”
            </p>
          )}
          {trial.milestones && (
            <div className="mt-3 flex flex-wrap gap-2">
              {trial.milestones.map((m) => (
                <span
                  key={m.count}
                  className="rounded-sm border border-gold/40 bg-black/30 px-2 py-1 text-[0.78rem] text-gold"
                >
                  {m.count} slain — <span className="font-semibold">“{m.honorific}”</span>
                </span>
              ))}
            </div>
          )}
          {trial.honorific && (
            <p className="mt-2 text-[0.82rem] text-gold">
              Honorific earned: <span className="font-semibold">“{trial.honorific}”</span>
            </p>
          )}
          {trial.completionNote && (
            <p className="mt-2 text-[0.82rem] italic text-muted-foreground">
              <Linkify text={trial.completionNote} />
            </p>
          )}
          <TrialLinks trial={trial} />
        </div>
      </div>
    </div>
  );
}
