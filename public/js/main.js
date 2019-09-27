import {startGame} from "./gameController.js";

const begin = function (name) {
    console.log(name);
    let canvas = document.getElementById("game");
    startGame(name, canvas);
    let images = document.getElementsByTagName("img");
    let i;
    for (i = 0; i < images.length; i += 1) {
        images[i].style.display = "none";
    }
};

window.onload = function () {
    let gladioImage = document.getElementById("Gladio");
    gladioImage.onclick = function () {
        begin("Gladio");
    };
    let ignisImage = document.getElementById("Ignis");
    ignisImage.onclick = function () {
        begin("Ignis");
    };
    let noctisImage = document.getElementById("Noctis");
    noctisImage.onclick = function () {
        begin("Noctis");
    };
    let promptoImage = document.getElementById("Prompto");
    promptoImage.onclick = function () {
        begin("Prompto");
    };
};



