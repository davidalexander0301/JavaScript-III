/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is when the "this" keyword refers to the global scope.

* 2. Implicit binding occurs when dot notation is used before the funtion name.

* 3. New Binding occurs when the new keyword is used to build a new object.

* 4. Explicit binding occurs when .call or .apply are used on a function.

*

* write out a code example of each explanation above

*/

// Principle 1

// code example for Window Binding

function sayName(name){
    console.log(this);
    return name;
};
sayName("Kylo Ren");

// Principle 2

// code example for Implicit Binding

const myObject = {
    name: 'Kylo Ren',
    parents: function(parent1, parent2) {
        console.log(`${this.name} belongs to ${parent1} and ${parent2}`);
    }
};
myObject.parents('Han Solo', 'Princess Leia');

// Principle 3

// code example for New Binding

const Hero = function(name, droid, planet) {
    this.name = name;
    this.droid = droid;
    this.planet = planet;
};

const Orc = new Hero('Rey', 'BB8', 'Jakku');
console.log();

// Principle 4

// code example for Explicit Binding

function sayWelcomeToTheDarkSide(){
    console.log(`Hi ${this.name}`);
};
const name1 = {
    name: 'Rey'
};
sayWelcomeToTheDarkSide.call(name1);

