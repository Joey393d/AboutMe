'use strict';
console.log('app2.js is now connected')

var chances = 4;
// var tries = 0;
var number = 7;



var yes = prompt("pick a number between 1 and 15");

while(chances > 1){
  var guess = parseInt(yes, 10);
  if (guess === number) {
    alert("You are correct!");
    break;
  } else {
    chances--;
    // yes = prompt("Try again!");
    if (guess > number) {
      alert("Too high!");
      yes = prompt("Try again!")
    }
    if (guess < number) {
      alert("Too low!");
      yes = prompt("Try again!")
    }
  }
  


}
