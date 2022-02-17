import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-eleventh',
  templateUrl: './class-eleventh.component.html',
  styleUrls: ['./class-eleventh.component.css']
})
export class ClassEleventhComponent implements OnInit {
  science:string=''
  commerce:string=''
 @Input()
  science_sub!: string[];
  @Input()
  commerce_sub!:string[];

  constructor() { }

  ngOnInit(): void {
  }

}
