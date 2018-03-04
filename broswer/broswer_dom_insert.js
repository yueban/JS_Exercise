'use strict'

onload = () => {
    // var js = document.getElementById('js');
    // var div = document.getElementById('list');
    // // div.appendChild(js);


    // var haskell = document.createElement('p');
    // haskell.id = 'hashkell';
    // haskell.innerText = 'Haskell';
    // // div.appendChild(haskell);


    // // var d = document.createElement('style');
    // // d.setAttribute('type', 'text/css');
    // // d.innerHTML = 'p { color: red }';
    // // var head = document.getElementsByTagName('head')[0];
    // // head.appendChild(d);


    // var python = document.getElementById('python');
    // div.insertBefore(haskell, python);


    var list = document.getElementById('test-list');
    var elemList = [];
    for (var i = 0; i < list.children.length; i++) {
        elemList.push(list.children[i]);
    }
    var sortedElemList = elemList.slice().sort((x, y) => {
        return x.innerHTML > y.innerHTML;
    });
    for (var elem of sortedElemList) {
        list.appendChild(elem);
    }

    (function () {
        var
            arr, i,
            t = document.getElementById('test-list');
        if (t && t.children && t.children.length === 5) {
            arr = [];
            for (i = 0; i < t.children.length; i++) {
                arr.push(t.children[i].innerText);
            }
            if (arr.toString() === ['Haskell', 'JavaScript', 'Python', 'Ruby', 'Scheme'].toString()) {
                console.log('测试通过!');
            } else {
                console.log('测试失败: ' + arr.toString());
            }
        } else {
            console.log('测试失败!');
        }
    })();
};