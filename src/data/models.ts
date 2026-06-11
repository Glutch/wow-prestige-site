// 3D hero models rendered by <CharacterModel> through Wowhead's Classic
// model viewer. `items` pairs are [viewerSlot, displayId] — the displayId
// comes from the item's classic.wowhead.com XML (`<icon displayId="...">`),
// NOT the item id. Verify there before editing, never guess.
//
// Viewer slots: 1 head, 3 shoulders, 5 chest, 6 waist, 7 legs, 8 feet,
// 9 wrists, 10 hands, 16 back, 21 main hand, 22 off hand.

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
