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
    let result = false;


    while(i < text.length){
        if(text[i] == char){
            result = true;
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

function substring(text, start, stop) {
    let result = "",
        i = 0;
    
        while (i <= stop) {
            if (i >= start && i <= stop) {
                result += text[i];
            }
            i++
        }
        return result;
}

function contains(str, otherString) {
    let result = false;

    for (let i = 0; i < str.length; i++) {
        let sub = substring(str, i, i + otherString.length - 1);

        if (sub == otherString) {
            result = true;
        }
    }

    return result;
}

function remove(str, otherString){
    let output = "";
    
    for(let i = 0; i < str.length; i++){
    
    const sub = substring(str, i, i + otherString.length - 1);
    
    if(sub != otherString){
        output += str[i];
    } else{
        i += otherString.length - 1; //to stop the loop once the variables match. so if i is no longer lesser then str.length. so once matches there is no need to loop any more, it will overwrite the result too...
    }
    }
    return output;
}

function replace(str, replacee, replacer){
    let output = "";
    for(let i = 0; i < str.length; i++){
        const sub = substring(str, i, i + replacee.length - 1);
        if(sub != replacee){
        output += str[i];
        }else{
            output += replacer;
            i += replacee.length - 1;
        }
    }
    return output;
}




function main() {
    let result = replace("hello world");

}
main()