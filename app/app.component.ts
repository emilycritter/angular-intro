import { Component } from '@angular/core';
import { MyObjectsComponent } from './my-objects.component';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  <my-objects></my-objects>`,
  directives: [MyObjectsComponent]
})
export class AppComponent {
  title = 'Angular 2 Intro';
}
