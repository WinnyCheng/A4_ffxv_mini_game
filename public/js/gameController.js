import {Character, animateAction} from "./animation.js";

let leftState = true;
let canPressKey = true;
let delay1;
let delay2;
let delay3;

//chararcter object
let c;

function keyEvent(event){
    let key = event.key;
    if(canPressKey) {
        switch (key) {
            case "j": //attack
                if(leftState){ c.attackL(); }
                else { c.attackR(); }
                canPressKey = false;
                setTimeout(function () {
                    if(leftState){ c.idleL(); }
                    else { c.idleR(); }
                    canPressKey = true;
                }, delay1);
                break;
            case "k": //limit attack\
                if(leftState){ c.limAttackL(); }
                else { c.limAttackR(); }
                canPressKey = false;
                setTimeout(function () {
                    if(leftState) { c.idleL(); }
                    else { c.idleR(); }
                    canPressKey = true;
                }, delay2);
                break;
            case "u": //win
                if(leftState){ c.winL(); }
                else { c.winR(); }
                canPressKey = false;
                setTimeout(function () {
                    if(leftState) { c.idleL(); }
                    else { c.idleR(); }
                    canPressKey = true;
                }, delay3);
                break;
            case "h":
                swal("Game Control Keys", "w: move up\ns: move down\na: move left\nd: move right\n\nj: attack\nk: special attack\nu: special action\n\n h: help");
                break;
        }
    }
}
function keyDownEvent(event){
    let key = event.key;
    switch(key) {
        case "w": //move up
            c.moveT(leftState);
            break;
        case "a": //move left
            c.moveL();
            leftState = true;
            break;
        case "s": //move down
            c.moveB(leftState);
            break;
        case "d": //move right
            c.moveR();
            leftState = false;
            break;
    }
}
function keyUpEvent(event){
    let key = event.key;
    switch(key) {
        case "w": //move up
            if(leftState){ c.idleL(); }
            else { c.idleR(); }
            break;
        case "a": //move left
            c.idleL();
            break;
        case "s": //move down
            if(leftState){ c.idleL(); }
            else { c.idleR(); }
            break;
        case "d": //move right
            c.idleR();
            break;
    }
}

function startGame(name, canvas){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.backgroundImage = "url('../images/background.png')";
    canvas.style.backgroundSize = "866px 561px";
    let ctx = canvas.getContext("2d");

    if(name === "Gladio") {
        delay1 = 1700;
        delay2 = 3500;
        delay3 = 2400;
    }
    else if(name === "Ignis") {
        delay1 = 1600;
        delay2 = 4100;
        delay3 = 2400;
    }
    else if(name === "Noctis") {
        delay1 = 2600;
        delay2 = 5300;
        delay3 = 1800;
    }
    else {
        delay1 = 2100;
        delay2 = 7700;
        delay3 = 2500;
    }

    c = new Character(name);

    c.idleR();
    animateAction(ctx, canvas.width, canvas.height);

    window.onkeypress = keyEvent;
    window.onkeydown = keyDownEvent;
    window.onkeyup = keyUpEvent;
}

export {startGame};
