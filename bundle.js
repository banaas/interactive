(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

	var css = document.querySelector("h3");
	var color1 = document.querySelector(".color1");
	var color2 = document.querySelector(".color2");
	var body = document.getElementById("gradient");
	var cat = document.getElementById("adultcat");
	const cat2 = document.getElementById("blackcat");
	const cat3 = document.getElementById("greycat");
	const cat4 = document.getElementById("blue-eyedcat");
	
	// Counter for correct answers
	var correctCount = 0;
	
	color1.addEventListener("input", setGradient);
	color2.addEventListener("input", setGradient);
	
	cat.addEventListener("click", catColor);
	cat2.addEventListener("click", bcatColor);
	cat3.addEventListener("click", gcatColor);
	cat4.addEventListener("click", catEyeColor);
	
	function setGradient() {
		if (correctCount > 2) {
	  body.style.background =
		"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
		}
	}
	
	function catColor() {
	  let cat = prompt("Does this cat have stripes?");
	  if (cat === null) {
		return;
	  } else if (cat.toLowerCase() === "yes") {
		alert("Correct!");
		correctCount++;
		console.log("Correct Count: " + correctCount);
	  } else {
		alert("Wrong color. Try again.");
	  }
	}
	
	function bcatColor() {
	  let cat2 = prompt("What color is this cat?");
	  if (cat2.toLowerCase() === "black") {
		alert("Correct!");
		correctCount++;
		console.log("Correct Count: " + correctCount);
	  } else {
		alert("Wrong color. Try again.");
	  }
	}
	
	function gcatColor() {
	  let cat3 = prompt("What color is this cat?");
	  if (cat3.toLowerCase() === "grey") {
		alert("Correct!");
		correctCount++;
		console.log("Correct Count: " + correctCount);
	  } else {
		alert("Wrong color. Try again");
	  }
	}
	
	function catEyeColor() {
	  let cat4 = prompt("What eye color does this cat have?");
	  if (cat4.toLowerCase() === "blue") {
		alert("Correct!");
		correctCount++;
		console.log("Correct Count: " + correctCount);
	  } else {
		alert("Wrong color. Try again");
	  }
	}




},{}]},{},[1]);
