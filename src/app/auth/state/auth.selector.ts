import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAuthState } from './auth.state';

export const AUTH_STATE_NAME = 'auth';

export const getAuthState = createFeatureSelector<IAuthState>(AUTH_STATE_NAME);

export const getAuth = createSelector(getAuthState, (state) => {
  return state['auth'];
});
