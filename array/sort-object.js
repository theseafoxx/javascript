/*
 * Comparison function used by Array.prototype.sort() to use on an arrray that is made up of objects.
 */
function createComparisonOperator(propertyName, sortOrder){
/*
 * use this function in the array sort() method 
 * to sort arrays that are made up of objects
 */
  if(sortOrder == undefined || (sortOrder !== 'asc' && sortOrder !== 'desc')){
    sortOrder = 'asc';
  }
  return function(obj1, obj2){
    var val1 = obj1[propertyName];
    var val2 = obj2[propertyName];
    if( typeof val1 === 'string'){
      val1 = val1.toLowerCase();
    } 
    if( typeof val2 === 'string'){
      val2 = val2.toLowerCase();
    } 
    var result = 0;
    if( sortOrder === 'asc'){
      /* asc order */
      if (val1 < val2) {
        result = -1;
      } else if (val1 > val2) {
        result = 1;
      } 
    } else {
      /* desc order */
      if (val1 < val2) {
        result = 1;
      } else if (val1 > val2) {
        result = -1;
      } 
    }
    return result;
  };
}


var myArray = [ {name: 'zach', age: 39}, {name: 'Bernie', age: 10}];

myArray.sort(createComparisonOperator('name'));
// returns {name: 'Bernie', age: 10}
console.log(myArray[0]);

/* reason this works:
 * Array.prototype.sort() can have a function as a parameter, sort(function(a,b){ return a-b; }) 
 * where a and b are being compared.
 * Instead of building the function within the sort() a function can be called, but the two items
 * being compared cannot be referenced and passed - myArray.sort(someFunction(a,b)), this does not work.
 * If the function being called returns a function expecting the 2 parameters then that will work.
 * But this does not take into account ASCII characters.
 */

/*
 * Compare function that handles numbers, strings, and strings that contain ASCII characters
 * reason this works:
 * If the object is a string then convert it to lowercase using String.prototype.toLocaleLowerCase(). 
 *   1. when comparing letters lowercase comes before uppercase
 *   2. this method correctly changes ASCII characters to lower case
 * If both items being comapared are strings then stringcount will be 2 and the String.prototype.localeCompare()
 * is used to compare the strings. This method also handles ASCII characters correctly.
 * If the items being compared are numbers or a combination of letters and numbers then comparison operators are used. 
 *    a string compared to a number will return false so the final result will be 0. Avoid this comparison.
 * If the array is made up of objects, strings and numbers ... comparisons will really not work that well. Regardless
 * the val1 and val2 use a ternary operator to set their values. If it is an object get the value of the object property
 * otherwise set it to the value.
 */
function createComparisonOperator(propertyName, sortOrder){
/*
 * use this function in the array sort() method
 * to sort arrays that are made up of objects
 */
  if(sortOrder == undefined || (sortOrder !== 'asc' && sortOrder !== 'desc')){
    sortOrder = 'asc';
  }
  return function(obj1, obj2){
    var val1 = obj1[propertyName] !== undefined ? obj1[propertyName] : obj1;
    var val2 = obj2[propertyName] !== undefined ? obj2[propertyName] : obj2;
    var stringCount = 0;
    if( typeof val1 === 'string'){
      val1 = val1.toLocaleLowerCase();
      ++stringCount;
    } 
    if( typeof val2 === 'string'){
      val2 = val2.toLocaleLowerCase();
      ++stringCount;
    } 

    var result = 0;
    if( stringCount === 2) {
      /* strings are being copared */
      if( sortOrder === 'asc'){
        /* asc order */
          result = val1.localeCompare(val2);
      } else {
        /* desc order */
          result = val2.localeCompare(val1);
      }
    } else {
      /* a combination of numbers and/or strings are being compared */
      if( sortOrder === 'asc'){
        /* asc order */
        if (val1 < val2) {
          result = -1;
        } else if (val1 > val2) {
          result = 1;
        } 
      } else {
        /* desc order */
       if (val1 < val2) {
          result = 1;
        } else if (val1 > val2) {
          result = -1;
        } 
      }
    }
    return result;
  };
}


var myArray = [ {name: 'zach', age: 39}, {name: 'Bernie', age: 10}, {name: 'Àndrè', age: 15}];

myArray.sort(createComparisonOperator('age','asc'));
// returns {name: 'Bernie', age: 10}
console.log(myArray[0]);

myArray.sort(createComparisonOperator('name'));
// returns {name: 'Àndrè', age: 15}
console.log(myArray[0]);

myArray.sort(createComparisonOperator('name','desc'));
// returns {name: 'zach', age: 39}
console.log(myArray[0]);

/* please note if an array is made up of numbers, strings, and objects, the sort will not work as expected */

var myArray = [ {name: 'zach', age: 39}, {name: 'Bernie', age: 10}, {name: 'Àndrè', age: 15}, 'sam', 1];
/* sort on age you expect 1 to be first but it isn't because it is next to the string sam */
myArray.sort(createComparisonOperator('age','asc'));
/*
 * Business logic would have to be defined, for example if a string is compared to a number 
 * is the string always assumed to be a 1? Maybe use the srting length? It depends on what the final goal is.
 */
