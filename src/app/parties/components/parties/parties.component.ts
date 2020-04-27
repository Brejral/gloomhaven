import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Parties",
    templateUrl: "./parties.component.html",
    styleUrls: ["./parties.component.scss"],
})
export class PartiesComponent implements OnInit {
    constructor() {
        // Use the component constructor to inject providers.
    }

    public ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }
}
