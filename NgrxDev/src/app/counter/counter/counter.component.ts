import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  counter: number = 0;

  onIncrement() {
    this.counter++;
  }

  onDecrement() {
    this.counter--;
  }

  onReset() { this.counter = 0 }
}
