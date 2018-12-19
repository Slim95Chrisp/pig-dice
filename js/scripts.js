// Business Logic
function play() {
  return Math.floor(6*Math.random())+1
};
var roll = 0, player; total = 0, heat1 = 0, heat2 = 0, total2= 0

function newGame() {
  roll = 0;
  total = 0;
  total2 = 0;
  heat1 = 0;
  heat2 = 0;
  $("#total1").val("");
  $("#current1").val("");
  $("#total2").val("");
  $("#current2").val("");
};

function diceRoll() {
  roll = play();
  if (roll === 1) {
    roll = 0;
    alert("Dice roll is 1, Score is 0, " + player + " turn.");
  }
};

function winner(){
  if (total >=100) {
    alert("Player 1 wins Game");
    newGame()
  } else if (total2 >= 100){
    alert("Player 2 wins Game");
  }
}

function player1() {
  player="Player 2";
  heat2=0;
  roll=0;
  $("#current2").val("");
  diceRoll();
  total += heat1;
  heat1 = roll;
  $("#current1").val(heat1);
  $("#total1").val(total);
  winner();
}

function player2() {
  player="Player 1";
  heat1=0;
  player1Roll=0;
  $("#current1").val("");
  diceRoll();
  total2 += heat2;
  heat2 = roll;
  $("#current2").val(heat2);
  $("#total2").val(total2);
  winner();
}

// User Interface
$(document).ready(function(){
  $("#newGame").click(function(){
    newGame();
  });

  $("#player1").click(function() {
    player1();
  });

  $("#player2").click(function () {
    player2();
  });

  $("#hold").click(function(){
    var player1result = total += heat1;
    $("#total1").val(player1result);
    $("#current1").val("");
    var player2result = total2 += heat2;
    $("#total2").val(player2result);
    $("#current2").val("");
  });
})
