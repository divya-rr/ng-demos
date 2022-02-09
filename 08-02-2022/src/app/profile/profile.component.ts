
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
 @Input() name!:string
 @Input() role!:string
 @Input() area!:string
  constructor() { }

  ngOnInit(): void {
  }

}
