import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServService } from 'src/app/form/serv.service';



@Component({
  selector: 'app-landing-form',
  templateUrl: './landing-form.component.html',
  styleUrls: ['./landing-form.component.css']
})
export class LandingFormComponent implements OnInit {

  constructor( 
    private formBuilder: FormBuilder,
    private envia: ServService){}

  signupForm: FormGroup;
  

  ngOnInit() {

    this.signupForm = this.formBuilder.group({
      name:['',
        [
           Validators.required,
        ]
      ],
      telephone:['',
        [
          Validators.required,
          Validators.minLength(10),
        ]
      ],
      email:['',  
        [
          Validators.required,
          Validators.email
        ]
      ]

    })
  }
  capture() {
      const name = this.signupForm.get('name').value;
      const telephone = this.signupForm.get('telephone').value;
      const email = this.signupForm.get('email').value;

      this.envia
          .interface(name, telephone, email)
          .subscribe(
              () => console.log('enviado'),
              err => {
                console.log(err);
              }
          )
  }
}
