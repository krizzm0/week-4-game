var playerCharacter;
var enemyCharacter;
var enemyChosen = false;
var yoda;
var vadar;
var luke;
var darth;

// When HTML is completely loaded, run the follow JavaScript code:
$(document).ready(function() {

	$("#yoda").on("click", function() {
		if (playerCharacter === undefined) {
			$("#yoda").removeClass("hoverGlowGreen");
			yoda = $("#yoda")[0].outerHTML;
			playerCharacter = yoda;
			$("#yoda").addClass("chosenUserPick").removeClass("notChosen");
			$(".notChosen").removeClass("hoverGlowGreen").addClass("hoverGlowRed");
			$(".fightSection").append(playerCharacter);
			$("h2").first().removeClass("greenTextGlow").addClass("redTextGlow").text("Select Your Enemy");
		} else if (playerCharacter !== yoda && enemyChosen === false) {
			enemyChosen = true;
			$("#yoda").removeClass("hoverGlowRed");
			yoda = $("#yoda")[0].outerHTML;
			enemyCharacter = yoda;
			$("#initialHTML").hide();
			$("#fightHTML").removeClass("invisible").addClass("visible");
			$(".fightSection").append(enemyCharacter);
		}
	});

	$("#vadar").on("click", function() {
		if (playerCharacter === undefined) {
			$("#vadar").removeClass("hoverGlowGreen");
			vadar = $("#vadar")[0].outerHTML;
			playerCharacter = vadar;
			$("#vadar").addClass("chosenUserPick").removeClass("notChosen");
			$(".notChosen").removeClass("hoverGlowGreen").addClass("hoverGlowRed");
			$(".fightSection").append(playerCharacter);
			$("h2").first().removeClass("greenTextGlow").addClass("redTextGlow").text("Select Your Enemy");
		} else if (playerCharacter !== vadar && enemyChosen === false) {
			enemyChosen = true;
			$("#vadar").removeClass("hoverGlowRed");
			vadar = $("#vadar")[0].outerHTML;
			enemyCharacter = vadar;
			$("#initialHTML").hide();
			$("#fightHTML").removeClass("invisible").addClass("visible");
			$(".fightSection").append(enemyCharacter);
		}
	});

	$("#luke").on("click", function() {
		if (playerCharacter === undefined) {
			$("#luke").removeClass("hoverGlowGreen");
			luke = $("#luke")[0].outerHTML;
			playerCharacter = luke;
			$("#luke").addClass("chosenUserPick").removeClass("notChosen");
			$(".notChosen").removeClass("hoverGlowGreen").addClass("hoverGlowRed");
			$(".fightSection").append(playerCharacter);
			$("h2").first().removeClass("greenTextGlow").addClass("redTextGlow").text("Select Your Enemy");
		} else if (playerCharacter !== luke && enemyChosen === false) {
			enemyChosen = true;
			$("#luke").removeClass("hoverGlowRed");
			luke = $("#luke")[0].outerHTML;
			enemyCharacter = luke;
			$("#initialHTML").hide();
			$("#fightHTML").removeClass("invisible").addClass("visible");
			$(".fightSection").append(enemyCharacter);
		}
	});

	$("#darth").on("click", function() {
		if (playerCharacter === undefined) {
			$("#darth").removeClass("hoverGlowGreen");
			darth = $("#darth")[0].outerHTML;
			playerCharacter = darth;
			$("#darth").addClass("chosenUserPick").removeClass("notChosen");
			$(".notChosen").removeClass("hoverGlowGreen").addClass("hoverGlowRed");
			$(".fightSection").append(playerCharacter);
			$("h2").first().removeClass("greenTextGlow").addClass("redTextGlow").text("Select Your Enemy");
		} else if (playerCharacter !== darth && enemyChosen === false) {
			enemyChosen = true;
			$("#darth").removeClass("hoverGlowRed");
			darth = $("#darth")[0].outerHTML;
			enemyCharacter = darth;
			$("#initialHTML").hide();
			$("#fightHTML").removeClass("invisible").addClass("visible");
			$(".fightSection").append(enemyCharacter);
		}
	});

});