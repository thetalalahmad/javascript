// const coding = ["js", "java", "python", "ruby", "swift"];
// const values = coding.forEach((item) => {
//      //console.log(item)
//     return item
// })
// console.log(values);

// forEach() is meant for side effects(like logging, updating, pushing to another array).
// It does not create or return a new array.

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((nums) => nums > 4)
// console.log(newNums);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((nums) => {
//     return nums > 4
// })
// console.log(newNums);
/*Now you used {} → this means a function body.

But you forgot return

So each callback returns undefined.

filter thinks condition = false for every element. */

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = []
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums)
/*--------------------------------------------------------------------------------*/

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992 },
    { title: 'Book Three', genre: 'History', publish: 1999 },
    { title: 'Book Four', genre: 'Science', publish: 2009 },
    { title: 'Book Five', genre: 'History', publish: 1986 }
]

// let userBooks = books.filter((bk) => bk.genre === 'History')
// console.log(userBooks);
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);