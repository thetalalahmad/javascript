const myArr = [1,2,3,4,5];
// myArr.push(6);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);
// myArr.unshift(9);
// console.log(myArr);
// myArr.shift();
// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// const newArr =myArr.join();
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

//slice => Returns a copy of a section of an array. 
// For both start and end, a negative index can be used to indicate an offset from the end of the array.
//  For example, -2 refers to the second to last element of the array.
// @param start
// The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
// @param end
// The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
