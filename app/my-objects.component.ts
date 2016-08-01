import { Component } from '@angular/core';
import { MyObject } from './my-object'; // Import model
import { MYOBJECTS } from './mocks'; // Import mocks

@Component({
  selector: 'my-objects',
  templateUrl: 'app/my-objects.component.html',
  styleUrls: ['app/my-objects.component.css']
})
export class MyObjectsComponent {
  myObjects: MyObject[];

  ngOnInit() {
    this.myObjects = MYOBJECTS;
  }

  totalObjectQuantity(){
    return this.myObjects.reduce((prev, current) => prev + current.quantity, 0);
  }
};
