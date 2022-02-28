import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './servers/server/deactivate-guard.service';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './authenticate/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { UserGuard } from './authenticate/guard-users.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    ServersComponent,
    ServerComponent,
    PageNotFoundComponent,
    AuthenticateComponent,
    PostComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [AuthGuard,AuthService,CanDeactivateGuard,AuthenticationService,UserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
