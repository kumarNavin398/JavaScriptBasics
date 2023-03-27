/*console.log("Hello world")

let add = (x, y) => console.log(x + y);
 add(2,3);

let mul = (x,y) => console.log(x * y);
mul(5,6);

let div = (x,y) => console.log(x/y)
div(30,5)

//  program that shows the delay in execution

function greet() {
    console.log('Hello world');
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function
setTimeout(greet, 2000);
sayName('John');*/

const dates =[{name: "navin", profession:"software eng"},
              {name: "parvin", profession:"software eng"}
                ];
   function getdates(){
    setTimeout(() => {
        let output="";
        dates.forEach((data,index) => {
         output += `${data.name} ${data.profession} `
        })
        console.log(output)
    }, 1000);
   }         
   getdates()    