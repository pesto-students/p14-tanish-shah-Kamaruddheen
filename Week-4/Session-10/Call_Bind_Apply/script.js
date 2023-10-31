// Your solution goes here
class Calculator {
    add(num1, num2) { return num1 + num2 }
    subtract(num1, num2) { return num1 - num2 }
    multiply(num1, num2) { return num1 * num2 }
    divide(num1, num2) { return num1 / num2 }
}

class ScientificCalculator extends Calculator {
    square(num) { return num * num }
    cube(num) { return num * num * num }
    power(num1, num2) { return num1 ** num2 }
}

// an instance of the ScientificCalculator class
const scientific_obj = new ScientificCalculator()

// Call method
console.log(Calculator.prototype.add.call(scientific_obj, 10, 5)); // 15

// Apply method
console.log(Calculator.prototype.subtract.apply(scientific_obj, [10, 5])); // 5

// Bind method
const multiplyByTwo = function (num) { return num * 2 }
scientific_obj.multiply = multiplyByTwo.bind(scientific_obj)
console.log(scientific_obj.multiply(5)); // 10

const powerOfThree = function (num) { return num ** 3 }
scientific_obj.power = powerOfThree.bind(scientific_obj)
console.log(scientific_obj.power(2)); // 8

// Normal Bind method - this

// const multiplyByTwo = function (num) { return num * 2 }
// var multiply = multiplyByTwo.bind(this)
// console.log(multiply(4)); // 8

// const powerOfThree = function (num) { return num ** 3 }
// var power = powerOfThree.bind(this)
// console.log(power(7)); // 343


// Bind - Class

// const multiplyByTwo = ScientificCalculator.prototype.multiply.bind(scientific_obj, 2);
// console.log(multiplyByTwo(5));

// const powerOfThree = ScientificCalculator.prototype.power.bind(scientific_obj, 3);
// console.log(powerOfThree(2));
