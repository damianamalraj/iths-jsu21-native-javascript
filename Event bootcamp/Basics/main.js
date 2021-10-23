const body = document.querySelector("body");

const btn = document.createElement("button");
btn.innerText = "BUY";
body.append(btn);

btn.addEventListener("click", (event) => {
    btn.innerText = "KÖÖÖÖP";
});

const btn1 = document.createElement("button");
btn1.innerText = 0;
body.append(btn1);

let count = 0;
btn1.addEventListener("click", (event) => {
    count++;
    btn1.innerText = count;
});

const input = document.createElement("input");
const p = document.createElement("p");
p.innerText = "Test!";
body.append(input, p);

input.addEventListener("input", (event) => {
    p.innerText = event.target.value;
});

const h1 = document.createElement("h1");
body.append(h1);
let sekunder = 10;

setInterval(() => {
    if (sekunder > 0) {
        sekunder--;
        h1.innerText = sekunder;
    } else {
        h1.innerText = "Time's up!";
    }
}, 1000);

let colors = [
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgrey",
    "darkgreen",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategray",
    "darkslategrey",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dimgrey",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "gray",
    "grey",
    "green",
    "greenyellow",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgrey",
    "lightgreen",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "rebeccapurple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "slategrey",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen",
];

const div = document.createElement("div");
body.append(div);

const input1 = document.createElement("input");
div.append(input1);

input1.addEventListener("keyup", (event) => {
    if (colors.includes(event.target.value) && event.code == "Enter") {
        body.style.backgroundColor = event.target.value;
    } else if (!colors.includes(event.target.value) && event.code == "Enter") {
        const p1 = (document.createElement("p").innerText = "error! ");
        div.append(p1);
    }
});

const list = document.createElement("span");
body.append(list);

input1.addEventListener("keyup", (event) => {
    const items = colors.filter((col) => col.includes(input1.value));

    list.innerHTML = "";
    items.forEach((it) => {
        const item = document.createElement("li");
        item.innerText = it;
        list.append(item);
    });

    if (input1.value == "") {
        list.innerHTML = "";
    } else {
    }

    console.log(items);
    console.log(input1.value);

    const lis = document.querySelectorAll("li");
    lis.forEach((a) => {
        a.addEventListener("click", (event) => {
            input1.value = event.target.innerText;
            body.style.backgroundColor = event.target.innerText;
        });
    });
});
