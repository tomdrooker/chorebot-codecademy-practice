const doorImage1 = document.querySelector("#door1");
const doorImage2 = document.querySelector("#door2");
const doorImage3 = document.querySelector("#door3");
const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
const closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
let numClosedDoors = 3;
let openDoor1, openDoor2, openDoor3;
const startButton = document.querySelector("#start");
let currentlyPlaying = true;

const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }
    else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor1 = spaceDoorPath;
        openDoor3 = beachDoorPath;
    }
    else if (choreDoor === 2) {
        openDoor3 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    }
}

const isBot = door => {
    if (door.src === botDoorPath) {
        return true;
    }
    else {
        return false;
    }
}

const isClicked = door => {
    if (door.src === closedDoorPath) {
        return false;
    }
    else {
        return true;
    }
}

const playDoor = door => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver("win");
    }
    else if (isBot(door)) {
        gameOver();
    }
}

doorImage1.onclick = event => {
    if (currentlyPlaying && !isClicked(event.target)) {
        event.target.src = openDoor1;
        playDoor(doorImage1);
    }
}

doorImage2.onclick = event => {
    if (currentlyPlaying && !isClicked(event.target)) {
        event.target.src = openDoor2;
        playDoor(doorImage2);
    }
}

doorImage3.onclick = event => {
    if (currentlyPlaying && !isClicked(event.target)) {
        event.target.src = openDoor3;
        playDoor(doorImage3);
    } 
}

startButton.onclick = () => {
    if (currentlyPlaying === false) {
        startRound();
    }
}

const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = "Good luck!"
    currentlyPlaying = true;
    randomChoreDoorGenerator();
}

const gameOver = status => {
    if (status == "win") {
        startButton.innerHTML = "You win! Play again?"
    }
    else {
        startButton.innerHTML = "Game over! Play again?"
    }
    currentlyPlaying = false;
}

startRound();