import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild {
    constructor(private authService: AuthService, private route: Router) { }



    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.authService.isAuthenticated().then((authenticated) => {
            if (authenticated)
                return true;

            else
                return this.route.navigate(['/home']);


        });

    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate(childRoute,state)
        
    }

    
}