import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '18-02-2022-userSignUpForm';
  userForm = this.fb.group({

    name: ['', Validators.required],
    email: ['', [Validators.required,Validators.pattern(''),Validators.email]],
    address: ['', Validators.required],
    address_2: [''],
    country: ['',Validators.required],
    city: ['',Validators.required],
    state: ['',Validators.required],
    zipCode: ['',Validators.required]

  });
  
  constructor(private fb: FormBuilder) { }





}
