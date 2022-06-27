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
         localStorage.setItem("userData",JSON.stringify(this.user))
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDMG2gi1pWPlgT6vu-OJYBnO7ZgyDFFVMI',{
            email:email,password:password,returnsecuretoken:true
        })
        .pipe(catchError(this.handleError),tap(res=>{
            console.log(this.user)
            console.log(res.expiresIn)
           this.handleAuthentication(res.email,res.localId,res.idToken)
           
        }
        )
        )
    }
    resetPassword(email:string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDMG2gi1pWPlgT6vu-OJYBnO7ZgyDFFVMI',{
           email:email,requestType:"PASSWORD_RESET"
        }).pipe(catchError(this.handleError),tap(res=>{
           
           
         }
         ))

    }


    signin(email:string,password:string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDMG2gi1pWPlgT6vu-OJYBnO7ZgyDFFVMI',{
            email:email,password:password,returnsecuretoken:true
        }).pipe(catchError(this.handleError),tap(res=>{
           
            this.handleAuthentication(res.email,res.localId,res.idToken)
            console.log(res.expiresIn)
         }
         ))



        
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
                            break;
                            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                                errorMessage="Too many attempts"
                                break;
                            case 'INVALID_EMAIL':
                                errorMessage="Please enter valid email"
                                break;
                    }
                    return throwError(()=>{return errorMessage})

    }
    private handleAuthentication(email:string,userId:string,token:string){
        const expirationDate = new Date(new Date().getTime()+ 3600*1000)
        console.log(expirationDate)
            const user= new User(email,userId,token,expirationDate)
            this.user.next(user)
            console.log("User",user)


    }

        

    

}
