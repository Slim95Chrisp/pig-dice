// Business Logic
function play() {
  return Math.floor(6*Math.random())+1
};
var playerRoll = 0;
var playerRoll1 = 0;
var player;
var total = 0;
var myTurn1 = 0;
var myTurn2 = 0;
var player1Total = 0;
var player2Total= 0;

function rollNumber() {
  playerRoll = play();
  if (playerRoll === 1) {
    playerRoll = 0;
    alert("Rolled 1 your score is 0, " + player + " turn.");
  }
};

function newGame() {
  playerRoll = 0;
  total = 0;
  player1Total = 0;
  player2Total = 0;
  myTurn1 = 0;
  myTurn2 = 0;
  $("#total1").val("");
  $("#current1").val("");
  $("#total2").val("");
  $("#current2").val("");
}
function winner(){
  if (total >=100) {
    alert("player1 won, new game");
    newGame()
  } else if (player2Total >= 100){
    alert("player 2 won, new game");
  }
}

// User Interface
$(document).ready(function(){
  $("#newGame").click(function(){
    newGame();
  });
  $("#player1").click(function player1(){
    player="Player 2";
    myturn2=0;
    playerRoll=0;
    $("#current2").val("");
    rollNumber();
    total += myTurn1;
    myTurn1 = playerRoll;
    $("#current1").val(myTurn1);
    $("#total1").val(total);
    winner();
  });
  $("#player2").click(function player2(){
    player="Player 1";
    myTurn1=0;
    playerRoll=0;
    $("#current1").val("");
    rollNumber();
    player2Total += myTurn2;
    myTurn2 = playerRoll;
    $("#current2").val(myTurn2);
    $("#total2").val(player2total);
    winner();
  });
  $("#hold").click(function(){
    var player1result = total += myTurn1;
    $("#total1").val(player1result);
    $("#current1").val("");
    var player2result = player2Total += myTurn2;
    $("#total2").val(player2result);
    $("#current2").val("");
  });
})
