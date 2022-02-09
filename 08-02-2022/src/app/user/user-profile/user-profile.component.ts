import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 name="John Doe"
 role="Full Stack Developer"
 area="Bay Area,San Francisco,CA"

media: {name:string,link:string}[]=[{name:"Website",link:"https://bootdey.com"},{name:"Github",link:"bootdey"},{name:"Twitter",link:"@bootdey"},{name:"Instagram",link:"bootdey"},{name:"Facebook",link:"bootdey"}]
info:{fullName:string,email:string,phone:string,number:string,address:string}={fullName:"Kenneth Valdez",email:"fip@jukmuh.al",phone:"(239)816-9029",number:"(320)380-4539",address:"Bay Area,San Francisco,CA"}
work:string[]=["Web Design","Website Markup","One Page","Mobile Template","Backend API"];
title:string[]=["Project Status 1","Project Status 2"]
progress1: number[]=[60,80,75,85,78]
progress2:number[]=[80,75,65,89,60]





  constructor() { }

  ngOnInit(): void {
  }

}
