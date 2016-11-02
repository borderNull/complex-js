var calculator = (function(firstNumber) {
    this.firstNumber = firstNumber;


    return {
        sum: function() {
            let i, argSum = 0;
            for (i = 0; i < arguments.length; i++) {
                argSum += arguments[i];
            }
            return firstNumber + argSum;
        },
        dif: function() {
            let i, argDif = 0;
            for (i = 0; i < arguments.length; i++) {
                argDif += arguments[i];
            }
            return firstNumber - argDif;
        },
        div: function(num) {
            let i, argDiv = firstNumber;
            for (i = 0; i < arguments.length; i++) {
                if (arguments[i] !== 0) {
                    argDiv = argDiv / arguments[i];
                }
            }
            return argDiv;
        },
        mul: function(num) {
            let i, argMul = firstNumber;
            for (i = 0; i < arguments.length; i++) {
                argMul = argMul * arguments[i];
            }
            return argMul;
        }
    }
});


var myCalculator = calculator(200);

console.log("Третье задание ===>");
console.log(myCalculator.sum(1, 2, 3)); //вернет 206
console.log(myCalculator.dif(10, 20)); //вернет 170
console.log(myCalculator.div(2, 2)); //вернет 50
console.log(myCalculator.mul(2, 10)); //вернет 4000
