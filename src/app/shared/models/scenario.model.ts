import { MonsterType } from "../enums";

export interface Scenario {
    id: number;
    name: string;
    monsters: MonsterType[];
    specialRules?: any;
}
