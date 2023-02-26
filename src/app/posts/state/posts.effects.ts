import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import {
  addPost,
  addPostSuccess,
  loadPost,
  loadPostSuccess,
} from './posts.actions';
import { getPosts } from './posts.selector';

@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions, private postService: PostsService) {}

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPost),
      mergeMap((action) => {
        return this.postService.getPost().pipe(
          map((posts) => {
            return loadPostSuccess({ posts });
          })
        );
      })
    );
  });

  private _addPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addPost),
      mergeMap((action) => {
        return this.postService.addPost(action.post).pipe(
          map((data) => {
            const post = { ...action.post, id: data.name };
            return addPostSuccess({ post });
          })
        );
      })
    );
  });
  public get addPost$() {
    return this._addPost$;
  }
  public set addPost$(value) {
    this._addPost$ = value;
  }
}
