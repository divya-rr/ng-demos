import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  server!: { id: number; name: string; status: string; };

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.server={
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name'],
      status:this.route.snapshot.params['status']
    }
  




    this.route.params.subscribe((params:Params)=>{
      this.server.id=params['id']
      this.server.name=params['name']
      
    })
  }

}
