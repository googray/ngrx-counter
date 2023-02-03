import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../states/counter.actions';
import { ICounterState } from '../states/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent {
  value: number;
  constructor(private store: Store<{ counter: ICounterState }>) {}

  onAdd() {
    this.store.dispatch(customIncrement({ count: +this.value }));
  }
}
