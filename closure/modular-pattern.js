/* Modular pattern closure
 * Allows you to emulate public, private, and privileged members
 *
 * The module acts as if it were a singleton, executed as soon as 
 * the compiler interprets it, hence the opening and closing 
 * parenthesis at the end of the function. The only available members 
 * outside of the execution context of the closure are your public methods 
 * and properties located in the return object (Module.publicMethod for 
 * example). However, all private properties and methods will live throughout 
 * the life of the application as the execution context is preserved, meaning 
 * variables are subject to further interaction via the public methods.
 *
 * http://ryanmorr.com/understanding-scope-and-context-in-javascript/
 */

var Module = (function(){
    var privateProperty = 'foo';

    function privateMethod(args){
        // do something
    }

    return {

        publicProperty: '',

        publicMethod: function(args){
            // do something
        },

        privilegedMethod: function(args){
            return privateMethod(args);
        }
    };
})();

// Another example
// http://benalman.com/news/2010/11/immediately-invoked-function-expression/
// 
// Even though parens are not required around this function expression, they 
// should still be used as a matter of convention to help clarify that the 
// variable is being set to the function's *result* and not the function itself.

var counter = (function(){
  var i = 0;

  return {
    get: function(){
      return i;
    },
    set: function( val ){
      i = val;
    },
    increment: function() {
      return ++i;
    }
  };
}());
