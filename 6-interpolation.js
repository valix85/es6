//For use this file install quokka.js in visual studio code and enable it on this file.

//ES5 '=""
var age = 10;
var name = 'Bob';
var message = "Hi, I am "+name+" and I'm "+age+ " years old";
console.log(message);


//ES6 - interpolation, use backtick ` and ${var_name}
message = `Hi my name is ${name} and my age is ${age} years old.`;
console.log(message);

//multiline
//ES5
message = "Hi my name is\n"+
    name + ", my age is\n"+
    age+".";
console.log(message);

//ES6
//indentetion it's ok
message = `
    hi my name is 
        ${name}, my age is   
    ${age}.
`;
console.log(message);



const activities = [
    'running', 
    'jumping', 
    'sleeping', 
    'swimming'
];
const mex = `my name in ${name}, I like ${activities.join(", ")}.`;
console.log(mex);

const mex2 = `my name in ${name}, I like ${activities.map(item=>item.toLocaleUpperCase()).join(", ")}.`;
console.log(mex2);



//TAG

function tag (str, ...values){
    console.log(str);
    console.log(values);
    return ""+str;
}
function tagBold(strs, ...values){
   let msg = '';
   strs.forEach((str, idx) => {
       msg += str;
       if (idx < values.length){
           msg += `<b>${values[idx]}</b>`;
       }
   });
    return msg;
}

tag`Hello my name is ${name}, I'm ${age} years old`;     //without parentesis !
tag(`Hello my name is ${name}, I'm ${age} years old`);   //with parentesis !
const mex3 = tag`Hello my name is <b>${name}</b>, I'm <b>${age}</b> years old`; 
console.log(mex3);
const mex4 = tagBold`Hello my name is ${name}, I'm ${age} years old`; 
console.log(mex4);




function orig(strs, ...values){
    console.log(strs[0]);
    console.log(strs.raw[0]);
}
const mex5 = orig`Hello\nMy name is Bob!\nI love running`;




//exercise
function sumItUp (strings, ...values) {
    // TODO: sum up all interpolated values into a sum variable    
    return `the total sum was $${sum}`
}










//solution 
//let sum = values.reduce((acc,identity)=>acc+identity);