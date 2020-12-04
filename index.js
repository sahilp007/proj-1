var readlineSync = require('readline-sync')

var username = readlineSync.question("Whats your Name?\n")
console.log("Welcome " + username)
console.log("How much do you know Sahil\n");

var score = 0


function check(pre, user) {
	if (pre.toLowerCase() === user.toLowerCase()) {
		score++
		console.log("Wow!!! \nYou guessed it right.");
	}
	else {
		console.log("Incorrect.\n At least you tried...");
	}
	console.log("Your Score is:" + score+"\n")
}

var ques = [
	{
		q: "What is is Age?\n",
		a: "19"
	},
	{
		q: "He would want to retire at what age?\n",
		a: "Never"
	}
]

for(var i =0;i<ques.length;i++)
{
	console.log(ques[i].q)
	var u= readlineSync.question()
	check(ques[i].a, u)
}