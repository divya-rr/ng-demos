import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from './auth.service';
// 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDb0xTaRAoxyCgvaDF3kk5VYOsTwB_3o7Y'
@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  signedUp=true
  error:string=""

  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
  }
 
  logIn(){
    alert("You are not allowed to login.")
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email=form.value.email
    const password=form.value.password
    if(this.signedUp){
    this.authService.signup(email,password).subscribe((result)=>{
      console.log(result)
    }),(err: { error: { error: { message: any; }; }; })=>
    {
    this.error='An error occured'
  console.log(this.error)
  switch(err.error.error.message){
            case'EMAIL_EXISTS':
            this.error="This email already exists"
        }
        console.log(this.error)
}
    form.reset()
  }
   
  }

}
