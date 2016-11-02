написать модуль, который экспортирует аналоги методов для работы с массивами:
**forEach**, **filter**, **map**, **slice**, **reduce**, **splice**  пример:

    let array = [1, 2, 3, 4, 5, 6];
    forEach(array, item => console.log(item));
    let greaterThan4 = filter(array, item => item > 4);
    let sqare = map(array, item => item*item);


Внимание:
 в данном задании запрещено использовать встроенные методы для работы с массивами! Разрешено использовать стандартные 
 операторы **for/for-in/while/if** (и т.д.) и свойство **length**