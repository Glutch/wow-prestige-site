// Wowhead Classic IDs for everything the deeds reference. All IDs verified
// against classic.wowhead.com (see the addon repo's data-verification notes).
const BASE = "https://classic.wowhead.com";

export const npcIds: Record<string, number> = {
  "Grik'nir the Cold": 808,
  Vagash: 1388,
  "Chok'sul": 1210,
  "Mr. Smite": 646,
  Archaedas: 2748,
  "Margol the Rager": 5833,
  "General Angerforge": 9033,
  "Emperor Dagran Thaurissan": 9019,
  Ragnaros: 11502,
};

export const spellIds: Record<string, number> = {
  "Heavy Copper Maul": 7408, // the blacksmithing craft
  "Smelt Dark Iron": 14891,
  "Mace Stun Effect": 5530,
  "Mace Specialization": 12704,
  "Thunder Clap": 6343,
  Stoneform: 20594,
};

export const zoneIds: Record<string, number> = {
  "Dun Morogh": 1,
  "Loch Modan": 38,
  Wetlands: 11,
  Ironforge: 1537,
  "Searing Gorge": 51,
  "Blackrock Depths": 1584,
};

/** Extra per-deed quest links (verified IDs only). */
export const questsByTrial: Record<string, { name: string; id: number }[]> = {
  mk_wendigo: [{ name: "Protecting the Herd", id: 314 }],
  mk_ogre: [{ name: "WANTED: Chok'sul", id: 256 }],
};

export type WowheadLink = { label: string; url: string; kind: string };

export function npcUrl(id: number) {
  return `${BASE}/npc=${id}`;
}
export function spellUrl(id: number) {
  return `${BASE}/spell=${id}`;
}
export function zoneUrl(id: number) {
  return `${BASE}/zone=${id}`;
}
export function questUrl(id: number) {
  return `${BASE}/quest=${id}`;
}
export function npcSearchUrl(pattern: string) {
  return `${BASE}/npcs/name:${encodeURIComponent(pattern)}`;
}
