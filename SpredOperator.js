 //spread operator:-The spread operator ... is used to expand or spread an iterable or an array  

  /*   var arr1 =[0,1,2,3];         ;
   var arr2 = [4,5,6];
     var arr3 = [...arr1,...arr2];
     console.log(arr3);*/

// let arrValue = ['My', 'name', 'is', 'Jack'];

// console.log(arrValue);   // ["My", "name", "is", "Jack"]
// console.log(...arrValue);// My name is Jack

//Copy Array Using Spread Operator
/*let arr1 = ['one', 'two'];
let arr2 = [...arr1, 'three', 'four', 'five'];

console.log(arr2); */
//  Output:
//  ["one", "two", "three", "four", "five"]

//Clone Array Using Spread Operator

//let arr1 = [ 1, 2, 3];
//let arr2 = arr1;

//console.log(arr1); // [1, 2, 3]
//console.log(arr2); // [1, 2, 3]

// append an item to the array
//arr1.push(4);

//console.log(arr1); // [1, 2, 3, 4]
//console.log(arr2); // [1, 2, 3, 4]

   //  var arr5 = [7,8,9,6];

// var arr6 = [...arr5];

//     console.log(arr6);

 let arr1 = [ 1, 2, 3];

// copy using spread syntax
//let arr2 = [...arr1];

//console.log(arr1); // [1, 2, 3]
//console.log(arr2); // [1, 2, 3]

// append an item to the array
arr1.push(4);

//console.log(arr1); // [1, 2, 3, 4]
//console.log(arr2); // [1, 2, 3]

//  Spread Operator with Object

//let obj1 = { x : 1, y : 2 };
//let obj2 = { z : 3 };

// add members obj1 and obj2  to obj3
//let obj3 = {...obj1, ...obj2};

//console.log(obj3); // {x: 1, y: 2, z: 3}

  // Equate to
//    var obj1 = {
//        name1: "bihar",
//        pin : 841415,
 //   };

  //  var obj2 = {
   //     name2: "up",
    //    pin2 : 525266,
   // }

    // var mergeobj = {...obj1, ...obj2};

    // console.log(mergeobj)

// cloneobject

//var cloneobj = {...obj1};
//console.log(cloneobj);

let names = ["navin", "parvin", "ishu","ishan"];

function getName(name1,name2,name3){
  console.log(name1,name2,name3);
}
getName(...names)
