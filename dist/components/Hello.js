"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// export const Hello = (props: HelloProps) => 
// <h1>Hello from {props.compiler} and {props.framework}!</h1>;
var bool = false;
var dec = 6;
var hex = 0xf00d;
var bin = 10;
var oct = 484;
var str = "This is a string";
str = "2";
var fullName = "John Nguyen";
var age = 21;
var sentence = "Hi, I'm " + fullName + " and I am " + age + " yrs old.";
var numArr = [1, 2, 3];
var numArryGen = [2, 3, 4];
var x = ["foo", 1];
var y = x[0].substr(1);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color.Green;
var notSure = 4;
notSure = "string";
notSure = false;
var people = [];
people.push({
    name: "John",
    age: 21
});
// Class : Hello --> Returns Hello H1 with HelloProps
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hello.prototype.render = function () {
        return (React.createElement("div", null, people));
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;
//# sourceMappingURL=Hello.js.map