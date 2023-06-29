import "normalize.css";
import "../scss/main.scss"

const startButton = document.querySelector('.startButton-js');
const playerSide = document.querySelector('.playerSide--js');
const botSide = document.querySelector('.botSide--js');
const cardTemplate = document.querySelector('#cardTemplate');
const hitButton = document.querySelector('.hit-js');
const passButton = document.querySelector('.pass-js');
const cash = document.querySelector('.cash-js');
const betAmount = document.querySelector('.main__bet--amount');
const clearingBet = document.querySelector('.betButton__0');
const maxBet = document.querySelector('.betButton__MAX');

let betButtons = [];
let betValue = 0;


startButton.addEventListener('click', ()=>{
    startButton.style.transform = 'scale(0)';
    playerSide.classList.add('cardHoldersActivated');
    botSide.classList.add('cardHoldersActivated');

    // showing buttons and balance
    setTimeout(() => {
        startButton.style.display = 'none';
        hitButton.style.transform = 'scale(1)';
    }, 500);
    setTimeout(() => {
        cash.style.transform = 'scale(1)';
    }, 1000);
    setTimeout(() => {
        passButton.style.transform = 'scale(1)';
    }, 1500);
}) 
// donwloading all bet buttons
for (let i = 1; i < 1001; i = i * 10) {
    let x = document.querySelector('.betButton__add' +i);
    betButtons.push(x);
    console.log(betButtons);
    let y = document.querySelector('.betButton__less' +i);
    betButtons.push(y);
}

betButtons.forEach((button) =>{
    button.addEventListener('click', (e)=>{
        let innerString = e.target.innerHTML;
        let value = innerString.substring(1, 5);
        if (innerString.substring(1, -1) == "-"){
            let x = parseInt(value);
            let newValue = betValue - x;
            betAmount.innerText = newValue;
            betValue = newValue;
        }else{
            let x = parseInt(value);
            let newValue = betValue + x;
            betAmount.innerHTML = newValue;
            betValue = newValue; 
        }
    })
})

clearingBet.addEventListener('click', ()=>{
    betValue = 0;
    betAmount.innerHTML = betValue;
})