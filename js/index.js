import "normalize.css";
import "../scss/main.scss";
import * as images from './imagesURLs';

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
const lostScreen = document.querySelector('.lostScreen');
const wonScreen = document.querySelector('.wonScreen');

let balance = parseInt(cash.innerHTML.substring(1, cash.innerHTML.length));

let betButtons = [];
let betValue = 0;
let maxBet = parseInt(cash.innerHTML.substring(1, cash.innerHTML.length));
// creating deck of cards
let deck = [];
let higherCardRanks = ['ace','jack','queen',"king"];
// board value containers
let botCardsValue = 0;
let playerCardsValue = 0;

class Card{
    constructor(rank,value,color, imgURL){
        this.rank = rank;
        this.value = value;
        this.color = color;
        this.imgURL = imgURL;
    }
}
// shuffling function
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }
// function to create new deck
function deckCreation(){
for (let i = 2; i < 16; i++) {
    if(i < 11){
        // creating lower ranked cards 1-10
        deck.push(new Card(i, i, 'heart', 'hearts' + '_' + i));
        deck.push(new Card(i, i, 'clubs', 'clubs' + '_' + i));
        deck.push(new Card(i, i, 'diamond', 'diamonds' + '_' + i));
        deck.push(new Card(i, i, 'spades', 'spades' + '_' + i));
    }else if(i > 11){
        if (higherCardRanks[i-12] != 'A') {
            // creating higher ranked cards without ace in this block
            deck.push(new Card(higherCardRanks[i-12], 10, 'hearts','hearts' + '_' +  higherCardRanks[i-12]));
            deck.push(new Card(higherCardRanks[i-12], 10, 'clubs','clubs' + '_' +  higherCardRanks[i-12]));
            deck.push(new Card(higherCardRanks[i-12], 10, 'diamond','diamonds' + '_' +  higherCardRanks[i-12]));
            deck.push(new Card(higherCardRanks[i-12], 10, 'spades','spades' + '_' +  higherCardRanks[i-12]));
        }else{
            // adding aces with different value
            deck.push(new Card(higherCardRanks[i-12], 11, 'hearts'));
            deck.push(new Card(higherCardRanks[i-12], 11, 'clubs'));
            deck.push(new Card(higherCardRanks[i-12], 11, 'diamond'));
            deck.push(new Card(higherCardRanks[i-12], 11, 'spades'));
        }
    }
}}

function startOfTheGame(){
    let startCards = [];
    let firstBotCard = deck.shift();
    botCardsValue += firstBotCard.value;
    let secondBotCard = deck.shift();
    botCardsValue += secondBotCard.value;
    let firstPlayerCard = deck.shift();
    playerCardsValue += firstPlayerCard.value;
    let secondPlayerCard = deck.shift();
    playerCardsValue += secondPlayerCard.value;
    startCards.push(firstBotCard, secondBotCard, firstPlayerCard, secondPlayerCard);
    
    for (let i = 0; i < 4; i++) {
        let newCard = cardTemplate.content.cloneNode(true);
        let img = newCard.querySelector('.card');
        img.src = startCards[i].imgURL;
        if(i < 2){
            botSide.appendChild(img);
        } else{
            playerSide.appendChild(img);
        }
    }
}

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
            if(newValue > maxBet){
                newValue = maxBet;
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
    betValue = maxBet;
    betChosenAmount.innerHTML = betValue;
})
clearingBet.addEventListener('click', ()=>{
    betValue = 0;
    betChosenAmount.innerHTML = betValue;
})
betApplyButton.addEventListener('click', ()=>{
    if(betValue == 0){
        return;
    }
    betButtonsContainer.style.transform = 'scale(0)';
    balance = balance - parseInt(betChosenAmount.innerHTML);
    cash.innerHTML = '$' + balance;
    maxBet = balance;
    betChosenAmount.innerHTML = 0;
    deckCreation();
    deck.forEach((card)=>{
        card.imgURL = images.default[card.imgURL];
    })
    shuffleDeck(deck);
    startOfTheGame();
})

hitButton.addEventListener('click', ()=>{
    let newHittedCard = deck.shift();
    let newCard = cardTemplate.content.cloneNode(true);
    let img = newCard.querySelector('.card');
    img.src = newHittedCard.imgURL;
    playerCardsValue += newHittedCard.value;

    if (playerCardsValue > 21) {
        lostScreen.style.transform = 'scale(1)';
        setTimeout(() => {
            // reseting game memory and going back to the beginning
            lostScreen.style.transform = 'scale(0)';
            playerSide.innerHTML = 0;
            botSide.innerHTML = 0;
            playerCardsValue = 0;
            botCardsValue = 0;
            deck = [];
            betButtonsContainer.style.transform = 'scale(1)';
        }, 3000);
    }
    playerSide.appendChild(img);
})

passButton.addEventListener('click', ()=>{

})