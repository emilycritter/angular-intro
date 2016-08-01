import { Component } from '@angular/core';

@Component({
  selector: 'my-object',
  templateUrl: 'app/my-object.component.html',
  styleUrls: ['app/my-object.component.css']
})
export class MyObjectComponent {
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
    return this.myObjects.reduce((prev, current) => prev + current.quantity, 0);
  }
})
