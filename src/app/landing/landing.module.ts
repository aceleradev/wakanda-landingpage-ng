import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbCarouselModule, NgbModalModule } from "@ng-bootstrap/ng-bootstrap"
import { ReactiveFormsModule } from '@angular/forms';

import { LandingComponent } from "./landingPage/landing.component";
import { HeaderComponent } from './landingPage/header/header.component';
import { JumbotronComponent } from './landingPage/jumbotron/jumbotron.component';
import { TribesComponent } from './landingPage/tribes/tribes.component';
import { ListTribesComponent } from './landingPage/tribes/list-tribes/list-tribes.component';
import { CarouselTribesComponent } from './landingPage/tribes/carousel-tribes/carousel-tribes.component';
import { PreSignupComponent } from './landingPage/pre-signup/pre-signup.component';
import { FooterComponent } from './landingPage/footer/footer.component';
import { ModalDeCadastroComponent } from './modal-template/modal-de-cadastro/modal-de-cadastro.component';

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
        ModalDeCadastroComponent
    ],
    imports: [
        CommonModule,
        NgbCarouselModule,
        ReactiveFormsModule,
        NgbModalModule
    ],
    exports:[LandingComponent],
    entryComponents: [ModalDeCadastroComponent],
})
export class LandingModule {}