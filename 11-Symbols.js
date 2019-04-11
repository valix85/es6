//For use this file install quokka.js in visual studio code and enable it on this file.

//every object have an own property identifier: Symbol

//https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Symbol
//https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol


const symbolA = Symbol('description');
const symbolB = Symbol('description');
symbolA;
symbolB;

console.log(symbolA);
console.log(symbolB);
console.log(symbolA==symbolB);
console.log(symbolA===symbolB);
//every call to Symbol returns a new symbol instance; the parameter is simply a description


const symb = Symbol();
symb;
const obj = {
    [symb]:"Hello Symbol!"
};
obj;
//Symbol is not a property's object
console.log(Object.getOwnPropertyNames(obj))
console.log(JSON.stringify(obj))
console.log(Object.keys(obj))

//remember, symbols are not part of the normal object properties

console.log(Object.getOwnPropertySymbols(obj))
const firstSymb = Object.getOwnPropertySymbols(obj)[0];
console.log(firstSymb===symb);



//if you need a global system identifier you can create it
//it's not possible to have two or more identical Symbol in global var

const kA = Symbol.for("myKey A");
const kB = Symbol.for("myKey B");
const kA2 = Symbol.for("myKey A");

console.log(kA===kB)
console.log(kA===kA2)
//.for gives us a global symbol is references the same symbol object
