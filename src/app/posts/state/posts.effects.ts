import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, of, switchMap } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import {
  addPost,
  addPostSuccess,
  loadPost,
  loadPostSuccess,
  updatePostSuccess,
  updatePost,
  deletePost,
  deletePostSuccess,
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

  updatePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updatePost),
      switchMap((action) => {
        return this.postService.updatePost(action.post).pipe(
          map((data) => {
            return updatePostSuccess({ post: action.post });
          })
        );
      })
    );
  });

  deletePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deletePost),
      switchMap((action) => {
        return this.postService.deletePost(action.id).pipe(
          map((data) => {
            return deletePostSuccess({ id: action.id });
          })
        );
      })
    );
  });
}
