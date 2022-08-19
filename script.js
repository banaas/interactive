var _ = require('lodash');

console.log(_);

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var cat = document.querySelector("img");
const cat3 = document.getElementById("greycat");

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
	} else {
		alert("Wrong color. Try again.");
	}
}

function bcatColor () {
	let cat1 = prompt("What color is this cat?");
	if (cat1 === "black") {
		alert("Correct!");
	} else {
		alert("Wrong color. Try again.");
	}
}

function gcatColor () {
	let cat1 = prompt("What color is this cat?");
	if (cat1 === "grey") {
		alert("Correct!");
	} else {
		alert("Wrong color. Try again");
	}
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

cat.addEventListener("click", catColor);
cat2.addEventListener("click", bcatColor);
cat3.addEventListener("click", gcatColor);



