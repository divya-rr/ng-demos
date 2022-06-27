import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";
@Injectable({providedIn:'root'})
export class InterceptorService{
    constructor(private http:HttpClient){}
    fetch(){
     return this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(catchError(this.handleError))
    }
    getToken(){
      return localStorage.getItem('token')
    }
   

    private handleError(error:HttpResponse<any>){
      if (error.status === 401) {
             
      }
      const err = "Unauthorized User";
      return throwError(()=>err);





        // let errMsg = '';
        // // Client Side Error
        // if (error.error instanceof ErrorEvent) {        
        //   errMsg = `Error: ${error.error.message}`;
        // } 
        // else {  // Server Side Error
        //   errMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        // }
        // return throwError(errMsg);
      
        
    }

}