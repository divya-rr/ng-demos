import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input()
  numberOfPages!: any;
  pages!:number[];
  pageNumber:any
  @Output() pageNumberClick= new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.pages=new Array(this.numberOfPages)
  }
  pageNumberClicked(pageNumber: number | undefined)
  {
    this.pageNumberClick.emit(pageNumber)

  }

}
