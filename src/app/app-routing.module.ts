import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo:
            "/(campaignTab:campaign/default//partiesTab:parties/list//charactersTab:characters/list//scenarioTab:scenario/select)",
        pathMatch: "full",
    },

    {
        path: "campaign",
        component: NSEmptyOutletComponent,
        loadChildren: () =>
            import("~/app/campaign/campaign.module").then(
                (m) => m.CampaignModule
            ),
        outlet: "campaignTab",
    },
    {
        path: "parties",
        component: NSEmptyOutletComponent,
        loadChildren: () =>
            import("~/app/parties/parties.module").then((m) => m.PartiesModule),
        outlet: "partiesTab",
    },
    {
        path: "characters",
        component: NSEmptyOutletComponent,
        loadChildren: () =>
            import("~/app/characters/characters.module").then((m) => m.CharactersModule),
        outlet: "charactersTab",
    },
    {
        path: "scenario",
        component: NSEmptyOutletComponent,
        loadChildren: () =>
            import("~/app/scenario/scenario.module").then(
                (m) => m.ScenarioModule
            ),
        outlet: "scenarioTab",
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }
