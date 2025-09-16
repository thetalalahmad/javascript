/**********simple for loop syntax */
//  for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(i);
//  }



//*****************printing table from 1  to 10 
//  for (let i = 1; i <= 10; i++) {
//  // console.log(`Outer loop value: ${i}`);
//   for(let j =1; j <= 10; j++){
//     //console.log(`Inner loop value j ${j} and outer loop value ${i}`)
//     //console.log(i + "*"+j +"="+ (i*j));
//     console.log(`${i} * ${j} = ${i*j}`);

//   }
//  }

// let newArray = ["batman", "flash", "superman"];
// for (let i = 0; i < newArray.length; i++) {
//     const element = newArray[i];
//     console.log(element);

// }


//**************keywords */
// break and continue

// for (let i = 0; i <= 20; i++) {
//     if (i == 5) {
//         console.log ("Value of 5 detected");
//         break        //if the condition detected the loop be terminated (all after the condition detected)
//         }
//   console.log(`Value of i is :${i}`)   
// }


for (let i = 0; i <= 8; i++) {
    if (i == 5) {
        console.log("Value of 5 detected");
        continue       // the given conditon will be skiped(one)
    }
    console.log(`Value of i is :${i}`)
}