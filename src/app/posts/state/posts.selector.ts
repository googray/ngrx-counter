import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPostsState } from 'src/app/models/posts.model';

export const POST_STATE_NAME = 'posts';

export const getPostState = createFeatureSelector<IPostsState>(POST_STATE_NAME);

export const getPosts = createSelector(getPostState, (state) => {
  return state.posts;
});

export const getPostById = createSelector(getPostState, (state, props) => {
  // console.log('pro', props);
  return state.posts.find((post) => post.id === props.id);
});
