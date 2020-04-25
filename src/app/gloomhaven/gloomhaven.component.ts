import { Component, OnInit } from "@angular/core";

import { DataService, DataItem } from "../shared/data.service";

@Component({
    selector: "Gloomhaven",
    templateUrl: "./gloomhaven.component.html",
})
export class GloomhavenComponent implements OnInit {
    public items: Array<DataItem>;

    constructor(private _itemService: DataService) {}

    public ngOnInit(): void {
        this.items = this._itemService.getItems();
    }
}
