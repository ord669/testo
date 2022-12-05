'use strict';

/**
 * Write the function onlyOneWord(strs) – returns only those
 * strings with a single word (no spaces)

 */


 var input = ['return', 'phrases', 'with one word'];

 console.log('onlyOneWord(input):', onlyOneWord(input))

function onlyOneWord(strs){
    return strs.filter(word =>!word.includes(' '))
}


// function hasWhiteSpace(s) {
//     return /\s/g.test(s);
//   }

// function onlySpaces(str) {
//     return 
//   }