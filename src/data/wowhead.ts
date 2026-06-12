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
  // Spirit Walker
  '"Squealer" Thornmantle': 3229,
  Ishamuhale: 3257,
  "Isha Awak": 3476,
  "Mutanus the Devourer": 3654,
  "Arnak Grimtotem": 10896,
  "Amnennar the Coldbringer": 7358,
  "Witch Doctor Zum'rah": 7271,
  "Celebras the Cursed": 12225,
  "Princess Theradras": 12201,
  "Shade of Eranikus": 5709,
  "Death Knight Darkreaver": 14516,
  "Jin'do the Hexxer": 11380,
  Ysondre: 14887,
  Lethon: 14888,
  Emeriss: 14889,
  Taerar: 14890,
  // Necromancer
  "Captain Melrache": 1665,
  "Archmage Arugal": 4275,
  "Thule Ravenclaw": 1947,
  "High Inquisitor Whitemane": 3977,
  "Araj the Summoner": 1852,
  "Ras Frostwhisper": 10508,
  "Darkmaster Gandling": 1853,
  "Kel'Thuzad": 15990,
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
  // Spirit Walker
  "Stoneskin Totem": 8071,
  "Ghost Wolf": 2645,
  "Chain Heal": 1064,
  "Mana Tide Totem": 16190,
  "Ancestral Fortitude": 16177,
  // Necromancer
  "Summon Imp": 688,
  "Summon Felhunter": 691,
  Cannibalize: 20577,
  "Health Funnel": 755,
  "Drain Life": 689,
  "Rain of Fire": 5740,
  "Soul Link": 19028,
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
  // Spirit Walker
  Mulgore: 215,
  "Thunder Bluff": 1638,
  // Necromancer
  "Tirisfal Glades": 85,
  "Silverpine Forest": 130,
  Undercity: 1497,
  "Western Plaguelands": 28,
};

/** Extra per-deed quest links (verified IDs only). */
export const questsByTrial: Record<string, { name: string; id: number }[]> = {
  mk_wendigo: [{ name: "Protecting the Herd", id: 314 }],
  mk_ogre: [{ name: "WANTED: Chok'sul", id: 256 }],
  bm_whitemist: [{ name: "Echeyakee", id: 881 }],
  bm_islander: [{ name: "The Affray", id: 1719 }],
  bm_windmaster: [{ name: "The Windwatcher", id: 1791 }],
  bm_stormblade: [{ name: "Whirlwind Weapon", id: 1792 }],
  // Spirit Walker
  sw_firsttotem: [{ name: "Call of Earth", id: 1519 }],
  sw_strength: [{ name: "Rite of Strength", id: 757 }],
  sw_vision: [{ name: "Rite of Vision", id: 772 }],
  sw_wisdom: [{ name: "Rite of Wisdom", id: 773 }],
  sw_beastspirit: [{ name: "Ishamuhale", id: 882 }],
  sw_deepspirit: [{ name: "Isha Awak", id: 873 }],
  sw_dreamwood: [{ name: "Leaders of the Fang", id: 914 }],
  sw_freedom: [
    { name: "Wanted - Arnak Grimtotem", id: 5147 },
    { name: "Free at Last", id: 4904 },
  ],
  sw_coldbringer: [{ name: "Bring the End", id: 3341 }],
  sw_redeemed: [
    { name: "Legends of Maraudon", id: 7044 },
    { name: "The Scepter of Celebras", id: 7046 },
  ],
  sw_theradras: [
    { name: "Corruption of Earth and Seed", id: 7064 },
    { name: "Seed of Life", id: 7066 },
  ],
  sw_darkreaver: [{ name: "The Darkreaver Menace", id: 7668 }],
  // Necromancer
  nc_melrache: [{ name: "At War With The Scarlet Crusade", id: 372 }],
  nc_arugal: [{ name: "Arugal Must Die", id: 1014 }],
  nc_araj: [{ name: "Araj's Scarab", id: 5804 }],
  nc_kelthuzad: [{ name: "The Fall of Kel'Thuzad", id: 9120 }],
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
