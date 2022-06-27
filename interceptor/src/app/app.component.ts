import { Component } from '@angular/core';
import { InterceptorService } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptor';
  err!: string;
  onHandleError(){
    this.err=''
  }
 
  constructor(private service:InterceptorService){}
  onFetch(){
    this.service.fetch().subscribe(error=>{
      console.log(error)
      this.err="Something went wrong"
     
      
    })
  
   
   
    
  }
}
