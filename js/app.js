
$(document).ready(function(){
 
//declare variables
var randNum ;
var countGuess = 0; 
var checkGuess;


//newGame function

function newGame () {
	randNum = Math.floor(Math.random() * 101); 
	console.log(randNum);
	countGuess = 0;
	$("#count").text(countGuess);
	$("#feedback").text("Make your Guess!")
}

$(".new").click(function(event){
	event.preventDefault();
	newGame();
});

newGame();
	

//Guess clickhandler
$(".button").click(function(e) {
	e.preventDefault()
	var numGuess = $(".text").val();
	numGuess = +numGuess; 
	if(Math.floor(numGuess) == numGuess && numGuess > 0 && numGuess < 101) {
		console.log(numGuess);
	}
	else {
		alert("Try a number between 1 and 100!")
	}
	//Find the absolute value difference between our numGuess and RandNum
	
	checkGuess = Math.abs(numGuess - randNum);
	howCloseToNum(checkGuess);
	
	$('#guessList').append(numGuess);


	
		
		
		countGuess++;
		$('#count').text(countGuess);
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