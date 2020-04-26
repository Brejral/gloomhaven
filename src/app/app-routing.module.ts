import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo:
            "/(gloomhavenTab:gloomhaven/default//partiesTab:parties/list//charactersTab:characters/list//scenarioTab:scenario/select)",
        pathMatch: "full",
    },

    {
        path: "gloomhaven",
        component: NSEmptyOutletComponent,
        loadChildren: () =>
            import("~/app/gloomhaven/gloomhaven.module").then(
                (m) => m.GloomhavenModule
            ),
        outlet: "gloomhavenTab",
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
