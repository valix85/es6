//For use this file install quokka.js in visual studio code and enable it on this file.

//extensions of map and set


const map = new Map();
const wmap = new WeakMap();

(function(){
    let a = {x:12};
    let b = {y:12};
    
    map.set(a,1);
    wmap.set(b,1);
}())

//garbage collection start here 

//some reference are delete
//so a and b used by reference doesn't exist yet

console.log([...map.keys()])
console.log([...map.entries()])
map;
map.delete({x:12});
map;
//different element , different reference, only "a" variable can delete it

//weakMap remove element from it if reference are deleted
//console.log([...wmap.keys()])
//a;


//for Set is the same