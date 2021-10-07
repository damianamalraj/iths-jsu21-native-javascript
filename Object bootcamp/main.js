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

function filterByCountry(array, kod) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i].nat == kod) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

function filterByGender(array, gender) {
    let newArray = [],
        man = ["Mr", "Monsieur"],
        woman = ["Ms", "Miss", "Mrs", "Mademoiselle", "Madame"],
        newGender = [];

    if (gender == "Male") {
        newGender = man;
    } else if (gender == "Female" ) {
        newGender = woman;
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < newGender.length; j++) {
            if (newGender[j] == array[i].name.title) {
                newArray.push(array[i]);
            }
        }
    }
    return newArray;
}

function listEmails(array) {
    let emails = [];

    for (let i = 0; i < array.length; i++) {
        emails.push(array[i].email);
    }
    return emails;
}

function reformatEmails(array) {
    let newArray = [...array],
        domain = "";

    for (let i = 0; i < array.length; i++) {
        if (newArray[i].nat == "ES") {
            domain = "ee"
        } else if (newArray[i].nat == "GB") {
            domain = "uk"
        }
        else {
            domain = newArray[i].nat.toLowerCase();
        }
        newArray[i].email = `${newArray[i].name.last}.${newArray[i].name.first}@evilcorp.${domain}`;

    }
    return newArray;
}

const main = ()=>{
    let result = reformatEmails(users);
    console.log(result);
}
main()