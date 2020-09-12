import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDeCadastroComponent } from '../../modal-template/modal-de-cadastro/modal-de-cadastro.component';
import { PreCadastro } from './interface/pre-cadastro';
import { FormService } from './services/form.service';

@Component({
  selector: 'app-pre-signup',
  templateUrl: './pre-signup.component.html',
  styleUrls: ['./pre-signup.component.css'],
  entryComponents: [ModalDeCadastroComponent],
})
export class PreSignupComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private envia: FormService,
    private modalService: NgbModal) { }

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
          if(res.status==201) {
            this.open(ModalDeCadastroComponent);
          }
          this.signupForm.reset("");
          console.log(res.status);
          console.log('enviado');

        },
        err => {
          console.log(err);
          this.signupForm.reset("");
          alert("serviço indisponivel");
        }
      )
  }

  open(content) {
    this.modalService.open(content,  { windowClass : "modalSize"});
  }

}
