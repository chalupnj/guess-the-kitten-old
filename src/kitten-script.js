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

//Kittens array of objects of array. YO UPDATE, BE SURE TO ADD KITTEN IN SAME TOP-BOTTOM ORDER AS IN HTML!
var kittens = [{
	name: "Tony",
	traits: ["disgusting", "stinky", "disabled", "flawless", "of a big plop"]
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
	name: "Liberace",
	traits: ["hyper", "adventurous", "smelly in the butt region", "deceased", "shoe-loving"]
},
{
	name: "Angeweena Joween",
	traits: ["half chimpanzee", "middle child", "snoozy", "family-oriented", "lazy"]
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
	name: "Liam",
	traits: ["whiny", "petite", "scared to leave the bedroom", "pukey", "pillow-loving"]
},
{
	name: "Meatloaf",
	traits: ["loafy", "puffy", "nuzzly", "neck-loving", "perfect"]
},
{
	name: "Birdie",
	traits: ["flirty", "old ladyish", "scared", "shy", "pudgy"]
},
{
	name: "Nutella",
	traits: ["boss bitch", "playful", "climby", "cute", "fast"]
},
{
	name: "Ween",
	traits: ["fluffy", "scarf-like", "spooky", "stealthy", "bitey"]
},
{
	name: "Fartima",
	traits: ["farty", "screamy", "social", "poopful", "tweeny"]
}];

//Randomly choose the secret kitten -- CHANGE THE NUMBER TO # OF KITTENS
var k = Math.floor((Math.random() * 14));
var secretKitten = kittens[k].name;
console.log(secretKitten);

// Get the modal
var modal = document.getElementById('guessModal');

// Get the button that opens the modal
if (notPsychopath==false) {
	modal.style.visibility = "visible";
}

	//Get guess
	function getRadioVal(form, name) {
	    var guess;
	    // get list of radio buttons with specified name
	    var radios = form.elements[name];
	    
	    for (var i=0; i<kittens.length; i++) {
	        if (radios[i].checked ) { // radio checked?
	            guess = radios[i].value; // if so, hold its value in val
	            break; // and break out of for loop
	        }
	    }
	    return guess; // return value of checked radio or undefined if none checked
	}

//User guesses kittens function
var guessIsCorrect = false;
var guessNum = 1;
function checkAnswer() {
	var i = Math.floor((Math.random() * 5));
	var j = Math.floor((Math.random() * 5));

	// Get the guess
	var guess = getRadioVal(document.getElementById("form"), "kittyName");
	console.log(guess);

	//Check right or wrong
	var guessedKitten = kittens.findIndex(x => x.name===guess);
	if (guess===secretKitten) {
		var guessIsCorrect = true;
		console.log("correct");
		alert("YOU'RE A GENIUS!!! The secret kitten is " + secretKitten + ".");
		modal.style.visibility = "hidden";
		highlightCorrectKitten();
	}
	else {
		alert("WRONG! That kitten is too " + kittens[guessedKitten].traits[i] + ". The kitten I am thinking of is more " + kittens[k].traits[j] + ". Click Ok to guess again.");
		console.log("wrong");
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
function highlightCorrectKitten() {
	var kittenPic = document.getElementsByTagName("img")[k];
	kittenPic.classList.add("correct-kitten");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.visibility = "hidden";
    }
}
function closeModal() {
    modal.style.visibility = "hidden";
}