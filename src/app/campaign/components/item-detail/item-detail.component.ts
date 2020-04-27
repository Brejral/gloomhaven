import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { DataService, DataItem } from "../../../shared/data.service";

@Component({
    selector: "ItemDetail",
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    public item: DataItem;

    constructor(
        private _data: DataService,
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions
    ) { }

    public ngOnInit(): void {
    }

    public onBackTap(): void {
        this._routerExtensions.back();
    }
}
