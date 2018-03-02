'use strict'

// function abs(x) {
//     if (typeof x != 'number') {
//         throw 'Not a Number';
//     }
//     if (x > 0) {
//         return x;
//     } else {
//         return -x;
//     }
// }

// var abs = function (x) {
//     if (x > 0) {
//         return x;
//     } else {
//         return -x;
//     }
// };

// console.log(abs());


// function foo(x) {
//     console.log(`x=${x}`);
//     for (var arg of arguments) {
//         console.log(arg);
//     }
// }

// foo(1, 2, 3);


// function abs(x) {
//     if (arguments.length == 0) {
//         return 0;
//     }

//     if (typeof x != 'number') {
//         throw 'Not a Number';
//     }

//     return x > 0 ? x : -x;
// }

// console.log(abs());
// console.log(abs(''));


// function sum(...rest) {
//     var sum = 0;
//     for (var x of rest) {
//         sum += x;
//     }
//     return sum;
// }

// var i, args = [];
// for (i = 1; i <= 100; i++) {
//     args.push(i);
// }
// if (sum() !== 0) {
//     console.log('测试失败: sum() = ' + sum());
// } else if (sum(1) !== 1) {
//     console.log('测试失败: sum(1) = ' + sum(1));
// } else if (sum(2, 3) !== 5) {
//     console.log('测试失败: sum(2, 3) = ' + sum(2, 3));
// } else if (sum.apply(null, args) !== 5050) {
//     console.log('测试失败: sum(1, 2, 3, ..., 100) = ' + sum.apply(null, args));
// } else {
//     console.log('测试通过!');
// }


function area_of_circle(r, pi) {
    if (pi == undefined) {
        pi = 3.14;
    }
    return pi * Math.pow(r, 2);
}

console.log(area_of_circle(2));
console.log(area_of_circle(2, 3.1416));