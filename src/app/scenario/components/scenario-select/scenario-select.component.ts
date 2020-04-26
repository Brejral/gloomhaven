import { Component, OnInit } from "@angular/core";
import { Scenario } from "../../../shared/models";
import { scenarios } from "../../../shared/data";

@Component({
    selector: "ScenarioSelect",
    templateUrl: "./scenario-select.component.html",
    styleUrls: ["./scenario-select.component.scss"],
})
export class ScenarioSelectComponent implements OnInit {
    public scenarios: Scenario[];

    constructor() {
        // Use the constructor to inject services.
    }

    public ngOnInit(): void {
        this.scenarios = scenarios;
    }
}
