// Icon tokens for a path's identity strip: who you are, what you train,
// how you spec. Race/profession/tree slugs verified against zamimg (HTTP
// 200 sweep); talent icons resolved from the talents' own rank-1 spells
// on Wowhead Classic — never guessed.

/** Race file tokens (as the addon uses them) → zamimg icon slugs. */
export const raceIcons: Record<string, string> = {
  Orc: "race_orc_male",
  Dwarf: "race_dwarf_male",
  Human: "race_human_male",
  Gnome: "race_gnome_male",
  NightElf: "race_nightelf_male",
  Scourge: "race_scourge_male",
  Tauren: "race_tauren_male",
  Troll: "race_troll_male",
};

export const professionIcons: Record<string, string> = {
  Alchemy: "trade_alchemy",
  Blacksmithing: "trade_blacksmithing",
  Cooking: "inv_misc_food_15",
  Enchanting: "trade_engraving",
  Engineering: "trade_engineering",
  Fishing: "trade_fishing",
  Herbalism: "spell_nature_naturetouchgrow",
  Leatherworking: "trade_leatherworking",
  Mining: "trade_mining",
  Skinning: "inv_misc_pelt_wolf_01",
  Tailoring: "trade_tailoring",
};

/** Classic talent-tab icons, keyed "CLASSTOKEN:Tree Name" (in-game tab names). */
export const treeIcons: Record<string, string> = {
  "WARRIOR:Arms": "ability_rogue_eviscerate",
  "WARRIOR:Fury": "ability_warrior_innerrage",
  "ROGUE:Assassination": "ability_rogue_eviscerate",
  "ROGUE:Combat": "ability_backstab",
  "ROGUE:Subtlety": "ability_stealth",
  "HUNTER:Beast Mastery": "ability_hunter_beasttaming",
  "HUNTER:Marksmanship": "ability_marksmanship",
  "HUNTER:Survival": "ability_hunter_swiftstrike",
  "MAGE:Arcane": "spell_holy_magicalsentry",
  "MAGE:Frost": "spell_frost_frostbolt02",
  "PALADIN:Protection": "spell_holy_devotionaura",
  "PRIEST:Holy": "spell_holy_holybolt",
  "PRIEST:Shadow": "spell_shadow_shadowwordpain",
  "SHAMAN:Elemental Combat": "spell_nature_lightning",
  "SHAMAN:Restoration": "spell_nature_magicimmunity",
  "WARLOCK:Affliction": "spell_shadow_deathcoil",
  "WARLOCK:Demonology": "spell_shadow_metamorphosis",
  "DRUID:Feral Combat": "ability_racial_bearform",
};

/** Key-talent icons by talent name (rank-1 talent spell icons). */
export const talentIcons: Record<string, string> = {
  // Warrior
  "Mortal Strike": "ability_warrior_savageblow",
  "Sweeping Strikes": "ability_rogue_slicedice",
  "Sword Specialization": "inv_sword_27",
  "Mace Specialization": "inv_mace_01",
  Bloodthirst: "spell_nature_bloodlust",
  "Death Wish": "spell_shadow_deathpact",
  Enrage: "spell_shadow_unholyfrenzy",
  "Dual Wield Specialization": "ability_dualwield",
  // Rogue
  "Blade Flurry": "ability_warrior_punishingblow",
  "Cold Blood": "spell_ice_lament",
  "Improved Poisons": "ability_poisons",
  Preparation: "spell_shadow_antishadow",
  Riposte: "ability_warrior_challange",
  // Hunter
  "Aimed Shot": "inv_spear_07",
  "Bestial Wrath": "ability_druid_ferociousbite",
  Deterrence: "ability_whirlwind",
  "Trueshot Aura": "ability_trueshot",
  "Wyvern Sting": "inv_spear_02",
  // Mage
  "Arcane Power": "spell_nature_lightning",
  Frostbite: "spell_frost_frostarmor",
  "Ice Block": "spell_frost_frost",
  "Presence of Mind": "spell_nature_enchantarmor",
  // Paladin
  "Blessing of Sanctuary": "spell_nature_lightningshield",
  // Priest
  "Holy Nova": "spell_holy_holynova",
  Lightwell: "spell_holy_summonlightwell",
  "Mind Flay": "spell_shadow_siphonmana",
  // Shaman
  "Elemental Mastery": "spell_nature_wispheal",
  "Mana Tide Totem": "spell_frost_summonwaterelemental",
  "Totemic Focus": "spell_nature_moonglow",
  // Warlock
  "Master Summoner": "spell_shadow_impphaseshift",
  "Siphon Life": "spell_shadow_requiem",
  "Soul Link": "spell_shadow_gathershadows",
  // Druid
  "Feral Charge": "ability_hunter_pet_bear",
  "Leader of the Pack": "spell_nature_unyeildingstamina",
};

export const RACE_LABEL: Record<string, string> = {
  NightElf: "Night Elf",
  Scourge: "Undead",
};
