'use strict'

// var fn = x => x * x;
// console.log(fn(2));

// var fn2 = (x, y) => x * y;
// console.log(fn2(2, 3));

// var fn3 = () => 2.222;
// console.log(fn3());

// var fn4 = (x, y, ...rest) => {
//     let sum = x + y;
//     for (let i = 0; i < rest.length; i++) {
//         sum += rest[i];
//     }
//     return sum;
// }
// console.log(fn4(1));
// console.log(fn4(1, 2));
// console.log(fn4(1, 2, 3, 4, 5));


// // var fn = x => {
// //     foo: x
// // };
// var fn = x => ({
//     foo: x
// });

// console.log(fn(2));


// var obj = {
//     birth: 1992,
//     getAge: function () {
//         var fn = () => new Date().getFullYear() - this.birth;
//         return fn.call();
//         // return fn.call({
//         //     birth: 1800
//         // });
//     }
// };
// console.log(obj.getAge());


var arr = [5, 3, 4, 2, 1];
arr.sort((x, y) => y - x);
console.log(arr);