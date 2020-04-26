import { Scenario } from "../models";
import { MonsterType } from "../enums";

export const SPECIAL_RULES = {
    living_corpse_two_levels_extra: {
        description:
            "All living corpses are two levels higher than the scenario level, up to a max of 7",
        affected_deck: "Living Corpse",
        extra_levels: 2,
    },
};

export const scenarios: Scenario[] = [
    {
        id: 1,
        name: "Black Barrow",
        monsters: [
            MonsterType.BanditGuard,
            MonsterType.BanditArcher,
            MonsterType.LivingBones,
        ],
    },
    {
        id: 2,
        name: "Barrow Lair",
        monsters: [
            MonsterType.BanditArcher,
            MonsterType.BanditCommander,
            MonsterType.LivingBones,
            MonsterType.LivingCorpse,
        ],
    },
    {
        id: 3,
        name: "Inox Encampment",
        monsters: [
            MonsterType.InoxGuard,
            MonsterType.InoxArcher,
            MonsterType.InoxShaman,
        ],
    },
    {
        id: 4,
        name: "Crypt of the Damned",
        monsters: [
            MonsterType.LivingBones,
            MonsterType.BanditArcher,
            MonsterType.Cultist,
            MonsterType.EarthDemon,
            MonsterType.WindDemon,
        ],
    },
    {
        id: 5,
        name: "Ruinous Crypt",
        monsters: [
            MonsterType.Cultist,
            MonsterType.LivingBones,
            MonsterType.NightDemon,
            MonsterType.FlameDemon,
            MonsterType.FrostDemon,
        ],
    },
    {
        id: 6,
        name: "Decaying Crypt",
        monsters: [
            MonsterType.LivingBones,
            MonsterType.LivingCorpse,
            MonsterType.LivingSpirit,
        ],
    },
    {
        id: 7,
        name: "Vibrant Grotto",
        monsters: [
            MonsterType.ForestImp,
            MonsterType.CaveBear,
            MonsterType.InoxShaman,
            MonsterType.EarthDemon,
        ],
    },
    {
        id: 8,
        name: "Gloomhaven Warehouse",
        monsters: [
            MonsterType.LivingBones,
            MonsterType.LivingCorpse,
            MonsterType.InoxBodyguard,
        ],
    },
    {
        id: 9,
        name: "Diamond Mine",
        monsters: [
            MonsterType.Hound,
            MonsterType.VermlingScout,
            MonsterType.MercilessOverseer,
        ],
    },
    {
        id: 10,
        name: "Plane of Elemental Power",
        monsters: [
            MonsterType.FlameDemon,
            MonsterType.EarthDemon,
            MonsterType.SunDemon,
        ],
    },
    {
        id: 11,
        name: "Gloomhaven Square A",
        monsters: [
            MonsterType.LivingBones,
            MonsterType.LivingCorpse,
            MonsterType.CityGuard,
            MonsterType.CityArcher,
            MonsterType.CaptainOfTheGuard,
        ],
    },
    {
        id: 12,
        name: "Gloomhaven Square B",
        monsters: [
            MonsterType.LivingBones,
            MonsterType.LivingCorpse,
            MonsterType.Cultist,
            MonsterType.CityGuard,
            MonsterType.CityArcher,
            MonsterType.Jekserah,
        ],
    },
    {
        id: 13,
        name: "Temple of the Seer",
        monsters: [
            MonsterType.StoneGolem,
            MonsterType.CaveBear,
            MonsterType.LivingSpirit,
            MonsterType.SpittingDrake,
        ],
    },
    {
        id: 14,
        name: "Frozen Hollow",
        monsters: [
            MonsterType.Hound,
            MonsterType.LivingSpirit,
            MonsterType.LivingSpirit,
            MonsterType.FrostDemon,
        ],
    },
    {
        id: 15,
        name: "Shrine of Strength",
        monsters: [
            MonsterType.StoneGolem,
            MonsterType.SavvasIcestorm,
            MonsterType.FrostDemon,
            MonsterType.WindDemon,
            MonsterType.HarrowerInfester,
        ],
    },
    {
        id: 16,
        name: "Mountain Pass",
        monsters: [
            MonsterType.EarthDemon,
            MonsterType.WindDemon,
            MonsterType.InoxGuard,
            MonsterType.InoxArcher,
        ],
    },
    {
        id: 17,
        name: "Lost Island",
        monsters: [
            MonsterType.VermlingScout,
            MonsterType.VermlingShaman,
            MonsterType.CaveBear,
        ],
    },
    {
        id: 18,
        name: "Abandoned Sewers",
        monsters: [
            MonsterType.GiantViper,
            MonsterType.Ooze,
            MonsterType.VermlingScout,
        ],
    },
    {
        id: 19,
        name: "Forgotten Crypt",
        monsters: [
            MonsterType.Cultist,
            MonsterType.LivingBones,
            MonsterType.LivingSpirit,
            MonsterType.LivingCorpse,
        ],
    },
    {
        id: 20,
        name: "Necromancer's Sanctum",
        monsters: [
            MonsterType.LivingBones,
            MonsterType.Cultist,
            MonsterType.NightDemon,
            MonsterType.LivingCorpse,
            MonsterType.Jekserah,
        ],
    },
    {
        id: 21,
        name: "Infernal Throne",
        monsters: [
            MonsterType.SunDemon,
            MonsterType.FrostDemon,
            MonsterType.NightDemon,
            MonsterType.WindDemon,
            MonsterType.EarthDemon,
            MonsterType.FlameDemon,
            MonsterType.PrimeDemon,
        ],
    },
    {
        id: 22,
        name: "Temple of the Elements",
        monsters: [
            MonsterType.LivingBones,
            MonsterType.Cultist,
            MonsterType.EarthDemon,
            MonsterType.FlameDemon,
            MonsterType.FrostDemon,
            MonsterType.WindDemon,
        ],
    },
    {
        id: 23,
        name: "Deep Ruins",
        monsters: [
            MonsterType.StoneGolem,
            MonsterType.AncientArtillery,
            MonsterType.LivingBones,
            MonsterType.LivingSpirit,
        ],
    },
    {
        id: 24,
        name: "Echo Chamber",
        monsters: [
            MonsterType.RendingDrake,
            MonsterType.Ooze,
            MonsterType.LivingSpirit,
        ],
    },
    {
        id: 25,
        name: "Icecrag Ascent",
        monsters: [
            MonsterType.Hound,
            MonsterType.RendingDrake,
            MonsterType.SpittingDrake,
        ],
    },
    {
        id: 26,
        name: "Ancient Cistern",
        monsters: [
            MonsterType.LivingCorpse,
            MonsterType.Ooze,
            MonsterType.NightDemon,
            MonsterType.BlackImp,
        ],
    },
    {
        id: 27,
        name: "Ruinous Rift",
        monsters: [
            MonsterType.NightDemon,
            MonsterType.WindDemon,
            MonsterType.FrostDemon,
            MonsterType.SunDemon,
            MonsterType.EarthDemon,
            MonsterType.FlameDemon,
        ],
    },
    {
        id: 28,
        name: "Outer Ritual Chamber",
        monsters: [
            MonsterType.LivingCorpse,
            MonsterType.Cultist,
            MonsterType.LivingBones,
            MonsterType.NightDemon,
            MonsterType.SunDemon,
        ],
        specialRules: [SPECIAL_RULES.living_corpse_two_levels_extra],
    },
    {
        id: 29,
        name: "Sanctuary of Gloom",
        monsters: [
            MonsterType.LivingBones,
            MonsterType.LivingCorpse,
            MonsterType.LivingSpirit,
            MonsterType.BlackImp,
        ],
    },
    {
        id: 30,
        name: "Shrine of the Depths",
        monsters: [
            MonsterType.Ooze,
            MonsterType.Lurker,
            MonsterType.DeepTerror,
        ],
    },
    {
        id: 31,
        name: "Plane of the Night",
        monsters: [
            MonsterType.DeepTerror,
            MonsterType.NightDemon,
            MonsterType.BlackImp,
        ],
    },
    {
        id: 32,
        name: "Decrepit Wood",
        monsters: [
            MonsterType.HarrowerInfester,
            MonsterType.GiantViper,
            MonsterType.DeepTerror,
            MonsterType.BlackImp,
        ],
    },
    {
        id: 33,
        name: "Savvas Armory",
        monsters: [
            MonsterType.SavvasIcestorm,
            MonsterType.SavvasLavaflow,
            MonsterType.FrostDemon,
            MonsterType.FlameDemon,
            MonsterType.WindDemon,
            MonsterType.EarthDemon,
        ],
    },
    {
        id: 34,
        name: "Scorched Summit",
        monsters: [
            MonsterType.RendingDrake,
            MonsterType.SpittingDrake,
            MonsterType.ElderDrake,
        ],
    },
    {
        id: 35,
        name: "Gloomhaven Battlements A",
        monsters: [
            MonsterType.FlameDemon,
            MonsterType.FrostDemon,
            MonsterType.EarthDemon,
            MonsterType.WindDemon,
            MonsterType.CityArcher,
            MonsterType.CityGuard,
            MonsterType.CaptainOfTheGuard,
        ],
    },
    {
        id: 36,
        name: "Gloomhaven Battlements B",
        monsters: [
            MonsterType.FlameDemon,
            MonsterType.FrostDemon,
            MonsterType.EarthDemon,
            MonsterType.WindDemon,
            MonsterType.CityArcher,
            MonsterType.PrimeDemon,
        ],
    },
    {
        id: 37,
        name: "Doom Trench",
        monsters: [
            MonsterType.Lurker,
            MonsterType.DeepTerror,
            MonsterType.HarrowerInfester,
        ],
    },
    {
        id: 38,
        name: "Slave Pens",
        monsters: [
            MonsterType.InoxGuard,
            MonsterType.InoxArcher,
            MonsterType.InoxShaman,
            MonsterType.StoneGolem,
        ],
    },
    {
        id: 39,
        name: "Treacherous Divide",
        monsters: [
            MonsterType.CaveBear,
            MonsterType.FrostDemon,
            MonsterType.SpittingDrake,
            MonsterType.Cultist,
            MonsterType.LivingBones,
        ],
    },
    {
        id: 40,
        name: "Ancient Defense Network",
        monsters: [
            MonsterType.LivingCorpse,
            MonsterType.FlameDemon,
            MonsterType.CaveBear,
            MonsterType.StoneGolem,
            MonsterType.ForestImp,
        ],
    },
    {
        id: 41,
        name: "Timeworn Tomb",
        monsters: [
            MonsterType.AncientArtillery,
            MonsterType.LivingCorpse,
            MonsterType.LivingSpirit,
            MonsterType.StoneGolem,
        ],
    },
    {
        id: 42,
        name: "Realm of the Voice",
        monsters: [
            MonsterType.NightDemon,
            MonsterType.WindDemon,
            MonsterType.LivingSpirit,
        ],
    },
    {
        id: 43,
        name: "Drake Nest",
        monsters: [
            MonsterType.FlameDemon,
            MonsterType.RendingDrake,
            MonsterType.SpittingDrake,
        ],
    },
    {
        id: 44,
        name: "Tribal Assault",
        monsters: [
            MonsterType.InoxGuard,
            MonsterType.InoxArcher,
            MonsterType.Hound,
            MonsterType.InoxShaman,
        ],
    },
    {
        id: 45,
        name: "Rebel Swamp",
        monsters: [
            MonsterType.CityGuard,
            MonsterType.CityArcher,
            MonsterType.Hound,
        ],
    },
    {
        id: 46,
        name: "Nightmare Peak",
        monsters: [
            MonsterType.NightDemon,
            MonsterType.FrostDemon,
            MonsterType.WindDemon,
            MonsterType.SavvasIcestorm,
            MonsterType.WingedHorror,
        ],
    },
    {
        id: 47,
        name: "Lair of the Unseeing Eye",
        monsters: [
            MonsterType.Lurker,
            MonsterType.DeepTerror,
            MonsterType.HarrowerInfester,
            MonsterType.TheSightlessEye,
        ],
    },
    {
        id: 48,
        name: "Shadow Weald",
        monsters: [
            MonsterType.ForestImp,
            MonsterType.EarthDemon,
            MonsterType.HarrowerInfester,
            MonsterType.DarkRider,
        ],
    },
    {
        id: 49,
        name: "Rebel's Stand",
        monsters: [
            MonsterType.GiantViper,
            MonsterType.CityArcher,
            MonsterType.CityGuard,
            MonsterType.AncientArtillery,
        ],
    },
    {
        id: 50,
        name: "Ghost Fortress",
        monsters: [
            MonsterType.NightDemon,
            MonsterType.SunDemon,
            MonsterType.EarthDemon,
        ],
    },
    { id: 51, name: "The Void", monsters: [MonsterType.TheGloom] },
    {
        id: 52,
        name: "Noxious Cellar",
        monsters: [
            MonsterType.SpittingDrake,
            MonsterType.Ooze,
            MonsterType.VermlingScout,
            MonsterType.LivingCorpse,
            MonsterType.VermlingShaman,
        ],
    },
    {
        id: 53,
        name: "Crypt Basement",
        monsters: [
            MonsterType.Ooze,
            MonsterType.LivingCorpse,
            MonsterType.LivingSpirit,
            MonsterType.LivingBones,
            MonsterType.GiantViper,
        ],
    },
    {
        id: 54,
        name: "Palace of Ice",
        monsters: [
            MonsterType.CaveBear,
            MonsterType.LivingSpirit,
            MonsterType.FrostDemon,
            MonsterType.HarrowerInfester,
        ],
    },
    { id: 55, name: "Foggy Thicket", monsters: [] },
    {
        id: 56,
        name: "Bandit's Wood",
        monsters: [
            MonsterType.Hound,
            MonsterType.BanditArcher,
            MonsterType.RendingDrake,
            MonsterType.BanditGuard,
        ],
    },
    {
        id: 57,
        name: "Investigation",
        monsters: [
            MonsterType.CityGuard,
            MonsterType.CityArcher,
            MonsterType.Hound,
        ],
    },
    {
        id: 58,
        name: "Bloody Shack",
        monsters: [
            MonsterType.EarthDemon,
            MonsterType.HarrowerInfester,
            MonsterType.BlackImp,
            MonsterType.CityGuard,
        ],
    },
    {
        id: 59,
        name: "Forgotten Grove",
        monsters: [
            MonsterType.CaveBear,
            MonsterType.Hound,
            MonsterType.ForestImp,
        ],
    },
    {
        id: 60,
        name: "Alchemy Lab",
        monsters: [
            MonsterType.Ooze,
            MonsterType.GiantViper,
            MonsterType.Hound,
            MonsterType.RendingDrake,
            MonsterType.SpittingDrake,
        ],
    },
    {
        id: 61,
        name: "Fading Lighthouse",
        monsters: [
            MonsterType.Ooze,
            MonsterType.GiantViper,
            MonsterType.FrostDemon,
            MonsterType.FlameDemon,
        ],
    },
    {
        id: 62,
        name: "Pit of Souls",
        monsters: [MonsterType.LivingBones, MonsterType.LivingSpirit],
    },
    {
        id: 63,
        name: "Magma Pit",
        monsters: [
            MonsterType.VermlingScout,
            MonsterType.InoxGuard,
            MonsterType.InoxArcher,
            MonsterType.FlameDemon,
        ],
    },
    {
        id: 64,
        name: "Underwater Lagoon",
        monsters: [
            MonsterType.Ooze,
            MonsterType.ForestImp,
            MonsterType.RendingDrake,
        ],
    },
    {
        id: 65,
        name: "Sulfur Mine",
        monsters: [
            MonsterType.VermlingScout,
            MonsterType.Hound,
            MonsterType.InoxShaman,
        ],
    },
    {
        id: 66,
        name: "Clockwork Cove",
        monsters: [
            MonsterType.Ooze,
            MonsterType.AncientArtillery,
            MonsterType.LivingSpirit,
            MonsterType.StoneGolem,
        ],
    },
    {
        id: 67,
        name: "Arcane Library",
        monsters: [
            MonsterType.ForestImp,
            MonsterType.CaveBear,
            MonsterType.StoneGolem,
        ],
    },
    {
        id: 68,
        name: "Toxic Moor",
        monsters: [
            MonsterType.RendingDrake,
            MonsterType.BlackImp,
            MonsterType.GiantViper,
            MonsterType.LivingCorpse,
        ],
    },
    {
        id: 69,
        name: "Well of the Unfortunate",
        monsters: [
            MonsterType.VermlingScout,
            MonsterType.VermlingShaman,
            MonsterType.ForestImp,
            MonsterType.StoneGolem,
            MonsterType.LivingSpirit,
        ],
    },
    {
        id: 70,
        name: "Chained Isle",
        monsters: [
            MonsterType.NightDemon,
            MonsterType.WindDemon,
            MonsterType.LivingSpirit,
        ],
    },
    {
        id: 71,
        name: "Windswept Highlands",
        monsters: [
            MonsterType.SpittingDrake,
            MonsterType.WindDemon,
            MonsterType.SunDemon,
        ],
    },
    {
        id: 72,
        name: "Oozing Grove",
        monsters: [
            MonsterType.Ooze,
            MonsterType.ForestImp,
            MonsterType.GiantViper,
        ],
    },
    {
        id: 73,
        name: "Rockslide Ridge",
        monsters: [
            MonsterType.Hound,
            MonsterType.InoxArcher,
            MonsterType.AncientArtillery,
            MonsterType.InoxGuard,
            MonsterType.InoxShaman,
        ],
    },
    {
        id: 74,
        name: "Merchant Ship",
        monsters: [
            MonsterType.BanditGuard,
            MonsterType.BanditArcher,
            MonsterType.Lurker,
            MonsterType.DeepTerror,
        ],
    },
    {
        id: 75,
        name: "Overgrown Graveyard",
        monsters: [
            MonsterType.LivingBones,
            MonsterType.LivingCorpse,
            MonsterType.LivingSpirit,
        ],
    },
    {
        id: 76,
        name: "Harrower Hive",
        monsters: [
            MonsterType.GiantViper,
            MonsterType.LivingBones,
            MonsterType.NightDemon,
            MonsterType.HarrowerInfester,
        ],
    },
    {
        id: 77,
        name: "Vault of Secrets",
        monsters: [
            MonsterType.CityGuard,
            MonsterType.CityArcher,
            MonsterType.StoneGolem,
            MonsterType.Hound,
        ],
    },
    {
        id: 78,
        name: "Sacrifice Pit",
        monsters: [
            MonsterType.BanditGuard,
            MonsterType.BanditArcher,
            MonsterType.Cultist,
            MonsterType.LivingBones,
            MonsterType.BlackImp,
        ],
    },
    {
        id: 79,
        name: "Lost Temple",
        monsters: [
            MonsterType.StoneGolem,
            MonsterType.GiantViper,
            MonsterType.TheBetrayer,
        ],
    },
    {
        id: 80,
        name: "Vigil Keep",
        monsters: [
            MonsterType.CityGuard,
            MonsterType.CityArcher,
            MonsterType.AncientArtillery,
            MonsterType.Hound,
        ],
    },
    {
        id: 81,
        name: "Temple of the Eclipse",
        monsters: [
            MonsterType.NightDemon,
            MonsterType.SunDemon,
            MonsterType.StoneGolem,
            MonsterType.AncientArtillery,
            MonsterType.TheColorless,
        ],
    },
    {
        id: 82,
        name: "Burning Mountain",
        monsters: [
            MonsterType.EarthDemon,
            MonsterType.FlameDemon,
            MonsterType.StoneGolem,
        ],
    },
    {
        id: 83,
        name: "Shadows Within",
        monsters: [
            MonsterType.Hound,
            MonsterType.Cultist,
            MonsterType.LivingBones,
            MonsterType.LivingSpirit,
            MonsterType.FlameDemon,
        ],
    },
    {
        id: 84,
        name: "Crystalline Cave",
        monsters: [
            MonsterType.FlameDemon,
            MonsterType.FrostDemon,
            MonsterType.EarthDemon,
        ],
    },
    {
        id: 85,
        name: "Sun Temple",
        monsters: [
            MonsterType.Hound,
            MonsterType.BlackImp,
            MonsterType.NightDemon,
            MonsterType.SunDemon,
        ],
    },
    {
        id: 86,
        name: "Harried Village",
        monsters: [
            MonsterType.CaveBear,
            MonsterType.VermlingShaman,
            MonsterType.VermlingScout,
            MonsterType.Lurker,
        ],
    },
    {
        id: 87,
        name: "Corrupted Cove",
        monsters: [
            MonsterType.Lurker,
            MonsterType.DeepTerror,
            MonsterType.Ooze,
            MonsterType.BlackImp,
        ],
    },
    {
        id: 88,
        name: "Plane of Water",
        monsters: [
            MonsterType.FrostDemon,
            MonsterType.Ooze,
            MonsterType.Lurker,
        ],
    },
    {
        id: 89,
        name: "Syndicate Hideout",
        monsters: [
            MonsterType.BanditArcher,
            MonsterType.BanditGuard,
            MonsterType.Cultist,
            MonsterType.GiantViper,
        ],
    },
    {
        id: 90,
        name: "Demonic Rift",
        monsters: [
            MonsterType.EarthDemon,
            MonsterType.WindDemon,
            MonsterType.NightDemon,
            MonsterType.LivingSpirit,
        ],
    },
    {
        id: 91,
        name: "Wild Melee",
        monsters: [
            MonsterType.CaveBear,
            MonsterType.Hound,
            MonsterType.BanditGuard,
            MonsterType.BanditArcher,
            MonsterType.LivingSpirit,
        ],
    },
    {
        id: 92,
        name: "Back Alley Brawl",
        monsters: [
            MonsterType.BanditGuard,
            MonsterType.CityGuard,
            MonsterType.InoxGuard,
            MonsterType.BanditArcher,
            MonsterType.CityArcher,
            MonsterType.SavvasLavaflow,
            MonsterType.FlameDemon,
            MonsterType.EarthDemon,
        ],
    },
    {
        id: 93,
        name: "Sunken Vessel",
        monsters: [
            MonsterType.Lurker,
            MonsterType.FrostDemon,
            MonsterType.LivingSpirit,
        ],
    },
    {
        id: 94,
        name: "Vermling Nest",
        monsters: [
            MonsterType.Hound,
            MonsterType.VermlingScout,
            MonsterType.VermlingShaman,
            MonsterType.CaveBear,
        ],
    },
    {
        id: 95,
        name: "Payment Due",
        monsters: [
            MonsterType.DeepTerror,
            MonsterType.FlameDemon,
            MonsterType.EarthDemon,
            MonsterType.SavvasLavaflow,
        ],
    },
];
