// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope before the code is executed.
var myVar; // Declaration is hoisted and initialized as undefined
console.log(myVar);
myVar = "Hello, world!"; // Assignment happens here
console.log(myVar);

 //console.log(myLet); // Throws ReferenceError: Cannot access 'myLet' before initialization

let myLet = "Hello!"; // End of TDZ for myLet

//--->>> Function declarations
// For function declarations, the entire function body is hoisted. This means you can call a function before it is declared in your code.

sayHello(); // Outputs: "Hello there!"
function sayHello() {
  console.log("Hello there!");
}
//Note: This only works for function declarations, not function expressions (functions assigned to variables).
// sayHi(); // Throws TypeError: sayHi is not a function

var sayHi = function() {
  console.log("Hi!");
};
//In this case, the variable sayHi is hoisted and is undefined when called, which is not a function.

console.log(a);
var a = 10;
console.log(b);
let b = 20;  //ReferenceError: Cannot access 'b' before initialization

sayHello();
function sayHello() {
  console.log("Hello, Talal!");
}

greet();
var greet = function() {
  console.log("Hi!");
}//TypeError: greet is not a function 

test();
function test() {
  console.log("Hoisted!");
}//This works because of hoisting, a core mechanism in JavaScript.

add(2, 3);
function add(x, y) {
  console.log(x + y);
}//5

subtract(5, 2);
var subtract = function(x, y) {
    console.log(x - y);
}

console.log(typeof myFunc);
var myFunc = function() {};
//output --undefined

/*## What is the TDZ? 🚫
When JavaScript code runs, let and const declarations are hoisted (conceptually moved to the top of their block), but they are not initialized. The TDZ is the "zone" of code from the start of the block {} until the line where the variable is actually declared.

If you try to access a variable while it's in the TDZ, JavaScript will throw a ReferenceError*/

console.log(x);
let x;//ReferenceError: Cannot access 'x' before initialization

{
  console.log(y);
  let y = 5;
}   //ReferenceError: Cannot access 'y' before initialization

{
  console.log(z);
  var z = 100;
}       //undefined




