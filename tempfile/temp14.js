// const heroes=[ "hero1", "hero2","hero3"];
// const marvel_heroes =["thor",...heroes]
// console.log(marvel_heroes);

// const heroes=[ "hero1", "hero2","hero3"];
// const marvel_heroes =["thor","ironman"];
// heroes.push(...marvel_heroes);
// console.log(heroes);
// console.log(heroes[3]);

// heroes.concat(marvel_heroes);
// console.log(heroes)


const heroes = ["hero1", "hero2", "hero3"];
const marvel_heroes = ["thor", "ironman","superman"];
const [...otherdata] = marvel_heroes;
// console.log(thor);    
console.log(otherdata);  
// heroes.push(thor);
// console.log(heroes);
console.log(marvel_heroes);