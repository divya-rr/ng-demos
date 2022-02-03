import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  @Input()
  post!: Blog;
  fullSummary!: string;

  constructor(private tr:TruncatePipe) { 
    
  }

  ngOnInit(): void {
    this.fullSummary=this.post.summary;
    this.post.summary=this.tr.transform(this.post.summary,50)
  }
  showFullSummary(){
    this.post.summary=this.fullSummary
  }

}
