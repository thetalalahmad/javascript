// function 
// argument pass(...)

// inp = add(1,2,3,4,5,6,7,8,9)

//function addNumber(...num2){
  //return num2.reduce((a,b)=> a+b)
// let sum =0;
//      num2.forEach(num1 =>{
//     sum = sum + num1;
//   } );
//   return sum;
//     let sum =0;
//     num2.map(num1 => {              //map is disguided
//         sum = sum +num1;
//     });
//     return sum;
// }
// console.log(addNumber(1,2,3,4,5,6,7,8,9));


// function display(...name){
//      //console.log(name);
//     return name.join(' ')
// }
// const result = display("hi","talal","ahmad");
// console.log(result);


//const arr = 4;
// function Factorial(...number){
//    // 4= 4*3*2*1
//         number.reduce((acc,curr)=> acc *curr ,1 );
// }

// const input = 4;
// const result = Factorial(4)

// function Factorial(num){
//         if (num ===0 || num===1){
//             return 1;
//         }
//         // let result = 1;
//         // for (let i = 2; i <= num; i++) {
//         //     result = result*i;
//         // }
//         // return result

//         return num.reduce((result, num) => result * Factorial(num), 1);
// }

// const newresult = Factorial(4);
// console.log(newresult);

function factorial(...numbers) {
  function factorialdata(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1){return 1;
  }
    return n * factorialdata(n - 1);
  }
  
  return numbers.reduce((result, num) => result * factorialdata(num), 1);
}
console.log(factorial(4));













