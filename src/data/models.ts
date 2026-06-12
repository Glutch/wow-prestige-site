// 3D hero models rendered by <CharacterModel> through Wowhead's Classic
// model viewer. `items` pairs are [viewerSlot, displayId] — the displayId
// comes from the item's classic.wowhead.com XML (`<icon displayId="...">`),
// NOT the item id. Verify there before editing, never guess.
//
// A correct displayId is NOT enough: the classic viewer's dataset is missing
// armor meta for some of them (e.g. all Earthfury/Tier-1 pieces), and one
// missing piece keeps the whole model from loading. Before using a displayId,
// confirm the viewer has it:
//   armor (slots 1,3-10):  https://wow.zamimg.com/modelviewer/classic/meta/armor/<slot>/<displayId>.json
//   weapons (slots 21/22): https://wow.zamimg.com/modelviewer/classic/meta/item/<displayId>.json
// must return 200, not 404.
//
// Viewer slots: 1 head, 3 shoulders, 5 chest, 6 waist, 7 legs, 8 feet,
// 9 wrists, 10 hands, 16 back, 20 robe (full-length chest — its meta lives
// under armor/20, not armor/5), 21 main hand, 22 off hand.

export type CharacterModelConfig = {
  /** Wowhead race id (3 = Dwarf) */
  race: number;
  /** 0 = male, 1 = female */
  gender: number;
  skin: number;
  face: number;
  hairStyle: number;
  hairColor: number;
  facialStyle: number;
  items: [number, number][];
  /** Viewer animation name (default "Stand"). Two-handers are sheathed on
   *  the back while standing — use a ready pose to show the blade. */
  animation?: string;
};

export const heroModels: Record<string, CharacterModelConfig> = {
  // Orc beastmaster in the Rexxar mold: Wolfshead Helm over a bare-chested
  // Warbear Harness, Devilsaur leather below — all leatherworked from beasts
  // he skinned himself — and Striker's Mark, taken from Magmadar, the
  // greatest hound in the world. Bow drawn in a ready stance.
  beastmaster: {
    race: 2,
    gender: 0,
    skin: 1,
    face: 3,
    hairStyle: 3,
    hairColor: 3,
    facialStyle: 4,
    items: [
      [1, 28987], // Wolfshead Helm (8345)
      [3, 9562], // Wild Leather Shoulders (8210)
      [5, 10883], // Warbear Harness (15064)
      [6, 7766], // Barbaric Belt (4264)
      [7, 8160], // Devilsaur Leggings (15062)
      [8, 5853], // Embossed Leather Boots (2309)
      [10, 9543], // Devilsaur Gauntlets (15063)
      [22, 30927], // Striker's Mark (17069) — bows ride the off-hand slot
    ],
    animation: "ReadyBow",
  },
  // Dwarf in Imperial Plate (smithed, as a Mountain King would), Fiery Plate
  // Gauntlets, Stormstrike Hammer main hand, Deathbringer off hand.
  // Bare head and chest — the path forbids those slots. Black Devilsaur
  // leather below, and the curved Ta'Kierthan Songblade on the back.
  blademaster: {
    race: 2,
    gender: 0,
    skin: 2,
    face: 0,
    hairStyle: 5,
    hairColor: 0,
    facialStyle: 2,
    items: [
      [6, 7766], // Barbaric Belt (4264)
      [7, 8160], // Devilsaur Leggings (15062)
      [8, 5853], // Embossed Leather Boots (2309)
      [10, 9543], // Devilsaur Gauntlets (15063)
      [21, 25120], // Ta'Kierthan Songblade (16039)
    ],
    animation: "Ready2H",
  },
  // Tauren spirit walker: the Frozen Throne's white-furred mystic. Pale pelt
  // (the last skins in the tauren male range are the white ones) and a bare
  // head — the white fur IS the omen — over Vestments of the Elements, the
  // shaman dungeon set, with the Will of Arlokk held ready. (Earthfury would
  // fit the lore better, but its displayIds have no armor meta in the
  // classic viewer — see the displayId rule in the header.)
  spiritwalker: {
    race: 6,
    gender: 0,
    skin: 18,
    face: 1,
    hairStyle: 2,
    hairColor: 0,
    facialStyle: 2,
    items: [
      [3, 30925], // Pauldrons of Elements (16669)
      [5, 31416], // Vest of Elements (16666)
      [6, 31413], // Cord of Elements (16673)
      [7, 31415], // Kilt of Elements (16668)
      [8, 31412], // Boots of Elements (16670)
      [9, 31411], // Bindings of Elements (16671)
      [10, 31414], // Gauntlets of Elements (16672)
      [21, 32612], // Will of Arlokk (19909)
    ],
    animation: "Ready2H",
  },
  // Forsaken necromancer: gaunt and bare-headed in the felcloth Robe of the
  // Void off his own loom, the Scholomance students' Necropile Mantle at the
  // shoulders, Deathmist wraps on the hands, and Darkmaster Gandling's
  // Headmaster's Charge held ready — the skull staff of the school he
  // graduated by killing.
  necromancer: {
    race: 5,
    gender: 0,
    skin: 2,
    face: 1,
    hairStyle: 3,
    hairColor: 2,
    facialStyle: 1,
    items: [
      [3, 16428], // Necropile Mantle (14633)
      [10, 34627], // Deathmist Wraps (22077)
      [20, 18834], // Robe of the Void (14153) — robes ride slot 20
      [21, 23539], // Headmaster's Charge (13937)
    ],
    animation: "Ready2H",
  },
  mountainking: {
    race: 3,
    gender: 0,
    skin: 3,
    face: 2,
    hairStyle: 6,
    hairColor: 2,
    facialStyle: 2,
    items: [
      [3, 24509], // Imperial Plate Shoulders (12428)
      [5, 24504], // Imperial Plate Chest (12422)
      [6, 5679], // Imperial Plate Belt (12424)
      [7, 24506], // Imperial Plate Leggings (12429)
      [8, 24513], // Imperial Plate Boots (12426)
      [9, 24511], // Imperial Plate Bracers (12425)
      [10, 19753], // Fiery Plate Gauntlets (12631)
      [21, 23948], // Stormstrike Hammer (19104)
      [22, 29161], // Deathbringer (17068)
    ],
  },
};

// ---- default models -------------------------------------------------------
// Every path without a hand-dressed hero still gets a 3D model: its signature
// race, bare of items. Race tokens match the addon's file tokens (Data.lua).

const RACE_IDS = {
  Human: 1,
  Orc: 2,
  Dwarf: 3,
  NightElf: 4,
  Scourge: 5,
  Tauren: 6,
  Gnome: 7,
  Troll: 8,
} as const;

type RaceToken = keyof typeof RACE_IDS;

// One curated look per race so a bare model reads as a person, not a mannequin.
const RACE_LOOKS: Record<
  RaceToken,
  Pick<CharacterModelConfig, "skin" | "face" | "hairStyle" | "hairColor" | "facialStyle">
> = {
  Human: { skin: 1, face: 2, hairStyle: 5, hairColor: 2, facialStyle: 3 },
  Orc: { skin: 2, face: 1, hairStyle: 4, hairColor: 2, facialStyle: 3 },
  Dwarf: { skin: 3, face: 2, hairStyle: 6, hairColor: 2, facialStyle: 2 },
  NightElf: { skin: 2, face: 1, hairStyle: 4, hairColor: 3, facialStyle: 2 },
  Scourge: { skin: 2, face: 1, hairStyle: 3, hairColor: 2, facialStyle: 1 },
  Tauren: { skin: 5, face: 1, hairStyle: 2, hairColor: 1, facialStyle: 2 },
  Gnome: { skin: 1, face: 1, hairStyle: 4, hairColor: 4, facialStyle: 3 },
  Troll: { skin: 1, face: 2, hairStyle: 3, hairColor: 4, facialStyle: 4 },
};

// Race-unrestricted paths still need a face for the hero panel — the race the
// fantasy conjures first.
const SIGNATURE_RACE: Record<string, RaceToken> = {
  marksman: "Dwarf",
  assassin: "Scourge",
  duelist: "Human",
  druidwild: "Tauren",
  gladiator: "Orc",
  buccaneer: "Human",
};

// Paths whose legend is a woman (Maiev's wardens, the Sisterhood of Elune).
const FEMALE_PATHS = new Set(["warden", "priestessmoon"]);

export function modelForClass(c: {
  id: string;
  races?: string[];
}): CharacterModelConfig | undefined {
  const hero = heroModels[c.id];
  if (hero) return hero;
  const race = (c.races?.[0] ?? SIGNATURE_RACE[c.id]) as RaceToken | undefined;
  if (!race || !(race in RACE_IDS)) return undefined;
  return {
    race: RACE_IDS[race],
    gender: FEMALE_PATHS.has(c.id) ? 1 : 0,
    ...RACE_LOOKS[race],
    items: [],
  };
}
