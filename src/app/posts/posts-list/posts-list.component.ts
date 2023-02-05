import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/models/posts.model';
import { IAppState } from 'src/app/store/app.store';
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
  }
}
