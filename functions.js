/*
* Fun with Functions
*/
/* **** */
/*
* Function expression
* A variable is assigned to a function (these are usually annonymous). Calls to this 
* function type have to occur after the code.
*/
var person = function(name) {
  return name;
};

/* **** */
/*
* Function declaration
* The function is declared and it will be hoisted in the stack. Calls to this 
* function type can occur before or after the code.
*/
function person(name) {
  return name;
}


/* **** */
/*
* IIFE - Immediately Invoked Function Expressions
* To tell the parser to expect a function just requires wrapping it parentheses.
*/

(function() { /* code */})();
(function(aVar) { /* code that uses aVar */})('someData');

var ii = (function() { /* code */ })(); 
/* 
 * parens around the function are not required in a function expression 
 * but do it to maintain convention.
 */


/* **** */
/* 
 * Function expression with a named function -
 * Why? -- if the function calls to itself it needs to know it's name, and 
 * not break if it has been assigned to different variables. 
 * arguements.callee has been depricated so a function expression with a named function will fix this issue
 */

var factorial = (function f(num){
  if(num <= 1){
    return 1;
  } else {
  return num * f(num-1);
  }
});// note that this is not IIFE

mine = factorial;
delete factorial;
console.log(mine(5));
