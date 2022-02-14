import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  educationForm=this.fb.group({
    school:['',Validators.required],
    program:['',Validators.required],
    educationLevel:['',Validators.required]

  })
  get school(){
    return this.educationForm.get('school')
  }
  get program(){
    return this.educationForm.get('program')
  }
  get educationLevel(){
    return this.educationForm.get('educationLevel')
  }


  ngOnInit(): void {
  }

}
