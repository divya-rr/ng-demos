import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers=[
    {
        id:1,
  name:"Max",
  status:"offline"

    },
    {
        id:2,
        name:"Sam",
        status:"Online"
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}
