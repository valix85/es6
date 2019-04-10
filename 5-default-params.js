//For use this file install quokka.js in visual studio code and enable it on this file.


/*
//ES5
function buy (item, amount){
    //invoke service/db to save the data
    //...more logic
    amount;
    if (amount===undefined){
        amount = 1; //old style
    }
    amount;

    return;
}
*/

//ES6
function buy (item = {item:"food"}, amount = 1){
    //invoke service/db to save the data
    //...more logic
    item;
    amount;
    return;
}

buy("eggs",5); //this is ok
buy("eggs");
buy();
//default value can be any different type to item passed



//Rest operator
//ES5
//function print(){
//ES6
function print(age, cars, ...arr){
    /*
    //ES5
    console.log(arguments); //arguments it's a special keyword that contain value passed to this function
    var arr = Array.prototype.slice.call(arguments);
    console.log(arr);
    console.log(arr[0]);
    */
    
   //ES6
   
   console.log(age);
   console.log(cars);
   console.log(arr);
   
}

print(13);
print(1,2,3,"hello", [10,20,30], {item:"big bang"});













//Spread Operator
//the spread operator will basically take each element of the array you are applying the spread to and FLATTEN it out into either arguments or another array provided
//We can use the spread operator to "spread" the elements of an array as arguments into a function

//ES5
function printES5(){
    var args = Array.prototype.slice.call(arguments);
    //ES5
    args =  ['<p>'].concat(args).concat(["</p>"]);
    args;
    console.log(args.join(" "));

    
}

//ES6
function printES6(...args){
    //ES6
    args = ['<h1>',...args,'</h1>'];
    args;
    console.log(args.join(" "));
}

printES5("hello","world");
printES6("hello","world");


//toCharArray
function toCharArray(mex){
    const arr = [...mex];
    arr;
    return arr;
}
toCharArray("Hello");


function add(a,b){
    return a+b;
}
const arrN=[10,5];
console.log(add(...arrN));



//arrayCopy

const arr1 = [1,2,3];
const arr2 = [...arr1];
arr1;
arr2;
arr1[0]=100;
arr1;
arr2;




const nums=[10,50,30,28,41];
console.log( Math.max(nums) );
console.log( Math.max(...nums) );




function sum(...numbers) {
    return numbers.reduce((acc, number) => acc +number );
}
 
const answer = sum(1, 5, 20, 10,20,30,34);
 
console.log(answer);










const names = [
    'bob', 
    ...[
        'donald'
    ],
    'suzy', 
    'lacy',
    ...[
        'richard', 
        'alex'
    ]
   ]
   console.log(names);