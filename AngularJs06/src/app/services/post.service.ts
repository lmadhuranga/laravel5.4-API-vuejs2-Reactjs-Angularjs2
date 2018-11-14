import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable, pipe} from 'rxjs';
import { map } from 'rxjs/operators';

const postUrl = 'http://localhost:3000/posts';

@Injectable()
export class PostService {

    constructor(private http: Http) { }

    // List all posts 
    getPosts() {        
        // ...using get request
        return this.http.get(postUrl)
        // ...and calling .json() on the response to return data
        .pipe(map((res: Response) => res.json()));
    } 
    
    // Todo :: merget Add & Update function

    // Add new post data to server
    addPost(post: Post){
        delete(post.id);
        return this.http.post(postUrl,post).pipe(map((res :Response) => res.json()));
    }
    
    // Update the selcted post
    updatePost(post:Post){ 
        let postId:number = post.id;
        delete(post.id);         
        return this.http.put(`${postUrl}/${postId}`, post)
        // ...and calling .json() on the response to return data
        .pipe(map((res: Response) => res.json()));
    }

    // Remove selected post
    deletePost(deleteid:Number){  
        return this.http.delete(`${postUrl}/${deleteid}`)
        // ...and calling .json() on the response to return data
        .pipe(map((res: Response) => res.json()));
    }
    
}

interface Post {
    author: string,
    id: number,
    title: string
}