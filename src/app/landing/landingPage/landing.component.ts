import { Component, OnInit} from '@angular/core';
import * as environment from '../../../environments/environment.js';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  login=environment.loginUrl
  cadastrar = environment.signUpUrl;

  constructor() { }

  ngOnInit() {
  }

}
