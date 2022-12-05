'use strict';

/**
1. Write a function allPassed(students) that gets an array of students
(name, grade) and returns true if they all passed (grade >= 70)
*/

// var gStudents = [
//     {name:'or' , grade: 80}, 
//     {name:'tomer' , grade: 90},
//     {name:'jon' , grade: 80}

// ]

// console.log('allPassed(students):',allPassed(gStudents) )

// function allPassed(students){
//     return students.every(student => student.grade >= 70)
// }




/**
2. Write a function isGameOn(players) that gets an array of players
(name,isAlive) and returns true if one of them is still alive
*/

var gPlayers = [
    {name:'or' , isAlive: false}, 
    {name:'tomer' , isAlive: false},
    {name:'jon' , isAlive: true}

]

function isGameOn(players){
    return players.some(player => player.isAlive)


}



/**
3. Write a function isMatrix(arr2d) that gets a 2d array and validate
that it is a matrix (= all rows are of the same length)
*/


var mat = [
    ['2', '2'],
    ['2', '2'],
    ['2', '2'],
    ['2', '2', '7']
]

console.log('isMatrix(arr2d):',isMatrix(mat) )

function isMatrix(arr2d){
    return arr2d.every(row => row.length === arr2d[0].length)
}