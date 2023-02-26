import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/models/posts.model';
import { IAppState } from 'src/app/store/app.store';
import { deletePost, loadPost } from '../state/posts.actions';
import { getPosts } from '../state/posts.selector';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts!: Observable<IPost[]>;
  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.posts = this.store.select(getPosts);
    this.store.dispatch(loadPost());
  }

  onDeletePost(id: string) {
    if (confirm('Are you sure you want to delete')) {
      this.store.dispatch(deletePost({ id }));
    }
  }
}
