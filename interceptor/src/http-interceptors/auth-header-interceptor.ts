import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthHeaderInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req.url)
        const authToken="My authorization token"
        const authReq=req.clone({
               setHeaders:{Authorization:authToken}
        })
        
        return next.handle(authReq)
        
    }
    
}