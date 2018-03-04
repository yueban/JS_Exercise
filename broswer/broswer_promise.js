'use strict'

// function callback() {
//     console.log('callback');
// }

// console.log('before callback');
// setTimeout(callback, 1000);
// console.log('after callback');


// function test(resolve, reject) {
//     var timeOut = Math.random() * 2;
//     console.log('set timout: ' + timeOut);
//     setTimeout(function () {
//         if (timeOut < 1) {
//             console.log('call resolve()');
//             resolve('200 OK');
//         } else {
//             console.log('call reject()');
//             resolve('timeout in ' + timeOut + ' seconds');
//         }
//     }, timeOut * 1000);
// }

// new Promise(test).then(function (result) {
//     console.log('result: ' + result);
// }).catch(function (reason) {
//     console.log('reason: ' + reason);
// });


// onload = () => {
//     var divLogging = document.getElementById('div-logging');

//     while (divLogging.children.length > 0) {
//         divLogging.removeChild(divLogging.children[divLogging.children.length - 1]);
//     }

//     function log(text) {
//         var p = document.createElement('p');
//         p.innerText = text;
//         divLogging.appendChild(p);
//     }

//     function multiply(input) {
//         return new Promise(function (resolve, reject) {
//             log(`calculating ${input} * ${input} ...`);
//             setTimeout(resolve, 500, input * input);
//         });
//     }

//     function add(input) {
//         return new Promise(function (resolve, reject) {
//             log(`calculating ${input} + ${input} ...`);
//             setTimeout(resolve, 500, input + input);
//         });
//     }

//     multiply(3)
//         .then(add)
//         .then(multiply)
//         .then(add)
//         .then(multiply)
//         .then(add)
//         .then(function (result) {
//             log(`result: ${result}`);
//         });
// };


// function ajax(method, url, data) {
//     var request = new XMLHttpRequest();
//     return new Promise(function (resolve, reject) {
//         request.onreadystatechange = () => {
//             if (request.readyState == 4) {
//                 if (request.status == 200) {
//                     resolve(request.responseText);
//                 } else {
//                     reject(request.status);
//                 }
//             }
//         };
//         request.open(method, url);
//         request.send(data);
//     });
// }

// onload = () => {
//     var logging = document.getElementById('logging');

//     // ajax()
// };


onload = () => {
    var p1 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 2000, 'p1');
    });
    var p2 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 500, 'p2');
    });
    // Promise.all([p1, p2]).then(function (results) {
    //     document.getElementById('logging').innerText = results;
    // });
    Promise.race([p1, p2]).then(function (results) {
        document.getElementById('logging').innerText = results;
    });
};