//asynchronous means not occurring at the same time.

//Example:-1

/*function printMe() {
  console.log('print me');
}

function test() {
  console.log('test');
}

setTimeout(printMe, 2000);
test();*/

//Example:-2

function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function main() {
    console.log('main');
    
    setTimeout(f1, 0);
    
    f2();
}

main();