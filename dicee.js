var randInt1 = Math.random();
var randInt2 = Math.random();

randInt1 *= 6;
randInt2 *= 6;

var finalInt1 = Math.floor(randInt1) + 1;
var finalInt2 = Math.floor(randInt2) + 1;

var src1 = "./images/dice"+ finalInt1.toString() + ".png";
var src2 = "./images/dice"+ finalInt2.toString() + ".png";

document.querySelector(".img1").setAttribute("src", src1);
document.querySelector(".img2").setAttribute("src", src2);

var h1 = document.querySelector("h1")
if (finalInt1 > finalInt2){
    h1.innerHTML = "Player 1 wins!";
}else if(finalInt1 < finalInt2){
    h1.innerHTML = "Player 2 wins!";
}else if(finalInt1 === finalInt2){
    h1.innerHTML = "Draw!";
}