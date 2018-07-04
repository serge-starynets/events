import { Component } from '@angular/core';

@Component({
  selector: 'concerts-app',
  template: `
  <nav-bar></nav-bar>
  <concerts-list></concerts-list>
  `
})
export class ConcertsAppComponent {
  title = 'app';
}
