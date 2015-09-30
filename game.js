


var num = 0;

var q1 = prompt('Was I born in Portland?').toLowerCase();
	if (q1 === 'yes' || q1 === 'y'){
		alert('Correct');
		q1Answer = 'Correct';
		num++;
	} else if (q1 === 'no' || q1 === 'n'){
		alert('Incorrect');
		q1Answer = 'Incorrect';
	} else {
		alert('Please type yes or no');
		q1Answer = 'Invalid';
	}

var q2 = prompt('Am I engaged?').toLowerCase();
	if (q2 === 'yes' ||q2 === 'y'){
		alert('Correct');
		q2Answer = 'Correct';
		num++;
	} else if (q2 === 'no' || q2==='n'){
		alert('Incorrect');
		q2Answer= 'Incorrect';
	} else {
		alert('Please type yes or no');
		q2Answer = 'Invalid';
	}

var q3 = prompt('Do I play WOW?').toLowerCase();
	if (q3 === 'no' || q3 === 'n'){
		alert('Correct');
		q3Answer = 'Correct';
		num++;
	} else if (q3 === 'yes' || q3 === 'y'){
		alert('Incorrect');
		q3Answer = 'Incorrect'
	} else {
		alert('Please type yes or no');
		q3Answer = 'Invalid';
	}


console.log('q1 response ' + q1);
console.log('q2 response ' + q2);
console.log('q3 response ' + q3);


alert('RESULTS: Question 1: ' + q1Answer + '. Question 2: ' + q2Answer + '. Question 3: ' 
	+ q3Answer + '. You got ' + num + ' out of 3 correct.');











