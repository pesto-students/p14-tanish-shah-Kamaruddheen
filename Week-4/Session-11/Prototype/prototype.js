// constructor function
function Vehicle(make, model, year) { 
    this.make = make
    this.model = model
    this.year = year    
}

// adding a getDetails method 
Vehicle.prototype.getDetails = function() {
    console.log(this.make + " " + this.model + " " +  this.year);
}

// creating an vehicle instance
const vehicle = new Vehicle("Toyoto", "Camry", 2013)
vehicle.getDetails()

// extends Vehicle - Inheriting in Prototype
function Car(make, model, year, numDoors) {
    Vehicle.call(this, make, model, year);
    this.numDoors = numDoors;
}

// Overriding getDetails method 
Car.prototype.getDetails = function() {
    console.log(this.make + " " + this.model + " " +  this.year  + " " +  this.numDoors);
}

// creating an car instance
const car = new Car("Honda", "Accord Sdn", 2013, 4)
// After overriding
car.getDetails()

// console.log(Vehicle.prototype);
// console.log(Car.prototype);