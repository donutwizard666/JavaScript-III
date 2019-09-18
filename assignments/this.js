/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding - When in the "world" (global scope), the value of THIS will be the console Object.

* 2. Implicit Binding - whenever a function is called by a dot, the object to the left of the dot is assigned THIS. THIS points to the entire object. 

* 3. New Binding - Whenever a constructor function is used THIS is referring to the specific instance of the object that is created and returned by the constructor function.

* 4. Explicit Binding - You are overriding what the THIS keyword points to. Whenever the call or apply method is used, THIS is explicitly defined. 
*
* write out a code example of each explanation above
*/

// Principle 1

function sayMyName(name) {
    console.log(this);
    return name;
}
sayMyName("Ryan");

// Principle 2

const magicObj = {
    greeting: 'Yo, what is up',
    sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};
magicObj.sayHello('Albus Dumbledore');

// Principle 3

function WizardPeople(greeter) {
    this.greeting = 'Hello! ';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}
const Albus = new WizardPeople('Hermione');
const Hermione = new WizardPeople('Albus');

// Albus.speak();
// Hermione.speak();

// Principle 4

let WizardPeople2 = {
    greeting: 'Hello! ',
    power: 100,
    
}

let speak = function() {
    console.log(this.greeting);
    console.log(this.power);
};

speak.call(WizardPeople2);
