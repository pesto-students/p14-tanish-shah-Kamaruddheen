function drawTriangle(triangleSize) {

    // Your solution goes here

    let str = ""

    for (let i = 1; i <= triangleSize; i++) {        

        for (let j = 1; j <= i; j++) {
            str += "*"
        }

        str += "\n"
    }

    return str
    
}

console.log(drawTriangle(4));