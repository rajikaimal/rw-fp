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
