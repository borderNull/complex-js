var SomeNumbers = [1,'a','b','c','d'],
    Numbers = [1,2,3,4,5,6,7],
    noNumbers = ['это', 'массив', 'без', 'чисел'];

function filterFn(value) {
  return typeof value === 'number';
}; 

function isAllTrue(source, filterFn) {
	var i;

 	if(typeof source !== 'object') {
  	console.log(typeof source);
   	throw new Error("Это не массив!");
  }
	else if(source.length === 0 ) {
  	throw new Error("Массив пустой!");
 	}
  else { 
    try {

    if(source.some(filterFn)) {
        return true
    }
    else {
       return false
    }
     return true;
   }
    catch(e) {
      console.error(e.message);
    }
	}
}

console.log(isAllTrue(Numbers,filterFn));
console.log(isAllTrue(SomeNumbers,filterFn));
console.log(isAllTrue(noNumbers,filterFn));