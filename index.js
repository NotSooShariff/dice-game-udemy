function getRandomNumber(){
    var DiceValue = Math.floor((Math.random()*6) + 1);
    console.log("Got Number " + DiceValue)
    return DiceValue;
}

var firstRoll = getRandomNumber();
var secondRoll = getRandomNumber();

if(firstRoll>secondRoll){
    document.getElementById("Refresh").innerHTML = "Player 1 Wins! 🥂";
} else if(secondRoll>firstRoll){
    document.getElementById("Refresh").innerHTML = "Player 2 Wins! 🥂";
} else{
    document.getElementById("Refresh").innerHTML = "Its a draw! Refresh the page again 🔃";
}

if(firstRoll == 2){
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
} else if(firstRoll == 3){
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
} else if(firstRoll == 4){
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
} else if(firstRoll == 5){
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
} else if(firstRoll == 6){
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

if(secondRoll == 1){
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
} else if(secondRoll == 3){
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
} else if(secondRoll == 4){
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
} else if(secondRoll == 5){
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
} else if(secondRoll == 6){
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

