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
var mocks_1 = require('./mocks');
var MyObjectComponent = (function () {
    function MyObjectComponent() {
    }
    MyObjectComponent.prototype.ngOnInit = function () {
        this.myObjects = mocks_1.MYOBJECT;
    };
    MyObjectComponent.prototype.totalObjectQuantity = function () {
        return this.myObjects.reduce(function (prev, current) { return prev + current.quantity; }, 0);
    };
    MyObjectComponent = __decorate([
        core_1.Component({
            selector: 'my-object',
            templateUrl: 'app/my-object.component.html',
            styleUrls: ['app/my-object.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MyObjectComponent);
    return MyObjectComponent;
}());
exports.MyObjectComponent = MyObjectComponent;
//# sourceMappingURL=my-object.component.js.map