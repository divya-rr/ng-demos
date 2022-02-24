import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { EmailValidator } from "@angular/forms";
import { catchError, pipe, throwError } from "rxjs";
interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
  }


@Injectable({providedIn:'root'})
export class AuthenticationService{


    constructor(private http:HttpClient){}

    signup(email:string,password:string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBYbMHxMlntHEu7lrVWBKuuyo8ygGnFseE',{
            email:email,password:password,returnsecuretoken:true
        })
        // .pipe(catchError(errorResponse=>{
        //     let errorMessage="An error occured"
        //     if(!errorResponse.error || !errorResponse.error.error)
        //     return throwError(errorMessage)
        //     switch(errorResponse.error.error.message){
        //         case'EMAIL_EXISTS':
        //         errorMessage="This email already exists"
        //     }
        //     return throwError(errorMessage)
        // })
        // )
    }

}