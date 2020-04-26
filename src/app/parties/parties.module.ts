import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PartiesRoutingModule } from "./parties-routing.module";
import { PartiesComponent } from "./components/parties/parties.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PartiesRoutingModule,
    ],
    declarations: [
        PartiesComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
    ],
})
export class PartiesModule { }
