/* Fun with functions
 * Immediately-invoked function expression (IIFE) 
 * A self-invoked anonymous function executed in the context of the window
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
