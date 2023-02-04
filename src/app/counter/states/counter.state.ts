export interface ICounterState {
  counter: number;
  channelName: string;
}

export const initialState: ICounterState = {
  counter: 0,
  channelName: 'Roman Web Dev',
};
