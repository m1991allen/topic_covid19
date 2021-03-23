// close city
var cityImgSource = ['img/close1.png', 'img/close2.png', 'img/close3.png', 'img/close4.png', 'img/close5.png', 'img/close6.png', 'img/close7.png', 'img/close8.png', 'img/close9.png'];

var index = 0;
setInterval(function () {
    if (index === cityImgSource.length) {
        index = 0;
    }
    document.getElementById('close_city').src = cityImgSource[index];
    index++;
}, 1000);


var closeDateSource = ['2020年1月23日', '2020年1月24日', '2020年1月25日', '2020年2月2日', '2020年2月4日', '2020年2月5日', '2020年2月6日', '2020年2月7日', '2020年2月10日'];

var index1 = 0;

setInterval(function () {
    if (index1 === closeDateSource.length) {
        index1 = 0;
    }
    document.getElementById('close_time').innerHTML = closeDateSource[index1];
    index1++;
}, 1000);


change earth
var earthImgSource = ['img/earth/earth1.png', 'img/earth/earth2.png', 'img/earth/earth3.png', 'img/earth/earth4.png', 'img/earth/earth5.png', 'img/earth/earth6.png', 'img/earth/earth7.png', 'img/earth/earth8.png', 'img/earth/earth9.png', 'img/earth/earth10.png', 'img/earth/earth11.png', 'img/earth/earth12.png', 'img/earth/earth13.png', 'img/earth/earth14.png', 'img/earth/earth15.png', 'img/earth/earth16.png', 'img/earth/earth17.png', 'img/earth/earth18.png', 'img/earth/earth19.png', 'img/earth/earth20.png', 'img/earth/earth21.png'];

var index2 = 0;
const earth = function () {
    const needStop = setInterval(() => {
        if (index2 === earthImgSource.length) {
            index2 = 0
            clearInterval(needStop)
            const wait = setTimeout(() => {
                earth()
                clearTimeout(wait)
            }, 5000)
        } else {
            document.getElementById('round_total').src = earthImgSource[index2];
            index2++;
        }
    }, 300);
}
// earth();
