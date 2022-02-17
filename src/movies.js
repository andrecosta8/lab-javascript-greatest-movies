// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {
  let directors = moviesArr.map(function(singleMovie){
    return singleMovie.director
  })
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(manyArr) {
    let steven = manyArr.filter(function(moviematch){
      return moviematch.director === "Steven Spielberg" && moviematch.genre.includes("Drama")
  })
    return steven.length
}
    
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    result = movies.reduce((acc,element) => {
      element.score === undefined?element.score = 0:null;
    return parseFloat((acc + element.score/movies.length).toFixed(2))
    },0);
    return result;
    }
  

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    let dramaMovies = movies.filter((movie) => {
      return movie.genre.includes('Drama');
    });
    averageScore = scoresAverage(dramaMovies);
    return averageScore;
  }
  

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let deepCopy = JSON.parse(JSON.stringify(movies));
  let orderArr = deepCopy.sort((a,b) => {
    if (a.year === b.year) {
      if (a.title < b.title) return -1;
        return 1;
    };
  return a.year - b.year;
  });
  return orderArr;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let orderArr = [];
  movies.forEach(movie => orderArr.push(movie.title));
  orderArr.sort();
  orderArr = orderArr.slice(0,20);
  return orderArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
