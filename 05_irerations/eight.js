// const myNums =[1,2,3]
// const myTotal=myNums.reduce(function(acc ,cur)  {
//     console.log(`acc:- ${acc} and cur:-${cur}`)
//     return acc + cur
// },0)
//  console.log(myTotal);
// const myNums =[1,2,3]
// const myTotal =myNums.reduce((acc,cur)=> acc+ cur,0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 599
    },
    {
        itemName : "python course",
        price : 699
    },
    {
        itemName : "cpp course",
        price : 799
    },
    {
        itemName : "java course",
        price : 399
    }
]
// const priceToPay = shoppingCart.reduce((acc,item) => acc+item.price ,0)
// console.log(priceToPay);


const maxPrice = shoppingCart.reduce((acc ,item)=> {
    return item.price > acc ? item.price : acc
},0)
console.log(maxPrice);