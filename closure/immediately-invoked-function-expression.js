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

// this in the secound set of parens is passed to the function arguement
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

// Or assign an IIFE to a variable
// In this example the global object has been accessed and assigned to the variable global.
// Note that the function does not need to be wrapped in parens when it is an expression.

var global = function(){ return this; }();
var test = 'bank';
console.log(global.test);
console.log(window.test);
console.log(test);

/*
 * IIFE - used to save state
 */

// This doesn't work like you might think, because the value of `i` never
// gets locked in. Instead, every link, when clicked (well after the loop
// has finished executing), alerts the total number of elements, because
// that's what the value of `i` actually is at that point.

var elems = document.getElementsByTagName( 'a' );

for ( var i = 0; i < elems.length; i++ ) {

  elems[ i ].addEventListener( 'click', function(e){
    e.preventDefault();
    alert( 'I am link #' + i );
  }, 'false' );

}

// This works, because inside the IIFE, the value of `i` is locked in as
// `lockedInIndex`. After the loop has finished executing, even though the
// value of `i` is the total number of elements, inside the IIFE the value
// of `lockedInIndex` is whatever the value passed into it (`i`) was when
// the function expression was invoked, so when a link is clicked, the
// correct value is alerted.

var elems = document.getElementsByTagName( 'a' );

for ( var i = 0; i < elems.length; i++ ) {

  (function( lockedInIndex ){

    elems[ i ].addEventListener( 'click', function(e){
      e.preventDefault();
      alert( 'I am link #' + lockedInIndex );
    }, 'false' );

  })( i );

}

// You could also use an IIFE like this, encompassing (and returning) only
// the click handler function, and not the entire `addEventListener`
// assignment. Either way, while both examples lock in the value using an
// IIFE, I find the previous example to be more readable.

var elems = document.getElementsByTagName( 'a' );

for ( var i = 0; i < elems.length; i++ ) {

  elems[ i ].addEventListener( 'click', (function( lockedInIndex ){
    return function(e){
      e.preventDefault();
      alert( 'I am link #' + lockedInIndex );
    };
  })( i ), 'false' );

}
// Note that in the last two examples, lockedInIndex could have just been 
// called i without any issue, but using a differently named identifier as 
// a function argument makes the concept significantly easier to explain.
