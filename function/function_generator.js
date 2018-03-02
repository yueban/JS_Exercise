'use strict'

// function* fib(max) {
//     var a = 0,
//         b = 1,
//         n = 0;

//     while (n < max) {
//         yield a;
//         [a, b] = [b, a + b];
//         n++;
//     }
// }

// var fib5 = fib(5);

// // console.log(fib5.next());
// // console.log(fib5.next());
// // console.log(fib5.next());
// // console.log(fib5.next());
// // console.log(fib5.next());
// // console.log(fib5.next());

// for (var x of fib5) {
//     console.log(x);
// }


// var fib = {
//     a: 0,
//     b: 1,
//     n: 0,
//     max: 5,
//     next: function () {
//         if (this.n < this.max) {
//             [this.a, this.b] = [this.b, this.a + this.b];
//             this.n++;
//             return this.a;
//         } else {
//             return undefined;
//         }
//     }
// };
// console.log(fib.next());
// console.log(fib.next());
// console.log(fib.next());
// console.log(fib.next());
// console.log(fib.next());
// console.log(fib.next());

function* next_id() {
    var current_id = 1;
    while (true) {
        yield current_id;
        current_id++;
    }
}
var nextId = next_id();
console.log(nextId.next());
console.log(nextId.next());
console.log(nextId.next());
console.log(nextId.next());
console.log(nextId.next());
console.log(nextId.next());