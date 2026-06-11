// Thematic gear worth chasing on each path — beyond what the deeds demand.
// Names must exist in items.ts (verified tooltip data); notes say where/why.
export type SuggestedItem = { name: string; note: string };

export const suggestedByClass: Record<string, SuggestedItem[]> = {
  mountainking: [
    {
      name: "Galgann's Fireblaster",
      note: "Galgann Firehammer, Uldaman — a Dark Iron's own gun, turned on his kin",
    },
    {
      name: "Dark Iron Pulverizer",
      note: "Smith it yourself at the Black Anvil — 18 Dark Iron Bars",
    },
    {
      name: "Diamond Flask",
      note: "Warrior quest “Voodoo Feathers” — served on the rocks",
    },
    {
      name: "Hand of Justice",
      note: "Emperor Dagran Thaurissan, Blackrock Depths",
    },
    {
      name: "Fiery Plate Gauntlets",
      note: "Blacksmithing 290 — found unfired in Blackrock Spire, finished in Everlook",
    },
    {
      name: "Dwarven Hand Cannon",
      note: "World drop — the King's thunder for your back",
    },
    {
      name: "Hammer of the Titans",
      note: "Blacksmithing 300 — Thorium and Arcanite, master's work",
    },
    {
      name: "Earthshaker",
      note: "Magmadar, Molten Core — the mountain answers",
    },
    {
      name: "Stormstrike Hammer",
      note: "Stormpike Revered — the clan's own one-hand warhammer",
    },
    {
      name: "Annihilator",
      note: "Master Axesmith 300 — a hand axe off your own anvil",
    },
    {
      name: "Deathbringer",
      note: "Onyxia's hoard — a hand axe for the off fist",
    },
    {
      name: "Crul'shorukh, Edge of Chaos",
      note: "Nefarian, Blackwing Lair — the heaviest hand axe there is",
    },
  ],
  blademaster: [
    {
      name: "Truesilver Champion",
      note: "Blacksmithing 240 — a warding champion's blade off your own anvil",
    },
    {
      name: "Diamond Flask",
      note: "Warrior quest “Voodoo Feathers” — a duelist's second wind",
    },
    {
      name: "Arcanite Champion",
      note: "Master Swordsmith craft — the smith-path's crowning blade",
    },
    {
      name: "Obsidian Edged Blade",
      note: "Molten Core — a sword so true it sharpens its bearer",
    },
    {
      name: "The Untamed Blade",
      note: "Razorgore, Blackwing Lair — fury that wakes mid-swing",
    },
  ],
};
