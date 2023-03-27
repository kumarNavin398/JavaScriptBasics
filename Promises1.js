//a promise is a good way to handle asynchronous operations.
// It is used to find out if the asynchronous operation is successfully completed or not.

//const myFirstPromise = new Promise((resolve, reject) => {
 
  //setTimeout(() => {
  //  resolve("Success!"); 
  //}, 250);
//});

//myFirstPromise.then((successMessage) => {
  
  //console.log(`Yay! ${successMessage}`);
//});

//Example 1: Program with a Promise

//const count = true;

//let countValue = new Promise(function (resolve, reject) {
  //  if (count) {
    //    resolve("There is a count value.");
    //} else {
      //  reject("There is no count value");
   // }
//});

//console.log(countValue);

//Example 2: Chaining the Promise with then()


// returns a promise

//let countValue = new Promise(function (resolve, reject) {
  //resolve("Promise resolved");
//});

// executes when promise is resolved successfully

//countValue
  //.then(function successValue(result) {
    //console.log(result);
  //})

  //.then(function successValue1() {
    //console.log("You can call multiple functions this way.");
  //});

// JavaScript catch() method:-The catch() method is used with the
// callback when the promise is rejected or if an error occurs

// Example:-

// returns a promise
let countValue = new Promise(function (resolve, reject) {
   reject('Promise rejected'); 
});

// executes when promise is resolved successfully
countValue.then(
    function successValue(result) {
        console.log(result);
    },
 )

// executes if there is an error
.catch(
    function errorValue(result) {
        console.log(result);
    }
);