var i = 0;
function consoleRec(source) {
  
    if(i<source.length) {
    	console.log(source[i]);
    	i++;
    	consoleRec(source,index);
    }
}

consoleRec(["я","умею","писать","рекурсивные","функции"]);
