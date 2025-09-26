"use strict"; // treat all JS code as newer version

/*Variables must be declared before use

"use strict";
x = 10; // ❌ Error: x is not defined


No duplicate parameter names

"use strict";
function test(a, a) { // ❌ Error
  console.log(a);
}


this in functions is undefined instead of window

"use strict";
function myFunc() {
  console.log(this); // undefined
}
myFunc();


(Without strict mode, it would point to the global object like window in browsers.)

Assignment to read-only properties throws an error

"use strict";
const obj = {};
Object.defineProperty(obj, "x", { value: 42, writable: false });
obj.x = 9; // ❌ TypeError


Octal literals are not allowed

"use strict";
let num = 010; // ❌ SyntaxError


delete on variables, functions, or parameters is not allowed

"use strict";
let y = 5;
delete y; // ❌ SyntaxError

🔹 Where to use it?

At the top of a script file:

"use strict";
// Whole file is in strict mode


Inside a function:

function demo() {
  "use strict";
  // Only this function is strict
}


✅ In short: "use strict"; helps you write cleaner, safer code by avoiding silent errors. */






// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")

//------>>>Data types

let name = "hitesh"                       //string
let age = 18                             //Number
let isLoggedIn = false                  // Boolean   
let state;                              //undefined

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object---Correct way to check for null

// Since typeof is unreliable for null, we use strict equality:
let x = null;
console.log(x === null); // true ✅


// Or use Object.prototype.toString:
console.log(Object.prototype.toString.call(null)); // "[object Null]"

