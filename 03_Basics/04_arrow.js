// const user ={
//     username : "Talal",
//     price : 999,

//     welcomeMessage : function (){
//         console.log(`${this.username} ,welcome to website`)
//         console.log(this);
//     }
// }
// user.welcomeMessage();
// user.username ="sam";
// user.welcomeMessage();

// console.log(this);

// function chai(){
// let username ="Talal Ahmad";
//     console.log(this.username);
//     console.log(this);
// }
// chai();

// const chaii = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chaiii =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit invokes

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo())


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()