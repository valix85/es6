//For use this file install quokka.js in visual studio code and enable it on this file.


//map = structure with a key and value
//OLD
var obj = {
    key1:true,
    key2:"hello",
    key3:{}
}



const map = new Map([
    ['key1', true],
    ['key2',"hello"],
    ['key3',{}]
]);
map;

//map.clear();
map;
console.log(map.has("key1"));
console.log(map.has("key4"));

map.delete("key3");
map;

map.set("key5",{});
map;

const entries = map.entries();
entries;
for( let [k,v] of entries){
    k;
    v;
}

map.forEach( (k,v)=>{
    k;
    v;
});




const entries2 = map.keys();
entries2;
for(let k of entries2){
    k;
}
console.log([...map.keys()]);



const entries3 = map.values();
entries3;
for(let v of entries3){
    v;
}
console.log([...map.values()]);


map.forEach(val=>{console.log(val);});
