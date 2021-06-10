$(document).ready(function () {
    $(window).on('load scroll resize', function () {
        var e = $(document).height(),
            t = $(window).scrollTop(),
            o = $(window).height(),
            n = $(window).width(),
            i = t / (e - o)
        e <= o ? $('#progress').width(n) : $('#progress').width(i * n)
    }),
        $('#BackTop').click(function (e) {
            $('html, body').animate({ scrollTop: 0 }, '1000')
        }),
        $(window).scroll(function () {
            $(this).scrollTop() < 100 ? $('#BackTop').stop().fadeOut('fast') : $('#BackTop').stop().fadeIn('fast')
        }),
        document.querySelector('#navbarBtn').addEventListener('click', o)
    let e = document.querySelectorAll('.nav-link')
    var t = !0
    function o() {
        let e = document.querySelector('#switcher'),
            o = document.querySelector('#navbar')
        t
            ? (e.classList.remove('fa-bars'), e.classList.add('fa-times'), (t = !1), (o.style.display = 'flex'))
            : (e.classList.remove('fa-times'), e.classList.add('fa-bars'), (t = !0), (o.style.display = 'none'))
    }
    for (let t = 0; t < e.length; t++)
        e[t].addEventListener('click', function () {
            o()
        })
    document.querySelector('.localurl-style').addEventListener('click', function () {
        let e = document.createElement('input'),
            t = window.location.href + '?utm_source=WHpage&utm_medium=copybutton'
        document.body.appendChild(e),
            (e.value = t),
            e.select(),
            document.execCommand('copy'),
            document.body.removeChild(e),
            alert('複製成功!')
    }),
        $('h2').prepend(
            '<img style="width:40px; margin-right:10px" src="img/virus.svg">\x3c!-- <div>Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> --\x3e'
        ),
        $('.icon_taiwan').prepend(
            '<img style="width:28px; margin-right:10px" src="img/icon_taiwan.png">\x3c!-- <div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></div> --\x3e'
        ),
        $('.icon_global').prepend(
            '<img style="width:28px; margin-right:10px" src="img/icon_global.png">\x3c!-- <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> --\x3e'
        ),
        $('.icon_ftv').prepend('<img style="width:28px; margin-right:10px" src="img/logo_ftv.png">'),
        $('path').mousemove(function (e) {
            $('.hovertext').text($(this).attr('title')),
                $('.hovertext')
                    .css({ top: e.pageY + 20, left: e.pageX })
                    .fadeIn()
        }),
        $('circle').mousemove(function (e) {
            $('.hovertext').text($(this).attr('title')),
                $('.hovertext')
                    .css({ top: e.pageY + 20, left: e.pageX })
                    .fadeIn()
        }),
        $('path').mouseleave(function () {
            $('.hovertext').css('display', 'none')
        }),
        $('circle').mouseleave(function () {
            $('.hovertext').css('display', 'none')
        }),
        $('.case_i').mousemove(function (e) {
            var t = $(this).text()
            $('.case_info')
                .css({ top: e.pageY + 10, left: $(document.body).width() / 2 - 200 })
                .fadeIn(),
                $('.case_info').html(case_total[t - 1].info)
        }),
        $('.case_i').mouseleave(function () {
            $('.case_info').css('display', 'none')
        }),
        new Splide('#splide_protect', { rewind: !0 }).mount(),
        new Splide('#splide_footmap_north1', { rewind: !0 }).mount(),
        new Splide('#splide_footmap_north2', { rewind: !0 }).mount(),
        new Splide('#splide_footmap_center', { rewind: !0 }).mount(),
        new Splide('#splide_footmap_south', { rewind: !0 }).mount(),
        new Splide('#splide_footmap_east', { rewind: !0 }).mount(),
        new Splide('#splide_footmap_island', { rewind: !0 }).mount(),
        new Splide('#splide_booking', { rewind: !0 }).mount(),
        new Splide('#splide_alert', { rewind: !0 }).mount()
})
