// function minimumOfTwo(num1, num2) {
//     let result;
//     if (num1 < num2) {
//         result = num1;
//     } else {
//         result = num2;
//     }
//     return result;
// }
// minimumOfTwo(2, 4)

// function minimumOfThree(input1, input2, input3){
//     let result;
//     if(input1 < input2 && input1 < input3){
//         result = input1;
//     } else if (input2 < input1 && input2 < input3) {
//         result = input2;
//     } else {
//         result = input3;
//     }
//     return result;
// }
// minimumOfThree(5, 10, 1)

function maximumOfFour(input1, input2, input3, input4){
    let result;
    if(input1 > input2 && input1 > input3 && input1 > input4){
        result = input1;
    } else if (input2 > input1 && input2 > input3 && input2 > input4) {
        result = input2;
    } else if(input3 > input1 && input3 > input2 && input3 > input4){
        result = input3;
    } else{
        result = input4;
    }
    return result;
    console.log(result)
}
maximumOfFour(5, 10, 1, 15)