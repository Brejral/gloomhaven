export interface Campaign {
    id: number;
    name: string;
    donations: number;
    prosperityCheckmarks: number;
    priceModifier: number;
    globalAchievements: number[];
    items: number[];
    treasures: number[];
    envelopes: number[];
}
