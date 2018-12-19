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
  parseInt($("#total1").val(""));
  parseInt($("#current1").val(""));
  parseInt($("#total2").val(""));
  parseInt($("#current2").val(""));
};

function diceRoll() {
  roll = play();
  if (roll === 1) {
    roll = 0;
    alert("Dice roll is 1, Score is 0, " + player + " turn.");
  }
};


function player1() {
  player="Player 2";
  heat2=0;
  roll=0;
  parseInt($("#current2").val(""));
  diceRoll();
  total += heat1;
  heat1 = roll;
  parseInt($("#current1").val(heat1));
  parseInt($("#total1").val(total));
  winner();
}

function player2() {
  player="Player 1";
  heat1=0;
  player1Roll=0;
  parseInt($("#current1").val(""));
  diceRoll();
  total2 += heat2;
  heat2 = roll;
  parseInt($("#current2").val(heat2));
  parseInt($("#total2").val(total2));
  winner();
}

function win(){
  if (total >=100) {
    alert("Player 1 wins Game");
    newGame()
  } else if (total2 >= 100){
    alert("Player 2 wins Game");
  }
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
    var return1 = total += heat1;
    parseInt($("#total1").val(return1));
    parseInt($("#current1").val(""));
    var return2 = total2 += heat2;
    parseInt($("#total2").val(return2));
    parseInt($("#current2").val(""));
  });
})
