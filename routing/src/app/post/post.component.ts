import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService:PostService) { }
  posts:{title:string,content:string}[]=[]

  ngOnInit(): void {
    this.postService.fetchPosts().subscribe(res=>{console.log(res)})
  }
  onSubmit(posts: { title: string; content: string; }){
    this.postService.onCreatePost(posts).subscribe(response=>{console.log(response)})

  }


}
