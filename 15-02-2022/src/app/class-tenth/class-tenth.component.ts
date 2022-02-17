import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-tenth',
  templateUrl: './class-tenth.component.html',
  styleUrls: ['./class-tenth.component.css']
})
export class ClassTenthComponent implements OnInit {

  sub_10: string='';
  @Input()
  class!: string;

  @Input() subjects_10!: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
