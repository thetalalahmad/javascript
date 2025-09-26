//---->>Array
//.flat
//.from
//.of
//.freeze

const a = [{name : "alpha",
            id : 123,
},
{name : "beta",
            id : 123
},
{name : "alpha",
            id : 123
}]

// const b = a.filter((value,index,fullarray) => index === fullarray.findIndex((data)=>data.name === value.name));
// console.log(b);

//flagging way to remove dublicate
const b = {};
const result =[];
for (let i = 0; i < a.length; i++) {
    const val = a[i];
   //console.log(val);
   const data = val.name;
   console.log(`Checking key: ${data}`);
  console.log(`Already seen?`, b[data]);
  if (!b[data]) {
    console.log(`→ New key found. Adding to result.`);
    b[data] = true;
    result.push(data);
  } else {
    console.log(`→ Duplicate found. Skipping.`);
  }
}
console.log(result);