import classesJson from "@/data/classes.json";

export type Trial = {
  id: string;
  chapter: number;
  kind:
    | "kill"
    | "counter"
    | "proc"
    | "multihit"
    | "loot"
    | "equip"
    | "cast"
    | "emote"
    | "visit";
  name: string;
  objective: string;
  text?: string;
  level?: number;
  rankTrial?: boolean;
  honorific?: string;
  completionNote?: string;
  epitaph?: string;
  targets?: string[];
  pattern?: string | string[];
  count?: number;
  hits?: number;
  items?: string[];
  item?: string;
  spell?: string;
  aura?: string;
  emote?: string;
  zone?: string;
  subzone?: string;
  solo?: boolean;
  cleanOnly?: boolean;
  requireBuff?: string;
  requireElite?: boolean;
  milestones?: { count: number; honorific?: string }[];
};

export type TalentSpec = {
  tree?: { name: string; points: number };
  keys?: { name: string; level: number; rank?: number }[];
};

export type PrestigeClass = {
  id: string;
  name: string;
  source: string;
  faction: "Alliance" | "Horde" | "Both";
  icon: string;
  fantasy: string;
  races?: string[];
  classes?: string[];
  minLevel?: number;
  forbidSlots?: string[];
  maxArmor?: string;
  weaponTypes?: string[];
  weaponProfiles?: {
    label?: string;
    profiles: { types: string[]; dual?: boolean }[];
  };
  requireDualWield?: boolean;
  forbidShield?: boolean;
  rangedTypes?: string[];
  requirePet?: boolean;
  forbidPet?: boolean;
  requireProfession?: string[];
  profession?: string[];
  /** Single-spec paths: a TalentSpec. Multi-class paths: keyed by class token. */
  talents?: TalentSpec | Record<string, TalentSpec>;
  honorRules?: string[];
  breakCry?: string;
  restoreCry?: string;
  chapters?: { index: number; title: string }[];
  trials?: Trial[];
};

export const prestigeClasses = classesJson as unknown as PrestigeClass[];

export function slugOf(c: PrestigeClass): string {
  return c.name
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function classBySlug(slug: string): PrestigeClass | undefined {
  return prestigeClasses.find((c) => slugOf(c) === slug);
}

export function iconUrl(token: string, size: "large" | "medium" = "large") {
  return `https://wow.zamimg.com/images/wow/icons/${size}/${token}.jpg`;
}

export const RANKS = ["Initiate", "Disciple", "Exemplar", "Paragon"] as const;

export const FACTION_TEXT: Record<string, string> = {
  Alliance: "text-alliance",
  Horde: "text-horde",
  Both: "text-gold",
};

/** Pretty-print the machine-enforced ruleset of a class. */
export function ruleLines(c: PrestigeClass): string[] {
  const lines: string[] = [];
  if (c.races) lines.push(`Race: ${c.races.join(" or ").replace("NightElf", "Night Elf")}`);
  if (c.classes) lines.push(`Class: ${c.classes.map(t => t[0] + t.slice(1).toLowerCase()).join(" or ")}`);
  if (c.minLevel) lines.push(`Level ${c.minLevel}+`);
  for (const slot of c.forbidSlots ?? [])
    lines.push(`No ${slot.replace("Slot", "").toLowerCase()} armor — the slot stays empty`);
  if (c.maxArmor) lines.push(`Armor no heavier than ${c.maxArmor}`);
  if (c.weaponTypes) lines.push(`Weapons: ${c.weaponTypes.join(", ")} only`);
  if (c.weaponProfiles)
    lines.push(
      `Weapons: ${
        c.weaponProfiles.label ??
        c.weaponProfiles.profiles
          .map((p) => p.types.join(" + ") + (p.dual ? " (both hands)" : ""))
          .join(", or ")
      }`,
    );
  if (c.requireDualWield) lines.push("A weapon in each hand, always");
  if (c.forbidShield) lines.push("Never raise a shield");
  if (c.rangedTypes) lines.push(`Ranged slot: ${c.rangedTypes.join(" or ")}`);
  if (c.requirePet) lines.push("A companion at your side, always");
  if (c.forbidPet) lines.push("No pet — you fight alone");
  if (c.requireProfession)
    lines.push(`Must train ${c.requireProfession.join(" or ")}`);
  return lines;
}
