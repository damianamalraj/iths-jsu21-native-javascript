// let randomNum = Math.floor(Math.random() * 10);

// const input = document.querySelector("input");
// const high = document.querySelector(".high");
// const low = document.querySelector(".low");
// const correct = document.querySelector(".correct");
// const btn = document.querySelector("button");

// const compare = (inputValue, rNumber) => {
//     if (inputValue > rNumber) {
//         high.style.display = "block";
//     }
//     if (inputValue < rNumber) {
//         low.style.display = "block";
//     }
//     if (inputValue == rNumber) {
//         correct.style.display = "block";
//         btn.style.display = "block";
//     }
// };

// const remove = () => {
//     high.style.display = "none";
//     low.style.display = "none";
//     correct.style.display = "none";
//     btn.style.display = "none";
// };
// const play = () => {
//     input.addEventListener("keyup", (event) => {
//         remove();

//         if (event.code == "Enter") {
//             console.log(input.value);
//             compare(input.value, randomNum);
//         }
//     });
// };
// play();

// btn.addEventListener("click", () => {
//     randomNum = Math.floor(Math.random() * 10);
//     input.value = "";
//     remove();
// });

// Model
// initGame
const state = {};
const randomNum = () => {
    state.number = Math.floor(Math.random() * 10);
};
// Compare
const compare = (x, y) => {
    if (x < y) {
        return "Too High!";
    } else if (x > y) {
        return "Too low!";
    } else if (x == y) {
        return "Correct!";
    }
};

// View
// showStatus
const showStatus = (p) => {
    const status = (document.createElement("p").innerText = p);
    document.querySelector(".status").append(status);
};
// clearStatus
const clearStatus = () => {
    document.querySelector("p").remove();
};

// showBtn
const showbtn = () => {
    document.createElement("button").innerText = "playAgain";
};

// clearBtn
const clearBtn = () => {
    document.createElement("button").remove();
};

// controler
// play
const play = () => {
    randomNum();
    console.log(state.number);
    document.querySelector("input").addEventListener("keyup", (e) => {
        clearStatus();
        showStatus(compare(state.number, e.target.value));
        if (condition) {
        }
    });
};
// playAgain

const main = () => {
    play();
};
main();
