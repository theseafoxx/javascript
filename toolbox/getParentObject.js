/*
 * Return the parent tag object based on the parent tag that is being looked for.
 * If the parent had a class name or id then you probably would not use this search.
 * Condition: I found the item(s) and now I need a specific parent node to affect a change to.
 * Example: There is an <ol> and some <li> have an icon, I grab all the icon objects then need 
 * to get at each parent <li>.
 */
  function getParent(obj, parentTag){
     if(obj.tagName === undefined){ return false;}
     var temp = obj.parentNode;
     if( temp.tagName === parentTag){
       return obj.parentNode;
     } else {
       return getParent(temp, parentTag);
     }
  }
