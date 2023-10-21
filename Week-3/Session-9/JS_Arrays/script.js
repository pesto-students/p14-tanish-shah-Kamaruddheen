// Put your solution here

let nums = [4, 2, 9, 1, 8];

function divideArray(nums) {
    nums.sort()

    evenNums = []
    oddNums = []
    
    nums.forEach(num => {
        
        if (num <= 2) return
        else if (num % 2 == 0) evenNums.push(num)
        else oddNums.push(num)

    });

    if (evenNums.length > 0) {
        console.log("Even numbers: ", evenNums.length);
        evenNums.forEach(even => {
            console.log(even);
        })
    }

    if (oddNums.length > 0) {
        console.log("Odd numbers: ", oddNums.length);
        oddNums.forEach(odd => {
            console.log(odd);
        })
    }

}

divideArray(nums);