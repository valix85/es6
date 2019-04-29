//For use this file install quokka.js in visual studio code and enable it on this file.

function getName(cb) {
    //setTimeout(()=>{console.log("bob");},4000)
    setTimeout(() => { cb('bob'); }, 1000)
}
getName((name) => { console.log(name); })



function getNamePromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve('BOB');             
        }, 1000)
    });
}
function getAgePromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve(18);             
        }, 3000)
    });
}

getNamePromise()
.then( (name) => { console.log(name); })

//chaining
getNamePromise()
.then( (name) => { console.log(name); return 'Mario'; })
//.then( (name) => { return getAgePromise(); })
.then(getAgePromise)
.then( (age) => { console.log(age); })



// Race and Promise All
Promise.all([
    getNamePromise(),
    getAgePromise()

]).then( ([name,age])=>{
    console.log(name);
    console.log(age);
})


//Race
Promise.race([
    getNamePromise(),
    getAgePromise()
])
.then( (value)=>console.log(value))
.catch(err=>console.lof(err));















// Implement a function which returns a promise which resolve when the parameter passed in it true, and rejects when the parameter passed in is falls


function getIdentityPromise(shouldResolve) {
    // TODO: Implement me to return a resolved project when shouldResolve is true, 
    // and return a rejected promise when shouldResolve is false
    return new Promise((res,rej)=>{
        if (shouldResolve===true){
            res(true);
            } else{
            rej(false);
            }
    });
}