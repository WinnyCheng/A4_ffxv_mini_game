let x = 0;
let y = 0;
let moveX = 0;
let moveY = 0;
let columns = 3;
let rows = 2;
let srcX;
let srcY;
let width = 240 / columns;
let height = 178 / rows;
let blankFrames = 2;
let direction = "left";
let curFrameX = 0;
let curFrameY = 0;

let actions = ["atkLeft", "atkRight", "idleLeft", "idleRight", "limAtkLeft", "limAtkRight",
    "moveLeft", "moveRight", "winLeft", "winRight"];
let png = ["atk.png", "atkR.png", "idle.png", "idleR.png", "limAtk.png", "limAtkR.png",
    "moveLeft.png", "moveRight.png", "win.png", "winR.png"];

function setSrc(img, array){
    let i;
    for (i = 0; i < actions.length; i += 1) {
        array[actions[i]].src = img + png[i];
    }
}

//setting all images sources for Gladio
let gladioSpriteImages = {
    atkLeft: new Image(),
    atkRight: new Image(),
    idleLeft: new Image(),
    idleRight: new Image(),
    limAtkLeft: new Image(),
    limAtkRight: new Image(),
    moveLeft: new Image(),
    moveRight: new Image(),
    winLeft: new Image(),
    winRight: new Image()
};
setSrc("images/Gladio_", gladioSpriteImages);

//setting all images sources for Ignis
let ignisSpriteImages = {
    atkLeft: new Image(),
    atkRight: new Image(),
    idleLeft: new Image(),
    idleRight: new Image(),
    limAtkLeft: new Image(),
    limAtkRight: new Image(),
    moveLeft: new Image(),
    moveRight: new Image(),
    winLeft: new Image(),
    winRight: new Image()
};
setSrc("images/Ignis_", ignisSpriteImages);

//setting all images sources for Noctis
let noctisSpriteImages = {
    atkLeft: new Image(),
    atkRight: new Image(),
    idleLeft: new Image(),
    idleRight: new Image(),
    limAtkLeft: new Image(),
    limAtkRight: new Image(),
    moveLeft: new Image(),
    moveRight: new Image(),
    winLeft: new Image(),
    winRight: new Image()
};
setSrc("images/Noctis_", noctisSpriteImages);

//setting all images sources for Prompto
let promptoSpriteImages = {
    atkLeft: new Image(),
    atkRight: new Image(),
    idleLeft: new Image(),
    idleRight: new Image(),
    limAtkLeft: new Image(),
    limAtkRight: new Image(),
    moveLeft: new Image(),
    moveRight: new Image(),
    winLeft: new Image(),
    winRight: new Image()
};
setSrc("images/Prompto_", promptoSpriteImages);

let spriteImage = gladioSpriteImages.idleLeft;

function setGlobals(posx, posy, c, r, shW, shH, imgArray, img, blanks, dir){
    x = posx;
    y = posy;
    columns = c;
    rows = r;
    width = shW / c;
    height = shH / r;
    spriteImage = imgArray[img];
    blankFrames = blanks;
    direction = dir;
}

function Character(name) {
    function Gladio() {
        this.attackL = function () {
            setGlobals(-130, -38, 3, 6, 657, 798, gladioSpriteImages, "atkLeft", 1, "left");
            setCurFrame();
        };
        this.attackR = function () {
            setGlobals(-30, -38, 3, 6, 657, 798, gladioSpriteImages, "atkRight", 1, "right");
            setCurFrame();
        };
        this.idleL = function () {
            setGlobals(0, 0,3, 2, 240, 178, gladioSpriteImages, "idleLeft", 2, "left");
            setCurFrame();
        };
        this.idleR = function () {
            setGlobals(0, 0, 3, 2, 240, 178, gladioSpriteImages, "idleRight", 2, "right");
            setCurFrame();
        };
        this.limAttackL = function () {
            setGlobals(-258, -78, 3, 12, 1065, 2580, gladioSpriteImages, "limAtkLeft", 1, "left");
            setCurFrame();
        };
        this.limAttackR = function () {
            setGlobals(-15, -78, 3, 12, 1065, 2580, gladioSpriteImages, "limAtkRight", 1, "right");
            setCurFrame();
        };
        this.moveL = function () {
            setGlobals(0, 5, 1, 1, 77, 84, gladioSpriteImages, "moveLeft", 0, "left");
            moveX -= 5;
            curFrameX = 0;
            curFrameY = 0;
            srcX = curFrameX * width;
            srcY = curFrameY * height;
        };
        this.moveR = function () {
            setGlobals(0, 5, 1, 1, 77, 84, gladioSpriteImages, "moveRight", 0, "right");
            moveX += 5;
            curFrameX = 0;
            curFrameY = 0;
            srcX = curFrameX * width;
            srcY = curFrameY * height;
        };
        this.moveT = function (isleft) {
            if(isleft) {
                setGlobals(0, 5, 1, 1, 77, 84, gladioSpriteImages, "moveLeft", 0, "left");
            }
            else {
                setGlobals(0, 5, 1, 1, 77, 84, gladioSpriteImages, "moveRight", 0, "right");
            }
            moveY -= 5;
            curFrameX = 0;
            curFrameY = 0;
            srcX = curFrameX * width;
            srcY = curFrameY * height;
        };
        this.moveB = function (isleft) {
            if(isleft){
                setGlobals(0, 5, 1, 1, 77, 84, gladioSpriteImages, "moveLeft", 0, "left");
            }
            else {
                setGlobals(0, 5, 1, 1, 77, 84, gladioSpriteImages, "moveRight", 0, "right");
            }
            moveY += 5;
            curFrameX = 0;
            curFrameY = 0;
            srcX = curFrameX * width;
            srcY = curFrameY * height;
        };
        this.winL = function () {
            setGlobals(-15, -30, 3, 8, 285, 960, gladioSpriteImages, "winLeft", 0, "left");
            setCurFrame();
        };
        this.winR = function () {
            setGlobals(2, -30, 3, 8, 285, 960, gladioSpriteImages, "winRight", 0, "right");
            setCurFrame();
        };
    }
    function Ignis() {
        this.attackL = function () {
            setGlobals(-160, -2, 3, 6, 759, 486, ignisSpriteImages, "atkLeft", 2, "left");
            setCurFrame();
        };
        this.attackR = function () {
            setGlobals(-20, -2, 3, 6, 759, 486, ignisSpriteImages, "atkRight", 2, "right");
            setCurFrame();
        };
        this.idleL = function () {
            setGlobals(0, 0, 3, 2, 231, 158, ignisSpriteImages, "idleLeft", 2, "left");
            setCurFrame();
        };
        this.idleR = function () {
            setGlobals(0, 0, 3, 2, 231, 158, ignisSpriteImages, "idleRight", 2, "right");
            setCurFrame();
        };
        this.limAttackL = function () {
            setGlobals(-188, -130, 3, 14, 1083, 3080, ignisSpriteImages, "limAtkLeft", 1, "left");
            setCurFrame();
        };
        this.limAttackR = function () {
            setGlobals(-100, -130, 3, 14, 1083, 3080, ignisSpriteImages, "limAtkRight", 1, "right");
            setCurFrame();
        };
        this.moveL = function () {
            setGlobals(0, 15, 1, 1, 72, 64, ignisSpriteImages, "moveLeft", 0, "left");
            moveX -= 5;
            curFrameX = 0;
            curFrameY = 0;
            srcX = curFrameX * width;
            srcY = curFrameY * height;
        };
        this.moveR = function () {
            setGlobals(0, 15, 1, 1, 72, 64, ignisSpriteImages, "moveRight", 0, "right");
            moveX += 5;
            curFrameX = 0;
            curFrameY = 0;
            srcX = curFrameX * width;
            srcY = curFrameY * height;
        };
        this.moveT = function (isleft) {
            if(isleft){
                setGlobals(0, 15, 1, 1, 72, 64, ignisSpriteImages, "moveLeft", 0, "left");
            }
            else {
                setGlobals(0, 15, 1, 1, 72, 64, ignisSpriteImages, "moveRight", 0, "right");
            }
            moveY -= 5;
            curFrameX = 0;
            curFrameY = 0;
            srcX = curFrameX * width;
            srcY = curFrameY * height;
        };
        this.moveB = function (isleft) {
            if(isleft){
                setGlobals(0, 15, 1, 1, 72, 64, ignisSpriteImages, "moveLeft", 0, "left");
            }
            else {
                setGlobals(0, 15, 1, 1, 72, 64, ignisSpriteImages, "moveRight", 0, "right");
            }
            moveY += 5;
            curFrameX = 0;
            curFrameY = 0;
            srcX = curFrameX * width;
            srcY = curFrameY * height;
        };
        this.winL = function () {
            setGlobals(0, 0, 3, 8, 228, 632, ignisSpriteImages, "winLeft", 0, "left");
            setCurFrame();
        };
        this.winR = function () {
            setGlobals(0, 0, 3, 8, 228, 632, ignisSpriteImages, "winRight", 0, "right");
            setCurFrame();
        };
    }
    function Noctis() {
        this.attackL = function () {
            setGlobals(-90, -48, 3, 9, 861, 1215, noctisSpriteImages, "atkLeft", 1, "left");
            setCurFrame();
        };
        this.attackR = function () {
            setGlobals(-140, -48, 3, 9, 861, 1215, noctisSpriteImages, "atkRight", 1, "right");
            setCurFrame();
        };
        this.idleL = function () {
            setGlobals(0, 0, 3, 3, 186, 210, noctisSpriteImages, "idleLeft", 1, "left");
            setCurFrame();
        };
        this.idleR = function () {
            setGlobals(0, 0, 3, 3, 186, 210, noctisSpriteImages, "idleRight", 2, "right");
            setCurFrame();
        };
        this.limAttackL = function () {
            setGlobals(-202, -120, 3, 18, 1233, 4824, noctisSpriteImages, "limAtkLeft", 1, "left");
            setCurFrame();
        };
        this.limAttackR = function () {
            setGlobals(-145, -120, 3, 18, 1233, 4824, noctisSpriteImages, "limAtkRight", 1, "right");
            setCurFrame();
        };
        this.moveL = function () {
            setGlobals(0, 5, 1, 1, 57, 65, noctisSpriteImages, "moveLeft", 0, "left");
            moveX -= 5;
            curFrameX = 0;
            curFrameY = 0;
            srcX = curFrameX * width;
            srcY = curFrameY * height;
        };
        this.moveR = function () {
            setGlobals(0, 5, 1, 1, 57, 64, noctisSpriteImages, "moveRight", 0, "right");
            moveX += 5;
            curFrameX = 0;
            curFrameY = 0;
            srcX = curFrameX * width;
            srcY = curFrameY * height;
        };
        this.moveT = function (isleft) {
            if(isleft){
                setGlobals(0, 5, 1, 1, 57, 65, noctisSpriteImages, "moveLeft", 0, "left");
            }
            else {
                setGlobals(0, 5, 1, 1, 57, 65, noctisSpriteImages, "moveRight", 0, "right");
            }
            moveY -= 5;
            curFrameX = 0;
            curFrameY = 0;
            srcX = curFrameX * width;
            srcY = curFrameY * height;
        };
        this.moveB = function (isleft) {
            if(isleft){
                setGlobals(0, 5, 1, 1, 57, 65, noctisSpriteImages, "moveLeft", 0, "left");
            }
            else {
                setGlobals(0, 5, 1, 1, 57, 65, noctisSpriteImages, "moveRight", 0, "right");
            }
            moveY += 5;
            curFrameX = 0;
            curFrameY = 0;
            srcX = curFrameX * width;
            srcY = curFrameY * height;
        };
        this.winL = function () {
            setGlobals(0, 0, 3, 6, 207, 420, noctisSpriteImages, "winLeft", 0, "left");
            setCurFrame();
        };
        this.winR = function () {
            setGlobals(-8, 0, 3, 6, 207, 420, noctisSpriteImages, "winRight", 0, "right");
            setCurFrame();
        };
    }
    function Prompto() {
        this.attackL = function () {
            setGlobals(-155, -15, 3, 7, 714, 798, promptoSpriteImages, "atkLeft", 0, "left");
            setCurFrame();
        };
        this.attackR = function () {
            setGlobals(-20, -15, 3, 7, 714, 798, promptoSpriteImages, "atkRight", 0, "right");
            setCurFrame();
        };
        this.idleL = function () {
            setGlobals(0, 0, 3, 2, 177, 152, promptoSpriteImages, "idleLeft", 2, "left");
            setCurFrame();
        };
        this.idleR = function () {
            setGlobals(0, 0, 3, 2, 177, 152, promptoSpriteImages, "idleRight", 2, "right");
            setCurFrame();
        };
        this.limAttackL = function () {
            setGlobals(-233, -63, 3, 26, 1164, 4550, promptoSpriteImages, "limAtkLeft", 1, "left");
            setCurFrame();
        };
        this.limAttackR = function () {
            setGlobals(-93, -63, 3, 26, 1164, 4550, promptoSpriteImages, "limAtkRight", 1, "right");
            setCurFrame();
        };
        this.moveL = function () {
            setGlobals(0, 11, 1, 1, 59, 65, promptoSpriteImages, "moveLeft", 0, "left");
            moveX -= 5;
            curFrameX = 0;
            curFrameY = 0;
            srcX = curFrameX * width;
            srcY = curFrameY * height;
        };
        this.moveR = function () {
            setGlobals(0, 11, 1, 1, 59, 65, promptoSpriteImages, "moveRight", 0, "right");
            moveX += 5;
            curFrameX = 0;
            curFrameY = 0;
            srcX = curFrameX * width;
            srcY = curFrameY * height;
        };
        this.moveT = function (isleft) {
            if(isleft){
                setGlobals(0, 11, 1, 1, 59, 65, promptoSpriteImages, "moveLeft", 0, "left");
            }
            else {
                setGlobals(0, 11, 1, 1, 59, 65, promptoSpriteImages, "moveRight", 0, "right");
            }
            moveY -= 5;
            curFrameX = 0;
            curFrameY = 0;
            srcX = curFrameX * width;
            srcY = curFrameY * height;
        };
        this.moveB = function (isleft) {
            if(isleft){
                setGlobals(0, 11, 1, 1, 59, 65, promptoSpriteImages, "moveLeft", 0, "left");
            }
            else {
                setGlobals(0, 11, 1, 1, 59, 65, promptoSpriteImages, "moveRight", 0, "right");
            }
            moveY += 5;
            curFrameX = 0;
            curFrameY = 0;
            srcX = curFrameX * width;
            srcY = curFrameY * height;
        };
        this.winL = function () {
            setGlobals(-14, -45, 3, 9, 207, 1089, promptoSpriteImages, "winRight", 2, "left");
            setCurFrame();
        };
        this.winR = function () {
            setGlobals(4, -45, 3, 9, 207, 1089, promptoSpriteImages, "winLeft", 2, "right");
            setCurFrame();
        };
    }

    if (name === "Gladio") {
        return new Gladio();
    }
    else if (name === "Ignis") {
        return new Ignis();
    }
    else if (name === "Noctis") {
        return new Noctis();
    }
    else {
        return new Prompto();
    }
}

function setCurFrame(){
    if(direction === "left") {
        curFrameX = 0;
    }
    else {
        curFrameX = columns - 1;
    }
    curFrameY = 0;

    srcX = curFrameX * width;
    srcY = curFrameY * height;
}
function animateAction(ctx, canWidth, canHeight){
    // spriteImage.onload = function(){
        function updateFrameLeft(){
            if((curFrameY === rows - 1 && curFrameX === columns-blankFrames) ||
                (blankFrames === 0 && curFrameY === rows)){
                curFrameX = 0;
                curFrameY = 0;
            }

            srcX = curFrameX * width;
            srcY = curFrameY * height;

            curFrameX = ++curFrameX % (columns+1);
            if(curFrameX === columns){
                curFrameY++;
                curFrameX = 0;
            }
        }
        function updateFrameRight(){
            if((curFrameY === rows-1 && curFrameX === blankFrames-1) ||
                (blankFrames === 0 && curFrameY === rows)){
                curFrameX = columns-1;
                curFrameY = 0;
            }

            srcX = curFrameX * width;
            srcY = curFrameY * height;

            curFrameX = curFrameX - 1;
            if(curFrameX < 0){
                curFrameY++;
                curFrameX = columns-1;
            }
        }

        function drawImage(){
            if(rows !== 1 && columns !== 1) {
                if (direction === "left") {
                    updateFrameLeft();
                }
                else {
                    updateFrameRight();
                }
            }
            ctx.clearRect(0, 0, canWidth, canHeight);
            ctx.drawImage(spriteImage, srcX, srcY, width, height, x+moveX, y+moveY, width, height);
        }

        setInterval(function(){
            drawImage();
        }, 100);
    // };
}

export {Character, animateAction};