"use strict";
// interface shapes{
//     width:number;
//     height:number;
//     radious:number;
// }
// class shape implements shapes{
//     constructor(public width:number ,public height:number ,public radious:number){}
// }
// class shapes{
//     private shape:string
//     constructor(shape:string){
//         this.shape = shape
//     }
//     area(r:number){
//         return 3.14*r*r;
//     }
// }
class shapes {
    constructor(shape) {
        this.shape = shape;
    }
    ShowShape() {
        return `It is a ${this.shape}`;
    }
}
class rectangle extends shapes {
    constructor(shape, lenght, width) {
        super(shape);
        this.length = lenght;
        this.width = width;
    }
    ShowShape() {
        return `this is a ${this.shape}`;
    }
    calArea() {
        return this.length * this.width;
    }
}
class circle extends shapes {
    constructor(radius, shape) {
        super(shape);
        this.radius = radius;
    }
    ShowShape() {
        return `this is a ${this.shape}`;
    }
    showArea() {
        return Math.PI * this.radius ** 2;
    }
}
const whatShape = new rectangle('rectangle', 10, 20);
console.log(whatShape.ShowShape());
console.log(whatShape.calArea());
