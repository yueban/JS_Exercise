'use strict'

console.log('inner: ' + window.innerWidth + ' x ' + window.innerHeight);
console.log('outer: ' + window.outerWidth + ' x ' + window.outerHeight);

console.log('navigator.appName: ' + navigator.appName);
console.log('navigator.appVersion: ' + navigator.appVersion);
console.log('navigator.appCodeName: ' + navigator.appCodeName);
console.log('navigator.languages: ' + navigator.languages);
console.log('navigator.platform: ' + navigator.platform);
console.log('navigator.userAgent: ' + navigator.userAgent);

var width = window.innerWidth || document.body.clientWidth;
console.log('width: ' + width);

console.log('screen.width: ' + screen.width);
console.log('screen.height: ' + screen.height);
console.log('screen.colorDepth: ' + screen.colorDepth);

console.log('location.href: ' + location.href);
console.log('location.protocol: ' + location.protocol);
console.log('location.host: ' + location.host);
console.log('location.port: ' + location.port);
console.log('location.pathname: ' + location.pathname);
console.log('location.search: ' + location.search);
console.log('location.hash: ' + location.hash);

// if (confirm('reload?')) {
//     location.reload();
// } else {
//     location.assign('https://www.baidu.com');
// }

// document.title = '112233';

window.onload = () => {
    var menu = document.getElementById('drink-menu');
    var drinks = document.getElementsByTagName('dt');

    console.log(menu);
    console.log(drinks);
    for (let x of drinks) {
        console.log(x.innerText);
        console.log(x.innerHTML);
    }

    console.log(document.cookie);
};

