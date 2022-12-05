'use strict';

/**
Write the function onlyVowels(strs) – 
gets an array of strings
and returns a new array containing 
only vowels from each string:

*/

var input = ['average', 'exceptional', 'amazing'];

const vowels = ['a','e', 'i','o','u']
onlyVowels(input)
console.log('onlyVowels(input):', onlyVowels(input))

function onlyVowels(strs){
    return strs.map(str => str.split('').filter(letter =>vowels.includes(letter)))
}










// function onlyVowels(strs){
//     const onlyVowels = strs.map(str => str.split('').filter(letter => vowels.includes(letter))
//     )
//     return onlyVowels
   
// }












// function onlyVowels(strs){
//     const newStr = strs.map(str => {
//         str = str.split('')
//         console.log('str:',str )
//        return str.filter(letter => vowels.includes(letter)).join()
//     })
//     console.log('newStr:', newStr)
// }