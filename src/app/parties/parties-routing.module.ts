import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { PartiesComponent } from "./components/parties/parties.component";

const routes: Routes = [
    { path: "list", component: PartiesComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
})
export class PartiesRoutingModule { }
