/*
 * new Operator or What is the deal with [new]?
 *
 * The [new] operator is used when calling a function: var test = new MyFunction();
 * When a function is called with [new] it is a Constructor.
 * When a function is called with [new] it first creates a new instance of
 * [object] and then sets [this] to the new object instance which will then be
 * used inside the function.
 * If [new] is not used then inside the function [this] object will point to the 
 * global object (window in browser).
 */
 
function Person(name, age){
  this.name = name;
  this.age = age;
}

/* call the function as a constructor, use [new] */ 
var me = new Person('Tanya', 39);
console.log(me.name); //Tanya
console.log(me.age); //39

/* call the function, the variables will be set on the global object */
var dude = Person('Joe', 41);
try{
  console.log(dude.name);
} catch(e){
  console.log(e)
}try{
  console.log(dude.age);
} catch(e){
  console.log(e)
}
console.log(window.name);
console.log(window.age);
