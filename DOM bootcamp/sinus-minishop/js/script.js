// Code here!

let ash = document.querySelector("h3");
ash.innerText = "Potato";

let home = document.querySelector("a");
home.innerText = "Start";

let contact = document.querySelector("a:nth-child(3)");
contact.innerText = "Mail us";

const text = document.querySelector(".art-2 p");
text.innerText = "jhkjhkjhashkajshkjhs jhs jh sdjh as";

let btn = document.querySelector("button")
btn.style.backgroundColor = "red";
btn.innerText = "KÖÖÖP"

const backgrundC = document.querySelector("article figure");
backgrundC.style.backgroundColor = "blue"

const adress = document.querySelector("footer article:nth-child(2) p")
adress.innerText = "Washington DC";

let ps = document.querySelectorAll("p");
for (let i = 0; i < ps.length; i++) {
    ps[i].style.color = "red";
}

const btns = document.querySelectorAll("button");
for (let i = 0; i < btns.length; i++){
    btns[i].innerText = "add to cart";
}

home.classList.add("active")

const logo = document.querySelector("img");
logo.classList.remove("logo");



