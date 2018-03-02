'use strict'

// function lazy_sum(arr) {
//     var sum = function () {
//         return arr.reduce(function (x, y) {
//             return x + y;
//         });
//     }
//     return sum;
// }
// var f = lazy_sum([1, 2, 3, 4, 5]);
// console.log(f);
// console.log(f());

// var f1 = lazy_sum([1, 2, 3]);
// var f2 = lazy_sum([1, 2, 3]);
// console.log(f1 == f2);
// console.log(f1() == f2());
// console.log(f1() === f2());


// function count() {
//     var arr = [];
//     for (var i = 1; i <= 3; i++) {
//     // for (let i = 1; i <= 3; i++) {
//         arr.push(function () {
//             return i * i;
//         });
//     }
//     return arr;
// }
// var result = count();
// console.log(result[0]());
// console.log(result[1]());
// console.log(result[2]());


// function count() {
//     var arr = [];
//     for (var i = 1; i <= 3; i++) {
//         arr.push((function (n) {
//             return function () {
//                 return n * n;
//             };
//         })(i));
//     }
//     return arr;
// }
// var result = count();
// console.log(result[0]());
// console.log(result[1]());
// console.log(result[2]());


// function create_counter(initial) {
//     var x = initial || 0;
//     return {
//         count: function () {
//             x++;
//             return x;
//         }
//     }
// }

// var counter = create_counter();
// console.log(counter.count());
// console.log(counter.count());
// console.log(counter.count());

// var counter10 = create_counter(10);
// console.log(counter10.count());
// console.log(counter10.count());
// console.log(counter10.count());


// function make_pow(n) {
//     return function (i) {
//         return Math.pow(i, n);
//     }
// }

// var pow2 = make_pow(2);
// console.log(pow2(2));
// var pow3 = make_pow(3);
// console.log(pow3(3));


// 定义数字0:
var zero = function (f) {
    return function (x) {
        return x;
    }
};

// 定义数字1:
var one = function (f) {
    return function (x) {
        return f(x);
    }
};

// 定义加法:
function add(n, m) {
    return function (f) {
        return function (x) {
            return m(f)(n(f)(x));
        }
    }
}

// 计算数字2 = 1 + 1:
var two = add(one, one);

// 计算数字3 = 1 + 2:
var three = add(one, two);

// 计算数字5 = 2 + 3:
var five = add(two, three);

// 你说它是3就是3，你说它是5就是5，你怎么证明？

// 呵呵，看这里:

// 给3传一个函数,会打印3次:
(three(function () {
    console.log('print 3 times');
}))();

// var A = function () {
//     console.log('print 3 times');
// };
// three(A) == A(A(A(x)));

// 给5传一个函数,会打印5次:
(five(function () {
    console.log('print 5 times');
}))();