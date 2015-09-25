var ready;
ready = function() {

 function disableDropBtn() {
 	for (var i = 1; i <= 7 ; i++) {
    	$('#col'+ i +'_btn').addClass('disabled');
	}
 }
	
 function checkDropBtn() {
 	for (var i = 1; i <= 7 ; i++) {
    	if ($('#col'+ i +'_row1').hasClass("ui red circular label") || $('#col'+ i +'_row1').hasClass("ui yellow circular label")) {
 	 		$('#col'+ i +'_btn').addClass('disabled');
   		}
	}
 }

 function checkWinner() {
 	
 	// check vertical winner
 	for (var y = 1; y <= 7; y++) { 
 		for (var x = 6; x >= 4; x--) { 
 			if ($('#col'+ y +'_row'+ x).hasClass("ui yellow circular label") 
 				 && $('#col'+ y +'_row'+ Number(x-1)).hasClass("ui yellow circular label")
 				  && $('#col'+ y +'_row'+ Number(x-2)).hasClass("ui yellow circular label")
 				   && $('#col'+ y +'_row'+ Number(x-3)).hasClass("ui yellow circular label")) {
 	 				$('.ui.teal.compact.message').hide();
 	 				$('.ui.center.aligned.icon.header').hide();
 	 				disableDropBtn() // ui center aligned icon header
 	 				$('#winner').replaceWith("<h1><strong>Player 1 Wins!</strong></h1>");
   			}
   			if ($('#col'+ y +'_row'+ x).hasClass("ui red circular label") 
	 				 && $('#col'+ y +'_row'+ Number(x-1)).hasClass("ui red circular label")
	 				  && $('#col'+ y +'_row'+ Number(x-2)).hasClass("ui red circular label")
	 				   && $('#col'+ y +'_row'+ Number(x-3)).hasClass("ui red circular label")) {
	 	 				$('.ui.teal.compact.message').hide();
	 	 				$('.ui.center.aligned.icon.header').hide();
	 	 				disableDropBtn()
	 	 				$('#winner').replaceWith("<h1><strong>Player 2 Wins!</strong></h1>");
   			}
 		}
 	}

 	// check horizontal winner
 	for (var x = 6; x >= 4; x--) { 
 		for (var y = 1; y <= 4; y++) {
 			if ($('#col'+ y +'_row'+ x).hasClass("ui yellow circular label") 
 				 && $('#col'+ Number(y+1) +'_row'+ x).hasClass("ui yellow circular label")
 				  && $('#col'+ Number(y+2) +'_row'+ x).hasClass("ui yellow circular label")
 				   && $('#col'+ Number(y+3) +'_row'+ x).hasClass("ui yellow circular label")) {
 					$('.ui.teal.compact.message').hide();
 	 				$('.ui.center.aligned.icon.header').hide();
 	 				disableDropBtn() // ui center aligned icon header
 	 				$('#winner').replaceWith("<h1><strong>Player 1 Wins!</strong></h1>");
 			}
 			if ($('#col'+ y +'_row'+ x).hasClass("ui red circular label") 
 				 && $('#col'+ Number(y+1) +'_row'+ x).hasClass("ui red circular label")
 				  && $('#col'+ Number(y+2) +'_row'+ x).hasClass("ui red circular label")
 				   && $('#col'+ Number(y+3) +'_row'+ x).hasClass("ui red circular label")) {
 					$('.ui.teal.compact.message').hide();
 	 				$('.ui.center.aligned.icon.header').hide();
 	 				disableDropBtn() // ui center aligned icon header
 	 				$('#winner').replaceWith("<h1><strong>Player 2 Wins!</strong></h1>");
 			}
 		}
 	}

 	// check diagonal (to left from bottom left) winner
 	for (var y = 7; y >= 4; y--) { 	
 		for (var x = 6; x >= 4; x--) {
 			if ($('#col'+ y +'_row'+ x).hasClass("ui yellow circular label") 
 				 && $('#col'+ Number(y-1) +'_row'+ Number(x-1)).hasClass("ui yellow circular label")
 				  && $('#col'+ Number(y-2) +'_row'+ Number(x-2)).hasClass("ui yellow circular label")
 				   && $('#col'+ Number(y-3) +'_row'+ Number(x-3)).hasClass("ui yellow circular label")) {
 					$('.ui.teal.compact.message').hide();
 	 				$('.ui.center.aligned.icon.header').hide();
 	 				disableDropBtn() // ui center aligned icon header
 	 				$('#winner').replaceWith("<h1><strong>Player 1 Wins!</strong></h1>");
 			}
 			if ($('#col'+ y +'_row'+ x).hasClass("ui red circular label") 
 				 && $('#col'+ Number(y-1) +'_row'+ Number(x-1)).hasClass("ui red circular label")
 				  && $('#col'+ Number(y-2) +'_row'+ Number(x-2)).hasClass("ui red circular label")
 				   && $('#col'+ Number(y-3) +'_row'+ Number(x-3)).hasClass("ui red circular label")) {
 					$('.ui.teal.compact.message').hide();
 	 				$('.ui.center.aligned.icon.header').hide();
 	 				disableDropBtn() // ui center aligned icon header
 	 				$('#winner').replaceWith("<h1><strong>Player 2 Wins!</strong></h1>");
 			}
 		}
 	}

 	//check diagonal(to right from bottom right) winner
 	for (var y = 1; y <= 4; y++) { 	
 		for (var x = 6; x >= 4; x--) {
 			if ($('#col'+ y +'_row'+ x).hasClass("ui yellow circular label") 
 				 && $('#col'+ Number(y+1) +'_row'+ Number(x-1)).hasClass("ui yellow circular label")
 				  && $('#col'+ Number(y+2) +'_row'+ Number(x-2)).hasClass("ui yellow circular label")
 				   && $('#col'+ Number(y+3) +'_row'+ Number(x-3)).hasClass("ui yellow circular label")) {
 					$('.ui.teal.compact.message').hide();
 					$('.ui.center.aligned.icon.header').hide();
 	 				disableDropBtn() // ui center aligned icon header
 					$('#winner').replaceWith("<h1><strong>Player 1 Wins!</strong></h1>");
 			}
 			if ($('#col'+ y +'_row'+ x).hasClass("ui red circular label") 
 				 && $('#col'+ Number(y+1) +'_row'+ Number(x-1)).hasClass("ui red circular label")
 				  && $('#col'+ Number(y+2) +'_row'+ Number(x-2)).hasClass("ui red circular label")
 				   && $('#col'+ Number(y+3) +'_row'+ Number(x-3)).hasClass("ui red circular label")) {
 					$('.ui.teal.compact.message').hide();
 					$('.ui.center.aligned.icon.header').hide();
 	 				disableDropBtn() // ui center aligned icon header
 	 				$('#winner').replaceWith("<h1><strong>Player 2 Wins!</strong></h1>");
 			}
 		}
 	}
 }
 
 checkDropBtn();
 checkWinner();
};

$(document).ready(ready);
$(document).on('page:load', ready);