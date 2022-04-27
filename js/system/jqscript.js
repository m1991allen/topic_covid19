// jQuery寫法 不需要動
$(document).ready(function () {
    // 一鍵置頂
    $('#BackTop').click(function (e) {
        $('html, body').animate({ scrollTop: 0 }, '1000')
    }),
        $(window).scroll(function () {
            $(this).scrollTop() < 100 ? $('#BackTop').stop().fadeOut('fast') : $('#BackTop').stop().fadeIn('fast')
        }),
        // 版權宣告
        $('h2').prepend(
            '<img style="width:40px; margin-right:10px" src="img/virus.svg">\x3c!-- <div>Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> --\x3e'
        ),
        $('.icon_taiwan').prepend(
            '<img style="width:28px; margin-right:10px" src="img/icon_taiwan.png">\x3c!-- <div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></div> --\x3e'
        ),
        $('.icon_global').prepend(
            '<img style="width:28px; margin-right:10px" src="img/icon_global.png">\x3c!-- <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> --\x3e'
        ),
        // 民視新聞App疫情動態不漏接標題前加 FTV icon
        $('.icon_ftv').prepend('<img style="width:28px; margin-right:10px" src="img/logo_ftv.png">')
})
