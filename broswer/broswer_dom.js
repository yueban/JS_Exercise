'use strict'

onload = () => {
    var test_div = document.getElementById('test-div');
    // 选择<p>JavaScript</p>:
    var js = document.getElementById('test-p');
    console.log(js.innerHTML);

    // 选择<p>Python</p>,<p>Ruby</p>,<p>Swift</p>:
    var arr = test_div.getElementsByClassName('c-red c-green')[0].children;
    for (let x of arr) {
        console.log(x.innerHTML);
    }

    // 选择<p>Haskell</p>:
    var haskell = test_div.getElementsByClassName('c-green');
    haskell = haskell[haskell.length - 1].lastElementChild;
    console.log(haskell);

    // 测试:
    if (!js || js.innerText !== 'JavaScript') {
        alert('选择JavaScript失败!');
    } else if (!arr || arr.length !== 3 || !arr[0] || !arr[1] || !arr[2] || arr[0].innerText !== 'Python' || arr[1].innerText !== 'Ruby' || arr[2].innerText !== 'Swift') {
        console.log('选择Python,Ruby,Swift失败!');
    } else if (!haskell || haskell.innerText !== 'Haskell') {
        console.log('选择Haskell失败!');
    } else {
        console.log('测试通过!');
    }

};