//For use this file install quokka.js in visual studio code and enable it on this file.

//convert async

const myPromise = new Promise( (resolve, reject)=>{
    resolve('Bob');
});


function main(){
    const name = myPromise;
    name;
    return name;
}

async function mainSync(){
    const name = await myPromise;
    name;
    return name;
}
console.log("Test async/await")
console.log(main());
console.log(mainSync());



//La funzione di attesa deve tornare una promise
// https://flaviocopes.com/javascript-async-await/


function getName(){
    //return Promise.resolve("Mario");
    //introducing a delay    
    return new Promise(resolve =>{
        setTimeout(()=>resolve("Mario"),2000)
    })  
}
function getAge(){
    return Promise.resolve(28);
    //return Promise.reject("Error in getAge!");
}

function getInfo(){
    const name = getName();
    const age = getAge();
    return name+"("+age+")";
}

async function getInfoSync(){
    try{  
        console.log("before name");
        const name = await getName();        
        console.log(name);
        console.log("after name");

        console.log("before age");
        const age = await getAge();
        console.log(age);
        console.log("after age");
        /*
        //best to parallelize
        const [name,age] = await Promise.all([
            getName(),
            getAge()
        ])
        name;
        age;
        */

        const compose = name+" ("+age+")"
        compose;
        //return Promise.resolve(compose);
        return compose;
    }catch(err){
        console.error(err);
    }
    
}

console.log("Example2")
//console.log(getInfo());
console.log(getInfoSync());