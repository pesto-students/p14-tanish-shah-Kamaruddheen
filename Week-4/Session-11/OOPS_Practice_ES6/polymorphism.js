class Shape {
    calculateArea() {
        // base class method
    }
}

class Rectangle extends Shape {
    calculateArea(width, height) {
        console.log(width * height)
    }
}

class Triangle extends Shape {
    calculateArea(base, height) {
        console.log((base * height ) / 2)
    }
}

class Circle extends Shape {
    calculateArea(radius) {
        console.log(Math.PI * radius * radius)
    }
}

console.log("-----Polymorphism-----")

let rectangle = new Rectangle()
let triangle = new Triangle()
let circle = new Circle()

rectangle.calculateArea(3, 8)
triangle.calculateArea(5, 10)
circle.calculateArea(6)