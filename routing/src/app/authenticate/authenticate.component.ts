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

  
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email
    const password = form.value.password
    if (this.signedUp) {
      this.authService.signup(email, password).subscribe(
        response=>{console.log(response)}
        ,errorMessage=>{
          
        this.error=errorMessage}
        
      )
       
     
    }
    else{
      this.authService.login(email,password).subscribe(
        response=>{console.log(response)
        this.route.navigate(['users'])}
        ,errorMessage=>{
          
          this.error=errorMessage}
      )
    }
   

  }
}
