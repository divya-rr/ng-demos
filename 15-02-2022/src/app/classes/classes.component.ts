import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  
  place=["9","10","11"]
  subjects_9:string[]=["English",'Maths','Social Science',"Science","Hindi"]
  subjects_10:string[]=["Social Science","English","Hindi","Maths","Science"]
  science_sub=["Physics","Chemistry","Maths","English"]
  commerce_sub=["Accountancy","Economics","English","Business Studies"]
  classes=["9","10","11(Science)","11(Commerce)"]
  


  constructor() { }

  ngOnInit(): void {
  }

}
