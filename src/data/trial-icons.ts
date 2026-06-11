// Per-trial icon overrides, keyed by trial id. Trials without an entry fall
// back to the generic per-kind icon in trial-card.tsx. Tokens are Wowhead CDN
// icon names — verify new ones resolve at wow.zamimg.com before adding.
export const trialIcons: Record<string, string> = {
  // ---- Blademaster ---------------------------------------------------------
  bm_debt: "spell_fire_flameblades", // the Burning Blade
  bm_firstcut: "ability_warrior_decisivestrike",
  bm_oath: "inv_bannerpvp_01", // the Horde banner, knelt before Thrall
  bm_forge: "inv_sword_21", // Copper Claymore's own icon
  bm_mirrors: "spell_magic_lesserinvisibilty", // Mirror Image
  bm_woodblade: "inv_sword_45", // Mo'grosh Toothpick
  bm_eye: "spell_shadow_evileye", // Gazz'uz and his Eye of Burning Shadow
  bm_whitemist: "ability_druid_catform", // Echeyakee, the white lion
  bm_makgora: "ability_warrior_challange", // the duel challenge
  bm_oldshape: "inv_sword_10", // Dacian Falx
  bm_critical: "ability_criticalstrike",
  bm_hellscream: "spell_nature_bloodlust", // Grom's blood curse, paid in full
  bm_purge: "ability_warrior_cleave",
  bm_islander: "ability_meleedamage", // the Affray pit brawl
  bm_tigerforge: "inv_sword_05", // Frost Tiger Blade's own icon
  bm_bladestorm: "ability_whirlwind", // Whirlwind's own icon
  bm_longedge: "inv_sword_42", // Headstriker Sword
  bm_windmaster: "spell_nature_cyclone", // Cyclonian
  bm_champion: "spell_holy_retributionaura", // Scarlet zealotry
  bm_stormblade: "inv_sword_15", // Whirlwind Sword's own icon
  bm_bladefist: "inv_weapon_hand_01", // Kargath's blade-for-a-hand
  bm_reckless: "spell_nature_ancestralguardian", // berserker fury
  bm_council: "spell_shadow_shadowbolt", // the Shadow Council
  bm_songblade: "inv_sword_41", // Ta'Kierthan Songblade
  bm_arena: "ability_warrior_punishingblow", // the Gordunni pit
  bm_falsewarchief: "inv_misc_head_orc_01", // Rend's head
  bm_doomlord: "spell_shadow_metamorphosis", // Lord Kazzak
  bm_warlord: "inv_sword_48", // High Warlord's Greatsword's own icon
  bm_mythblade: "inv_sword_50", // Ashkandi
  bm_firstdust: "inv_misc_dust_02", // the dust of the Valley of Trials

  // ---- Mountain King -------------------------------------------------------
  mk_grudge: "inv_misc_head_dwarf_01", // a Dark Iron's head
  mk_coldark: "inv_misc_head_troll_01", // Grik'nir's Frostmane trolls
  mk_oath: "inv_bannerpvp_02", // the Alliance banner, knelt at the High Seat
  mk_forge: "inv_hammer_18", // Heavy Copper Maul's own icon
  mk_dam: "inv_misc_stonetablet_05", // dwarven stonework
  mk_wendigo: "inv_misc_monsterclaw_04", // Vagash's claws
  mk_ogre: "ability_smash", // Chok'sul
  mk_smite: "inv_hammer_09", // Smite's Mighty Hammer's own icon
  mk_span: "spell_holy_prayerofhealing", // mourning the fallen of the Span
  mk_stormhammer: "spell_frost_stun", // the mace's stun
  mk_thunder: "spell_nature_thunderclap", // Thunder Clap's own icon
  mk_dragonmaw: "inv_misc_bone_orcskull_01", // Dragonmaw skulls
  mk_grimbatol: "inv_misc_head_dragon_red", // the red flight guards the gates
  mk_titans: "ability_golemthunderclap", // Archaedas the stone keeper
  mk_relic3: "inv_mace_13", // Mograine's Might
  mk_avatar: "spell_shadow_unholystrength", // Stoneform's own icon
  mk_veins: "inv_ore_mithril_01", // Dark Iron Ore's own icon
  mk_margol: "spell_nature_lightningshield", // the thunder lizard
  mk_angerforge: "ability_warrior_battleshout", // the General
  mk_blackanvil: "inv_ingot_mithril", // Dark Iron smelted at the Black Forge
  mk_usurper: "inv_crown_01", // the usurper's crown
  mk_ragnaros: "spell_fire_volcano", // the Firelord
  mk_tuf: "inv_hammer_13", // The Unstoppable Force's own icon
  mk_sulfuras: "inv_hammer_unique_sulfuras", // Sulfuras' own icon
  mk_lastcall: "inv_drink_05", // one last tankard at Thunderbrew

  // ---- Beastmaster ---------------------------------------------------------
  bst_ledger: "inv_misc_coin_02", // Venture Company profit
  bst_bond: "ability_hunter_beasttaming", // Tame Beast's own icon
  bst_name: "ability_hunter_beastsoothe", // a gentle hand for the naming
  bst_spines: "spell_nature_thorns", // thorn and spine
  bst_bloodfeather: "inv_feather_05", // Serena's bloodied feathers
  bst_pridelord: "ability_hunter_pet_cat", // Humar the black lion
  bst_venture: "trade_engineering", // Venture Company machinery
  bst_bite: "inv_weapon_bow_10", // Venomstrike's own icon
  bst_hawkcry: "ability_hunter_pet_owl", // the bird of prey
  bst_greenhills: "inv_weapon_rifle_01", // Nesingwary's safari
  bst_matriarch: "spell_nature_lightning", // Charlga's chain bolts
  bst_stampede: "ability_upgrademoonglaive", // Multi-Shot's own icon
  bst_bangalash: "ability_druid_rake", // the white king brought down
  bst_brokentooth: "inv_misc_monsterfang_01", // the broken tooth itself
  bst_wanderer: "ability_hunter_pet_bear", // Misha walks with Rexxar
  bst_predator: "ability_eyeoftheowl", // the predator's eye
  bst_timbermaw: "ability_racial_bearform", // the furbolg
  bst_thunderhides: "inv_misc_pelt_03", // Devilsaur Leather's own icon
  bst_frostsaber: "ability_mount_whitetiger", // Rak'shiri the pale stalker
  bst_thebeast: "spell_fire_lavaspawn", // the lava-bred Beast
  bst_kingmosh: "ability_hunter_pet_raptor", // the devilsaur king
  bst_beastbreaker: "spell_shadow_lifedrain02", // the Bloodlord
  bst_ancients: "inv_weapon_bow_01", // Rhok'delar's own icon
  bst_roar: "ability_physical_taunt", // a roar shared with your beast

  // ---- Spirit Walker -------------------------------------------------------
  sw_ledger: "inv_misc_bone_taurenskull_01", // a tauren skull for the Grimtotem ledger
  sw_firsttotem: "spell_nature_stoneskintotem", // the totem the trial asks for
  sw_strength: "spell_nature_strengthofearthtotem02",
  sw_vision: "spell_nature_farsight",
  sw_wisdom: "spell_nature_regenerate", // Ancestral Spirit — the dead at Red Rocks
  sw_oath: "inv_misc_horn_01",
  sw_beastspirit: "ability_hunter_beastcall",
  sw_ethereal: "spell_nature_spiritwolf", // Ghost Wolf
  sw_dream: "spell_nature_sleep",
  sw_dreamwood: "inv_staff_25", // Living Root
  sw_deepspirit: "inv_misc_monsterhead_01", // Isha Awak
  sw_freedom: "spell_holy_blessingofprotection",
  sw_ancestors: "spell_nature_undyingstrength", // Ancestral Fortitude's own icon
  sw_mourn: "ability_mount_kodo_01",
  sw_deathshead: "spell_shadow_raisedead",
  sw_coldbringer: "spell_frost_frostbolt02",
  sw_spiritlink: "spell_nature_healingwavegreater", // Chain Heal's own icon
  sw_manatide: "spell_frost_summonwaterelemental", // Mana Tide Totem's own icon
  sw_relics: "inv_mace_11", // The Hand of Antu'sul
  sw_zumrah: "inv_misc_idol_03",
  sw_redeemed: "spell_nature_removecurse", // Celebras the Cursed, uncursed
  sw_theradras: "spell_nature_earthquake",
  sw_nightmare: "spell_shadow_possession", // the Shade of Eranikus
  sw_darkreaver: "spell_shadow_deathpact", // the spirit thief
  sw_chains: "spell_shadow_brainwash", // Jin'do's Brainwash Totems
  sw_greattrees: "inv_misc_head_dragon_green",
  sw_relicslegend: "inv_mace_17", // Jin'do's Hexxer
  sw_home: "inv_misc_rune_01", // the hearthstone — the long walk home
};
