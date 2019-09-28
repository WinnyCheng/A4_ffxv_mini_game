import {startGame} from "./gameController.js";

const begin = function (name) {
    let canvas = document.getElementById("game");
    startGame(name, canvas);
    document.getElementById("chooseChara").style.display = "none";
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