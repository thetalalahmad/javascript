// singleton --->> literal ki tarah me singleton nhi banta
                  //contractor me singleton banta h
//Object.create --->> singleton

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

//console.log(JsUser.greeting(),"1"); // (because console.log prints what the function returns, 
// but your function doesn’t return anything, it just logs → so it shows undefined).


//console.log(JsUser.greeting,"2");   // it will only return the function reference 

//JsUser.greeting();
console.log(JsUser.greetingTwo());
JsUser.greetingTwo();

