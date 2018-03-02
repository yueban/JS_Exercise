'use strict'

/* map/reduce */

// function add(x, y, f) {
//     return f(x) + f(y);
// }
// console.log(add(-5, 6, Math.abs));


// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr.map(function (x) {
//     return Math.pow(x, 2);
// }));
// console.log(arr.map(String));


// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.reduce(function (x, y) {
//     return x * 10 + y;
// }));


// var str = '13579';
// var num = str.split('').map(function (x) {
//     return parseInt(x);
// }).reduce(function (x, y) {
//     return x * 10 + y;
// });
// console.log(num === 13579);


// var arr = ['1', '2', '3'];
// var r;
// r = arr.map(function (x) {
//     return parseInt(x);
// });
// r = arr.map(parseInt);
// console.log(parseInt('2', 1));
// console.log(r);


/* filter */

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var filterArr = arr.filter(function (x) {
//     return x % 2 == 0;
// });
// console.log(filterArr);


// var arr = ['1', null, '', undefined, 'a'];
// var filterArr = arr.filter(function (x) {
//     return x && x.trim();
// });
// console.log(filterArr);


// var arr = [1, 2, 3, 4, 1, 2, 3];
// var result = arr.filter(function (e, i, self) {
//     return self.indexOf(e) === i;
// });
// console.log(result);


// function getPrimes(arr) {
//     return arr.filter(function (x) {
//         if (x < 2) {
//             return false;
//         }
//         for (let i = 2; i < x; i++) {
//             if (x % i == 0) {
//                 return false;
//             }
//         }
//         return true;
//     });
// }

// var arr = [];
// for (var i = 1; i < 100; i++) {
//     arr.push(i);
// }
// var result = getPrimes(arr);
// console.log(result);


/* sort */

// var arr = [1, 2, 3, '22', '33'];
// console.log(arr.sort());


var arr = ['a', 'e', 'c', 'D', 'B'];
var arrSort = arr.map(function (x) {
    return x.toUpperCase();
}).sort();
console.log(arr);
console.log(arrSort);