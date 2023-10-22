function calcWordFrequencies() {
    
    // Your solution goes here

    const map1 = new Map()
    
    // input = prompt("Please provide a sentence")
    input = "hey hi Mark hi mark"

    words = input.split(" ")

    words.forEach(word => {
        if (map1.has(word)) map1.set(word, map1.get(word) + 1)
        else map1.set(word, 1)
    });

    return map1
}

console.log(calcWordFrequencies()); 