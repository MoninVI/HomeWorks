// Практика №2 Обработка ошибок и отладчик


function isAllTrue(source, filterFn) {
    filterFn(source);
    if (filterFn(source) == 'true') {
        return 'true';
    };
    if (filterFn(source) == 'false') {
        return 'false';
    };
};


var allNumbers = [1, 2, 4, 5, 6, 7, 8],
    //someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
    //noNumbers = ['это', 'массив', 'без', 'чисел'];


    function isNumber(val) {
        return typeof val === 'number';
    }


console.log(isAllTrue(allNumbers, isNumber)); //вернет true
//console.log(isAllTrue(someNumbers, isNumber)); //вернет false
//console.log(isAllTrue(noNumbers, isNumber)); //вернет false