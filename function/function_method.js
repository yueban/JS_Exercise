'use strict'

// var jack = {
//     name: '小明',
//     birth: 1992,
//     age: function () {
//         return new Date().getFullYear() - this.birth;
//     }
// }
// console.log(jack.age());

// var fn = jack.age;
// fn();


// var jack = {
//     name: '小明',
//     birth: 1992,
//     age: function () {
//         var that = this;

//         function getAge() {
//             return new Date().getFullYear() - that.birth;
//         }

//         return getAge();
//     }
// }
// console.log(jack.age());


// function getAge() {
//     return new Date().getFullYear() - this.birth;
// }
// var jack = {
//     name: '小明',
//     birth: 1992,
// }
// console.log(getAge.apply(jack));
// console.log(getAge.call(jack));


// var count = 0;
// var oldParseInt = parseInt;
// parseInt = function () {
//     count++;
//     return oldParseInt.apply(null, arguments);
// }
// parseInt('3');
// parseInt('2');
// parseInt('1');
// console.log(count);