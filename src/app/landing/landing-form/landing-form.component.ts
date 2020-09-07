import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-landing-form',
  templateUrl: './landing-form.component.html',
  styleUrls: ['./landing-form.component.css']
})
export class LandingFormComponent implements OnInit {

  constructor( private formBuilder: FormBuilder) { }

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

    });
  }

}
