# Make a person
#### Difficulty : 3/5

Fill in the object constructor with the methods specified in the tests.

 Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).

 All functions that take an argument have an arity of 1, and the argument will be a string.

 These methods must be the only available means for interacting with the object.

 Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

 Here are some helpful links:

 Closures

 Details of the Object Model


 var Person = function(firstAndLast) {
    return firstAndLast;
};

 var bob = new Person('Bob Ross');
 bob.getFullName();



# Map the Debris
#### Difficulty : 3/5

Return a new array that transforms the element's average altitude into their orbital periods.
The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
You can read about orbital periods on wikipedia.
The values should be rounded to the nearest whole number. The body being orbited is Earth.
The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418
Remember to use RSAP if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
 Math.pow()
 
 function orbitalPeriod(arr) {
   var GM = 398600.4418;
   var earthRadius = 6367.4447;
   return arr;
 }
 
 orbitalPeriod([{name : "sputkin", avgAlt : 35873.5553}]);

# Pairwise
#### Difficulty : 3/5
Return the sum of all indices of elements of 'arr' that can be paired with one other element to form a sum that equals the value in the second argument 'arg'. If multiple sums are possible, return the smallest sum. Once an element has been used, it cannot be reused to pair with another.

For example, pairwise([1, 4, 2, 3, 0, 5], 7) should return 11 because 4, 2, 3 and 5 can be paired with each other to equal 7.

pairwise([1, 3, 2, 4], 4) would only equal 1, because only the first two elements can be paired to equal 4, and the first element has an index of 0!

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Array.reduce()
    
    function pairwise(arr, arg) {
      return arg;
    }
    
    pairwise([1,4,2,3,0,5], 7);
