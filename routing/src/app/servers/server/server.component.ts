import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { CanComponentDeactivate } from './deactivate-guard.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit,CanComponentDeactivate {

  server!: { id: number; name: string; status: string; };
  active=true

  constructor(private route:ActivatedRoute,private router:Router,private authService:AuthService) { }
  canDeactivate(): boolean | Observable<boolean>{
    if(!this.active){
      
      console.log(this.active)
      
      return this.active
    }
    
    else
    
    return false

  }

  ngOnInit(): void {
    this.server={
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name'],
      status:this.route.snapshot.params['status']
    }
  this.route.snapshot.queryParams['allowEdit']




    this.route.params.subscribe((params:Params)=>{
      this.server.id=params['id']
      this.server.name=params['name']
      
    })
    // this.route.queryParams.subscribe((queryParams:Params)=>{
    //   this.allowEdit=queryParams['allowEdit']===1?true:false
    // })
  }

  

}
