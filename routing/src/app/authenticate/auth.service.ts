import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { EmailValidator } from "@angular/forms";
import { catchError, pipe, Subject, tap } from "rxjs";
import { Observable, of, from, throwError } from "rxjs";
import { User } from "./user.model";
interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered:boolean
  }


@Injectable({providedIn:'root'})
export class AuthenticationService{
    user=new Subject<User>()


    constructor(private http:HttpClient){}

    signup(email:string,password:string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBYbMHxMlntHEu7lrVWBKuuyo8ygGnFseE',{
            email:email,password:password,returnsecuretoken:true
        })
        .pipe(catchError(this.handleError),tap(res=>{
            const user= new User(res.email,res.localId,res.idToken)
            this.user.next(user)}
        ))
    }


    login(email:string,password:string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBYbMHxMlntHEu7lrVWBKuuyo8ygGnFseE',{
            email:email,password:password,returnsecuretoken:true
        }).pipe(catchError(this.handleError))
        // .pipe(catchError(errorResponse=>{
        //     let errorMessage="An error occured"
        //     if(!errorResponse.error || !errorResponse.error.error){
        //     return throwError(()=> {return errorMessage})
        //     }
        //     switch(errorResponse.error.error.message){
        //         case'INVALID_PASSWORD':
        //         errorMessage="Password is not correct"
        //     }
        //     return throwError(()=>{return errorMessage})
        //    })
        // )

    }

    private handleError(errorResponse:HttpErrorResponse){
        console.log(errorResponse)
        let errorMessage="An error occured"
            if(!errorResponse.error || !errorResponse.error.error){
            return throwError(()=>errorMessage)
            }
            switch(errorResponse.error.error.message){
                        case'EMAIL_EXISTS':
                        errorMessage="This email already exists"
                        break;
                        case'INVALID_PASSWORD':
                        errorMessage="Password is not correct"
                        break;
                        case 'EMAIL_NOT_FOUND':
                            errorMessage="Email is not found"
                            break
                            case 'INVALID_EMAIL':
                                errorMessage="Please enter valid email"
                    }
                    return throwError(()=>{return errorMessage})

    }

}
