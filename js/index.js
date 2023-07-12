import "normalize.css";
import "../scss/main.scss";
import * as images from './imagesURLs';

const startButton = document.querySelector('.startButton-js');
const playerTable = document.querySelector('.playerSide--js');
const botTable = document.querySelector('.botSide--js');
const playerSide = document.querySelector('.playerCardsHolder');
const botSide = document.querySelector('.botCardsHolder');
const cardTemplate = document.querySelector('#cardTemplate');
const hitButton = document.querySelector('.hit-js');
const passButton = document.querySelector('.pass-js');
const cash = document.querySelector('.cash-js');
const betChosenAmount = document.querySelector('.main__bet--amount');
const clearingBet = document.querySelector('.betButton__0');
const maxBetButton = document.querySelector('.betButton__MAX');
const betButtonsContainer = document.querySelector('.main__bet');
const betApplyButton = document.querySelector('.main__bet--apply');
const loseScreen = document.querySelector('.loseScreen');
const winScreen = document.querySelector('.winScreen');
const tieScreen = document.querySelector('.tieScreen');
const blackjackScreen = document.querySelector('.blackjackEvent');

let balance = parseInt(cash.innerHTML.substring(1, cash.innerHTML.length));

let maxCardValue = 0;

let betButtons = [];
let betValue = 0;
let maxBet = balance;
// creating deck of cards
let deck = [];
let higherCardRanks = ['ace','jack','queen',"king"];
// bot,player hands
let playerHand = [];
let botHand = [];
// board value containers
let botCardsValue = 0;
let playerCardsValue = 0;
// reverted bot card
let revertBotCard;
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
        deck.push(new Card(i, i, 'heart', 'heart' + '_' + i));
        deck.push(new Card(i, i, 'clubs', 'clubs' + '_' + i));
        deck.push(new Card(i, i, 'diamonds', 'diamonds' + '_' + i));
        deck.push(new Card(i, i, 'spades', 'spades' + '_' + i));
    }else if(i > 11){
        if (higherCardRanks[i-12] != 'ace') {
            // creating higher ranked cards without ace in this block
            deck.push(new Card(higherCardRanks[i-12], 10, 'heart','heart' + '_' +  higherCardRanks[i-12]));
            deck.push(new Card(higherCardRanks[i-12], 10, 'clubs','clubs' + '_' +  higherCardRanks[i-12]));
            deck.push(new Card(higherCardRanks[i-12], 10, 'diamonds','diamonds' + '_' +  higherCardRanks[i-12]));
            deck.push(new Card(higherCardRanks[i-12], 10, 'spades','spades' + '_' +  higherCardRanks[i-12]));
        }else{
            // adding aces with different value
            deck.push(new Card(higherCardRanks[i-12], 11, 'heart', 'heart' + '_' + higherCardRanks[i-12]));
            deck.push(new Card(higherCardRanks[i-12], 11, 'clubs', 'clubs' + '_' + higherCardRanks[i-12]));
            deck.push(new Card(higherCardRanks[i-12], 11, 'diamonds', 'diamonds' + '_' + higherCardRanks[i-12]));
            deck.push(new Card(higherCardRanks[i-12], 11, 'spades', 'spades' + '_' + higherCardRanks[i-12]));
        }
    }
}}
// standalone function to hit card so the code looks more elegant :)
function hitCard(side, cardsValue, hand){
    let newHittedCard = deck.shift();
    hand.push(newHittedCard);
    let newCard = cardTemplate.content.cloneNode(true);
    let img = newCard.querySelector('.card');
    img.src = newHittedCard.imgURL;
    img.classList.add('cardPopIn');
    cardsValue += newHittedCard.value;
    side.appendChild(img);
    if(side.childElementCount > 3){
        side.classList.add('cardsFoldingClass');
    }
    for (let i = 0; i < hand.length; i++) {
        if(hand[i].value == 11){
            hand[i].value = 1;
            cardsValue = cardsValue - 10;
        }
    }
    return cardsValue;

}
// first function to start a round loop
function startOfTheGame(){
    hitButton.style.pointerEvents = 'auto';
    passButton.style.pointerEvents = 'auto';
    // first draw
    let startCards = [];
    let firstBotCard = deck.shift();
    botCardsValue += firstBotCard.value;
    let secondBotCard = deck.shift();
    botCardsValue += secondBotCard.value;
    // cloning card object to save its native imgURL
    revertBotCard = {...secondBotCard}; 
    secondBotCard.imgURL = images.default['revert'];
    //
    let firstPlayerCard = deck.shift();
    playerCardsValue += firstPlayerCard.value;
    let secondPlayerCard = deck.shift();
    playerCardsValue += secondPlayerCard.value;
    startCards.push(firstBotCard, secondBotCard, firstPlayerCard, secondPlayerCard);
    botHand.push(firstBotCard, secondBotCard);
    playerHand.push(firstPlayerCard, secondPlayerCard);
    //appending first 2 cards each side
    for (let i = 0; i < 4; i++) {
        let newCard = cardTemplate.content.cloneNode(true);
        let img = newCard.querySelector('.card');
        img.src = startCards[i].imgURL;
        img.classList.add('cardPopIn');
        if(i < 2){
            botSide.appendChild(img);
        } else{
            playerSide.appendChild(img);
        }
    }
}
// reset game function
function resetGame() {
    playerSide.innerHTML = '';
    botSide.innerHTML = '';
    betValue = 0;
    playerCardsValue = 0;
    botCardsValue = 0;
    playerHand = [];
    botHand = [];
    deck = [];
    betButtonsContainer.style.transform = 'scale(1)';
}

// declaring final result of the game functions
function blackjack(){
    blackjackScreen.style.transform = 'scale(1)';
    if (playerCardsValue == 21) {
        balance = balance + 2 * betValue;
        cash.innerHTML = '$' + balance;
        setTimeout(() => {
            // reseting game memory and going back to the beginning
            winScreen.style.transform = 'scale(0)';
            resetGame()
        }, 30000);
    }
        setTimeout(() => {
            // reseting game memory and going back to the beginning
            loseScreen.style.transform = 'scale(0)';
            resetGame()
        }, 3000);
}
function gameWin(){
    winScreen.style.transform = 'scale(1)';
    balance = balance + 2 * betValue;
    cash.innerHTML = '$' + balance;
        setTimeout(() => {
            // reseting game memory and going back to the beginning
            winScreen.style.transform = 'scale(0)';
            resetGame()
        }, 3000);
}
function gameLose(){
    loseScreen.style.transform = 'scale(1)';
        setTimeout(() => {
            // reseting game memory and going back to the beginning
            loseScreen.style.transform = 'scale(0)';
            resetGame()
        }, 3000);
}
function gameTie(){
    tieScreen.style.transform = 'scale(1)';
    balance = balance + betValue;
        setTimeout(() => {
            // reseting game memory and going back to the beginning
            tieScreen.style.transform = 'scale(0)';
            resetGame()
        }, 3000);
}
/* counting how many cards could fit in botSide, 
   returning an array of all possibilities
*/
function correctCardsPicker(deckOfCards, highEnd){
    let possibleCards = [];
    deckOfCards.forEach((card)=>{
        if (card.value <= highEnd) {
            possibleCards.push(card);
        }
    })
    return possibleCards;
  }
// full bot turn
  function botInteligence(highEnd){
    let randomShot = Math.random();
    let possibleCards = correctCardsPicker(deck, highEnd);
    let probability =  possibleCards.length / deck.length;
    // logical move. if bot is losing, it obviously hit card to try to win
    if(playerCardsValue > botCardsValue){
        
        let hitting = 
        setTimeout(() => {
            hitCard(botSide, botCardsValue, botHand);
        }, 300);
        botCardsValue = hitting;
        if (botCardsValue > 21) {
            return "end";
        }
        return 'repeat';
    }else if(botCardsValue > playerCardsValue){
        return "end";
    }
    // bot hitting if its profitable to risk hitting a card
    if (probability >= randomShot) {
        let hitting = hitCard(botSide, botCardsValue, botHand);
        botCardsValue = hitting;
        if (botCardsValue > 21) {
            botHand.forEach((e)=>{
                if(e.value == 11){
                    e.value == 1
                    botCardsValue = botCardsValue - 10;
                    return 'repeat';
                }
            })
            return "end";
        }
        return "repeat";
    }
    return "end";
    }

function botTurn(){
    // removing reverted card and appending its reflection with object saved before
    botSide.lastChild.remove();
    let newCard = cardTemplate.content.cloneNode(true);
    let img = newCard.querySelector('.card');
    img.classList.remove('cardPopIn');
    img.src = images.default[revertBotCard.color + '_' + revertBotCard.rank];
    botSide.appendChild(img);
    img.classList.add('rotated');
    if (botCardsValue == 21) {
        blackjack();
    }
    maxCardValue = 21 - botCardsValue;
    let startBotRound = botInteligence(maxCardValue);
    if (startBotRound == "repeat") {
        botInteligence(maxCardValue);
    }else if(startBotRound == "end"){
        return;
    }
}

startButton.addEventListener('click', ()=>{
    startButton.style.transform = 'scale(0)';
    playerTable.classList.add('cardHoldersActivated');
    botTable.classList.add('cardHoldersActivated');
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
    hitButton.style.opacity = 1;
    passButton.style.opacity = 1;
    startOfTheGame();
    if (playerCardsValue == 21) {
        blackjack();
    }
})

hitButton.addEventListener('click', ()=>{
    let hitting = hitCard(playerSide, playerCardsValue, playerHand);
    playerCardsValue = hitting;
    console.log(playerCardsValue);
    if (playerCardsValue > 21) {
        hitButton.style.opacity = 0.4;
        passButton.style.opacity = 0.4;
        hitButton.style.pointerEvents = 'none';
        passButton.style.pointerEvents = 'none';
        setTimeout(() => {
            gameLose();
        }, 1000);
    }
})

function gameResultCheck(){
    setTimeout(() => {
        if(botCardsValue > 21){
            gameWin();
        }else if (botCardsValue > playerCardsValue) {
            gameLose();
        }else if(playerCardsValue > botCardsValue){
            gameWin()
        }
        else{
            gameTie();
        }
    }, 2000);
}

passButton.addEventListener('click', ()=>{
    botSide.lastChild.classList.remove('cardPopIn');
    botSide.lastChild.classList.add('firstRotate');
    hitButton.style.opacity = 0.4;
    passButton.style.opacity = 0.4;
    hitButton.style.pointerEvents = 'none';
    passButton.style.pointerEvents = 'none';
    setTimeout(() => {
        botTurn();
        gameResultCheck();
    }, 200);
})
