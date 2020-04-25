import { Component } from '@angular/core';
import { state, style, trigger } from '@angular/animations';

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
        'background-color': 'blue',
        transform: 'translateX(100px)'
      }))
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
