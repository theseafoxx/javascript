/* 
 * hide items in the left nav on Mozilla MDN that are not up to snuff
 */

var iconList = ['icon-beaker', 'icon-warning-sign', 'icon-trash', 'icon-thumbs-down-alt']; 

for(var ii = 0, len = iconList.length; ii < len; ii++) {
  hideParent(iconList[ii]);
}

function hideParent(className) {
  var hideObj = document.getElementsByClassName(className);
  for(var ii = 0, len = hideObj.length; ii < len; ii++) {
    var parent = getParent(hideObj[ii], 'LI');
    if(parent) {
      parent.style.display = 'none';
    }
  }
}

function getParent(obj, parentTag){
  if(obj.tagName === undefined){ return false;}
    var temp = obj.parentNode;
    if( temp.tagName === parentTag){
      return obj.parentNode;
    } else {
      return getParent(temp, parentTag);
    }
}
