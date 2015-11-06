/*
 * Task - return all the indexes of ___ in a string
 * Task - return all the indexes of ___ in an array
 */
 
/* return all the instances of Nano */
var myString = "Nano,Volvo,BMW,Nano,VW,Nano";
var nanoArray = [];

/* Regexp.prototype.exec() */
var pattern = /Nano/g;
while( (match = pattern.exec(myString)) != null ){
  nanoArray.push(match.index);
}
console.log(nanoArray);
nanoArray = nanoArray.splice(); /* empty the nanoArray */

/* String.prototype.substr() */
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

/* String.prototype.substring() */
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
