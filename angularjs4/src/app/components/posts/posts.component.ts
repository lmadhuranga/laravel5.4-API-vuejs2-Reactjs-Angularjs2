import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostService]
})
export class PostsComponent implements OnInit {
  // private PostService:any;
  private postlist: any;

  constructor(private PostService: PostService) {
    this.loadPost();
  }

  ngOnInit() {
    console.log('madd__msg_ post component');
  }

  loadPost(): void {
    this.PostService.getPosts()
        .subscribe(
            posts => {
        this.postlist = posts;
      });
  }

}
