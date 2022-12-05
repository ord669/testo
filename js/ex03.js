'use strict';

/**
Write the function capitalizeLongerThan5(strs) – 
gets an array of strings and returns a new array in which strings 
that are longer than 5 are capitalized (starts with uppercase)
 */

// var input = ['abcdefg', 'xyz'];
// var expected = ['Abcdefg', 'xyz']


var input = ['abcdefg', 'xyz'];
console.log('capitalizeLongerThan5(input):',capitalizeLongerThan5(input))

// function capitalizeLongerThan5(strs){
//     const longWords = strs.filter(word => word.length > 4)
//     longWords.forEach((word,idx) => {
//         var wordCup = capitalizeFirstLetter(word)
//         longWords[idx] = wordCup
//         console.log('word:', wordCup)
//         //  return wordCup
//     })
//     return longWords
//     console.log('longWords:',longWords )
// }

// function capitalizeLongerThan5(strs){
//     const longWords = strs.filter(word => word.length > 4)
//     longWords.forEach((word,idx) =>longWords[idx] = capitalizeFirstLetter(word) )
//     return longWords
// }

function capitalizeLongerThan5(strs){
   return strs.map(str => str.length > 5 ? str.charAt(0).toUpperCase() + str.slice(1) : str )
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  