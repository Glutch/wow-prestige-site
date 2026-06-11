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
  beastmaster: {
    professions: {
      Skinning:
        "The wild feeds those who walk with it, and nothing is wasted. The path's own trial sends you into Un'Goro for ten devilsaur hides taken with your own knife — the wild's armor, paid for at the wild's price.",
      Leatherworking:
        "What the knife takes, the needle honors. The Devilsaur Gauntlets and Leggings are cut from thunder-lizard hide you skinned yourself — armor with no smith, no forge, and no debt to any city.",
    },
    trees: {
      "HUNTER:Beast Mastery":
        "The RPG calls beastmasters “wilderness warriors with an uncanny rapport with animals” — and Beast Mastery is that rapport made discipline. Thirty-one points sworn to the beast, not the bow: its fangs, its hide, its loyalty. The pet is not a tool; it is the other half of the hunter.",
    },
    talents: {
      "Bestial Wrath":
        "“Send your pet into a rage… While enraged, the beast does not feel pity or remorse or fear and it cannot be stopped unless killed.” The 31-point oath of the tree, sworn by 42 — the moment the bond stops being protection and becomes a weapon.",
    },
  },

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

  spiritwalker: {
    races: {
      Tauren:
        "“The only culture in Azeroth's history known to have brought forth the spirit walkers are the formerly nomadic tauren tribes,” says the Horde Player's Guide. The gift runs in Shu'halo blood — and the weight of it turns a walker's pelt snow-white over the years.",
    },
    professions: {
      Herbalism:
        "The Rite of Vision begins with gathering: well stones and ambercorn for Zarlman Two-Moons's brew. A walker who knows every root and bloom of the land gathers the Earthmother's gifts the way the seers always have.",
      Alchemy:
        "The Water of the Seers is a brew — drunk at the tribal fire, it opens the eyes to the wolf-spirit no one else can see. Alchemy is that craft carried on: waters and draughts that let the body keep pace with the spirit.",
    },
    trees: {
      "SHAMAN:Restoration":
        "The RPG calls spirit walkers “conduits from the realm of the dead to the world of the living” — and Restoration is the conduit made discipline. Thirty-one points sworn to mending, not fury: the walker is not a fighter who heals, but a place the weary stand beside.",
    },
    talents: {
      "Totemic Focus":
        "“Reduces the Mana cost of your totems by 5%” per rank — five points sworn by 17. The elements answer a gentler call for one who walks between worlds; the totems are kin, not tools.",
      "Mana Tide Totem":
        "“Summons a Mana Tide Totem… that restores mana every 3 seconds to group members.” The 31-point oath of the tree, planted by 42 — the well of spirit your kin drink from mid-battle, the Tide of Spirit the journey counts as its own rite.",
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
