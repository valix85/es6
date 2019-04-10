//For use this file install quokka.js in visual studio code and enable it on this file.

const arr = [1, 2, 3, 4];

const byTwo = arr.map(function (number) { return number * 2; });
const byThree = arr.map((number) => { return number * 3; });
const forTwo = arr.map(number => number / 2);
const toObj = arr.map(number => ({ num: number })); //parentesis are necessary if it return an object directly
const reMap = arr.map(() => -1);

arr;
byTwo;
byThree;
forTwo;
toObj;
reMap;


//this
//this is different in callback function, you must use "that" or refer to obj.value directly
/*
var obj = {
    value: 0,
    increment: function(){
        //var that = this;
        setTimeout(function(){
            this.value++;
            //that.value++;
            console.log(this.value)
        },1000);
    }
}
obj.increment();
*/

//but this is the same in arrow function, the original this it's passed down to internal function
var obj = {
    value: 0,
    increment: function () {
        setTimeout(() => {
            this.value++;
            console.log(this.value)
        }, 1000);
    }
}
obj.increment();




//----------------------


{
    this.x = 10;
    this.y = 10;
    this.vx = 20;
    this.vy = 20;

    let obj = {
        x: 0,
        y: 0,
        vx: 5,
        vy: 5,
        update: () => {
            this.x += this.vx;
            this.y += this.vy;
        },
        getPosition: function () {
            return [this.x, this.y];
        }
    }
    obj.update();

    console.log(obj.getPosition());
    console.log([this.x, this.y]);
}

//The fat arrow will bind the update function's scope to the global scope in this case; therefore, this.x and this.y will refer to the global variables at the top




//-------------------------

const person = {
    name: 'bob',
    updateName: function () {
        console.log(this.name);
        (function () {
            this.name = 'suzy'
        })();
        console.log(name);
    }
}
person.updateName()
console.log(person.name);



//the IIFE inside the updateName function has it's own scope; therefore, name is not referring to the name of the person object.












//----------------------

const person1 = {
    name: 'bob',
    updateName: function () {        
        //IIFE
        (function()  {
            this.name = 'suzy'
            name="mark";    //to global scope (window)
        })();
        console.log(name);        
        console.log(this.name);
    }
}
person1.updateName()
console.log(person1.name);
console.log(name);      //from global scope (windows)


//by using the arrow function, the internal IIFE is bound to the person objects scope
//qualsiasi cosa non dichiarata viene assegnata allo scope globale di quella funzione

//IIFE 
// https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6







//---------------------
/*
const person2 = {
    age: 10,
    setAge: function (newAge) {
        this.age = newAge;
    },
    refreshAge: function (userId) {
        fetchAgeFromDb(function (newAge) {
            this.setAge(newAge);
        })
    }
}
function fetchAgeFromDb(cb) { cb(20); }
person2.refreshAge();
console.log(person2.age);
*/


//This is a good example as to when you should have probably used a fat arrow when passing the callback into fetchAgeFromDb. This is because we needed access to that setAge member when the age is returned from the database, but we do not have access to it when using a normal function unless we use bind or var that = this.



//-------------------------

function ListPrefixer (list, prefix) {
    this.list = list;
    this.prefix = prefix;
}
ListPrefixer.prototype.transform = function (cb) {
    this.list = this.list.map(cb);
}
ListPrefixer.prototype.applyPrefix = function() {
    this.transform(function (number) {
        return this.prefix + number;
    })
}
ListPrefixer.prototype.applyPrefixArrow = function() {
    this.transform((number) => {
        return this.prefix + number;
    })
}
 
const request = new ListPrefixer([1, 2, 3], '*');
 
request.applyPrefix();
console.log(request.list);
 
request.applyPrefixArrow();
console.log(request.list);

//this.prefix will not reference the expected variable in the first applyPrefix function call. This is an example of when we'd want to use a fat arrow to get that reference.
















//Exercise
//Using the Fat Arrow
//Modify the StringBuilder's convertChars method to use an arrow function in order to fix the error associated with it referencing the incorrect this value.

function StringBuilder (string) {
    this.string = string || '';
  }
  StringBuilder.prototype.append = function (string) {
    return new StringBuilder(this.string + string)
  }
  StringBuilder.prototype.prepend = function (string) {
    return new StringBuilder(string + this.string)
  }
  StringBuilder.prototype.pad = function (string) {
    return this.append(string).prepend(string);
  }
  StringBuilder.prototype.convertChars = function (converter) {
    let oldString = this.string;
    this.string = '';
    for (let i = 0; i < oldString.length; i++) {
      // TODO: Fix this section
      converter(oldString[i], function (converted) {
        this.string += converted;
      })
    }
    return new StringBuilder(this.string);
  }


/*
  // TODO: Fix this section
  converter(oldString[i], (converted) => {
    this.string += converted;
  })
*/

