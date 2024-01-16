var _ = require('lodash');

console.log(_);

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var cat = document.querySelector("img");

let correctCount = 0;

cat.addEventListener("click", catColor);
cat.addEventListener("click", bcatColor);
cat.addEventListener("click", gcatColor);
cat.addEventListener("click", catEyeColor);

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function catColor () {
	let cat1 = prompt("Does this cat have stripes?");
	if (cat1 === null) {
		return;
	} else if (cat1 === "yes" || cat1 === "Yes") {
		alert("Correct!");
		correctCount++;
		console.log(correctCount);
	} else {
		alert("Wrong color. Try again.");
	}
}

function bcatColor () {
	let cat2 = prompt("What color is this cat?");
	if (cat2 === "black" || cat2 === "Yes") {
		alert("Correct!");
		correctCount++;
	} else {
		alert("Wrong color. Try again.");
	}
}

function gcatColor () {
	let cat3 = prompt("What color is this cat?");
	if (cat3 === "grey" || cat1 === "Grey") {
		alert("Correct!");
		correctCount++;
	} else {
		alert("Wrong color. Try again");
	}
}

function catEyeColor () {
	let cat4 = prompt("What eye color does this cat have?");
	if (cat4 === "blue" || cat4 === "Blue") {
		alert("Correct!");
		correctCount++;
	} else {
		alert("Wrong color. Try again");
	}
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);





