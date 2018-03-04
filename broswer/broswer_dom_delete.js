'use strict'

onload = () => {
    // var parent = document.getElementById('parent');
    // parent.removeChild(parent.children[0]);
    // parent.removeChild(parent.children[1]);


    var list = document.getElementById('test-list');
    for (var i = list.children.length - 1; i >= 0; i--) {
        var elem = list.children[i];
        if (elem.innerHTML.match(/Swift|ANSI\sC|DirectX/)) {
            list.removeChild(elem);
        }
    }

    ;
    (function () {
        var
            arr, i,
            t = document.getElementById('test-list');
        if (t && t.children && t.children.length === 3) {
            arr = [];
            for (i = 0; i < t.children.length; i++) {
                arr.push(t.children[i].innerText);
            }
            if (arr.toString() === ['JavaScript', 'HTML', 'CSS'].toString()) {
                console.log('测试通过!');
            } else {
                console.log('测试失败: ' + arr.toString());
            }
        } else {
            console.log('测试失败!');
        }
    })();
};