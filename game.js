
var buttonClicked = function(){

var q1 = prompt('Was I born in Portland?').toLowerCase();
	if (q1 ==='yes' || q1==='y'){
		alert('Correct');
		q1='Correct';
	} else if (q1==='no' || q1==='n'){
		alert('Incorrect');
		q1='Incorrect';
	} else {
		alert('Please type yes or no');
		q1='Invalid';
	}

var q2 = prompt('Am I engaged?').toLowerCase();
	if (q2 === 'yes' ||q2==='y'){
		alert('Correct');
		q2='Correct';
	} else if (q2==='no' || q2==='n'){
		alert('Incorrect');
		q2='Incorrect'
	} else {
		alert('Please type yes or no');
		q2='invalid';
	}

var q3 = prompt('Do I play WOW?').toLowerCase();
	if (q3 === 'no' || q3==='n'){
		alert('Correct');
		q3='Correct';
	} else if (q3==='yes' || q3==='y'){
		alert('Incorrect');
		q3='Incorrect'
	} else {
		alert('Please type yes or no');
		q3='Invalid';
	}


console.log('q1 response ' + q1);
console.log('q2 response ' + q2);
console.log('q3 response ' + q3);

var answers = [q1, q2, q3];

alert('RESULTS: Question 1: ' + q1 + '. Question 2: ' + q2 + '. Question 3: ' + q3);



}







