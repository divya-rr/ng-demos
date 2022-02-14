import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { AttachmentsComponent } from './attachments/attachments.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BasicInformationComponent,
    EducationComponent,
    WorkExperienceComponent,
    AttachmentsComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
