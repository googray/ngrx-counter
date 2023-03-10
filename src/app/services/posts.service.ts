import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IPost } from '../models/posts.model';
import { deletePost } from '../posts/state/posts.actions';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPost(): Observable<IPost[]> {
    return this.http
      .get<IPost[]>(
        `https://ngrx-counter-tutorial-58c13-default-rtdb.firebaseio.com/posts.json`
      )
      .pipe(
        map((data) => {
          const posts: IPost[] = [];
          for (let key in data) {
            posts.push({ ...data[key], id: key });
          }
          return posts;
        })
      );
  }

  addPost(post: IPost): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(
      `https://ngrx-counter-tutorial-58c13-default-rtdb.firebaseio.com/posts.json`,
      post
    );
  }

  updatePost(post: IPost) {
    const postData = {
      [post.id]: { title: post.title, description: post.description },
    };
    return this.http.patch(
      `https://ngrx-counter-tutorial-58c13-default-rtdb.firebaseio.com/posts.json`,
      postData
    );
  }

  deletePost(id: string) {
    return this.http.delete(
      `https://ngrx-counter-tutorial-58c13-default-rtdb.firebaseio.com/posts/${id}.json`
    );
  }
}
