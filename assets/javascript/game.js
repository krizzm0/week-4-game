
var player = {
	name: undefined,
	hp: 0,
	attackPWR: 0,
	attackINCR: 0,
	counterPWR: 0,
	html: undefined
};

var enemy = {
	name: undefined,
	hp: 0,
	attackPWR: 0,
	attackINCR: 0,
	counterPWR: 0,
	html: undefined
};

var enemyChosen = false;
var yodaHTML;
var vadarHTML;
var lukeHTML;
var darthHTML;

// When HTML is completely loaded, run the follow JavaScript code:
$(document).ready(function() {

	$("#yoda").on("click", function() {
		if (player.name === undefined) {
			$("#yoda").removeClass("hoverGlowGreen");
			$("#yoda .HP").addClass("userHP");
			yodaHTML = $("#yoda")[0].outerHTML;
			player.html = yodaHTML;
			player.name = "Master Yoda";
			player.hp = 120;
			player.attackPWR = 75;
			player.attackINCR = 10;
			$("#yoda").addClass("chosenUserPick").removeClass("notChosen");
			$(".notChosen").removeClass("hoverGlowGreen").addClass("hoverGlowRed");
			$(".fightSection").append(player.html);
			$("h2").first().removeClass("greenTextGlow").addClass("redTextGlow").text("Select Your Enemy");
		} else if (player.name !== "Master Yoda" && enemyChosen === false) {
			enemyChosen = true;
			$("#yoda").removeClass("hoverGlowRed");
			$("#yoda .HP").addClass("enemyHP");
			yodaHTML = $("#yoda")[0].outerHTML;
			enemy.html = yodaHTML;
			enemy.name = "Master Yoda";
			enemy.hp = 120;
			enemy.counterPWR = 50;
			$("#initialHTML").hide();
			$("#fightHTML").removeClass("invisible").addClass("visible");
			$(".fightSection").append("<img src='assets/images/attack.png' id='attackSaber'>");
			$(".fightSection").append(enemy.html);
		}
	});

	$("#vadar").on("click", function() {
		if (player.name === undefined) {
			$("#vadar").removeClass("hoverGlowGreen");
			$("#vadar .HP").addClass("userHP");
			vadarHTML = $("#vadar")[0].outerHTML;
			player.html = vadarHTML;
			player.name = "Darth Vadar";
			player.hp = 180;
			player.attackPWR = 50;
			player.attackINCR = 20;
			$("#vadar").addClass("chosenUserPick userHP").removeClass("notChosen");
			$(".notChosen").removeClass("hoverGlowGreen").addClass("hoverGlowRed");
			$(".fightSection").append(player.html);
			$("h2").first().removeClass("greenTextGlow").addClass("redTextGlow").text("Select Your Enemy");
		} else if (player.name !== "Darth Vadar" && enemyChosen === false) {
			enemyChosen = true;
			$("#vadar").removeClass("hoverGlowRed");
			$("#vadar .HP").addClass("enemyHP");
			vadarHTML = $("#vadar")[0].outerHTML;
			enemy.html = vadarHTML;
			enemy.name = "Darth Vadar";
			enemy.hp = 180;
			enemy.counterPWR = 60;
			$("#initialHTML").hide();
			$("#fightHTML").removeClass("invisible").addClass("visible");
			$(".fightSection").append("<img src='assets/images/attack.png' id='attackSaber'>");
			$(".fightSection").append(enemy.html);
		}
	});

	$("#luke").on("click", function() {
		if (player.name === undefined) {
			$("#luke").removeClass("hoverGlowGreen");
			$("#luke .HP").addClass("userHP");
			lukeHTML = $("#luke")[0].outerHTML;
			player.html = lukeHTML;
			player.name = "Luke Skywalker";
			player.hp = 150;
			player.attackPWR = 0;
			player.attackINCR = 0;
			$("#luke").addClass("chosenUserPick userHP").removeClass("notChosen");
			$(".notChosen").removeClass("hoverGlowGreen").addClass("hoverGlowRed");
			$(".fightSection").append(player.html);
			$("h2").first().removeClass("greenTextGlow").addClass("redTextGlow").text("Select Your Enemy");
		} else if (player.name !== "Luke Skywalker" && enemyChosen === false) {
			enemyChosen = true;
			$("#luke").removeClass("hoverGlowRed");
			$("#luke .HP").addClass("enemyHP");
			lukeHTML = $("#luke")[0].outerHTML;
			enemy.html = lukeHTML;
			enemy.name = "Luke Skywalker";
			enemy.hp = 150;
			enemy.counterPWR = 0;
			$("#initialHTML").hide();
			$("#fightHTML").removeClass("invisible").addClass("visible");
			$(".fightSection").append("<img src='assets/images/attack.png' id='attackSaber'>");
			$(".fightSection").append(enemy.html);
		}
	});

	$("#darth").on("click", function() {
		if (player.name === undefined) {
			$("#darth").removeClass("hoverGlowGreen");
			$("#darth .HP").addClass("userHP");
			darthHTML = $("#darth")[0].outerHTML;
			player.html = darthHTML;
			player.name = "Darth Maul";
			player.hp = 130;
			player.attackPWR = 0;
			player.attackINCR = 0;
			$("#darth").addClass("chosenUserPick userHP").removeClass("notChosen");
			$(".notChosen").removeClass("hoverGlowGreen").addClass("hoverGlowRed");
			$(".fightSection").append(player.html);
			$("h2").first().removeClass("greenTextGlow").addClass("redTextGlow").text("Select Your Enemy");
		} else if (player.name !== "Darth Maul" && enemyChosen === false) {
			enemyChosen = true;
			$("#darth").removeClass("hoverGlowRed");
			$("#darth .HP").addClass("enemyHP");
			darthHTML = $("#darth")[0].outerHTML;
			enemy.html = darthHTML;
			enemy.name = "Darth Maul";
			enemy.hp = 130;
			enemy.counterPWR = 0;
			$("#initialHTML").hide();
			$("#fightHTML").removeClass("invisible").addClass("visible");
			$(".fightSection").append("<img src='assets/images/attack.png' id='attackSaber'>");
			$(".fightSection").append(enemy.html);
		}
	});

$("button").on("click", function() {
	$("#messageBox").html("You attacked " + enemy.name + " with " + player.attackPWR + " damage<br>");
	$("#messageBox").append(enemy.name + " counters with " + enemy.counterPWR + " damage");
	enemy.hp = enemy.hp - player.attackPWR;
	player.hp = player.hp - enemy.counterPWR;
	player.attackPWR = player.attackPWR + player.attackINCR;
	$(".userHP").html(player.hp + "HP");
	$(".enemyHP").html(enemy.hp + "HP");
});

}); // End document.ready