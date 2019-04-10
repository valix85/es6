//For use this file install quokka.js in visual studio code and enable it on this file.

var x = 1;
x;
arr = [0,1,2,3,4,5];
arr;
x = "hello";
// x change type at runtime
const y = 3;
//y=5; //invalid const can't be never change value at runtime

//const z; //invalid, it must be assigned when declared
const k = {}; //point reference to object, when set/mutate the content you aren't change the reference value
k['nome']="Valerio";
k;
k["cognome"]="Radice";
k;

const memo = [];// same as object
memo.push("Chiamare Francesca");
memo;

//---------------------------

//var codes = [10,20,30]; // can be modify by another function, is a share variable
const codes = [10,20,30]; // use const and modify function to append


function appendCodes(users){
    /* 
    //edit to fix
    codes = users.map(function(user){ //codes variable is inherit from external
        return user.code;
    });
    */
    

    users.map(function(user){ //codes variable is inherit from external
        return codes.push(user.code);
    });
    
}

appendCodes([{code:200},{code:404},{code:500}]);
codes;
