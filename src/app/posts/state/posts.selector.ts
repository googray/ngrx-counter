import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPostsState } from 'src/app/models/posts.model';

export const getPostState = createFeatureSelector<IPostsState>('posts');

export const getPosts = createSelector(getPostState, (state) => {
  return state.posts;
});
