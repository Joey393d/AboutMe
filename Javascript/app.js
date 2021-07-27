'use strict';
console.log('app.js is now connected')


//prompt our user for info
let userName = prompt('what is your name?');
console.log("this is the user input", userName);


//greet the user
alert('hello ' + userName);


//validate
let lowerCaseName = userName.toLowerCase();
console.log('this is userName lowercase', lowerCaseName);

// // validate more user input
// if(lowerCaseName === 'joey' || lowerCaseName === 'bob'){
//     alert('Welcome back to my page, ' + userName + '.');
// } else {
//     alert('Welcome new user, to my page.');
// } 


// //array
// let emptyArray = [];
// console.log(emptyArray);

// let quizAnswers = ['b','c','c','a','e'];

// console.log(quizAnswers[0])