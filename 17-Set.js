//For use this file install quokka.js in visual studio code and enable it on this file.


//set no duplicate element!

//BAD
var obj = {
    a:true,
    b:true
};

const set = new Set([1,2,3,3,3,4,5]);
set;


set.add(3);
set;
set.add(6);
set;
set.clear();
set;
set.add(100);
set.add(101);
set.add(102);
set.add(103);
set.add(104);
set;
set.delete(103);
set;

const entries = set.entries();
entries;

for (let [value] of entries){
    value;
};

set;



const entries2 = [...set.entries()]; // k,v
entries2;

console.log(set.keys());
console.log([...set.keys()])


console.log(set.values())
console.log([...set.values()])

//set contain
console.log(set.has(101));
console.log(set.has(10));

set.forEach(val=>{console.log(val);});
for(val of set){
    console.log(val);
}