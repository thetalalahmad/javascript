//arrays

const myArr =[0,1,2,3,4,5]
// console.log(myArr[2]); 
// const myHeros = ["salman","shahrukh", "amir"]
// console.log(myHeros[0]);
// const myArr2 = new Array(1,2,3,4,5,6)
// console.log(myArr2[2]);

//methods of arrays
// myArr.push(6);
// myArr.push(7);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(9);
// console.log(myArr);
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(0));  // true
// console.log(myArr.includes(9));     //false
// console.log(myArr.indexOf(19));     //-1 does not exist
// console.log(myArr.indexOf(2));      //2


//**********************join******************************* */
// const newArr =myArr.join();
// console.log(myArr);
// console.log(typeof myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice 
// console.log("slice")
// console.log("A ",myArr);
// const myNewArr1 =myArr.slice(1,3)
// console.log(myNewArr1);
// console.log("B ",myArr);

//splice
console.log("splice")
console.log("A ",myArr);
const myNewArr2 =myArr.splice(1,3)
console.log(myNewArr2);
console.log("B ",myArr);