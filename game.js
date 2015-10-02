var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var quests = ['Was I born in Portland?', 'Am I engaged?', 'Do I play WOW?'];
var answers = ['yes', 'y', 'no', 'n'];
var num = 0;

function quest1() {
	var q1 = prompt(quests[0]).toLowerCase();
		if (q1 === answers[0] || q1 === answers[1]){
			oneY.innerHTML = 'Correct';
			pic1.innerHTML = '<img src= "images/portland.jpg" width= "200"/>';
			num++;
		} else if (q1 === answers[2] || q1 === answers[3]){
			oneN.innerHTML = 'Incorrect';

		} else {
			oneN.innerHTML = 'Please type yes or no';

		}
} 

function quest2() {
	var q2 = prompt(quests[1]).toLowerCase();
		if (q2 === answers[0] ||q2 === answers[1]){
			twoY.innerHTML = 'Correct';
			pic2.innerHTML = '<img src= "images/ring.jpeg" width= "200"/>';
			num++;
		} else if (q2 === answers[2] || q2=== answers[3]){
			twoN.innerHTML = 'Incorrect';

		} else {
			twoN.innerHTML = 'Please type yes or no';

		}
}

function quest3() {
	var q3 = prompt(quests[2]).toLowerCase();
		if (q3 === answers[2] || q3 === answers[3]){
			threeN.innerHTML = 'Correct';
			pic3.innerHTML = '<img src= "images/WOW.jpg" width= "200"/>';

			num++;
		} else if (q3 === answers[0] || q3 === answers[1]){
			threeY.innerHTML = 'Incorrect';

		} else {
			threeY.innerHTML = 'Please type yes or no';

		}
}

quest1();
quest2();
quest3();

four.innerHTML = 'You got ' + num + ' out of 3 right';












