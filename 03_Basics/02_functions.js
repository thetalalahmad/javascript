// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,300,400)); // array == [ 200, 300, 400 ];



//case2
// function calculatePrice(val1,val2,...num1){
//     return num1
// }
// console.log(calculatePrice(200,300,400,2000)); //array ==[ 400, 2000 ];


//******object handling

// const user = {
//     username : "Talal",
//     price: 199
// }
// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
// }
// handleObject(user);

// direct pass the object
// handleObject({
//     username : "sam",
//     price : 399
// });

//Array Handling 

const myNewArray= [200,400,600];

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1,2,3,4]));
