'use strict'

onload = () => {
    // var p = document.getElementById('p-id');
    // // p.innerHTML = 'ABC <span style="color:red">RED</span> XYZ';
    // // p.innerHTML = '<script>alert("Hi")</script>';
    // // p.innerText = '<script>alert("Hi")</script>';
    // p.style.color = '#0000ff';
    // p.style.fontSize = '16px';
    // p.style.paddingTop = '2em';


    // 获取<p>javascript</p>节点:
    var js = document.getElementById('test-js');

    // 修改文本为JavaScript:
    js.innerText = 'JavaScript';

    // 修改CSS为: color: #ff0000, font-weight: bold
    js.style.color = '#ff0000';
    js.style.fontWeight = 'bold';

    // 测试:
    if (js && js.parentNode && js.parentNode.id === 'test-div' && js.id === 'test-js') {
        if (js.innerText === 'JavaScript') {
            if (js.style && js.style.fontWeight === 'bold' && (js.style.color === 'red' || js.style.color === '#ff0000' || js.style.color === '#f00' || js.style.color === 'rgb(255, 0, 0)')) {
                console.log('测试通过!');
            } else {
                console.log('CSS样式测试失败!');
            }
        } else {
            console.log('文本测试失败!');
        }
    } else {
        console.log('节点测试失败!');
    }
};