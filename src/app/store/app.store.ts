// import { counterReducer } from '../counter/states/counter.reducer';
// import { ICounterState } from '../counter/states/counter.state';
// import { IPostsState } from '../models/posts.model';
// import { postsReducer } from '../posts/state/posts.reducer';
import { SharedReducer } from './Shared/shared.reducer';
import { SHARED_STATE_NAME } from './Shared/shared.selector';
import { ISharedState } from './Shared/shared.state';

export interface IAppState {
  // counter: ICounterState;
  // posts: IPostsState;
  [SHARED_STATE_NAME]: ISharedState;
}

export const appReducer: any = {
  // counter: counterReducer,
  // posts: postsReducer,
  [SHARED_STATE_NAME]: SharedReducer,
};
