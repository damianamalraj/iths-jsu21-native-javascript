function containsElement(arr, elm) {
    let i = 0;
    let result = false;

    while (i < arr.length) {
        if (arr[i] == elm) {
            result = true;
        }
        i++
    }
    return result;
}

function indexOfElement(arr, elm) {
    let result = -1,
        i = 0;

    while (i < arr.length) {
        if (arr[i] == elm) {
            result = i + 1;
        }
        i++
    }

    return result;
}

function min(arr) {
    let min = arr[0],
        i = 0;

    while (i < arr.length) {
        if (arr[i] < min) {
            min = arr[i];
        }
        i++
    }
    return min;
}

function max(arr) {
    let max = arr[0],
        i = 0;

    while (i < arr.length) {
        if (arr[i] > max) {
            max = arr[i];
        }
        i++
    }

    return max;
}

function sum(arr) {
    let sum = 0,
        i = 0;
    
    while (i < arr.length) {
        sum += arr[i];
        i++
    }
    return sum;
}

function mean(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result / arr.length;
}





const main = ()=>{
    let array = ["cat", "dog", "elephant", "lion", "tiger"];
    let arrayNumbers = [34, 5, 65, 7, 2, 45];

    let result = mean(arrayNumbers);
}
main()