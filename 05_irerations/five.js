const coding =["js","java","python","ruby","swift"];
// //normal function callback for forEach
// coding.forEach(function (val){
//     console.log(val);
// })


//arrow function for forEach
// coding.forEach((item)=>{
// console.log(item);
// })

//print me using passing reference in the forEach
// function printme(item){
//     console.log(item)
// }
// coding.forEach(printme)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },

    {
        languageName : "Java",
        languageFileName : "java"
    },

    {
        languageName : "Python",
        languageFileName : "py"
    }
]


myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})