import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-tenth',
  templateUrl: './class-tenth.component.html',
  styleUrls: ['./class-tenth.component.css']
})
export class ClassTenthComponent implements OnInit {
  sub_10:string=''
  subjects_10=["Social Science","English","Hindi","Maths","Science"]

  constructor() { }

  ngOnInit(): void {
  }

}
