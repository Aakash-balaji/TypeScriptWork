
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


class shapes{
    protected shape:string;

    constructor(shape:string){
        this.shape = shape
    }

    ShowShape(){
        return `It is a ${this.shape}`;
    }

}


class rectangle extends shapes{
    private length:number;
    private width:number;

    constructor(shape:string, lenght:number, width:number){
        super(shape)
        this.length = lenght;
        this.width = width;
    }

    ShowShape(): string {
        return `this is a ${this.shape}`
    }

    calArea(){
        return this.length * this.width;
    }

}

class circle extends shapes{
    private radius:number;
    constructor(radius:number, shape:string){
        super(shape)
        this.radius = radius
    }

    ShowShape(): string {
        return `this is a ${this.shape}`
    }

    showArea(){
        return Math.PI * this.radius**2;
    }
}

const whatShape = new rectangle('rectangle', 10, 20)
console.log(whatShape.ShowShape());
console.log(whatShape.calArea());

