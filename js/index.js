import "normalize.css";
import "../scss/main.scss"

const startButton = document.querySelector('.startButton-js');
const playerSide = document.querySelector('.playerSide--js');
const botSide = document.querySelector('.botSide--js');
const cardTemplate = document.querySelector('#cardTemplate');
const hitButton = document.querySelector('.hit-js');
const passButton = document.querySelector('.pass-js');
const cash = document.querySelector('.cash-js');


startButton.addEventListener('click', ()=>{
    startButton.style.transform = 'scale(0)';
    playerSide.classList.add('cardHoldersActivated');
    botSide.classList.add('cardHoldersActivated');

    //showing buttons and balance
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