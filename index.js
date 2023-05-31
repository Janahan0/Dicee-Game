var diceImage1 = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

var randomNumber1 = Math.floor(Math.random()*6 +1);

diceImage1 = diceImage1[randomNumber1 - 1];

var image1 = document.querySelector(".img1").setAttribute("src", diceImage1);



var diceImage2 = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

var randomNumber2 = Math.floor(Math.random()*6 +1);

diceImage2 = diceImage2[randomNumber2 - 1];

var image2 = document.querySelector(".img2").setAttribute("src", diceImage2);



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerText = "It's a Draw!";
}