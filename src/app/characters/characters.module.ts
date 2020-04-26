import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CharactersRoutingModule } from "./characters-routing.module";
import { CharactersComponent } from "./components/characters/characters.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CharactersRoutingModule,
    ],
    declarations: [
        CharactersComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
    ],
})
export class CharactersModule { }
