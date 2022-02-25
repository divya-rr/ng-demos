import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class PostService{
    constructor(private httpClient:HttpClient){}
    onCreatePost(postData:{title:string;content:string}){
       return this.httpClient.post('https://posts-43e8b-default-rtdb.firebaseio.com/posts.json',postData)
    }
    fetchPosts(){
        return this.httpClient.get('https://posts-43e8b-default-rtdb.firebaseio.com/posts.json')
    }


}

