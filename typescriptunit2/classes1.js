var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var car = /** @class */ (function () {
    function car(num) {
        this.num = num;
    }
    car.prototype.numname = function () {
        console.log(this.num);
    };
    return car;
}());
var van = /** @class */ (function (_super) {
    __extends(van, _super);
    function van() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    van.prototype.printNum = function () {
        console.log(this.num * 2);
    };
    return van;
}(car));
var lexus = new car(1);
var mercy = new van(1);
//console.log(lexus);
//console.log(lexus.num);
console.log(mercy.printNum());
