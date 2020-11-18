import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postId: number;

  post: any;

  constructor(private myRoute: ActivatedRoute,
              private myPostService: PostService) { }

  ngOnInit(): void {
    this.postId = parseInt(this.myRoute.snapshot.paramMap.get('postId'));
    // console.log('post Id', this.postId)
    this.myPostService.getAPost(this.postId).subscribe(
      (data) => this.post = data
    )
  }

}
