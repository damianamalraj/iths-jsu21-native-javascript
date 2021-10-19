function containsElement(arr, elm) {
    let i = 0;
    let result = false;

    while (i < arr.length) {
        if (arr[i] == elm) {
            result = true;
        }
        i++;
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
        i++;
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
        i++;
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
        i++;
    }

    return max;
}

function sum(arr) {
    let sum = 0,
        i = 0;

    while (i < arr.length) {
        sum += arr[i];
        i++;
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

function reverse(arr) {
    let result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

function filter(arr, elm) {
    let result = [],
        i = 0;

    for (const element of arr) {
        if (arr[i] == elm) {
            result.push(arr[i]);
        }
        i++;
    }

    return result;
}

function exclude(arr, elm) {
    let result = [],
        i = 0;

    while (i < arr.length) {
        if (arr[i] !== elm) {
            result.push(arr[i]);
        }
        i++;
    }
    return result;
}

function unique(arr) {
    let result = [];

    for (const element of arr) {
        if (!containsElement(result, element)) {
            result.push(element);
        }
    }
    return result;
}

function reverseStrings(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let string = "";
        for (let j = arr[i].length - 1; j >= 0; j--) {
            //don’t forget -1
            string += arr[i][j];
        }
        result.push(string);
    }
    return result;
}

function split(arr, delimiter) {
    let result = [],
        current = "";

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== delimiter) {
            current += arr[i];
        } else {
            result.push(current);
            current = "";
        }
    }
    return result;
}

function join(arr, delimiter) {
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        result += delimiter + arr[i];
    }
    return result;
}

function randomElement(arr) {
    let random = Math.round(Math.random() * (arr.length - 1));

    return arr[random];
}

const main = () => {
    let array = [
        "cat",
        "dog",
        "elephant",
        "lion",
        "tiger",
        "bear",
        "bird",
        "dragon",
        "monkey",
        "chicken",
    ];
    let arrayNumbers = [34, 5, 65, 7, 2, 45, 45, 5, 5, 1];
    let random = "hkajhs kjhd kjashk ajhdk";

    let result = randomElement(array);
};
main();
