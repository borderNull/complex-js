function each(arr,callback,thisArg) {
      var i
          for(i = 0; i < arr.length; i++) {
          callback.call(thisArg,arr[i],i,arr);
          }
          
}

each([1, 2, 3], function(num, i, nums) {
  console.log('Number: ' + num + ', index: ' + i + ',', nums)
});

//----------------FILTER--------------------//
function filter(arr,callback,thisArg) {
     var i, results = []; 
         for(i = 0; i < arr.length; i++) {
        if(callback.call(thisArg,arr[i],i,arr)) {
          results.push(arr[i]);
         }
     }
      return results   
};

var strs = ['Hello', 1,2,3,4,',', 'JavaScript', 'World', '!'];

var data = filter(strs, function(str) {
  return typeof str === 'string';
});

console.log(data); 

//----------------MAP-----------------------//

function map(arr,callback,thisArg) {
   var i, results = [];
      for(i = 0; i < arr.length; i++ ) {
       results.push(callback.call(thisArg,arr[i],i,arr));
      }
      return results;
};

var pows = map([10, 20, 30], Math.pow);
console.log(pows);

//--------------REDUCE--------------------//

function reduce(arr,callback,startValue) {
       var i, result = startValue;
       for(i = 0; i < arr.length; i++) {
        result = callback.call(null,result,arr[i],i,arr);
       }
     return result;
};

var strs = ['JavaScript', 'is', 'awesome'];

var strResults = reduce(strs, function(phrase, word, index) {
  return (index === 0) ? phrase + word : phrase + ' ' + word;
}, '');

console.log(strResults);

//----------------SLICE--------------------//

function slice(arr,callback,startValue) {
    var i, result = [];
    for(i = 0; i < arr.length; i++) {
     result.push(callback.call(startValue,))
    }
}
