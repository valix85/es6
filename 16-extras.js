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



const arr = [1,10,58,14,2,3,5];
const result = arr.filter(e=>e%2==0);
result;
const result2 = arr.find(e=>e%2==0); //only the first element true
result2;
const result3 = arr.findIndex(e=>e>10); //find the index of the first element true
result3;

//Math.trunc, easy method to truncate floating point numbers
function trunc(x){
    return (x<0?Math.ceil(x):Math.floor(x));
}
console.log(trunc(3.7));
console.log(trunc(-3.7));

console.log(Math.trunc(-3.7));
console.log(Math.trunc(-3.7));

//Others in Math

//isNan not-a-number
console.log(Number.isNaN(1));

var i; i++; i;
//i=1;
console.log(i==i);
console.log(i===i);
console.log(i !== i);
console.log(Number.isNaN(i));


//isFinite, check if a number is finite or not (1/0)

i=i/0;
i;
i=0; i= i/0;
i;
i=1; i= i/0;
i;
console.log(Number.isFinite(i));
i=1/3;
console.log(Number.isFinite(i));



console.log(0.1+0.2 === 0.3);
console.log(Math.abs(0.1+0.2-0.3)<Number.EPSILON);
console.log(Number.EPSILON);


console.log(Math.sign(i));
console.log(Math.sign(5));
console.log(Math.sign(-5));
console.log(Math.sign(0));