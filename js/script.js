$(document).ready(function() {
    // scrollspy
    $(window).on('load scroll resize', function() {
        var docHeight = $(document).height()
        var windowPos = $(window).scrollTop()
        var windowHeight = $(window).height()
        var windowWidth = $(window).width()
        var completion = windowPos / (docHeight - windowHeight)

        if (docHeight <= windowHeight) {
            $('#progress').width(windowWidth)
        } else {
            $('#progress').width(completion * windowWidth)
        }
    })

    // scrolltop
    $('#BackTop').click(function(event) {
        $('html, body').animate({
                scrollTop: 0,
            },
            '1000'
        )
    })
    $(window).scroll(function() {
        if ($(this).scrollTop() < 100) {
            // 判斷捲軸小於200座標位置時，消失
            $('#BackTop').stop().fadeOut('fast')
        } else {
            // stop()可以讓使用者停止
            $('#BackTop').stop().fadeIn('fast')
        }
    })

    // navbar toggle
    $('#navbarBtn').click(function() {
        $('#navbar').slideToggle('slow')
        $('#navbar').css('display', 'flex')
    })

    //inser icon before H2
    $('h2').prepend(
        '<img style="width:40px; margin-right:10px" src="img/virus.svg" alt=""><!-- <div>Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->'
    )

    $('.icon_taiwan').prepend(
        '<img style="width:28px; margin-right:10px" src="img/icon_taiwan.png" alt=""><!-- <div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></div> -->'
    )
    $('.icon_global').prepend(
        '<img style="width:28px; margin-right:10px" src="img/icon_global.png" alt=""><!-- <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->'
    )
    $('.icon_ftv').prepend(
        '<img style="width:28px; margin-right:10px" src="img/logo_ftv.png" alt="">'
    )

    // 地圖案例數
    $('path').mousemove(function(e) {
        $('.hovertext').text($(this).attr('title'))
        $('.hovertext')
            .css({
                top: e.pageY + 20,
                left: e.pageX,
            })
            .fadeIn()
    })
    $('circle').mousemove(function(e) {
        $('.hovertext').text($(this).attr('title'))
        $('.hovertext')
            .css({
                top: e.pageY + 20,
                left: e.pageX,
            })
            .fadeIn()
    })
    $('path').mouseleave(function() {
        $('.hovertext').css('display', 'none')
    })
    $('circle').mouseleave(function() {
        $('.hovertext').css('display', 'none')
    })

    //台灣疫情關係
    $('.case_i').mousemove(function(e) {
        // console.log(e.pageX, e.pageY)
        var case_item = $(this).text()
        $('.case_info')
            .css({
                top: e.pageY + 10,
                left: $(document.body).width() / 2 - 200,
            })
            .fadeIn()
        $('.case_info').html(case_total[case_item - 1].info)
    })

    $('.case_i').mouseleave(function() {
        $('.case_info').css('display', 'none')
    })
})

//  隱藏表格值=02的欄位
;
(function() {
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


// 時間軸plugin