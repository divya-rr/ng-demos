import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable ,map,of} from "rxjs";
import { InterceptorService } from "src/app/service";
@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor{
   constructor(private auth:InterceptorService){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req.url)
        const authToken=this.auth.getToken()
        const authReq=req.clone(
            {setHeaders:{Authorization:`${authToken}`}}
            //    { headers: req.headers.set('Content-Type', 'application/json') }
               
        )
       

        req = req.clone({ headers: req.headers.append('Content-Type', 'application/json') });
        
        return next.handle(authReq)
        
    }
    
}