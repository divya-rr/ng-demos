import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-approach',
  templateUrl: './tdf-approach.component.html',
  styleUrls: ['./tdf-approach.component.css']
})
export class TdfApproachComponent implements OnInit {


 

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(form.valid)
    console.log(form.value)
  
    
  }

 
  

}

