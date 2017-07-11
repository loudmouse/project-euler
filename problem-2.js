
var sum = 0;
var j = 1;

for(var i = 0; i <= 4000000;){
	j = i + j;
	i = j - i;

		if(i % 2 === 0){
		sum = sum + i;
	}
}

	console.log(sum);


