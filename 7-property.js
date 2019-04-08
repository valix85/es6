//For use this file install quokka.js in visual studio code and enable it on this file.

var firstname='Bob';
var lastname='Gray';
var age=20;


var person1 = {
    firstname:'Bob',
    lastname:'Gray',
    age:20
}
person1;

//you can declare any data variable as value
var person2 = {
    firstname:firstname,
    lastname:lastname,
    age:age
}
person2;

//if key/value are the same you can declare only one
var person3 = {
    firstname,
    lastname,
    age,
    address:""
}
person3;

//Computed property
var key = 'lastname';
var person4 = {
    firstname:'Bob'
}
person4[key]="Gray";
person4;

//add a variable key to Object
function getKey(){
    return "Address"
}

var person5 = {
    firstname:'Bob',
    [key]:"Larry",
    ['age']:34,
    ['age'.length*2]:"keyIsGenerated",
    [getKey()]:"20142, Milan, Via Imperia, 2"
}
person5;



//Method property
var person6 = {
    firstname:'Bob',
    age:20,
    //haveABirthday: function(){this.age++;},
    haveABirthday(){this.age++;}    //the same of above
    //haveABirthdayArrow: ()=>this.age++ //doesn't work fine!!!
}
person6;
person6.haveABirthday();
person6;
//person6.haveABirthdayArrow();
//person6;








//exercise: write the output
const name = 'bob';
const age1 = 20;
const obj = {name, age1};
console.log(obj);






//{name: 'bob', age: 20}












const confused = 'no';
const myKey = confused;
const obj1 = {
    [myKey]: false
}
console.log(obj1);








//{'no':false}













const piece = {
    x: 0,
    y: 0,
    move (x, y) {
      this.x = x;
      this.y = y;
    }
  }
  piece.move(10, 10);
  console.log(piece);


  //{x:10, y:10}