const accountId =1234
let accountEmail = "talalahmad@gmail.com"
var accountPassword = "12345678"
accountCity = "Jaipur" //gets created a global variable automaticallay

let accountState;  //accountState is daclared but not initialized so that it is---->>undefined
//accountId= 2    // not allowed(because const variable can't be reassigned. )
accountEmail ="talal@gmail.com" //allowed because it is created with let keyword
accountCity = "Delhi" //allowed because it is a global variable and can be reassigned
accountPassword = "1234567890" //allowed because var can be reassigned
console.log(accountId);
/*Prefer not to use var keyword
because of issue in block scope and functional scope   */
console.table([accountEmail, accountCity, accountPassword,accountState]);


//----------->>>>>>> Practice
// {
//     var x =1;
//     let y =2;
//     const z = 3;
// }
// console.log(x);
//console.log(y); //bcz of the scoped- bounded
//console.log(z); //bcz of the scoped- bounded


// let b = 2;
// let b =10;      //SyntaxError: Identifier 'b' has already been declared

// const c =10;
// const c =20;  ////SyntaxError: Identifier 'c' has already been declared

// let p = 5;
// p = 6; //allowed 
// console.log(p); 

// const  q = 5;
// q =6; //TypeError: Assignment to constant variable.
// log(q);

//const and object

// const person =  {
//     name  :"talal",
//     id : 123
// }
// person.name = "Danish"; //You are not reassigning the object.Instead, you are updating the name property inside the object.This is perfectly allowed.
// person.address = "Delhi"; //adding property is also allowed
// console.log(person);
//const person = { name : "NewName"}
//SyntaxError: Identifier 'person' has already been declared

// const settings = {
//   theme: "dark",
//   fontSize: 14
// };

// Freeze the object
// Object.freeze(settings);

// Attempt to modify a property
// settings.theme = "light"; // This change will be ignored in strict mode, or fail silently
// console.log(settings.theme)
const newObj = {
    theme : "dark",
    font: "Arial",
    newObjtwo: {
        limitedtheme : "MattBlack Edition"
    },
    newObjtthree: {
        limitedtheme : "MattBlack Edition"
    }
}
Object.freeze(newObj.newObjtwo)
newObj.newObjtwo.limitedtheme = "talal";
newObj.theme ="red"
console.log(newObj);


const myObject = {};  //or use-->[]
myObject[1] = "One"; 
console.log(myObject[0]);
console.log(myObject[1]);


// const numbers = [1,2,3]; 
// numbers.push(4);
// numbers.push(5);
// console.log(numbers);
// numbers[0]=100;
// console.log(numbers);

// numbers = [6,7,8,9,10] //TypeError: Assignment to constant variable.