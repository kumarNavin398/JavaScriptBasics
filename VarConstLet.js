/* Scope of var
Scope essentially means where these variables are available for use.
 var declarations are globally scoped or function/locally scoped.*/

  Example:1
    /*var tester = "hey hi";
    
    function newFunction() {
        var hello = "hello";
    }
    console.log(hello); // error: hello is not defined */

    //var variables can be re-declared and updated
    //Example:-2

    /*var greeter = "hey hi";
    var greeter = "say Hello instead"; */

    //Example:-3
    /* var greeter = "hey hi";
    var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead"; 
    }
    
    console.log(greeter) // "say Hello instead" */

    // let

    // let is now preferred for variable declaration. It's no surprise as it comes as an improvement to var declarations
    //let is block scoped

    //Example:1

     /* let greeting = "say Hi";
     let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);// "say Hello instead"
    }
   console.log(hello) // hello is not defined */

   //let can be updated but not re-declared

   //Example:-2

  /* let greeting = "say Hi";
    greeting = "say Hello instead";

    console.log(greeting) // say Hello instead */
    
    //this will return an error:

    Example:3

    /*   let greeting = "say Hi";
    let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared */

    //However, if the same variable is defined in different scopes, there will be no error:

   // Example:4

        /*let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting); // "say Hello instead"
    }
    console.log(greeting); // "say Hi"*/

    /*Const:-Variables declared with the const maintain constant values.
             const declarations share some similarities with let declarations.
             Every const declaration, therefore, must be initialized at the time of declaration.*/

    // Example:1
    /*const greeting = "say Hi";
    greeting = "say Hello instead";// error: Assignment to constant variable.*/

     //Example:-2
     /*const greeting = "say Hi";
    const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared.*/  

    //Example:3
    //const object cannot be updated, the properties of this objects can be updated.

     /*const greeting = {
        message: "say Hi",
        times: 4
    }
    console.log(greeting.message)//say Hi 

    greeting.message = "say Hello instead";
    console.log(greeting.message)*/