class Shape {
    #color
    constructor(color) {
        this.#color = color
    }

    setColor(){
        this.#color = color
    }

    getColor(){
        return this.#color
    }

    getArea(){
        return null
    }
}

class Circle extends Shape {
    #radius
    constructor(color, radius){
        super(color)
        this.#radius = radius
    }

    getArea(){
        return Math.PI * Math.pow(this.#radius, 2)
    }

    print(){
        return `Circle (r: {${this.#radius}}, color: {${this.getColor()}})`
    }
}

class Square extends Shape {
    #side
    constructor (color, side) {
        super(color)
        this.#side = side
    }

    getArea(){
        return Math.pow(this.#side, 2)
    }

    print(){
        return `Square (a: {${this.#side}}, color: {${this.getColor()}})`
    }
}

class Rectangle extends Shape {
    #length
    #width

    constructor (color, length, width) {
        super(color)
        this.#length = length
        this.#width = width
    }

    getArea(){
        return this.#length * this.#width
    }

    print(){
        return `Rectangle (l: {${this.#length}}, w: {${this.#width}}, color: {${this.getColor()}})`
    }
}



const shape = new Shape('red')
console.log('shape color', shape.getColor())
console.log('shape area', shape.getArea())

const circle1 = new Circle('blue', 5)
console.log(circle1.print())
console.log('circle area', circle1.getArea())

const circle2 = new Circle('black', 7)
console.log(circle2.print())
console.log('circle area', circle2.getArea())

const square1 = new Square('green', 10)
console.log(square1.print())
console.log('square area', square1.getArea())

const square2 = new Square('yellow', 14)
console.log(square2.print())
console.log('square area', square2.getArea())

const rectangle1 = new Rectangle('pink', 5, 8)
console.log(rectangle1.print())
console.log('rectangle area', rectangle1.getArea())

const rectangle2 = new Rectangle('purple', 5, 15)
console.log(rectangle2.print())
console.log('rectangle area', rectangle2.getArea())

class Paint {

    constructor() {
        this.shapes =[]
    }

    addShape(shape) {
        this.shapes.push(shape)
    }

    getShapes() {
        return this.shapes
    }

    calculateTotalArea() {
        this.totalArea = 0
        this.shapes.forEach(shape => {
            this.totalArea += shape.getArea()
        })
        return this.totalArea
    }

    getCircles() {
        this.circles = []
        this.circles = this.shapes.filter(shape => shape.constructor.name == 'Circle')
        return this.circles
    }

    getSquares() {
        this.squares = []
        this.squares = this.shapes.filter(shape => shape.constructor.name == 'Square')
        return this.squares
    }

    getRectangles() {
        this.rectangles = []
        this.rectangles = this.shapes.filter(shape => shape.constructor.name == 'Rectangle')
        return this.rectangles
    }
}

const paint = new Paint()

paint.addShape(circle1)
paint.addShape(circle2)
paint.addShape(square1)
paint.addShape(square2)
paint.addShape(rectangle1)
paint.addShape(rectangle2)

console.log(paint.getShapes())
console.log(paint.calculateTotalArea())

paint.getCircles().forEach(shape => console.log(shape.print()))
paint.getSquares().forEach(shape => console.log(shape.print()))
paint.getRectangles().forEach(shape => console.log(shape.print()))