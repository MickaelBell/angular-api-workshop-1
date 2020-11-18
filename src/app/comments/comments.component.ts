import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
// import { exception } from 'console';
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

  comments: any;

  myComment: Comment = new Comment();

  constructor(private myPostService: PostService) { }

  ngOnInit(): void {
    this.myPostService.getPostComments(this.postId).subscribe(
      data => this.comments = data
    )

  }

  addComment() {

    this.myComment.postId = this.postId;
    this.comments.push(this.myComment);
    this.myPostService.createComment(this.myComment).subscribe({
      next: (data) => {
        console.log(data)
        this.comments.push(data)
        alert(JSON.stringify(data))
      },
      error: bug => console.log(bug)
    });

  }

}
