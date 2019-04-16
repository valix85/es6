//For use this file install quokka.js in visual studio code and enable it on this file.

const message = "Hello World";

console.log(message[Symbol.iterator]);
//any variable is an iterable object
//for use for of loop you need an iterator
for(let char of message){
    char;
}

const iter = message[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
const item = iter.next();
console.log(item);

let c;
let cur = iter.next();
//while( !(c=iter.next()).done ){
while( cur.done===false ){
    console.log(cur);
    cur = iter.next();
}
console.log(iter.next());


//custom iterable object

const codes = {
    [Symbol.iterator](){
        let cursor=0;
        return {
            next(){
                return {
                    value: Math.random(),
                    done: cursor++>4
                }
            }
        }
    }
};

for (let code of codes){
    console.log(code);
}





//Exercise, iterate on every digit of number
const obj = {
    number: 53820391,
    [Symbol.iterator] () {
        //todo code to iterate on number digit        
    }
}















const obj = {
    number: 53820391,
    [Symbol.iterator] () {
        let cursor=0;
        return {
            next(){
                return {
                    value: (""+obj.number).charAt(cursor),
                    done: cursor++>(""+obj.number).length
                }
            }
        }
    }
}


for (let n of obj){
    console.log(n);
}