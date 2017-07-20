var gameWon = false;

var player = {
	name: undefined,
	hp: 0,
	attackPWR: 0,
	attackINCR: 0,
	counterPWR: 0,
	html: undefined,
	isDead: false,
	killCount: 0
};

var enemy = {
	name: undefined,
	hp: 0,
	attackPWR: 0,
	attackINCR: 0,
	counterPWR: 0,
	html: undefined,
	isDead: false
};

var yoda = {
	isDead: false
};

var vadar = {
	isDead: false
};

var luke = {
	isDead: false
};

var darth = {
	isDead: false
};

var yodaHTML;
var vadarHTML;
var lukeHTML;
var darthHTML;

// When HTML is completely loaded, run the follow JavaScript code:
$(document).ready(function() {

	$("#yoda").on("click", function() {
		if (player.name === undefined) {
			$("#yoda").removeClass("hoverGlowGreen notChosen");
			$("#yoda .HP").addClass("userHP");
			yodaHTML = $("#yoda")[0].outerHTML;
			player.html = yodaHTML;
			player.name = "Master Yoda";
			player.hp = 120;
			player.attackPWR = 8;
			player.attackINCR = 8;
			$("#yoda").addClass("chosenUserPick");
			$(".notChosen").removeClass("hoverGlowGreen").addClass("hoverGlowRed");
			$(".fightSection").append(player.html);
			$("h2").first().removeClass("greenTextGlow").addClass("redTextGlow").text("Select Your Enemy");
		} else if (player.name !== "Master Yoda" && yoda.isDead === false) {
			$("#yoda").removeClass("hoverGlowRed");
			$("#yoda .HP").addClass("enemyHP");
			yodaHTML = $("#yoda")[0].outerHTML;
			enemy.html = yodaHTML;
			enemy.name = "Master Yoda";
			enemy.hp = 120;
			enemy.counterPWR = 40;
			enemy.isDead = false;
			$("#initialHTML").hide();
			// $("#fightHTML").removeClass("invisible").addClass("visible");
			$("#fightHTML").show();
			$(".fightSection").append("<img src='assets/images/attack.png' id='attackSaber'>");
			$(".fightSection").append(enemy.html);
		}
	});

	$("#vadar").on("click", function() {
		if (player.name === undefined) {
			$("#vadar").removeClass("hoverGlowGreen notChosen");
			$("#vadar .HP").addClass("userHP");
			vadarHTML = $("#vadar")[0].outerHTML;
			player.html = vadarHTML;
			player.name = "Darth Vadar";
			player.hp = 150;
			player.attackPWR = 6;
			player.attackINCR = 6;
			$("#vadar").addClass("chosenUserPick");
			$(".notChosen").removeClass("hoverGlowGreen").addClass("hoverGlowRed");
			$(".fightSection").append(player.html);
			$("h2").first().removeClass("greenTextGlow").addClass("redTextGlow").text("Select Your Enemy");
		} else if (player.name !== "Darth Vadar" && vadar.isDead === false) {
			$("#vadar").removeClass("hoverGlowRed");
			$("#vadar .HP").addClass("enemyHP");
			vadarHTML = $("#vadar")[0].outerHTML;
			enemy.html = vadarHTML;
			enemy.name = "Darth Vadar";
			enemy.hp = 190;
			enemy.counterPWR = 20;
			enemy.isDead = false;
			$("#initialHTML").hide();
			// $("#fightHTML").removeClass("invisible").addClass("visible");
			$("#fightHTML").show();
			$(".fightSection").append("<img src='assets/images/attack.png' id='attackSaber'>");
			$(".fightSection").append(enemy.html);
		}
	});

	$("#luke").on("click", function() {
		if (player.name === undefined) {
			$("#luke").removeClass("hoverGlowGreen notChosen");
			$("#luke .HP").addClass("userHP");
			lukeHTML = $("#luke")[0].outerHTML;
			player.html = lukeHTML;
			player.name = "Luke Skywalker";
			player.hp = 180;
			player.attackPWR = 11;
			player.attackINCR = 11;
			$("#luke").addClass("chosenUserPick");
			$(".notChosen").removeClass("hoverGlowGreen").addClass("hoverGlowRed");
			$(".fightSection").append(player.html);
			$("h2").first().removeClass("greenTextGlow").addClass("redTextGlow").text("Select Your Enemy");
		} else if (player.name !== "Luke Skywalker" && luke.isDead === false) {
			$("#luke").removeClass("hoverGlowRed");
			$("#luke .HP").addClass("enemyHP");
			lukeHTML = $("#luke")[0].outerHTML;
			enemy.html = lukeHTML;
			enemy.name = "Luke Skywalker";
			enemy.hp = 180;
			enemy.counterPWR = 5;
			enemy.isDead = false;
			$("#initialHTML").hide();
			// $("#fightHTML").removeClass("invisible").addClass("visible");
			$("#fightHTML").show();
			$(".fightSection").append("<img src='assets/images/attack.png' id='attackSaber'>");
			$(".fightSection").append(enemy.html);
		}
	});

	$("#darth").on("click", function() {
		if (player.name === undefined) {
			$("#darth").removeClass("hoverGlowGreen notChosen");
			$("#darth .HP").addClass("userHP");
			darthHTML = $("#darth")[0].outerHTML;
			player.html = darthHTML;
			player.name = "Darth Maul";
			player.hp = 180;
			player.attackPWR = 4;
			player.attackINCR = 4;
			$("#darth").addClass("chosenUserPick");
			$(".notChosen").removeClass("hoverGlowGreen").addClass("hoverGlowRed");
			$(".fightSection").append(player.html);
			$("h2").first().removeClass("greenTextGlow").addClass("redTextGlow").text("Select Your Enemy");
		} else if (player.name !== "Darth Maul" && darth.isDead === false) {
			$("#darth").removeClass("hoverGlowRed");
			$("#darth .HP").addClass("enemyHP");
			darthHTML = $("#darth")[0].outerHTML;
			enemy.html = darthHTML;
			enemy.name = "Darth Maul";
			enemy.hp = 180;
			enemy.counterPWR = 25;
			enemy.isDead = false;
			$("#initialHTML").hide();
			// $("#fightHTML").removeClass("invisible").addClass("visible");
			$("#fightHTML").show();
			$(".fightSection").append("<img src='assets/images/attack.png' id='attackSaber'>");
			$(".fightSection").append(enemy.html);
		}
	});

	$("#attackBTN").on("click", function() {
		if (enemy.isDead === false) {
			$("#messageBox").html("You attacked " + enemy.name + " with " + player.attackPWR + " damage<br>");
			enemy.hp = enemy.hp - player.attackPWR;
		}

		if (enemy.hp <= 0) {
			$(".enemyHP").html("0HP");
			$("#messageBox").append("You have defeated " + enemy.name + "!");
			enemy.isDead = true;
		} else {
			$(".enemyHP").html(enemy.hp + "HP");
		}

		if (enemy.isDead === false) {

			$("#messageBox").append(enemy.name + " counters with " + enemy.counterPWR + " damage");
			player.hp = player.hp - enemy.counterPWR;
			if (player.hp <= 0) {
				$(".userHP").html("0HP");
				$("#messageBox").append("<br>" + enemy.name + " has defeated you!");
				gameOver();
			} else {
				$(".userHP").html(player.hp + "HP");
			}
		}

		player.attackPWR = player.attackPWR + player.attackINCR;
		
		if (enemy.isDead === true) {
		$("#attackBTN").hide();
		$("#nextBTN").show();
		}
	});

	$("#nextBTN").on("click", function() {
		enemyKilled();
		// $("#fightHTML").removeClass("visible").addClass("invisible");
		if (gameWon === true) {
			$("#fightHTML").hide();
			$("#initialHTML h2").html("<h2>You Won!</h2>");
			$("#initialHTML .characterSelection div").remove();
			$("#initialHTML").show();
		} else {
			$("#fightHTML").hide();
			$("#messageBox").html(" ");
			$(".fightSection div:nth-child(3)").remove();
			$(".fightSection #attackSaber").remove();
			$("#initialHTML").show();
			$("#nextBTN").hide();
			$("#attackBTN").show();
		}
	});


}); // End document.ready


function enemyKilled() {
	player.killCount += 1;
	if (enemy.name === "Master Yoda") {
		yoda.isDead = true;
	} else if (enemy.name === "Darth Vadar") {
		vadar.isDead = true;
	} else if (enemy.name === "Luke Skywalker") {
		luke.isDead = true;
	} else if (enemy.name === "Darth Maul") {
		darth.isDead = true;
	}

	if (player.killCount === 3) {
		gameWon = true;
	}
}

function gameOver() {
	$("#attackBTN").hide();
	$("#resetBTN").show().on("click", function() {
		location.reload();
	});
}

function gameWin() {

}