/* Higher order functions 

   https://github.com/hemanth/functional-programming-jargon#higher-order-functions-hof
*/

document.getElementById("sum-btn").addEventListener("click", init);

function init() {
	sum(parseInt(document.getElementById("text-input").value), fn)
}

function fn(no) {
	if(no > 5) {
		return true;
	}
	else {
		return false;
	}
}

function sum(input, fn) {	
	var sum = 0;
	for(var count=0; count<=input; count++) {
		if(!fn(sum)) {
			sum += 2;
		}
	}
	document.getElementById("sum").innerHTML = sum;
}

/* Currying

   https://github.com/hemanth/functional-programming-jargon#currying
*/

document.getElementById("curry-btn").addEventListener("click", initCurry);

function initCurry() {
	sumCurry(document.getElementById("text-curry").value)(document.getElementById("text-curryx").value);
}

function sumCurry(no1) {
	return function(no2) {
		no1 = parseInt(no1);
		no2 = parseInt(no2);
		if(typeof no1 == "number" && typeof no2 == "number") {
			var total = no1 + no2;
			document.getElementById("curry").innerHTML = total;
		}
		else {
			document.getElementById("curry").innerHTML = "Enter numbers";	
		}
	}
}