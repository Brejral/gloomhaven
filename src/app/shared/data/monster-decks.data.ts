import { MonsterDeck, MonsterDeckMapping } from "../models";
import { MonsterType, MonsterDeckType } from "../enums";

export const monsterDeckMappings: MonsterDeckMapping = {
    [MonsterType.AncientArtillery]: MonsterDeckType.AncientArtillery,
    [MonsterType.BanditArcher]: MonsterDeckType.Archer,
    [MonsterType.BanditCommander]: MonsterDeckType.Boss,
    [MonsterType.BanditGuard]: MonsterDeckType.Guard,
    [MonsterType.BlackImp]: MonsterDeckType.Imp,
    [MonsterType.CaveBear]: MonsterDeckType.CaveBear,
    [MonsterType.CaptainOfTheGuard]: MonsterDeckType.Boss,
    [MonsterType.CityArcher]: MonsterDeckType.Archer,
    [MonsterType.CityGuard]: MonsterDeckType.Guard,
    [MonsterType.Cultist]: MonsterDeckType.Cultist,
    [MonsterType.DarkRider]: MonsterDeckType.Boss,
    [MonsterType.DeepTerror]: MonsterDeckType.DeepTerror,
    [MonsterType.EarthDemon]: MonsterDeckType.EarthDemon,
    [MonsterType.ElderDrake]: MonsterDeckType.Boss,
    [MonsterType.FlameDemon]: MonsterDeckType.FlameDemon,
    [MonsterType.ForestImp]: MonsterDeckType.Imp,
    [MonsterType.FrostDemon]: MonsterDeckType.FrostDemon,
    [MonsterType.GiantViper]: MonsterDeckType.GiantViper,
    [MonsterType.HarrowerInfester]: MonsterDeckType.HarrowerInfester,
    [MonsterType.Hound]: MonsterDeckType.Hound,
    [MonsterType.InoxArcher]: MonsterDeckType.Archer,
    [MonsterType.InoxBodyguard]: MonsterDeckType.Boss,
    [MonsterType.InoxGuard]: MonsterDeckType.Guard,
    [MonsterType.InoxShaman]: MonsterDeckType.Shaman,
    [MonsterType.Jekserah]: MonsterDeckType.Boss,
    [MonsterType.LivingBones]: MonsterDeckType.LivingBones,
    [MonsterType.LivingCorpse]: MonsterDeckType.LivingCorpse,
    [MonsterType.LivingSpirit]: MonsterDeckType.LivingSpirit,
    [MonsterType.Lurker]: MonsterDeckType.Lurker,
    [MonsterType.MercilessOverseer]: MonsterDeckType.Boss,
    [MonsterType.NightDemon]: MonsterDeckType.NightDemon,
    [MonsterType.Ooze]: MonsterDeckType.Ooze,
    [MonsterType.PrimeDemon]: MonsterDeckType.Boss,
    [MonsterType.RendingDrake]: MonsterDeckType.RendingDrake,
    [MonsterType.SavvasIcestorm]: MonsterDeckType.SavvasIcestorm,
    [MonsterType.SavvasLavaflow]: MonsterDeckType.SavvasLavaflow,
    [MonsterType.SpittingDrake]: MonsterDeckType.SpittingDrake,
    [MonsterType.StoneGolem]: MonsterDeckType.StoneGolem,
    [MonsterType.SunDemon]: MonsterDeckType.SunDemon,
    [MonsterType.TheBetrayer]: MonsterDeckType.Boss,
    [MonsterType.TheColorless]: MonsterDeckType.Boss,
    [MonsterType.TheGloom]: MonsterDeckType.Boss,
    [MonsterType.TheSightlessEye]: MonsterDeckType.Boss,
    [MonsterType.VermlingScout]: MonsterDeckType.Scout,
    [MonsterType.VermlingShaman]: MonsterDeckType.Shaman,
    [MonsterType.WindDemon]: MonsterDeckType.WindDemon,
    [MonsterType.WingedHorror]: MonsterDeckType.Boss,
};

export const monsterDecks: MonsterDeck[] = [
    {
        type: MonsterDeckType.AncientArtillery,
        cards: [
            {
                shuffle: false,
                initiative: 46,
                actions: ["* %attack% -1", "** %range% +2"],
            },
            {
                shuffle: true,
                initiative: 71,
                actions: [
                    "* %attack% +0",
                    "** %range% +0",
                    "** All adjacent enemies suffer 2 damage",
                ],
            },
            {
                shuffle: true,
                initiative: 71,
                actions: [
                    "* %attack% +0",
                    "** %range% +0",
                    "** All adjacent enemies suffer 2 damage",
                ],
            },
            {
                shuffle: false,
                initiative: 37,
                actions: [
                    "* %push% 1",
                    "** Target all adjacent enemies",
                    "* %attack% -1 %aoe-triangle-2-side%",
                    "** %range% -1",
                ],
            },
            {
                shuffle: false,
                initiative: 37,
                actions: [
                    "* %push% 1",
                    "** Target all adjacent enemies",
                    "* %attack% -1 %aoe-circle%",
                    "** %range% -1",
                ],
            },
            {
                shuffle: false,
                initiative: 17,
                actions: [
                    "* %push% 2",
                    "** Target all adjacent enemies",
                    "* %shield% 2",
                    "* %attack% -2",
                    "** %range% +0",
                ],
            },
            {
                shuffle: false,
                initiative: 95,
                actions: ["* %attack% +1", "** %range% +0"],
            },
            {
                shuffle: false,
                initiative: 46,
                actions: [
                    "* %attack% -1 %aoe-triangle-2-side%",
                    "** %range% +0",
                    "** %immobilize%",
                ],
            },
        ],
    },
    {
        type: MonsterDeckType.Archer,
        cards: [
            {
                shuffle: false,
                initiative: 16,
                actions: ["* %move% +1", "* %attack% -1", "** %range% +0"],
            },
            {
                shuffle: false,
                initiative: 31,
                actions: ["* %move% +0", "* %attack% +0", "** %range% +0"],
            },
            {
                shuffle: false,
                initiative: 32,
                actions: ["* %move% +0", "* %attack% +1", "** %range% -1"],
            },
            {
                shuffle: false,
                initiative: 44,
                actions: ["* %move% -1", "* %attack% +1", "** %range% +0"],
            },
            {
                shuffle: false,
                initiative: 56,
                actions: ["* %attack% -1", "** %range% +0", "** %target% 2"],
            },
            {
                shuffle: true,
                initiative: 68,
                actions: ["* %attack% +1", "** %range% +1"],
            },
            {
                shuffle: false,
                initiative: 14,
                actions: [
                    "* %move% -1",
                    "* %attack% -1",
                    "** %range% +0",
                    "* <span class='small'> Create a 3 damage trap in an adjacent empty hex closest to an enemy </span>",
                ],
            },
            {
                shuffle: true,
                initiative: 29,
                actions: [
                    "* %move% +0",
                    "* %attack% -1",
                    "** %range% +1",
                    "** %immobilize%",
                ],
            },
        ],
    },
    {
        type: MonsterDeckType.Boss,
        cards: [
            { shuffle: false, initiative: 11, actions: ["* Special 2"] },
            { shuffle: false, initiative: 14, actions: ["* Special 2"] },
            { shuffle: true, initiative: 17, actions: ["* Special 2"] },
            { shuffle: true, initiative: 85, actions: ["* Special 1"] },
            { shuffle: false, initiative: 79, actions: ["* Special 1"] },
            { shuffle: false, initiative: 73, actions: ["* Special 1"] },
            {
                shuffle: false,
                initiative: 36,
                actions: ["* %move% +0", "* %attack% +0"],
            },
            {
                shuffle: false,
                initiative: 52,
                actions: [
                    "* %move% -1",
                    "* %attack% -1",
                    "** %range% 3",
                    "** %target% 2",
                ],
            },
        ],
    },
    {
        type: MonsterDeckType.CaveBear,
        cards: [
            {
                shuffle: false,
                initiative: 13,
                actions: ["* %move% +1", "* %attack% -1"],
            },
            {
                shuffle: false,
                initiative: 14,
                actions: ["* %move% -1", "* %attack% -1", "** %immobilize%"],
            },
            {
                shuffle: true,
                initiative: 34,
                actions: ["* %attack% +1", "** %wound%"],
            },
            {
                shuffle: false,
                initiative: 41,
                actions: ["* %move% +0", "* %attack% +0"],
            },
            {
                shuffle: false,
                initiative: 60,
                actions: ["* %move% -1", "* %attack% +1"],
            },
            {
                shuffle: true,
                initiative: 80,
                actions: [
                    "* %attack% -1",
                    "* %move% -2",
                    "* %attack% -1",
                    "** %wound%",
                ],
            },
            {
                shuffle: false,
                initiative: 61,
                actions: ["* %move% +0", "* %attack% -1", "** %target% 2"],
            },
            {
                shuffle: false,
                initiative: 3,
                actions: [
                    "* %shield% 1",
                    "* %retaliate% 2",
                    "* %heal% 2",
                    "** Self",
                ],
            },
        ],
    },
    {
        type: MonsterDeckType.Cultist,
        cards: [
            {
                shuffle: false,
                initiative: 10,
                actions: [
                    "* %move% -1",
                    "* %attack% -1",
                    "* On Death:",
                    "** %attack% +2 %aoe-circle-with-middle-black%",
                ],
            },
            {
                shuffle: false,
                initiative: 10,
                actions: [
                    "* %move% -1",
                    "* %attack% -1",
                    "* On Death:",
                    "** %attack% +2 %aoe-circle-with-middle-black%",
                ],
            },
            {
                shuffle: false,
                initiative: 27,
                actions: ["* %move% +0", "* %attack% +0"],
            },
            {
                shuffle: false,
                initiative: 27,
                actions: ["* %move% +0", "* %attack% +0"],
            },
            {
                shuffle: false,
                initiative: 39,
                actions: [
                    "* %move% -1",
                    "* %attack% +0",
                    "* %heal% 1",
                    "** Self",
                ],
            },
            {
                shuffle: true,
                initiative: 63,
                actions: [
                    "* Summon normal Living Bones",
                    "* Cultist suffers 2 damage.",
                ],
            },
            {
                shuffle: true,
                initiative: 63,
                actions: [
                    "* Summon normal Living Bones",
                    "* Cultist suffers 2 damage.",
                ],
            },
            {
                shuffle: false,
                initiative: 31,
                actions: ["* %move% -1", "* %heal% 3", "** %range% 3"],
            },
        ],
    },
    {
        type: MonsterDeckType.DeepTerror,
        cards: [
            {
                shuffle: false,
                initiative: 65,
                actions: [
                    "* %attack% +0",
                    "** %range% 3",
                    "** %target% 3",
                    "** %curse%",
                ],
            },
            {
                shuffle: true,
                initiative: 60,
                actions: [
                    "* %attack% +0 %aoe-line-6-with-black%",
                    "** %pierce% 3",
                ],
            },
            {
                shuffle: true,
                initiative: 60,
                actions: [
                    "* %attack% +0 %aoe-line-6-with-black%",
                    "** %pierce% 3",
                ],
            },
            {
                shuffle: false,
                initiative: 84,
                actions: [
                    "* %attack% -1",
                    "** Target all adjacent enemies",
                    "* %attack% +0",
                    "** %range% 4",
                    "** %wound%",
                ],
            },
            {
                shuffle: false,
                initiative: 75,
                actions: [
                    "* %attack% +0",
                    "** %poison%",
                    "* %attack% -1",
                    "** %range% 5",
                    "** %immobilize%",
                ],
            },
            {
                shuffle: false,
                initiative: 75,
                actions: [
                    "* %attack% -2",
                    "** Target all adjacent enemies",
                    "** %disarm%",
                    "* %attack% +0",
                    "** %range% 3",
                    "** %target% 2",
                ],
            },
            {
                shuffle: false,
                initiative: 96,
                actions: [
                    "* %attack% -2",
                    "** %range% 6",
                    "** Summon normal Deep Terror in a hex adjacent to the target",
                ],
            },
            {
                shuffle: false,
                initiative: 54,
                actions: [
                    "* %wound% and %poison%",
                    "** Target all adjacent enemies",
                    "* %attack% +0",
                    "** %range% 4",
                ],
            },
        ],
    },
    {
        type: MonsterDeckType.EarthDemon,
        cards: [
            {
                shuffle: true,
                initiative: 40,
                actions: [
                    "* %heal% 3",
                    "** Self",
                    "* %earth%%use_element%: <span class='small'>%immobilize% Target all enemies within %range% 3</span>",
                ],
            },
            {
                shuffle: true,
                initiative: 42,
                actions: ["* %move% +1", "* %attack% -1"],
            },
            {
                shuffle: false,
                initiative: 62,
                actions: ["* %move% +0", "* %attack% +0", "* %earth%"],
            },
            {
                shuffle: false,
                initiative: 71,
                actions: [
                    "* %attack% +0",
                    "** %range% 4",
                    "** %earth%%use_element%: %target% 2",
                ],
            },
            {
                shuffle: false,
                initiative: 83,
                actions: ["* %move% -1", "* %attack% +1", "* %earth%"],
            },
            {
                shuffle: false,
                initiative: 93,
                actions: [
                    "* %move% -1",
                    "* %attack% -1",
                    "** Target all adjacent enemies",
                    "* %earth%%use_element%: %push% 1",
                ],
            },
            {
                shuffle: false,
                initiative: 79,
                actions: [
                    "* %move% +1",
                    "* %attack% +0",
                    "** %air%%use_element%: -2 %attack%",
                ],
            },
            {
                shuffle: false,
                initiative: 87,
                actions: [
                    "* %move% +0",
                    "* %attack% -1 <div class='collapse'>%aoe-4-with-black%</div>",
                    "* %any%%use_element%: %earth%",
                ],
            },
        ],
    },
    {
        type: MonsterDeckType.FlameDemon,
        cards: [
            {
                shuffle: false,
                initiative: 3,
                actions: [
                    "* %move% +1",
                    "* %attack% -1",
                    "** %range% +0",
                    "* %fire%",
                ],
            },
            {
                shuffle: false,
                initiative: 24,
                actions: [
                    "* %move% +0",
                    "* %attack% +0",
                    "** %range% +0",
                    "* %fire%",
                ],
            },
            {
                shuffle: true,
                initiative: 46,
                actions: [
                    "* %attack% +0",
                    "** %range% +0",
                    "** %fire%%use_element%:  %aoe-circle%",
                ],
            },
            {
                shuffle: false,
                initiative: 49,
                actions: [
                    "* %attack% +0 %aoe-line-3-with-black%",
                    "** <table align='center'><tr><td>%fire%%use_element%:</td> <td> +1 %attack% <br> %wound% </td> </tr> </table>",
                ],
            },
            {
                shuffle: false,
                initiative: 67,
                actions: [
                    "* %move% -1",
                    "* %attack% +1",
                    "** %range% -1",
                    "* %fire%",
                ],
            },
            {
                shuffle: false,
                initiative: 77,
                actions: [
                    "* %attack% +0",
                    "** Target all adjacent enemies",
                    "** %ice%%use_element%:Flame Demon suffers 1 damage.",
                ],
            },
            {
                shuffle: true,
                initiative: 30,
                actions: [
                    "* <table align='center'><tr> <td>  %fire%%use_element%: </td> <td> <span class='small'>All adjacent enemies<br/>suffer 2 damage.</span> </td> </tr> </table>",
                    "* %move% +0",
                    "* %attack% -2",
                    "** %range% +0",
                    "** %wound%",
                    "** %target% 2",
                ],
            },
            {
                shuffle: false,
                initiative: 8,
                actions: [
                    "* %move% -1",
                    "* <span class='small'> Create a 4 damage trap in an adjacent empty hex closest to an enemy </span>",
                    "* %any%%use_element%: %fire%",
                ],
            },
        ],
    },
    {
        type: MonsterDeckType.FrostDemon,
        cards: [
            {
                shuffle: false,
                initiative: 18,
                actions: [
                    "* %immobilize%",
                    "** Target all enemies within %range% 2",
                    "* %ice%%use_element%: <span class='small'>%heal% 3<br/>Self</span>",
                ],
            },
            {
                shuffle: false,
                initiative: 38,
                actions: ["* %move% +1", "* %attack% -1"],
            },
            {
                shuffle: false,
                initiative: 58,
                actions: ["* %move% +0", "* %attack% +0"],
            },
            {
                shuffle: false,
                initiative: 58,
                actions: [
                    "* %move% -1",
                    "* %attack% +0",
                    "** %range% 2",
                    "** %ice%%use_element%: +2 %attack%, +1 %range%",
                ],
            },
            {
                shuffle: true,
                initiative: 78,
                actions: [
                    "* %move% -1",
                    "* %attack% +0 %aoe-triangle-2-side-with-black%",
                    "* %ice%",
                ],
            },
            {
                shuffle: true,
                initiative: 78,
                actions: [
                    "* %move% -1",
                    "* %attack% +0 %aoe-triangle-2-side-with-black%",
                    "* %ice%",
                ],
            },
            {
                shuffle: false,
                initiative: 58,
                actions: [
                    "* %move% -1",
                    "* %attack% -1",
                    "** %pierce% 3",
                    "* %any%%use_element%: %ice%",
                ],
            },
            {
                shuffle: false,
                initiative: 18,
                actions: [
                    "* %shield% 2",
                    "* %move% +1",
                    "* %fire%%use_element%: <span class='small'>Frost Demon suffers 1 damage</span>",
                ],
            },
        ],
    },
    {
        type: MonsterDeckType.GiantViper,
        cards: [
            {
                shuffle: true,
                initiative: 32,
                actions: [
                    "* %move% +0",
                    "* %attack% +0",
                    "** Add +2 Attack if the target is adjacent to any of the Giant Viper's allies.",
                ],
            },
            {
                shuffle: true,
                initiative: 32,
                actions: [
                    "* %move% +0",
                    "* %attack% +0",
                    "** Add +2 Attack if the target is adjacent to any of the Giant Viper's allies.",
                ],
            },
            {
                shuffle: false,
                initiative: 11,
                actions: ["* %shield% 1", "* %attack% -1"],
            },
            {
                shuffle: false,
                initiative: 43,
                actions: [
                    "* %move% +1",
                    "** %jump%",
                    "* %attack% -1",
                    "** Target all adjacent enemies.",
                ],
            },
            {
                shuffle: false,
                initiative: 58,
                actions: ["* %move% -1", "* %attack% +1"],
            },
            {
                shuffle: false,
                initiative: 58,
                actions: [
                    "* %move% +1",
                    "** %jump%",
                    "* %attack% -1",
                    "** All attacks targeting Giant Viper this round gain Disadvantage.",
                ],
            },
            {
                shuffle: false,
                initiative: 43,
                actions: [
                    "* %move% -1",
                    "** %jump%",
                    "* %attack% +0",
                    "** %target% 2",
                ],
            },
            {
                shuffle: false,
                initiative: 23,
                actions: [
                    "* %move% -1",
                    "* %attack% -1",
                    "** %immobilize%",
                    "* %attack% -1",
                ],
            },
        ],
    },
    {
        type: MonsterDeckType.Guard,
        cards: [
            {
                shuffle: true,
                initiative: 15,
                actions: ["* %shield% 1", "* %retaliate% 2"],
            },
            {
                shuffle: false,
                initiative: 30,
                actions: ["* %move% +1", "* %attack% -1"],
            },
            {
                shuffle: false,
                initiative: 35,
                actions: ["* %move% -1", "* %attack% +0", "** %range% 2"],
            },
            {
                shuffle: false,
                initiative: 50,
                actions: ["* %move% +0", "* %attack% +0"],
            },
            {
                shuffle: false,
                initiative: 50,
                actions: ["* %move% +0", "* %attack% +0"],
            },
            {
                shuffle: false,
                initiative: 70,
                actions: ["* %move% -1", "* %attack% +1"],
            },
            {
                shuffle: false,
                initiative: 55,
                actions: [
                    "* %move% -1",
                    "* %attack% +0",
                    "* %strengthen%",
                    "** Self",
                ],
            },
            {
                shuffle: true,
                initiative: 15,
                actions: ["* %shield% 1", "* %attack% +0", "** %poison%"],
            },
        ],
    },
    {
        type: MonsterDeckType.HarrowerInfester,
        cards: [
            {
                shuffle: false,
                initiative: 38,
                actions: ["* %move% -1", "* %attack% +1", "** %target% 2"],
            },
            {
                shuffle: false,
                initiative: 7,
                actions: [
                    "* %move% +0",
                    "* %attack% -1",
                    "** %poison%",
                    "* %dark%",
                ],
            },
            {
                shuffle: false,
                initiative: 16,
                actions: [
                    "* %move% -1",
                    "* %attack% -1",
                    "* %heal% 5",
                    "** Self",
                ],
            },
            {
                shuffle: false,
                initiative: 16,
                actions: [
                    "* %attack% +2",
                    "** %immobilize%",
                    "* %retaliate% 2",
                ],
            },
            {
                shuffle: true,
                initiative: 2,
                actions: ["* %shield% 2", "* %retaliate% 2", "** %range% 3"],
            },
            {
                shuffle: false,
                initiative: 30,
                actions: [
                    "* %move% -1",
                    "* %attack% +0 %aoe-line-4-with-black%",
                    '** %dark%%use_element%: Perform "%heal% 2, Self" </br>for each target damaged',
                ],
            },
            {
                shuffle: false,
                initiative: 38,
                actions: [
                    "* %move% +0",
                    "* %attack% -1",
                    "** %target% 2",
                    "** %dark%%use_element%: +2 %attack%, %disarm%",
                ],
            },
            {
                shuffle: true,
                initiative: 7,
                actions: [
                    "* %attack% -1",
                    "** %range% 3",
                    "** %muddle%",
                    "* %heal% 4",
                    "** Self",
                ],
            },
        ],
    },
    {
        type: MonsterDeckType.Hound,
        cards: [
            {
                shuffle: false,
                initiative: 6,
                actions: ["* %move% -1", "* %attack% +0", "** %immobilize%"],
            },
            {
                shuffle: false,
                initiative: 7,
                actions: [
                    "* %move% +0",
                    "* %muddle%",
                    "** Target all adjacent enemies",
                ],
            },
            {
                shuffle: true,
                initiative: 19,
                actions: [
                    "* %move% +1",
                    "* %attack% +0",
                    "** Add +2 Attack if the target is adjacent to any of the Hound's allies",
                ],
            },
            {
                shuffle: true,
                initiative: 19,
                actions: [
                    "* %move% +1",
                    "* %attack% +0",
                    "** Add +2 Attack if the target is adjacent to any of the Hound's allies",
                ],
            },
            {
                shuffle: false,
                initiative: 26,
                actions: ["* %move% +0", "* %attack% +0"],
            },
            {
                shuffle: false,
                initiative: 26,
                actions: ["* %move% +0", "* %attack% +0"],
            },
            {
                shuffle: false,
                initiative: 83,
                actions: ["* %move% -2", "* %attack% +1"],
            },
            {
                shuffle: false,
                initiative: 72,
                actions: [
                    "* %attack% -1",
                    "** %pierce% 2",
                    "* %move% -2",
                    "* %attack% -1",
                    "** %pierce% 2",
                ],
            },
        ],
    },
    {
        type: MonsterDeckType.Imp,
        cards: [
            {
                shuffle: false,
                initiative: 5,
                actions: ["* %shield% 5", "* %heal% 1", "** Self"],
            },
            {
                shuffle: false,
                initiative: 37,
                actions: ["* %move% +0", "* %attack% +0", "** %range% +0"],
            },
            {
                shuffle: false,
                initiative: 37,
                actions: ["* %move% +0", "* %attack% +0", "** %range% +0"],
            },
            {
                shuffle: false,
                initiative: 42,
                actions: ["* %move% +1", "* %heal% 2", "** %range% 3"],
            },
            {
                shuffle: true,
                initiative: 43,
                actions: [
                    "* %move% +0",
                    "* %attack% -1",
                    "** %range% +0, %target% 2, %poison%",
                ],
            },
            {
                shuffle: false,
                initiative: 76,
                actions: ["* %move% -1", "* %attack% +1", "** %range% +0"],
            },
            {
                shuffle: true,
                initiative: 43,
                actions: [
                    "* %move% +0",
                    "* %attack% -1",
                    "** %range% +0, %target% 2, %curse%",
                ],
            },
            {
                shuffle: false,
                initiative: 24,
                actions: [
                    "* %strengthen%",
                    "** Affect all allies within %range% 2",
                    "* %muddle%",
                    "** Target all enemies within %range% 2",
                ],
            },
        ],
    },
    {
        type: MonsterDeckType.LivingBones,
        cards: [
            {
                shuffle: false,
                initiative: 64,
                actions: ["* %move% -1", "* %attack% +1"],
            },
            {
                shuffle: true,
                initiative: 20,
                actions: [
                    "* %move% -2",
                    "* %attack% +0",
                    "* %heal% 2",
                    "** Self",
                ],
            },
            {
                shuffle: false,
                initiative: 25,
                actions: ["* %move% +1", "* %attack% -1"],
            },
            {
                shuffle: false,
                initiative: 45,
                actions: ["* %move% +0", "* %attack% +0"],
            },
            {
                shuffle: false,
                initiative: 45,
                actions: ["* %move% +0", "* %attack% +0"],
            },
            { shuffle: false, initiative: 81, actions: ["* %attack% +2"] },
            {
                shuffle: false,
                initiative: 74,
                actions: [
                    "* %move% +0",
                    "* %attack% +0",
                    "** Target one enemy with all attacks",
                ],
            },
            {
                shuffle: true,
                initiative: 12,
                actions: ["* %shield% 1", "* %heal% 2", "** Self"],
            },
        ],
    },
    {
        type: MonsterDeckType.LivingCorpse,
        cards: [
            {
                shuffle: false,
                initiative: 21,
                actions: [
                    "* %move% +1",
                    "* %muddle% and %immobilize%",
                    "** Target one adjacent enemy",
                ],
            },
            {
                shuffle: false,
                initiative: 47,
                actions: ["* %move% +1", "* %attack% -1"],
            },
            {
                shuffle: true,
                initiative: 66,
                actions: ["* %move% +0", "* %attack% +0"],
            },
            {
                shuffle: true,
                initiative: 66,
                actions: ["* %move% +0", "* %attack% +0"],
            },
            {
                shuffle: false,
                initiative: 82,
                actions: ["* %move% -1", "* %attack% +1"],
            },
            {
                shuffle: false,
                initiative: 91,
                actions: ["* %move% +1", "* Living Corpse suffers 1 damage."],
            },
            {
                shuffle: false,
                initiative: 71,
                actions: [
                    "* %move% +0",
                    "* %attack% +1",
                    "* %poison%",
                    "** Target all adjacent enemies",
                ],
            },
            {
                shuffle: false,
                initiative: 32,
                actions: [
                    "* %attack% +2",
                    "** %push% 1",
                    "* Living Corpse suffers 1 damage.",
                ],
            },
        ],
    },
    {
        type: MonsterDeckType.LivingSpirit,
        cards: [
            {
                shuffle: true,
                initiative: 22,
                actions: [
                    "* %move% -1",
                    "* %attack% -1",
                    "** %range% +0",
                    "** %muddle%",
                ],
            },
            {
                shuffle: true,
                initiative: 33,
                actions: [
                    "* %move% +0",
                    "* %attack% -1",
                    "** %range% +0",
                    "** Target all enemies within range",
                ],
            },
            {
                shuffle: false,
                initiative: 48,
                actions: ["* %move% +0", "* %attack% +0", "** %range% +0"],
            },
            {
                shuffle: false,
                initiative: 48,
                actions: ["* %move% +0", "* %attack% +0", "** %range% +0"],
            },
            {
                shuffle: false,
                initiative: 61,
                actions: ["* %attack% +0", "** %range% -1", "** %target% 2"],
            },
            {
                shuffle: false,
                initiative: 75,
                actions: [
                    "* %move% -1",
                    "* %attack% +1",
                    "** %range% -1",
                    "* %heal% 1",
                    "** Self",
                ],
            },
            {
                shuffle: false,
                initiative: 55,
                actions: [
                    "* %move% +0",
                    "* %curse%",
                    "** %range% +0",
                    "** Target all enemies within range",
                    "* %ice%",
                ],
            },
            {
                shuffle: false,
                initiative: 67,
                actions: [
                    "* %move% -1",
                    "* %attack% +1",
                    "** %range% +0",
                    "** %ice%%use_element%: %stun%",
                ],
            },
        ],
    },
    {
        type: MonsterDeckType.Lurker,
        cards: [
            {
                shuffle: true,
                initiative: 11,
                actions: [
                    "* %shield% 1",
                    "** %ice%%use_element%: %shield% 2 instead",
                    "* %wound%",
                    "** Target all adjacent enemies",
                ],
            },
            {
                shuffle: false,
                initiative: 28,
                actions: ["* %move% +1", "* %attack% -1"],
            },
            {
                shuffle: false,
                initiative: 38,
                actions: ["* %move% +0", "* %attack% +0"],
            },
            {
                shuffle: false,
                initiative: 38,
                actions: [
                    "* %move% +0",
                    "* %attack% +0",
                    "** Target one enemy with all attacks",
                ],
            },
            {
                shuffle: false,
                initiative: 61,
                actions: ["* %move% -1", "* %attack% +1"],
            },
            {
                shuffle: false,
                initiative: 64,
                actions: ["* %attack% +1", "** Target all adjacent enemies"],
            },
            {
                shuffle: false,
                initiative: 41,
                actions: [
                    "* %ice%%use_element%: %strengthen%",
                    "** Self",
                    "* %move% +0",
                    "* %attack% -1",
                    "** %wound%",
                ],
            },
            {
                shuffle: true,
                initiative: 23,
                actions: [
                    "* %shield% 1",
                    "* %move% +0",
                    "* %attack% -1",
                    "* %ice%",
                ],
            },
        ],
    },
    {
        type: MonsterDeckType.NightDemon,
        cards: [
            {
                shuffle: false,
                initiative: 4,
                actions: ["* %move% +1", "* %attack% -1", "* %dark%"],
            },
            {
                shuffle: false,
                initiative: 7,
                actions: [
                    "* %move% +1",
                    "* %attack% -1",
                    "* %dark%%use_element%: %invisible%",
                    "** Self",
                ],
            },
            {
                shuffle: false,
                initiative: 22,
                actions: ["* %move% +0", "* %attack% +0", "* %dark%"],
            },
            {
                shuffle: false,
                initiative: 26,
                actions: [
                    "* %attack% -2",
                    "** %range% 3",
                    "** %target% 3",
                    "** %dark%%use_element%: %muddle%",
                ],
            },
            {
                shuffle: true,
                initiative: 46,
                actions: [
                    "* %move% -1",
                    "* %attack% +1",
                    "** %dark%%use_element%: +2 %attack%",
                ],
            },
            {
                shuffle: true,
                initiative: 41,
                actions: ["* %move% -1", "* %attack% +1", "* %dark%"],
            },
            {
                shuffle: false,
                initiative: 35,
                actions: [
                    "* %attack% -1",
                    "* %attack% -1",
                    "** %pierce% 2",
                    "* %light%%use_element%: %curse%",
                    "** Self",
                ],
            },
            {
                shuffle: false,
                initiative: 15,
                actions: [
                    "* %move% +0",
                    "* %attack% -1",
                    "* <span class='small'>All adjacent enemies and allies suffer 1 damage.</span>",
                    "* <span class='small'>%any%%use_element%: %dark%</span>",
                ],
            },
        ],
    },
    {
        type: MonsterDeckType.Ooze,
        cards: [
            {
                shuffle: false,
                initiative: 36,
                actions: ["* %move% +1", "* %attack% -1", "** %range% +0"],
            },
            {
                shuffle: false,
                initiative: 57,
                actions: ["* %move% +0", "* %attack% +0", "** %range% +0"],
            },
            {
                shuffle: false,
                initiative: 59,
                actions: [
                    "* %attack% +0",
                    "** %range% +0",
                    "** %target% 2",
                    "** %poison%",
                ],
            },
            {
                shuffle: false,
                initiative: 66,
                actions: ["* %move% -1", "* %attack% +1", "** %range% +1"],
            },
            {
                shuffle: true,
                initiative: 94,
                actions: [
                    "* Ooze suffers 2 damage ",
                    "** <span class='small'>Summons normal Ooze with a hit point value equal to the summoning Ooze's current hit point value (limited by a normal Ooze's specified maximum hit point value)</span>",
                ],
            },
            {
                shuffle: true,
                initiative: 94,
                actions: [
                    "* Ooze suffers 2 damage ",
                    "** <span class='small'>Summons normal Ooze with a hit point value equal to the summoning Ooze's current hit point value (limited by a normal Ooze's specified maximum hit point value)</span>",
                ],
            },
            {
                shuffle: false,
                initiative: 85,
                actions: [
                    "* %push% 1 and",
                    "* %poison%",
                    "** Target all adjacent enemies",
                    "* %attack% +1",
                    "** %range% -1",
                ],
            },
            {
                shuffle: false,
                initiative: 66,
                actions: ["* %move% -1", "* %loot% 1", "* %heal% 2", "** Self"],
            },
        ],
    },
    {
        type: MonsterDeckType.RendingDrake,
        cards: [
            {
                shuffle: false,
                initiative: 12,
                actions: ["* %move% +1", "* %attack% -1"],
            },
            {
                shuffle: true,
                initiative: 13,
                actions: ["* %attack% -1", "* %move% -1", "* %attack% -1"],
            },
            {
                shuffle: false,
                initiative: 25,
                actions: ["* %move% +0", "* %attack% +0"],
            },
            {
                shuffle: false,
                initiative: 39,
                actions: ["* %move% -1", "* %attack% +1"],
            },
            {
                shuffle: false,
                initiative: 54,
                actions: [
                    "* %move% -2",
                    "* %attack% -1",
                    "** %range% 3",
                    "** %target% 2",
                    "** %poison%",
                ],
            },
            {
                shuffle: false,
                initiative: 59,
                actions: ["* %move% -2", "* %attack% +1", "** %target% 2"],
            },
            {
                shuffle: false,
                initiative: 6,
                actions: [
                    "* %shield% 2",
                    "* %heal% 2",
                    "** Self",
                    "* %strengthen%",
                    "** Self",
                ],
            },
            {
                shuffle: true,
                initiative: 72,
                actions: ["* %attack% -1", "* %attack% -1", "* %attack% -2"],
            },
        ],
    },
    {
        type: MonsterDeckType.SavvasIcestorm,
        cards: [
            {
                shuffle: false,
                initiative: 70,
                actions: [
                    "* %push% 2",
                    "** Target all adjacent enemies",
                    "** %air%%use_element%: %push% 4 instead",
                    "* %attack% +1",
                    "** %range% +1",
                ],
            },
            {
                shuffle: false,
                initiative: 98,
                actions: ["* Summon normal Wind Demon", "* %air%"],
            },
            {
                shuffle: false,
                initiative: 98,
                actions: ["* Summon normal Frost Demon", "* %ice%"],
            },
            {
                shuffle: false,
                initiative: 19,
                actions: [
                    "* %move% +0",
                    "* %attack% -1",
                    "** %range% -1",
                    "* %shield% 1",
                    "** Affect self and all allies within %range% 2",
                    "* %ice%",
                ],
            },
            {
                shuffle: false,
                initiative: 14,
                actions: [
                    "* %attack% +0",
                    "** %range% +0",
                    "** %ice%%use_element%: +2 %attack%, %immobilize%",
                    "* %retaliate% 2",
                    "* %air%",
                ],
            },
            {
                shuffle: false,
                initiative: 14,
                actions: [
                    "* %shield% 4",
                    "* %heal% 2",
                    "** %range% 3",
                    "** %ice%%use_element%: +3 %heal%",
                    "* %air%%use_element%: %attack% +0",
                ],
            },
            {
                shuffle: true,
                initiative: 47,
                actions: [
                    "* %disarm%",
                    "** Target all adjacent enemies",
                    "* %move% +0",
                    "* %attack% -1",
                    "** %range% +0",
                    "* %air%",
                ],
            },
            {
                shuffle: true,
                initiative: 35,
                actions: [
                    "* %move% -1",
                    "* %attack% -1 %aoe-triangle-3-side-with-corner-black% ",
                    "* %ice%",
                ],
            },
        ],
    },
    {
        type: MonsterDeckType.SavvasLavaflow,
        cards: [
            {
                shuffle: false,
                initiative: 97,
                actions: ["* Summon normal Flame Demon", "* %fire%"],
            },
            {
                shuffle: false,
                initiative: 97,
                actions: ["* Summon normal Earth Demon", "* %earth%"],
            },
            {
                shuffle: false,
                initiative: 22,
                actions: [
                    "* %move% +1",
                    "* %attack% -1",
                    "** Target all adjacent enemies",
                    "* %fire%%use_element%: %retaliate% 3",
                ],
            },
            {
                shuffle: true,
                initiative: 68,
                actions: [
                    "* %move% -1",
                    "* %attack% +1",
                    "** %range% 3",
                    "** All allies and enemies adjacent to the target suffer 2 damage.",
                    "* %earth%",
                ],
            },
            {
                shuffle: false,
                initiative: 41,
                actions: [
                    "* %move% +0",
                    "* %attack% -1 %aoe-line-4-with-black% ",
                    "** %earth%%use_element%: +2 %attack%, %immobilize%",
                ],
            },
            {
                shuffle: false,
                initiative: 51,
                actions: [
                    "* All enemies suffer 2 damage.",
                    "* %fire%%use_element%: %wound% all enemies",
                    "* %earth%%use_element%: %disarm% all enemies",
                ],
            },
            {
                shuffle: false,
                initiative: 31,
                actions: [
                    "* %heal% 4",
                    "** %range% 3",
                    "** %earth%%use_element%: %target% 3",
                ],
            },
            {
                shuffle: true,
                initiative: 68,
                actions: [
                    "* %move% -1",
                    "* %attack% -1",
                    "** %range% 3",
                    "** %target% 2",
                    "* %fire%",
                ],
            },
        ],
    },
    {
        type: MonsterDeckType.Scout,
        cards: [
            {
                shuffle: false,
                initiative: 29,
                actions: ["* %move% -1", "* %attack% -1", "** %range% 3"],
            },
            {
                shuffle: false,
                initiative: 40,
                actions: ["* %move% +1", "* %attack% -1"],
            },
            {
                shuffle: false,
                initiative: 53,
                actions: ["* %move% +0", "* %attack% +0"],
            },
            {
                shuffle: false,
                initiative: 54,
                actions: [
                    "* %move% -2",
                    "* %attack% +0",
                    "** %range% 3",
                    "** %poison%",
                ],
            },
            {
                shuffle: false,
                initiative: 69,
                actions: ["* %move% -1", "* %attack% +1"],
            },
            {
                shuffle: true,
                initiative: 92,
                actions: ["* %attack% +2", "** %poison% "],
            },
            {
                shuffle: true,
                initiative: 35,
                actions: ["* %move% +1", "** %jump%", "* %loot% 1"],
            },
            {
                shuffle: false,
                initiative: 79,
                actions: ["* %attack% -1", "** %range% 4", "** %target% 2"],
            },
        ],
    },
    {
        type: MonsterDeckType.Shaman,
        cards: [
            {
                shuffle: false,
                initiative: 8,
                actions: [
                    "* %move% +0",
                    "* %attack% -1",
                    "** %range% +0",
                    "** %disarm%",
                ],
            },
            {
                shuffle: false,
                initiative: 8,
                actions: [
                    "* %move% -1",
                    "* %attack% +0",
                    "** %range% +0",
                    "** %immobilize%",
                ],
            },
            {
                shuffle: true,
                initiative: 23,
                actions: ["* %move% +0", "* %heal% 3", "** %range% 3"],
            },
            {
                shuffle: true,
                initiative: 23,
                actions: ["* %move% +0", "* %heal% 3", "** %range% 3"],
            },
            {
                shuffle: false,
                initiative: 62,
                actions: ["* %move% +0", "* %attack% +0", "** %range% +0"],
            },
            {
                shuffle: false,
                initiative: 74,
                actions: ["* %move% -1", "* %attack% +1", "** %range% +0"],
            },
            {
                shuffle: false,
                initiative: 89,
                actions: [
                    "* %move% -1",
                    "* %heal% 1",
                    "** Affect all adjacent allies",
                    "* %bless%",
                    "** Self",
                ],
            },
            {
                shuffle: false,
                initiative: 9,
                actions: [
                    "* %move% +1",
                    "* %attack% -1",
                    "** %range% +0, %curse%, %target% 2",
                ],
            },
        ],
    },
    {
        type: MonsterDeckType.SpittingDrake,
        cards: [
            {
                shuffle: false,
                initiative: 32,
                actions: ["* %move% +1", "* %attack% -1", "** %range% +0"],
            },
            {
                shuffle: false,
                initiative: 52,
                actions: ["* %move% +0", "* %attack% +0", "** %range% +0"],
            },
            {
                shuffle: true,
                initiative: 57,
                actions: [
                    "* %move% +0",
                    "* %attack% -1 %aoe-triangle-2-side%",
                    "** %range% +0",
                ],
            },
            {
                shuffle: false,
                initiative: 27,
                actions: [
                    "* %attack% +0",
                    "** %range% +0,  %target% 2, %poison%",
                ],
            },
            {
                shuffle: false,
                initiative: 87,
                actions: ["* %move% -1", "* %attack% +1", "** %range% +0"],
            },
            {
                shuffle: false,
                initiative: 89,
                actions: ["* %attack% -2", "** %range% +0", "** %stun%"],
            },
            {
                shuffle: false,
                initiative: 6,
                actions: [
                    "* %shield% 2",
                    "* %heal% 2",
                    "** Self",
                    "* %strengthen%",
                    "** Self",
                ],
            },
            {
                shuffle: true,
                initiative: 89,
                actions: [
                    "* %move% -1",
                    "* %attack% -2 %aoe-circle%",
                    "** %range% +0",
                    "** %poison%",
                ],
            },
        ],
    },
    {
        type: MonsterDeckType.StoneGolem,
        cards: [
            {
                shuffle: false,
                initiative: 11,
                actions: ["* %retaliate% 3", "** %range% 3"],
            },
            {
                shuffle: false,
                initiative: 28,
                actions: [
                    "* %move% +1",
                    "* %attack% +0",
                    "* Stone Golem suffers 1 damage.",
                ],
            },
            {
                shuffle: true,
                initiative: 51,
                actions: ["* %move% +1", "* %attack% -1"],
            },
            {
                shuffle: false,
                initiative: 65,
                actions: ["* %move% +0", "* %attack% +0"],
            },
            {
                shuffle: false,
                initiative: 72,
                actions: [
                    "* %attack% +1",
                    "** %range% 3",
                    "* Stone Golem suffers 2 damage",
                ],
            },
            {
                shuffle: true,
                initiative: 90,
                actions: ["* %move% -1", "* %attack% +1"],
            },
            {
                shuffle: false,
                initiative: 28,
                actions: [
                    "* %move% +1",
                    "* %attack% -2",
                    "** %range% 3",
                    "** %pull% 2",
                    "** %immobilize%",
                ],
            },
            {
                shuffle: false,
                initiative: 83,
                actions: [
                    "* %move% +0",
                    "* %attack% -1",
                    "** Target all adjacent enemies",
                ],
            },
        ],
    },
    {
        type: MonsterDeckType.SunDemon,
        cards: [
            {
                shuffle: true,
                initiative: 17,
                actions: [
                    "* %heal% 3",
                    "** %range% 3",
                    "** %light%%use_element%: Target all allies within range instead",
                ],
            },
            {
                shuffle: false,
                initiative: 36,
                actions: [
                    "* %move% +0",
                    "* %attack% +0",
                    "** Target all adjacent enemies",
                    "* %light%",
                ],
            },
            {
                shuffle: false,
                initiative: 36,
                actions: [
                    "* %move% +0",
                    "* %attack% +0",
                    "** Target all adjacent enemies",
                    "* %light%",
                ],
            },
            {
                shuffle: false,
                initiative: 68,
                actions: ["* %move% +0", "* %attack% +1", "* %light%"],
            },
            {
                shuffle: true,
                initiative: 73,
                actions: [
                    "* %move% +0",
                    "* %attack% +1",
                    "* %light%%use_element%: %heal% 3",
                    "** Self",
                ],
            },
            {
                shuffle: false,
                initiative: 95,
                actions: [
                    "* %move% -1",
                    "* %attack% +0",
                    "** %range% 4",
                    "** %light%%use_element%: Target all enemies within range",
                ],
            },
            {
                shuffle: false,
                initiative: 88,
                actions: [
                    "* %move% -1",
                    "* %attack% -1",
                    "** Target all adjacent enemies",
                    "* %dark%%use_element%: %muddle%",
                    "** Self",
                ],
            },
            {
                shuffle: false,
                initiative: 50,
                actions: [
                    "* %move% +0",
                    "* %attack% +0",
                    "** %range% 3",
                    "* %any%%use_element%: %light%",
                ],
            },
        ],
    },
    {
        type: MonsterDeckType.WindDemon,
        cards: [
            {
                shuffle: false,
                initiative: 9,
                actions: [
                    "* %attack% -1",
                    "** %range% +0",
                    "* %heal% 1",
                    "** Self",
                    "* %air%%use_element%: %invisible%<br/><span class='small'>Self</span>",
                ],
            },
            {
                shuffle: true,
                initiative: 21,
                actions: [
                    "* %move% +0",
                    "* %attack% +0",
                    "** %range% +0, %pull% 1",
                    "* %air%",
                ],
            },
            {
                shuffle: true,
                initiative: 21,
                actions: [
                    "* %move% +0",
                    "* %attack% +0",
                    "** %range% +0, %pull% 1",
                    "* %air%",
                ],
            },
            {
                shuffle: false,
                initiative: 29,
                actions: [
                    "* %move% +0",
                    "* %attack% -1",
                    "** %range% +0, %target% 2",
                    "** %air%%use_element%: %push% 2",
                ],
            },
            {
                shuffle: false,
                initiative: 37,
                actions: [
                    "* %move% +0",
                    "* %attack% +0 <div style='display: inline-block; width: 0; margin-top: -1.5em; vertical-align: bottom'>%aoe-4-with-black%</div>",
                    "** %air%%use_element%: +1 Attack <div style='display: inline-block; margin-right: -3em'>%aoe-circle-with-side-black%</div>",
                ],
            },
            {
                shuffle: false,
                initiative: 43,
                actions: [
                    "* %move% -1",
                    "* %attack% +1",
                    "** %range% +0",
                    "** %air%%use_element%: %target% 2",
                ],
            },
            {
                shuffle: false,
                initiative: 43,
                actions: [
                    "* %push% 1",
                    "** Target all adjacent enemies",
                    "* %attack% +0",
                    "** %range% +0",
                    "** %earth%%use_element%: -2 %range%",
                ],
            },
            {
                shuffle: false,
                initiative: 2,
                actions: [
                    "* %shield% 1",
                    "* %move% -1",
                    "* %attack% -1",
                    "** %range% +0",
                    "* %any%%use_element%: %air%",
                ],
            },
        ],
    },
];
