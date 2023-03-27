// you can also pass a function as an argument to a function.
// This function that is passed as an argument inside of another function is called a callback function.

// Example:-1

// function
/*function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
   console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);*/

// Benefit of Callback Function:-
//The benefit of using a callback function is that you can wait for 
//the result of a previous function call and then execute another function call.

//Example:-2
/*function greet() {
    console.log('Hello world');
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function
setTimeout(greet, 2000);
sayName('John');*/

// Callback Function Example:-3

function greet(name, myFunction) {
    console.log('Hello world');

    // callback function
    // executed only after the greet() is executed
    myFunction(name);
}

// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 8000, 'John', sayName);