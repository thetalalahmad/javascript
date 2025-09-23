let employee = {
    eid: "E102",
    ename: "Talal",
    eaddress: "Ghazipur",
    salary: 50000
}
console.log("=========Deep Copy========");
let newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
console.log("---------After modification---------");
newEmployee.ename = "Talha";
newEmployee.salary = 70000;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);

