// Player Object
var player = {
	name: undefined,
	totalHP: 0,
	hp: 0,
	attackPWR: 0,
	attackINCR: 0,
	counterPWR: 0,
	html: undefined,
	isDead: false,
	killCount: 0
};

// Enemy Object
var enemy = {
	name: undefined,
	totalHP: 0,
	hp: 0,
	attackPWR: 0,
	attackINCR: 0,
	counterPWR: 0,
	html: undefined,
	isDead: false
};

// Character Object
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

var gameWon = false;

// Functions

// Keeps Track of Enemies Killed and Total Kill Count to Know When to End Game
function enemyKilled() {
	player.killCount += 1;
	if (enemy.name === "Master Yoda") {
		yoda.isDead = true;
		// Adds death icon and low opacity to character img
		$("#yoda img:nth-child(2)").removeClass("invisible");
		$("#yoda img:nth-child(1)").addClass("dead");
	} else if (enemy.name === "Darth Vadar") {
		vadar.isDead = true;
		$("#vadar img:nth-child(2)").removeClass("invisible");
		$("#vadar img:nth-child(1)").addClass("dead");
	} else if (enemy.name === "Luke Skywalker") {
		luke.isDead = true;
		$("#luke img:nth-child(2)").removeClass("invisible");
		$("#luke img:nth-child(1)").addClass("dead");
	} else if (enemy.name === "Darth Maul") {
		darth.isDead = true;
		$("#darth img:nth-child(2)").removeClass("invisible");
		$("#darth img:nth-child(1)").addClass("dead");
	}

	if (player.killCount === 3) {
		gameWon = true;
	}
}

// When Game is Lost, Reset Button Shows Up and Reloads Page If Clicked
function gameOver() {
	$("#attackBTN").hide();
	$("#resetBTN").show().on("click", function() {
		location.reload();
	});
}

// When HTML is completely loaded, run the follow JavaScript code:
$(document).ready(function() {
	// When Yoda is clicked on...
	$("#yoda").on("click", function() {
		// If User wants to be Yoda...
		if (player.name === undefined) {
			// Removes mouse hover effect and notChosen class (see line 86)
			$("#yoda").removeClass("hoverGlowGreen notChosen");
			// Adds userHP class to control HP display
			$("#yoda .HP").addClass("userHP");
			player.html = $("#yoda")[0].outerHTML;
			player.name = "Master Yoda";
			player.totalHP = 120;
			player.hp = 120;
			player.attackPWR = 8;
			player.attackINCR = 8;
			// This class adds a permanent green glow to character
			$("#yoda").addClass("chosenUserPick");
			// Gives all other characters red mouse hover effect
			$(".notChosen").removeClass("hoverGlowGreen").addClass("hoverGlowRed");
			// Send to fighting stage
			$(".fightSection").append(player.html);
			$("h2").first().removeClass("greenTextGlow").addClass("redTextGlow").text("Select Your Enemy");
		// If User wants Yoda as enemy...
		} else if (player.name !== "Master Yoda" && yoda.isDead === false) {
			// Remove hover effect now that Yoda is already selected
			$("#yoda").removeClass("hoverGlowRed");
			// Adds enemyHP class to control HP display
			$("#yoda .HP").addClass("enemyHP");
			enemy.html = $("#yoda")[0].outerHTML;
			enemy.name = "Master Yoda";
			enemy.totalHP = 120;
			enemy.hp = 120;
			enemy.counterPWR = 40;
			enemy.isDead = false;
			// Go to fighting stage
			$("#initialHTML").hide();
			$("#fightHTML").show();
			$(".fightSection").append("<img src='assets/images/attack.png' id='attackSaber'>");
			$(".fightSection").append(enemy.html);
		}
	});

	$("#vadar").on("click", function() {
		if (player.name === undefined) {
			$("#vadar").removeClass("hoverGlowGreen notChosen");
			$("#vadar .HP").addClass("userHP");
			player.html = $("#vadar")[0].outerHTML;
			player.name = "Darth Vadar";
			player.totalHP = 150;
			player.hp = 150;
			player.attackPWR = 6;
			player.attackINCR = 6
;			$("#vadar").addClass("chosenUserPick");
			$(".notChosen").removeClass("hoverGlowGreen").addClass("hoverGlowRed");
			$(".fightSection").append(player.html);
			$("h2").first().removeClass("greenTextGlow").addClass("redTextGlow").text("Select Your Enemy");
		} else if (player.name !== "Darth Vadar" && vadar.isDead === false) {
			$("#vadar").removeClass("hoverGlowRed");
			$("#vadar .HP").addClass("enemyHP");
			enemy.html = $("#vadar")[0].outerHTML;
			enemy.name = "Darth Vadar";
			enemy.totalHP = 190;
			enemy.hp = 190;
			enemy.counterPWR = 20;
			enemy.isDead = false;
			$("#initialHTML").hide();
			$("#fightHTML").show();
			$(".fightSection").append("<img src='assets/images/attack.png' id='attackSaber'>");
			$(".fightSection").append(enemy.html);
		}
	});

	$("#luke").on("click", function() {
		if (player.name === undefined) {
			$("#luke").removeClass("hoverGlowGreen notChosen");
			$("#luke .HP").addClass("userHP");
			player.html = $("#luke")[0].outerHTML;
			player.name = "Luke Skywalker";
			player.totalHP = 180;
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
			enemy.html = $("#luke")[0].outerHTML;
			enemy.name = "Luke Skywalker";
			enemy.totalHP = 180;
			enemy.hp = 180;
			enemy.counterPWR = 5;
			enemy.isDead = false;
			$("#initialHTML").hide();
			$("#fightHTML").show();
			$(".fightSection").append("<img src='assets/images/attack.png' id='attackSaber'>");
			$(".fightSection").append(enemy.html);
		}
	});

	$("#darth").on("click", function() {
		if (player.name === undefined) {
			$("#darth").removeClass("hoverGlowGreen notChosen");
			$("#darth .HP").addClass("userHP");
			player.html = $("#darth")[0].outerHTML;
			player.name = "Darth Maul";
			player.totalHP = 180;
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
			enemy.html = $("#darth")[0].outerHTML;
			enemy.name = "Darth Maul";
			enemy.totalHP = 180;
			enemy.hp = 180;
			enemy.counterPWR = 25;
			enemy.isDead = false;
			$("#initialHTML").hide();
			$("#fightHTML").show();
			$(".fightSection").append("<img src='assets/images/attack.png' id='attackSaber'>");
			$(".fightSection").append(enemy.html);
		}
	});

	// When the attack button is clicked...
	$("#attackBTN").on("click", function() {
		// If enemy isn't killed...
		if (enemy.isDead === false) {
			// Attack enemy and display user attack message
			$("#messageBox").html("You attacked " + enemy.name + " with " + player.attackPWR + " damage<br>");
			enemy.hp = enemy.hp - player.attackPWR;
		}

		// But if the enemy is killed from above attack...
		if (enemy.hp <= 0) {
			// Show enemy HP as 0 and display defeat message
			$(".enemyHP").css("color", "red");
			$(".enemyHP").html("0HP");
			$("#messageBox").append("You have defeated " + enemy.name + "!");
			enemy.isDead = true;

		// Else update enemy's new HP with corresponding health colors
		} else {
			if ( (enemy.hp > (0.33 * enemy.totalHP)) && (enemy.hp <= (0.66 * enemy.totalHP)) ) {
				$(".enemyHP").css("color", "orange");
			} else if ( (enemy.hp <= (0.33 * enemy.totalHP)) ) {
				$(".enemyHP").css("color", "red");
			}
			$(".enemyHP").html(enemy.hp + "HP");
		}

		// Enemy's turn to attack...
		if (enemy.isDead === false) {
			$("#messageBox").append(enemy.name + " counters with " + enemy.counterPWR + " damage");
			player.hp = player.hp - enemy.counterPWR;
			// If player is killed, game over
			if (player.hp <= 0) {
				$(".userHP").css("color", "red");
				$(".userHP").html("0HP");
				$("#messageBox").append("<br>" + enemy.name + " has defeated you!");
				gameOver();
			// If player is not killed, update player HP
			} else {
				if ( (player.hp > (0.33 * player.totalHP)) && (player.hp <= (0.66 * player.totalHP)) ) {
				$(".userHP").css("color", "orange");
				} else if ( (player.hp <= (0.33 * player.totalHP)) ) {
				$(".userHP").css("color", "red");
				}
				$(".userHP").html(player.hp + "HP");
			}
		}

		// Increase player's attack power
		player.attackPWR = player.attackPWR + player.attackINCR;
		
		// Next button displayed if enemy killed
		if (enemy.isDead === true) {
			$("#attackBTN").hide();
			$("#nextBTN").show();
		}
	});

	// Next button functionality
	$("#nextBTN").on("click", function() {
		enemyKilled();
		// If the game is won...
		if (gameWon === true) {
			$("#fightHTML").hide();
			$("#initialHTML h2").removeClass("redTextGlow").addClass("yellowTextGlow");
			$("#initialHTML h2").html("Congratulations");
			$("#initialHTML h2").append("<br>You Have Won the Game!");
			$("#initialHTML .characterSelection div").remove();
			$("#initialHTML .characterSelection").append(player.html);
			$("#playAgainBTN").removeClass("invisible");
			$("#playAgainBTN").on("click", function() {
				location.reload();
			});
			$(".character .HP").remove();
			$("#initialHTML").show();
		// Else go back to character selection screen to pick new enemy
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