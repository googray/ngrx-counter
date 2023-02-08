import { Action, createReducer, on } from '@ngrx/store';
import { IPostsState } from 'src/app/models/posts.model';
import { addPost, updatePost } from './posts.actions';
import { initialState } from './posts.state';

export const _postReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    // console.log('ACT', action);
    let post = { ...action.post };

    post.id = (state.posts.length + 1).toString();
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
  })
);

export function postsReducer(state: IPostsState, action: Action) {
  return _postReducer(state, action);
}
