// Hand-written backstory for paths that have one. Every quote and fact is
// verified against warcraft.wiki.gg (WC3 manual, ability flavor, War of the
// Three Hammers, the RPG sourcebooks) — never invent lore, cite-or-cut.
export type LoreSection = {
  heading: string;
  quote?: { text: string; source: string };
  paragraphs: string[];
};

export const loreByClass: Record<string, LoreSection[]> = {
  blademaster: [
    {
      heading: "The last of the Burning Blade",
      quote: {
        text: "These skilled swordsmen were once part of the ill-fated Burning Blade clan which consumed itself in the throes of demonic corruption. With their clan scattered and broken, the proud blademasters swore a grim oath to free themselves and their brethren from demonic control once and for all. Under Thrall's command, the blademasters once again joined the Horde and came to serve as the young Warchief's personal honor guard.",
        source: "Warcraft III: Reign of Chaos manual",
      },
      paragraphs: [
        "The Blademaster is the wandering swordsman of the orc Horde in Warcraft III — bare-chested, banner on his back, a single great blade in both hands. His clan's story is the orcs' whole tragedy in miniature: the Burning Blade drank deepest of the demon gift and burned itself to nothing, and the swordsmen who survived swore to spend their lives buying the name back. “Though their numbers are few, the seasoned blademasters represent an elite fighting force within the Horde.”",
        "In Classic, the cult that stole that name is everywhere an orc levels: Yarrog Baneshadow scratching sigils within sight of the Den, Skull Rock, Dreadmist Peak, Thunder Axe Fortress, the Searing Blade beneath Orgrimmar itself. That is this path's lifelong counter — the blood debt, paid one cultist at a time, and never paid in full.",
      ],
    },
    {
      heading: "The four arts",
      quote: {
        text: "By focusing their warrior energies, blademasters can become living cyclones of fighting rage.",
        source: "Bladestorm, Warcraft III",
      },
      paragraphs: [
        "Four arts define the hero. The Critical Strike: “by channeling their potent powers in one focused strike, blademasters can cause even greater damage.” The Mirror Image, “one of the blademasters' more mystical abilities — to create duplicate phantom images of themselves.” The Wind Walk, moving “so quickly that they appear to be invisible.” And the Bladestorm, the living cyclone of fighting rage.",
        "Read this path's rules back against that page: fifty critical strikes counted as the Trial of the Critical Strike, Whirlwind catching three foes at once for the Bladestorm, Zalazane's false images cut through on the Echo Isles, and the standing vow to Wind Walk — to vanish rather than die — when a fight is lost. Every trial is one of the four arts, enforced.",
      ],
    },
    {
      heading: "Mak'gora, and the pilgrim Samuro",
      paragraphs: [
        "Mak'gora is the orcish duel of honor — by the old law, a fight to the death; under Thrall's rule a thing you may survive, though the proud still choose otherwise. The duels of this journey are fought by the old law, because Hardcore already is: Hezrul Bloodmark alone at the Kolkar camps, the white lion Echeyakee called by horn, Herod bellowing for a challenger in his own armory. Alone, vows clean, one blade.",
        "The model for all of it is Samuro, “the last remaining blademaster to wear the banner of the Burning Blade clan,” who walks Kalimdor in The Frozen Throne “on a warrior's pilgrimage in search of vengeance and redemption for his fallen clan.” This path is that pilgrimage, handed to you: twenty-five deeds of vengeance and redemption, and a banner you carry by refusing to wear armor over it.",
      ],
    },
    {
      heading: "The blood debt",
      quote: {
        text: "Here lies Grommash Hellscream, Chieftain of the Warsong Clan. In many ways, the curse of our people began and ended with Grom.",
        source: "Grom's monument, Demon Fall Canyon",
      },
      paragraphs: [
        "Grommash Hellscream was the first orc to drink Mannoroth's blood, and the one who ended it: in Ashenvale he stood against the demon who had bought his people and killed him with one swing of Gorehowl, dying in the act. Thrall's last words to him stand for the whole race: “No, old friend. You've freed us all.” The canyon where it happened bears his monument, and this path sends you there to salute it.",
        "But the Legion's ledger is longer than Mannoroth. The Shadow Council that brokered the bargain festers in Jaedenar; the Burning Blade is its knife; and Lord Kazzak, the Legion's last general on Azeroth, still broods in the Tainted Scar. The journey's final line is written there — take an army if you must, but take his head.",
      ],
    },
    {
      heading: "A legacy on paper",
      quote: {
        text: "Among the Horde, orcs with the gladiator class are known as blademasters.",
        source: "World of Warcraft: The Roleplaying Game",
      },
      paragraphs: [
        "The tabletop Warcraft RPG kept the blademaster alive on paper. The Horde Player's Guide has them “lead their people into melee combat,” with many serving “as bodyguards for other Horde champions” — Thrall's own honor guard, statted out. The sourcebooks count Grom Hellscream and Thrall himself among those who walked the style.",
        "This addon's Blademaster is that page brought to Classic Hardcore: orc warrior, one two-handed sword, bare head and bare chest, Arms to the bone — and a clan name you redeem by deed, not dice.",
      ],
    },
  ],
  mountainking: [
    {
      heading: "Thanes of Khaz Modan",
      quote: {
        text: "The mountain kings, or thanes as they are known in Khaz Modan, are the mightiest dwarven warriors under the mountain. Wielding both enchanted warhammers and hand axes, these fierce fighters live to test themselves against worthy opponents. Unconcerned with their race's preoccupation with mechanical devices and mining precious minerals, Mountain Kings live only for battle. Dedicated to safeguarding the Alliance which saved their kingdom during the Second War, the mountain kings can be counted upon to rally behind any banner that stands between freedom and the ever-looming shadow of evil.",
        source: "Warcraft III: Reign of Chaos manual",
      },
      paragraphs: [
        "The Mountain King is the warrior hero of the Human Alliance in Warcraft III — a dwarf who strides out of Ironforge with a hammer in one fist and an axe in the other, shouting “For Khaz Modan!” as he wades in. The lore counts kings and generals among the thanes: Magni Bronzebeard on the throne of Ironforge, his brother Muradin, Vanndar Stormpike of Alterac Valley, Murgen Hammerfall, and High King Modimus Anvilmar of old.",
      ],
    },
    {
      heading: "Storm and stone",
      quote: {
        text: "Only the mountain kings of Ironforge can hurl a hammer so hard that it stuns their enemies senseless.",
        source: "Storm Bolt, Warcraft III",
      },
      paragraphs: [
        "Four arts define the hero. The Storm Bolt — a thrown hammer that drops a foe where he stands. The Thunder Clap, first used by Murgen Hammerfall to decimate a swathe of invading gnolls in the Alterac Mountains, slamming the ground so hard that everything around staggers. The Bash, a blow heavy enough to stun mid-swing. And the Avatar: by focusing the energies of the dwarves' newly discovered enchanted heritage, a mountain king grows in size and strength and takes on the physical characteristics of carved stone, impervious to magic.",
        "That is the whole ruleset of this path, read back as legend. The hammer that never leaves your grip — one great two-hander, or warhammer and hand axe paired in each fist, exactly the arms the unit data lists — the Mace Specialization stuns counted as Storm Bolts, the Thunder Clap trials, the rite of felling an elite while Stoneform turns your skin to stone — every vow on this page is one of the four arts, enforced.",
      ],
    },
    {
      heading: "Muradin, the mountain king who walked north",
      paragraphs: [
        "The most famous of them all fought through the Warcraft III campaign at your side. Muradin Bronzebeard — younger brother to King Magni, mentor and weapons-master to Prince Arthas himself — led a dwarven expedition into Northrend and found the runeblade Frostmourne waiting in the ice. He read the inscription and begged Arthas to walk away: “The blade is cursed! Let's get the hell out of here!” Arthas took it anyway, and when the ice shattered, a jagged shard struck Muradin down. The Alliance mourned him for years; the prince he trained became the Lich King.",
        "That is the weight a mountain king carries: he is the one who stands at the edge of the abyss and tells the powerful no — and stays standing there even when they don't listen.",
      ],
    },
    {
      heading: "The grudge of the three hammers",
      paragraphs: [
        "Long before the Dark Portal opened, High King Modimus Anvilmar died, and the three great clans of Ironforge went to war over the throne — Bronzebeard, Wildhammer, and Dark Iron. The Bronzebeards kept the mountain. The Wildhammers carved out Grim Batol. And Sorcerer-Thane Thaurissan led the Dark Irons south to Redridge to nurse his hatred, then marched back with two armies to take everything. His queen Modgud died assaulting Grim Batol, her dark magic cursing the fortress forever. Thaurissan, cornered and desperate, attempted a conjuration mighty enough to destroy his enemies — and mistakenly summoned Ragnaros the Firelord into the world.",
        "The summoning vaporized Thaurissan and shattered the land itself, birthing Blackrock Mountain, the Searing Gorge and the Burning Steppes in a single cataclysm. The surviving Dark Irons were enslaved by the very elemental their thane had called. Every chapter of this journey walks that history: the Book of Grudges, the gates of Grim Batol, Dark Iron ore dug under Dark Iron crossbows, the Emperor on his stolen throne — and at the bottom of it all, the Firelord, the grudge's final line.",
      ],
    },
    {
      heading: "A legacy on paper",
      quote: {
        text: "This is a legacy of beer, blood, booze, and thunder, of red-glinting axes and crushing hammers.",
        source: "Alliance Player's Guide (Warcraft RPG)",
      },
      paragraphs: [
        "The tabletop Warcraft RPG made the mountain king a prestige class in the Alliance Player's Guide — “the most respected and revered of the Ironforge dwarves' warriors,” representing “mighty champions of their race.” It restricts the path to Ironforge dwarves alone, grants them storm hammers, the thunderclap, and the stoneflesh of the avatar, and warns that any mountain king who abandons the Alliance is branded a traitor and outcast. The sourcebook says they draw on a powerful spark that lives within every Ironforge dwarf and fan it into a raging flame.",
        "This addon's Mountain King is that page brought to Classic Hardcore: dwarf warrior, warhammer and hand axe, gun on the back, Arms to the bone — and a spark you keep lit by deed, not dice.",
      ],
    },
  ],

  beastmaster: [
    {
      heading: "The wild's own warrior",
      quote: {
        text: "A warrior Hero, able to call forth the creatures of the forest to serve him.",
        source: "Beastmaster, Warcraft III: The Frozen Throne",
      },
      paragraphs: [
        "The Beastmaster enters Warcraft as a wolf-cowled wanderer of The Frozen Throne — a hero who fights as a pack of one: a bear at his side, quilbeasts at his heel, a hawk above the canopy, and, at his full fury, a stampede of thunder lizards loosed across the field. Solitary forest dwellers, the lore calls them, who sought the mastery of combat by mimicking the wild beasts they bonded with.",
        "The tabletop RPG made them a class of their own: “wilderness warriors with an uncanny rapport with animals,” noble savages “more at home with wild animals than sapient beings,” who over a lifetime grow claws, fangs and horns of their own. In Classic, all of that already has a name — the Beast Mastery hunter, one great beast at their side for life. This path is that page, enforced: the pet is not a tool, it is family, and it never fights alone.",
      ],
    },
    {
      heading: "Rexxar, last of the Mok'Nathal",
      quote: {
        text: "I have watched the other races... Their wars do nothing but scar the land, and drive the wild things to extinction. No, they cannot be trusted. Only beasts are above deceit.",
        source: "Rexxar, The Founding of Durotar",
      },
      paragraphs: [
        "The model for every beastmaster is Rexxar, the half-orc half-ogre of the Mok'Nathal, who found the bear Misha as an orphaned cub and never walked alone again. In The Frozen Throne's Founding of Durotar campaign he carries a dying warrior's last message to Thrall, rescues young Baine Bloodhoof from the centaur, breaks the ogre warlord Kor'gall, and stands at the front of the assault that fells Admiral Daelin Proudmoore at Theramore. They named him Champion of the Horde for it — and he walked away, back to the empty roads, with Misha at his side.",
        "In Classic he is still walking: Rexxar patrols the long roads of Desolace to this day, and this journey sends you to find him there and salute him, whatever banner you carry. The path ends the way his story does — not kneeling at a throne, but roaring beside your beast in the oldest wild place in the world, owing nothing to anyone.",
      ],
    },
    {
      heading: "Bear, quilbeast and hawk",
      paragraphs: [
        "The hero's summons are this path's trials, read back through Classic. The bear is the bond itself — the first taming at ten, the naming, and a string of legendary tames every hunter of the era knew by heart: Humar the Pridelord, the black lion of the Barrens' lone tree; Broken Tooth, whose bite never stops; Rak'shiri, the pale stalker of Winterspring. The hawk is the bird of prey you take under your wing, its Screech breaking fifty foes' nerve — eyes above the canopy, the sky fighting for you.",
        "The quilbeast is the kinship gone rotten: the quilboar hex the boar instead of walking with it, and the path culls their raiders and their matriarch Charlga Razorflank for it. And the Stampede is loosed from a bowstring — three foes under one volley, ten times over — until it comes back around in the flesh, hunting the devilsaurs of Un'Goro, blood-kin of the thunder lizards the old beastmasters called down.",
      ],
    },
    {
      heading: "The wild's ledger",
      quote: {
        text: "Send your pet into a rage... While enraged, the beast does not feel pity or remorse or fear and it cannot be stopped unless killed.",
        source: "Bestial Wrath, 31-point Beast Mastery talent",
      },
      paragraphs: [
        "Rexxar's judgment of the warring races — wars that scar the land and drive the wild things to extinction — has a corporate face in Classic: the Venture Company, strip-mining Stonetalon ridge to ridge, felling and trapping from the Barrens to Stranglethorn. They are this path's lifelong counter. The ledger opens at your first taming and never closes; every logger, trapper and overseer is one entry settled, and two hundred make you Champion of the Wilds.",
        "The darker entries are the cages. Bloodlord Mandokir rides a raptor broken to the whip, and the warlocks of Blackrock Spire keep a creature with no name — only a cage — that no taming of this age can reach. The journey demands you answer both, and mourn what falls: a beastmaster does not look away from a chained thing, and never forgives the breaking.",
      ],
    },
  ],
};
