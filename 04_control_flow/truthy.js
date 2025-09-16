// const userEmail = "talalahmad@gmail.com"
// if (userEmail) {
//     console.log("Got user email")
// }else{
//     console.log("Not got users email")
// }

// const userEmail2 =0;
// const userEmail2 = "alpha" ? console.log("Got user email"): console.log("Not got users email");


//falsy values----- false, 0 ,-0, BigInt 0n, "", null,undefined,NaN

//truthy values---  "0",'false'," ",[],{}, function(){}---empty function



//how to detect array is empty

// const userEmails =[];
// if (userEmails.length ===0) {
//    console.log("Array is empty");
   
// }
// //How to detect object is empty
// const emptyObj ={};
// if (Object.keys(emptyObj).length===0) {
//    console.log("Object is empty");
// }

//Nullish Coalescing Operator(??) : null undefined
let val1,val2,val3,val4;
val1 = 5 ?? 10;
val2 = null ?? 10;
val3 = undefined ?? 20;
val4 = null ?? 10 ??20
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

//ternary operator
//condition ? true :false
const iceteaprice = 100;
iceteaprice <= 80 ? console.log("less then 80"): console.log("greater then 80");




