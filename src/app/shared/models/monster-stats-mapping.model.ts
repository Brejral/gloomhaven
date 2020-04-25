import { MonsterType } from "../enums";
import { MonsterLevelStats } from "./monster-level-stats.model";

export type MonsterStatsMapping = {
    [key in MonsterType]: MonsterLevelStats[];
};
