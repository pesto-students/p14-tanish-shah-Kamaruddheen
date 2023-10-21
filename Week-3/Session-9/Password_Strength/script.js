// Your solution goes here

function isStrongPassword(password) {
    
    if (password.length < 8) return false
    if (password.includes("password")) return false
    if (password === password.toLowerCase()) return false

    return true
}

// false - Too short 
console.log(isStrongPassword("Qwerty"));
// false - Contains "password"
console.log(isStrongPassword("passwordQwerty"));
// false - No uppercase characters
console.log(isStrongPassword("qwerty123"));
// true
console.log(isStrongPassword("Qwerty123"));