'use strict'

onload = () => {
    // var div = $('#abc');
    // console.log(div);
    // console.log(div.get(0));
    // div.get(0).innerText = 123;

    // var pList = $('p');
    // console.log('tag p: ' + pList.length);

    // var redList = $('.red');
    // console.log('class red: ' + redList.length);

    // var redGreen = $('.red.green');
    // console.log('class red & green: ' + redGreen.length);

    // var account = $('[name=account]');
    // console.log(account.get(0));

    // var password = $('[type=password]');
    // console.log(password.get(0));

    // var items = $('[items="A B"]');
    // console.log(items.get(0));

    // var items = $('[items^=A]');
    // console.log(items.get(0));

    // var items = $('p[items$=B]');
    // console.log(items.get(0));

    // var divRed = $('div.red');
    // console.log(divRed.get(0));

    // var divRed = $('div[class=red]');
    // console.log(divRed.get(0));

    // var divPReds = $('div.red,p.red');
    // console.log(divPReds);


    var selected = null;

    // 仅选择JavaScript
    // selected = $('p#para-1');
    // 仅选择Erlang
    // selected = $('p[class="color-red color-green"]');
    // 选择JavaScript和Erlang
    // selected = $('.color-red');
    // 选择所有编程语言
    // selected = $('p[class^=color');
    // 选择名字input
    // selected = $('input[name=name]');
    // 选择邮件和名字input
    selected = $('input[name=name],input[name=email]');

    // 高亮结果:
    if (!(selected instanceof jQuery)) {
        return console.log('不是有效的jQuery对象!');
    }
    $('#test-jquery').find('*').css('background-color', '');
    selected.css('background-color', '#ffd351');
};