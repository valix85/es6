//For use this file install quokka.js in visual studio code and enable it on this file.

//create a generator function, use * symbol after function

function* myGen(){
    yield 1;
    //yield 2;
    //yield 3;
    //yield 4;
}

const iter = myGen();
console.log(iter);
iter;
console.log(iter.next())
console.log(iter.next())


function* infinity(){
    let n=0;
    while(true){
        yield n++;
    }
}
const iterLoop = infinity();
console.log(iterLoop.next())
console.log(iterLoop.next())
console.log(iterLoop.next())
console.log(iterLoop.next())
console.log(iterLoop.next())
console.log(iterLoop.next())
console.log(iterLoop.next())
console.log(iterLoop.next())
console.log(iterLoop.next())
console.log(iterLoop.next())
console.log(iterLoop.next())


function* fibonacci(){
    let n1 = 0;
    let n2 = 1;
    while(true){
        let current = n1;
        n1=n2;
        n2=current+n1;
        let reset = yield current;
        //reset;
        if(reset){
            n1=0;
            n2=1;
        }


    }
}

const fibo = fibonacci();
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next(true));
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next())
console.log(fibo.next())


//short declaration

const obj = {
    * myGen(){
        yield 1;
    },
    * myGenArr(){
        yield* [1,2,3];
        yield "hello"
        yield* "World"
    },

}
console.log(obj.myGen().next())
console.log(obj.myGen().next())
const iter1 = obj.myGen();
console.log(iter1.next())
console.log(iter1.next())
//myGenArr
const iter2 = obj.myGenArr();
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
//spread operator
const iter3 = obj.myGenArr();
console.log([...iter3])


//Async Example
/*
//STEP 1
function getName(){
    setTimeout(()=>{console.log("bob");},1000)
}
function getAge(){
    setTimeout(()=>{console.log(33);},2000)
}
const name = getName();
const age = getAge();
name;
age;
*/

//STEP 2 , move in callback
/*
function getName(cb){
    setTimeout(()=>{cb("bob");},1000)
}
function getAge(cb){
    setTimeout(()=>{cb(33);},2000)
}
let _name = null;
let _age = null;

getName((name)=>_name=name);
getAge((age)=>_age=age);

_name;
_age;
//no way to sync it , try yo use promise!!!
*/



//STEP 3 try to use generators to right syncronous code
function getName(){
    setTimeout(()=>{iterX.next("bob");},4000)
}
function getAge(){
    setTimeout(()=>{iterX.next(33);},2000)
}

var iterX = (function* () {
    const namex = yield getName();
    console.log(namex);
    const age = yield getAge();
    console.log(age)
    //your logic here
}());
iterX.next();

//console.log(iterX.next())




//Exercise
//Implement a generator function called randomHexGenerator which returns a random value from a passed in array of hex values every time it is called.



var hex = [ 'FF0000', '00FF00', '0000FF', 'FF00FF' ]

function* randomHexGenerator(values){
    let items = values;
    //console.log(pos);
    while(true) {
        let pos = Math.floor(Math.random() * items.length);
        yield items[pos];
    }
}
var iter = randomHexGenerator(hex);
console.log(iter.next());