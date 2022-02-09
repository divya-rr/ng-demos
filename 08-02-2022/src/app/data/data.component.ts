import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  @Input() info:{fullName:string,email:string,phone:string,number:string,address:string}={
    fullName: '',
    email: '',
    phone: '',
    address: '',
    number: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
