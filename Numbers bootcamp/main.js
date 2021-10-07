function minimumOfTwo(num1, num2) {
    let result;
    if (num1 < num2) {
        result = num1;
    } else {
        result = num2;
    }
    return result;
}


// function minimumOfThree(num1, num2, num3){
//     let result;
//     if(num1 < num2 && num1 < num3){
//         result = num1;
//     } else if (num2 < num1 && num2 < num3) {
//         result = num2;
//     } else {
//         result = num3;
//     }
//     return result;
// }



// function maximumOfFour(num1, num2, num3, num4){
//     let result;
//     if(num1 > num2 && num1 > num3 && num1 > num4){
//         result = num1;
//     } else if (num2 > num1 && num2 > num3 && num2 > num4) {
//         result = num2;
//     } else if(num3 > num1 && num3 > num2 && num3 > num4){
//         result = num3;
//     } else{
//         result = num4;
//     }
//     return result;
//     console.log(result)
// }


// function maximumOfFour(num1, num2, num3, num4){
//     let result;
//     if (num1 > num2) {
//         if (num1 > num3) {
//             if (num1 > num4) {
//                 result = num1;
//             }
//         }
//     } 
    
//     if (num2 > num1) {
//         if (num2 > num3) {
//             if (num2 > num4) {
//                 result = num2;
//             }
//         }
//     }

//     if (num3 > num1) {
//         if (num3 > num2) {
//             if (num3 > num4) {
//                 result = num3;
//             }
//         }
//     }

//     if (num4 > num1) {
//         if (num4 > num2) {
//             if (num4 > num3) {
//                 result = num4;
//             }
//         }
//     }

    

//     return result;
// }


function minimumOfThree(num1, num2, num3) {
    let min = num1;
    if (num2 < min) {
        min = num2;
    } else if (num3 < min) {
        min = num3;
    }
    return min;
}

function maximumOfFour(num1, num2, num3, num4){
    let max = num1;
    if (num2 > max) {
        max = num2;
    } else if (num3 > max) {
        max = num3;
    } else if (num4 > max) {
        max = num4;
    }

    return max;
}

function ticketMachine(age) {
    let pris = 0;
    
    if (age < 18) {     
        pris = 10;
    } else if (age >= 18 && age < 65) {
        pris = 20;
    } else if (age >= 65) {
        pris = 15;
    }

    return pris;
}


function sumTo(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
        
    }
    return sum;
}

function factorial(num) {
    let sum = 1;

    for (let i = 1; i <= num; i++) {
        sum *= i;
    }
    return sum;
}

function fibonacci(num){
    let current = 1, 
        previous = 1;

    for(let i = 2; i < num; i += 1){ 
        current = current + previous;
        previous = current - previous;
    }
    return current;
}


function main() {
    let result = factorial(5);

}
main()