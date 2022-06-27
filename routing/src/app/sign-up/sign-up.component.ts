import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authenticate/auth.service';

@Component({
  selector: 'app-sign-up',
  template: `
<div class="row">
    <div class="col-md-8">
    <div class="alert alert-danger" role="alert" *ngIf="error">
           {{error}}
           <button class="btn btn-default" (click)="onClose()">Ok</button>
          </div>
        
    <h3 style="margin-top:23px">
     Don't have an account. Sign up
</h3>
    <div class="card">
    <div class="card-body">
      
          
             
        <form #userForm="ngForm" >
        <div class="card-header">
     
     Sign Up
   </div>
           
      
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" ngModel
                name="name"
                required
                class="form-control" #name>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" ngModel
                name="email" #email
                required
                class="form-control">
            </div>

            <div class="form-group">
                <label for="pwd">Password</label>
                <div id="password">
                <input id="pwd" [type]="show?'text':'password'" class="form-control" #password="ngModel" ngModel
                name="password"
                required
                minlength="6">
              

                <img src="../assets/eye-icon.svg" (click)="showPassword()" alt="" >
                </div>
                
                <span style="color: red;" *ngIf="password.errors?.['minlength']">Password should be at least 6 characters</span>
            </div>
           {{userForm.value|json}}
           
            <div style="margin-top: 23px;">
                <button class="btn btn-primary" (click)="signup()" type="submit">Sign Up</button> 
                <button class="btn btn-primary" style="margin-left: 23px;" routerLink="/authenticate" (click)="signup()" type="submit">Back to sign in</button>
                
            <!-- <button class="btn btn-primary" (click)="signUp()" type="submit">{{signedUp?'Signup':'Login'}}</button> -->
            <!-- (click)="signin()" -->
           
            <!-- <button class="btn btn-primary" style="margin-left: 23px;" (click)="onSwitchMode()" type="button">{{signedUp?'Login':'Signup'}}</button> -->
            </div>
        </form>
        </div>
        </div>
    </div>
</div>
  `,
  styleUrls: ['./sign-up.component.scss'
  ]
})
export class SignUpComponent implements OnInit {
  show=false
  showPassword(){
    this.show=!this.show
  }
  @ViewChild('userForm') form!:NgForm
  error:string=""

  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
  }
  signup(){
    if (!this.form.valid) {
      return;
    }
    const email = this.form.value.email
    const password = this.form.value.password
    this.authService.signup(email, password).subscribe(
      response=>{}
      ,errorMessage=>{
        
      this.error=errorMessage})
      
 
      
  }
  onClose(){
    this.error=""
  }

}
