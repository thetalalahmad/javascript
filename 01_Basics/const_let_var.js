
{
    var x = 1;
    let y = 2;
    const z = 3;
}

console.log(x); // ✅ Works: 1 (var is function/global scoped)
//console.log(y); // ❌ Error: y is not defined
//console.log(z); // ❌ Error: z is not defined
// var escapes the block {} — it’s not block-scoped.
// let and const are block-scoped, so they vanish outside {}.
//******************************************************************************************* //

// var, let, and const declarations
// var is function-scoped or globally scoped, while let and const are block-scoped.

// var a = 10;
// var a = 20; // ✅ Allowed
// console.log(a); // 20

//let b = 10;
// let b = 20; //❌ Error: Identifier 'b' has already been declared
// console.log(b); // 20
// const c = 10;
// const c = 20; ❌ Error: Identifier 'c' has already been declared


//************************************************************************************* //


//For const, only the binding is constant — objects/arrays inside can still change (tricky part ahead).


// let p = 5;
// p = 6; // ✅ Allowed
// console.log(p); // 6
const q = 5;
// q = 6; //❌ Error: Assignment to constant variable
//************************************************************************************** //


//Const and Objects (Important!)

// const person = { name: "Talal" };
// person.name = "Ahmad"; // ✅ Allowed (modifying property)
// console.log(person); // { name: "Ahmad" }

// person = { name: "New" }; ❌ Not allowed (reassigning reference)

const person = { name: "Talal" };

// ✅ We can change inside the object
person.name = "Ahmad";
person.age = 22;

console.log(person); 
// { name: "Ahmad", age: 22 }

// ❌ But we can't make 'person' point to a new object
//person = { name: "New Name" }; // Error: Assignment to constant variable

const numbers = [1, 2, 3];

// ✅ We can modify contents
numbers.push(4);   // Add
numbers[0] = 100;  // Change
console.log(numbers); // [100, 2, 3, 4]

// ❌ But we can't assign a new array
//numbers = [9, 8, 7]; // Error :Assignment to constant variable.

//************************************************************************************** //

// Hoisting

// All three are hoisted to the top of their scope.

// Difference:

// var → initialized with undefined, can be used before declaration (bad practice).

// let & const → Temporal Dead Zone (TDZ) until the line of declaration — using them before declaration throws an error.

console.log(a); // undefined
var a = 5;

// console.log(b); // ❌ Error: Cannot access 'b' before initialization
// let b = 5;

console.log(c); // ❌ Error: Cannot access 'c' before initialization
const c = 5;
