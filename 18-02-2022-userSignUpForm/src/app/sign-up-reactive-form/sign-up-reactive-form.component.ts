import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-reactive-form',
  templateUrl: './sign-up-reactive-form.component.html',
  styleUrls: ['./sign-up-reactive-form.component.css']
})
export class SignUpReactiveFormComponent  {
  form = this.fb.group({

    name: ['',[ Validators.required,Validators.pattern('^([a-zA-Z]+ )+[a-zA-Z]+$|^[A-Za-z]+$')]],
    email: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$'),Validators.email]],
    address: ['', Validators.required],
    address_2: [''],
    country: ['',Validators.required],
    city: ['',Validators.required],
    state: ['',Validators.required],
    zipCode: ['',[Validators.required,Validators.pattern('^[1-9][0-9]{5}$')]]

  });

  constructor(private fb:FormBuilder) { }

  isFieldValid(field: string) {
    return !this.form.get(field)?.valid && this.form.get(field)?.touched;
  }






  
  validateAllFormFields(formGroup: FormGroup) {       
    Object.keys(formGroup.controls).forEach(field => {  
      const control = formGroup.get(field);             
      control?.markAsTouched();
    });
  }


  onSubmit(){
   
    if (this.form.valid) {
      console.log("Form Submitted!");
      console.log(this.form.value)
      this.form.reset();
      
    }
    else {
      this.validateAllFormFields(this.form); 
    }

  }

}
