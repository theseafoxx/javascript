/* Execution Context (refering to scope rather than context)
 * The execution context of a variable or function defines what 
 * other data it has access to, as well as how it should behave.
 *
 * The global context - this is the outermost context. 
 * In web browsers this is the window object.
 * 
 * Each function has it's own execution context.
 * When code is executed in a context a scope chain of variable
 * objects is created -- this provides ordered access to all 
 * variables and functions that an execution context has access
 * to. The front of the scope chain is the variable object of the 
 * context whose code is executing. 
 *
 * Scope is function based, context is object-based.
 * Scope pertains to the variable access of a function when it is 
 * invoked and is unique to each invokation.
 * Context is always the value of the 'this' keyword which is a 
 * reference to the object that 'owns' the currently executing code.
 */

var scopeName = 'Global';
var myText = 'This is important info.';

function first(){
    var scopeName = 'first';
    second();
    console.log('1 ' + scopeName);
    console.log('1 ' + myText);
    function second(){
        // scopeName is local to first(), which comes before the global scopeName in the scope chain
        scopeName = 'second';
        // mytext is global
        myText = 'Eat at Joes!';
        third();
        console.log('2 ' + scopeName);
        function third(){
            var scopeName = 'third'; 
            fourth();
            function fourth(){
                // display scopeName, will go up scope chain till finds closest
                console.log('4 ' + scopeName);
            }
        }
    }   
}
first();

console.log(scopeName);
console.log(myText);
