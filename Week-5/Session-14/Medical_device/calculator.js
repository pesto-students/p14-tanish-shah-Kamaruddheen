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
            // return console.log("Select all the radio button")
        }
    }

    // Hide warning
    document.getElementById("warning").classList = "none"

    // Compute the vulnerability score
    let score = 0.00

    // * Calculate score
    let arrOfValues = [] // storing all selected options from user
    document.querySelectorAll('input[type="radio"]').forEach(conf => {
        if (conf.checked) arrOfValues.push(conf)
    })

    console.log(arrOfValues) // list of all input fields

    let score_exploitability = 1.1
    let score_base = 3.326258289
    let score_status = 0

    let base_conf = [
        [0.00,  0.22, 0.56],
        [0.00,  0.65, 0.75],
        [0.00,  0.85, 0.95]
    ]

    for (let i = 0; i < 3; i++) {
        for (let j = 1; i < 3; j++) {
            console.log(base_conf[i][j])
        }
    }

    // Attack Vector
    if(arrOfValues[0].id == "AV_N") score_exploitability *= 0.85
    else if(arrOfValues[0].id == "AV_A") score_exploitability *= 0.62
    else if(arrOfValues[0].id == "AV_L") score_exploitability *= 0.55
    else if (arrOfValues[0].id == "AV_P") score_exploitability *= 0.20        

    // Attack Complexity
    if(arrOfValues[1].id == "AC_L") score_exploitability *= 0.77
    else if (arrOfValues[1].id == "AC_H") score_exploitability *= 0.44
    
    // Privilege Required
    if(arrOfValues[2].id == "PR_N") score_exploitability *= 0.85
    else if(arrOfValues[2].id == "PR_L") score_exploitability *= 0.62
    else if (arrOfValues[2].id == "PR_H") score_exploitability *= 0.27
    
    // User Interaction
    if(arrOfValues[3].id == "UI_N") score_exploitability *= 0.85
    else if (arrOfValues[3].id == "UI_R") score_exploitability *= 0.62
    
    // Scope Status
    if(arrOfValues[4].id == "scope_U") score_status = 1.0
    else if (arrOfValues[4].id == "scope_C") score_status = 1.08

    // Sensitivity & Confidentiality Impact
    let sensitivity = arrOfValues[9].id
    let confidentiality_impact = arrOfValues[5].id

    // Health Impact & Integrity Impact
    let health_impact = arrOfValues[8].id
    let integrity_impact = arrOfValues[6].id

    // Health Impact & Availability Impact
    let availability_impact = arrOfValues[7].id


    // arrOfValues.slice(5, arrOfValues.length).map(element => {
        
    // })

    score = (score_status) * ((score_base) + (score_exploitability))

    console.log(score_status)
       
    score = Math.max(0, Math.min(10, score)) // Limit 0-10
    // Display score
    document.getElementById("score").innerHTML = score.toFixed(1) // decimal

    console.log(property)

}