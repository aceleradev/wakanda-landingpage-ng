import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

import { LandingComponent } from "./landingPage/landing.component";
import { LandingFormComponent } from './landing-form/landing-form.component';

@NgModule({
    declarations: [LandingComponent, LandingFormComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports:[LandingComponent]
})
export class LandingModule {}