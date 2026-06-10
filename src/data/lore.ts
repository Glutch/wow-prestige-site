// Hand-written backstory for paths that have one. Every quote and fact is
// verified against warcraft.wiki.gg (WC3 manual, ability flavor, War of the
// Three Hammers, the RPG sourcebooks) — never invent lore, cite-or-cut.
export type LoreSection = {
  heading: string;
  quote?: { text: string; source: string };
  paragraphs: string[];
};

export const loreByClass: Record<string, LoreSection[]> = {
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
        "That is the whole ruleset of this path, read back as legend. The two-handed hammer that never leaves your grip, the Mace Specialization stuns counted as Storm Bolts, the Thunder Clap trials, the rite of felling an elite while Stoneform turns your skin to stone — every vow on this page is one of the four arts, enforced.",
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
        "This addon's Mountain King is that page brought to Classic Hardcore: dwarf warrior, two-handed hammer, gun on the back, Arms to the bone — and a spark you keep lit by deed, not dice.",
      ],
    },
  ],
};
