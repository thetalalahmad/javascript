/******************************************  Normal array spread operator working   ****************************************************88*/
// const nums1 = [1,2,3,4,5]
// const nums2 = [6,7,8,9]

// const joinedArray = [...nums1,...nums2];
// console.log(joinedArray);



/*************************************************     object in spread operator *************************************************************/
const user = {
    name : "talal",
    age : 25
}

const updatedUser = {...user , 
    city: "Banglore"
}
//console.log(updatedUser);


function add(){
    let sum =0;

}


// const names = ["Vivek","Muskan", "Peter"]

// function getNames(name1,name2,name3){
//         console.log(name1,name2,name3)
// }
// getNames(...names)

/*************************************mixer of rset and spread operator*****************************************************/
const names = ["Vivek","Muskan", "Peter"]

function getNames(...names){
        console.log(...names)
}
getNames(...names)