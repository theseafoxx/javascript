
/*
XSLT stylesheets to retrieve specific info from an XML
doc and format it to include in a web page, to make it
more readable --

pull info out of XML and apply formatting to include 
in a web page
*/


/* 
 * XSLTProcessor Example
 */

window.onload = function() {
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("get", "class.xml", false);
xmlhttp.send(null);
var xmldom = xmlhttp.responseXML;

xmlhttp = new XMLHttpRequest();
xmlhttp.open("get", "classes.xslt", false);
xmlhttp.send(null);
var xsltdom = xmlhttp.responseXML;

var processor = new XSLTProcessor();
processor.importStylesheet(xsltdom);

var result = processor.tranformToDocument(xmldom);

var xml = (new XMLSerializer()).serializeToString(result);
alert(xml);

}


/* 
 * XSLTProcessor Example - Fragment
 * You do not have to retrieve the entire document, can get a fragment instead
 */

window.onload = function() {
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("get", "class.xml", false);
xmlhttp.send(null);
var xmldom = xmlhttp.responseXML;

xmlhttp = new XMLHttpRequest();
xmlhttp.open("get", "classes.xslt", false);
xmlhttp.send(null);
var xsltdom = xmlhttp.responseXML;

var processor = new XSLTProcessor();
processor.importStylesheet(xsltdom);

var fragment = processor.tranformToFragment(xmldom, document);
var div = document.getElementById('divresult');
div.appendChild(fragment);

}

<div id="divresult"></div>




/* 
 * XSLTProcessor Example - IE
 */

window.onload = function() {
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("get", "class.xml", false);
xmlhttp.send(null);
var xmldom = xmlhttp.responseXML;

xmlhttp = new XMLHttpRequest();
xmlhttp.open("get", "classes.xslt", false);
xmlhttp.send(null);
var xsltdom = xmlhttp.responseXML;

if(xmldom.hasOwnProperty('transformNode')) {
  var result = xmldom.transformNode(xsltdom);
} else {
  var processor = new XSLTProcessor();
  processor.importStylesheet(xsltdom);

  var result = processor.tranformToDocument(xmldom);
}
var div = document.getElementById('divresult');
div.appendChild(result);

}

<div id="divresult"></div>
