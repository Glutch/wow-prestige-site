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
  // Potion Doc
  "Klaven Mortwake": 7053,
  Grubbis: 7361,
  "Viscous Fallout": 7079,
  "Mekgineer Thermaplugg": 7800,
  "High Tinker Mekkatorque": 7937,
  "Alchemist Arbington": 11056,
  Noxxion: 13282,
  "Cauldron Lord Bilemaw": 11075,
  "Cauldron Lord Malvinious": 11077,
  "Cauldron Lord Razarch": 11076,
  "Cauldron Lord Soulwrath": 11078,
  "Doctor Theolen Krastinov": 11261,
  Hakkar: 14834,
  // Pyromancer
  Sneed: 643,
  "Arcanist Doan": 6487,
  "Overmaster Pyron": 9026,
  "Pyromancer Loregrain": 9024,
  "Ambassador Flamelash": 9156,
  "Baron Geddon": 12056,
};

export const spellIds: Record<string, number> = {
  "Heavy Copper Maul": 7408, // the blacksmithing craft
  "Mighty Iron Hammer": 3297, // the blacksmithing craft
  "Dark Iron Pulverizer": 15292, // the Black Anvil craft
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
  // Potion Doc
  "Minor Healing Potion": 2330, // the alchemy craft
  "Free Action Potion": 6624, // the alchemy craft
  "Philosophers' Stone": 11459, // the alchemy craft (the spell keeps the odd apostrophe)
  "Flask of the Titans": 17635, // the alchemy craft
  "Crippling Poison": 3420,
  "Elixir of the Mongoose": 17571,
  "Blade Flurry": 13877,
  "Adrenaline Rush": 13750,
  // Pyromancer
  "Rough Copper Bomb": 3923, // the engineering craft
  "Goblin Sapper Charge": 12760, // the engineering craft
  "Goblin Dragon Gun": 12908, // the engineering craft
  "Arcanite Dragonling": 19830, // the engineering craft
  Pyroblast: 11366,
  Flamestrike: 2120,
  Combustion: 11129,
  Impact: 11103, // the talent whose stun the Trial of the Stagger counts
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
  // Pyromancer
  "Un'Goro Crater": 490,
  Winterspring: 618,
  // Potion Doc
  Gnomeregan: 721,
  Westfall: 40,
  Duskwood: 10,
  Maraudon: 2100,
  Scholomance: 2057,
  "Zul'Gurub": 1977,
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
  // Pyromancer
  py_goblinschool: [
    { name: "The Pledge of Secrecy", id: 3638 },
    { name: "Show Your Work", id: 3639 },
  ],
  py_pyron: [{ name: "Overmaster Pyron", id: 4262 }],
  py_chillwind: [{ name: "Chillwind Horns", id: 4809 }],
  // Potion Doc
  pd_mortwake: [{ name: "Klaven's Tower", id: 2359 }],
  pd_krastinov: [{ name: "Doctor Theolen Krastinov, the Butcher", id: 5382 }],
  pd_cauldrons: [{ name: "A Plague Upon Thee", id: 5901 }],
};

export type WowheadLink = { label: string; url: string; kind: string };

export function itemUrl(id: number) {
  return `${BASE}/item=${id}`;
}
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
