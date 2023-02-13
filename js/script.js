'use strict';

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Скольско фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Скольско фильмов вы уже посмотрели?', '');
//     }
// }
// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for(let i = 1; i <= 3; i++) {
//         const personalGenres = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres.push(personalGenres);
//     }
// }
// writeYourGenres();

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const film = prompt('Один из последних просмотренных фильмов?', '').trim();
//         const rating = prompt('На сколько оцените его?', '');

//         if (film != null && rating != null && film != '' && rating != '' && film.length < 50) {
//             personalMovieDB.movies[film] = rating;
//         } else {
//             i--;
//         }
//     }

// }
// rememberMyFilms();

// function detectPersonalLevel() {
//     const countFilms = personalMovieDB.count;

//     if (countFilms < 10) {
//         alert('Просмотрено довольно мало фильмов');
//     } else if (countFilms >= 10 && countFilms < 30) {
//         alert('Вы классический зритель');
//     } else if (countFilms > 30) {
//         alert('Вы киноман');
//     } else {
//         alert('Произошла ошибка');
//     }
// }
// detectPersonalLevel();


// console.log(personalMovieDB);












const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt('Скольско фильмов вы уже посмотрели?', '');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Скольско фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const film = prompt('Один из последних просмотренных фильмов?', '').trim();
            const rating = prompt('На сколько оцените его?', '');
    
            if (film != null && rating != null && film != '' && rating != '' && film.length < 50) {
                personalMovieDB.movies[film] = rating;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        const countFilms = personalMovieDB.count;

        if (countFilms < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (countFilms >= 10 && countFilms < 30) {
            alert('Вы классический зритель');
        } else if (countFilms > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        switch (this.privat) {
            case false:
                this.privat = true;
                break;
            case true:
                this.privat = false;
                break;
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++) {
            const personalGenres = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();
            if (personalGenres !== null && personalGenres !== '') {
                personalMovieDB.genres.push(personalGenres);
            } else {
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};



