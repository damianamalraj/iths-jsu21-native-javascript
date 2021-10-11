// Code here!

let ash = document.querySelector("h3");
ash.innerText = "Potato";

let home = document.querySelector("a");
home.innerText = "Start";

let contact = document.querySelector("a:nth-child(3)");
contact.innerText = "Mail us";

let btn = document.querySelector("button")
btn.style.backgroundColor = "red";

let ps = document.querySelectorAll("p");
for (let i = 0; i < ps.length; i++) {
    ps[i].style.color = "red";
}