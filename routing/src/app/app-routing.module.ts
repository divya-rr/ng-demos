import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { UserGuard } from './authenticate/guard-users.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostComponent } from './post/post.component';
import { CanDeactivateGuard } from './servers/server/deactivate-guard.service';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"users",component:UsersComponent,
  // canActivate:[UserGuard],

  children:[{path:":id/:name",component:UserComponent}]
},
  {path:"home",component:HomeComponent},
  {path:"posts",component:PostComponent},
  {path:"authenticate",component:AuthenticateComponent},
  {path:"servers",component:ServersComponent,
  canActivateChild:[AuthGuard],   
   children:[{path:":id/:name",component:ServerComponent,
   canDeactivate:[CanDeactivateGuard]
  }
  ]},
  {path:"",redirectTo:"/home",pathMatch:'full'},
  {path:"logout",component:AuthenticateComponent},
  {path:"**",component:PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
