"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var mocks_1 = require('./mocks'); // Import mocks
var MyObjectsComponent = (function () {
    function MyObjectsComponent() {
    }
    MyObjectsComponent.prototype.ngOnInit = function () {
        this.myObjects = mocks_1.MYOBJECTS;
    };
    MyObjectsComponent.prototype.totalObjectQuantity = function () {
        return this.myObjects.reduce(function (prev, current) { return prev + current.quantity; }, 0);
    };
    MyObjectsComponent.prototype.upQuantity = function (myObject) {
        if (myObject.quantity < 100) {
            myObject.quantity++;
        }
    };
    MyObjectsComponent.prototype.downQuantity = function (myObject) {
        if (myObject.quantity > 0) {
            myObject.quantity--;
        }
    };
    MyObjectsComponent = __decorate([
        // Import mocks
        core_1.Component({
            selector: 'my-objects',
            templateUrl: 'app/my-objects.component.html',
            styleUrls: ['app/my-objects.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MyObjectsComponent);
    return MyObjectsComponent;
}());
exports.MyObjectsComponent = MyObjectsComponent;
;
//# sourceMappingURL=my-objects.component.js.map