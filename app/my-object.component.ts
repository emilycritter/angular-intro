import { Component } from '@angular/core';
import { MyObject } from './my-object';
import { MYOBJECT } from './mocks';
@Component({
  selector: 'my-object',
  templateUrl: 'app/my-object.component.html',
  styleUrls: ['app/my-object.component.css']
})
export class MyObjectComponent {
  myObjects: MyObject[];

  ngOnInit() {
    this.myObjects = MYOBJECT;
  }

  totalObjectQuantity(){
    return this.myObjects.reduce((prev, current) => prev + current.quantity, 0);
  }
})
