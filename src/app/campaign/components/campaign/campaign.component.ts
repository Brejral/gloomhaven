import { Component, OnInit } from "@angular/core";

import { DataService, DataItem } from "../../../shared/data.service";

@Component({
    selector: "Campaign",
    templateUrl: "./campaign.component.html",
    styleUrls: ['campaign.component.scss'],
})
export class CampaignComponent implements OnInit {
    public items: Array<DataItem>;

    constructor(private _itemService: DataService) { }

    public ngOnInit(): void {
        this.items = this._itemService.getItems();
    }
}
