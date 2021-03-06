import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  myPosts: any = [];

  constructor(private myPostService: PostService) { }

  ngOnInit(): void {
    this.myPostService.getAllPosts().subscribe(
      (data) => {
        // console.log(data);
        this.myPosts = data;
      }
    );
  }

}
