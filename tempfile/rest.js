//rest operator

// function addNumbers(a,b,c) {
//     return a+b+c
// }

// const res = addNumbers(2,3,4)    //2+3+4=9
// console.log(res)

// function addNumbers(...other) {
//    // console.log(other);
//     return other.reduce((acc, cur)=> acc + cur,0)
// }
// const res = addNumbers(2,3,4)    //2+3+4=9
// console.log(res)



function addNumbers(...other){ //here we are using the spread operator 
    return  other.reduce((acc,curr) => acc + curr ,0)
}
console.log(addNumbers(1,2,3,4,5,6,7,8,9,10))



const user ={
username : "Talal Ahmad",
price : 499,
welcomeMessage : function(){
        console.log(`${this.username} ,welcome to the website`);
        console.log(this)
}
}

user.welcomeMessage()