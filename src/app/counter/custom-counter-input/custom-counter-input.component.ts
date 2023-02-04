import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeChannelName, customIncrement } from '../states/counter.actions';
import { getChannelName } from '../states/counter.selectors';
import { ICounterState } from '../states/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit {
  value!: number;
  channelName$: Observable<string> | undefined;
  constructor(private store: Store<{ counter: ICounterState }>) {}

  ngOnInit() {
    this.channelName$ = this.store.select(getChannelName);
  }

  onAdd() {
    this.store.dispatch(customIncrement({ count: +this.value }));
  }

  onChangeChannelName() {
    this.store.dispatch(changeChannelName());
  }
}
