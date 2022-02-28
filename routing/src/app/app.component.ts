import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from './authenticate/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuthenticated=false
  userSub!: Subscription;
  title = 'routing';
  constructor(private authService:AuthenticationService){}
  ngOnInit(): void {
      this.userSub=this.authService.user.subscribe(user=>{
        this.isAuthenticated=!user?false:true
       
      })
  }
}
