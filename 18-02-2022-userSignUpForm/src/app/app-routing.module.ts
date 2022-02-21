import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdfApproachComponent } from './tdf-approach/tdf-approach.component';

import { SignUpReactiveFormComponent } from './sign-up-reactive-form/sign-up-reactive-form.component';

const routes: Routes = [
  {path:'reactive',component:SignUpReactiveFormComponent},
  {path:'tdf',component:TdfApproachComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
