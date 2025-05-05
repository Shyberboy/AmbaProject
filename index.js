const announcement = document.getElementById('announce');

const imageOne = document.getElementById('img1');
const imageTwo = document.getElementById('img2');

const rollBtn = document.getElementById('roll-btn');
const resetBtn = document.getElementById('reset-btn');

const rollDice = () => {
    let diceOneId = Math.floor(Math.random() * 6) + 1;
    switch (diceOneId) {
        case 1:
            imageOne.src = "images/dice1.png";
            break;
        case 2: 
            imageOne.src = "images/dice2.png";
            break;
        case 3: 
            imageOne.src = "images/dice3.png";
            break;
        case 4: 
            imageOne.src = "images/dice4.png";
            break;
        case 5: 
            imageOne.src = "images/dice5.png";
            break;
        case 6: 
            imageOne.src = "images/dice6.png";
            break;
    }
    let diceTwoId = Math.floor(Math.random() * 6) + 1;
    switch (diceTwoId) {
        case 1:
            imageTwo.src = "images/dice1.png";
            break;
        case 2: 
            imageTwo.src = "images/dice2.png";
            break;
        case 3: 
            imageTwo.src = "images/dice3.png";
            break;
        case 4: 
            imageTwo.src = "images/dice4.png";
            break;
        case 5: 
            imageTwo.src = "images/dice5.png";
            break;
        case 6: 
            imageTwo.src = "images/dice6.png";
            break;
    }
    showResult(diceOneId, diceTwoId);
};

const showResult = (playerOne, playerTwo) => {
    if (playerOne > playerTwo) {
        announcement.textContent = "Player 1 wins!";
    } else if (playerOne == playerTwo) {
        announcement.textContent = "It's a tie!";
    } else {
        announcement.textContent = "Player 2 wins!";
    }
};

const resetDice = () => {
    announcement.textContent = 'Click "Roll!" button to start';
    imageOne.src = "images/dice1.png";
    imageTwo.src = "images/dice1.png";
};

rollBtn.addEventListener('click', rollDice());
resetBtn.addEventListener('click', resetDice());