import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        backgroundColor: 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(500)),
      // transition('highlighted => normal', animate(800))
    ])
  ]
})
export class AppComponent {
  state = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item): void {
    this.list.push(item);
  }

  onDelete(item): void {
    this.list.splice(this.list.indexOf(item), 1);
  }

  onAnimate(): void {
    this.state = this.state === 'normal' ? 'highlighted' : 'normal';
  }
}
