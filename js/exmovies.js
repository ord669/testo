'use strict';

/**


*/


var gMovies = [ 
    {imdb: 'tt0373889', name: 'Harry Potter'}, 
    {imdb: 'tt0000004', name: 'Un bon bock'}, 
    {imdb: 'tt0000003', name: 'Pauvre Pierrot'}, 
]


const render = document.querySelector('.render')
render.innerHTML = getMovieLink('tt0373889')



function getMovieLink(imdb){
    const movie =  gMovies.find(movie => movie.imdb === imdb)
    return`<a href="https://www.imdb.com/title/${movie.imdb}/">${movie.name}</a>`
}



console.log('getMovieLink(imdb):', deleteMovie('tt0373889'))

function deleteMovie(imdb){
    return gMovies.filter(movie => movie !== gMovies.find(movie => movie.imdb === imdb))
}