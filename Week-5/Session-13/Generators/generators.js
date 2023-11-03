// defined a generator function
function* generateArray(array) {
    // looping through an array of strings
    for (let i = 0; i < array.length; i++) {
        // Using yield keyword to pause the function and return a value
        yield array[i] = Symbol(array[i]); // converting each string to a symbol
    }
}

// Input: array of strings
const input = ['hello', 'world', 'test'] 
// calling an generator function, it will return a object
const generator = generateArray(input); 

// console.log(generator.next()); // { value: Symbol(hello), done: false } 
// console.log(generator.next()); // { value: Symbol(world), done: false }
// console.log(generator.next()); // { value: Symbol(test), done: false }

// for..of loop is used to iterate over the generator object
for (const element of generator) {
  console.log(element);
}