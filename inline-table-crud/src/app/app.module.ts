import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType:'danger'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
