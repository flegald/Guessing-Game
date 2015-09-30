var buttonClicked = function(){

var q1 = prompt('Was I born in Portland?').toLowerCase();
	if (q1 ==='yes' || q1==='y'){
		alert('Correct');
	}else if (q1==='no' || q1==='n'){
		alert('Incorrect')
	} else {
		alert('Please type yes or no')
	}

var q2 = prompt('Am I engaged?').toLowerCase();
	if (q2 === 'yes' ||q2==='y'){
		alert('Correct')
	} else if (q2==='no' || q2==='n'){
		alert('Incorrect')
	} else {
		alert('Please type yes or no')
	}

var q3 = prompt('Do I play WOW?').toLowerCase();
	if (q3 === 'no' || q3==='n'){
		alert('Correct')
	} else if (q3==='no' || q3==='n'){
		alert('Incorrect')
	} else {
		alert('Please type yes or no')
	}


console.log('q1 response ' + q1);
console.log('q2 response ' + q2);
console.log('q3 response ' + q3);
}