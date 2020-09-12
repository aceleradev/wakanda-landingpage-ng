import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap"
import { ReactiveFormsModule } from '@angular/forms';

import { LandingComponent } from "./landingPage/landing.component";
import { HeaderComponent } from './landingPage/header/header.component';
import { JumbotronComponent } from './landingPage/jumbotron/jumbotron.component';
import { TribesComponent } from './landingPage/tribes/tribes.component';
import { ListTribesComponent } from './landingPage/tribes/list-tribes/list-tribes.component';
import { CarouselTribesComponent } from './landingPage/tribes/carousel-tribes/carousel-tribes.component';
import { PreSignupComponent } from './landingPage/pre-signup/pre-signup.component';
import { FooterComponent } from './landingPage/footer/footer.component';
import { LandingFormComponent } from "./landing-form/landing-form.component";

@NgModule({
    declarations: [
        LandingComponent, 
        HeaderComponent, 
        JumbotronComponent, 
        TribesComponent, 
        ListTribesComponent, 
        CarouselTribesComponent, 
        PreSignupComponent, 
        FooterComponent,
        LandingFormComponent
    ],
    imports: [CommonModule, NgbCarouselModule,ReactiveFormsModule],
    exports:[LandingComponent]
})
export class LandingModule {}