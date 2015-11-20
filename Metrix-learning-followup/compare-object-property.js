/* Metrix Learning
 * Issue :
 * JavaScript Essentials: JavaScript in Depth
 * Object Manipulation: Comparing Objects
 * the code for the this.equals function has an error in the switch statement.
 * !this[p].equals(x[p]) does not work, the equals function does not exist the objects properties
 */

function Car(model, distanceMoved, timeElapsed) {
  this.model = model;
  this.distanceMoved = distanceMoved
  this.timeElapsed = timeElapsed;
  this.velocity = function() {
  return this.distanceMoved / this.timeElapsed;
  };

  this.clone = function() {
    var objClone = new Car()
    for(var key in this){
      objClone[key] = this[key];
    }
    return objClone;
  }

  this.equals = function(obj) {
    function checkIt(obj) {
      var key;
      for(key in this) {
        if(obj[key] === undefined) {
        return 'undefined';
        }
      }

      for(key in this) {
        if(this[key]) {
          switch(typeof this[key]) {
           case 'object' :
             if(!checkIt.call(this[key], obj[key])) {
               return false;
             }
             break;
           case 'function' :
             if(key != 'equals' && this[key].toString() !== obj[key].toString()) {
               return false;
             }
             break;
           default :
             if(this[key] !== obj[key]) {
               return false;
             }
          }
        } else {
          if(obj[key]) {
            return false;
          }
        }
      }

      for(key in obj){
        if(this[key] === undefined) {
          return false;
        }
      }
      return true;
    }
   return checkIt.call(this, obj);
  }
//end of constructor
}

var myCar = new Car("BMW", 100, 3);
myCar.color = {doors: 'red', trunk: 'green', lights: { front: 'yellow'}};

var myCar2 = new Car("BMW", 100, 3);
myCar2.color = {doors: 'red', trunk: 'green', lights: { front: 'yellow'}};

console.log(myCar2.equals(myCar));
