###Bonfire: Return Largest Numbers in Arrays
####Difficulty: 1/5

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i] .
If you are writing your own Chai.js tests, be sure to use a deep equal statement instead of an equal statement when comparing arrays.
Remember to use Read-Search-Ask if you get stuck. Write your own code.
Here are some helpful links:
    **Comparison Operators**

 
 function largestOfFour(arr) {
   // You can do this!
   return arr;
 }
 
 largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
 
 
 ###Bonfire: Confirm the Ending
 ####Difficulty: 1/5 
 
 Check if a string (first argument) ends with the given target string (second argument).
 
 Remember to use Read-Search-Ask if you get stuck. Write your own code.
 
 Here are some helpful links:
 
     String.substr()
     
     function end(str, target) {
         // "Never give up and good luck will find you."
         // -- Falcor
         return str;
     }
     
     end('Bastian', 'n');
     
###Bonfire: Repeat a string repeat a string
####Difficulty: 1/5
    
    Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.
    
    Remember to use Read-Search-Ask if you get stuck. Write your own code.
    
    Here are some helpful links:
    
        Global String Object
        

###Bonfire: Truncate a string
####Difficulty: 1/5

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a '...' ending.

Note that the three dots at the end add to the string length.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    String.slice()
    
    function truncate(str, num) {
      // Clear out that junk in your trunk
      return str;
    }
    
    truncate('A-tisket a-tasket A green and yellow basket', 11);

###Bonfire: Chunky Monkey
####Difficulty: 1/5

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Array.push()
    
    function chunk(arr, size) {
      // Break it up.
      return arr;
    }
    
    chunk(['a', 'b', 'c', 'd'], 2);