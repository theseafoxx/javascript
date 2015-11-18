/* 
 * Inheritance
 *
 * Interface Inheritance: only the method signatures are inherited. (not possible
 * in ECMAScript because functions do not have signatures.)
 * Implementation Inheritance: actual methods are inherited.
 * 
 */
 
/*
 * Prototype Chaining
 *
 * The basic idea is to use the concept of prototypes to inherit properties and 
 * methods between two reference types.
 * The relationship between constructors, prototypes, and instances: each constructor 
 * has a prototype object that points back to the constructor, and instances have an
 * internal pointer to the prototype.
 */
 
function SuperType() {
  this.property = true;
  this.colors = ['red', 'green', 'yellow'];
}

SuperType.prototype.getSuperValue = function() {
  console.log(this.property);
}

function SubType() {
  this.subProperty = false; 
}

// inherit from SuperType -- this overwrites the constructor
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function() {
  console.log(this.subProperty);
}
// you can also override inherited prototype methods

var instance = new SubType();
instance.getSuperValue(); // true
console.log(instance instanceof Object); // true
console.log(instance instanceof SuperType); // true
console.log(instance instanceof SubType); // true
// Issue:
// The object type is in the constructor, which is now SuperType instead of Subtype
console.log(instance.constructor == SuperType); // true
console.log(instance.constructor == SubType); // false

// Issue:
// Instance properties are now prototype properties.
console.log(instance.hasOwnProperty('subProperty')); // true
console.log(instance.hasOwnProperty('property')); // false, this was an instance property defined by the SuperType

// Issue:
// Properties containing reference values are shared with all instances.
instance.colors.push('black');
console.log(instance.colors); //['red', 'green', 'yellow', 'black']

var instance2 = new SubType();
console.log(instance2.colors); //['red', 'green', 'yellow', 'black']

// Issue:
// Arguments cannot be passed to the supertype.


/*
 * Constructor Stealing
 * 
 * To solve prototype inheritance call the supertype constructor within the subtype constructor.
 * Arguments can now be passed to supertype.
 */
function SuperType(name) {
  this.colors = ['red', 'green'];
  this.name = name;
}
SuperType.prototype.getColors = function(){
  console.log(this.colors);
}

function SubType(name) {
  SuperType.call(this, name);
}

var instance1 = new SubType('Bill');
instance1.colors.push('Black');
console.log(instance1.colors);
console.log(instance1.name);

var instance2 = new SubType('Kate');
instance2.colors.push('Yellow');
console.log(instance2.colors);
console.log(instance2.name);

// Issue
// Prototype methods and properties are not passed.
try{
  instance1.getColors();
} catch(e) {
  console.log(e);
}


/*
 * Combination Inheritance (prototype chaining and constructor stealing)
 *
 * Prototype chaining - inherit properties and methods on the prototype
 * Constructor stealing - inherit instance properties
 * Down side: supertype is called twice and it's instance properties are set to the prototype.
 */

function SuperType(name) {
  this.property = true;
  this.name = name;
  this.colors = ['green', 'purple'];
}

SuperType.prototype.getSuperValue = function() {
  console.log(this.property);
}

function SubType(name, age) {
  this.subProperty = false;
  SuperType.call(this, name);
  this.age = age;
}

SubType.prototype = new SuperType();

SubType.prototype.sayAge = function() {
  console.log(this.age);
}

var instance1 = new SubType('Richard', 65);
instance1.colors.push('Teal');
console.log(instance1.colors);
instance1.getSuperValue();
instance1.sayAge();

/*
 * Prototypal Inheritance
 */

 

/*
 * Parasitic Inheritance
 */
 

/*
 * Parasitic Combination Inheritance 
 */


 
