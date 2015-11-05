/* Fun with functions
 * Immediately-invoked function expression (IIFE) 
 * A self-invoked anonymous function executed in the context of the window.
 * This expression is most useful when attempting to preserve the global 
 * namespace as any variables declared within the function body will be local 
 * to the closure but will still live throughout runtime. This is a popular 
 * means of encapsulating source code for applications and frameworks, typically 
 * exposing a single global interface in which to interact with.
 *
 * http://ryanmorr.com/understanding-scope-and-context-in-javascript/
 */

// Module is added to the window object.
// foo and bar are private and can only be accessed if methods are added to the window.Module code
(function(window){
          
    var foo, bar;

    function private(){
        // do something
    }

    window.Module = {

        public: function(){
            // do something 
        }
    };

})(this);
