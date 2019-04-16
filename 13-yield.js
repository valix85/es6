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