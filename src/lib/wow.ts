import classesJson from "@/data/classes.json";
import { RACE_LABEL } from "@/data/identity";
import type { WowItem } from "@/data/items";

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
  /** true = always; "combat" = only while fighting (resummon windows are free). */
  requirePet?: boolean | "combat";
  /** With requirePet "combat": player buffs that stand in for the pet (Demonic Sacrifice). */
  petGraceAuras?: string[];
  /** Auras that must never touch the player — the vow breaks while one is active. */
  forbidAuras?: { label?: string; names: string[]; okDetail?: string };
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
  /** Item name -> verified Classic item ID, for every item a deed names. */
  itemIds?: Record<string, number>;
  suggested?: { id: number; name: string; note: string }[];
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

/** Classic class colors, keyed by the addon's class tokens. */
export const CLASS_COLORS: Record<string, string> = {
  WARRIOR: "#c79c6e",
  HUNTER: "#abd473",
  ROGUE: "#fff569",
  MAGE: "#69ccf0",
  PRIEST: "#ffffff",
  WARLOCK: "#9482c9",
  SHAMAN: "#0070de",
  PALADIN: "#f58cba",
  DRUID: "#ff7d0a",
};

/** "WARRIOR" -> "Warrior" */
export function classTokenLabel(token: string): string {
  return token[0] + token.slice(1).toLowerCase();
}

/** "NightElf" -> "Night Elf", "Scourge" -> "Undead"; unknown tokens pass through. */
export function raceLabel(token: string): string {
  return RACE_LABEL[token] ?? token;
}

/** All titles a class's trials award, in journey order: milestone honorifics
 *  first (the lifelong counter leads the file), then deed honorifics. */
export function honorificsOf(c: PrestigeClass): string[] {
  return (c.trials ?? []).flatMap((t) => [
    ...(t.milestones?.map((m) => m.honorific).filter(Boolean) ?? []),
    ...(t.honorific ? [t.honorific] : []),
  ]) as string[];
}

/** Quality-colored border classes for item slots. */
export const SLOT_RING: Record<WowItem["quality"], string> = {
  poor: "border-quality-poor/50",
  common: "border-quality-common/40",
  uncommon: "border-quality-uncommon/60",
  rare: "border-quality-rare/70",
  epic: "border-quality-epic/70",
  legendary: "border-quality-legendary/80 shadow-[0_0_14px_rgba(255,128,0,0.35)]",
};

/** Pretty-print the machine-enforced ruleset of a class. */
export function ruleLines(c: PrestigeClass): string[] {
  const lines: string[] = [];
  if (c.races) lines.push(`Race: ${c.races.map(raceLabel).join(" or ")}`);
  if (c.classes) lines.push(`Class: ${c.classes.map(classTokenLabel).join(" or ")}`);
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
  if (c.requirePet === "combat")
    lines.push("Never fight without your servant — between fights it may be raised anew");
  else if (c.requirePet) lines.push("A companion at your side, always");
  if (c.forbidAuras)
    lines.push(
      `${c.forbidAuras.label ?? "Forbidden"}: ${c.forbidAuras.names
        .map((n) => (n === "Food" ? "no food" : n === "First Aid" ? "no bandages" : `no ${n}`))
        .join(", ")}`,
    );
  if (c.forbidPet) lines.push("No pet — you fight alone");
  if (c.requireProfession)
    lines.push(`Must train ${c.requireProfession.join(" or ")}`);
  return lines;
}
