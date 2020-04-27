import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { CampaignComponent } from "./components/campaign/campaign.component";

const routes: Routes = [
    { path: "default", component: CampaignComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
})
export class CampaignRoutingModule { }
