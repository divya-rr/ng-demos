import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  science:string=''
  science_sub=["Physics","Chemistry","Maths","English"]

  constructor() { }

  ngOnInit(): void {
  }

}
