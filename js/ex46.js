'use strict';

/** Write the function: multBy(nums, multiplier) 
 which modifies the nums array so that each of its items, 
 is multiplied by multiplier. 
 The function returns the modified array.*/


var nums = [1,2,3,4,5]

console.log('multBy(nums,2,true):',multBy(nums,2,true))

function multBy(nums, multiplier,isImmutable) {
    if(isImmutable){
       const newNums =  nums.slice()
       console.log('newNums:', newNums)
       newNums.forEach((num,idx) => nums[idx] = num * multiplier)
       return newNums
    }
     nums.forEach((num,idx) => nums[idx] = num * multiplier)
     return nums
     
}
