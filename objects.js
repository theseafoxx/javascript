/* 
 * object Creation
 */


/*
 * Factory pattern
 * encapsulate the creaton of specific objects with an interface
 * this does not address the issue of object identification (what
 * type of object an object is)
 */

function Person1(name, age){
  var o = new Object();
  o.name = name;
  o.age = age;
  o.sayName = function() {
    console.log(this.name);
  };
  return o;
}

var p1 = Person1('Joe', 45);
p1.sayName();
console.log(Object.getPrototypeOf(p1));
console.log(p1 instanceof Object);
console.log(p1 instanceof Person1);

/*
 * Constructor Pattern
 * create specific type of object - the instance can be identified as a 
 * particular type.
 * differences from Factory Pattern:
 *   - object is not explicitly created
 *   - properties and methods assigned directly to this object
 *   - no return statement
 *   - the new operator is used to create an instance
 *  (the new operator acts as a constructor)
 * Issue - each instance has a copy of the methods
 */

function Person2(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function() {
    console.log(this.name);
  };
}

var p2 = new Person2('Ron', 55);
p2.sayName();
console.log(Object.getPrototypeOf(p2));
console.log(p2 instanceof Object);
console.log(p2 instanceof Person2);


/* 
 * Prototype Pattern
 * assign properties and methods directly to the prototype, these will
 * be shared by all instances.
 * When a property is changed for an instance it will shadow the prototype
 * value rather then change it.
 */

function Person3() {};

Person3.prototype.name = 'Sam';
Person3.prototype.age = 12;
Person3.prototype.sayName = function() {
  console.log(this.name);
};

var p3a = new Person3();
p3a.sayName();

var p3b = new Person3();
p3a.sayName();

console.log(p3a.sayName == p3b.sayName); //true

console.log('p3a has name property: ' + p3a.hasOwnProperty('name'));
console.log("name" in p3a); // the property is either directly available or from the prototype
p3a.name = 'Tom';
console.log("p3a.name set to 'Tom'");
console.log('p3a has name property: ' + p3a.hasOwnProperty('name'));
p3a.sayName();
p3b.sayName();
