/*Immediately Invoked Function Expressions*/

//method1 ---named iife

(function chai(){
    console.log(`DataBase Connected`);
})();

//method2 -- unnamed iife
(  ()=> {
    console.log(`Database Connected 2`);
})();

//method3 --parameter passing in arrow function
((name)=>{
    console.log(`DB CONNECTED ${name}`);
})('Talal Ahmad')