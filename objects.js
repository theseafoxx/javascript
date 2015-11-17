/* 
 * object Creation
 */

function hasProperty(obj, property) {
  // this function checks where the property lives in the object
  // the property can either be directly available or from the prototype
  if("name" in p3a) {
    if(obj.hasOwnProperty(property)){
      console.log('The property "' + property + '" exists in the object instance.')
    } else {
      console.log('The property "' + property + '" exists in the object prototype.')
    }
  } else {
    console.log('The property "' + property + '" does not exist in the object.')
  }
}

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

var p2a = new Person2('Jessie', 25);
p2a.sayName();//Jessie
var p2b = new Person2('Ron', 55);
p2b.sayName();//Ron
console.log(Object.getPrototypeOf(p2b));
console.log(p2b instanceof Object); //true
console.log(p2b instanceof Person2); //true

console.log(p2a.sayName == p2b.sayName); //false


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
console.log(Object.getPrototypeOf(p3a));
console.log(p3a instanceof Object);
console.log(p3a instanceof Person3);

console.log(p3a.sayName == p3b.sayName); //true

hasProperty(p3a,'name');
p3a.name = 'Tom';
console.log("p3a.name set to 'Tom'");
hasProperty(p3a,'name');
p3a.sayName();
p3b.sayName();
delete p3a.name;
hasProperty(p3a,'name')

/* 
 * The object literal can be used to set the values on the prototype,
 * but the constructor will be overwritten. Reset constructor with Object.defineProperty()
 */

function Person4() {};

Person4.prototype = {
  name: 'Sam',
  age: 12,
  sayName: function() {
    console.log(this.name);
  }
};

Object.defineProperty(Person4.prototype, "constructor", {
  value: Person4,
  enumerable: false
});
/* 
 * If constructor is not defined we would not be able to determine the type of object it is,
 * Object.isPropertyOf(insance_name) would return: Object {name: "Sam", age: 12}
 */

var p4 = new Person4();
p4.sayName();
/* with the constructor defined we know what type of object the object is */
console.log(Object.getPrototypeOf(p4)); //Person4 {name: "Sam", age: 12}

/*
 * Combination Constructor/Prototype Pattern
 * Best of both patterns, instance properties and prototype methods and shared properties
 */

function Person5(name, age) {
  this.name = name;
  this.age = age;
  this.friends = ['Joe', 'Don'];
}
Person5.prototype = {
  sayName: function(){
    console.log(this.name);
  },
  species: 'Human'
}

Object.defineProperty(Person5.prototype, 'constructor',{
  value: Person5,
  enumerable: false
});

var p5a = new Person5("Sandy", 34);
var p5b = new Person5("Lando", 5);

p5b.friends.push('Bill');
console.log(p5a.friends);
console.log(p5b.friends);

/*
 * Dynamic Prototype Pattern
 * The visual seperation between prototype and constructor can be confusing.
 * This pattern seeks to resolve this problem.
 * The object literal cannot be use to set the prototype properties because an instance currently exists
 * and this would disconnect the instance from the new prototype.
 */

function Person6(name, age) {
  this.name = name;
  this.age = age;
  this.friends = ['Joe', 'Don'];
  
  if(typeof this.sayName !== "function"){
    Person6.prototype.sayName = function() {
      console.log(this.name);
    }
  }
}

var p6a = new Person6("Debbie", 39);
p6a.sayName();//Debbie

/* the method can be hijacked */
name = "Tanya";
p6a.sayName.call(window);//Tanya
