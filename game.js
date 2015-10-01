var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');

var q1Answer; 
var q2Answer;
var q3Answer;
var num = 0;

function quest1() {
	var q1 = prompt('Was I born in Portland?').toLowerCase();
		if (q1 === 'yes' || q1 === 'y'){
			one.innerHTML = 'Correct';
			q1Answer = 'Correct';
			num++;
		} else if (q1 === 'no' || q1 === 'n'){
			one.innerHTML = 'Incorrect';
			q1Answer = 'Incorrect';
		} else {
			one.innerHTML = 'Please type yes or no';
			q1Answer = 'Invalid';
		}
}

function quest2() {
	var q2 = prompt('Am I engaged?').toLowerCase();
		if (q2 === 'yes' ||q2 === 'y'){
			two.innerHTML = 'Correct';
			q2Answer = 'Correct';
			num++;
		} else if (q2 === 'no' || q2==='n'){
			two.innerHTML = 'Incorrect';
			q2Answer= 'Incorrect';
		} else {
			two.innerHTML = 'Please type yes or no';
			q2Answer = 'Invalid';
		}
}

function quest3() {
	var q3 = prompt('Do I play WOW?').toLowerCase();
		if (q3 === 'no' || q3 === 'n'){
			three.innerHTML = 'Correct';
			q3Answer = 'Correct';
			num++;
		} else if (q3 === 'yes' || q3 === 'y'){
			three.innerHTML = 'Incorrect';
			q3Answer = 'Incorrect';
		} else {
			three.innerHTML = 'Please type yes or no';
			q3Answer = 'Invalid';
		}
}

quest1();
quest2();
quest3();

four.innerHTML = 'You got ' + num + ' out of 3 right';












