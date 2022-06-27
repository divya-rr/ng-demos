import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthenticationService } from '../authenticate/auth.service';

@Component({
  selector: 'app-forget-password',
  template: `
  <div class="row">
    <div class="col-md-8">
   <div class="alert alert-success" role="alert" *ngIf="success && msg">
           {{msg}}
           <button class="btn btn-default" (click)="onClose()">Ok</button>
          </div>
          <div class="alert alert-danger" role="alert" *ngIf="msg && error">
           {{msg}}
           <button class="btn btn-default" (click)="onClose()">Ok</button>
          </div>
   <div class="card login-form">
	<div class="card-body">
		<h3 class="card-title text-center">Reset password</h3>
		
		<div class="card-text">
			<form #forgetForm="ngForm">
				<div class="form-group">
					<label for="exampleInputEmail1">Enter your email address and we will send you a link to reset your password.</label>
					<input type="email" class="form-control form-control-sm" placeholder="Enter your email address" ngModel name="email">
				</div>

				<button type="submit" (click)="reset()" style="margin-right:23px" class="btn btn-primary btn-block">Send password reset email</button>
        <button type="submit" routerLink="/authenticate" class="btn btn-primary btn-block">Back to sign in</button>
			</form>
		</div>
	</div>
</div>
    </div>
  </div>
  `,
  styleUrls: ['./forget-password.component.scss'
    
  ]
})
export class ForgetPasswordComponent implements OnInit {
  @ViewChild('forgetForm') form!:NgForm
  success:boolean=false
  error:boolean=false
  msg:string=""

  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
  }
  reset(){
    const email = this.form.value.email
    this.authService.resetPassword(email).subscribe(
      response=>{console.log(response)
        this.success=true
        this.msg="Please check your email and click on verification link to reset password"
      }
      ,errorMessage=>{
        this.error=true
     console.log(errorMessage)
    this.msg=errorMessage})

  }
  onClose(){
    this.msg=""
  }

}
