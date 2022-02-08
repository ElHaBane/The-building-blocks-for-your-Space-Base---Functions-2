function startCraps(){
    // generates random number for dice
    var die1 = Math.ceil(Math.random()*6);
    var die2 = Math.ceil(Math.random()*6);

    // adds the sum of the dice
    var sum = die1+die2;


    // displays both dice results and the sum
    document.getElementById("die1Res").innerHTML = "Die 1 = " + die1;
    document.getElementById("die2Res").innerHTML = "Die 2 = " + die2;
    document.getElementById("sumRes").innerHTML = "Sum = " + sum;

    // Win conditions
    if (sum == 7 || sum == 11){ document.getElementById("crapsRes").innerHTML = "CRAPS - you lose";}
    else if (die1== die2 && die1%2 == 0){document.getElementById("crapsRes").innerHTML = "DOUBLES - you win";}
    else{document.getElementById("crapsRes").innerHTML = "TIE, please play again"}

    return 0;
}