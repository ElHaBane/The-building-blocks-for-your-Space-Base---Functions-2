// Notifies user on the console that blastoff has started
function Blastoff(){
    console.log("blastoff function started...");
}

function countDown(){
    // Time Countdown starts at
    var currTime = 50;

    // Displays count down
    document.getElementById("blastOffText").innerHTML = currTime;

    // updaates the current time variable
    currTime = currTime - 5;

    setTimeout(function(){
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5;
    }, 5000);

    setTimeout(function(){
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5;
    }, 10000);

    setTimeout(function(){
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5;
    }, 15000);

    setTimeout(function(){
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5;
    }, 20000);

    setTimeout(function(){
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5;
    }, 25000);

    setTimeout(function(){
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5;
    }, 30000);

    setTimeout(function(){
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5;
    }, 35000);

    setTimeout(function(){
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5;
    }, 40000);

    setTimeout(function(){
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5;
    }, 45000);

    setTimeout(function(){
        document.getElementById("blastOffText").innerHTML = "blastoff!!";
        currTime = currTime - 5;
    }, 50000);
}