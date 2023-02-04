import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannelName, customIncrement } from '../states/counter.actions';
import { ICounterState } from '../states/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit {
  value: number;
  channelName: string;
  constructor(private store: Store<{ counter: ICounterState }>) {}

  ngOnInit() {
    this.store.select('counter').subscribe((data) => {
      this.channelName = data.channelName;
    });
  }

  onAdd() {
    this.store.dispatch(customIncrement({ count: +this.value }));
  }

  onChangeChannelName() {
    this.store.dispatch(changeChannelName());
  }
}
