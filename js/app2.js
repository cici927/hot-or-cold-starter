$(document).ready(function() {
	
	var randNum;
	var countGuess = 0;
	var checkGuess;

	function newGame() {
		randNum = Math.floor((Math.random() * 100) + 1);
		console.log(randNum);
		countGuess = 0;
		$("#userGuess").val("");
		$("#count").text(countGuess);
		$("#feedback").text("Make your Guess!");
		$("#guessList").html("");
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
		$("#userGuess").val("");
		if(Math.floor(userGuess) == userGuess && userGuess > 0 && userGuess < 101) {
			checkGuess = Math.abs(userGuess - randNum);
			howCloseToNum(checkGuess);
			$("#guessList").append("<li>" + userGuess + "</li>");
			countGuess++;
			$("#count").text(countGuess);
		}
		else {
			alert("Try a number between 1 and 100!")
		}

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