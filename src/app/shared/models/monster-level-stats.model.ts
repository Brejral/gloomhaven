import { MonsterStats } from ".";

export interface MonsterLevelStats {
    level: number;
    normal: MonsterStats;
    elite?: MonsterStats;
}
