import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ICounterState } from '../states/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  // @Input() counter!: number;
  counter: number | undefined;
  // counter$: Observable<ICounterState>;
  // counterSubscription: Subscription;

  constructor(private store: Store<{ counter: ICounterState }>) {}

  ngOnInit(): void {
    // this.counterSubscription = this.store
    //   .select('counter')
    //   .subscribe((data) => {
    //     this.counter = data.counter;
    //   });

    // this.counter$ = this.store.select('counter');

    this.store.select('counter').subscribe((data) => {
      this.counter = data.counter;
    });
  }

  // ngOnDestroy() {
  //   if (this.counterSubscription) this.counterSubscription.unsubscribe();
  // }
}
