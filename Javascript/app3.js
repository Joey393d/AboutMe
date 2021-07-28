'use strict';
console.log('app2.js is now connected')

var chances = 4;
// var tries = 0;
var number = 7;




while(chances > 0){
  var guess = prompt("pick a number between 1 and 15");

  if (guess === number) {
    alert("You are correct! It took you " + tries + " guesses!")
   } else {
    if (guess < number) {
    alert("Too low! try again!")
     tries += 1;
    }
  if (guess > number) {
     alert("Too high! try again!")
     tries += 1;
   }
  }
  }
