import { Component } from '@angular/core';
import { InterceptorService } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptor';
  constructor(private service:InterceptorService){}
  onFetch(){
    this.service.fetch().subscribe(res=>{console.log(res)})
    
  }
}
