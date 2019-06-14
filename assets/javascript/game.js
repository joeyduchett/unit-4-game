  $(document).ready(function() {
  let random = Math.floor(Math.random() * 101 + 19);

  $('#randomNumber').text(random);


  let num1 = Math.floor(Math.random() * 11 + 1);
  let num2 = Math.floor(Math.random() * 11 + 1);
  let num3 = Math.floor(Math.random() * 11 + 1);
  let num4 = Math.floor(Math.random() * 11 + 1);


  let userTotal = 0;
  let wins = 0;
  let losses = 0;

 
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

   
  function reset() {
    random = Math.floor(Math.random() * 101 + 19);
    console.log(random);
    $('#randomNumber').text(random);
    num1 = Math.floor(Math.random() * 11 + 1);
    num2 = Math.floor(Math.random() * 11 + 1);
    num3 = Math.floor(Math.random() * 11 + 1);
    num4 = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    $('#finalTotal').text(userTotal);

  }


  function winner() {
    alert("Great Job!");
    wins++;
    $("#numberWins").text(wins);
    reset();
  }

  function loser() {
    alert("Try again!");
    losses++;
    $('#numberLosses').text(losses);
    reset();
  }


  $('#draven').on('click', function () {
    userTotal = userTotal + num1;
    console.log("newUserTotal= " + userTotal);
   
    $('#finalTotal').text(userTotal);
    
    if (userTotal == random) {
      winner();
    }
    else if (userTotal > random) {
      loser();
    }
  });

  $('#jinx').on('click', function () {
    userTotal = userTotal + num2;
    console.log("newUserTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    
    if (userTotal == random) {
      winner();
    }
    else if (userTotal > random) {
      loser();
    }
  });

  $('#mpengu').on('click', function () {
    userTotal = userTotal + num3;
    console.log("newUserTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    
    if (userTotal == random) {
      winner();
    }
    else if (userTotal > random) {
      loser();
    }
  });

  $('#ziggs').on('click', function () {
    userTotal = userTotal + num4;
    console.log("newUserTotal= " + userTotal);
    $('#finalTotal').text(userTotal);

    if (userTotal == random) {
      winner();
    }
    else if (userTotal > random) {
      loser();
    }
  });
});

