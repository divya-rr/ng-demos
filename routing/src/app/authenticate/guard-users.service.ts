import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, tap } from "rxjs";
import { AuthenticationService } from "./auth.service";
@Injectable({providedIn:'root'})

export class UserGuard implements CanActivate{
    constructor(private authService:AuthenticationService,private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.user.pipe(map(user=>{
            // const isAuth=!!user
            // if(isAuth){
            //     return true
            // }
            // return this.router.createUrlTree(['/authenticate'])
            console.log(!!user)
            return !!user}),tap(isAuth=>{
            if(!isAuth){
                console.log(isAuth)
                this.router.navigate(["/authenticate"])
            }
        }))
        
    }
    
}