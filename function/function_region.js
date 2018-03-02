'use strict'

// function foo() {
//     var x = 1;
//     function bar() {
//         var x = 'A';
//         console.log(x);
//     }
//     bar();
// }

// foo();


// function foo() {
//     var x = 'x + ' + y;
//     console.log(x);;
//     var y = 'y';
// }
// same as
// function foo() {
//     var y;
//     var x;
//     x = 'x + ' + y
//     console.log(x);;
//     y = 'y';
// }

// foo();


// var title = 'js course';
// alert(title);
// console.log(window.title);
// console.log(1);


// var obj = {};
// obj.a = function a(a) {
//     console.log('a' + a);
// };
// obj.b = function b(b) {
//     console.log('b' + b);
// };
// var c = obj.a;

// obj.a(1);
// obj.b(2);
// c(3);


// function foo() {
//     // for (var i = 0; i < 100; i++) {}
//     for (let i = 0; i < 100; i++) {
//         // var j = 'j';
//         // let j = 'j';
//         const j = 'j';
//         j += 'k';
//         console.log('inner: ' + j);
//     }
//     // console.log(i);
//     console.log('outter: ' + j);
// }

// foo();


// // var arr = [3, 2, 1];
// // var [x, y, z] = arr;
// var arr = [3, [2, 1]];
// // var [x, [y, z]] = arr;
// var [, [, z]] = arr;

// // console.log(x);
// // console.log(y);
// console.log(z);


// var person = {
//     'name': 'jack',
//     'age': 18,
//     'region': 'china'
// }
// var {
//     age1,
//     name,
//     region
// } = person;
// console.log(`age: ${age1}`);
// console.log(`name: ${name}`);
// console.log(`region: ${region}`);


// var person = {
//     'name': 'jack',
//     'age': 18,
//     'gender': 'male',
//     address: {
//         'city': 'zhengzhou',
//         'country': 'china',
//         'province': 'henan',
//     }
// }

// var {
//     name,
//     gender,
//     age,
//     address: {
//         country,
//         city,
//     }
// } = person;
// console.log(`name: ${name}`);
// console.log(`age: ${age}`);
// console.log(`gender: ${gender}`);
// console.log(`city: ${city}`);
// console.log(`country: ${country}`);


function buildDate({
    year,
    month,
    day,
    hour = 0,
    minute = 0,
    second = 0
}) {
    return new Date(`${year}-${month}-${day} ${hour}:${minute}:${second}`);
}
console.log(buildDate({
    year: 2018,
    month: 3,
    day: 1
}));