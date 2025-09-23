// const fruits = ['Mango', 'Banana','Kiwi','Apple']
// const myfruits = fruits;   // In JavaScript, arrays are objects. When you do this, myfruits does not create a new copy .Instead, myfruits points to the same memory location as fruits.
// myfruits.push('Watermelon')
// myfruits.push('Grapes')
// console.log("1--",fruits);        //Since both fruits and myfruits point to the same array, Adding items through myfruits also changes fruits.
// console.log("2--",myfruits);

//using of shallow copy using spread operator
// const fruits = ['Mango', 'Banana','Kiwi','Apple'];
// const myfruits = [...fruits];  // creates a shallow copy

// myfruits.push('Watermelon');

// console.log(fruits);   // [ 'Mango', 'Banana', 'Kiwi', 'Apple' ]
// console.log(myfruits); // [ 'Mango', 'Banana', 'Kiwi', 'Apple', 'Watermelon' ]


//object

// const user1 = {
//     firstname : "Talal",
//     lastname: "Ansari"
// }

// const user2 = user1;
// user2.lastname ="Ahmad"
// console.log(user1);
// console.log(user2);


// const user1 = {
//     firstname : "Anurag",
//     lastname: "Singh"
// }
// //const user2 ={}
// const data =Object.assign({},user1)  //assign(target,current)
// console.log(user1);
// console.log(data);
// data.lastname = "Pandey";
// console.log(data);
// console.log(user1);


// let employee = {
//     eid: "E102",
//     ename: "Talal",
//     eaddress: "Ghazipur",
//     salary: 50000
// }
/***********************************shallow copy example*****************************/
// console.log("Employee=> ", employee);
// let newEmployee = employee;    // reference
// console.log("New Employee=> ", newEmployee);

// console.log("---------After modification----------");
// newEmployee.ename = "Talha";
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);


// Name of the employee as well as 
// newEmployee is changed.





/***********************************deep copy example*****************************/
// let employee = {
//     eid: "E102",
//     ename: "Talal",
//     eaddress: "Ghazipur",
//     salary: 50000
// }
// console.log("=========Deep Copy========");
// let newEmployee = JSON.parse(JSON.stringify(employee));
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);
// console.log("---------After modification---------");
// newEmployee.ename = "Talha";
// newEmployee.salary = 70000;
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);





const lodash = require('lodash');
let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000,
    details: function () {
        return "Employee Name: " 
            + this.ename + "-->Salary: " 
            + this.salary;
    }
}

let deepCopy = lodash.cloneDeep(employee);
console.log("Original Employee Object");
console.log(employee);
console.log("Deep Copied Employee Object");
console.log(deepCopy);
deepCopy.eid = "E103";
deepCopy.ename = "Beck";
deepCopy.details = function () {
    return "Employee ID: " + this.eid 
        + "-->Salary: " + this.salary;
}
console.log("----------After Modification----------");
console.log("Original Employee Object");
console.log(employee);
console.log("Deep Copied Employee Object");
console.log(deepCopy);
console.log(employee.details());
console.log(deepCopy.details());



