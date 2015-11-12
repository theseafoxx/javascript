/*
 * Task - return all the indexes of ___ in a string
 * Task - return all the indexes of ___ in an array
 */
 
/* return all the instances of Nano */
var myString = "Nano,Nano,Volvo,BMW,Nano,VW,Nano";
var nanoArray = [];

/* Regexp.prototype.exec() */
/* the reason this works:
 * exec() has an attribute called lastIndex which is set to the next position following the most recent match
 */
var pattern = /Nano/g;
while( (match = pattern.exec(myString)) != null ){
  nanoArray.push(match.index);
}
console.log(nanoArray);
nanoArray = nanoArray.splice(); /* empty the nanoArray */

/* String.prototype.substr() */
/* the reason this works:
 * The for loop iterates through each character of the string.
 * substr() returns a piece of the string starting at ii and ending at the length of the string.
 * str.substr(indexStart[, length])
 * If the returned sub string matches the look up word then it is appened to the array
 * and to reduce the number of iterations the length of the loop up string minus one is added to the loop variable ii.
 * We subtract 1 b/c when the loop completes an iteration ii is incremented by 1, otherwise we would have skipped a character.
 */
var lookUp = "Nano";
var lookUpLen = lookUp.length;
for(var ii = 0; ii < myString.length; ii++){
  if( myString.substr(ii,lookUpLen) === lookUp){
    nanoArray.push(ii);
    ii += lookUpLen-1;
  }
}
console.log(nanoArray);
nanoArray = nanoArray.splice(); /* empty the nanoArray */

/* String.prototype.indexOf() */
/* reason this works:
 * indexOf() returns -1 if the searchValue is not found, which will make to loop condition false.
 * str.indexOf(searchValue, fromIndex)
 * ii is set to the index where the searchValue was found.
 * indexOf() fromIndex uses ii+1 so that it increments the position to search at, rather than creating an unending loop.
 * Since pos is the index of the string we are looking for it can be added to the array without an additional evaluation.
 */
for(var ii = -1; (pos = myString.indexOf("Nano",ii+1)) >= 0; ii = pos){
  nanoArray.push(pos);
}
console.log(nanoArray);
nanoArray = nanoArray.splice(); /* empty the nanoArray */

/* String.prototype.substring() */
/* the reason this works:
 * Same as the for loop using substr(), except substring() second parameter needs an index rather than the length
 * str.substring(indexStart[, indexEnd]) 
 */
for(var ii = 0; ii < myString.length; ii++){
  if( myString.substring(ii,ii+lookUpLen) === lookUp){
    nanoArray.push(ii);
    ii += lookUpLen-1;
  }
}

console.log(nanoArray);
nanoArray = nanoArray.splice(); /* empty the nanoArray */
/* 
 * Turn the string into an array with split(), then find it via the array approach
 */
  
var myArray = myString.split(",");
/* 
 * logic to return the indexes of ___ in an Array (not that exciting)
 */
 
/* for loop 
 * what I would always use
 */
for(var ii = 0, arrayLen = myArray.length; ii < arrayLen; ii++ ){
  if( myArray[ii] === 'Nano'){
    nanoArray.push(ii);
  }
};
console.log(nanoArray);
nanoArray = nanoArray.splice();

// ☹☹☹☹☹☹☹☹☹☹☹☹☹☹☹☹
// and now lets get out of my comfort zone
// ☹☹☹☹☹☹☹☹☹☹☹☹☹☹☹☹

/* Array.prototype.indexOf() */
/* reason this works:
 * arr.indexOf(searchElement, fromIndex)
 * As long as the search criteria can be found within the string then the loop will iterate.
 * indexOf() will return a number >= 0 if it finds the search criteria.
 * We are iterating over the string by setting the indexOf() fromIndex equal to ii + 1.
 * After a loop completes ii is set to pos and pos was set within the for loop condition.
 * 1 is added to ii so that the fromIndex iterates rather than looks at the same position forever.
 */
for(var ii = -1; (pos = myArray.indexOf('Nano',ii+1)) >= 0; ii = pos ){
  nanoArray.push(pos);
}
console.log(nanoArray);
nanoArray = nanoArray.splice();

var pos = -1;
while( (pos = myArray.indexOf("Nano",pos+1)) >= 0 ){
  nanoArray.push(pos);
}
console.log(nanoArray);
nanoArray = nanoArray.splice();

/* Array.prototype.forEach() -- loops through an array just like a for loop */
myArray.forEach(function(item, index, array) {
  if( item === 'Nano'){
    nanoArray.push(index);
  }
});
console.log(nanoArray);
nanoArray = nanoArray.splice();

/* Array.prototype.every() will loop through the entire array if it returns true */
myArray.every(function(item, index, array) {
  if( item === 'Nano'){
    nanoArray.push(index);
  }
  return true;
});
console.log(nanoArray);
nanoArray = nanoArray.splice();

/* Array.prototype.some() will loop through the entire array if it returns false */
myArray.some(function(item, index, array) {
  if( item === 'Nano'){
    nanoArray.push(index);
  }
  return false;
});
console.log(nanoArray);
nanoArray = nanoArray.splice();

/* Array.prototype.filter() will loop though 
 */
myArray.filter(function(item, index, array) {
  if( item === 'Nano'){
    nanoArray.push(index);
  }
});

/* Array.prototype.map() will loop through the entire array, we do not have to change the contents
 */
myArray.map(function(item, index, array) {
  if( item === 'Nano'){
    nanoArray.push(index);
  }
});
console.log(nanoArray);
nanoArray = nanoArray.splice();

/* Array.prototype.reduce() will loop through the entire array
 * At the start either the argument prev can hold the first array item 
 * or it can be set by the reduce second argument .
 */
myArray.reduce(function(prev, cur, index, array) {
  if( cur === 'Nano'){
    prev.push(index);
  }
  return prev;
},[]);
console.log(prev);
