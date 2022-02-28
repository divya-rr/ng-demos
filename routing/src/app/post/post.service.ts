import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Post } from "./post.model";

@Injectable({providedIn:'root'})
export class PostService{
    constructor(private httpClient:HttpClient){}
    onCreatePost(postData:{title:string;content:string}){
       return this.httpClient.post<{name:string}>('https://posts-43e8b-default-rtdb.firebaseio.com/posts.json',postData)
    }
    fetchPosts(){
        return this.httpClient.get<{[key:string]:Post}>('https://posts-43e8b-default-rtdb.firebaseio.com/posts.json').pipe(map((responseData)=>{
            console.log(responseData)
            const postsArray:Post[]=[]
            for(const key in responseData){
                postsArray.push(responseData[key])
                // console.log(postsArray)
             
                postsArray.push({...responseData[key],id:key})
              
            }
        }))
    }


}

