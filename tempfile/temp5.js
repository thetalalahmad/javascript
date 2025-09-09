function f1(str){
console.log("trim",str.trim());
return str.trim().toUpperCase();
}

// let String1 = "Talal  ";
// f1(String1);
// let String2 =" Ahmad ";
// f1(String2);
// let firstobject = new String("Talal Ahmad");
// f1(firstobject);

let firstobject ={
            name: "  Talal",
            age: 21,
            collage: "G.U",
            a : function() {
                return f1(this.name);
            }
         
              
};
console.log(firstobject.a());
