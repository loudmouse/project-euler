/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

The first thing I had to do to solve this probelm was to tell the program that I would need to look at every number up until 1000. Which is seen here "for (var i = 1; i <= 1000; i++)". This basically creates the variable i = 1 and will add 1 to i every time the loop is run until it reaches 1000.

The next task was finding out if i was divisble by 3 or 5 I used the modulo (%) operater to do this, if the modulo operator of i % 3 or i % 5 returned 0. Then this in turn means that the number must be a mutiple of 3 or 5. 

The final thing to do is to create a variable to hold the total of all the numbers that were multiples of either 3 or 5 and add them togethor. I did this by creating a variable called total and assigned it the value of zero, as we have not recieved any multiples. I then add i to the total until the loop is completed giving us the sum of all the multiples.*/

var total = 0;

for (var i = 1; i <= 1000; i++){
	if(i % 3 === 0 || i % 5 == 0){
		total = total + i;
	}
}

console.log(total)