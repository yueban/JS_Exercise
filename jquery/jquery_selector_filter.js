'use strict'

onload = () => {
    // var ul = $('ul.lang');
    // var dy = ul.find('.dy');
    // var swift = ul.find('#swift');
    // var haskell = ul.find('[name=haskell]');
    // console.log(dy);
    // console.log(swift);
    // console.log(haskell);


    // var swift = $('#swift');

    // // var parent = swift.parent();
    // var parent = swift.parent('.red');
    // console.log(parent);

    // var scheme = swift.next();
    // var haskell = scheme.next();
    // console.log(scheme);
    // console.log(haskell);

    // var python = swift.prev();
    // var js = swift.prev('.js');
    // console.log(python);
    // console.log(js);


    // var lis = $('ul.lang li');
    // var dy = $('ul.lang li').filter('.dy');;
    // console.log(dy);

    // var dy = lis.filter(function () {
    //     return this.innerText.indexOf('Java') !== -1;
    // });
    // console.log(dy);

    // var arr = lis.map(function () {
    //     return this.innerText;
    // }).get();
    // console.log(arr);

    // var js = lis.first();
    // var haskell = lis.last();
    // var sliceList = lis.slice(2, 4);
    // console.log(js);
    // console.log(haskell);
    // console.log(sliceList);
};

function checkSubmit() {
    var nameDoms = $('[name]').filter(function (expr, elems, not) {
        return !elems.hasAttribute('type') || elems.getAttribute('type') !== 'radio' || elems.checked == true;
        return true;
    });

    var items = {};
    for (var dom of nameDoms) {
        items[dom.getAttribute('name')] = dom.value;
    }
    console.log(items);

    return false;
}