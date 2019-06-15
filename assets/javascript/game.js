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
  // $('#totalNum').text(userTotal);

   
  function reset() {
    random = Math.floor(Math.random() * 101 + 19);
    console.log(random);
    $('#randomNumber').text(random);
    $('#totalNum').text(0);
    $('#dravenNum').text('?');
    $('#jinxNum').text('?');
    $('#mpenguNum').text('?'); 
    $('#ziggsNum').text('?');
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
    $('#dravenNum').text(num1);
    $('#totalNum').text(userTotal + num1);
    console.log('userTotal:',userTotal)
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
    $('#jinxNum').text(num2);
    $('#totalNum').text(userTotal + num2);
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
    $('#mpenguNum').text(num3);
    $('#totalNum').text(userTotal + num3);
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
    $('#totalNum').text(userTotal + num4);
    $('#ziggsNum').text(num4);
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

