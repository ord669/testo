'use strict';

/** Implement a function named biggerThan100. 
 * It receives an array of numbers and returns a new array 
 * containing only the numbers which are greater than 100.*/

console.log(':',  biggerThan100([200,3,6,7,150]))

function biggerThan100(numbers){

    return numbers.filter(num => num > 100)

}