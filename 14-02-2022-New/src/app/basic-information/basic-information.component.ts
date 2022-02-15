import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from '../shared/password.validator';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  basicInfo=this.fb.group({
    email:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$"),Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]],
    retypePassword:['',Validators.required],
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    phoneNumber:['',[Validators.required,Validators.pattern("[1-9][0-9]{9}")]],
    address:['',Validators.required],
    city:['',Validators.required],
    province:['',Validators.required],
    country:['',Validators.required]

  },{validators:passwordValidator})
  get email(){
    return this.basicInfo.get('email')
  }
  get password(){
    return this.basicInfo.get('password')
  }
  get retypePassword(){
    return this.basicInfo.get('retypePassword')
  }
  get firstName(){
    return this.basicInfo.get("firstName")
  }
  get lastName(){
    return this.basicInfo.get("lastName")
  }
  get phoneNumber(){
    return this.basicInfo.get('phoneNumber')
  }
  get address(){
    return this.basicInfo.get('address')
  }
  get city(){
    return this.basicInfo.get('city')
  }
  get province(){
    return this.basicInfo.get('province')
  }
  get country(){
    return this.basicInfo.get('country')
  }

  ngOnInit(): void {
  }

}
