import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IPost } from 'src/app/models/posts.model';
import { IAppState } from 'src/app/store/app.store';
import { updatePost } from '../state/posts.actions';
import { getPostById } from '../state/posts.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit, OnDestroy {
  post: IPost;
  postForm: FormGroup;
  postSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private store: Store<IAppState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.postSubscription = this.store
        .select(getPostById, { id })
        .subscribe((data) => {
          // console.log('data', data);
          this.post = data;
          this.createForm();
        });
    });
  }
  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(this.post.description, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onSubmit() {
    if (!this.postForm.valid) {
      return;
    }
    const title = this.postForm.value.title;
    const description = this.postForm.value.description;

    const post: IPost = {
      id: this.post.id,
      title,
      description,
    };

    this.store.dispatch(updatePost({ post }));

    this.router.navigate(['posts']);
  }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }
}
