import { Component, OnInit } from "@angular/core";
import { Scenario } from "../../../shared/models";
import { scenarios } from "../../../shared/data";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "ScenarioSelect",
    templateUrl: "./scenario-select.component.html",
    styleUrls: ["./scenario-select.component.scss"],
})
export class ScenarioSelectComponent implements OnInit {
    public scenarios: Scenario[];

    constructor(private routerExtensions: RouterExtensions) {
        // Use the constructor to inject services.
    }

    public ngOnInit(): void {
        this.scenarios = scenarios;
    }

    public onScenarioTap(scenario: Scenario) {
        this.routerExtensions.navigate([{ outlets: { scenarioTab: ['scenario', scenario.id] } }], { clearHistory: true });
    }
}
