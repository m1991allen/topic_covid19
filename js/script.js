$(document).ready(function () {
    // scrollspy
    $(window).on('load scroll resize', function () {

        var docHeight = $(document).height();
        var windowPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        var completion = windowPos / (docHeight - windowHeight);

        if (docHeight <= windowHeight) {
            $('#progress').width(windowWidth);
        } else {
            $('#progress').width(completion * windowWidth);
        }
    });
    // scrolltop
    $('#BackTop').click(function (event) {
        $('html, body').animate({
            scrollTop: 0
        }, '1000');
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() < 100) { //判斷捲軸小於200座標位置時，消失
            $('#BackTop').stop().fadeOut('fast');
        } else {
            $('#BackTop').stop().fadeIn('fast'); //stop()可以讓使用者停止
        }
    });
    // navbar toggle
    $('#navbarBtn').click(function () {
        $('#navbar').slideToggle("slow");
        $('#navbar').css('display', 'flex');
    })


    //inser icon before H2
    $('h2').prepend('<img style="width:40px; margin-right:10px" src="img/virus.svg" alt=""><!-- <div>Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->');

    $('.icon_taiwan').prepend('<img style="width:28px; margin-right:10px" src="img/icon_taiwan.png" alt=""><!-- <div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></div> -->')
    $('.icon_global').prepend('<img style="width:28px; margin-right:10px" src="img/icon_global.png" alt=""><!-- <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->');

    // 武漢地圖切換
    $('.wuhan #wuhan').click(function () {
        $('#wuhan').addClass('changeImg');
        $('#hubei').addClass('changeImg');
        $('#click_me').addClass('changeImg');

        function changeImg() {
            $('.wuhan').html('<div class="wuhan1"><img src="img/wuhan1.svg"></div>');
        }

        // use setTimeout() to execute
        setTimeout(changeImg, 500);

    });
    // 死亡率計算
    // $('#count_covid').html('全球：' + con2_total + ' 病例' + ' ' + ' 死亡：' + die2_total);
    // var a = (die2_total / con2_total) * 100;
    // a = a.toFixed(1);

    // $('#count_covid-death').html(a + '%');



    //China Map
    (function ($) {
        'use strict';
        $(function () {
            var $svgEl = $('.map_china');
            $('.map_china__trigger a').on('click', function (e) {

                // stop propagation of this event, it will never reach body in bubbling phase.
                e.stopPropagation();

                var goName = $(this).data('title'),
                    goText = $(this).text(),
                    svgCurName = '',
                    svgNameIndex = 0;

                $('.map_china .map_china__name').each(function () {

                    if (goName == $(this).data('title')) {
                        svgCurName = $(this).data('title');
                        return false;
                    }
                });

                svgNameIndex = $('.map_china .map_china__name[data-title="' + svgCurName + '"]').index();

                //Hide all elements
                svgMapRestore(1);


                //Display current element
                svgMapActive(svgNameIndex, goText);
            });


            //Restore all elements
            $('body').on('click', function (e) {
                svgMapRestore(2);
            });

            function svgMapRestore(type) {

                var alpha = (type == 1) ? 0.3 : 1;

                $svgEl.children().removeClass('is-show');
                $svgEl.find('circle').css({
                    'r': 6,
                    // 'font-size': 'r1em',
                    'z-index': 1,
                    'opacity': alpha
                });


                $svgEl.find('.map_china__name').each(function () {
                    $(this).css({
                        'transform': 'translate(0,15px)',
                        'z-index': 1,
                        'opacity': alpha
                    })
                        .text($(this).data('title'));
                });

                $svgEl.find('.map_china__num').css({
                    // 'font-size': '1rem',
                    'z-index': 1,
                    'opacity': alpha
                });
            }

            function svgMapActive(index, text) {
                $svgEl.each(function () {
                    $(this).children().eq(index).addClass('is-show');
                    $(this).find('circle').eq(index).css({
                        'r': 15,
                        'z-index': 2,
                        'opacity': 1
                    });

                    $(this).find('.map_china__name').eq(index).css({
                        'transform': 'translate(0,25px)',
                        'z-index': 2,
                        'opacity': 1
                    })
                        .text(text);

                    $(this).find('.map_china__num').eq(index).css({
                        // 'font-size': '1rem',
                        'z-index': 2,
                        'opacity': 1
                    });
                });
            }
        });
    })(jQuery);



    // World Map
    $("path").mousemove(function (e) {
        $(".hovertext").text($(this).attr('title'));
        $(".hovertext").css({
            'top': e.pageY + 20,
            'left': e.pageX
        }).fadeIn();
    });
    $("circle").mousemove(function (e) {
        $(".hovertext").text($(this).attr('title'));
        $(".hovertext").css({
            'top': e.pageY + 20,
            'left': e.pageX
        }).fadeIn();
    });
    $("path").mouseleave(function () {
        $(".hovertext").css('display', 'none')
    });
    $("circle").mouseleave(function () {
        $(".hovertext").css('display', 'none')
    });

    //台灣疫情關係
    $('.case_i').mousemove(function (e) {
        var case_item = $(this).text();
        $('.case_info').css({
            'top': e.pageY + 20,
            'left': e.pageX
        }).fadeIn();
        $('.case_info').html(case_total[case_item - 1].info);
    });

    $(".case_i").mouseleave(function () {
        $(".case_info").css('display', 'none');
    });

    // function callCovid19() {
    //     $.ajax({
    //         url: 'https://2019ncov.asia/api/country_region',
    //         method: "GET",
    //         dataType: 'json',
    //         success: (data) => {
    //             console.log(data)
    //         }
    //     })
    // } callCovid19();

    //延伸閱讀api
    function ajax_test() {
        $.ajax({
            url: 'https://cors-anywhere.herokuapp.com/https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=%E6%AD%A6%E6%BC%A2%E8%82%BA%E7%82%8E&Page=1&sp=6', //json文件位置
            type: 'GET', //請求方式為get
            dataType: 'json', //返回數據格式為json
            success: function (data) { //請求成功完成后要執行的方法 
                //each循環 使用$.each方法遍歷返回的數據

                var html_read = '<div class="news_frame col-lg-4 col-md-4 col-sm-6"><a href="https://www.ftvnews.com.tw/news/detail/{{link}}" target="_blank"><div class="news"><div class="cover_size"><img class="cover" src="{{url}}"></div><div class="title">{{title}}</div><div class="date"><i class="far fa-clock" aria-hidden="true"></i> {{date}}</div></div></a></div>';

                for (var i = 0; i < 6; i++) {
                    var html_reading = html_read.replace('{{title}}', limitUploadFileName())
                        .replace('{{url}}', data.ITEM[i].Image)
                        .replace('{{date}}', data.ITEM[i].CreateDate)
                        .replace('{{link}}', data.ITEM[i].ID)
                        ;

                    function limitUploadFileName() {
                        let newsTitle = data.ITEM[i].Title
                        let len = newsTitle.length;
                        let str = "";

                        if (len > 20) {
                            str = newsTitle.substring(0, 20) + "......";
                        }
                        else {
                            return newsTitle;
                        }
                        return str;
                    };

                    $('#reading .row').append(html_reading);
                };
            }
        });
    } ajax_test(); //執行函數

});


// 疫情關係圖縮合
const btn_display = document.querySelectorAll('.fa-plus-square')
for (let i = 0; i < btn_display.length; i++) {
    btn_display[i].addEventListener('click', function () {
        // 控制按鈕icon
        if (btn_display[i].classList.contains('fa-plus-square')) {
            btn_display[i].classList.remove('fa-plus-square')
            btn_display[i].classList.add('fa-minus-square')
        }
        else {
            btn_display[i].classList.add('fa-plus-square')
            btn_display[i].classList.remove('fa-minus-square')
        }

        // 控制疫情關係圖
        const case_layout = document.querySelectorAll('.case_layout')
        if (case_layout[i].classList.contains('disable')) {
            case_layout[i].classList.remove('disable')
        } else {
            case_layout[i].classList.add('disable')
        }
    })
}

// 表格值=0隱藏
(function () {
    let filter = document.querySelectorAll('.ctrl>td:nth-child(2)')
    setTimeout(() => {

        for (let i = 0; i < filter.length; i++) {
            if (filter[i].innerHTML === '0') {
                let a = filter[i].parentNode
                a.style.display = 'none'
            }
        }

    }, 1000)
})()


// getElementsByTagName('tr')[i].style = 'none'





