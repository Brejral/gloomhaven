import { MonsterType } from "../enums";

export interface MonsterStats {
    health: number | string;
    move: number;
    attack: number | string;
    range: number;
    special1?: string[];
    special2?: string[];
    immunities?: string[];
    attributes?: string[];
    notes?: string;
}
