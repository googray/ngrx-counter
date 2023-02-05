import { Action, createReducer } from '@ngrx/store';
import { IPostsState } from 'src/app/models/posts.model';
import { initialState } from './posts.state';

export const _postReducer = createReducer(initialState);

export function postsReducer(state: IPostsState, action: Action) {
  return _postReducer(state, action);
}
