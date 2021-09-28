function repeat(text, num) {
    let output = "";
    let i = 0;
    while (i < num) {
        i = i + 1;
        output = output + text;
    }
    return output;
}



function containsChar(text, char) {
    let i = 0;


    while(i < text.length){
        if(text[i] == char){
            return true;
        }
        i += 1;

    }
    
    return result;

    
}



function indexOfChar(text, char) {
    let i = 0;


    while(i < text.length){
        if(text[i] == char){
            return i;
        }
        i += 1;

    }

    
    return -1;

    
}

function startsWith(text, char) {
    return text[0] == char;


}

function endsWith(text, char) {

    if (text[text.length - 1] == char) {
        return true;
    }
    return false;
}

function reverse(str) {
    let i = str.length - 1;
    let text = "";


    while (i >= 0) {
        text = text + str[i];
        i = i - 1;
    }
    
    return text;
    
}

function removeChar(text, char) {
    let i = 0;
    let result = "";

    while (i < text.length) {
        if (text[i] == char) {
            result = result + "";
            i = i + 1;
        } else {
            result = result + text[i];
            i = i + 1;
        }
    }
    return result;
}

function replaceChar(text, char1, char2) {
    let i = 0;
    let result = "";
    
    while (i < text.length) {
        if (text[i] == char1) {
            result = result + char2;
            i = i + 1;
        } else {
            result = result + text[i];
            i = i + 1;
        }
        
    }
}



function main() {
    let result = replaceChar("hello", "l", "x");

}
main()