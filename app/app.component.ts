import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  <ul>
    <li *ngFor="let myObject of myObjects">
      <h2>{{myObject.name}}</h2>
      <p>{{myObject.description}}</p>
      <p *ngIf="myObject.quantity >= 10">There are a bunch of these. ({{myObject.quantity}})</p>
      <p *ngIf="myObject.quantity < 10">There aren't a bunch of these. ({{myObject.quantity}})</p>
    </li>
  </ul>`
})
export class AppComponent {
  title = 'Angular 2 Intro',
  myObjects = [{
    "id": 1,
    "name": 'My first object',
    "description": "This is the first object that I will send in."
    "quantity": 1
  },
  {
    "id": 2,
    "name": 'My second object',
    "description": "Here's a second object."
    "quantity": 20
  }];
}
