//09-09-2025

// const addTwo = (num1,num2) =>(
//      num1+num2
// )
// console.log(addTwo(3,4));


// const addThreeNumbers =(num1,num2,num3) => num1 + num2 + num3
//         console.log(addThreeNumbers(1,2,3));


// const anotherSum =(num1,num2) => ({username :"Talal"})
//     console.log(anotherSum(3,4));

// const a ="5" + 2;
// console.log(typeof(a));

// a= "5";
// console.log(typeof(a));

// coercion

// function one(){
//     console.log("one")
//     two()
// }
// function two(){
//     console.log("two")
//     three()
// }
// function three(){
//     console.log("three")
// }
// one();


// three()---> pop
// two() --->pop
// one()--> pop

// console.log("pehle");
// setTimeout(() => {
//   console.log("Macro point");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise resolved(micro)");
// });
// console.log("test");

/** pehle
    test
    promise
    macro
 */

const c = () => {  name: "alpha" }; //undifined
const d = () => ({ name: "beta" }); 
console.log(c())
console.log(d())