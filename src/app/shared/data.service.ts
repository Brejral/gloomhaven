import { Injectable } from "@angular/core";

export interface DataItem {
    route: string;
    name: string;
    description: string;
}

@Injectable({
    providedIn: "root",
})
export class DataService {

    private items: DataItem[] = [
        {
            route: 'map',
            name: "Map",
            description: "Description for Item 1",
        },
        {
            route: 'classes',
            name: "Classes",
            description: "Description for Item 1",
        },
        {
            route: 'events',
            name: "Events",
            description: "Description for Item 1",
        },
        {
            route: 'scenarios',
            name: "Scenarios",
            description: "Description for Item 1",
        },
        {
            route: 'global-achievements',
            name: "Global Achievements",
            description: "Description for Item 1",
        },
        {
            route: 'items',
            name: "Items",
            description: "Description for Item 1",
        },
        {
            route: 'treasures',
            name: "Treasures",
            description: "Description for Item 1",
        },
        {
            route: 'envelopes',
            name: "Envelopes",
            description: "Description for Item 1",
        },
        {
            route: 'party-journal',
            name: "Party Journal",
            description: "Description for Item 1",
        },
    ];

    public getItems(): DataItem[] {
        return this.items;
    }
}
