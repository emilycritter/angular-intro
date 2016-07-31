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
      <p> The cost is {{myObject.price | currency:'USD':true}}</p>
    </li>
    <h3>The total quantity of all of the objects is {{totalObjectQuantity()}}.</h3>
  </ul>`
})
export class AppComponent {
  title = 'Angular 2 Intro';
  myObjects = [{
    "id": 1,
    "name": 'My first object',
    "description": "This is the first object that I will send in."
    "quantity": 1,
    "price": 5.75
  },
  {
    "id": 2,
    "name": 'My second object',
    "description": "Here's a second object."
    "quantity": 20,
    "price": 1000.00
  }];

  totalObjectQuantity(){
    return this.myObjects.reduce(function(prev, current) {return prev + current.quantity; }, 0);
  }
}
