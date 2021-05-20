// START get Google Sheet API

function ajax_gsheet() {
    $.ajax({
        url: 'https://spreadsheets.google.com/feeds/cells/1UVnq9a1zVIfygplsbOjOtMX2Bu6aUfet1PwN3MOM7bk/1/public/full?alt=json',

        type: 'GET',
        dataType: 'json',
        success: function data_sheet(data) {
            ////////////////
            ///////////////////
            /////// 台灣 /////////
            ///////本土案例 表格 /////
            ///////////////////////////

            // 基隆市
            var data_tc1 = data.feed.entry[21].content.$t
            $('.data_tc1').addClass('deg3')
            $('.data_tc1').attr('title', '基隆市：' + data_tc1 + '例')
            $('.data_tc1').html(data_tc1)

            // 台北市
            var data_tc2 = data.feed.entry[23].content.$t
            $('.data_tc2').addClass('deg1')
            $('.data_tc2').html(data_tc2)
            $('.data_tc2').attr('title', '台北市：' + data_tc2 + '例')

            // 新北市
            var data_tc3 = data.feed.entry[25].content.$t
            $('.data_tc3').addClass('deg1')
            $('.data_tc3').html(data_tc3)
            $('.data_tc3').attr('title', '新北市：' + data_tc3 + '例')

            // 桃園市
            var data_tc4 = data.feed.entry[27].content.$t
            $('.data_tc4').addClass('deg2')
            $('.data_tc4').html(data_tc4)
            $('.data_tc4').attr('title', '桃園市：' + data_tc4 + '例')

            // 新竹市
            var data_tc5 = data.feed.entry[29].content.$t
            $('.data_tc5').addClass('deg4')
            $('.data_tc5').html(data_tc5)
            $('.data_tc5').attr('title', '新竹市：' + data_tc5 + '例')

            // 新竹縣
            var data_tc6 = data.feed.entry[31].content.$t
            $('.data_tc6').addClass('deg4')
            $('.data_tc6').html(data_tc6)
            $('.data_tc6').attr('title', '新竹縣：' + data_tc6 + '例')

            // 苗栗縣
            var data_tc7 = data.feed.entry[33].content.$t
            $('.data_tc7').addClass('deg4')
            $('.data_tc7').html(data_tc7)
            $('.data_tc7').attr('title', '苗栗縣：' + data_tc7 + '例')

            // 台中市
            var data_tc8 = data.feed.entry[35].content.$t
            $('.data_tc8').addClass('deg4')
            $('.data_tc8').html(data_tc8)
            $('.data_tc8').attr('title', '台中市：' + data_tc8 + '例')

            // 彰化縣
            var data_tc9 = data.feed.entry[37].content.$t
            $('.data_tc9').addClass('deg3')
            $('.data_tc9').html(data_tc9)
            $('.data_tc9').attr('title', '彰化縣：' + data_tc9 + '例')

            // 南投縣
            var data_tc10 = data.feed.entry[39].content.$t
            $('.data_tc10').addClass('deg4')
            $('.data_tc10').html(data_tc10)
            $('.data_tc10').attr('title', '南投縣：' + data_tc10 + '例')

            // 嘉義市
            var data_tc11 = data.feed.entry[41].content.$t
            $('.data_tc11').addClass('degNone')
            $('.data_tc11').html(data_tc11)
            $('.data_tc11').attr('title', '嘉義市：' + data_tc11 + '例')

            // 嘉義縣
            var data_tc12 = data.feed.entry[43].content.$t
            $('.data_tc12').addClass('degNone')
            $('.data_tc12').html(data_tc12)
            $('.data_tc12').attr('title', '嘉義縣：' + data_tc12 + '例')

            // 雲林縣
            var data_tc13 = data.feed.entry[45].content.$t
            $('.data_tc13').addClass('degNone')
            $('.data_tc13').html(data_tc13)
            $('.data_tc13').attr('title', '雲林縣：' + data_tc13 + '例')

            // 台南市
            var data_tc14 = data.feed.entry[47].content.$t
            $('.data_tc14').addClass('deg4')
            $('.data_tc14').html(data_tc14)
            $('.data_tc14').attr('title', '台南市：' + data_tc14 + '例')

            // 高雄市
            var data_tc15 = data.feed.entry[49].content.$t
            $('.data_tc15').addClass('deg4')
            $('.data_tc15').html(data_tc15)
            $('.data_tc15').attr('title', '高雄市：' + data_tc15 + '例')

            // 屏東縣
            var data_tc16 = data.feed.entry[51].content.$t
            $('.data_tc16').addClass('degNone')
            $('.data_tc16').html(data_tc16)
            $('.data_tc16').attr('title', '屏東縣：' + data_tc16 + '例')

            // 宜蘭縣
            var data_tc17 = data.feed.entry[53].content.$t
            $('.data_tc17').addClass('deg3')
            $('.data_tc17').html(data_tc17)
            $('.data_tc17').attr('title', '宜蘭縣：' + data_tc17 + '例')

            // 花蓮縣
            var data_tc18 = data.feed.entry[55].content.$t
            $('.data_tc18').addClass('degNone')
            $('.data_tc18').html(data_tc18)
            $('.data_tc18').attr('title', '花蓮縣：' + data_tc18 + '例')

            // 台東縣
            var data_tc19 = data.feed.entry[57].content.$t
            $('.data_tc19').addClass('degNone')
            $('.data_tc19').html(data_tc19)
            $('.data_tc19').attr('title', '台東縣：' + data_tc19 + '例')

            // 連江縣
            var data_tc20 = data.feed.entry[59].content.$t
            $('.data_tc20').addClass('degNone')
            $('.data_tc20').html(data_tc20)
            $('.data_tc20').attr('title', '連江縣：' + data_tc20 + '例')

            // 金門縣
            var data_tc21 = data.feed.entry[61].content.$t
            $('.data_tc21').addClass('degNone')
            $('.data_tc21').html(data_tc21)
            $('.data_tc21').attr('title', '金門縣：' + data_tc21 + '例')

            // 澎湖縣
            var data_tc22 = data.feed.entry[63].content.$t
            $('.data_tc22').addClass('degNone')
            $('.data_tc22').html(data_tc22)
            $('.data_tc22').attr('title', '澎湖縣：' + data_tc22 + '例')

            // 台灣本土／境外 表格控制 //
            $('#dt_loc_taiwan').DataTable({
                paging: false,
                searching: false,
                aaSorting: [],
                columnDefs: [{
                    orderable: false,
                    targets: 0,
                }, ],
                destroy: true,
            })

            //// 台灣總和 ////
            $('#count_recently_taiwan').html(data.feed.entry[11].content.$t)
            $('#count_sumConfirm_taiwan').html(data.feed.entry[13].content.$t)
                //確診數
            $('#tw_con').html(data.feed.entry[11].content.$t)
                //今日新增
            $('#tw_today').html(data.feed.entry[13].content.$t)
                //本土案例
            $('#tw_local').html(data.feed.entry[15].content.$t)
                //境外移入
            $('#tw_import').html(data.feed.entry[17].content.$t)
                //最後更新日期
            $('#tw_pubDate').html(data.feed.entry[79].content.$t)


            //// 全球總合 ////
            $('#inc_con').html(data.feed.entry[5].content.$t)
            $('#inc_die').html(data.feed.entry[6].content.$t)

            // 總數
            // 本土案例 變數：tc-local
            var data_tcloc = data.feed.entry[67].content.$t
            $('.data_tcloc').html(data_tcloc)

            // 境外移入 變數：tc-import
            var data_tcimp = data.feed.entry[69].content.$t
            $('.data_tcimp').html(data_tcimp)

            // 磐石艦
            var data_imp1 = data.feed.entry[71].content.$t
            $('.data_imp1').html(data_imp1)

            // 華航機組染疫
            var data_imp2 = data.feed.entry[73].content.$t
            $('.data_imp2').html(data_imp2)

            // 航空器感染
            var data_imp3 = data.feed.entry[75].content.$t
            $('.data_imp3').html(data_imp3)

            // 不明
            var data_imp4 = data.feed.entry[77].content.$t
            $('.data_imp4').html(data_imp4)

            //// 台灣 首屏動態數字 ////

            $('#tw_con').each(function(now) {
                $(this)
                    .prop('Counter', 0)
                    .animate({
                        Counter: $(this).text(),
                    }, {
                        duration: 3500,
                        easing: 'swing',
                        step: function(now) {
                            $(this).text(Math.ceil(now))
                        },
                    })
            })
            setTimeout(() => {
                segment($('#tw_con')[0].Counter)

                function segment(orignNum) {
                    let newNum = String(orignNum)
                    let addSegNum = newNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    $('#tw_con')[0].Counter = addSegNum
                    $('#tw_con').text(addSegNum)
                }
            }, 3600)

            $('#tw_local').each(function() {
                $(this)
                    .prop('Counter', 0)
                    .animate({
                        Counter: $(this).text(),
                    }, {
                        duration: 3500,
                        easing: 'swing',
                        step: function(now) {
                            $(this).text(Math.ceil(now))
                        },
                    })
                setTimeout(() => {
                    segment($('#tw_local')[0].Counter)

                    function segment(orignNum) {
                        let newNum = String(orignNum)
                        let addSegNum = newNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        $('#tw_local')[0].Counter = addSegNum
                        $('#tw_local').text(addSegNum)
                    }
                }, 3600)
            })

            $('#tw_today').each(function() {
                $(this)
                    .prop('Counter', 0)
                    .animate({
                        Counter: $(this).text(),
                    }, {
                        duration: 3500,
                        easing: 'swing',
                        step: function(now) {
                            $(this).text(Math.ceil(now))
                        },
                    })
                setTimeout(() => {
                    segment($('#tw_today')[0].Counter)

                    function segment(orignNum) {
                        let newNum = String(orignNum)
                        let addSegNum = newNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        $('#tw_today')[0].Counter = addSegNum
                        $('#tw_today').text(addSegNum)
                    }
                }, 3600)
            })

            $('#tw_import').each(function() {
                $(this)
                    .prop('Counter', 0)
                    .animate({
                        Counter: $(this).text(),
                    }, {
                        duration: 3500,
                        easing: 'swing',
                        step: function(now) {
                            $(this).text(Math.ceil(now))
                        },
                    })
                setTimeout(() => {
                    segment($('#tw_import')[0].Counter)

                    function segment(orignNum) {
                        let newNum = String(orignNum)
                        let addSegNum = newNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        $('#tw_import')[0].Counter = addSegNum
                        $('#tw_import').text(addSegNum)
                    }
                }, 3600)
            })

            //// 全球 首屏動態數字 ////
            $('#inc_con').each(function() {
                $(this)
                    .prop('Counter', 0)
                    .animate({
                        Counter: $(this).text(),
                    }, {
                        duration: 3500,
                        easing: 'swing',
                        step: function(now) {
                            $(this).text(Math.ceil(now))
                        },
                    })
                setTimeout(() => {
                    segment($('#inc_con')[0].Counter)

                    function segment(orignNum) {
                        let newNum = String(orignNum)
                        let addSegNum = newNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        $('#inc_con')[0].Counter = addSegNum
                        $('#inc_con').text(addSegNum)
                    }
                }, 3600)
            })

            $('#inc_die').each(function() {
                $(this)
                    .prop('Counter', 0)
                    .animate({
                        Counter: $(this).text(),
                    }, {
                        duration: 3500,
                        easing: 'swing',
                        step: function(now) {
                            $(this).text(Math.ceil(now))
                        },
                    })
                setTimeout(() => {
                    segment($('#inc_die')[0].Counter)

                    function segment(orignNum) {
                        let newNum = String(orignNum)
                        let addSegNum = newNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        $('#inc_die')[0].Counter = addSegNum
                        $('#inc_die').text(addSegNum)
                    }
                }, 3600)
            })
        },
    })
}
ajax_gsheet()

/////////////// END get API