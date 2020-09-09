import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormService } from 'src/app/landing/landing-form/services/form.service';
import { PreCadastro } from './interface/pre-cadastro';

@Component({
  selector: 'app-landing-form',
  templateUrl: './landing-form.component.html',
  styleUrls: ['./landing-form.component.css']
})
export class LandingFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private envia: FormService) { }

  signupForm: FormGroup;

  ngOnInit() {

    this.signupForm = this.formBuilder.group({
      name: ['',
        [
          Validators.required,
        ]
      ],
      telephone: ['',
        [
          Validators.required,
          Validators.minLength(10),
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ]

    })
  }

  capture() {
    const preCadastro: PreCadastro = this.signupForm.getRawValue() as PreCadastro;

    this.envia
      .enviarFormulario(preCadastro)
      .subscribe(
        (res) => {
          this.signupForm.reset("");
          console.log(res.status);
          console.log('enviado');
        },
        err => {
          console.log(err);
        }
      )
  }
}
