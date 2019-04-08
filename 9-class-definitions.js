//For use this file install quokka.js in visual studio code and enable it on this file.


//class
//ES5
var PersonOld = function(name, age){
    this.name=name;
    this.age=age;
}
PersonOld.prototype.jump = function(){
    console.log(this.name + " jumping");
}

//ES6
class Person {
    //constructor
    constructor(name="", age=-1){
        this._name=name; //this._var encapsulation
        this._age=age;
    }

    jump(){
        console.log(this._name + " jumping");
    }
    getName(){
        return this._name;
    }
    
    //getter and setter
    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    //for every instance
    static setName(person, name){
        person._name=name;
    }

}


//ES6 Extends
class Employee extends Person{
    //NO, Only one constructor!
    /*
    constructor(years){
       super();
       this.years = years;
   }
   */
   
   constructor(name,age,years){
        super(name,age);
        this.years = years;
    } 
    jump(){console.log(
        "Method override!"
    );}
    quit(){
        console.log("Quit and bye bye!")
        super.jump();
    }
    getName(){
        return super.getName()+"!";
    }
}



const p1 = new PersonOld("Bob", 33);
p1;
p1.jump();


const p2 = new Person("Alice", 23);
p2;
p2.jump();


const p3 = new Person();  //use default value or else undefined
p3;
p3.jump();

const e1 = new Employee("Valerio",33, 2);
e1;
e1.jump();
e1.quit();
console.log(e1.getName());


//static method
const p4 = new Person("Alice", 23);
p4;
Person.setName(p4, "fake user");
p4;
p3;
p2;
p1;
var log = p4.name;
log;
p4.name = "Anna";
p4;





























//exercise

class Car {
    constructor (speed) {
        // TODO: Implement the constructor
        // - the car should have a "speed" member to keep track of the speed
        // - the car should have a "running" member to check if running is true or false
        // - the car should have a "distance" member to keep track of the distance driven

        this.speed=speed;
        this.running= false;
        this.distance = 0;
    }
    
    turnOn () {
        // TODO: Implement turnOn to set the "running" member to true
        this.running=true;
    }
    
    turnOff () {
        // TODO: Implement turnOn to set the "running" member to false
        this.running=false;
    }
    
    drive (hours) {
        // TODO: Implement this drive method to update "distance" to hours * this.speed 
        // ONLY WHEN the car is already running
        if (this.running){
            this.distance += hours*this.speed;
        }
    }
}




















//Implement a Porsche911 class which extends the car class
class Car {
    constructor (speed) {
        this.speed = speed;
    }
    
    toString () {
        return `this car is slow; it only moves at ${car.speed} MPH`;
    }
}

class Porche911 extends Car {
    constructor () {
        // TODO: Call the super constructor to pass a FAST speed of 100
        super(100);
    }
    
    toString () {
        // TODO: overwrite the existing toString method to have it return 
        // 'this car is FAST'
        return "this car is FAST";
    }
}














//implement getter and setter
class Car {
    constructor(value) {
        this._value = value;
    }
    
    get value () {
        // TODO: return the value with 2000 added to it due to how awesome your car became after you bought it
        return this._value+2000;
    }
    
    set value (value) {
        // TODO: set _value to the value set in minus 1000 due to sales expenses
        this._value=value-1000;
    }
}