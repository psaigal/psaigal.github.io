function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var randomNumber={
    luckyNumber:getRandomInt(1, 10)
}

var Guesses={
    guessCount:5,
}

var winLose={
    win:"YOU FOUND THE TREASURE!!!",
    lose:"TRY AGAIN!"
}




var instructionsClicked = function(choice){
    if (choice==1){
        return document.getElementById("instructionsclick").innerHTML = ("There are ten treasure chests below. Inside one of these chests lies a treasure mine! You have five guesses to figure out which treasure chest contains the hidden treasure. Keep track of your guesses at the top. Good luck!");
    }
}


var buttonClicked = function(choice){
    var specialNumber = randomNumber.luckyNumber;
    if (choice == specialNumber){
        alert(winLose.win);
        return document.getElementById("winner").innerHTML = ("<img src='winner.png'/>");
    }
    else {
        Guesses.guessCount-=1;
        if (Guesses.guessCount>0){
            // document.getElementById(choice).style.backgroundColor =
            // "red";
        alert(winLose.lose);
        document.getElementById("countdown").innerHTML = ("Guesses Left: " + Guesses.guessCount);
        }
        if (Guesses.guessCount==0){
         document.getElementById("countdown").innerHTML = ("Guesses Left: " + Guesses.guessCount);
         return document.getElementById("gameover").innerHTML = ("<img src='gameover.png'/>");
        }
    }
}

var score = document.getElementById("countdown").innerHTML = ("Guesses Left: " + Guesses.guessCount);














// // 2 objects with properties
// // 2 functions that interact with those objects by adding or modifying the object's properties


