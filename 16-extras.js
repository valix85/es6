//For use this file install quokka.js in visual studio code and enable it on this file.

var obj1 = {
    skills:{running:true}
};
var obj2 = {
    name:"Bob",
    age:10,
    active:true,
    skills:{jumping:true}
};

//ES5 copy object
Object.keys(obj2).forEach(k=>obj1[k]=obj2[k]);
//obj2.name="Mark";
obj1;
obj2;

//ES6 same result with Object assign, target will be completely ovveride
var target = {skills:{running:true}}
var obj3 = {hasADog:false}
Object.assign(target, obj2, obj3);
Object.assign(...[target, obj2, obj3]); //same result
target;


//STRING REPEAT
//old way
const str1 = Array(10).fill("*").join('');
str1;
//ES6 style
const str2 = "*".repeat(10);
str2;
//other methods
const t1 = "abc".startsWith("ab");
const t2 = "abc".endsWith("bc");
const t3 = "abcabbbbacab".includes("ab"); //like indexOf but return boolean

t1;t2;t3;

