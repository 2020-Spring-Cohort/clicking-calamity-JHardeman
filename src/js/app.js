// connect to HTML here

let gameEngine = new ClickCount;


const clickCookieButton = document.querySelector('.cookie-button');
const companionButton = document.querySelector('.companion-button');
const compounderButton = document.querySelector('.compounder-button');


const getCurrentClickCount = (gameEngine) =>{
    document.querySelector('.displayClickCount').innerText = gameEngine.displayClickCount().toFixed(2);
}
const makeClickCounterButton = (gameEngine) => {
    clickCookieButton.addEventListener('click', () => {
        gameEngine.countClick();
        document.querySelector('.displayClickCount').innerText = gameEngine.displayClickCount().toFixed(2);
    });
}
const makeCompanionButton = (gameEngine) => {
    companionButton.addEventListener('click', () =>{
        gameEngine.buyClickCompanion();
        document.querySelector('.displayCompanionCount').innerText = gameEngine.displayCompanionCount().toFixed(2);
        document.querySelector('.displayCompanionCost').innerText = gameEngine.displayCompanionCost();
    });
} 
const makeCompounderButton = (gameEngine) =>{
    compounderButton.addEventListener('click', ()=> {
        gameEngine.buyCompounder();
        document.querySelector('.displayCompounderCount').innerText = gameEngine.displayCompounderCount();
        document.querySelector('.displayCompounderCost').innerText = gameEngine.displayCompounderCost();
    });
}
const updateDisplay = (gameEngine)=>{

    document.querySelector('.displayClickCount').innerText = gameEngine.displayClickCount().toFixed(2);
    document.querySelector('.displayCompanionCount').innerText = gameEngine.displayCompanionCount();
    document.querySelector('.displayCompanionCost').innerText = gameEngine.displayCompanionCost();
    document.querySelector('.displayCompounderCount').innerText = gameEngine.displayCompounderCount();
    document.querySelector('.displayCompounderCost').innerText = gameEngine.displayCompounderCost();
    }
    

setInterval(() => {
    for(let i = 0; i < gameEngine.companionCount; i++ ){
        gameEngine.countClick();
    }
    updateDisplay(gameEngine)
}, 1000);


makeClickCounterButton(gameEngine);
makeCompanionButton(gameEngine);
makeCompounderButton(gameEngine);


