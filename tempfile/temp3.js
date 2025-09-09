const obj1 = {
    fullname : "talal ahmad",
    city : "greater noida",
    getdetaail : function(){
        console.log(`${this.fullname}`);
        console.log(`${this.city}`);
    }
};

const obj2 = {
    fullname : "danish bhai",
    city: "Banglore"
};
console.log(obj1.fullname);
console.log(obj1.city);
console.log(obj1.getdetaail(obj2));


