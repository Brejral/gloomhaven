import { SpecialModifier } from "../enums";

export interface AttackCard {
    text: string;
    modifier?: number;
    special?: SpecialModifier;
    continue?: boolean;
    shuffle?: boolean;
}
