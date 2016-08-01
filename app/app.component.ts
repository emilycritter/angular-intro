import { Component } from '@angular/core';
import { MyObjectComponent } from './app.my-object';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  <my-object></my-object>`,
  directives: [MyObjectComponent]
})
export class AppComponent {
  title = 'Angular 2 Intro';
}
