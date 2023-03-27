/* ArrowFunction:-Arrow functions  a new feature introduced in ES6
  enable writing concise functions in JavaScript. While both regular and arrow functions work in a similar manner */

 /* Syntax: Regular function.
 let x = function function_name(parameters){
    body of the function
};  */

//Example:-1
/*let square = function(x){
      return (x*x);
    };
    console.log(square(9));*/

//  Syntax: Arrow function.

    /* let x = (parameters) => {
    // body of the function
 };*/

//Example:-1
   /* var square = (x) => {
        return (x*x);
    };
    console.log(square(9)); */


    //Use of this keyword: Unlike regular functions, arrow functions do not have their own this. 

    /* let me = { 
 name: "Ashutosh Verma", 
 thisInArrow:() => { 
 console.log("My name is " + this.name); // no 'this' binding here 
 }, 
 thisInRegular(){ 
 console.log("My name is " + this.name); // 'this' binding works here 
 } 
};
me.thisInArrow(); 
me.thisInRegular(); */


//Availability of arguments objects: Arguments objects are not available in arrow functions, but are available in regular functions
//Example:-Regular function
/* let user = {   
        show(){
            console.log(arguments);
        }
    };
    user.show(1, 2, 3); 
    o/p-[Arguments] { '0': 1, '1': 2, '2': 3 } */
 
    //Example ArrowFunction:-


   /* let user = {   
            show_ar : () => {
            console.log(...arguments);
        }
    };
    user.show_ar(1, 2, 3);
    o/p:-Argument is not defined */

    function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();