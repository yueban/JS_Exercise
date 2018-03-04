'use strict'

onload = () => {
    // var canvas = document.getElementById('test-canvas');
    // var ctx = canvas.getContext('2d');

    // ctx.clearRect(0, 0, 200, 200);
    // ctx.fillStyle = '#dddddd';
    // ctx.fillRect(10, 10, 130, 130);

    // var path = new Path2D();
    // path.arc(75, 75, 50, 0, Math.PI * 2, true);
    // path.moveTo(110, 75);
    // path.arc(75, 75, 35, 0, Math.PI, false);
    // path.moveTo(65, 65);
    // path.arc(60, 65, 5, 0, Math.PI * 2, true);
    // path.moveTo(95, 65);
    // path.arc(90, 65, 5, 0, Math.PI * 2, true);
    // ctx.strokeStyle = '#0000ff';
    // ctx.stroke(path);


    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.shadowOffsetX = 2;
    // ctx.shadowOffsetY = 2;
    // ctx.shadowBlur = 2;
    // ctx.shadowColor = '#666666';
    // ctx.filleStyle = '#333333';
    // ctx.font = '24px Arial';
    // ctx.fillText('阴影文字', 20, 40);


    // 加载最近30个交易日的K线图数据:
    var js = document.createElement('script');
    js.src = 'http://img1.money.126.net/data/hs/kline/day/history/2015/0000001.json?callback=loadStockData&t=' + Date.now();
    document.getElementsByTagName('head')[0].appendChild(js);
};

function loadStockData(result) {
    var
        NUMS = 30,
        data = result.data;
    if (data.length > NUMS) {
        data = data.slice(data.length - NUMS);
    }
    data = data.map(function (x) {
        return {
            date: x[0],
            open: x[1],
            close: x[2],
            high: x[3],
            low: x[4],
            vol: x[5],
            change: x[6]
        };
    });
    drawStock(data);
}


function drawStock(data) {
    var canvas = document.getElementById('stock-canvas');
    var ctx = canvas.getContext('2d');

    var spaceX = 20;
    var maxY = 0;
    var path = new Path2D();
    // console.log(JSON.stringify(data[0]));
    // {"date":"20150602","open":4844.7,"close":4910.53,"high":4911.57,"low":4797.55,"vol":62374809900,"change":1.69}
    for (var i = 0; i < data.length; i++) {
        var stock = data[i];
        var x = (i + 1) * spaceX;
        var y = (stock.open - 3000) / 3;
        maxY = Math.max(y, maxY);
        console.log(`x:${x}, y:${y}`);
        if (i == 0) {
            path.moveTo(x, y);
        } else {
            path.lineTo(x, y);
        }
    }

    //fix width,height
    canvas.width = spaceX * (data.length + 1);
    canvas.height = maxY + 100;
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //draw
    ctx.strokeStyle = '#333333';
    ctx.stroke(path);
};