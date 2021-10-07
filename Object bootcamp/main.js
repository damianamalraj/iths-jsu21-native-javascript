const books = [
    {
        title: "Harry Poter",
        author: "unknown",
        numPages: 500
    },
    {
        title: "Peater Pan",
        author: "unknown",
        numPages: 897
    },
    {
        title: "Game of thrones",
        author: "unknown",
        numPages: 983
    },
    {
        title: "Loard of the rings",
        author: "unknown",
        numPages: 763
    },
    {
        title: "Hobbits",
        author: "unknown",
        numPages: 567
    },
    {
        title: "Narnia",
        author: "unknown",
        numPages: 765
    }
];

function searchBook(array, bookName) {
    let result = null;
    for (const book of array) {
        if (book.title == bookName) {
            result = book;
        }
    }
    return result;
}

function letterFrequency(str) {
    let result = {};

    for (let i = 0; i < str.length; i++) {
        let num = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] == str[j]) {
                num += 1;
            }
            
        }
        result[str[i]] = num;
    }
    return result;
}

const main = ()=>{
    let result = letterFrequency("Hobbits");
}
main()