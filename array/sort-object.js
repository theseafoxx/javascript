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

    if( sortOrder === 'asc'){
      /* asc order */
      if (val1 < val2) {
        return -1;
      } else if (val1 > val2) {
        return 1;
      } else {
        return 0;
      }
    } else {
      /* desc order */
      if (val1 < val2) {
        return 1;
      } else if (val1 > val2) {
        return -1;
      } else {
        return 0;
      }
    }
  };
}


var myArray = [ {name: 'zach', age: 39}, {name: 'Bernie', age: 10}];

myArray.sort(createComparisonOperator('name'));
// returns {name: 'Bernie', age: 10}
console.log(myArray[0]);
