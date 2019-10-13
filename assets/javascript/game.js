$(document).ready(function(){
    let random=Math.floor(Math.random()*101+19)

$('#compNumber').text(random);

let num1= Math.floor(Math.random()*11+1)
let num2= Math.floor(Math.random()*11+1)
let num3= Math.floor(Math.random()*11+1)
let num4= Math.floor(Math.random()*11+1)

let userScore=0;
let wins= 0;
let losses=0;

$('#numberWin').text(wins);
$('#numberLost').text(losses);

function reset(){
    random=Math.floor(Math.random()*101+19);
    console.log(random)
    $('#compNumber').text(random);
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    userScore= 0;
    $('#finalScore').text(userScore);
};

function winner(){
    alert("Winner!");
        wins++;
        $('#numberWin').text(wins);
        reset();
};

function loser(){
    alert("You Lost!");
    losses++;
    $('#numberLost').text(losses);
    reset();
};

$('#gemOne').on('click', function(){
    userScore = userScore + num1;
    console.log("New userScore=" + userScore);
    $('#finalScore').text(userScore);

    if (userScore == random){
        winner();
    }
    else if (userScore > random){
        loser();
    }
});

$('#gemTwo').on('click', function(){
    userScore = userScore + num2;
    console.log("New userScore=" + userScore);
    $('#finalScore').text(userScore);

    if (userScore == random){
        winner();
    }
    else if (userScore > random){
        loser();
    }
});

$('#gemThree').on('click', function(){
    userScore = userScore + num3;
    console.log("New userScore=" + userScore);
    $('#finalScore').text(userScore);

    if (userScore == random){
        winner();
    }
    else if (userScore > random){
        loser();
    }
});

$('#gemFour').on('click', function(){
    userScore = userScore + num4;
    console.log("New userScore=" + userScore);
    $('#finalScore').text(userScore);

    if (userScore == random){
        winner();
    }
    else if (userScore > random){
        loser();
    }
});







});