// 版號控管
;(function () {
    let Today = new Date()
    let YYYY = Today.getFullYear()
    let MM = Today.getMonth() + 1
    let DD = Today.getDate()
    let h = Today.getHours()
    let m = Today.getMinutes()
    let Time = YYYY + '' + MM + '' + DD + '' + h + '' + m

    let photo = $('img')
    let js = $('script')

    for (let i = 0; i < photo.length; i++) {
        if (photo[i].src) {
            photo[i].src = photo[i].src + '?ver=' + Time
        }
    }
    for (let i = 0; i < js.length; i++) {
        if (js[i].src) {
            js[i].src = js[i].src + '?ver=' + Time
        }
    }
})()
