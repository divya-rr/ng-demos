import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-eleventh',
  templateUrl: './class-eleventh.component.html',
  styleUrls: ['./class-eleventh.component.css']
})
export class ClassEleventhComponent implements OnInit {
  science:string=''
  commerce:string=''
  science_sub=["Physics","Chemistry","Maths","English"]
  commerce_sub=["Accountancy","Economics","English","Business Studies"]

  constructor() { }

  ngOnInit(): void {
  }

}
