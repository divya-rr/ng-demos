import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesComponent } from './classes/classes.component';
import { FilterPipe } from './filter.pipe';
import { ClassNinthComponent } from './class-ninth/class-ninth.component';
import { ClassTenthComponent } from './class-tenth/class-tenth.component';
import { ClassEleventhComponent } from './class-eleventh/class-eleventh.component';
import { ScienceComponent } from './class-eleventh/science/science.component';
import { CommerceComponent } from './eleventh/commerce/commerce.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    FilterPipe,
    ClassNinthComponent,
    ClassTenthComponent,
    ClassEleventhComponent,
    ScienceComponent,
    CommerceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
