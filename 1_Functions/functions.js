'use strict';

var i = 0;
function consoleRec(source) {
  
    if(i<source.length) {
    	console.log(source[i]);
    	i++;
    	consoleRec(source,i);
    }
}

consoleRec(["я","умею","писать","рекурсивные","функции"]);
