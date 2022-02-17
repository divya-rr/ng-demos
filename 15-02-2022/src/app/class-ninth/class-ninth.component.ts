import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-ninth',
  templateUrl: './class-ninth.component.html',
  styleUrls: ['./class-ninth.component.css']
})
export class ClassNinthComponent implements OnInit {
  name:string=''
  @Input()
  subjects_9!: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
