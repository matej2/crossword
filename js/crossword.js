// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			{
				clue: "First and last letter of greek alphabet",
				answer: "alpha omega",
				position: 1,
				orientation: "across",
				startx: 1,
				starty: 3
			},
			 {
				clue: "Not a one ___ motor, but a three ___ motor",
				answer: "phase",
				position: 3,
				orientation: "down",
				startx: 5,
				starty: 1
			},
			{
				clue: "Someone who finds financing for and supervises the making and presentation of a show",
				answer: "Producer",
				position: 5,
				orientation: "across",
				startx: 5,
				starty: 1
			},
			{
				clue: "The speeds of engines without and accelaration",
				answer: "idle speeds",
				position: 8,
				orientation: "down",
				startx: 2,
				starty: 1
			},
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
