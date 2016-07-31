import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
    <h2>{{firstObject.name}}</h2>
    <p>{{firstObject.description}}</p>`
})
export class AppComponent {
  title = 'Angular 2 Intro',
  firstObject = {
    "id": 1,
    "name": 'My first Object',
    "description": "This is my first object that I will send in."
    "quantity": 1
  }
}
