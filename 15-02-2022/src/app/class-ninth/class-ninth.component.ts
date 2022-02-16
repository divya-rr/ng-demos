import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-ninth',
  templateUrl: './class-ninth.component.html',
  styleUrls: ['./class-ninth.component.css']
})
export class ClassNinthComponent implements OnInit {
  name:string=''
  subjects=["English",'Maths','Social Science',"Science","Hindi"]

  constructor() { }

  ngOnInit(): void {
  }

}
