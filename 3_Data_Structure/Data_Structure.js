//-----------FOREACH------------//
function forEach(arr, callback, thisArg) {
    var i;
    for (i = 0; i < arr.length; i++) {
        callback.call(thisArg, arr[i], i, arr);
    }

}

each([1, 2, 3], function(num, i, nums) {
    console.log('Number: ' + num + ', index: ' + i + ',', nums)
});

//----------------FILTER--------------------//
function filter(arr, callback, thisArg) {
    var i, results = [];
    for (i = 0; i < arr.length; i++) {
        if (callback.call(thisArg, arr[i], i, arr)) {
            results.push(arr[i]);
        }
    }
    return results
};


//----------------MAP-----------------------//

function map(arr, callback, thisArg) {
    var i, results = [];
    for (i = 0; i < arr.length; i++) {
        results.push(callback.call(thisArg, arr[i], i, arr));
    }
    return results;
};



//--------------REDUCE--------------------//

function reduce(arr, callback, startValue) {
    var i, result = startValue;
    for (i = 0; i < arr.length; i++) {
        result = callback.call(null, result, arr[i], i, arr);
    }
    return result;
};



//----------------SLICE--------------------//

function slice([... arr], start, end){
    let
        array = arr,
        lengthArr = array.length,
        startVal = start || 0,
        endVal = end || lengthArr,
        result = [];

    if(start < 0) startVal = lengthArr + startVal;
    if(endVal > lengthArr) endVal = lengthArr;

    for(startVal; startVal < endVal; startVal++){
        result[result.length] = array[startVal];
    }

    return result;
}

