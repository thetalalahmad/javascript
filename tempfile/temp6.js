//25-08-2025
// function f1(username,age){
//     console.log("username- "+ username + " ,age- "+ age);
// }

// let username1 ="alpha";
// let age1 =114;
// f1(username1,age1);

// let username2 ="beta";
// let age2 =113;
// f1(username2,age2);

// let object ={
//     username : "alpha",
//     age: 114,
//     newfunction :function(){
//         return f1(this.username);
//         return f1(this.age);
//     }
// };
function test(username, age) {
   
  //  const obj = { username, age };
    this.username = username;
   this.age = age;
   console.log(this.age);
   // return obj;
}
const b = new test("a", 20);
const a = new test("b", 30);
console.log(a);
console.log(b);

// let obj ={
//     username:"talal",
//     age:
// };
// const a = "talal is good";
// const newstring = a.split("");
// //console.log(newstring);
// let newword = newstring.charAt(0).toUpperCase();
// //console.log(a);

// a.toString();
// console.log(newstring);
// let arr = [1,5,6,7];
// // arr.push(2, 3, 4);
// arr.pop();
// console.log(arr);

// const a = "talal is good";
// let newstring =a.split(" ");
// let result =[];

// for( let i =0; i<newstring.length; i++)
//     {
//         let word = newstring[i];
//         let newstring2 =word.charAt(0).toUpperCase() + word.slice(1); 
//         result.push(newstring2);
// }

// let finaloutput = result.join(" ");
// console.log(finaloutput);

function CamelCaseing(str){
    let newstring =str.split(" ");
    let result =[];

    for( let i =0; i<newstring.length; i++)
    {
        let word = newstring[i];
        let newstring2 =word.charAt(0).toUpperCase() + word.slice(1); 
        result.push(newstring2);

}

return result.join(" ");
}
console.log(CamelCaseing("talal is good"));
console.log(CamelCaseing("javascript is good language"));
