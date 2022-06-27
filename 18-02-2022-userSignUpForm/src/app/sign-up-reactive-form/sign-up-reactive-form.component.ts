import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

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
    zipCode: ['',[Validators.required,Validators.pattern('^[1-9][0-9]{5}$')]],
    id:[]

  });

  constructor(private fb:FormBuilder,private router:Router,private userService:UserService) { }

edit=false
index!:number

  ngOnInit(){
    this.userService.getData.subscribe(data=>{
     
      
      this.edit=data
   })
   this.userService.getData2.subscribe(id=>{
    this.index=id
   })

   
   if(this.edit==true){
     this.data=JSON.parse(localStorage.getItem("users") || '[]')
     console.log(this.index);
     
     this.user = this.data.find((info) => this.index == info.id);

     this.form.patchValue(this.user)
     console.log(this.form.value);
    
     
    }
 
  
   
  }

  isFieldValid(field: string) {
    return !this.form.get(field)?.valid && this.form.get(field)?.touched;
  }






  
  validateAllFormFields(formGroup: FormGroup) {       
    Object.keys(formGroup.controls).forEach(field => {  
      const control = formGroup.get(field);             
      control?.markAsTouched();
    });
  }

  data:{name:string,email:string,address:string,address_2:string,country:string,city:string,state:string,zipCode:string,id:number}[]=[]
id:number=0
user!:any

  onSubmit(){
   
    
   
    if (this.form.valid) {
      console.log("Form Submitted!");
      console.log(this.form.value)
     
   
      this.form.patchValue({id:this.id})
      this.data=JSON.parse(localStorage.getItem("users") || '[]')
      this.id=this.data.length
      this.form.patchValue({id:this.id})
        this.data.push(this.form.value)

      



     
      console.log(this.data);
      
      localStorage.setItem('users',JSON.stringify(this.data))
      this.router.navigateByUrl("user/list")
     
      
    }
    else {
      this.validateAllFormFields(this.form); 
    }

  }

}
