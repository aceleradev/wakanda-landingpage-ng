import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PreCadastro } from './interface/pre-cadastro';
import { FormService } from './services/form.service';

@Component({
  selector: 'app-pre-signup',
  templateUrl: './pre-signup.component.html',
  styleUrls: ['./pre-signup.component.css']
})
export class PreSignupComponent implements OnInit {

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
