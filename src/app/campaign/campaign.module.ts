import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CampaignRoutingModule } from "./campaign-routing.module";
import { CampaignComponent } from "./components/campaign/campaign.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";

@NgModule({
    imports: [NativeScriptCommonModule, CampaignRoutingModule],
    declarations: [CampaignComponent, ItemDetailComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class CampaignModule { }
