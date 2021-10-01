function containsElement(arr, elm) {
    let i = 0,
        result = undefined;

    while (i < arr.length) {
        if (arr[i] == elm) {
            result = true;
        }
        i++
    }
    return result;
}

const main = ()=>{
    let array = ["cat", "dog", "elephant", "lion", "tiger"];

    let result = containsElement(array, "lion");
}
main()