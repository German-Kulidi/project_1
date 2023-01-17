'use strict';

const numberOfFilms = +prompt('Скольско фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const film = prompt('Один из последних просмотренных фильмов?', '');
    const rating = prompt('На сколько оцените его?', '');

    if (film != null && rating != null && film != '' && rating !='' && film.length < 50) {
        personalMovieDB.movies[film] = rating;       
    } else {
        i--;
    }
}

// let i = 0;
// do {
//     i++;
//     const film = prompt('Один из последних просмотренных фильмов?', '');
//     const rating = prompt('На сколько оцените его?', '');

//     if (film != null && rating != null && film != '' && rating !='' && film.length < 50) {
//         personalMovieDB.movies[film] = rating;       
//     } else {
//         i--;
//     }
// } while (i < 2);

const countFilms = personalMovieDB.count;

if (countFilms < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (countFilms >= 10 && countFilms < 30 ) {
    alert('Вы классический зритель');
} else if (countFilms > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

console.log(personalMovieDB);