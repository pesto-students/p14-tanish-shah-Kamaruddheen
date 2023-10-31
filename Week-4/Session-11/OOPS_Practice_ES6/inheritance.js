class Vehicle {

    constructor(make, model, year, color) {
        this.make = make
        this.model = model
        this.year = year
        this.color = color
    }

    drive() {
        console.log(`Driving {this.make} {this.model}.`);
    }

}

class Car extends Vehicle {
    constructor(numSeats) {
        super()
        this.numSeats = numSeats
    }
}

class RideShareCar extends Car {
    constructor(isAvailable) {
        super()
        this.isAvailable = isAvailable
    }
}


let myCar = new RideShareCar("Yes", 2)

console.log(myCar)
