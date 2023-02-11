import { createReducer } from '@ngrx/store';
import { initialState } from './auth.state';

export const _authReducer = createReducer(initialState);

export function AuthReducer(state, action) {
  return _authReducer(state, action);
}
