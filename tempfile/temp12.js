// i/p: my NamE is TaLal
// o/p: My Name Is Talal
// let username = "Talal"
// function a() {
//     console.log(username);
// }
// a();
const callmyname ={
    name : "Talal",
    data : function() {
        console.log(`My name is ${this.name}`);
    } 
}
callmyname.data();


