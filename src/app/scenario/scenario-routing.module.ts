import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ScenarioSelectComponent } from "./components/scenario-select/scenario-select.component";
import { ScenarioComponent } from "./components/scenario/scenario.component";

const routes: Routes = [
    { path: "select", component: ScenarioSelectComponent },
    { path: ":id", component: ScenarioComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
})
export class ScenarioRoutingModule { }
