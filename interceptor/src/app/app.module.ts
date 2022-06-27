import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthHeaderInterceptor } from 'src/http-interceptors/auth-header-interceptor';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthHeaderInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
