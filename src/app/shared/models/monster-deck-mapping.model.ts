import { MonsterType, MonsterDeckType } from "../enums";

// tslint:disable-next-line: interface-over-type-literal
export type MonsterDeckMapping = {
    [key in MonsterType]: MonsterDeckType;
};
