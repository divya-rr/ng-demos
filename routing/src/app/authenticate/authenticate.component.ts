import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './auth.service';
// 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDb0xTaRAoxyCgvaDF3kk5VYOsTwB_3o7Y'
@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  signedUp:boolean=true
  error: string = ""
  @ViewChild('userForm') form!:NgForm

  constructor(private authService: AuthenticationService,private route:Router) { }

  ngOnInit(): void {
  }
  signUp(){
    this.signedUp=true
  }
  onSwitchMode(){
    this.signedUp=false
  }
  onClose(){
    this.error=""
  }
  signin(){
    if (!this.form.valid) {
      return;
    }
    const email = this.form.value.email
    const password = this.form.value.password
    this.authService.signin(email,password).subscribe(
      response=>{
      this.route.navigate(['users'])}
      ,errorMessage=>{
        
        this.error=errorMessage}
    )
  }
show=false
showPassword(){
  this.show=!this.show
}

  
  // onSubmit(form: NgForm) {
  //   if (!form.valid) {
  //     return;
  //   }
  //   const email = form.value.email
  //   const password = form.value.password
  //   if (this.signedUp) {
  //     this.authService.signup(email, password).subscribe(
  //       response=>{console.log(response)}
  //       ,errorMessage=>{
          
  //       this.error=errorMessage}
        
  //     )
       
     
  //   }
  //   else{
  //     this.authService.signin(email,password).subscribe(
  //       response=>{console.log(response)
  //       this.route.navigate(['users'])}
  //       ,errorMessage=>{
          
  //         this.error=errorMessage}
  //     )
  //   }
   

  
}
