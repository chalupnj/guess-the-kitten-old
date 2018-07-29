//Find username
var username = prompt("What is your name?");
console.log("This guy is " + username + ".");

//Psychopath test
var notPsychopath=confirm("Hello there " + username + ". Do you like kittens?");
if (notPsychopath==false) {
	alert("Sorry, you are a psychopath and must leave now.");
	console.log(username + " is a psychopath.");
}
else {
	alert("Correct. You may continue to view this site.");
	console.log(username + " is not a psychopath.");
	}

//Guess the kitten game

//Kittens array of objects of array
var kittens = [{
	name: "Tony",
	traits: ["disgusting", "stinky", "disabled", "perfect", "of a big plop"]
},
{
	name: "Franklin",
	traits: ["poopy", "loud", "cross-eyed", "idiotic", "handsome"]
},
{
	name: "Noodle",
	traits: ["much of a lil guy", "runty", "cunty", "little", "stunty"]
},
{
	name: "Cleo",
	traits: ["majestic", "hygenic", "stunning", "slutty", "angelic"]
},
{
	name: "Nacho",
	traits: ["owned by Ashley", "spunky", "sleepy", "adopted", "friendly"]
},
{
	name: "Holla",
	traits: ["ginger", "stripey", "purr-fect", "licky", "jumpy"]
},
{
	name: "Birdie",
	traits: ["flirty", "old ladyish", "scared", "shy", "pudgy"]
},
{
	name: "Nutella",
	traits: ["much of a boss bitch", "playful", "climby", "cute", "fast"]
},
{
	name: "Ween",
	traits: ["fluffy", "scarf-like", "spooky", "stealthy", "bitey"]
}];

//Randomly choose the secret kitten
var k = Math.floor((Math.random() * 9));
var secretKitten = kittens[k].name;
console.log(secretKitten);

//User guesses kittens function--need to figure out how to do this
var guessIsCorrect = false;
var guessNum = 1;
while (guessIsCorrect != true) {
	var i = Math.floor((Math.random() * 5));
	var j = Math.floor((Math.random() * 5));
	var guess = prompt("Guess which kitten I am thinking of!");
	
	//Capitalize. Why can't I combine these??
	function capitalize(guess) {
		return guess.charAt(0).toUpperCase() + guess.slice(1);
	}
	var capGuess = capitalize(guess);

	//Check right or wrong
	var guessedKitten = kittens.findIndex(x => x.name===capGuess);
	if (capGuess===secretKitten) {
		var guessIsCorrect = true;
		alert("YOU'RE A GENIUS!!! The secret kitten is " + secretKitten + ".");
	//show kitten's pic somehow
	}
	else if (guessedKitten >= 0) {
		alert("WRONG! That kitten is too " + kittens[guessedKitten].traits[i] + ". The kitten I am thinking of is more " + kittens[k].traits[j] + ". Click Ok to guess again.");
		guessNum++;
	}
	else {
		alert("You dummy! That's not a valid guess. Click Ok and try again.");
		guessNum++;
	}
}

//Console summary
if (guessNum > 1) {
	console.log("It took this idiot " + guessNum + " tries to guess the correct kitten.");
}
else {
	console.log("What an idiot savant! " + username + " guessed the secret kitten right away!");
}

//Animate answer
var kittenPic = document.getElementsByTagName("img")[k];
kittenPic.classList.add("correct-kitten");