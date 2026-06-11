// Hover flavor for the identity strip: WHY this race, this craft, this
// spec — in the path's voice. Same rule as all lore here: every quoted
// line is verified (WC3 manual, ability flavor, the RPG sourcebooks);
// cite-or-cut. Paths without an entry simply show no tooltip.
export type IdentityLore = {
  races?: Record<string, string>;
  professions?: Record<string, string>;
  /** keyed "CLASSTOKEN:Tree Name", matching treeIcons */
  trees?: Record<string, string>;
  talents?: Record<string, string>;
};

export const identityLoreByClass: Record<string, IdentityLore> = {
  blademaster: {
    races: {
      Orc: "The blademasters were orcs of the ill-fated Burning Blade, the clan that “consumed itself in the throes of demonic corruption.” The survivors swore their grim oath as orcs of Thrall's new Horde and stood as his personal honor guard. Only an orc can carry that banner — or buy back that name.",
    },
    professions: {
      Blacksmithing:
        "A blademaster should know his sword from ore to edge. The path's first rite hammers out a Copper Claymore at the forge in the Valley of Honor, and the smith-road runs all the way up: a master swordsmith forges the Truesilver and Arcanite Champions with the same hands that swing them.",
    },
    trees: {
      "WARRIOR:Arms":
        "Arms is the weapon-master's discipline: one great blade, studied for a lifetime. Fury is a berserker's madness, and the shield is another vow's burden. The blademaster walks the narrow road of perfect technique — thirty-one points deep, the way of the single sword.",
    },
    talents: {
      "Sweeping Strikes":
        "The Bladestorm. “By focusing their warrior energies, blademasters can become living cyclones of fighting rage.” Sweeping Strikes is that cyclone given Classic form — one turn of the blade, and every foe within reach feels it.",
      "Sword Specialization":
        "The Mirror Image, read in steel: extra strikes that land as if a phantom swordsman swung beside you. Five points sworn by 34 — the flurry that makes one blade seem many.",
      "Mortal Strike":
        "The Critical Strike: “by channeling their potent powers in one focused strike, blademasters can cause even greater damage.” Mortal Strike is that focused strike — the one cut that decides a mak'gora.",
    },
  },

  mountainking: {
    races: {
      Dwarf:
        "“The mountain kings, or thanes as they are known in Khaz Modan, are the mightiest dwarven warriors under the mountain.” The Alliance Player's Guide restricts the path to Ironforge dwarves alone — a spark carried in stone-touched blood, and in no other.",
    },
    professions: {
      Mining:
        "The grudge is dug as much as it is fought. Ten loads of Dark Iron ore, cut with your own pick under Dark Iron crossbows in the enemy's halls — a thane swings a pick the way he swings a hammer.",
      Blacksmithing:
        "From the Heavy Copper Maul struck at the Great Forge to the enemy's own iron worked at the Black Anvil — and one day the Hammer of the Titans — the path runs through the smithy. The mountain gives ore; the thane gives it shape.",
    },
    trees: {
      "WARRIOR:Arms":
        "Arms is the weapon-master's tree, where a dwarf masters the warhammer itself — Mace Specialization lives here. Thirty-one points deep: the discipline of a thane, not the frenzy of a berserker.",
    },
    talents: {
      "Mace Specialization":
        "The Storm Bolt. “Only the mountain kings of Ironforge can hurl a hammer so hard that it stuns their enemies senseless.” Every stun your hammer lands is counted a Storm Bolt thrown — five points sworn by 36, and fifty storms make the Trial.",
    },
  },
};
