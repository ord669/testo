'use strict'
//Exercise 44 - printNumsCount()





console.log('INPUT:', )
console.log('EXPECTED:', )
console.log('ACTUAL:', printNumsCount([3,2,0,2,2,0,3]) )



var nums = [3,2,0,2,2,0,3]

function printNumsCount(nums){
    var counts = [0,0,0,0]
    for(var i = 0 ; i < nums.length ; i++){
        counts[nums[i]]++
    }
    return counts

}

   
    // console.log('INPUT:',' printNumsCount(nums)' )
    // console.log('EXPECTED:', )
    // console.log('ACTUAL:',  printNumsCount(nums))
