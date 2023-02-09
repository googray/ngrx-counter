import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICounterState } from './counter.state';

export const COUNTER_STATE_NAME = 'counter';

const getCounterState =
  createFeatureSelector<ICounterState>(COUNTER_STATE_NAME);

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});

export const getChannelName = createSelector(getCounterState, (state) => {
  return state.channelName;
});
