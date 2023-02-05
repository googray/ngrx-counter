import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IAppState } from 'src/app/store/app.store';
import { getCounter } from '../states/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  counter$: Observable<number> | undefined;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);
  }
}
