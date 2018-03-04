'use strict'

// onload = () => {
//     var mon = document.getElementById('monday');
//     var tue = document.getElementById('tuesday');
//     console.log(mon.value);
//     console.log(tue.value);
//     mon.checked = true;
//     console.log(mon.checked);
//     console.log(tue.checked);
// };


// function doSubmitForm() {
//     var form = document.getElementById('test-form');
//     console.log('doSubmitForm');
//     form.submit();
// }


// function checkForm() {
//     var form = document.getElementById('test-form');
//     console.log('checkForm');
//     return false;
// }


// function checkForm() {
//     var inputPwd = document.getElementById('input-password');
//     var pwd = document.getElementById('md5-password');
//     // pwd.value = toMD5(inputPwd.value);
//     pwd.value = inputPwd.value;
//     console.log(pwd.value);
//     return false;
// }


var checkRegisterForm = function () {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password-2').value;

    if (!username.match(/^\w{3,10}$/)) {
        alert('用户名必须是3-10位英文字母或数字');
        return false;
    }
    if (!password.match(/^.{6,20}$/)) {
        alert('口令必须是6-20位');
        return false;
    }
    if (!(password === password2)) {
        alert('两次输入口令必须一致');
        return false;
    }

    return true;
}

// 测试:
;
(function () {
    window.testFormHandler = checkRegisterForm;
    var form = document.getElementById('test-register');
    if (form.dispatchEvent) {
        var event = new Event('submit', {
            bubbles: true,
            cancelable: true
        });
        form.dispatchEvent(event);
    } else {
        form.fireEvent('onsubmit');
    }
})();