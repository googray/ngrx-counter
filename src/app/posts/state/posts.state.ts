import { IPostsState } from 'src/app/models/posts.model';

export const initialState: IPostsState = {
  posts: [
    { id: '1', title: 'Sample title 1', description: 'Sample Description 1' },
    { id: '2', title: 'Sample title 2', description: 'Sample Description 2' },
  ],
};
