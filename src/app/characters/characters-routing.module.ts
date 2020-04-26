import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { CharactersComponent } from "./components/characters/characters.component";

const routes: Routes = [
    { path: "list", component: CharactersComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
})
export class CharactersRoutingModule { }
