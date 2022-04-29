;(function () {
    // Faq
    accordion()

    // 漢堡icon點擊展開樣式
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

    // 一鍵複製本站網址
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
        // 燈箱圖片輪播宣告
        new Splide('#splide_protect', { rewind: !0 }).mount(),
        new Splide('#splide_1922', { rewind: !0 }).mount()
})()

function accordion() {
    let acc = document.getElementsByClassName('accordion')

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function () {
            this.classList.toggle('active')
            var panel = this.nextElementSibling
            if (panel.style.display === 'block') {
                panel.style.display = 'none'
            } else {
                panel.style.display = 'block'
            }
        })
    }
}
