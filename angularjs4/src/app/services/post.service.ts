import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class PostService {
    private  postUrl:string;
    constructor(private http:Http){
        this.postUrl = 'http://localhost:3000/posts';
    }
    getPosts() : Observable<Comment[]> {

        // ...using get request
        return this.http.get(this.postUrl)
        // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }
}