// Your solution goes here

function counter() {
    
    let count = 0

    // Inner function
    function increment() {
        count++
        return count
    }

    return {
        increment // calling inner function
    }
}

const firstCounter = counter() // creating firstCounter instances
let firstValues = []

// Call the firstCounter function five times
for (let i = 0; i < 5; i++) {
    firstValues.push(firstCounter.increment())
}

console.log("firstValues array: ", firstValues);


const secondCounter = counter() // creating secondCounter instances
let secondValues = []

// Call the secondCounter function five times
for (let i = 0; i < 3; i++) {
    secondValues.push(secondCounter.increment())
}

console.log("secondValues array: ", secondValues);