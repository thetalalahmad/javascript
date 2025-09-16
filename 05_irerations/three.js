// ["","",""]
// [{},{},{}]


//********       for of loop  */
// const arr = [ 1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

const greetings = "Hello World";

// for (const greet of greetings) {
//     // if(greet===" "){
//     //     continue;        //this will ignore the first space the greeting string 
//     // }
//     console.log(greet)
// }
const map = new Map()
map.set("IN", "India")
map.set("FR", "France")
map.set("USA", "United State Of America")
map.set("FR", "France")
map.set("IN", "India")
console.log(map);

for (const key of map) {
    console.log(key)
}

for (const [key,value] of map) {
    console.log(key ,":-", value)
}






