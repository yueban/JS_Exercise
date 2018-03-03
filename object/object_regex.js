'use strict'

// var reg1 = /ABC\-001/;
// var reg2 = new RegExp('ABC\\-001');
// console.log(reg1);
// console.log(reg2);


// var reg = /\d+/;
// console.log(reg.test('123'));
// console.log(reg.test('aaa'));
// console.log(reg.test('aaa123'));


// var str = 'a, b,;;    c';
// console.log(str.split(' '));
// console.log(str.split(/[(\s)\,\;]+/));

var str = 'a123123,b,c';
var reg = /(\w)+/;
console.log(reg.exec(str));