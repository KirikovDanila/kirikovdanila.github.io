// setTimeout(timeUp, 2000)
// function timeUp() {
//     console.log('Times Up!')
// }
// let button = document.querySelector('#button');
// let circle = document.querySelector('#cicle');

// button.addEventListener('click', clickEvent)

// function clickEvent(event) {
//     circle.className = 'is-visible';
//     setTimeout(clearCircle, 250);
// }
// function clearCircle() {
//     circle.className = '';
// }
// let characters = document.querySelectorAll('span');
// let r = 25;
// let b = 50;
// let g = 75;
// let interval = 125;
// for (let i = 0; i < characters.length; i++) {
//     const el = characters[i];

//     setInterval(changeColor, interval, el);
//     interval += 15;
// }
// function changeColor(el) {
//     el.style.color = 'rgb(' + r ',' + g + ',' + b +')'
//     r += 5;
//     g += 10;
//     b += 15;
//     if (r > 255) {
//     r = 0; 
//     } else if (g > 255) {
//         g = 100
//     }else if (b > 255) {
//         b = 75
//     }
// }
let map = document.querySelector('#map');
let status = document.querySelector('#status');
let pirate = document.querySelector('#pirate');
let computer = document.querySelector('#computer');
let treasure = document.querySelector('#treasure');
let lifes = 5;
let treasurePositionX = Math.random() * (map.clientWidth - 40);
let treasurePositionY = Math.random() * (map.clientHeight - 40);

treasure.style.left = treasurePositionX + "px";
treasure.style.top = treasurePositionY + "px";
map.addEventListener('click', mapEvent);
function mapEvent(event) {
    let x = event.clientX;
    let y = event.clientY;
    if ((x >= treasurePositionX && x <= treasurePositionX + 40) && (y >= treasurePositionY && y <= treasurePositionY + 40)) {
        console.log('You found the treasure')
    } else {
        lifes -= 1;
        howFarTreasure(x, y);
    }
}
function howFarTreasure(x, y) {
    let a = x - treasurePositionX;
    let b = y -treasurePositionY;
    let c = (a * a + b * b) ** 0.5;
    if (c >= 250) {
        console.log('too cold')
    } else if (c >= 150) {
        comsole.log('cold')
    } else if ( c >= 50) {
        console.log('hot')
    } else if ( c >= 1) {
        console.log('very hot')
    }
}
let computerPosX = 25;
let computerWidth = pirate.clientWidth;

let computerMoveInterval = setInterval(computerMove, 250)
function computerMove() {
    computerPosX += 25;
    computer.style.left = computerPosX + 'px';
    if (computerPosX >= computerWidth) {
        computer.remove();
        clearInterval(computerMoveInterval);
        console.log('You lose!')
    }
}
function notificationEvent(text, color) {
    notification.className = 'visible';
    notification.textContent = text;
    notification.style.backgroundColor = color;
}

let computerPosX = pirate.clientWidth / 100;
let computerWidth = pirate.clientWidth;
function computerMove() {
    computerPosX += computerWidth / lifes_base;
    computer.style.left = computerPosX + 'px';
    if (computerPosX >= computerWidth && !gameover) {
        losingScreen(); 
    }
}
function winningScreen() {
    clearInterval(gameInterval);
    status.remove();
    map.style.height = '200vh';
    treasure.className = 'gameover_win';
    let winSpeech = document.createElement('span');
    winSpeech.className = 'speech';
    winSpeech.textContent = 'Congratulations! You found the treasure!';
    map.append(winSpeech);
    gameover = true;
}

function losingScreen() {
    clearInterval(gameInterval);
    status.remove();
    map.style.height = '200vh';
    treasure.className = 'gameover_lose';
    let loseSpeech = document.createElement('span');
    loseSpeech.className = 'speech';
    loseSpeech.textContent = 'You lose! Pirate found treasure first!';
    map.append(loseSpeech);
    gameover = true;
}