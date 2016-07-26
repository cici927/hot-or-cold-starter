$(document).ready(function() {
	
	var randNum;
	var countGuess = 0;
	var checkGuess;


	function newGame() {
		randNum = Math.floor((Math.random() * 100) + 1);
		console.log(randNum);
		countGuess = 0;
		$("#count").text(countGuess);
		$("#feedback").text("Make your Guess!");
	}
	
	$(".new").click(function(event){
		event.preventDefault();
		newGame();
	});

	newGame();


	$("#guessButton").click(function(e) {
		e.preventDefault();
		var userGuess = $("#userGuess").val();
		userGuess = +userGuess;
		if(Math.floor(userGuess) == userGuess && userGuess > 0 && userGuess < 101) {
		console.log(userGuess);
	}
	else {
		alert("Try a number between 1 and 100!")
	}

	checkGuess = Math.abs(userGuess - randNum);
	howCloseToNum(checkGuess);

	$("#guessList").append(numGuess);

	countGuess++;
	$("#count").text(countGuess);
		console.log(countGuess);
	})

	function howCloseToNum(checkGuess) {

		if (checkGuess == 0) {
			numFeedback("You won! Great guess!");
			}
	 	else if (checkGuess < 5) {
			numFeedback("Your guess is heating up!");
			
	 	}
	 	else if (checkGuess < 20) {
			numFeedback("Getting kinda warm!");
			
	 	}
	 	else if (checkGuess < 30) {
			numFeedback("Not warm enough! Keep trying!");
			
	 	}
	 	else {
			numFeedback("Burr!! You're super cold!");
			
	 	}

	 }

	 function numFeedback(feedback) {
	 	$("#feedback").text(feedback);
	 }

});