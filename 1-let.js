//For use this file install quokka.js in visual studio code and enable it on this file.

//let variable can be assigned multiple time in different scope

var x = 1;
x = 2;
x;
x = "hello";
x;


let y = 1;
//let y = 1; //Compilation error
{
    let y = 10;  //valid, different scope
    y;
}
y;

let a=b=c=10;
a; b; c;




//---------------


const num = [0,5,8,4,3,9];
num;
num.push(55)
num;


function getMax(arr){
    let max=-Infinity;  //smaller value available
    arr.forEach(function(item){
        item;
        max;
        max = Math.max(max, item);
        max;
    }); 
    return max;
}

const max=getMax(num);
max;




























//Exercise:
//Let's Try Using Const - Appending Negative Numbers
//Implement the function extractNegativeNumbers, which accepts a single argument&nbsp;numbers (an array of numbers), and have it append any negative numbers found in the numbers argument into the negativeNumbers array.

const negativeNumbers = [];

function extractNegativeNumbers(numbers) {
    // append any negative numbers found in the numbers array 
    // into the negativeNumbers array constant variable above
    
    // solution here    
}

extractNegativeNumbers([12,45,-5,7,9,-2,-2,6,-8,90]);
negativeNumbers;


















/*

//solution

    numbers.forEach(function(item){
        if (item<0){
            negativeNumbers.push(item)
        }
    })


*/

















//exercise 2
//Let's Try Using Let - Setting a Largest String
//Implement the findLargestString function, which has a single argument strings (an array of strings), which will set the largestString variable defined at the top to the string which has the longest length of the array of strings passed in as the strings parameter.



function findLargestString(strings) {
    // set largestString to point to the 
    // longest string found in the strings array passed in
    
    //solution here
    let strMax="";
    strings.forEach(item=>{
        //strMax;
        strMax = item.length>strMax.length?item:strMax;
        
    })
    return strMax;
}

const stringtop = findLargestString(["che","bella","non","è","la","nextre","academy","!!!"]);
stringtop;



















/*
//solution

    largestString="";
    strings.forEach(s=>{
        largestString= largestString.length>s.length?largestString:s;
    });
    return largestString;

*/























