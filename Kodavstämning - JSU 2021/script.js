function validatePassword(p) {
    let result = true;
    let test = [
        "abcdefghijklmnopqrstuvwxyzåäö",
        "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ",
        "0123456789",
        " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    ]
    
    let okLength = false,
        isLower = false,
        isUpper = false,
        isNumber = false,
        isSpecial = false;

    for (let i = 0; i < p.length; i++) {
        
        if (p.length >= 8 && p.length <= 50) {
            okLength = true;
        }
            
        for (let j = 0; j < test[0].length; j++) {
            if (test[0].includes(p[i])) {
                isLower = true;
            }
        } 
        for (let j = 0; j < test[1].length; j++) {
            if (test[1].includes(p[i])) {
                isUpper = true;
            }
        }
        for (let j = 0; j < test[2].length; j++) {
            if (test[2].includes(p[i])) {
                isNumber = true;
            }
        }
        for (let j = 0; j < test[3].length; j++) {
            if (test[3].includes(p[i])) {
                isSpecial = true;
            }
        }
    }
    if (okLength == true && isLower == true && isUpper == true && isNumber == true && isSpecial == true) {
        result = true;
    } else {
        result = false;
    }
        return result;
}

    
function orderTotal(array) {
        let sum = 0;
        
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j <= array[i].amount; j++) {
            sum += array[i].price;
        }
    }
    return sum;
}


function extractEmailData(str) {
    let obj = {
        local: "",
        domain: "",
        tags: []
    },
    ld = str.split("@"),
    l = ld[0].split("+")

    obj.domain = ld[1];
    obj.local = l[0];

    for (let i = 1; i < l.length; i++) {
            obj.tags.push(l[i]);
    }
    return obj;
}

function randomPassword(str){
    
}

function main(){
    
    validatePassword("Abcd123!") // => true
    validatePassword("omg") // => false
    validatePassword("123") // => false
    validatePassword("........") // => false
    validatePassword("B3ng70l550n?") // => true
    validatePassword("_F00b4R_") // => true
}
main()


