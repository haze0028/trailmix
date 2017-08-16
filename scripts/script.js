document.getElementById("doMath").addEventListener("click", calculate);
document.getElementById("resetForm").addEventListener("click", resetForm);
document.getElementById("itemSubmit").addEventListener("click", itemSubmit);

var peanuts = {
	calorie: 566.67,
	fat: 50,
	carb: 20,
	sugar: 3.33,
	protein: 26.67
};

var walnuts = {
	calorie: 670,
	fat: 64,
	carb: 64,
	sugar: 3,
	protein: 15
};

var pumpkinSeeds = {
	calorie: 540,
	fat: 46,
	carb: 18,
	sugar: 1,
	protein: 25
};

var sunflowerSeeds = {
	calorie: 590,
	fat: 51,
	carb: 23,
	sugar: 3,
	protein: 20
};

var reeses = {
	calorie: 480,
	fat: 22,
	carb: 63,
	sugar: 52,
	protein: 11
};

var almonds = {
	calorie: 580,
	fat: 49,
	carb: 20,
	sugar: 4,
	protein: 21
};

var cashews = {
	calorie: 630,
	fat: 51,
	carb: 26,
	sugar: 6,
	protein: 18
};

var raisins = {
	calorie: 310,
	fat: 0.2,
	carb: 78,
	sugar: 73,
	protein: 3
};

var nuts = [peanuts, walnuts, pumpkinSeeds, sunflowerSeeds, reeses, almonds, cashews, raisins];


function calculate() {
	var nutRatio = []; /*will store the nut ratio for each item*/
	var grams = 0; /*individual grams of each item*/
	var sum = 0; /*sum of all grams of mix*/
	var inputs = [
	document.getElementById("peanutInput").value, document.getElementById("walnutInput").value, document.getElementById("pumpkinInput").value, document.getElementById("sunflowerInput").value, document.getElementById("reeseInput").value, document.getElementById("almondInput").value, document.getElementById("cashewInput").value, document.getElementById("raisinInput").value
	];

	if (inputs[0] == 0 && inputs[1] == 0 && inputs[2] == 0 && inputs[3] == 0 && inputs[4] == 0 && inputs[5] == 0 && inputs[6] == 0 && inputs[7] == 0) {
		document.getElementById("errorMsg").style.opacity = "1";
		return false;
	} else {
		document.getElementById("errorMsg").style.opacity = "0";
	}

	document.getElementById("info2").style.display = "none";

	function idSwitch() {
		if (document.getElementById("shift")) {
			document.getElementById("shift").id = "total";
		}
	}
	idSwitch();

	function animate() {
		document.getElementById("total").id = "shift";
	}
	animate();

	/* determine the nut ratio for each item*/
	for (var i = 0; i <= (inputs.length) - 1; i++) {
		grams = parseInt(inputs[i]);
		sum += grams;
	}
	for (var i = 0; i <= (inputs.length) - 1; i++) {
		nutRatio.push(inputs[i] / sum);
	}

	/*
	function to loop through all the nutrition properties. can't use function parameter when targetting an object property*/
	//	function properties(amount) {
	//			var total = 0; /*total amount returned to html page*/
	//			for (var i = 0; i <= (inputs.length) - 1; i++) {
	//				var x = amount;
	//				total += nutRatio[i] * (nuts[i].x);
	//				console.log(total);
	//			}
	//	total = Math.round(total);
	//			return total;
	//		}


	/* determine the totals for each nutrition fact */
	calories = function () {
		var total = 0; /*total amount returned to html page*/
		for (var i = 0; i <= (inputs.length) - 1; i++) {
			total += nutRatio[i] * (nuts[i].calorie);
		}
		total = Math.round(total);
		total;
		return total;
	}

	fats = function () {
		var total = 0; /*total amount returned to html page*/
		for (var i = 0; i <= (inputs.length) - 1; i++) {
			total += nutRatio[i] * (nuts[i].fat); //
		}
		total = Math.round(total);
		return total;
	}

	carbs = function () {
		var total = 0; /*total amount returned to html page*/
		for (var i = 0; i <= (inputs.length) - 1; i++) {
			total += nutRatio[i] * (nuts[i].carb);
		}
		total = Math.round(total);
		return total;
	}

	sugars = function () {
		var total = 0; /*total amount returned to html page*/
		for (var i = 0; i <= (inputs.length) - 1; i++) {
			total += nutRatio[i] * (nuts[i].sugar);
		}
		total = Math.round(total);
		return total;
	}

	proteins = function () {
		var total = 0; /*total amount returned to html page*/
		for (var i = 0; i <= (inputs.length) - 1; i++) {
			total += nutRatio[i] * (nuts[i].protein);
		}
		total = Math.round(total);
		return total;
	}


	document.getElementById("calFacts").innerHTML = calories();
	document.getElementById("fatFacts").innerHTML = fats() + "g";
	document.getElementById("carbFacts").innerHTML = carbs() + "g";
	document.getElementById("sugFacts").innerHTML = sugars() + "g";
	document.getElementById("protFacts").innerHTML = proteins() + "g";
}

/*reload entire page*/
function resetForm() {
	window.location.reload();
}

/* create a new item and add to html and js */
function itemSubmit(){
	
	var name = document.getElementById("nameInput").value;
	var cal = document.getElementById("calorieInput").value;
	var fat = document.getElementById("fatInput").value;
	var carb = document.getElementById("carbInput").value;
	var sug = document.getElementById("sugarInput").value;
	var prot = document.getElementById("proteinInput").value;
	
	alert(name);
	
	nuts.push(name);
	nuts[name].calorie = parseInt(cal);
	nuts[name].fat = parseInt(fat);
	nuts[name].carb = parseInt(carb);
	nuts[name].sugar = parseInt(sug);
	nuts[name].protein = parseInt(prot);
	
	document.getElementById("nutForm").createElement('label[class="labels"]');
	document.getElementById("nutForm").createElement('input[type="number"]');
	
}

/* toFixed used to round to set number of decimal places 
function round(things) {
	var rounded = things.toFixed(2);
	return rounded;
}*/


/* determines how many input fields have values greater than 0
var allInputs = document.querySelectorAll('input[type="number"]');
var count = 0;
function addInputs() {
	for (i = 0; i <= (nuts.length) - 1; i++) {
		if (allInputs[i].value > 0) {
			count++;
		}
	}
}
addInputs();*/

//(inputs[i] / 100) *