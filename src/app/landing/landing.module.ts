import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LandingComponent } from "./landingPage/landing.component";
import { LandingFormComponent } from './landing-form/landing-form.component';

@NgModule({
    declarations: [LandingComponent, LandingFormComponent],
    imports: [CommonModule],
    exports:[LandingComponent]
})
export class LandingModule {}