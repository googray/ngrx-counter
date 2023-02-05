import { Action, ActionReducerMap } from '@ngrx/store';
import { counterReducer } from '../counter/states/counter.reducer';
import { ICounterState } from '../counter/states/counter.state';
import { IPostsState } from '../models/posts.model';
import { postsReducer } from '../posts/state/posts.reducer';

export interface IAppState {
  counter: ICounterState;
  posts: IPostsState;
}

export const appReducer: any = {
  counter: counterReducer,
  posts: postsReducer,
};
