import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private myHttp: HttpClient) { }

  getAllPosts(){
    return this.myHttp.get(this.apiUrl + '/posts');
  }

  getAPost(aPostId: number) {
    return this.myHttp.get(`${this.apiUrl}/posts/${aPostId}`);
  }

  getPostComments(aPostId: number): Observable<Comment[]> {
    return this.myHttp.get<Comment[]>(`${this.apiUrl}/posts/${aPostId}/comments`);
  }

  createComment(aComment: Comment){
    return this.myHttp.post(`${this.apiUrl}/posts/${aComment.postId}/comments`, {aComment})
  }
}
