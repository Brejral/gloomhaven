import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { GloomhavenRoutingModule } from "./gloomhaven-routing.module";
import { GloomhavenComponent } from "./gloomhaven.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";

@NgModule({
    imports: [NativeScriptCommonModule, GloomhavenRoutingModule],
    declarations: [GloomhavenComponent, ItemDetailComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class GloomhavenModule {}
