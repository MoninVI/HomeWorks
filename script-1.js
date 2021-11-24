// function consoleRec(a, b) {
//     console.log(a[b]);
//     b += 1
//     if (b < a.length) {
//         consoleRec(a, b);
//     }
// };

// consoleRec(['я', 'умею', 'писать', 'рекурсивные', 'функции'], 0);


// Факториалы:
// 5! = 5 x 4 x 3 x 2 x 1 = 120

// function Cik(n) {
//     var result = 1;

//     while (n) {
//         result = result * n;
//         n = n - 1;
//     }
//     return result;
// }

// console.log(Cik(4));


// function Rec(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * Rec(n - 1);
//     }
// }
// console.log(Rec(5));



//Получите целые числа в диапазоне
//Пример: диапазон (10, 18)
//Ожидаемый результат: [11,12,13,14,15,16,17]


// Решение циклом:
// function Cik(start, stop) {
//     var a = [start],
//         b = start;
//     while (b < stop) {
//         a.push(b += 1);
//     }
//     return a;
// }
// console.log(Cik(10, 18));

//Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

// function Arrays(a, b) {
//     var arr1 = a;
//     var arr2 = b;
//     var resultSumm = arr1.concat(arr2);
//     return resultSumm;
// };

// console.log(Arrays(['a', 'b', 'c'], [1, 2, 3]));