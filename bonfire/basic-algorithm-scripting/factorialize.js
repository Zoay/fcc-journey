function factorialize(num) {
    // solution 1: iterative way

    /*var i = 1;
  	var res = 1;
  	while(i <= num)
  	{
    	res = res * i;
    	i++;
  	}
  	return res; */


    // solution 2: recursive way
    if (num === 0) return 1;
    return num * factorialize(num - 1);
}

factorialize(5);