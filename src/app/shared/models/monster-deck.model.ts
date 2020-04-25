import { MonsterDeckType } from "../enums";
import { MonsterDeckCard } from "./monster-deck-card.model";

export interface MonsterDeck {
    type: MonsterDeckType;
    cards: MonsterDeckCard[];
}
