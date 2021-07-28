'use strict';
console.log('app2.js is now connected');


let favFood = ['pizza', 'pudding', 'grapes'];
let attempts = 6;


var user = prompt("What is my favorite food?");
while (attempts > 1){
    var lowerCaseFood = user.toLowerCase;
    if (favFood === lowerCaseFood){
    alert("That's right!");
} 
//   else {
//         attempts--;
//         user= prompt("That sounds pretty good, but try again.")
//     }


}




















let myName = prompt('First is an easy one. Is my full first name Joseph?')
console.log("this is the user input", myName)

let lowerCaseName = myName.toLowerCase();
console.log('this is answer lowercase', lowerCaseName)

if(lowerCaseName === 'y' || lowerCaseName=== 'yes' ){
    //console.log('You are correct!');
    alert('You are correct!');
}   else {
    //console.log('Sorry, that is wrong...')
    alert('Sorry, that is wrong...')
};

let favColor = prompt('Second is a little harder, is my favorite color purple?')
console.log("this is the user input", favColor)

let lowerCaseColor = favColor.toLowerCase();
console.log('this is answer lowercase', lowerCaseColor)

if(lowerCaseColor === 'y' || lowerCaseColor === 'yes' ){
    // console.log('You are correct!');
    alert('You are correct!');
}   else {
    //console.log('Sorry, that is wrong...')
    alert('Sorry, that is wrong...')
};


let amI = prompt('Here is a tough one, am I human?')
console.log("this is the user input", amI)

let loweramI = amI.toLowerCase();
console.log('this is answer lowercase', loweramI)

if(loweramI === 'y' || loweramI === 'yes' ){
    //console.log('Or am I?');
    alert('Or am I?');
}   else {
    //console.log('Really? You dont think so?')
    alert('Really? You dont think so?')
};


let favAnimal = prompt('This one is kinda tough, Is my favorite animal a tiger?')
console.log("this is the user input", favAnimal)

let lowerfavAnimal = favAnimal.toLowerCase();
console.log('this is answer lowercase', lowerfavAnimal)

if(lowerfavAnimal === 'n' || lowerfavAnimal === 'no' ){
    //console.log('Correct! My favorite is a Joey!');
    alert('Correct! My favorite is a Joey!');
}   else {
    //console.log('No sorry.. It is a Joey!')
    alert('No sorry.. It is a Joey!')
};

let favTech = prompt('This one is ezpz, Do I like mac more than windows?')
console.log('This is the user input', favTech)

let lowerfavTech = favTech.toLowerCase();
console.log('this is answer lowercase', lowerfavTech)

if(lowerfavTech === 'n' || lowerfavTech === 'no' ){
    //console.log('Correct! Windows for the win!');
    alert('Correct! Windows for the win!');
}   else {
    //console.log('No sorry.. Windows is superior')
    alert('No sorry.. Windows is superior')
};

