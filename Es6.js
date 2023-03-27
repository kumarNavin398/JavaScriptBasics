//Arrow functions allows a short syntax for writing function expressions.

/* let myFunction = (arg1, arg2, ...argN) => {
    statement(s)
}*/

// Example 1: Arrow Function with No Argument

/*let greet = () => console.log('Hello');
greet(); */

// Example 2: Arrow Function with One Argument

/* let greet = x => console.log(x);
 greet('Hello');*/

// Example 3: Arrow Function as an Expression

/* let age = 5;

 let welcome = (age < 18) ?
           () => console.log('Baby') :
            () => console.log('Adult');

            welcome();*/

// Example 4: Multiline Arrow Functions

 /*let sum = (a,b) => {
    let result = a +b;
    return result;
 }

let result1 = sum(5,6);
console.log(result1);*/


// If the syntax is simple, `{}` and `return` can be omitted. It will look neater

/* const minus = (a,b) => a - b;
 const res = minus(5,2);
 console.log(res);*/

  // Multi-line Strings
/* let greeting = `Hello World,     
                Greetings to all,
                Keep Learning and Practicing!`
                console.log(greeting)*/
//Default parameters                
 //ES6
/*let calculateArea = function(height = 100, width = 50) {  
    // logic
}

//ES5
var calculateArea = function(height, width) {  
   height =  height || 50;
   width = width || 80;
   // logic
}*/

//Template Literals

/*let fname = "parveen"
let last_name = "singh"*/

//console.log(`your name is ${fname} ${last_name}`)

//Destructuring Assignment:-
//Array Destructuring Example
/* let fruits = ["Apple", "Banana"];
let [a, b] = fruits; // Array destructuring assignment
console.log(a, b);*/

//Object Destructuring
/*let person = {name: "Peter", age: 28};
let {name, age} = person; // Object destructuring assignment
console.log(name, age);*/

//Promises

var asyncCall =  new Promise((resolve, reject) => {
   // do something
   resolve();
}).then(()=> {   
   console.log('DON!');
})
