import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  students!: Student[];

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('/assets/students.json').subscribe((result:any)=>{
      this.students=result
    });
    

    
  }

}
