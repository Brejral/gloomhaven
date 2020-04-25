import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo:
            "/(gloomhavenTab:gloomhaven/default//browseTab:browse/default//scenarioTab:scenario/default)",
        pathMatch: "full",
    },

    {
        path: "gloomhaven",
        component: NSEmptyOutletComponent,
        loadChildren: () =>
            import("~/app/gloomhaven/gloomhaven.module").then(
                (m) => m.GloomhavenModule
            ),
        outlet: "gloomhaven",
    },
    {
        path: "browse",
        component: NSEmptyOutletComponent,
        loadChildren: () =>
            import("~/app/browse/browse.module").then((m) => m.BrowseModule),
        outlet: "browseTab",
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
export class AppRoutingModule {}
