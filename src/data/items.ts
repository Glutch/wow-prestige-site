// Classic Era item data for in-game-style tooltips. Every line verified
// against classic.wowhead.com / warcraft.wiki.gg (vanilla values).
export type Quality =
  | "poor"
  | "common"
  | "uncommon"
  | "rare"
  | "epic"
  | "legendary";

export type WowItem = {
  id: number;
  name: string;
  quality: Quality;
  icon: string;
  bind?: string;
  unique?: boolean;
  slot?: string;
  type?: string;
  damage?: string;
  speed?: string;
  dps?: string;
  stats?: string[];
  durability?: string;
  requires?: string;
  effects?: string[];
  maxStack?: number;
  flavor?: string;
};

export const items: WowItem[] = [
  {
    id: 7230,
    name: "Smite's Mighty Hammer",
    quality: "rare",
    icon: "inv_hammer_09",
    bind: "Binds when picked up",
    slot: "Two-Hand",
    type: "Mace",
    damage: "55 - 83 Damage",
    speed: "Speed 3.50",
    dps: "(19.7 damage per second)",
    stats: ["+11 Strength", "+4 Agility"],
    durability: "Durability 80 / 80",
    requires: "Requires Level 18",
  },
  {
    id: 7723,
    name: "Mograine's Might",
    quality: "rare",
    icon: "inv_mace_13",
    bind: "Binds when picked up",
    slot: "Two-Hand",
    type: "Mace",
    damage: "87 - 131 Damage",
    speed: "Speed 2.80",
    dps: "(38.9 damage per second)",
    stats: ["+17 Stamina", "+16 Spirit"],
    durability: "Durability 100 / 100",
    requires: "Requires Level 39",
  },
  {
    id: 9413,
    name: "The Rockpounder",
    quality: "rare",
    icon: "inv_hammer_12",
    bind: "Binds when picked up",
    slot: "Two-Hand",
    type: "Mace",
    damage: "126 - 190 Damage",
    speed: "Speed 3.70",
    dps: "(42.7 damage per second)",
    stats: ["+5 Strength"],
    durability: "Durability 100 / 100",
    requires: "Requires Level 44",
    effects: ["Equip: Improves your chance to get a critical strike by 2%."],
  },
  {
    id: 19323,
    name: "The Unstoppable Force",
    quality: "epic",
    icon: "inv_hammer_13",
    bind: "Binds when picked up",
    unique: true,
    slot: "Two-Hand",
    type: "Mace",
    damage: "175 - 292 Damage",
    speed: "Speed 3.80",
    dps: "(61.4 damage per second)",
    stats: ["+19 Strength", "+15 Stamina"],
    durability: "Durability 120 / 120",
    requires: "Requires Level 60",
    effects: [
      "Equip: Improves your chance to get a critical strike by 2%.",
      "Chance on hit: Stuns target for 1 sec.",
    ],
  },
  {
    id: 17182,
    name: "Sulfuras, Hand of Ragnaros",
    quality: "legendary",
    icon: "inv_hammer_unique_sulfuras",
    bind: "Binds when picked up",
    unique: true,
    slot: "Two-Hand",
    type: "Mace",
    damage: "223 - 372 Damage",
    speed: "Speed 3.70",
    dps: "(80.4 damage per second)",
    stats: ["+12 Strength", "+12 Stamina", "+30 Fire Resistance"],
    durability: "Durability 145 / 145",
    requires: "Requires Level 60",
    effects: [
      "Chance on hit: Hurls a fiery ball that causes 273 to 333 Fire damage and an additional 75 damage over 10 sec.",
      "Equip: Deals 5 Fire damage to anyone who strikes you with a melee attack.",
    ],
  },
  {
    id: 11684,
    name: "Ironfoe",
    quality: "epic",
    icon: "spell_frost_frostbrand",
    bind: "Binds when picked up",
    unique: true,
    slot: "Main Hand",
    type: "Mace",
    damage: "73 - 136 Damage",
    speed: "Speed 2.40",
    dps: "(43.5 damage per second)",
    durability: "Durability 105 / 105",
    requires: "Requires Level 55",
    effects: ["Chance on hit: Grants 2 extra attacks on your next swing."],
  },
  {
    id: 6214,
    name: "Heavy Copper Maul",
    quality: "common",
    icon: "inv_hammer_18",
    slot: "Two-Hand",
    type: "Mace",
    damage: "21 - 32 Damage",
    speed: "Speed 2.80",
    dps: "(9.5 damage per second)",
    durability: "Durability 55 / 55",
    requires: "Requires Level 11",
  },
  {
    id: 11370,
    name: "Dark Iron Ore",
    quality: "common",
    icon: "inv_ore_mithril_01",
    maxStack: 10,
  },
  {
    id: 9412,
    name: "Galgann's Fireblaster",
    quality: "rare",
    icon: "inv_weapon_rifle_07",
    bind: "Binds when picked up",
    slot: "Ranged",
    type: "Gun",
    damage: "44 - 84 Damage",
    speed: "Speed 2.60",
    dps: "(24.6 damage per second)",
    durability: "Durability 75 / 75",
    requires: "Requires Level 42",
    effects: [
      "Equip: Chance to strike your ranged target with a Fire Blast for 12 to 18 Fire damage.",
    ],
  },
  {
    id: 11608,
    name: "Dark Iron Pulverizer",
    quality: "rare",
    icon: "inv_hammer_09",
    bind: "Binds when equipped",
    slot: "Two-Hand",
    type: "Mace",
    damage: "140 - 211 Damage",
    speed: "Speed 3.70",
    dps: "(47.4 damage per second)",
    durability: "Durability 100 / 100",
    requires: "Requires Level 50",
    effects: ["Chance on hit: Stuns target for 8 sec."],
  },
  {
    id: 20130,
    name: "Diamond Flask",
    quality: "rare",
    icon: "inv_drink_01",
    bind: "Binds when picked up",
    slot: "Trinket",
    effects: [
      "Use: Restores 9 health every 5 sec and increases your Strength by 75. Lasts 1 min. (6 Min Cooldown)",
    ],
    flavor: "Served on the rocks.",
  },
  {
    id: 11815,
    name: "Hand of Justice",
    quality: "rare",
    icon: "inv_jewelry_talisman_01",
    bind: "Binds when picked up",
    unique: true,
    slot: "Trinket",
    requires: "Requires Level 53",
    effects: [
      "Equip: 2% chance on melee hit to gain 1 extra attack.",
      "Equip: +20 Attack Power.",
    ],
  },
  {
    id: 12631,
    name: "Fiery Plate Gauntlets",
    quality: "rare",
    icon: "inv_gauntlets_03",
    bind: "Binds when equipped",
    slot: "Hands",
    type: "Plate",
    stats: ["379 Armor", "+10 Fire Resistance"],
    durability: "Durability 45 / 45",
    requires: "Requires Level 53",
    effects: ["Equip: Adds 4 fire damage to your weapon attack."],
  },
  {
    id: 2099,
    name: "Dwarven Hand Cannon",
    quality: "epic",
    icon: "inv_weapon_rifle_09",
    bind: "Binds when equipped",
    slot: "Ranged",
    type: "Gun",
    damage: "66 - 124 Damage",
    speed: "Speed 2.90",
    dps: "(32.8 damage per second)",
    durability: "Durability 90 / 90",
    requires: "Requires Level 53",
    effects: [
      "Equip: Chance to strike your ranged target with a Flaming Cannonball for 33 to 49 Fire damage.",
    ],
  },
  {
    id: 12796,
    name: "Hammer of the Titans",
    quality: "rare",
    icon: "inv_hammer_09",
    bind: "Binds when equipped",
    slot: "Two-Hand",
    type: "Mace",
    damage: "163 - 246 Damage",
    speed: "Speed 3.80",
    dps: "(53.8 damage per second)",
    stats: ["+15 Strength"],
    durability: "Durability 100 / 100",
    requires: "Requires Level 58",
    effects: ["Chance on hit: Stuns target for 3 sec."],
  },
  {
    id: 17073,
    name: "Earthshaker",
    quality: "epic",
    icon: "inv_hammer_04",
    bind: "Binds when picked up",
    slot: "Two-Hand",
    type: "Mace",
    damage: "175 - 263 Damage",
    speed: "Speed 3.50",
    dps: "(62.6 damage per second)",
    durability: "Durability 120 / 120",
    requires: "Requires Level 60",
    effects: [
      "Chance on hit: Knocks down all nearby enemies for 3 sec.",
      "Equip: +22 Attack Power.",
    ],
  },
];

export const itemByName = new Map(items.map((i) => [i.name, i]));
