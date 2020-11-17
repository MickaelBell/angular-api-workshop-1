import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Comment } from '../models/comment.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  @Input()
  postId: number;

  comments: Comment[];
  aComment: Comment = new Comment();

  constructor(private myPostService: PostService) { }

  ngOnInit(): void {
    this.myPostService.getPostComments(this.postId).subscribe(
      data => this.comments = data
    )

  }

  addComment() {
    this.aComment.postId = this.postId;

    this.myPostService.createComment(this.aComment).subscribe({
      next: data => {
        console.log(data)
        // console.log('comment before post', this.aComment)
        this.comments.push(this.aComment);
        // console.log('allComs', this.comments)
      },
      error: error => console.error('there is a problem', error)
    });

  }

}
