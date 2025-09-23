// const myNums =[1,2,3,4,5,6,7,8,9,10]

// const newNums =myNums.map( (num)=>{ return num +10 })
// console.log(newNums);

// const myNums =[1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.forEach( (num) => {
//     console.log(num)
//     return num +10
// })
// console.log(newNums);
 
const myNumbers =[1,2,3,4,5,6,7,8,9,10];
const newNums=myNumbers
        .map((num)=> num *10)  //map() creates a new array by applying the given function to each element.Each number (num) is multiplied by 10.
        .map((num) => num +1)           //Another map() runs on the result of the first map.Each number is increased by 1.
        .filter((nums) => nums >= 40)  //filter() checks each number. It keeps only those numbers that are >= 40.

console.log(newNums)            //shows the output
