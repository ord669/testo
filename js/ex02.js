'use strict';

/**
//  Write the function reverseAll(strs) – gets an array of strings
// and returns a new array containing string reversed
//  */

var input = ['abc', 'xyz'];
console.log('reverseAll(input):', reverseAll(input))
function reverseAll(strs){
    const newArr = strs.map(str => str.split(''))
    const reversrArr = newArr.map( word => word.reverse().join())
    return reversrArr
}

