var allNumbers = [1, 2, 4, 5, 6, 7, 8],
someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
noNumbers = ['это', 'массив', 'без', 'чисел'];

function isNumber(val) {
return typeof val === 'number';
}

function isAllTrue(source,filterFn) {
      var i
      if(typeof source !== 'object' ) {
      console.log(typeof source);
      throw new Error('Это не массив!');
      }
      else if(source.length === 0) {
      throw new Error('Массив пустой!');
      }
      else {
      try {
      for(i = 0;i < source.length; i++) {
       if(!filterFn(source[i]))
        return false
        }
       return true
     }
      catch(e) {
         console.error(e.message);
      }
    }
  }

console.log(isAllTrue(allNumbers, isNumber)); //вернет true
console.log(isAllTrue(someNumbers, isNumber)); //вернет false
console.log(isAllTrue(noNumbers, isNumber)); //вернет false

var SomeNumbers = [1,'a','b','c','d'],
    Numbers = [1,2,3,4,5,6,7],
    noNumbers = ['это', 'массив', 'без', 'чисел'];

//Функция-фильтр проверяет, передали ли ей число или нет. Аргумент - элемент массива
function filterFn(value) {
  return typeof value === 'number';
}; 

function isAllTrue(source, filterFn) {
	var i;
  //на массивы typeof выдает 'object'. О типизации в js потом поговорим
 	if(typeof source !== 'object') {
  	console.log(typeof source);
   	throw new Error("Это не массив!");
  }
  //нам передали массив - идем дальше
	else if(source.length === 0 ) {
  	throw new Error("Массив пустой!");
 	}
  //Массив не пустой, идем дальше
  else { 
    try {
     //Перебираем массив     
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
