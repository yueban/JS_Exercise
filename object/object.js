'use strict'

console.log(typeof 123);
console.log(typeof NaN);
console.log(typeof '123');
console.log(typeof true);
console.log(typeof Math.pow);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof undefined);
console.log('');

//package
var num = new Number(123);
console.log(typeof num);
console.log(num === 123);
console.log('');

var str = new String('123');
console.log(typeof str);
console.log(str === '123');
console.log('');

var bool = new Boolean(true);
console.log(typeof bool);
console.log(bool === true);
console.log('');

//parse
var num = Number(123);
console.log(typeof num);
console.log(num === 123);
console.log('');

var str = String('123');
console.log(typeof str);
console.log(str === '123');
console.log('');

var bool = Boolean(true);
console.log(typeof bool);
console.log(bool === true);
console.log('');


console.log(Array.isArray([]));
console.log(null === null);
console.log(typeof notExist === 'undefined');
// console.log(123.toString());
// console.log(null.toString());
console.log((123).toString());
console.log(123..toString());