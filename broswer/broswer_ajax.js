'use strict'

function getPrice() {
    var
        js = document.createElement('script'),
        head = document.getElementsByTagName('head')[0];
    js.src = 'http://api.money.126.net/data/feed/0000001,1399001?callback=refreshPrice';
    head.appendChild(js);
}

function refreshPrice(data) {
    var labelResult = document.getElementById('label-result');
    labelResult.innerHTML = '当前价格：' +
        data['0000001'].name + ': ' +
        data['0000001'].price + '；' +
        data['1399001'].name + ': ' +
        data['1399001'].price;
}

onload = () => {
    var labelResult = document.getElementById('label-result');

    // function success(text) {
    //     labelResult.innerText = 'success:\n' + text;
    // }

    // function fail(code) {
    //     labelResult.innerText = 'fail:\n' + code;
    // }

    // var request = new XMLHttpRequest();
    // request.onreadystatechange = () => {
    //     console.log('readyState: ' + request.readyState);
    //     if (request.readyState == 4) { //finish
    //         console.log('status: ' + request.status);
    //         if (request.status == 200) {
    //             return success(request.responseText);
    //         } else {
    //             return fail(request.code);
    //         }
    //     } else {
    //         labelResult.innerText = 'request is sending';
    //     }
    // };
    // request.open('GET', '');
    // request.send();


    getPrice();
};