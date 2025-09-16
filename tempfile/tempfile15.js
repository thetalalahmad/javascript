// function revNum(num){
//     let reversed = 0;
//     let n =num;

//     while(n != 0){
//         let lastdigit = n %10;
//         reversed = reversed *10 +lastdigit;
//     }
// }

// const num = 12345;
// let reversed = "";
// num.toString().split("").forEach(cu => {
//   reversed = cu + reversed;  
// });
// console.log(Number(reversed));

// const num =12345;
// const reversed =num.toString().split("").reduce((a,curr) => curr + a,"");
// console.log(Number(reversed));

// const newstring ="Talal";
// const reversed = newstring.toString().split("").reduce((a,cur)=> cur +a,"");
// console.log(String(reversed));
// console.log(typeof reversed);

// const arr =["my name is talal"];
// const reversed =arr[0].split(" ").reverse().join(" ");
// console.log(reversed);

// const arr =["my name is talal"];
// const reversed = arr[0].split("").reverse().join("");
// console.log(reversed);

//["my" "name " "is" " talal"]

//const arr =["my" ,"name ", "is", " talal"];
// const reversed = arr.reverse().join(" ");
// console.log(reversed);

// const arr =["my" ,"name ", "is", " talal"];
// const reversedWords =[];
// arr.forEach(word => {
//     let reversed = word.split("").reverse().join("");
//     reversedWords.push(reversed);
// });
// console.log(reversedWords);

const arr =["my" ,"name", "is", "talal"];
const reversedWords =[];
arr.forEach(word => {
   let reversed=word.split("").reduce((acc,cur)=>cur+" "+acc, " ").trim();
   reversedWords.unshift(reversed);
});
console.log(reversedWords.join(" "));





