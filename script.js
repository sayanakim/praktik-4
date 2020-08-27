/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

// #1 Все функции поместили во внутрь объекта 'personalMovieDB', создали методы объекта
// Переменную 'numberOfFilms' удалили и в функции заменили на наименование объекта
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const  a = prompt('Один из последних просмотренных фильмов?', ''),    
                   b = prompt('На сколько оцените его?', '');
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                //Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
                //отменить ответ или ввести название фильма длинее, чем 50 символов
    
                personalMovieDB.movies[a] = b;// если ответил на все вопросы
                console.log('done!');
            } else {
                console.log('error!');
                i--;//Если оставил пустые сообщения - возвращаем пользователя к вопросам опять
                }          
       
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log('Произошла ошибка');
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() { // #2
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function(one, two, three) {

        //#1 способ

        //for (let i = 1; i <= 3; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            
            // if (genre === '' || genre == null) { // #3
            //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //     i--;
            // } else {
            //      personalMovieDB.genres[i - 1] = genre;
            // }     
         
         // #2 способ
            
        for (let i = 1; i < 2; i++) {

            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();// приводит в нижний регистр для правильной сортировки
            
            if (genres === '' || genres == null) { // #3
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                 personalMovieDB.genres = genres.split(', ');
                 personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};


