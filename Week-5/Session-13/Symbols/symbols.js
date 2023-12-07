// global variable to store Transaction ID
let counter = 0

function generateTransactionId() {
    
    // incrementing the counter
    counter++

    // Creating a new Symbol Constructor
    const symbolKey = Symbol("TRANSACTION_ID_" + counter)

    // returning the unique 
    return symbolKey
}

// Output

const transaction2 = generateTransactionId(); 
console.log(transaction2); // Symbol(TRANSACTION_ID_2)

const transaction1 = generateTransactionId(); 
console.log(transaction1); // Symbol(TRANSACTION_ID_1)

const transaction3 = generateTransactionId(); 
console.log(transaction3); // Symbol(TRANSACTION_ID_3)
