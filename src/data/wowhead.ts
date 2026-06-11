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
  // Blademaster
  "Yarrog Baneshadow": 3183,
  "Gazz'uz": 3204,
  Zalazane: 3205,
  Echeyakee: 3475,
  "Hezrul Bloodmark": 3396,
  "Big Will": 6238,
  Cyclonian: 6239,
  Herod: 3975,
  "Skarr the Unbreakable": 11498,
  Mushgog: 11447,
  "The Razza": 11497,
  "Warchief Rend Blackhand": 10429,
  "Lord Kazzak": 12397,
};

export const spellIds: Record<string, number> = {
  "Heavy Copper Maul": 7408, // the blacksmithing craft
  "Smelt Dark Iron": 14891,
  "Mace Stun Effect": 5530,
  "Mace Specialization": 12704,
  "Thunder Clap": 6343,
  Stoneform: 20594,
  // Blademaster
  "Copper Claymore": 9983, // the blacksmithing craft
  Whirlwind: 1680,
  Recklessness: 1719,
};

export const zoneIds: Record<string, number> = {
  "Dun Morogh": 1,
  "Loch Modan": 38,
  Wetlands: 11,
  Ironforge: 1537,
  "Searing Gorge": 51,
  "Blackrock Depths": 1584,
  // Blademaster
  Durotar: 14,
  Orgrimmar: 1637,
  "The Barrens": 17,
  Ashenvale: 331,
  Desolace: 405,
  "Alterac Mountains": 36,
  Badlands: 3,
  Felwood: 361,
  Feralas: 357,
  "Blasted Lands": 4,
};

/** Extra per-deed quest links (verified IDs only). */
export const questsByTrial: Record<string, { name: string; id: number }[]> = {
  mk_wendigo: [{ name: "Protecting the Herd", id: 314 }],
  mk_ogre: [{ name: "WANTED: Chok'sul", id: 256 }],
  bm_whitemist: [{ name: "Echeyakee", id: 881 }],
  bm_islander: [{ name: "The Affray", id: 1719 }],
  bm_windmaster: [{ name: "The Windwatcher", id: 1791 }],
  bm_stormblade: [{ name: "Whirlwind Weapon", id: 1792 }],
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
