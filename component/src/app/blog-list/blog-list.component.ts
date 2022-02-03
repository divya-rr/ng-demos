import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  currentPage!:number;

  blogPosts:Blog[][] =[
    [{title:'Post 1',summary:'Adipisicing et irure amet quis in labore sit.'},
  {title:'Post 2',summary:'Id eu aliquip id mollit ipsum. Enim irure aliqua officia sunt ipsum magna id ea do ad in aute. Nisi ea esse quis ad Lorem reprehenderit deserunt consectetur labore veniam laborum sunt.'},
  {title:'Post 3',summary:'Dolor incididunt qui qui adipisicing voluptate aliqua enim.'}],

  [{title:'Post 4',summary:'Mollit laborum ullamco eu enim qui veniam dolor nisi ut aliquip eu non.'},
  {title:'Post 5',summary:'Ut nulla fugiat excepteur laborum proident dolor ex.'},
  {title:'Post 6',summary:'Eiusmod voluptate minim do nulla laboris nulla nulla aute aliqua sunt esse.'}],

  [{title:'Post 7',summary:'Deserunt officia nulla nisi nisi commodo duis nostrud consequat quis sunt eu.'},
  {title:'Post 8',summary:'Enim sit amet veniam elit aliqua laboris ipsum cupidatat et laboris.'},
  {title:'Post 9',summary:'Culpa exercitation nostrud ipsum cupidatat elit fugiat.'}]


  ]

  constructor() { }

  ngOnInit(): void {
    this.currentPage=0
    // this.blogPosts.push(new Blog('Post 1','Summary 1'));
    // this.blogPosts.push(new Blog('Post 2', 'Est Lorem aliquip duis mollit eu amet. Laborum Lorem id veniam dolore adipisicing ullamco id veniam pariatur est fugiat. Anim veniam et non elit laborum aute. Exercitation enim laborum quis et laborum. Ipsum qui elit deserunt cillum non et dolore qui minim fugiat consectetur excepteur. Ullamco labore proident id irure officia nisi.'
    // ));
  }
  updatePage(newPage: number){
    this.currentPage=newPage
  }

}
