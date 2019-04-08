//For use this file install quokka.js in visual studio code and enable it on this file.



console.log(x);
//console.log(y); //y is not defined
//console.log(k); //y is not defined

if(true){
    //this is a block / have a proper scope
    var x = 3;
    console.log(x);
    let y = 5;
    console.log(y);
    const k = 8;
    console.log(k);
}

console.log(x);
//console.log(y); //y is not defined
//console.log(k); //k is not defined

//block let / const have same functionality
//let
{
    let a=1;
    a;
    {
        //let a=2;
        //a = 2;
        a;        
    }
    a;    
}
//block
{
    const a=1;
    a;
    {
        const a=2;
        //a = 2;
        a;
    }
    a;
}
//var
{
    var a=1;
    a;
    {
        var a=2; //override external variable
        //a = 2;
        a;
    }
    a; //please check this variable
}



//same example with a function
{
    const fn = ()=>{return 1;}
    console.log(fn()); 
    {
        const fn = ()=>{return 2;}
        console.log(fn());
    }
    console.log(fn());
}





{
    "use strict";
    {
        function fn(){return 1;}
        console.log(fn()); 
        {
            
            function fn(){return 2;}
            function fn(){return 3;}
            console.log(fn());
        }
        console.log(fn());
    }
}














const MAX = 5;
 
for (var i = 0; i < MAX; i++) {
  setTimeout(function() {
    console.log(i);
  });
}
 
for (let i = 0; i < MAX; i++) {
  setTimeout(function() {
    console.log(i);
  });
}