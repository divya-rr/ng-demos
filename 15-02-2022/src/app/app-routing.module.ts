import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassEleventhComponent } from './class-eleventh/class-eleventh.component';

import { ClassNinthComponent } from './class-ninth/class-ninth.component';
import { ClassTenthComponent } from './class-tenth/class-tenth.component';
import { ClassesComponent } from './classes/classes.component';


const routes: Routes = [
  {path:"classes",component:ClassesComponent},
  // {path:"9th",component:ClassNinthComponent},
  // {path:"10th",component:ClassTenthComponent},
  // {path:"11th",component:ClassEleventhComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
