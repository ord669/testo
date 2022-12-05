'use strict';

/** Write the function printNumsCount(nums). 
The parameter nums , is an array of integers in the range 0 - 3 like this one:
[3,2,0,2,2,0,3]
The function prints how many times each of these numbers appears in the array.
Tip: the fact that the values are in a specific range allows us to use a second array, 
in which the index, is actually the number itself. The values of this second array, 
will store the occurrences of the numbers in nums.
For example: INPUT: [3,2,0,2,2,0,3] EXPECTED: [2,0,3,2]*/


const nums = [3, 2, 0, 2, 2, 0, 3]

// printNumsCount(nums)
console.log('printNumsCount(nums):',printNumsCount(nums) )
function printNumsCount(nums) {
    const counts = [0,0,0,0]
    nums.forEach(num => counts[num]++);
    return counts
}

// try to do it in reduce 


