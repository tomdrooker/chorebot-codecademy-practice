const doorImage1 = document.querySelector("#door1");
const doorImage2 = document.querySelector("#door2");
const doorImage3 = document.querySelector("#door3");
const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg"


doorImage1.onclick = event => {
    event.target.src = botDoorPath;
}

doorImage2.onclick = event => {
    event.target.src = beachDoorPath;
}

doorImage3.onclick = event => {
    event.target.src = spaceDoorPath;
}

