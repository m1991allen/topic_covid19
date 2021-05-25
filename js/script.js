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
    let switcher = document.querySelector('#navbarBtn').addEventListener('click', switchHandler)
    let navAnchor = document.querySelectorAll('.nav-link')

    var status = true
        // 漢堡icon變換
    function switchHandler() {
        let iconClass = document.querySelector('#switcher')
        let navBar = document.querySelector('#navbar')

        if (status) {
            iconClass.classList.remove('fa-bars')
            iconClass.classList.add('fa-times')
            status = false

            navBar.style.display = 'flex'
        } else {
            iconClass.classList.remove('fa-times')
            iconClass.classList.add('fa-bars')
            status = true

            navBar.style.display = 'none'
        }
    }
    // 點擊⚓順便關閉選單
    for (let i = 0; i < navAnchor.length; i++) {
        navAnchor[i].addEventListener('click', function() {
            switchHandler()
        })
    }

    // 一鍵複製url
    let oneClick = document.querySelector('.localurl-style')
    oneClick.addEventListener('click', copyUrl)

    function copyUrl() {
        let urlInput = document.createElement('input'),
            text = window.location.href + '?utm_source=WHpage&utm_medium=copybutton'

        document.body.appendChild(urlInput)
        urlInput.value = text
        urlInput.select()
        document.execCommand('copy')
        document.body.removeChild(urlInput)
        alert('複製成功!')
    }

    // inser icon before H2
    $('h2').prepend(
        '<img style="width:40px; margin-right:10px" src="img/virus.svg"><!-- <div>Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->'
    )

    $('.icon_taiwan').prepend(
        '<img style="width:28px; margin-right:10px" src="img/icon_taiwan.png"><!-- <div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></div> -->'
    )
    $('.icon_global').prepend(
        '<img style="width:28px; margin-right:10px" src="img/icon_global.png"><!-- <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->'
    )
    $('.icon_ftv').prepend('<img style="width:28px; margin-right:10px" src="img/logo_ftv.png">')

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

    // 台灣疫情關係
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

    // 輪播圖初始 splide
    // 全國防疫
    new Splide('#splide_protect', {
        rewind: true,
    }).mount()

    // 足跡
    new Splide('#splide_footmap_north1', {
        rewind: true,
    }).mount()

    new Splide('#splide_footmap_north2', {
        rewind: true,
    }).mount()

    new Splide('#splide_footmap_center', {
        rewind: true,
    }).mount()

    new Splide('#splide_footmap_south', {
        rewind: true,
    }).mount()

    new Splide('#splide_footmap_east', {
        rewind: true,
    }).mount()

    // 快篩站
    new Splide('#splide_station', {
        rewind: true,
    }).mount()

    // 實聯制
    new Splide('#splide_booking', {
        rewind: true,
    }).mount()

    // 注意事項
    new Splide('#splide_alert', {
        rewind: true,
    }).mount()
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

// 版號控管
;
(function() {
    let Today = new Date()
    let YYYY = Today.getFullYear()
    let MM = Today.getMonth() + 1
    let DD = Today.getDate()
    let h = Today.getHours()
    let m = Today.getMinutes()
    let Time = YYYY + '' + MM + '' + DD + '' + h + '' + m

    let photo = $('img')

    for (let i = 0; i < photo.length; i++) {
        if (photo[i].src) {
            photo[i].src = photo[i].src + '?ver=' + Time
        }
    }
})()