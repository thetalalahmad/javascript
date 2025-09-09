// function sayMyName(){
//     console.log("Talal");
// }
// sayMyName // reference of the function
// sayMyName(); //reference + execution 

// //function with parameters

// function addTwoNumbers(number1,number2){
//     console.log(number1 +number2);
// }
// addTwoNumbers();  //NaN
// addTwoNumbers(3,7); //10


//method 2
// function addTwoNumbersM2(number1 , number2){
//     console.log(number1 + number2);
// }
// const result =addTwoNumbersM2(3,5);
// console.log (result);

//case3
// function addTwoNumbersM3(number1 , number2){
//   let result =number1 + number2;
//     return result;
//     console.log("Hitesh"); // after return nothing will be executed
// }
// const result = addTwoNumbersM3(10,20);
// console.log(result);



//default parameters
// function loginUserMessage(username){
//     return `${username} just logged in`;
// }
//console.log(loginUserMessage("Talal")); //talal just logged in
//console.log(loginUserMessage());         //undifined just logged in
//console.log(loginUserMessage(""));          //just logged in

//default parameters + Validation
function loginUserName(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserName());


//method 2
function loginUserName(username){
    if(!username){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

console.log(loginUserName());
 