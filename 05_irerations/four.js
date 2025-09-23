// const myObject = {
//     js: 'javascript',
//     cpp: 'c++',
//     rb: 'ruby',
//     swift: 'swift by apple'
// }

// for (const key in myObject) {
//     console.log(` ${key} :- ${myObject[key]}`);
// }

// const programming = ["js", "java", "ruby", "python", "swift", "cpp"];
// for (const key in programming) {
//     console.log(programming[key]);
// }

const map = new Map()
map.set("IN", "India")
map.set("FR", "France")
map.set("USA", "United State Of America")
map.set("FR", "France")
map.set("IN", "India")
// console.log(map);

for (const key in map) {
    console.log(key);
}

//map is not iterable here
