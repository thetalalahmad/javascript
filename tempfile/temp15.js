let obj1 = { name: "Ali",
    address : {
        state:"Delhi",
        city:"Shahinbagh",
        semiaddress :{
            newlocal : "thokar no 6"
        }
    } 
 };
// let obj2 = {...obj1}; 
// //obj2.name = "Talal"; 
// obj2.address ="UP"
// console.log(obj1.name);
// console.log(obj1.address);
// console.log(obj2.name);
// console.log(obj2.address);

const alpha=obj1.address.semiaddress.local;
alpha ? console.log("Alpha") : console.log("Beta");


const ob1 ={1 : "a", 2: "b"};
const ob2 = {3 : "c", 4: "d" }

// const ob3 = Object.assign(ob1,ob2);
// console.log(ob3);
// const  ob3 =Object.assign({},ob1,ob2);
// console.log(ob3);
const ob4 = {...ob1,...ob2};
console.log(ob4);


