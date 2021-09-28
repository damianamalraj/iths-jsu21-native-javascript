function minimumOfTwo(num1, num2) {
    let result;
    if (num1 < num2) {
        result = num1;
    } else {
        result = num2;
    }
    return result;
}


function minimumOfThree(num1, num2, num3){
    let result;
    if(num1 < num2 && num1 < num3){
        result = num1;
    } else if (num2 < num1 && num2 < num3) {
        result = num2;
    } else {
        result = num3;
    }
    return result;
}



function maximumOfFour(num1, num2, num3, num4){
    let result;
    if(num1 > num2 && num1 > num3 && num1 > num4){
        result = num1;
    } else if (num2 > num1 && num2 > num3 && num2 > num4) {
        result = num2;
    } else if(num3 > num1 && num3 > num2 && num3 > num4){
        result = num3;
    } else{
        result = num4;
    }
    return result;
    console.log(result)
}


function maximumOfFour(num1, num2, num3, num4){
    let result;
    if (num1 > num2) {
        if (num1 > num3) {
            if (num1 > num4) {
                result = num1;
            }
        }
    } 
    
    if (num2 > num1) {
        if (num2 > num3) {
            if (num2 > num4) {
                result = num2;
            }
        }
    }

    if (num3 > num1) {
        if (num3 > num2) {
            if (num3 > num4) {
                result = num3;
            }
        }
    }

    if (num4 > num1) {
        if (num4 > num2) {
            if (num4 > num3) {
                result = num4;
            }
        }
    }

    

    return result;
}



function maximumOfFour(num1, num2, num3, num4){
    let result;
    if (num1 < num2) {
        result = num1;
    } else {
        result = num2;
    } 
    if (num2 < num3) {
        result = num2;
    } else {
        
    }

    return result;
}





function main() {
    let result = replaceChar("hello", "l", "x");

}
main()