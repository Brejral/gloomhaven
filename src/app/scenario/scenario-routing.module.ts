import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ScenarioComponent } from "./scenario.component";

const routes: Routes = [
    { path: "default", component: ScenarioComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
})
export class ScenarioRoutingModule { }
