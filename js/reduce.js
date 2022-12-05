'use strict';

/**
 * All experience sum
*/





var emps = [
    { name: 'Joe Schmoe', yearsExperience: 5, department: 'IT' },
    { name: 'Sally Sallerson', yearsExperience: 15, department: 'Engineering' },
    { name: 'Bill Billson', yearsExperience: 5, department: 'Engineering' },
    { name: 'Jane Janet', yearsExperience: 15, department: 'Management' },
    { name: 'Bob Hope', yearsExperience: 9, department: 'IT' }
]



// function reduceArrayToMapSample() {
//     var sumYears = emps.reduce((acc, employ) => {
//         console.log('Called with ', acc, employ);
//         acc += employ.yearsExperience
//         return acc
//     }, 0)
//     console.log('sumYears', sumYears)
// }




/**
 *Sum each department's collective experience
(create a map object dept -> experience)
*/
// reduceArrayToMapSample()
// function reduceArrayToMapSample() {

//     var votes = ['uza', 'uza', 'shabi', 'uza', 'shabi', 'shabi', 'pingi']
//     // console.log('Votes:', votes)

//     var departmentCollectiveExperience = emp.reduce((acc, vote) => {
//         console.log('Called with ', acc, vote);
//         if (!acc[vote]) acc[vote] = 0
//         acc[vote]++
//         return acc
//     }, {})

//     console.log('Votes Map', departmentCollectiveExperience)
// }


// console.log('departmentExperienceSum(pepoles):', departmentExperienceSum(emps))
// function departmentExperienceSum(pepoles) {
//     var ExperienceMap = pepoles.reduce((acc, pepole) => {
//         if (!acc[pepole.department]) acc[pepole.department] = 0
//         acc[pepole.department] += pepole.yearsExperience
//         return acc
//     }, {})
//     return ExperienceMap
// }