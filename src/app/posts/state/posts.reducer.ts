import { Action, createReducer, on } from '@ngrx/store';
import { IPostsState } from 'src/app/models/posts.model';
import {
  addPostSuccess,
  deletePost,
  loadPostSuccess,
  updatePost,
} from './posts.actions';
import { initialState } from './posts.state';

export const _postReducer = createReducer(
  initialState,
  on(addPostSuccess, (state, action) => {
    // console.log('ACT', action);
    let post = { ...action.post };

    // post.id = (state.posts.length + 1).toString();
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(updatePost, (state, action) => {
    const updatedPosts = state.posts.map((post) => {
      return action.post.id === post.id ? action.post : post;
    });

    return {
      ...state,
      posts: updatedPosts,
    };
  }),
  on(deletePost, (state, { id }) => {
    const updatedPosts = state.posts.filter((post) => {
      return post.id !== id;
    });
    return {
      ...state,
      posts: updatedPosts,
    };
  }),
  on(loadPostSuccess, (state, action) => {
    return {
      ...state,
      posts: action.posts,
    };
  })
);

export function postsReducer(state: IPostsState, action: Action) {
  return _postReducer(state, action);
}
