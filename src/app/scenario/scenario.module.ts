import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ScenarioRoutingModule } from "./scenario-routing.module";
import { ScenarioSelectComponent } from "./components/scenario-select/scenario-select.component";
import { ScenarioComponent } from "./components/scenario/scenario.component";

@NgModule({
    imports: [NativeScriptCommonModule, ScenarioRoutingModule],
    declarations: [ScenarioSelectComponent, ScenarioComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class ScenarioModule {}
