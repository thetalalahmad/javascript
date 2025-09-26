
let score = 33

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
// null => 0
// undefined => NaN
// "talal"   => NaN

let isLoggedIn = "Talal"

let booleanIsLoggedIn = Boolean(isLoggedIn)
  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true 

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
 console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);



// console.log(true)
// console.log(+true);
// console.log(+"");
/*console.log(+true): The + operator converts the boolean true into a number. In JavaScript, true coerces to 1. (Similarly, false would coerce to 0).

console.log(+""): The + operator converts the empty string "" into a number. An empty string is treated as a "falsy" value that coerces to 0.*/




let num1, num2, num3
num1 = num2 = num3 = 2 + 2
console.log(num1);
console.log(num2);
console.log(num3);

 

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion