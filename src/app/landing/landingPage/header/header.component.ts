import { Component, OnInit } from '@angular/core';
import * as environment from '../../../../environments/environment.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  login=environment.loginUrl
  cadastrar = environment.signUpUrl;

  constructor() { }

  ngOnInit() {
  }

}
