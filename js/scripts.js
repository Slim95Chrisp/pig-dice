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
  playerRoll = roll()
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
