document.querySelectorAll('input[type="radio"]').forEach(input => {
    input.addEventListener('click', updateScore)
})

function updateScore() {

    // Storing all radio properties
    const property = new Object()

    document.querySelectorAll('input[type="radio"]').forEach(input => {
        if (input.checked) {
            property[input.name] = 1
        } else {
            if (property[input.name] !== 1) {
                property[input.name] = 0
            }
        }
    })


    for (const value of Object.values(property)) {
        if (!value) {            
            return console.log("Select all the radio button")
        }
    }

    // Hide warning
    document.getElementById("warning").classList = "none"

    // Compute the vulnerability score
    let score = 0

    // TODO: Calculate score    
       
    score = Math.max(0, Math.min(10, score)) // Limit 0-10
    // Display score
    document.getElementById("score").innerHTML = score.toFixed(1) // decimal

    console.log(property)

}