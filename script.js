var _ = require('lodash');

console.log(_);

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var cat = document.querySelector("img");
const cat3 = document.getElementById("greycat");
const cat4 = document.getElementById("blue-eyedcat");

var correctCount = 0;

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
	if (cat1 === "yes") {
		alert("Correct!");
		count++;
	} else {
		alert("Wrong color. Try again.");
	}
}

function bcatColor () {
	let cat2 = prompt("What color is this cat?");
	if (cat2 === "black") {
		alert("Correct!");
		count++;
	} else {
		alert("Wrong color. Try again.");
	}
}

function gcatColor () {
	let cat3 = prompt("What color is this cat?");
	if (cat3 === "grey") {
		alert("Correct!");
		count++;
	} else {
		alert("Wrong color. Try again");
	}
}

function catEyeColor () {
	let cat4 = prompt("What color is this cat?");
	if (cat4 === "blue") {
		alert("Correct!");
		count++;
	} else {
		alert("Wrong color. Try again");
	}
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

cat.addEventListener("click", catColor);
cat.addEventListener("click", bcatColor);
cat3.addEventListener("click", gcatColor);
cat4.addEventListener("click", catEyeColor);



