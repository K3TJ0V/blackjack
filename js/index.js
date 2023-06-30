import "normalize.css";
import "../scss/main.scss"

const startButton = document.querySelector('.startButton-js');
const playerSide = document.querySelector('.playerSide--js');
const botSide = document.querySelector('.botSide--js');
const cardTemplate = document.querySelector('#cardTemplate');
const hitButton = document.querySelector('.hit-js');
const passButton = document.querySelector('.pass-js');
const cash = document.querySelector('.cash-js');
const betChosenAmount = document.querySelector('.main__bet--amount');
const clearingBet = document.querySelector('.betButton__0');
const maxBetButton = document.querySelector('.betButton__MAX');
const betButtonsContainer = document.querySelector('.main__bet');
const betApplyButton = document.querySelector('.main__bet--apply');

let betButtons = [];
let betValue = 0;
let maxBetValue = parseInt(cash.innerHTML.substring(1, cash.innerHTML.length));
// creating deck of cards
let deck = [];
let higherCardRanks = ['A','J','Q',"K"];
class Card{
    constructor(rank,value,color){
        this.rank = rank;
        this.value = value;
        this.color = color;
    }
}
for (let i = 2; i < 16; i++) {
    if(i < 11){
        // creating lower ranked cards 1-10
        deck.push(new Card(i, i, 'heart'));
        deck.push(new Card(i, i, 'clubs'));
        deck.push(new Card(i, i, 'diamond'));
        deck.push(new Card(i, i, 'spades'));
    }else if(i > 11){
        if (higherCardRanks[i-12] != 'A') {
            // creating higher ranked cards without ace in this block
            deck.push(new Card(higherCardRanks[i-12], 10, 'heart'));
            deck.push(new Card(higherCardRanks[i-12], 10, 'clubs'));
            deck.push(new Card(higherCardRanks[i-12], 10, 'diamond'));
            deck.push(new Card(higherCardRanks[i-12], 10, 'spades'));
        }else{
            // adding aces with different value
            deck.push(new Card(higherCardRanks[i-12], 11, 'heart'));
            deck.push(new Card(higherCardRanks[i-12], 11, 'clubs'));
            deck.push(new Card(higherCardRanks[i-12], 11, 'diamond'));
            deck.push(new Card(higherCardRanks[i-12], 11, 'spades'));
        }
    }
}
console.log(deck);

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
    setTimeout(() => {
        betButtonsContainer.style.transform = 'scale(1)';
    }, 2000);
}) 
// donwloading all bet buttons
for (let i = 1; i < 1001; i = i * 10) {
    let x = document.querySelector('.betButton__add' +i);
    betButtons.push(x);
    let y = document.querySelector('.betButton__less' +i);
    betButtons.push(y);
}
// setting bet buttons eventlisteners
betButtons.forEach((button) =>{
    button.addEventListener('click', (e)=>{
        // extracting button text and using only a number
        let innerString = e.target.innerHTML;
        let buttonValue = innerString.substring(1, 5);
        if (innerString.substring(1, -1) == "-"){
            // x is a parsed text from button for ex. 1, 10
            let x = parseInt(buttonValue);
            let newValue = betValue - x;
            // error handling (can't set negative value)
            if(newValue  < 0){
                newValue = 0;
                betValue = newValue;
                betChosenAmount.innerText = newValue;
                return newValue;
            }
            betChosenAmount.innerText = newValue;
            betValue = newValue;
        }else{
            // x is a parsed text from button for ex. 1, 10
            let x = parseInt(buttonValue);
            let newValue = betValue + x;
            // error handling (can't set value that's out of balance)
            if(newValue > maxBetValue){
                newValue = maxBetValue;
                betValue = newValue;
                betChosenAmount.innerText = newValue;
                return newValue;
            }
            betChosenAmount.innerHTML = newValue;
            betValue = newValue; 
        }
    })
})
// the rest buttons logic clearing bet and setting max value available 
maxBetButton.addEventListener('click', ()=>{
    betValue = maxBetValue;
    betChosenAmount.innerHTML = betValue;
})
clearingBet.addEventListener('click', ()=>{
    betValue = 0;
    betChosenAmount.innerHTML = betValue;
})
betApplyButton.addEventListener('click', ()=>{
    betButtonsContainer.style.transform = 'scale(0)';
})