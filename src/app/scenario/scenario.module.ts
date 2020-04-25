import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ScenarioRoutingModule } from "./scenario-routing.module";
import { ScenarioComponent } from "./scenario.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ScenarioRoutingModule,
    ],
    declarations: [
        ScenarioComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
    ],
})
export class ScenarioModule { }
