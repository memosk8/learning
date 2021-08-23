const dice1 = document.querySelector("#dice1");
const dice2 = document.querySelector("#dice2");
const header = document.querySelector("h1");
var numberObtained2;
var numberObtained1;

const changeDice = (dice) => {
    randNum = Math.floor(Math.random() * 6) + 1;
    imagePath = `./images/dice${randNum}.png`;
    console.log(imagePath);
    dice.setAttribute("src", imagePath);
    return randNum;
}

var throwDices = setTimeout( () => {
    numberObtained1 = changeDice(dice1);
    numberObtained2 = changeDice(dice2);
    if (numberObtained1 > numberObtained2) header.innerText = `winner is Player 1 !!`;
    else if (numberObtained2 > numberObtained1) header.innerText = `winner is Player 2 !!`;
}, 400);