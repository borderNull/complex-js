let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


console.log("Тестовый массив " + testArr);
//-----------FOREACH------------//
function forEach(arr, callback, thisArg) {
    var i;
    for (i = 0; i < arr.length; i++) {
        callback.call(thisArg, arr[i], i, arr);
    }

}

console.log("forEach ===> Выводится значение индекс и массив для каждого числа");
forEach(testArr, function(item, i, arr) {
    console.log("Значение: " + item + " Индекс: " + i + " массив: [" + arr + "]");
})

//----------------FILTER--------------------//
function filter(arr, callback, thisArg) {
    var i, results = [];
    for (i = 0; i < arr.length; i++) {
        if (callback.call(thisArg, arr[i], i, arr)) {
            results[results.length] = arr[i];
        }
    }
    return results;
};


console.log("Filter ===> Выводится все что больше или равно 5");
let filterArr = filter(testArr, function(item, i, arr) {
    return item >= 5;
});
console.log(filterArr);

//----------------MAP-----------------------//

function map(arr, callback, thisArg) {
    var i, results = [];
    for (i = 0; i < arr.length; i++) {
        results.push(callback.call(thisArg, arr[i], i, arr));
    }
    return results;
};

console.log("Map ===> К каждому числу массива прибавляется единица");
let mapArr = map(testArr, function(item, i, arr) {
    return item + 1;
})
console.log(mapArr);

//--------------REDUCE--------------------//

function reduce(arr, callback, startValue) {
    var i, result = startValue;
    for (i = 0; i < arr.length; i++) {
        result = callback.call(null, result, arr[i], i, arr);
    }
    return result;
};

console.log("Reduce ===> Суммирование всех значений в массиве");
let testReduce = reduce(testArr, function(result, item, i, arr) {
    return result + item;
}, 0);
console.log(testReduce);

//----------------SLICE--------------------//

function slice([...arr], start, end) {
    let
        array = arr,
        lengthArr = array.length,
        startVal = start || 0,
        endVal = end || lengthArr,
        result = [];

    if (start < 0) startVal = lengthArr + startVal;
    if (endVal > lengthArr) endVal = lengthArr;

    for (startVal; startVal < endVal; startVal++) {
        result[result.length] = array[startVal];
    }

    return result;
}

console.log("Slice ===> Оставит все числа с 6 по 8 ");
let testSlice = slice(testArr, 5, 8);
console.log(testSlice);
