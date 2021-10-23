let randomNum = Math.floor(Math.random() * 10);

const input = document.querySelector("input");
const high = document.querySelector(".high");
const low = document.querySelector(".low");
const correct = document.querySelector(".correct");
const btn = document.querySelector("button");

const compare = (inputValue, rRumber) => {
    if (inputValue > rRumber) {
        high.style.display = "block";
    }
    if (inputValue < rRumber) {
        low.style.display = "block";
    }
    if (inputValue == rRumber) {
        correct.style.display = "block";
        btn.style.display = "block";
    }
};

const remove = () => {
    high.style.display = "none";
    low.style.display = "none";
    correct.style.display = "none";
    btn.style.display = "none";
};
const play = () => {
    input.addEventListener("keyup", (event) => {
        remove();

        if (event.code == "Enter") {
            console.log(input.value);
            compare(input.value, randomNum);
        }
    });
};
play();

btn.addEventListener("click", () => {
    randomNum = Math.floor(Math.random() * 10);
    input.value = "";
    remove();
});

// Gå bananas med styling!

// Level Up
// Lägg till så man har ett max antal gissningar på sig.

// Extra Level Up
// Skapa en funktion som spelar spelet automatiskt.
