import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-class',
  templateUrl: './common-class.component.html',
  styleUrls: ['./common-class.component.css']
})
export class CommonClassComponent implements OnInit {
  @Input() class!:string


sub=""
  @Input()
  subjects!: string[];
  @Input() placeholder!:string


  constructor() { }

  ngOnInit(): void {
  }

}
