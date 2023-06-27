import "normalize.css";
import "../scss/main.scss"

const startButton = document.querySelector('.startButton-js');
const playerSide = document.querySelector('.playerSide--js');
const botSide = document.querySelector('.botSide--js');
const cardTemplate = document.querySelector('#cardTemplate');


startButton.addEventListener('click', ()=>{
    startButton.style.transform = 'scale(0)';
    setTimeout(() => {
        startButton.style.display = 'none';
    }, 500);
}) 