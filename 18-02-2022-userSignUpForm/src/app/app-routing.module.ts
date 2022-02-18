import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateOnSubmitComponent } from './validate-on-submit/validate-on-submit.component';

const routes: Routes = [
  {path:'validate',component:ValidateOnSubmitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
