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
            $('.data_tc1').addClass('deg4')
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
            $('.data_tc4').addClass('deg1')
            $('.data_tc4').html(data_tc4)
            $('.data_tc4').attr('title', '桃園市：' + data_tc4 + '例')

            // 新竹市
            var data_tc5 = data.feed.entry[29].content.$t
            $('.data_tc5').addClass('deg3')
            $('.data_tc5').html(data_tc5)
            $('.data_tc5').attr('title', '新竹市：' + data_tc5 + '例')

            // 新竹縣
            var data_tc6 = data.feed.entry[31].content.$t
            $('.data_tc6').addClass('degNone')
            $('.data_tc6').html(data_tc6)
            $('.data_tc6').attr('title', '新竹縣：' + data_tc6 + '例')

            // 苗栗縣
            var data_tc7 = data.feed.entry[33].content.$t
            $('.data_tc7').addClass('degNone')
            $('.data_tc7').html(data_tc7)
            $('.data_tc7').attr('title', '苗栗縣：' + data_tc7 + '例')

            // 台中市
            var data_tc8 = data.feed.entry[35].content.$t
            $('.data_tc8').addClass('deg2')
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
            $('.data_tc15').addClass('degNone')
            $('.data_tc15').html(data_tc15)
            $('.data_tc15').attr('title', '高雄市：' + data_tc15 + '例')

            // 屏東縣
            var data_tc16 = data.feed.entry[51].content.$t
            $('.data_tc16').addClass('degNone')
            $('.data_tc16').html(data_tc16)
            $('.data_tc16').attr('title', '屏東縣：' + data_tc16 + '例')

            // 宜蘭縣
            var data_tc17 = data.feed.entry[53].content.$t
            $('.data_tc17').addClass('deg2')
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
                columnDefs: [
                    {
                        orderable: false,
                        targets: 0,
                    },
                ],
                destroy: true,
            })

            //// 台灣總和 ////
            $('#count_recently_taiwan').html(data.feed.entry[11].content.$t)
            $('#count_sumConfirm_taiwan').html(data.feed.entry[13].content.$t)
            $('#tw_con').html(data.feed.entry[13].content.$t)
            $('#tw_die').html(data.feed.entry[15].content.$t)
            $('#tw_rec').html(data.feed.entry[17].content.$t)

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

            $('#tw_con').each(function (now) {
                $(this)
                    .prop('Counter', 0)
                    .animate(
                        {
                            Counter: $(this).text(),
                        },
                        {
                            duration: 3500,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now))
                            },
                        }
                    )
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

            $('#tw_die').each(function () {
                $(this)
                    .prop('Counter', 0)
                    .animate(
                        {
                            Counter: $(this).text(),
                        },
                        {
                            duration: 3500,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now))
                            },
                        }
                    )
                setTimeout(() => {
                    segment($('#tw_die')[0].Counter)
                    function segment(orignNum) {
                        let newNum = String(orignNum)
                        let addSegNum = newNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        $('#tw_die')[0].Counter = addSegNum
                        $('#tw_die').text(addSegNum)
                    }
                }, 3600)
            })

            $('#tw_rec').each(function () {
                $(this)
                    .prop('Counter', 0)
                    .animate(
                        {
                            Counter: $(this).text(),
                        },
                        {
                            duration: 3500,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now))
                            },
                        }
                    )
                setTimeout(() => {
                    segment($('#tw_rec')[0].Counter)
                    function segment(orignNum) {
                        let newNum = String(orignNum)
                        let addSegNum = newNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        $('#tw_rec')[0].Counter = addSegNum
                        $('#tw_rec').text(addSegNum)
                    }
                }, 3600)
            })

            //// 全球 首屏動態數字 ////

            // function segment(a) {
            //     a.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            // }

            $('#inc_con').each(function () {
                $(this)
                    .prop('Counter', 0)
                    .animate(
                        {
                            Counter: $(this).text(),
                        },
                        {
                            duration: 3500,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now))
                            },
                        }
                    )
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

            $('#inc_die').each(function () {
                $(this)
                    .prop('Counter', 0)
                    .animate(
                        {
                            Counter: $(this).text(),
                        },
                        {
                            duration: 3500,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now))
                            },
                        }
                    )
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

// END get API

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
/////////////    國家警示    //////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// 此區新增
var alert1_country = '暫無'
var alert2_country = '暫無'
var alert3_country = '全球'

//////////////////////////////////// 此區不要動！！
$('.alr1_country').html(alert1_country)
$('.alr2_country').html(alert2_country)
$('.alr3_country').html(alert3_country)

// 此區新增
/////////////// group：

// 磐石艦：tw_flt
// 部桃：tw_hos
// 機師：tw_air
// 未知感染：non
// 旅美：trp_NA
// 旅歐：trp_EU
// 旅亞：trp_A
// 旅非：trp_AF
// 旅大洋：trp_OC
// 旅多國：trp_m

/////////////// status：

// 一般案例（粉）：default
// 境內感染（綠）：case_s1
// 死亡（紅）：case_s2
// 敦睦（灰藍）：case_s3
// 華航、諾富特（綠）：case_s4

/////////////////////
/////////////////////
/////////////////////
///    台灣個案    ///
/////////////////////
/////////////////////
/////////////////////
var case_data = {}
case_data.list = [
    {
        no: '1',
        case: '1',
        date: '1/21',
        status: 'default',
        group: 'trp_A',
        info:
            '《首例》' +
            '<br>' +
            `
            臺灣出現首例境外移入確診病例，為50多歲於武漢工作女台商，經機場檢疫人員安排送醫後，確診為武漢肺炎陽性。
            `,
    },
    {
        no: '2',
        case: '2',
        date: '1/24',
        status: 'default',
        group: 'trp_A',
        info:
            '《案2》' +
            '<br>' +
            `
            50多歲女性中國遊客，1月23日因發燒就醫，經過快篩檢驗後確診。
            `,
    },
    {
        no: '3',
        case: '3',
        date: '1/24',
        status: 'default',
        group: 'trp_A',
        info:
            '《案3》' +
            '<br>' +
            `
            50多歲高雄台商，入境前已經出現症狀，但入境時未交代武漢活動史，直到回臺就醫才坦承，經通報後確診。
            `,
    },
    {
        no: '4',
        case: '4',
        date: '1/26',
        status: 'default',
        group: 'trp_A',
        info:
            '《案4》' +
            '<br>' +
            `
            曾赴武漢旅遊的50多歲女性，1月25日咳嗽症狀加劇，自廣州入境後主動通報機場檢疫人員，送負壓隔離病房檢驗確診。
            `,
    },
    {
        no: '5',
        case: '5',
        date: '1/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案5》' +
            '<br>' +
            `
            曾赴武漢工作的50多歲女性，返臺後出現發燒、肌肉痠痛症狀，就醫後由院方通報確診。
            `,
    },
    {
        no: '6',
        case: '6',
        date: '1/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案6》' +
            '<br>' +
            `
            70多歲女性中國遊客，抵臺時尚無症狀，1月25日因發燒就醫，醫院通報後確診。
            `,
    },
    {
        no: '7',
        case: '7',
        date: '1/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案7》' +
            '<br>' +
            `
            70多歲女性中國遊客，與第6例同自由行。
            `,
    },
    {
        no: '8',
        case: '8',
        date: '1/28',
        status: 'case_s1',
        group: 'trp_A',
        info:
            '《案8》' +
            '<br>' +
            `
            50多歲男性，為第5例境外移入個案丈夫，1月26日出現咳嗽症狀就醫，經檢驗後確診，為首例本土病例。
            `,
    },
    {
        no: '9',
        case: '9',
        date: '1/30',
        status: 'case_s1',
        group: 'trp_A',
        info:
            '《案9》' +
            '<br>' +
            `
            40多歲中部女性，遭到在武漢工作丈夫傳染，1月27日出現咳嗽症狀，就醫檢驗後確診，為本土第二例。
            `,
    },
    {
        no: '10',
        case: '10',
        date: '1/31',
        status: 'default',
        group: 'trp_A',
        info:
            '《案10》' +
            '<br>' +
            `
            40多歲中部男性，為第9例個案丈夫，回臺時出現咳嗽、流鼻水症狀，但因為沒發燒判定為感冒，直到太太出現症狀後再度檢驗確診。
            `,
    },
    {
        no: '11',
        case: '11',
        date: '1/31',
        status: 'default',
        group: 'trp_A',
        info:
            '《案11》' +
            '<br>' +
            `
            50多歲男性，為首批武漢包機台商，原先不在搭機名單內，回臺後發現有發燒症狀，立即送負壓隔離病房，檢驗後確診為武漢肺炎。
            `,
    },
    {
        no: '12',
        case: '12',
        date: '2/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案12》' +
            '<br>' +
            `
            40多歲北部男性，去年12至武漢工作，2月2日自遼寧返臺後出現發燒、咳嗽、頭痛，就醫篩檢後確診。
            `,
    },
    {
        no: '13',
        case: '13',
        date: '2/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案13》' +
            '<br>' +
            `
            長住武漢的20多歲女性，1月21日自武漢經深圳返臺，2月1日出現咳嗽有痰、胸悶症狀，就醫篩檢後確診。
            `,
    },
    {
        no: '14',
        case: '14',
        date: '2/6',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案14》' +
            '<br>' +
            `
            北部50多歲男性，1月22日自香港轉機至義大利旅遊，2月1日自香港轉機返臺，入境時有發燒症狀，就醫後診斷為感冒，後來症狀未改善，再次就醫檢驗後確診。
            `,
    },
    {
        no: '15',
        case: '15',
        date: '2/6',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案15》' +
            '<br>' +
            `
            北部50多歲女性，和第14例為夫妻，入境時無發燒症狀，2月3日就醫時診斷為一般感冒，因丈夫於4日通報，一併採檢通報檢驗後，均確診感染新型冠狀病毒。
            `,
    },
    {
        no: '16',
        case: '16',
        date: '2/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案16》' +
            '<br>' +
            `
            南部40多歲女性，曾到澳門旅遊，2月1日出現發燒、走路會喘等症狀，5日二度就醫時收治負壓隔離病房並採檢，經檢驗確診。
            `,
    },
    {
        no: '17',
        case: '17',
        date: '2/8',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案17》' +
            '<br>' +
            `
            原列為接觸者的20多歲男性，是14例、15例確診夫婦之兒子。該個案1月27日在義大利旅遊時，出現咳嗽症狀，回臺進行篩檢後確診。
            `,
    },
    {
        no: '18',
        case: '18',
        date: '2/9',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案18》' +
            '<br>' +
            `
            原列為接觸者的20多歲男性，是14例、15例確診夫婦之兒子。該個案亦為與父母出國同遊，但無疑似症狀，經衛生單位安排隔離並住院採檢，檢驗結果陽性。
            `,
    },
    {
        no: '19',
        case: '19',
        date: '2/16',
        status: 'case_s2',
        group: 'trp_A',
        info:
            '《案19》' +
            '<br>' +
            `
            中部61歲男性，1月27日出現咳嗽，2月3日因呼吸急促赴醫院就醫，但因無出國旅遊史、也非密切接觸者，診斷為肺炎。2月12日起指揮中心擴大檢驗，該病患為唯一檢驗陽性者，但於2月15日晚間因肺炎合併敗血症死亡。
            `,
    },
    {
        no: '20',
        case: '20',
        date: '2/16',
        status: 'case_s1',
        group: 'trp_A',
        info:
            '《案20》' +
            '<br>' +
            `
            中部50多歲男性，為第19例弟弟，因屬於密切接觸者，進行採檢後確診。
            `,
    },
    {
        no: '21',
        case: '21',
        date: '2/17',
        status: 'case_s1',
        group: 'trp_A',
        info:
            '《案21》' +
            '<br>' +
            `
            中部80多歲女性，為第19例媽媽，平時同住，曾於2月6日出現症狀就醫，後來因身為密切接觸者進行採檢，結果為陽性。
            `,
    },
    {
        no: '22',
        case: '22',
        date: '2/17',
        status: 'case_s1',
        group: 'trp_A',
        info:
            '《案22》' +
            '<br>' +
            `
            中部30多歲男性，為第19例外甥女婿，平日未與其他3位同住，研判是過年期間家族聚會時遭到傳染。
            `,
    },
    {
        no: '23',
        case: '23',
        date: '2/19',
        status: 'case_s1',
        group: 'trp_A',
        info:
            '《案23》' +
            '<br>' +
            `
            中部60歲女性，為第19例妹妹，同樣判定是過年家庭聚餐時感染。
            `,
    },
    {
        no: '24',
        case: '24',
        date: '2/19',
        status: 'case_s1',
        group: 'non',
        info:
            '《案24》' +
            '<br>' +
            `
            北部60多歲女性，近兩年無出國史，1月22日出現發燒、咳嗽等症狀，22日至29日四度就醫，於30日收治住院。因病情惡化，2月10日轉入加護病房，並於2月17日配合進行通報採檢，19日宣布確診。
            `,
    },
    {
        no: '25',
        case: '25',
        date: '2/21',
        status: 'case_s1',
        group: 'non',
        info:
            '《案25》' +
            '<br>' +
            `
            北部20歲女性，為第24例外孫女，1月底便出現咳嗽、發燒症狀，多次就醫，後因列為案24接觸者，採檢並住院隔離後確診。
            `,
    },
    {
        no: '26',
        case: '26',
        date: '2/21',
        status: 'case_s1',
        group: 'non',
        info:
            '《案26》' +
            '<br>' +
            `
            北部40多歲女性，為第24例小女兒，無發燒或呼吸道症狀，因食道逆流情形曾二度就醫，因列為案24接觸者，採檢並住院隔離後確診。
            `,
    },
    {
        no: '27',
        case: '27',
        date: '2/23',
        status: 'case_s2',
        group: 'non',
        info:
            '《案27》' +
            '<br>' +
            `
            北部80多歲男性，本身為具高血壓、糖尿病等慢性病之洗腎病人，近期無出國史，2月初出現咳嗽、流鼻水、發燒症狀診斷為肺炎，隨後通報採檢送驗，確診感染武漢肺炎。
            `,
    },
    {
        no: '28',
        case: '28',
        date: '2/23',
        status: 'case_s1',
        group: 'non',
        info:
            '《案28》' +
            '<br>' +
            `
            北部50多歲男性，為第27例大兒子，1月底出現發燒、流鼻水及喉嚨痛等症狀，就醫後診斷為肺炎，隨後通報採檢送驗，確診感染武漢肺炎。
            `,
    },
    {
        no: '29',
        case: '29',
        date: '2/24',
        status: 'case_s1',
        group: 'non',
        info:
            '《案29》' +
            '<br>' +
            `
            北部40多歲男性，為第27例小兒子，1月底出現出現喉嚨不適症狀，但未就醫，2月23日列為確診個案之密切接觸者，收治入院採檢後確診。
            ` +
            '<br>' +
            `
            因工作關係頻繁往返中國武漢及其它地區，最後一次為去年12月2日自廣州返臺，且過年期間亦曾與具中國旅遊史友人聚餐，目前感染源釐清中。
            `,
    },
    {
        no: '30',
        case: '30',
        date: '2/24',
        status: 'case_s1',
        group: 'non',
        info:
            '《案30》' +
            '<br>' +
            `
            北部70多歲女性，為第27例太太，2月開始因身體不適多次就醫，後因列為確診個案之密切接觸者，收治入院採檢後確診。
            `,
    },
    {
        no: '31',
        case: '31',
        date: '2/25',
        status: 'case_s1',
        group: 'non',
        info:
            '《案31》' +
            '<br>' +
            `
            為第27例孫子、第28例的兒子，曾於2月11日及19日至醫院探視第27例，無疑似症狀，因列為確診個案之密切接觸者，採檢後確診，已收治醫院隔離觀察。
            `,
    },
    {
        no: '32',
        case: '32',
        date: '2/26',
        status: 'case_s1',
        group: 'non',
        info:
            '《案32》' +
            '<br>' +
            `
            北部30多歲外籍女性，為第27例看護，因列為確診個案之密切接觸者，透過警政單位尋獲後，送往醫院採檢通報並確診，當時有輕微喉嚨不適。
            `,
    },
    {
        no: '33',
        case: '33',
        date: '2/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案33》' +
            '<br>' +
            `
            北部30多歲男性，2月中曾跟團至日本大阪旅遊，返國後出現咳嗽、喉嚨癢情形，經醫院通報送驗確診。
            `,
    },
    {
        no: '34',
        case: '34',
        date: '2/28',
        status: 'case_s2',
        group: 'non',
        info:
            '《案34》' +
            '<br>' +
            `
            50多歲女性，有糖尿病、心血管疾病等慢性病史，近期無國外旅遊史。因低血糖、全身倦怠情形就醫，後出現咳嗽、喉嚨痛、發燒症狀，診斷有肺炎情形，經醫院通報送驗確診，經過治療後仍因為心臟衰竭病逝。
            `,
    },
    {
        no: '35',
        case: '35',
        date: '2/29',
        status: 'case_s1',
        group: 'non',
        info:
            '《案35》' +
            '<br>' +
            `
            為一名清潔人員，於醫院急診室工作時曾接觸過案34，後出現咳嗽、流鼻水、發燒等症狀，並於案34確診後列為接觸者採檢，確診為武漢肺炎。
            `,
    },
    {
        no: '36',
        case: '36',
        date: '2/29',
        status: 'case_s1',
        group: 'non',
        info:
            '《案36》' +
            '<br>' +
            `
            為案34確診前住院病房之護理人員，陸續於2月18至25日間出現咳嗽、流鼻水、發燒等症狀，並於案34確診後列為接觸者，採檢後確診，為一起群聚事件。
            `,
    },
    {
        no: '37',
        case: '37',
        date: '2/29',
        status: 'case_s1',
        group: 'non',
        info:
            '《案37》' +
            '<br>' +
            `
            為案34確診前住院病房之護理人員，陸續於2月18至25日間出現咳嗽、流鼻水、發燒等症狀，並於案34確診後列為接觸者，採檢後確診，為一起群聚事件。
            `,
    },
    {
        no: '38',
        case: '38',
        date: '2/29',
        status: 'case_s1',
        group: 'non',
        info:
            '《案38》' +
            '<br>' +
            `
            為案34確診前住院病房之護理人員，陸續於2月18至25日間出現咳嗽、流鼻水、發燒等症狀，並於案34確診後列為接觸者，採檢後確診，為一起群聚事件。
            `,
    },
    {
        no: '39',
        case: '39',
        date: '2/29',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案39》' +
            '<br>' +
            `
            北部60多歲女性，曾與親友跟團至杜拜、埃及旅遊，在國外出現喉嚨痛、咳嗽症狀，返國後至診所就醫，但咳嗽加劇，且出現胸悶、肚子不適及嘔吐症狀情形，於28日就醫並採檢通報，經檢驗後確診。
            `,
    },
    {
        no: '40',
        case: '40',
        date: '3/1',
        status: 'default',
        group: 'trp_A',
        info:
            '《案40》' +
            '<br>' +
            `
            北部70多歲女性，為郵輪鑽石公主號旅客，先前經日方檢驗陽性後住院，經治療返臺後安排入住負壓隔離病房，經三次採檢後確診。
            `,
    },
    {
        no: '41',
        case: '41',
        date: '3/2',
        status: 'case_s1',
        group: 'non',
        info:
            '《案41》' +
            '<br>' +
            `
            北部20多歲女性，為第34例女兒，近期無旅遊史，除自身有過敏體質外，無任何不適症狀。因先前多次至病房陪伴，經衛生單位安排接觸者採檢及住院隔離後，二採呈現陽性確診。
            `,
    },
    {
        no: '42',
        case: '42',
        date: '3/3',
        status: 'case_s1',
        group: 'non',
        info:
            '《案42》' +
            '<br>' +
            `
            北部50多歲女性，為案34確診前同病房、不同病室已出院病人的陪病家屬，曾因全身倦怠及咳嗽至診所就醫，後因衛生單位追蹤採檢確診。
            `,
    },
    {
        no: '43',
        case: '43',
        date: '3/5',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案43》' +
            '<br>' +
            `
            北部50多歲女性，在案39確診前曾一起在插花班上課，因出現發燒及喉嚨痛症狀，由衛生單位安排就醫並住院隔離，採檢後確診。
            `,
    },
    {
        no: '44',
        case: '44',
        date: '3/5',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案44》' +
            '<br>' +
            `
            北部30多歲男性，曾與友人至菲律賓旅遊，於當地出現胃脹及腹瀉症狀，返國後因喉嚨乾、倦怠情形至診所就醫，院方發現有國外旅遊史且出現症狀故採檢通報，經檢驗確診。
            `,
    },
    {
        no: '45',
        case: '45',
        date: '3/6',
        status: 'case_s1',
        group: 'non',
        info:
            '《案45》' +
            '<br>' +
            `
            50多歲女性，近期無國外旅遊史，2月中因其他疾病收治住院，與案34同病房不同病室，出院後衛生單位進行案34相關風險對象追蹤採檢時，因檢體異常再次採檢，發現確診，目前已隔離。
            `,
    },
    {
        no: '46',
        case: '46',
        date: '3/10',
        status: 'case_s1',
        group: 'non',
        info:
            '《案46》' +
            '<br>' +
            `
            近期無出國史，與案34、案41同住，曾於案34住院期間陪病，並於案34確診後，以接觸者身分住院隔離並進行兩次採檢陰性。隨後出現咳嗽症狀，安排就醫後收治負壓隔離病房並進行第三次採檢確診。
            `,
    },
    {
        no: '47',
        case: '47',
        date: '3/10',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案47》' +
            '<br>' +
            `
            3月初曾與2名同事至荷蘭出差，返國後出現微燒及乾咳情形並即時就醫，因個案有國外旅遊史且出現症狀，故院方進行採檢通報後並確診，目前收治負壓隔離病房，研判於境外感染的可能性較高。
            `,
    },
    {
        no: '48',
        case: '48',
        date: '3/11',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案48》' +
            '<br>' +
            `
            北部30多歲女性，2月28日至3月8日獨自前往英國旅遊，返國後於因頭暈、頭痛等症狀至診所就醫，後出現發燒、咳嗽，經醫院通報檢驗後確診。
            `,
    },
    {
        no: '49',
        case: '49',
        date: '3/12',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案49》' +
            '<br>' +
            `
            北部40多歲女性，曾自臺灣經英國轉機至愛爾蘭旅遊，再前往比利時，最後經土耳其轉機返臺。入境時並無症狀，返家後出現頭痛、倦怠及喉嚨痛症狀，就醫後並通報採檢後確診。
            `,
    },
    {
        no: '50',
        case: '50',
        date: '3/13',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案50》' +
            '<br>' +
            `
            中部50多歲美國籍男性，獨自在臺工作，2月曾接待4名來臺的美國友人（均於2月26日離境），後出現畏寒、咳嗽及發燒症狀，就醫經醫院通報後確診。
            `,
    },
    {
        no: '51',
        case: '51',
        date: '3/14',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案51》' +
            '<br>' +
            `
            30多歲荷蘭籍男性，曾去過奧地利，來臺後出現呼吸困難、胸悶和全身倦怠等症狀，至醫院急診就醫，經診斷有肺炎情形，採檢通報後確診，目前住院隔離。
            `,
    },
    {
        no: '52',
        case: '52',
        date: '3/14',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案52》' +
            '<br>' +
            `
            30多歲本國籍男性，曾與友人經土耳其轉機至瑞士，接著自瑞士前往巴黎滑雪，再自巴黎至瑞士搭機，經土耳其轉機返臺後，出現發燒、咳嗽、流鼻水等症狀，至醫院就醫後採檢通報確診，已收治負壓隔離病房。
            `,
    },
    {
        no: '53',
        case: '53',
        date: '3/14',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案53》' +
            '<br>' +
            `
            30多歲本國籍男性，曾前往德國慕尼黑、紐倫堡出差，返國後出現咳嗽有痰、喉嚨痛等症狀，就醫後檢驗通報確診，已收治負壓隔離病房。
            `,
    },
    {
        no: '54',
        case: '54',
        date: '3/15',
        status: 'default',
        group: 'trp_A',
        info:
            '《案54》' +
            '<br>' +
            `
            北部30多歲男性，2月28日至3月8日期間，先後赴泰國、日本北海道旅遊，返國後出現流鼻水症狀，後因全身倦怠及頭痛等症狀就醫並採檢通報確診。
            `,
    },
    {
        no: '55',
        case: '55',
        date: '3/15',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案55》' +
            '<br>' +
            `
            北部50多歲男性，3月初參加埃及團體旅遊，返國後因全身倦怠與肌肉痠痛就醫，經檢測有發燒情形，由醫院採檢通報後確診。
            `,
    },
    {
        no: '56',
        case: '56',
        date: '3/15',
        status: 'default',
        group: 'trp_A',
        info:
            '《案56》' +
            '<br>' +
            `
            北部40多歲男性，3月初至土耳其旅行（曾於杜拜轉機），在土耳其時出現身體不適，入境後因喉嚨癢、腹瀉、自覺發熱等症狀就醫，經醫院採檢後通報確診。
            `,
    },
    {
        no: '57',
        case: '57',
        date: '3/15',
        status: 'default',
        group: 'trp_A',
        info:
            '《案57》' +
            '<br>' +
            `
            北部70歲女性，與案56為同旅遊團團員，返國後因發燒就醫，經醫院採檢後通報確診。
            `,
    },
    {
        no: '58',
        case: '58',
        date: '3/15',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案58》' +
            '<br>' +
            `
            北部20多歲女性，2020年1月至西班牙就學，3月12日曾出現體溫偏高，13日返國時經發燒篩檢站採檢送驗確診。
            `,
    },
    {
        no: '59',
        case: '59',
        date: '3/15',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案59》' +
            '<br>' +
            `
            北部10多歲男性，1月與家人同遊希臘，3月5日返臺，12日出現喉嚨痛情形、13日因咳嗽、流鼻水及頭痛等症狀就醫，採檢後確診。
            `,
    },
    {
        no: '60',
        case: '60',
        date: '3/16',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案60》' +
            '<br>' +
            `
            中部20多歲女性，2月9日至3月11日獨自赴義大利、希臘、德國旅遊，返國後出現發燒、畏寒及倦怠就醫，經通報檢驗後確診。
            `,
    },
    {
        no: '61',
        case: '61',
        date: '3/16',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案61》' +
            '<br>' +
            `
            南部50多歲女性，3月5日至14日與家人參加奧地利、捷克團體旅遊，入境時因發燒被檢疫站攔檢送驗後確診。
            `,
    },
    {
        no: '62',
        case: '62',
        date: '3/16',
        status: 'default',
        group: 'trp_A',
        info:
            '《案62》' +
            '<br>' +
            `
            北部60多歲女性，3月7日至14日與家人至菲律賓探親，於當地出現發燒、咳嗽、肌肉痠痛、後眼窩痛症狀，入境後由家人送至醫院就醫，並採檢送驗後確診。
            `,
    },
    {
        no: '63',
        case: '63',
        date: '3/16',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案63》' +
            '<br>' +
            `
            北部50多歲男性，為案55埃及旅遊之同團團員，因咳嗽有痰、流鼻水、寒顫等症狀至醫院就醫後通報送驗後確診。
            `,
    },
    {
        no: '64',
        case: '64',
        date: '3/16',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案64》' +
            '<br>' +
            `
            北部20多歲男性，去年8月底至西班牙就學，由於就讀學校有確診個案，故與就讀同校的家人及同學一同返國，後出現畏寒、流鼻水及眼睛癢症狀，至醫院就醫並採檢通報後確診。
            `,
    },
    {
        no: '65',
        case: '65',
        date: '3/16',
        status: 'default',
        group: 'trp_A',
        info:
            '《案65》' +
            '<br>' +
            `
            南部2名50多歲女性、1名60多歲男性，與案56、案57同團至土耳其旅遊，分別於3月14日、15日發病，經由衛生單位通知前往醫院採檢通報確診。
            `,
    },
    {
        no: '66',
        case: '66',
        date: '3/16',
        status: 'default',
        group: 'trp_A',
        info:
            '《案66》' +
            '<br>' +
            `
            南部2名50多歲女性、1名60多歲男性，與案56、案57同團至土耳其旅遊，分別於3月14日、15日發病，經由衛生單位通知前往醫院採檢通報確診。
            `,
    },
    {
        no: '67',
        case: '67',
        date: '3/16',
        status: 'default',
        group: 'trp_A',
        info:
            '《案67》' +
            '<br>' +
            `
            南部2名50多歲女性、1名60多歲男性，與案56、案57同團至土耳其旅遊，分別於3月14日、15日發病，經由衛生單位通知前往醫院採檢通報確診。
            `,
    },
    {
        no: '68',
        case: '68',
        date: '3/17',
        status: 'default',
        group: 'trp_A',
        info:
            '《案68》' +
            '<br>' +
            `
            年齡介於20多歲-60多歲的2女2男，分別居住北部、中部，3月初至土耳其旅遊（與案56、案57、案65、案66、案67同團），由衛生單位安排就醫採檢後確診。
            `,
    },
    {
        no: '69',
        case: '69',
        date: '3/17',
        status: 'default',
        group: 'trp_A',
        info:
            '《案69》' +
            '<br>' +
            `
            年齡介於20多歲-60多歲的2女2男，分別居住北部、中部，3月初至土耳其旅遊（與案56、案57、案65、案66、案67同團），由衛生單位安排就醫採檢後確診。
            `,
    },
    {
        no: '70',
        case: '70',
        date: '3/17',
        status: 'default',
        group: 'trp_A',
        info:
            '《案70》' +
            '<br>' +
            `
            年齡介於20多歲-60多歲的2女2男，分別居住北部、中部，3月初至土耳其旅遊（與案56、案57、案65、案66、案67同團），由衛生單位安排就醫採檢後確診。
            `,
    },
    {
        no: '71',
        case: '71',
        date: '3/17',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案71》' +
            '<br>' +
            `
            北部60多歲男性，3月初參加埃及團體旅遊（與案55、案63同團），返國後出現咳嗽、流鼻水、腹瀉症狀，經安排就醫並採檢通報後檢驗確診。
            `,
    },
    {
        no: '72',
        case: '72',
        date: '3/17',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案72》' +
            '<br>' +
            `
            南部70多歲女性，3月初與家人（案61）參加奧地利、捷克團體旅遊，返國後出現發燒症狀且有肺炎情形，由醫院採檢通報後確診。
            `,
    },
    {
        no: '73',
        case: '73',
        date: '3/17',
        status: 'default',
        group: 'trp_A',
        info:
            '《案73》' +
            '<br>' +
            `
            年齡介於20多歲-60多歲的2女2男，分別居住北部、中部，3月初至土耳其旅遊（與案56、案57、案65、案66、案67同團），由衛生單位安排就醫採檢後確診。
            `,
    },
    {
        no: '74',
        case: '74',
        date: '3/17',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案74》' +
            '<br>' +
            `
            南部30多歲男性，先前至冰島自助旅遊，返國後出現牙痛、全身倦怠症狀，就醫時因有國外旅遊史，由醫院採檢通報後確診。
            `,
    },
    {
        no: '75',
        case: '75',
        date: '3/17',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案75》' +
            '<br>' +
            `
            南部20多歲男性，曾至德國旅遊，返國後出現流鼻水、自覺嗅覺喪失症狀，二度就醫經診斷有肺炎情形，故採檢通報後確診。
            `,
    },
    {
        no: '76',
        case: '76',
        date: '3/17',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案76》' +
            '<br>' +
            `
            北部30多歲女性，與2名友人至法國巴黎旅遊，返國後出現喉嚨痛、流鼻水政狀，就醫後採檢通報後確診。
            `,
    },
    {
        no: '77',
        case: '77',
        date: '3/17',
        status: 'default',
        group: 'trp_A',
        info:
            '《案77》' +
            '<br>' +
            `
            北部60多歲女性，1月自臺灣經杜拜轉機至捷克旅遊，並於3月自捷克搭機至美國紐約探親，16日入境臺灣。該案例在紐約出現發燒、腹瀉症狀，曾於當地就醫，返國後再赴醫院就醫後隨即採檢通報確診。
            `,
    },
    {
        no: '78',
        case: '78',
        date: '3/18',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案78》' +
            '<br>' +
            `
            50多歲男性，3月6日至3月16日赴德國工作，15日出現咳嗽、鼻塞症狀，返國就醫後檢驗確診。
            `,
    },
    {
        no: '79',
        case: '79',
        date: '3/18',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案79》' +
            '<br>' +
            `
            40多歲女性，3月1日至3月14日赴英國工作，返國後出現流鼻水、鼻塞症狀，就醫後檢驗確診。
            `,
    },
    {
        no: '80',
        case: '80',
        date: '3/18',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案80》' +
            '<br>' +
            `
            20多歲女性，先前在西班牙就學，和陸續確診的案58、案64為同群返臺學生，當時一起列入居家檢疫，後出現身體無力、鼻塞症狀，經通報檢驗確診。
            `,
    },
    {
        no: '81',
        case: '81',
        date: '3/18',
        status: 'default',
        group: 'trp_A',
        info:
            '《案81》' +
            '<br>' +
            `
            50多歲女性，為指標性土耳其旅行團團員，無症狀，因列為確診個案之密切接觸者，經檢驗後確診。
            `,
    },
    {
        no: '82',
        case: '82',
        date: '3/18',
        status: 'default',
        group: 'trp_A',
        info:
            '《案82》' +
            '<br>' +
            `
            20多歲女性，為指標性土耳其旅行團團員，11日於當地就出現喉嚨痛、乾咳症狀，回臺後二度就醫，經檢驗後確診。
            `,
    },
    {
        no: '83',
        case: '83',
        date: '3/18',
        status: 'default',
        group: 'trp_A',
        info:
            '《案83》' +
            '<br>' +
            `
            40多歲女性，為指標性土耳其旅行團團員，無症狀，因列為確診個案之密切接觸者，經檢驗後確診。
            `,
    },
    {
        no: '84',
        case: '84',
        date: '3/18',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案84》' +
            '<br>' +
            `
            20多歲男性，為來臺旅遊的法國籍人士，3月12日入境後大多待在臺北旅遊，16日早上發燒就醫，經院所通報採檢確診。
            `,
    },
    {
        no: '85',
        case: '85',
        date: '3/18',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案85》' +
            '<br>' +
            `
            30多歲女性，先前赴美國自助旅遊，在當地出現全身倦怠、鼻塞、流鼻水症狀，返臺就醫通報採檢確診。
            `,
    },
    {
        no: '86',
        case: '86',
        date: '3/18',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案86》' +
            '<br>' +
            `
            20多歲男性，先前在美國就學，並於當地出現咳嗽症狀，16日於臺灣機場入境，在填寫健康聲明書時表明自己出現相關症狀，因此當場進行採檢後確診。
            `,
    },
    {
        no: '87',
        case: '87',
        date: '3/18',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案87》' +
            '<br>' +
            `
            30多歲男性，2月10日至3月16日至英國、義大利、法國工作及旅遊，並於法國當地出現喉嚨痛、咳嗽症狀。因此回臺填寫健康聲明書時，表明自己出現相關症狀，當場進行採檢後確診。
            `,
    },
    {
        no: '88',
        case: '88',
        date: '3/18',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案88》' +
            '<br>' +
            `
            20多歲女性，2月14日至3月16日赴西班牙研習，但於當地出現咳嗽、發燒、胸悶症狀，因此於入境時主動告知，當場進行採檢後確診。
            `,
    },
    {
        no: '89',
        case: '89',
        date: '3/18',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案89》' +
            '<br>' +
            `
            30多歲女性，長期住在美國，3月14日出現咳嗽、喉嚨痛、發燒症狀，16日入境後表明自己出現症狀，當場進行採檢後確診。
            `,
    },
    {
        no: '90',
        case: '90',
        date: '3/18',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案90》' +
            '<br>' +
            `
            30多歲男性，2月14日至3月16日赴西班牙工作及旅遊，於當地出現流鼻水、打噴嚏、喉嚨癢、咳嗽症狀，16日返臺後主動告知症狀，當場進行採檢後確診。
            `,
    },
    {
        no: '91',
        case: '91',
        date: '3/18',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案91》' +
            '<br>' +
            `
            30多歲男性，2月27日至3月16日赴法國、西班牙、英國自助旅遊，並於法國當地出現喉嚨痛、流鼻水、鼻塞、咳嗽狀況，16日返臺後主動告知症狀，當場進行採檢後確診。
            `,
    },
    {
        no: '92',
        case: '92',
        date: '3/18',
        status: 'case_s1',
        group: 'trp_AF',
        info:
            '《案92》' +
            '<br>' +
            `
            20多歲男性，為埃及團確診個案接觸者，無症狀，經接觸者採檢確診。
            `,
    },
    {
        no: '93',
        case: '93',
        date: '3/18',
        status: 'default',
        group: 'trp_A',
        info:
            '《案93》' +
            '<br>' +
            `
            30多歲女性，先前曾到卡達旅遊，並於當地出現背痛症狀，16日返臺後主動告知症狀，當場進行採檢後確診。
            `,
    },
    {
        no: '94',
        case: '94',
        date: '3/18',
        status: 'default',
        group: 'trp_A',
        info:
            '《案94》' +
            '<br>' +
            `
            30多歲男性，為指標性土耳其旅行團團員，返臺後出現發燒，經檢驗後確診。
            `,
    },
    {
        no: '95',
        case: '95',
        date: '3/18',
        status: 'default',
        group: 'trp_A',
        info:
            '《案95》' +
            '<br>' +
            `
            20多歲女性，3月6日至3月12日與丈夫赴印尼峇里島遊玩，在當地就出現喉嚨腫痛、輕微咳嗽等症狀，入境時沒有發燒也未通報，直到16日就醫，經院所通報採檢確診。
            `,
    },
    {
        no: '96',
        case: '96',
        date: '3/18',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案96》' +
            '<br>' +
            `
            20多歲女性，先前到英國就學，於當地出現發燒、咳嗽有痰、輕微鼻塞現象，後經泰國轉機返臺，16日於機場主動告知症狀，當場進行採檢後確診。
            `,
    },
    {
        no: '97',
        case: '97',
        date: '3/18',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案97》' +
            '<br>' +
            `
            20多歲男性，先前到瑞士就學，於當地出現全身無力、發燒、咳嗽、喉嚨痛症狀，於奧地利經泰國轉機返臺，16日入境時主動通報身體不適，當場進行採檢後確診。
            `,
    },
    {
        no: '98',
        case: '98',
        date: '3/18',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案98》' +
            '<br>' +
            `
            20多歲女性，先前到法國就學，於當地出現全身無力、發燒、咳嗽、喉嚨有痰等症狀，回臺後主動通報身體狀況，當場進行採檢後確診。
            `,
    },
    {
        no: '99',
        case: '99',
        date: '3/18',
        status: 'default',
        group: 'trp_A',
        info:
            '《案99》' +
            '<br>' +
            `
            20多歲女性，2月1日至3月16日赴菲律賓工作，於當地出現流鼻水、倦怠、喉嚨痛、腹瀉、鼻塞、咳嗽等症狀，16日返臺填寫健康聲明書時，表明自己出現相關症狀，當場進行採檢後確診。
            `,
    },
    {
        no: '100',
        case: '100',
        date: '3/18',
        status: 'case_s1',
        group: 'non',
        info:
            '《案100》' +
            '<br>' +
            `
            南部20多歲女性，近期無出國史，3月12日開始出現喉嚨痛、發燒、頭痛症狀，當天曾就醫，16日再次就醫診斷為一般感冒，隔日又因症狀未緩解到急診就醫，後來經醫師採檢通報確診，感染源待釐清。
            `,
    },
    {
        no: '101',
        case: '101',
        date: '3/19',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案101》' +
            '<br>' +
            `
            為70多歲男性，曾至埃及旅遊（與案55、63、71同團），返國後出現發燒、流鼻水、肌肉痠痛等症狀，由衛生單位安排就醫並採檢通報確診。
            `,
    },
    {
        no: '102',
        case: '102',
        date: '3/19',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案102》' +
            '<br>' +
            `
            50多歲女性，曾與非同住家人至美國參加商務活動，入境時有輕微咳嗽，後來自覺有發燒情形就醫，採檢通報後確診。
            `,
    },
    {
        no: '103',
        case: '103',
        date: '3/19',
        status: 'case_s1',
        group: 'trp_EU',
        info:
            '《案103》' +
            '<br>' +
            `
            為案59（高中生）之同班男同學，與案59座位鄰近，因出現喉嚨癢、發燒症狀，先行致電1922通知後，依指示前往醫院採檢後確診。
            `,
    },
    {
        no: '104',
        case: '104',
        date: '3/19',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案104》' +
            '<br>' +
            `
            40多歲女性，曾跟團至奧地利、捷克旅遊（與案61、72同團）。其中案104出現咳嗽、流鼻水症狀，案108出現發燒症狀，就醫採檢通報後確診。
            `,
    },
    {
        no: '105',
        case: '105',
        date: '3/19',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案105》' +
            '<br>' +
            `
            20多歲男性，曾赴法國留學，返臺入境時主動向檢疫人員通報喉嚨不適，安排採檢通報後確診。
            `,
    },
    {
        no: '106',
        case: '106',
        date: '3/19',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案106》' +
            '<br>' +
            `
            20多歲男性，曾至西班牙遊學，出現喉嚨癢症狀，入境時主動向檢疫人員說明症狀，安排採檢通報後確診。
            `,
    },
    {
        no: '107',
        case: '107',
        date: '3/19',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案107》' +
            '<br>' +
            `
            50多歲法國籍男性，來臺探親，入境後直接至防疫旅宿居家檢疫，出現流鼻水、咳嗽症狀，安排採檢通報後確診。
            `,
    },
    {
        no: '108',
        case: '108',
        date: '3/19',
        status: 'case_s2',
        group: 'trp_EU',
        info:
            '《案108》' +
            '<br>' +
            `
            40多歲男性，曾跟團至奧地利、捷克旅遊（與案61、72同團）。其中案104出現咳嗽、流鼻水症狀，案108出現發燒症狀，就醫採檢通報後確診，但因為體重較重、心肺功能差，後續因嚴重肺炎病逝。
            `,
    },
    {
        no: '109',
        case: '109',
        date: '3/20',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案109》' +
            '<br>' +
            `
            80多歲男性，曾跟團至埃及旅遊，返國後發病，有發燒、流鼻水、咳嗽等症狀，自行就醫後，經通報採檢確診。
            `,
    },
    {
        no: '110',
        case: '110',
        date: '3/20',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案110》' +
            '<br>' +
            `
            30多歲女性，曾至英國留學後，又前往法國旅遊，返國時出現胸悶、咳嗽等症狀，入境時主動通報，經採檢後確診。
            `,
    },
    {
        no: '111',
        case: '111',
        date: '3/20',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案111》' +
            '<br>' +
            `
            50多歲女性，曾跟團至埃及旅遊，返國進行居家隔離後發病，有喉嚨痛、發燒等症狀，經通報採檢後確診。
            `,
    },
    {
        no: '112',
        case: '112',
        date: '3/20',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案112》' +
            '<br>' +
            `
            20多歲女性，曾至法國旅遊，返國時出現喉嚨痛、流鼻涕等症狀，入境時主動通報，經採檢後確診。
            `,
    },
    {
        no: '113',
        case: '113',
        date: '3/20',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案113》' +
            '<br>' +
            `
            30多歲男性，曾至美國、墨西哥旅遊，回國後出現流鼻水、鼻塞等症狀，自行就醫後，經通報採檢確診。
            `,
    },
    {
        no: '114',
        case: '114',
        date: '3/20',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案114》' +
            '<br>' +
            `
            10多歲男性，曾因比賽前往西班牙、德國、英國，並經過法國轉機返臺，回國進行居家檢疫，出現頭痛、鼻塞、眼睛痛等症狀，經採檢後確診。
            `,
    },
    {
        no: '115',
        case: '115',
        date: '3/20',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案115》' +
            '<br>' +
            `
            20多歲女性，曾至波蘭遊學，返國後進行居家檢疫，出現發燒、咳嗽、全身倦怠等症狀，經採檢後確診。
            `,
    },
    {
        no: '116',
        case: '116',
        date: '3/20',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案116》' +
            '<br>' +
            `
            20多歲女性，曾至英國留學，返國前就出現咳嗽、流鼻水等症狀，入境時主動通報，經採檢後確診。
            `,
    },
    {
        no: '117',
        case: '117',
        date: '3/20',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案117》' +
            '<br>' +
            `
            40多歲男性，曾至葡萄牙、西班牙旅遊，返國後出現腹瀉症狀，自行就醫後，經通報採檢確診。
            `,
    },
    {
        no: '118',
        case: '118',
        date: '3/20',
        status: 'case_s1',
        group: 'trp_NA',
        info:
            '《案118》' +
            '<br>' +
            `
            30多歲女性，是案85的同行友人，曾前往美國旅遊，返國後進行居家隔離，經採檢後確診。
            `,
    },
    {
        no: '119',
        case: '119',
        date: '3/20',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案119》' +
            '<br>' +
            `
            60多歲男性，曾至美國探親，回國後出現喉嚨痛、鼻塞、流鼻水症狀，自行就醫後，經通報採檢確診。
            `,
    },
    {
        no: '120',
        case: '120',
        date: '3/20',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案120》' +
            '<br>' +
            `
            20多歲女性，曾至法國留學，返國前已出現流鼻水、喉嚨痛、全身倦怠等症狀，返國後居家檢疫後，經通報採檢確診。
            `,
    },
    {
        no: '121',
        case: '121',
        date: '3/20',
        status: 'case_s1',
        group: 'trp_NA',
        info:
            '《案121》' +
            '<br>' +
            `
            30多歲女性，是案85的同行友人，曾前往美國旅遊，返國後進行居家隔離，經採檢後確診。
            `,
    },
    {
        no: '122',
        case: '122',
        date: '3/20',
        status: 'default',
        group: 'trp_A',
        info:
            '《案122》' +
            '<br>' +
            `
            為60多歲女性，曾跟團至土耳其旅遊，返國時與發生群聚的土耳其旅遊團搭乘同班機，因此列為接觸者進行居家隔離，發病後自行就醫，經採檢後確診。
            `,
    },
    {
        no: '123',
        case: '123',
        date: '3/20',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案123》' +
            '<br>' +
            `
            為40多歲美國籍男性，曾至新加坡、美國加州、日本東京洽公，返國後進行居家檢疫，出現發燒、倦怠等症狀，經採檢後確診。
            `,
    },
    {
        no: '124',
        case: '124',
        date: '3/20',
        status: 'case_s1',
        group: 'trp_NA',
        info:
            '《案124》' +
            '<br>' +
            `
            30多歲男性，近期無出國史，發病後自行就醫採檢通報確診，個案表示曾與自美國返臺的上司接觸，同事也出現症狀，感染源待釐清。
            `,
    },
    {
        no: '125',
        case: '125',
        date: '3/20',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案125》' +
            '<br>' +
            `
            20多歲女性，曾前往荷蘭、奧地利旅遊與工作，回國前已出現鼻塞、流鼻水、全身無力等症狀，入境時於機場主動通報，經採檢後確診。
            `,
    },
    {
        no: '126',
        case: '126',
        date: '3/20',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案126》' +
            '<br>' +
            `
            30多歲男性，曾至加拿大旅遊，回國後出現乾咳症狀，自行就醫後，經通報採檢確診。
            `,
    },
    {
        no: '127',
        case: '127',
        date: '3/20',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案127》' +
            '<br>' +
            `
            20多歲男性，曾至西班牙留學，回國前出現喉嚨痛、咳嗽等症狀，入境時於機場主動通報，經採檢後確診。
            `,
    },
    {
        no: '128',
        case: '128',
        date: '3/20',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案128》' +
            '<br>' +
            `
            20多歲女性，曾至法國留學，並曾前往盧森堡、比利時、德國旅遊，返國前已出現喉嚨痛、咳嗽症狀，於機場主動通報，經採檢後確診。
            `,
    },
    {
        no: '129',
        case: '129',
        date: '3/20',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案129》' +
            '<br>' +
            `
            40多歲男性，曾至美國工作，回國前已出現發燒、喉嚨癢等症狀，於機場主動通報，經採檢後確診。
            `,
    },
    {
        no: '130',
        case: '130',
        date: '3/20',
        status: 'case_s1',
        group: 'trp_EU',
        info:
            '《案130》' +
            '<br>' +
            `
            10多歲女性，為案59同班同學，居家隔離後出現乾咳症狀，經採檢後確診。
            `,
    },
    {
        no: '131',
        case: '131',
        date: '3/20',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案131》' +
            '<br>' +
            `
            40多歲女性，曾跟團至葡萄牙、西班牙旅遊，經杜拜轉機，回國後出現喉嚨痛症狀，自行就醫後，經通報採檢確診。
            `,
    },
    {
        no: '132',
        case: '132',
        date: '3/20',
        status: 'default',
        group: 'trp_A',
        info:
            '《案132》' +
            '<br>' +
            `
            20多歲女性，曾至菲律賓工作，回國前出現頭痛、發燒、流鼻水症狀，入境時主動通報，經採檢後確診。
            `,
    },
    {
        no: '133',
        case: '133',
        date: '3/20',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案133》' +
            '<br>' +
            `
            10多歲女性，曾至英國留學，回國後加強自主健康管理，出現頭痛、發燒、流鼻水等症狀，通報後採檢確診。
            `,
    },
    {
        no: '134',
        case: '134',
        date: '3/20',
        status: 'case_s1',
        group: 'non',
        info:
            '《案134》' +
            '<br>' +
            `
            30多歲女性，近期無出國史，出現發燒、喉嚨痛症狀後自行就醫，經通報後採檢確診，感染源待釐清。
            `,
    },
    {
        no: '135',
        case: '135',
        date: '3/20',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案135》' +
            '<br>' +
            `
            20多歲女性，長住美國，返臺後出現咳嗽、流鼻水等症狀，自行就醫後，經通報採檢確診。
            `,
    },
    {
        no: '136',
        case: '136',
        date: '3/21',
        status: 'default',
        group: 'trp_A',
        info:
            '《案136》' +
            '<br>' +
            `
            30多歲女性，曾跟團赴土耳其旅遊，返國當日出現咳嗽、流鼻水、有痰症狀，自行就醫後確診。
            `,
    },
    {
        no: '137',
        case: '137',
        date: '3/21',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案137》' +
            '<br>' +
            `
            20多歲女性，3月5日至3月19日赴美國旅遊，於當地出現喉嚨痛、發燒、噁心、頭暈症狀，返國後自行通報，由機場採檢送驗確診。
            `,
    },
    {
        no: '138',
        case: '138',
        date: '3/21',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案138》' +
            '<br>' +
            `
            20多歲男性，1月初至法國就學，返臺居家檢疫期間出現咳嗽、有痰症狀，經安排就醫及採檢通報後確診。
            `,
    },
    {
        no: '139',
        case: '139',
        date: '3/21',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案139》' +
            '<br>' +
            `
            20多歲女性，去年4月赴英國就學，3月14日返臺，17日出現喉嚨癢、咳嗽、發燒、肌肉痠痛等症狀，就醫後因有境外旅遊史採檢通報確診。
            `,
    },
    {
        no: '140',
        case: '140',
        date: '3/21',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案140》' +
            '<br>' +
            `
            50多歲女性，埃及旅客團員，原列為接觸者，居家隔離期間於3月18日發病，經安排就醫及採檢通報後確診。
            `,
    },
    {
        no: '141',
        case: '141',
        date: '3/21',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案141》' +
            '<br>' +
            `
            20多歲女性，去年9月至英國就學，於當地出現流鼻水、咳嗽、頭痛、有痰症狀，返臺入境時主動通報，由機場採檢送驗確診。
            `,
    },
    {
        no: '142',
        case: '142',
        date: '3/21',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案142》' +
            '<br>' +
            `
            30多歲女性，去年赴英國教會服務，於當地出現咳嗽、有痰症狀，返臺入境時經機場採檢送驗確診。
            `,
    },
    {
        no: '143',
        case: '143',
        date: '3/21',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案143》' +
            '<br>' +
            `
            50多歲男性，因工作關係長住捷克，為案77境外移入個案親人，曾於3月7日至14日間與案77自捷克赴美國探親，並於3月14日出現淋巴腫脹、微燒症狀，19日返國入境時由機場採檢送驗確診。
            `,
    },
    {
        no: '144',
        case: '144',
        date: '3/21',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案144》' +
            '<br>' +
            `
            30多歲女性，和案143為夫妻、和案77境外移入個案為親人，長住捷克。於3月6日出現肌肉痠痛、喉嚨痛症狀，隨後於3月7日至14日間與案77自捷克赴美國探親，19日返國入境時由機場採檢送驗確診。
            `,
    },
    {
        no: '145',
        case: '145',
        date: '3/21',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案145》' +
            '<br>' +
            `
            20多歲女性，曾於3月初赴美國自助旅遊，並於當地出現咳嗽、有痰症狀，19日返國入境時由機場採檢送驗確診。
            `,
    },
    {
        no: '146',
        case: '146',
        date: '3/21',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案146》' +
            '<br>' +
            `
            50多歲男性，3月9日至3月18日至南非工作，於返臺當日出現發燒症狀，隔日自行就醫採檢通報確診。
            `,
    },
    {
        no: '147',
        case: '147',
        date: '3/21',
        status: 'default',
        group: 'trp_A',
        info:
            '《案147》' +
            '<br>' +
            `
            印尼籍20多歲女性，3月中曾返回印尼參加婚禮，來臺後出現咳嗽、腹瀉、頭痛症狀，自行就醫後採檢通報確診。
            `,
    },
    {
        no: '148',
        case: '148',
        date: '3/21',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案148》' +
            '<br>' +
            `
            20多歲女性，1月24日至3月15日至美國就學，返國時與案85搭乘同班機，並列為案85接觸者，3月18日發病，經採檢通報確診。
            `,
    },
    {
        no: '149',
        case: '149',
        date: '3/21',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案149》' +
            '<br>' +
            `
            70多歲男性，3月9日至3月14日跟團至英國旅遊，返臺後出現喉嚨癢、發燒症狀，自行就醫後因有國外旅遊史，因此採檢通報確診。
            `,
    },
    {
        no: '150',
        case: '150',
        date: '3/21',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案150》' +
            '<br>' +
            `
            20多歲男性，為案133家人，1月14日至3月14日至英國就學，3月14日與案133一同返國，3月19日發病，經採檢後確診。
            `,
    },
    {
        no: '151',
        case: '151',
        date: '3/21',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案151》' +
            '<br>' +
            `
            30多歲男性，3月10日至3月14日赴荷蘭工作，返臺後出現咳嗽、胸悶、發熱、喉嚨癢症狀，自行就醫後採檢確診。
            `,
    },
    {
        no: '152',
        case: '152',
        date: '3/21',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案152》' +
            '<br>' +
            `
            20多歲女性，去年赴英國就學，於當地出現喉嚨痛症狀，3月17日返臺後，於居家檢疫期間通報症狀，經安排就醫後採檢確診。
            `,
    },
    {
        no: '153',
        case: '153',
        date: '3/21',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案153》' +
            '<br>' +
            `
            20多歲女性，去年赴法國就學，3月14日返臺後，於3月18日居家檢疫期間出現發燒症狀，經通報安排就醫後採檢確診。
            `,
    },
    {
        no: '154',
        case: '154',
        date: '3/22',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案154》' +
            '<br>' +
            `
            30多歲男性，與案85、118、121曾一同前往美國旅遊，返國後出現肌肉痠痛、頭痛及喉嚨痛等症狀，自行就醫後，經通報採檢確診。
            `,
    },
    {
        no: '155',
        case: '155',
        date: '3/22',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案155》' +
            '<br>' +
            `
            70多歲男性，曾前往丹麥探親，返國後進行居家檢疫時，出現肌肉痠痛、發燒等症狀，且X光片顯示肺炎，經採檢後確診。
            `,
    },
    {
        no: '156',
        case: '156',
        date: '3/22',
        status: 'case_s1',
        group: 'non',
        info:
            '《案156》' +
            '<br>' +
            `
            20多歲女性，近期無出國旅遊史，3月12日開始出現發燒、全身無力、頭暈等症狀後，二度就醫後經通報採檢確診。
            `,
    },
    {
        no: '157',
        case: '157',
        date: '3/22',
        status: 'default',
        group: 'trp_OC',
        info:
            '《案157》' +
            '<br>' +
            `
            20多歲男性，先前曾赴紐西蘭旅遊，返頭後出現全身倦怠、胸痛及呼吸困難症狀，自行就醫後經通報採檢確診。
            `,
    },
    {
        no: '158',
        case: '158',
        date: '3/22',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案158》' +
            '<br>' +
            `
            10多歲女性，2020年1月19日-3月18日到美國就學，返臺當日出現咳嗽、有痰、微燒、頭痛及肌肉痠痛症狀，且X光片顯示肺炎，經採檢後確診。
            `,
    },
    {
        no: '159',
        case: '159',
        date: '3/22',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案159》' +
            '<br>' +
            `
            60多歲男性，先前曾前往美國工作，返臺後出現肌肉酸痛、流鼻水症狀，X光片顯示肺炎，經採檢後確診。
            `,
    },
    {
        no: '160',
        case: '160',
        date: '3/22',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案160》' +
            '<br>' +
            `
            50多歲男性，3月1日-3月10日曾赴美國，返臺後於14日因頭痛至診所就醫，20日被匡列為案124之接觸者後經衛生單位採檢。
            `,
    },
    {
        no: '161',
        case: '161',
        date: '3/22',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案161》' +
            '<br>' +
            `
            60多歲男性，為埃及旅遊團團員，原列為案55接觸者，居家隔離期間於3月20日發病，經安排就醫後發現肺炎症狀，採檢後確診。
            `,
    },
    {
        no: '162',
        case: '162',
        date: '3/22',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案162》' +
            '<br>' +
            `
            60多歲女性，為埃及旅遊團團員，原列為案55接觸者，居家隔離期間於3月20日發病，經安排就醫後發現肺炎症狀，採檢後確診。
            `,
    },
    {
        no: '163',
        case: '163',
        date: '3/22',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案163》' +
            '<br>' +
            `
            20多歲女性，去年9月1日-3月18日到法國就學，返臺居家檢疫期間出現咳嗽、喉嚨痛，經安排就醫後採檢確診。
            `,
    },
    {
        no: '164',
        case: '164',
        date: '3/22',
        status: 'default',
        group: 'trp_A',
        info:
            '《案164》' +
            '<br>' +
            `
            20多歲女性，2月2日-3月18日曾赴菲律賓就學，於當地出現咳嗽、全身痠痛症狀，返臺居家檢疫期間通報，經安排就醫後採檢確診。
            `,
    },
    {
        no: '165',
        case: '165',
        date: '3/22',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案165》' +
            '<br>' +
            `
            20多歲女性，去年12月30日-3月5日前往義大利就學，返臺居家檢疫期間出現流鼻水、鼻塞症狀，經安排就醫後採檢確診。
            `,
    },
    {
        no: '166',
        case: '166',
        date: '3/22',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案166》' +
            '<br>' +
            `
            20多歲男性，1月6日-3月18日赴德國工作，於當地開始出現喉嚨痛症狀，居家檢疫期間通報，經安排就醫後採檢確診。
            `,
    },
    {
        no: '167',
        case: '167',
        date: '3/22',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案167》' +
            '<br>' +
            `
            10多歲男性，1月9日-3月20日赴英國就學，返臺當日出現發燒、全身倦怠、咳嗽症狀，入境時由機場採檢送驗確診。
            `,
    },
    {
        no: '168',
        case: '168',
        date: '3/22',
        status: 'case_s1',
        group: 'trp_NA',
        info:
            '《案168》' +
            '<br>' +
            `
            德國籍30多歲男性，原列為案124接觸者，居家隔離時出現咳嗽、流鼻水、喉嚨痛症狀，經安排就醫後採檢確診。
            `,
    },
    {
        no: '169',
        case: '169',
        date: '3/22',
        status: 'case_s1',
        group: 'trp_NA',
        info:
            '《案169》' +
            '<br>' +
            `
            奧地利籍30多歲女性，原列為案124接觸者，居家隔離時出現發燒症狀，經安排就醫後採檢確診。
            `,
    },
    {
        no: '170',
        case: '170',
        date: '3/23',
        status: 'case_s2',
        group: 'trp_EU',
        info:
            '《案170》' +
            '<br>' +
            `
            60多歲男性，與案189為夫妻，3月12日至20日一起赴西班牙旅遊，返國入境時因為有發燒、咳嗽症狀，經機場篩檢後確診。個案本身有癌症病史，住院過程中使用奎寧藥物，但情況不見好轉轉入加護病房，後因多重器官衰竭病逝。
            `,
    },
    {
        no: '171',
        case: '171',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案171》' +
            '<br>' +
            `
            30多歲男性，與案174為職場同事，1月12日-3月20日前往荷蘭工作，在當地出現發燒、全身痠痛、輕微鼻塞、失去嗅覺味覺狀況，返國入境時經機場篩檢後確診。
            `,
    },
    {
        no: '172',
        case: '172',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案172》' +
            '<br>' +
            `
            30多歲男性，與案173為夫妻，去年12月起二度前往法國工作及旅遊，於當地出現發燒、咳嗽、喉嚨痛、有痰症狀，返國入境時經機場篩檢後確診。
            `,
    },
    {
        no: '173',
        case: '173',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案173》' +
            '<br>' +
            `
            30多歲女性，與案172為夫妻，2019年12月21日至2020年3月20日，前往法國工作及旅遊，於當地出現發燒、流鼻水症狀，返國入境時經機場篩檢後確診。
            `,
    },
    {
        no: '174',
        case: '174',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案174》' +
            '<br>' +
            `
            30多歲男性，與案171為職場同事，2月25日-3月20日赴荷蘭工作，於當地出現發燒、全身倦怠、喉嚨痛、咳嗽、胸痛症狀，返國入境時經機場篩檢後確診。
            `,
    },
    {
        no: '175',
        case: '175',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案175》' +
            '<br>' +
            `
            4歲男性，為案171隨行家人，1月12日-3月20日前往荷蘭，於當地出現發燒症狀， 返國入境時經機場篩檢後確診。
            `,
    },
    {
        no: '176',
        case: '176',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案176》' +
            '<br>' +
            `
            20多歲男性，3月7日-3月15日前往瑞士工作，返臺居家檢疫期間出現發燒、頭痛、頭暈症狀，通報後經安排就醫採檢確診。
            `,
    },
    {
        no: '177',
        case: '177',
        date: '3/23',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案177》' +
            '<br>' +
            `
            40多歲男性，與案129為職場同事，3月11日-3月18日前往美國工作，返臺居家檢疫期間出現喉嚨癢、發燒、咳嗽、肌肉痠痛症狀， 通報後經安排就醫採檢確診。
            `,
    },
    {
        no: '178',
        case: '178',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案178》' +
            '<br>' +
            `
            30多歲女性，為案171隨行家人，1月12日-3月20日前往荷蘭，於當地出現發燒、全身痠痛症狀，返國入境時經機場篩檢後確診。
            `,
    },
    {
        no: '179',
        case: '179',
        date: '3/23',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案179》' +
            '<br>' +
            `
            20多歲女性，1月10日-3月17日赴美國就學，返臺後出現流鼻水、微燒症狀，自行就醫後採檢確診。
            `,
    },
    {
        no: '180',
        case: '180',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案180》' +
            '<br>' +
            `
            20多歲男性，去年11月1日-3月20日前往捷克工作，於當地出現咳嗽、疲憊、發冷、肌肉痠痛症狀，返國入境時經機場篩檢後確診。
            `,
    },
    {
        no: '181',
        case: '181',
        date: '3/23',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案181》' +
            '<br>' +
            `
            30多歲女性，2月23日-3月18日前往美國、3月19日-3月20日前往日本旅遊，於3月1日便出現流鼻水、發燒、全身倦怠症狀， 返國入境時經機場篩檢後確診。
            `,
    },
    {
        no: '182',
        case: '182',
        date: '3/23',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案182》' +
            '<br>' +
            `
            40多歲男性，3月7日-3月19日前往美國旅遊，返臺後於居家檢疫期間出現微燒、喉嚨癢、咳嗽症狀，經安排就醫後採檢確診。
            `,
    },
    {
        no: '183',
        case: '183',
        date: '3/23',
        status: 'default',
        group: 'trp_m',
        info:
            '《案183》' +
            '<br>' +
            `
            70多歲女性，2月18日-3月16日前往法國、巴西、智利、祕魯旅遊，返臺居家檢疫期間出現咳嗽、微燒症狀，經安排就醫後採檢確診。
            `,
    },
    {
        no: '184',
        case: '184',
        date: '3/23',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案184》' +
            '<br>' +
            `
            30多歲女性，3月13日-3月19日前往美國處理個人事務，返臺居家檢疫期間出現肌肉痠痛症狀，經安排就醫後採檢確診。
            `,
    },
    {
        no: '185',
        case: '185',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案185》' +
            '<br>' +
            `
            20多歲男性，去年8月8日-2020年3月20日前往英國就學，於當地出現四肢無力、呼吸不順情形，返臺居家檢疫期間通報，經安排就醫後採檢確診。
            `,
    },
    {
        no: '186',
        case: '186',
        date: '3/23',
        status: 'case_s1',
        group: 'trp_NA',
        info:
            '《案186》' +
            '<br>' +
            `
            30多歲女性，為中研院群聚個案（案168）同住接觸者，3月17日發病，因案124於3月20日確診，且案168曾有症狀，故於3月20日自行就醫並採檢通報確診。
            `,
    },
    {
        no: '187',
        case: '187',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案187》' +
            '<br>' +
            `
            30多歲女性，2月20日-3月19日前往英國工作，返臺居家檢疫期間出現喉嚨痛、頭痛、呼吸困難、失去嗅覺症狀，安排就醫後X光片顯示肺炎，採檢通報確診。
            `,
    },
    {
        no: '188',
        case: '188',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案188》' +
            '<br>' +
            `
            20多歲女性，1月27日-3月21日前往英國工作， 並於當地出現發燒、頭痛、鼻塞、喉嚨乾症狀，返國入境時經機場篩檢後確診。
            `,
    },
    {
        no: '189',
        case: '189',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案189》' +
            '<br>' +
            `
            50多歲女性，與案170為夫妻，3月12日至20日一起赴西班牙旅遊，返臺居家檢疫期間出現發燒、咳嗽症狀，經安排就醫後採檢確診。
            `,
    },
    {
        no: '190',
        case: '190',
        date: '3/23',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案190》' +
            '<br>' +
            `
            20多歲女性，2月25日-3月21日赴美國工作，於當地便出現咳嗽症狀，返國入境時經機場篩檢後確診。
            `,
    },
    {
        no: '191',
        case: '191',
        date: '3/23',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案191》' +
            '<br>' +
            `
            20多歲男性，1月9日-3月21日赴美國工作，於當地出現流鼻水症狀，返國入境時經機場篩檢後確診。
            `,
    },
    {
        no: '192',
        case: '192',
        date: '3/23',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案192》' +
            '<br>' +
            `
            20多歲女性，去年10月赴美國就學，18日返臺後出現肺炎、咳嗽、流鼻水、發燒、頭痛症狀，自行就醫後採檢確診。
            `,
    },
    {
        no: '193',
        case: '193',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案193》' +
            '<br>' +
            `
            30多歲男性，3月3日-3月19日赴英國工作，於當地出現喉嚨癢、咳嗽症狀，居家檢疫期間通報，經安排就醫後檢疫確診。
            `,
    },
    {
        no: '194',
        case: '194',
        date: '3/23',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案194》' +
            '<br>' +
            `
            20多歲女性，2月5日-3月19日赴美國工作， 於當地出現咳嗽、流鼻水、全身倦怠症狀，居家檢疫期間通報，經安排就醫後檢疫確診。
            `,
    },
    {
        no: '195',
        case: '195',
        date: '3/23',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案195》' +
            '<br>' +
            `
            20多歲女性，3月5日-3月19日與另2名友人（案137、案145）前往美國旅遊，返臺居家檢疫期間出現3 乾咳、喉嚨痛症狀，經安排就醫後檢疫確診。
            `,
    },
    {
        no: '196',
        case: '196',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案196》' +
            '<br>' +
            `
            美國籍50多歲男性，3月7日自美國離境前往德國、保加利亞、泰國，3月20日來臺轉機時因為有發燒、咳嗽、呼吸喘症狀，於機場篩檢後確診。
            `,
    },
    {
        no: '197',
        case: '197',
        date: '3/24',
        status: 'case_s2',
        group: 'trp_NA',
        info:
            '《案197》' +
            '<br>' +
            `
            40多歲男性，和案202為夫妻，3月8日-3月18日至美國探親，返臺後開始發燒，自行就醫採檢通報後確診，3月19日發病，3月28日因呼吸喘，轉至加護病房隔離，因多重器官衰竭於5月10日病逝。
            `,
    },
    {
        no: '198',
        case: '198',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案198》' +
            '<br>' +
            `
            20多歲女性，去年底赴愛爾蘭讀書，3月19日返臺後，於居家檢疫期間出現腹瀉、全身酸痛、咳嗽、喉嚨痛、流鼻水症狀，經採檢後確診。
            `,
    },
    {
        no: '199',
        case: '199',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案199》' +
            '<br>' +
            `
            20多歲男性，1月8日-3月19日到義大利、德國、比利時、英國旅遊，返臺居家檢疫期間出現頭暈、全身倦怠，經採檢後確診。
            `,
    },
    {
        no: '200',
        case: '200',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案200》' +
            '<br>' +
            `
            20多歲女性，1月18日-3月19日到英國就學，返臺居家檢疫期間出現胸悶、有痰症狀，經採檢後確診。
            `,
    },
    {
        no: '201',
        case: '201',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案201》' +
            '<br>' +
            `
            30多歲女性，2月25日-3月17日到愛爾蘭工作，返臺居家檢疫期間出現流鼻水、鼻塞症狀，經採檢後確診。
            `,
    },
    {
        no: '202',
        case: '202',
        date: '3/24',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案202》' +
            '<br>' +
            `
            40多歲女性，和案197為夫妻，3月8日-3月18日至美國探親，返臺後開始發燒、喉嚨癢、有痰，自行就醫採檢通報後確診。
            `,
    },
    {
        no: '203',
        case: '203',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案203》' +
            '<br>' +
            `
            30多歲男性，2月16日-3月21日赴法國工作，返臺前就出現發燒、頭痛、喉嚨痛、流鼻水、全身無力症狀，入境時於機場採檢後確診。
            `,
    },
    {
        no: '204',
        case: '204',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案204》' +
            '<br>' +
            `
            20多歲女性，1月26日-3月21日到英國就學，於國外就有發燒症狀，入境臺灣時於機場採檢後確診。
            `,
    },
    {
        no: '205',
        case: '205',
        date: '3/24',
        status: 'default',
        group: 'trp_A',
        info:
            '《案205》' +
            '<br>' +
            `
            5歲以下女性，3月11日-3月19日到土耳其旅遊，返臺居家檢疫期間出現發燒症狀，經採檢後確診。
            `,
    },
    {
        no: '206',
        case: '206',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案206》' +
            '<br>' +
            `
            20多歲女性，1月8日-3月21日赴英國就學，返國前就出現喉嚨痛、流鼻水、鼻塞及嗅覺、味覺喪失症狀，入境時於機場採檢後確診。
            `,
    },
    {
        no: '207',
        case: '207',
        date: '3/24',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案207》' +
            '<br>' +
            `
            20多歲女性，3月6日-3月20日赴美國工作，於當地出現頭脹、鼻涕倒流、嗅覺和味覺喪失症狀，入境時於機場採檢後確診。
            `,
    },
    {
        no: '208',
        case: '208',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案208》' +
            '<br>' +
            `
            長住英國30多歲女性，19日從英國經日本轉機回臺，因為有咳嗽、流鼻水、鼻塞症狀，因此入境時於機場採檢後確診。
            `,
    },
    {
        no: '209',
        case: '209',
        date: '3/24',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案209》' +
            '<br>' +
            `
            60多歲女性，1月9日-3月1日前往美國探親，返臺居家檢疫期間出現咳嗽、輕微發燒，經採檢後確診。
            `,
    },
    {
        no: '210',
        case: '210',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案210》' +
            '<br>' +
            `
            20多歲女性，去年8月赴英國就學，3月21日返臺時因為有發燒、胸悶、胸痛、頭痛症狀，因此於機場採檢後確診。
            `,
    },
    {
        no: '211',
        case: '211',
        date: '3/24',
        status: 'default',
        group: 'trp_A',
        info:
            '《案211》' +
            '<br>' +
            `
            40多歲印尼籍男性，3月22日來臺工作，因為有發燒症狀，經機場檢驗後確診。
            `,
    },
    {
        no: '212',
        case: '212',
        date: '3/24',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案212》' +
            '<br>' +
            `
            30多歲女性，因工作長居美國，3月19日返臺，於居家檢疫期間開始發燒，經採檢後確診。
            `,
    },
    {
        no: '213',
        case: '213',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案213》' +
            '<br>' +
            `
            20多歲男性，先前於西班牙就學，3月13日返國時與發生群聚的土耳其旅遊團搭乘同班機，因此列為接觸者並進行居家隔離，3月15日開始發燒，經採檢後確診。
            `,
    },
    {
        no: '214',
        case: '214',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案214》' +
            '<br>' +
            `
            20多歲男性，先前於英國就學，在當地就開始發燒、咳嗽，20日從英國經日本轉機回臺，於機場採檢後確診。
            `,
    },
    {
        no: '215',
        case: '215',
        date: '3/24',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案215》' +
            '<br>' +
            `
            10多歲女性，1月23日-3月22日赴美國就學，返臺居家檢疫期間出現發燒、肌肉痠痛、咳嗽症狀，經採檢後確診。
            `,
    },
    {
        no: '216',
        case: '216',
        date: '3/24',
        status: 'case_s1',
        group: 'trp_EU',
        info:
            '《案216》' +
            '<br>' +
            `
            北部30多歲法國籍男性，原列為案84之接觸者，居家隔離期間於3月20日出現發燒、咳嗽等症狀，經安排就醫及採檢通報後確診。
            `,
    },
    {
        no: '217',
        case: '217',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案217》' +
            '<br>' +
            `
            10多歲男性，曾至英國就學，返國後進行居家檢疫時，出現流鼻水症狀，經通報採檢確診。
            `,
    },
    {
        no: '218',
        case: '218',
        date: '3/24',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案218》' +
            '<br>' +
            `
            20多歲女性，曾至美國就學，返國後進行居家檢疫時，出現喉嚨痛、咳嗽、流鼻水、肺炎等症狀，經通報採檢確診。
            `,
    },
    {
        no: '219',
        case: '219',
        date: '3/24',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案219》' +
            '<br>' +
            `
            20多歲男性，曾至美國工作，返國後進行居家檢疫時，出現發燒、全身無力症狀，經通報採檢後確診。
            `,
    },
    {
        no: '220',
        case: '220',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案220》' +
            '<br>' +
            `
            30多歲女性，曾至英國求職，返國前已出現發燒、肌肉痠痛、流鼻水等症狀，於機場入境時被通報，經採檢後確診。
            `,
    },
    {
        no: '221',
        case: '221',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案221》' +
            '<br>' +
            `
            多歲男性，曾至英國就學，返國前已出現喉嚨痛、咳嗽、鼻塞、流鼻水等症狀，於機場入境時被通報，經採檢後確診。
            `,
    },
    {
        no: '222',
        case: '222',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案222》' +
            '<br>' +
            `
            20多歲女性，曾至英國就學，與案152同校，返國前已出現喉嚨痛、咳嗽等症狀，於機場入境時被通報，經採檢後確診。
            `,
    },
    {
        no: '223',
        case: '223',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案223》' +
            '<br>' +
            `
            20多歲女性，曾至英國就學，與案152同校，返國前已出現喉嚨痛、流鼻水、全身倦怠等症狀，於機場入境時被通報，經採檢後確診。
            `,
    },
    {
        no: '224',
        case: '224',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案224》' +
            '<br>' +
            `
            20多歲女性，曾至英國就學，與案152同校，返國前已出現發燒、喉嚨痛等症狀，於機場入境時被通報，經採檢後確診。
            `,
    },
    {
        no: '225',
        case: '225',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案225》' +
            '<br>' +
            `
            20多歲男性，曾至英國就學，與案152同校，返國前已出現身體悶熱不適、肌肉痠痛、頭痛、味覺變差等症狀，於機場入境時被通報，經採檢後確診。
            `,
    },
    {
        no: '226',
        case: '226',
        date: '3/25',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案226》' +
            '<br>' +
            `
            60多歲男性，為埃及旅遊團團員，居家隔離期間於3月21日出現喉嚨乾情形，經安排就醫及採檢通報後確診，該旅遊團群聚截至目前共10人確診（9名團員、1名接觸者）。
            `,
    },
    {
        no: '227',
        case: '227',
        date: '3/25',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案227》' +
            '<br>' +
            `
            長住英國30多歲女性，返國前已出現全身痠痛、發燒、喉嚨痛、咳嗽、肺炎症狀，22日入境機場時經採檢確診。
            `,
    },
    {
        no: '228',
        case: '228',
        date: '3/25',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案228》' +
            '<br>' +
            `
            20多歲女性，2020年1月初赴荷蘭就學，3月17日返臺後，居家檢疫期間出現發燒、輕微流鼻水、輕微咳嗽、肺炎症狀，經安排就醫採檢確診。
            `,
    },
    {
        no: '229',
        case: '229',
        date: '3/25',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案229》' +
            '<br>' +
            `
            30多歲美國籍男性，長期在臺灣工作，3月4日-3月18日返回美國，居家檢疫期間出現發燒、咳嗽、全身倦怠、肌肉痠痛症狀， 經安排就醫採檢確診。
            `,
    },
    {
        no: '230',
        case: '230',
        date: '3/25',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案230》' +
            '<br>' +
            `
            10多歲女性，2020年1月至美國就學，3月21日返臺後進行家檢疫期間出現發燒症狀，經安排就醫採檢確診。
            `,
    },
    {
        no: '231',
        case: '231',
        date: '3/25',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案231》' +
            '<br>' +
            `
            10多歲女性，去年底至美國就學，3月19日返臺後進行家檢疫期間，出現喉嚨癢、發燒、頭痛症狀，經安排就醫採檢確診。
            `,
    },
    {
        no: '232',
        case: '232',
        date: '3/25',
        status: 'default',
        group: 'trp_m',
        info:
            '《案232》' +
            '<br>' +
            `
            20多歲女性，3月8日-3月11日赴美國工作、3月15日再到印尼，返臺後出現發燒、喉嚨痛、全身倦怠、肌肉及關節痠痛症狀，自行就醫後採檢確診。
            `,
    },
    {
        no: '233',
        case: '233',
        date: '3/25',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案233》' +
            '<br>' +
            `
            20多歲女性，去年12月至英國就學，3月13日-21日與高中同學（案210）同遊英國並一同返國，由於入境時無症狀故返家居家檢疫，於3月23日出現發燒、咳嗽、鼻塞、四肢無力症狀，經安排就醫及採檢通報確診。
            `,
    },
    {
        no: '234',
        case: '234',
        date: '3/25',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案234》' +
            '<br>' +
            `
            20多歲女性，去年底赴法國工作，3月20日返國後，於居家檢疫期間出現發燒症狀，經安排就醫採檢確診。
            `,
    },
    {
        no: '235',
        case: '235',
        date: '3/25',
        status: 'default',
        group: 'trp_m',
        info:
            '《案235》' +
            '<br>' +
            `
            20多歲男性，先前曾到過比利時、土耳其、泰國，3月20日返臺後，於居家檢疫期間出現咳嗽症狀，經安排就醫採檢確診。
            `,
    },
    {
        no: '236',
        case: '236',
        date: '3/26',
        status: 'default',
        group: 'trp_m',
        info:
            '《案236》' +
            '<br>' +
            `
            50多歲男性，曾至美國、聖地牙哥、智利、南極、阿根廷、卡達等地旅遊，並在泰國轉機，返國後進行居家檢疫時，出現肌肉痠痛、頭痛等症狀，通報採檢後確診。
            `,
    },
    {
        no: '237',
        case: '237',
        date: '3/26',
        status: 'default',
        group: 'trp_m',
        info:
            '《案237》' +
            '<br>' +
            `
            50多歲男性，曾至美國、聖地牙哥、智利、南極、阿根廷、卡達等地旅遊，並在泰國轉機，返國後進行居家檢疫時，出現肌肉痠痛、頭痛等症狀，通報採檢後確診。
            `,
    },
    {
        no: '238',
        case: '238',
        date: '3/26',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案238》' +
            '<br>' +
            `
            30多歲男性，曾至英國就學與工作，返國前已出現發燒、咳嗽等症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '239',
        case: '239',
        date: '3/26',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案239》' +
            '<br>' +
            `
            20多歲女性，曾至英國就學，返國前已出現發燒、咳嗽等症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '240',
        case: '240',
        date: '3/26',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案240》' +
            '<br>' +
            `
            30多歲女性，曾至美國工作，返國前已出現喉嚨痛、咳嗽、發燒等症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '241',
        case: '241',
        date: '3/26',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案241》' +
            '<br>' +
            `
            40多歲女性，曾至英國工作，返國時出現喉嚨癢、咳嗽等症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '242',
        case: '242',
        date: '3/26',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案242》' +
            '<br>' +
            `
            20多歲男性，曾至英國就學，返國前已出現咳嗽、流鼻水等症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '243',
        case: '243',
        date: '3/26',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案243》' +
            '<br>' +
            `
            20多歲女性，曾至美國就學，返國前已出現流鼻水、鼻塞、喪失味覺等症狀，進行居家檢疫時通報，經採檢後確診。
            `,
    },
    {
        no: '244',
        case: '244',
        date: '3/26',
        status: 'default',
        group: 'trp_OC',
        info:
            '《案244》' +
            '<br>' +
            `
            30多歲男性，曾至紐西蘭旅遊，返國前已出現發燒、全身倦怠、頭痛、流鼻水等症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '245',
        case: '245',
        date: '3/26',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案245》' +
            '<br>' +
            `
            20多歲女性，曾至英國就學，返國後進行居家檢疫，出現咳嗽、發燒、呼吸急促等症狀，通報採檢後確診。
            `,
    },
    {
        no: '246',
        case: '246',
        date: '3/26',
        status: 'case_s1',
        group: 'trp_NA',
        info:
            '《案246》' +
            '<br>' +
            `
            60多歲男性，近期無出國旅遊史，為案209同住家人，居家隔離時未出現症狀，經採檢後確診。
            `,
    },
    {
        no: '247',
        case: '247',
        date: '3/26',
        status: 'case_s1',
        group: 'trp_EU',
        info:
            '《案247》' +
            '<br>' +
            `
            40多歲女性，近期無出國旅遊史，為案228同住家人，居家隔離時出現發燒、全身倦怠、咳嗽等症狀，通報採檢後確診。
            `,
    },
    {
        no: '248',
        case: '248',
        date: '3/26',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案248》' +
            '<br>' +
            `
            20多歲男性，曾與案170、189同團至西班牙旅遊，居家隔離時未出現症狀，經採檢後確診。
            `,
    },
    {
        no: '249',
        case: '249',
        date: '3/26',
        status: 'default',
        group: 'trp_A',
        info:
            '《案249》' +
            '<br>' +
            `
            60多歲男性，曾至馬來西亞、菲律賓工作，返國後出現倦怠、咳嗽、發燒、肺炎等症狀，自行就醫後，經通報採檢確診。
            `,
    },
    {
        no: '250',
        case: '250',
        date: '3/26',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案250》' +
            '<br>' +
            `
            30多歲女性，曾至摩納哥工作，返國前已出現體溫偏高、喪失嗅覺等症狀，居家檢疫時通報，經採檢後確診。
            `,
    },
    {
        no: '251',
        case: '251',
        date: '3/26',
        status: 'default',
        group: 'trp_m',
        info:
            '《案251》' +
            '<br>' +
            `
            60多歲男性，曾至澳洲、墨西哥旅遊，返國後居家隔離，出現喉嚨痛、發燒等症狀，經通報採檢後確診。 
            `,
    },
    {
        no: '252',
        case: '252',
        date: '3/26',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案252》' +
            '<br>' +
            `
            20多歲男性，曾至英國就學，返國前已出現咳嗽、流鼻水、喉嚨痛等症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '253',
        case: '253',
        date: '3/27',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案253》' +
            '<br>' +
            `
            50多歲女性，曾至美國就學，返國前已出現發燒、腹瀉、胸痛等症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '254',
        case: '254',
        date: '3/27',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案254》' +
            '<br>' +
            `
            20多歲男性，曾至美國就學，為案218友人，返國前已出現咳嗽、頭痛、胸悶等症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '255',
        case: '255',
        date: '3/27',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案255》' +
            '<br>' +
            `
            30多歲男性，曾至美國探親，返國前已出現發燒、咳嗽有痰、全身痠痛等症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '256',
        case: '256',
        date: '3/27',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案256》' +
            '<br>' +
            `
            30多歲男性，曾至美國工作，返國後進行自主健康管理，出現喉嚨癢症狀，經通報後採檢確診。
            `,
    },
    {
        no: '257',
        case: '257',
        date: '3/27',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案257》' +
            '<br>' +
            `
            20多歲男性，曾至英國就學，與案258同校，返國前已出現流鼻水、喉嚨痛、咳嗽等症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '258',
        case: '258',
        date: '3/27',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案258》' +
            '<br>' +
            `
            20多歲女性，曾至英國就學，與案257同校，返國後進行居家檢疫，出現咳嗽、喉嚨痛等症狀，經通報採檢後確診。
            `,
    },
    {
        no: '259',
        case: '259',
        date: '3/27',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案259》' +
            '<br>' +
            `
            60多歲女性，曾至美國、中南美洲旅遊與探親，返國時出現發燒及喉嚨痛症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '260',
        case: '260',
        date: '3/27',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案260》' +
            '<br>' +
            `
            40多歲男性，曾至美國工作，返國前已出現咽喉不適、輕度頭痛、咳嗽等症狀，進行居家檢疫時通報採檢確診。
            `,
    },
    {
        no: '261',
        case: '261',
        date: '3/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案261》' +
            '<br>' +
            `
            60多歲女性，曾至菲律賓工作，返國後進行居家檢疫時，出現微燒、喉嚨有痰等症狀，經通報採檢確診。
            `,
    },
    {
        no: '262',
        case: '262',
        date: '3/27',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案262》' +
            '<br>' +
            `
            30多歲男性，曾至英國就學，返國前已出現喉嚨痛及癢、鼻塞等症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '263',
        case: '263',
        date: '3/27',
        status: 'default',
        group: 'trp_OC',
        info:
            '《案263》' +
            '<br>' +
            `
            30多歲男性，曾至澳洲工作，返國前已出現發燒、咳嗽、腹瀉等症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '264',
        case: '264',
        date: '3/27',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案264》' +
            '<br>' +
            `
            50多歲女性，曾至英國工作，與案267同行，返國前已出現喉嚨癢、咳嗽等症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '265',
        case: '265',
        date: '3/27',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案265》' +
            '<br>' +
            `
            10多歲女性，曾至美國就學，返國前已出現發燒症狀，返國後進行居家檢疫，經通報採檢後確診。
            `,
    },
    {
        no: '266',
        case: '266',
        date: '3/27',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案266》' +
            '<br>' +
            `
            30多歲男性，曾至英國工作，返國後進行居家檢疫，出現發燒、全身倦怠等症狀，經通報採檢後確診。
            `,
    },
    {
        no: '267',
        case: '267',
        date: '3/27',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案267》' +
            '<br>' +
            `
            50多歲男性，曾至英國工作，與案264同行，返國前已出現咳嗽、流鼻水等症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '268',
        case: '268',
        date: '3/28',
        status: 'case_s1',
        group: 'non',
        info:
            '《案268》' +
            '<br>' +
            `
            50多歲男性，2月28日就出現咳嗽、喉嚨痛、頭痛、發燒、呼吸喘、腹瀉等症狀，期間兩度自行就醫，也曾因病情加重轉往醫院急診。3月26日採檢後確診，感染源待釐清。
            `,
    },
    {
        no: '269',
        case: '269',
        date: '3/28',
        status: 'case_s1',
        group: 'trp_A',
        info:
            '《案269》' +
            '<br>' +
            `
            30多歲男性，近期無出國史，因出現肌肉痠痛、腹瀉、發燒症狀而自行就醫，經過追查是遭到菲律賓回國的案277傳染。
            `,
    },
    {
        no: '270',
        case: '270',
        date: '3/28',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案270》' +
            '<br>' +
            `
            20多歲女性，在英國就學，出現咳嗽有痰、流鼻水症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '271',
        case: '271',
        date: '3/28',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案271》' +
            '<br>' +
            `
            20多歲女性，在英國就學，出現全身無力、咳嗽、喉嚨乾、失去味覺及嗅覺、流鼻水等症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '272',
        case: '272',
        date: '3/28',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案272》' +
            '<br>' +
            `
            20多歲男性，在英國就學，與案152、222至225等5人同校，出現發燒、咳嗽、失去嗅覺、倦怠、鼻塞、骨頭肌肉痠痛、喉嚨痛症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '273',
        case: '273',
        date: '3/28',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案273》' +
            '<br>' +
            `
            60多歲女性，曾到西班牙旅遊，返國後進行居家檢疫，期間出現失去嗅覺、輕微咳嗽症狀，經通報採檢後確診。
            `,
    },
    {
        no: '274',
        case: '274',
        date: '3/28',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案274》' +
            '<br>' +
            `
            30多歲男性，在國外工作，曾到倫敦與瑞士，返國後進行居家檢疫，期間出現喉嚨癢／痛、咳嗽、失去味覺及嗅覺等症狀，經通報採檢後確診。
            `,
    },
    {
        no: '275',
        case: '275',
        date: '3/28',
        status: 'default',
        group: 'trp_OC',
        info:
            '《案275》' +
            '<br>' +
            `
            40多歲女性，在澳洲工作，返國後出現流鼻水、失去嗅覺、輕微咳嗽等症狀，自行就醫採檢後確診。
            `,
    },
    {
        no: '276',
        case: '276',
        date: '3/28',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案276》' +
            '<br>' +
            `
            10多歲女性，在西班牙就學，與案58、64、80、213同校，返國居家檢疫期間出現鼻塞、流鼻水、失去嗅覺等症狀，經通報採檢後確診。
            `,
    },
    {
        no: '277',
        case: '277',
        date: '3/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案277》' +
            '<br>' +
            `
            20多歲男性，在菲律賓工作，返國後進行居家檢疫，出現喉嚨痛、發燒等症狀，經通報採檢後確診。
            `,
    },
    {
        no: '278',
        case: '278',
        date: '3/28',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案278》' +
            '<br>' +
            `
            50多歲男性，在捷克工作，返國居家檢疫期間出現咳嗽、喉嚨痛等症狀，經通報採檢後確診。
            `,
    },
    {
        no: '279',
        case: '279',
        date: '3/28',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案279》' +
            '<br>' +
            `
            10多歲女性，在美國就學，返國居家檢疫期間出現咳嗽、發燒等症狀，經通報採檢後確診。
            `,
    },
    {
        no: '280',
        case: '280',
        date: '3/28',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案280》' +
            '<br>' +
            `
            20多歲男性，在加拿大就學，出現流鼻水、咳嗽有痰、鼻塞等症狀，入境時於機場被通報，經採檢後確診。
    
            `,
    },
    {
        no: '281',
        case: '281',
        date: '3/28',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案281》' +
            '<br>' +
            `
            10多歲女性，在美國就學，出現發燒、有痰症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '282',
        case: '282',
        date: '3/28',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案282》' +
            '<br>' +
            `
            20多女性，在愛爾蘭就學，出現發燒、鼻塞、咳嗽、失去味覺等症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '283',
        case: '283',
        date: '3/28',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案283》' +
            '<br>' +
            `
            20多歲女性，在美國工作，返國居家檢疫期間出現失去嗅覺與味覺等症狀，經通報採檢後確診。
            `,
    },
    {
        no: '284',
        case: '284',
        date: '3/29',
        status: 'default',
        group: 'trp_A',
        info:
            '《案284》' +
            '<br>' +
            `
            20多歲男性，曾在菲律賓工作，返國後進行居家防疫，期間出現小腿肌肉痠痛、發燒、喉嚨痛、咳嗽有痰等症狀，經通報採檢後確診。
            `,
    },
    {
        no: '285',
        case: '285',
        date: '3/29',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案285》' +
            '<br>' +
            `
            30多歲男性，曾到美國工作，返國後出現腹瀉、肌肉痠痛、咳嗽等症狀，自行就醫採檢後確診。
            `,
    },
    {
        no: '286',
        case: '286',
        date: '3/29',
        status: 'default',
        group: 'trp_A',
        info:
            '《案286》' +
            '<br>' +
            `
            30多歲女性，曾跟團到土耳其旅遊，返國居家檢疫期間出現發燒、咳嗽、全身倦怠無力等症狀，經通報採檢後確診。
            `,
    },
    {
        no: '287',
        case: '287',
        date: '3/29',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案287》' +
            '<br>' +
            `
            30多歲男性，在英國就學，期間出現發燒、疲倦等症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '288',
        case: '288',
        date: '3/29',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案288》' +
            '<br>' +
            `
            20多歲男性，曾到摩洛哥旅遊，與案250同旅行團，返國居家檢疫期間出現咳嗽、發燒等症狀，經通報採檢後確診。
            `,
    },
    {
        no: '289',
        case: '289',
        date: '3/29',
        status: 'case_s1',
        group: 'trp_EU',
        info:
            '《案289》' +
            '<br>' +
            `
            40多歲女性，先生是3月16日從西班牙回國的案293，3月22日出現發燒、鼻炎症狀，自行就醫採檢後確診。
            `,
    },
    {
        no: '290',
        case: '290',
        date: '3/29',
        status: 'default',
        group: 'trp_A',
        info:
            '《案290》' +
            '<br>' +
            `
            50多歲女性，曾到印尼旅遊，返國後出現無嗅覺症狀，自行就醫採檢後確診，與案291為家庭群聚。
            `,
    },
    {
        no: '291',
        case: '291',
        date: '3/29',
        status: 'default',
        group: 'trp_A',
        info:
            '《案291》' +
            '<br>' +
            `
            60多歲男性，曾到印尼旅遊，返國後出現咳嗽、肌肉痠痛、關節痛、全身倦怠等症狀，自行就醫採檢後確診，與案290為家庭群聚。
            `,
    },
    {
        no: '292',
        case: '292',
        date: '3/29',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案292》' +
            '<br>' +
            `
            10多歲女性，在美國工作，返國居家檢疫期間出現咳嗽、頭痛、冒冷汗、發燒等症狀，經通報採檢後確診。
    
            `,
    },
    {
        no: '293',
        case: '293',
        date: '3/29',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案293》' +
            '<br>' +
            `
            40多歲男性，案289的先生，曾跟團到葡萄牙、西班牙旅遊，居家檢疫期間出現咳嗽症狀，經通報採檢後確診。
            `,
    },
    {
        no: '294',
        case: '294',
        date: '3/29',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案294》' +
            '<br>' +
            `
            20多歲女性，在瑞士工作，返國居家檢疫期間出現喉嚨痛、鼻塞等症狀，經通報採檢後確診。
            `,
    },
    {
        no: '295',
        case: '295',
        date: '3/29',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案295》' +
            '<br>' +
            `
            60多歲男性，曾到英國旅遊，返國後進行居家檢疫出現咳嗽、喉嚨痛、發燒等症狀，經通報採檢後確診。
    
            `,
    },
    {
        no: '296',
        case: '296',
        date: '3/29',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案296》' +
            '<br>' +
            `
            20多歲女性，在歐洲就學，曾去過西班牙、突尼西亞、法國，出現發燒、咳嗽、喉嚨痛、腹痛、嘔吐等症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '297',
        case: '297',
        date: '3/29',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案297》' +
            '<br>' +
            `
            10多歲男性，在法國就學，期間出現發燒、咳嗽、喉嚨痛、全身倦怠、肌肉痠痛、流鼻水、鼻塞、頭痛等症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '298',
        case: '298',
        date: '3/29',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案298》' +
            '<br>' +
            `
            30多歲男性，在法國工作，期間出現發燒、全身倦怠、頭痛、結膜充血、流鼻水、鼻塞、胸痛、肌肉痠痛、腹瀉、嗅味覺喪失等症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '299',
        case: '299',
        date: '3/30',
        status: 'case_s1',
        group: 'trp_A',
        info:
            '《案299》' +
            '<br>' +
            `
            未滿10歲男性，為案269本土病例同住家人，3月26日出現發燒症狀，27日由衛生單位安排接觸者採檢確診，為一起家庭群聚。
            `,
    },
    {
        no: '300',
        case: '300',
        date: '3/30',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案300》' +
            '<br>' +
            `
            20多歲女性，與案257、258就讀英國同一所學校，返國前曾與案258密切接觸。3月22日入境時無不適症狀，25日居家隔離期間發病，由衛生單位安排採檢確診。
            `,
    },
    {
        no: '301',
        case: '301',
        date: '3/30',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案301》' +
            '<br>' +
            `
            30多歲男性，2月20日-3月2日至美國旅遊，返國後出現咳嗽症狀至診所就醫，並診斷為感冒，因症狀未改善又二度就醫，後續出現發燒、頭痛、氣喘症狀，再到醫院就醫並收治住院，經檢驗通報後確診。
            `,
    },
    {
        no: '302',
        case: '302',
        date: '3/30',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案302》' +
            '<br>' +
            `
            20多歲男性，與案152、案222至225、案272等六人就讀英國同一所學校，也曾一同聚餐，自3月16日返國至今無疑似症狀，經衛生單位進行接觸者採檢後確診。
            `,
    },
    {
        no: '303',
        case: '303',
        date: '3/30',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案303》' +
            '<br>' +
            `
            50多歲男性，3月7日-3月19日與案182一同至美國自助旅遊，返國後於3月20日出現發燒、嗅覺遲鈍症狀，經衛生單位安排採檢後確診，為一起旅遊群聚。
            `,
    },
    {
        no: '304',
        case: '304',
        date: '3/30',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案304》' +
            '<br>' +
            `
            40多歲女性，3月7日-3月19日與案182一同至美國自助旅遊，3月26日出現流鼻水、微燒、失去嗅覺及味覺，經衛生單位安排採檢後確診，為一起旅遊群聚。
            `,
    },
    {
        no: '305',
        case: '305',
        date: '3/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案305》' +
            '<br>' +
            `
            70多歲女性，2月8日-3月14日赴菲律賓探親，期間曾與案164密切接觸，返國後於3月24日出現喉嚨乾症狀，經採檢後確診。
            `,
    },
    {
        no: '306',
        case: '306',
        date: '3/30',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案306》' +
            '<br>' +
            `
            30多歲男性，3月11日-3月19日跟團到埃及旅遊，返臺居家檢疫期間出現咳嗽、腹瀉、喉嚨痛症狀，經採檢後確診。
            `,
    },
    {
        no: '307',
        case: '307',
        date: '3/31',
        status: 'case_s1',
        group: 'trp_A',
        info:
            '《案307》' +
            '<br>' +
            `
            70多歲男性，近期無出國史，曾與案122（土耳其境外移入）聚餐，3月25日因胸悶、肌肉痠痛等症狀就醫，之後又因發燒分別至診所及醫院就醫，因診斷有肺炎情形收治住院，並採檢通報後確診。
            `,
    },
    {
        no: '308',
        case: '308',
        date: '3/31',
        status: 'default',
        group: 'trp_A',
        info:
            '《案308》' +
            '<br>' +
            `
            40多歲男性，3月1日-3月20日曾赴泰國、菲律賓工作，返臺居家檢疫期間出現胸悶、肌肉痠痛、咳嗽症狀，由衛生單位安排採檢確診。
            `,
    },
    {
        no: '309',
        case: '309',
        date: '3/31',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案309》' +
            '<br>' +
            `
            30多歲女性，長住英國工作，於當地就出現鼻塞、喉嚨不適、頭痛症狀，返臺時於機場主動通報採檢確診。
            `,
    },
    {
        no: '310',
        case: '310',
        date: '3/31',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案310》' +
            '<br>' +
            `
            20多歲女性，長期於英國就學，去年底曾至芬蘭、冰島旅遊，在英國時就有發燒、流鼻涕、咳嗽症狀，返臺時於機場主動通報採檢確診。
            `,
    },
    {
        no: '311',
        case: '311',
        date: '3/31',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案311》' +
            '<br>' +
            `
            30多歲女性，3月1日-3月28日到英國、冰島自助旅遊，於當地出現流鼻水、鼻塞、失去嗅覺症狀，返臺時於機場主動通報採檢確診。
            `,
    },
    {
        no: '312',
        case: '312',
        date: '3/31',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案312》' +
            '<br>' +
            `
            30多歲女性，去年底赴英國工作，於當地出現失去嗅覺、味覺異常、輕微咳嗽、有痰症狀，返臺時於機場主動通報採檢確診。
            `,
    },
    {
        no: '313',
        case: '313',
        date: '3/31',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案313》' +
            '<br>' +
            `
            40多歲女性，長住英國工作，於當地出現倦怠、失去味覺及嗅覺症狀，28日返臺時於機場主動通報採檢確診。
            `,
    },
    {
        no: '314',
        case: '314',
        date: '3/31',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案314》' +
            '<br>' +
            `
            20多歲男性，1月初到美國就學，於當地就出現咳嗽、喉嚨痛、發燒症狀，居家檢疫期間由衛生單位安排採檢確診。
            `,
    },
    {
        no: '315',
        case: '315',
        date: '3/31',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案315》' +
            '<br>' +
            `
            20多歲女性，與案257、案258、案300就讀英國同一所學校，返國前曾與案258、案300接觸。入境時無不適症狀，25日開始咳嗽、失去嗅覺，由衛生單位安排採檢確診。
            `,
    },
    {
        no: '316',
        case: '316',
        date: '3/31',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案316》' +
            '<br>' +
            `
            20多歲男性，2月初赴美國工作，3月16日返臺後自主健康管理，28日出現流鼻水、頭痛、全身無力症狀，就醫後採檢確診。
            `,
    },
    {
        no: '317',
        case: '317',
        date: '3/31',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案317》' +
            '<br>' +
            `
            60多歲男性，於臺美兩地往返居住，3月18日返臺後自主健康管理，26日出現咳嗽、有痰症狀，就醫後採檢確診。
            `,
    },
    {
        no: '318',
        case: '318',
        date: '3/31',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案318》' +
            '<br>' +
            `
            20多歲男性，長期於法國就學，3月17日入境因與案112搭乘同班機返國，因此列為接觸者，3月27日出現發燒、喉嚨痛症狀，由衛生單位安排就醫採檢確診。
            `,
    },
    {
        no: '319',
        case: '319',
        date: '3/31',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案319》' +
            '<br>' +
            `
            30多歲男性，長期在英國工作，於當地就有咳嗽、呼吸道症狀，返臺時於機場主動通報採檢確診。
            `,
    },
    {
        no: '320',
        case: '320',
        date: '3/31',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案320》' +
            '<br>' +
            `
            30多歲女性，2月底赴英國就學，於當地出現咳嗽、流鼻水、喉嚨痛症狀，返臺時於機場主動通報採檢確診。
            `,
    },
    {
        no: '321',
        case: '321',
        date: '3/31',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案321》' +
            '<br>' +
            `
            20多歲男性，2月9日至3月20日至瑞士工作，返國迄今雖無任何不適症狀，但由於同行者中已有1人（案294）確診，為求慎重，經衛生單位安排案至醫院採檢確診。
            `,
    },
    {
        no: '322',
        case: '322',
        date: '3/31',
        status: 'case_s1',
        group: 'trp_A',
        info:
            '《案322》' +
            '<br>' +
            `
            20多歲男性，近期沒有無出國史。3月26日出現發燒、咳嗽、嘔吐及全身倦怠等症狀至診所就醫，因症狀持續，於3月29日至醫院就醫，診斷有肺炎情形收治住院，30日由醫院採檢通報後確診。
            `,
    },
    {
        no: '323',
        case: '323',
        date: '4/1',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案323》' +
            '<br>' +
            `
            20多歲男性，1月初赴英國就學，3月19日返臺居家檢疫期間，出現喉嚨痛、癢症狀，經安排就醫後確診。
            `,
    },
    {
        no: '324',
        case: '324',
        date: '4/1',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案324》' +
            '<br>' +
            `
            20多歲女性，去年赴美國就學，3月25日返臺居家檢疫期間，出現流鼻水、鼻塞及嗅覺不靈敏症狀，經安排就醫後確診。
            `,
    },
    {
        no: '325',
        case: '325',
        date: '4/1',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案325》' +
            '<br>' +
            `
            20多歲女性，2月6日-3月30日與案329、另1名友人，一起至美國自助旅遊，於當地就出現嗅覺喪失情形，返國入境時主動聲明有症狀，由機場檢疫人員採檢通報確診。
            `,
    },
    {
        no: '326',
        case: '326',
        date: '4/1',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案326》' +
            '<br>' +
            `
            30多歲女性，1月初赴美國就學，返臺前便開始發燒，入境時主動通報經採檢確診。
            `,
    },
    {
        no: '327',
        case: '327',
        date: '4/1',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案327》' +
            '<br>' +
            `
            30多歲男性，去年就前往美國工作，於當地出現喉嚨痛、鼻塞、肌肉痠痛、發燒症狀，返國入境時主動聲明有症狀，由機場檢疫人員採檢通報確診。
            `,
    },
    {
        no: '328',
        case: '328',
        date: '4/1',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案328》' +
            '<br>' +
            `
            70多歲男性，去年底前往美國探親，於當地便開始發燒，3月30日返臺入境時，在機場主動通報經採檢確診。
            `,
    },
    {
        no: '329',
        case: '329',
        date: '4/1',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案329》' +
            '<br>' +
            `
            20多歲女性，2月6日-3月30日與案325、另1名友人，一起至美國自助旅遊，於當地就出現味覺及嗅覺喪失、有痰症狀，返國入境時主動聲明有症狀，由機場檢疫人員採檢通報確診。
            `,
    },
    {
        no: '330',
        case: '330',
        date: '4/2',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案330》' +
            '<br>' +
            `
            20多歲男性，曾至美國工作，回國後進行居家檢疫，出現咳嗽、喉嚨痛、發燒等症狀，經通報採檢後確診。
            `,
    },
    {
        no: '331',
        case: '331',
        date: '4/2',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案331》' +
            '<br>' +
            `
            60多歲男性，曾與案259同團至至秘魯、智利、阿根廷、玻利維亞、巴西等國旅遊，返國後進行居家隔離，出現全身倦怠、喉嚨乾等症狀，經採檢後確診。
            `,
    },
    {
        no: '332',
        case: '332',
        date: '4/2',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案332》' +
            '<br>' +
            `
            10多歲男性，曾至英國就學，返國前已自覺有發燒、味覺喪失等症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '333',
        case: '333',
        date: '4/2',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案333》' +
            '<br>' +
            `
            60多歲女性，曾與丈夫（案155）至丹麥探親，返國後進行居家隔離，出現喉嚨痛、發燒、肌肉痠痛等症狀，經採檢後確診。
            `,
    },
    {
        no: '334',
        case: '334',
        date: '4/2',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案334》' +
            '<br>' +
            `
            30多歲女性，曾至加拿大就學，並前往美國旅遊，與案182、案303同團，返國後進行居家隔離，出現流鼻水、咳嗽等症狀，經採檢後確診。
            `,
    },
    {
        no: '335',
        case: '335',
        date: '4/2',
        status: 'case_s1',
        group: 'trp_A',
        info:
            '《案335》' +
            '<br>' +
            `
            50多歲男性，近期無出國史，曾與案291有接觸，出現腹瀉、發燒、肺炎症狀，自行就醫後，經通報採檢確診。
            `,
    },
    {
        no: '336',
        case: '336',
        date: '4/2',
        status: 'case_s1',
        group: 'non',
        info:
            '《案336》' +
            '<br>' +
            `
            50多歲女性，近期無出國史，出現發燒、全身倦怠、喉嚨痛、流鼻水等症狀，自行就醫後，經通報採檢確診。
            `,
    },
    {
        no: '337',
        case: '337',
        date: '4/2',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案337》' +
            '<br>' +
            `
            10多歲男性，曾至英國就學，返國後進行居家檢疫，出現腹瀉、喉嚨痛、味覺及嗅覺喪失等症狀，經通報採檢後確診。
            `,
    },
    {
        no: '338',
        case: '338',
        date: '4/2',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案338》' +
            '<br>' +
            `
            60多歲男性，曾至奧地利、捷克旅遊，與案61、案72、案104、案108等奧捷團旅客有接觸，返國後出現腹瀉、咳嗽等症狀，自行就醫後，經通報採檢確診。
            `,
    },
    {
        no: '339',
        case: '339',
        date: '4/2',
        status: 'default',
        group: 'trp_A',
        info:
            '《案339》' +
            '<br>' +
            `
            50多歲男性，曾至印尼工作，返國前已出現發燒、味覺嗅覺喪失等症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '340',
        case: '340',
        date: '4/3',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案340》' +
            '<br>' +
            `
            20多歲男性，曾前往丹麥就學、並在英國旅遊，返國後進行居家檢疫，出現發燒、畏寒、頭暈等症狀，經通報採檢後確診。
            `,
    },
    {
        no: '341',
        case: '341',
        date: '4/3',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案341》' +
            '<br>' +
            `
            60多歲女性，曾前往奧地利、捷克旅遊，與案61、72、104、108、338同團，與案338為夫妻，返國後進行居家隔離，出現腹瀉症狀，經通報採檢後確診。
            `,
    },
    {
        no: '342',
        case: '342',
        date: '4/3',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案342》' +
            '<br>' +
            `
            30多歲女性，曾前往英國工作，返國後進行居家檢疫，出現咳嗽、流鼻水、發燒等症狀，經通報採檢後確診。
            `,
    },
    {
        no: '343',
        case: '343',
        date: '4/3',
        status: 'case_s1',
        group: 'trp_NA',
        info:
            '《案343》' +
            '<br>' +
            `
            60多歲女性，近期無出國史，但其夫3月17日自美國返臺，個案出現咳嗽、流鼻水等症狀，曾多次自行就診，收治住院採檢後確診。
            `,
    },
    {
        no: '344',
        case: '344',
        date: '4/3',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案344》' +
            '<br>' +
            `
            40多歲女性，曾前往美國旅遊，與案182、303、304、334同團，與案182為夫妻，返國後進行居家隔離，出現發燒症狀，經通報採檢後確診。
            `,
    },
    {
        no: '345',
        case: '345',
        date: '4/3',
        status: 'default',
        group: 'trp_A',
        info:
            '《案345》' +
            '<br>' +
            `
            30多歲男性，曾前往泰國工作，返國後進行居家檢疫，出現嗅覺喪失症狀，經通報採檢後確診。
            `,
    },
    {
        no: '346',
        case: '346',
        date: '4/3',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案346》' +
            '<br>' +
            `
            20多歲女性，曾前往美國就學，返國後進行居家檢疫，出現頭痛、關節痛、腹瀉、咳嗽、味覺喪失等症狀，經通報採檢後確診。
            `,
    },
    {
        no: '347',
        case: '347',
        date: '4/3',
        status: 'case_s1',
        group: 'non',
        info:
            '《案347》' +
            '<br>' +
            `
            40多歲女性，近期無出國史，曾接觸案336，出現畏寒、發燒等症狀，自行就醫，經通報採檢後確診。
            `,
    },
    {
        no: '348',
        case: '348',
        date: '4/3',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案348》' +
            '<br>' +
            `
            20多歲女性，曾前往美國就學，返國前已出現嗅覺喪失症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '349',
        case: '349',
        date: '4/4',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案349》' +
            '<br>' +
            `
            20多歲男性，在瑞士就學，返國居家檢疫後出現喉嚨痛、嗅覺異常等症狀，經通報採檢後確診。
            `,
    },
    {
        no: '350',
        case: '350',
        date: '4/4',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案350》' +
            '<br>' +
            `
            30多歲男性，於美國工作，是案197、202同班機接觸者，返國居家隔離後出現輕微腹瀉、輕微胸悶等症狀，經通報採檢後確診。
            `,
    },
    {
        no: '351',
        case: '351',
        date: '4/4',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案351》' +
            '<br>' +
            `
            20多歲女性，於德國就學，返國居家檢疫後出現鼻塞、失去嗅覺等症狀，經通報採檢後確診。
            `,
    },
    {
        no: '352',
        case: '352',
        date: '4/4',
        status: 'case_s1',
        group: 'trp_NA',
        info:
            '《案352》' +
            '<br>' +
            `
            40多歲男性，3月30日出現發燒、味覺及嗅覺喪失等症狀，自行就醫採檢後確診。經追查發現和美國返臺的案301曾一起喝飲料超過一小時，研判遭受感染。
            `,
    },
    {
        no: '353',
        case: '353',
        date: '4/4',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案353》' +
            '<br>' +
            `
            30多歲女性，於英國工作，返國居家檢疫後出現流鼻水、頭痛、全身無力、倦怠、輕微發燒等症狀，經通報採檢後確診。
            `,
    },
    {
        no: '354',
        case: '354',
        date: '4/4',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案354》' +
            '<br>' +
            `
            30多歲女性，長住美國工作，返國前出現腹瀉、全身倦怠、喉嚨痛、流鼻水、咳嗽、發燒、腹瀉等症狀，於機場通報後採檢確診。
            `,
    },
    {
        no: '355',
        case: '355',
        date: '4/4',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案355》' +
            '<br>' +
            `
            60多歲女性，曾到秘魯、智利、阿根廷、玻利維亞、巴西等多國旅遊，是案259、331同團團員，居家隔離後確診，但毫無發病症狀。
            `,
    },
    {
        no: '356',
        case: '356',
        date: '4/5',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案356》' +
            '<br>' +
            `
            60多歲男性，為案343本土個案丈夫，2月23日-3月17日至美國工作，返國至今無不適症狀，經衛生單位進行接觸者採檢後確診，研判為一起家庭群聚事件。
            `,
    },
    {
        no: '357',
        case: '357',
        date: '4/5',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案357》' +
            '<br>' +
            `
            50多歲女性，3月10日-3月22日跟團赴摩洛哥旅遊，該旅遊團先前已有2人確診（案250、288），個案於3月25日出現發燒症狀，由衛生單位安排就醫後採檢確診。
            `,
    },
    {
        no: '358',
        case: '358',
        date: '4/5',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案358》' +
            '<br>' +
            `
            40多歲男性，1月22日-4月2日赴英國探親，於當地出現喉嚨痛、發燒、咳嗽、有痰症狀，返臺入境時於機場採檢確診。
            `,
    },
    {
        no: '359',
        case: '359',
        date: '4/5',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案359》' +
            '<br>' +
            `
            60多歲男性，為奧捷旅遊團團員，返國後於3月16日-3月29日進行居家隔離，迄今均無症狀，但經X光檢查顯示肺部有輕微浸潤，因此為求慎重，衛生單位進行回溯採檢時確診。
            `,
    },
    {
        no: '360',
        case: '360',
        date: '4/5',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案360》' +
            '<br>' +
            `
            60多歲女性，為奧捷旅遊團團員，返國後於3月16日-3月29日進行居家隔離，迄今均無症狀，但經X光檢查顯示肺部有輕微浸潤，因此為求慎重，衛生單位進行回溯採檢時確診。
            `,
    },
    {
        no: '361',
        case: '361',
        date: '4/5',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案361》' +
            '<br>' +
            `
            30多歲女性，3月5日-3月23日赴美國探親，因返國時與案240搭乘同班機，因此列為接觸者，居家隔離期間於4月2日出現發燒、嗅覺遲鈍情形，由衛生單位安排就醫採檢確診。
            `,
    },
    {
        no: '362',
        case: '362',
        date: '4/5',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案362》' +
            '<br>' +
            `
            50多歲男性，2月29日-3月16日赴美國工作，返臺自主健康管理期間出現發燒、味覺及嗅覺異常，就醫採檢後確診。
            `,
    },
    {
        no: '363',
        case: '363',
        date: '4/5',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案363》' +
            '<br>' +
            `
            40多歲女性，為奧捷旅遊團團員，返國後於3月16日-3月29日進行居家隔離，迄今均無症狀，但因該團有多位團員確診，衛生單位為求慎重進行回溯採檢時確診。
            `,
    },
    {
        no: '364',
        case: '364',
        date: '4/6',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案364》' +
            '<br>' +
            `
            30多歲女性，於美國工作時出現咳嗽、呼吸不順、肌肉痠痛、發燒症狀，3月30日入境時主動向機場申報有症狀並採檢，檢驗結果為陰性。居家檢疫期間，因所搭乘班機上有旅客確診（案325、328、329），因此改列為接觸者，個案因持續有不適症狀，再度安排就醫採檢確診。
            `,
    },
    {
        no: '365',
        case: '365',
        date: '4/6',
        status: 'case_s1',
        group: 'trp_NA',
        info:
            '《案365》' +
            '<br>' +
            `
            4歲男性，為案343、案356同住家人，3月25日曾出現發燒症狀，4月2日案343檢驗陽性後，經衛生單位進行接觸者採檢確診。
            `,
    },
    {
        no: '366',
        case: '366',
        date: '4/6',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案366》' +
            '<br>' +
            `
            30多歲女性，先前於英國就學，4月2日與同學校之案367一同返國，居家檢疫期間出現咳嗽、嗅覺喪失症狀，由衛生單位安排就醫採檢確診。
            `,
    },
    {
        no: '367',
        case: '367',
        date: '4/6',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案367》' +
            '<br>' +
            `
            20多歲男性，先前於英國就學，4月2日與同學校之案366一同返國，居家檢疫期間出現咳嗽、全身倦怠、痠痛、腹瀉症狀，由衛生單位安排就醫採檢確診。
            `,
    },
    {
        no: '368',
        case: '368',
        date: '4/6',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案368》' +
            '<br>' +
            `
            20多歲女性，曾至英國就學，返臺前已出現喉嚨痛症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '369',
        case: '369',
        date: '4/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案369》' +
            '<br>' +
            `
            40多歲男性，曾至印尼工作，返國前已出現發燒症狀，入境時於機場被通報，經採檢後確診。
            `,
    },
    {
        no: '370',
        case: '370',
        date: '4/6',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案370》' +
            '<br>' +
            `
            20多歲男性，與案371為家人，先前於美國就學及工作，3月30日入境後返家居家檢疫，因所搭乘班機上有旅客確診（案325、328、329），因此改列為居家隔離之接觸者。個案於4月4日嗅覺喪失，由衛生單位安排就醫採檢確診。
            `,
    },
    {
        no: '371',
        case: '371',
        date: '4/6',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案371》' +
            '<br>' +
            `
            20多歲男性，與案370為家人，先前於美國就學，3月30日入境後返家居家檢疫，因所搭乘班機上有旅客確診（案325、328、329），因此改列為居家隔離之接觸者。個案於4月2日開始喉嚨痛、味覺喪失，由衛生單位安排就醫採檢確診。
            `,
    },
    {
        no: '372',
        case: '372',
        date: '4/6',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案372》' +
            '<br>' +
            `
            30多歲男性，與案373為家人，兩人於3月6日-3月21日一同至英國、冰島自助旅遊，返國後進行居家檢疫期間，出現流鼻水、鼻塞、味覺及嗅覺異常症狀，由衛生單位安排就醫採檢確診。
            `,
    },
    {
        no: '373',
        case: '373',
        date: '4/6',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案373》' +
            '<br>' +
            `
            30多歲女性，與案372為家人，兩人於3月6日-3月21日一同至英國、冰島自助旅遊，返國後進行居家檢疫期間，出現流鼻水、鼻塞、嗅覺喪失症狀，由衛生單位安排就醫採檢確診。
            `,
    },
    {
        no: '374',
        case: '374',
        date: '4/7',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案374》' +
            '<br>' +
            `
            20多歲男性，先前於英國就學，3月29日入境後返家進行居家檢疫，4月4日起出現腹瀉、咳嗽、流鼻水、嗅覺遲鈍等症狀，主動通知衛生單位安排就醫採檢後確診。
            `,
    },
    {
        no: '375',
        case: '375',
        date: '4/7',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案375》' +
            '<br>' +
            `
            20多歲女性，2月25日-3月27日至法國探親，期間曾至英國、荷蘭、比利時旅遊，返國後進行居家檢疫，陸續出現鼻塞、喉嚨不適、失去嗅覺、微喘、發燒、腹瀉等症狀，聯繫衛生單位後就醫採檢後確診。
            `,
    },
    {
        no: '376',
        case: '376',
        date: '4/7',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案376》' +
            '<br>' +
            `
            30多歲女性，與案372為家人，兩人於3月6日-3月21日一同至英國、冰島自助旅遊，返國後進行居家檢疫期間，出現流鼻水、鼻塞、嗅覺喪失症狀，由衛生單位安排就醫採檢確診。
            `,
    },
    {
        no: '377',
        case: '377',
        date: '4/8',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案377》' +
            '<br>' +
            `
            20多歲女性，先前於西班牙就學，3月22日入境後進行居家檢疫期間，出現喉嚨乾痛、腹瀉症狀等症狀，自行服藥，之後地方政府追蹤健康狀況時反應，由衛生單位安排就醫採檢確診。
            `,
    },
    {
        no: '378',
        case: '378',
        date: '4/8',
        status: 'default',
        group: 'trp_A',
        info:
            '《案378》' +
            '<br>' +
            `
            60多歲女性，2月16日-3月29日前往印尼探親，返國進行居家檢疫期間出現呼吸困難、咳嗽、發燒、全身倦怠症狀，就醫後經診斷有肺炎情形 ，收治住院後由醫院採檢通報確診。
            `,
    },
    {
        no: '379',
        case: '379',
        date: '4/8',
        status: 'case_s1',
        group: 'non',
        info:
            '《案379》' +
            '<br>' +
            `
            40多歲女性，近期無出國旅遊史，為案228同住家人，居家隔離時出現發燒、全身倦怠、咳嗽等症狀，通報採檢後確診。
            `,
    },
    {
        no: '380',
        case: '380',
        date: '4/9',
        status: 'case_s1',
        group: 'trp_EU',
        info:
            '《案380》' +
            '<br>' +
            `
            20多歲男性，為案322宿舍同寢室室友，無症狀，於居家隔離期間採檢確診。
            `,
    },
    {
        no: '381',
        case: '381',
        date: '4/10',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案381》' +
            '<br>' +
            `
            20多歲女性，於美國就學，同班機旅客已有10人確診，因此由居家檢疫改列為居家隔離，期間出現流鼻水、鼻塞及嗅覺異常症狀，安排就醫採檢後確診。
            `,
    },
    {
        no: '382',
        case: '382',
        date: '4/10',
        status: 'default',
        group: 'trp_A',
        info:
            '《案382》' +
            '<br>' +
            `
            60多歲男性，為案378丈夫，曾一同至印尼探親，返國後進行居家檢疫，因妻子確診改列為接觸者居家隔離，無症狀，安排採檢後確診。
            `,
    },
    {
        no: '383',
        case: '383',
        date: '4/11',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案383》' +
            '<br>' +
            `
            60多歲男性，長期於美國工作，3月31日出現胃部不適、食慾不佳並自覺發熱，曾於當地就醫，4月10日入境因主動申報有不適症狀，由機場採檢通報確診。
            `,
    },
    {
        no: '384',
        case: '384',
        date: '4/11',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案384》' +
            '<br>' +
            `
            70多歲男性，長期旅居美國，於當地出現咳嗽、有痰症狀，4月10日入境因主動申報有不適症狀，由機場採檢通報確診。
            `,
    },
    {
        no: '385',
        case: '385',
        date: '4/11',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案385》' +
            '<br>' +
            `
            20多歲女性，先前於法國就學，4月3日入境後進行居家檢疫期間，出現流鼻水、鼻塞、發燒症狀，後經由衛生單位安排就醫採檢確診。
            `,
    },
    {
        no: '386',
        case: '386',
        date: '4/12',
        status: 'case_s1',
        group: 'trp_NA',
        info:
            '《案386》' +
            '<br>' +
            `
            20多歲男性，與案195（自美國境外移入）之同住友人，有過敏症狀，於案195確診後列為接觸者，進行居家隔離，安排就醫採檢後確診。
            `,
    },
    {
        no: '387',
        case: '387',
        date: '4/12',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案387》' +
            '<br>' +
            `
            40多歲男性，於2月20日前往美國工作，3月25日出現咳嗽、喉嚨痛等症狀，自行服藥並無就醫，4月10日返國時機場採檢確診。
            `,
    },
    {
        no: '388',
        case: '388',
        date: '4/12',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案388》' +
            '<br>' +
            `
            為案358之妻子，於1月13日一同前往英國探親，4月2日抵臺後，居家檢疫期間出現味覺及嗅覺喪失，於3日就醫採檢確診。
            `,
    },
    {
        no: '389',
        case: '389',
        date: '4/13',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案389》' +
            '<br>' +
            `
            50多歲女性，曾搭乘珊瑚公主號郵輪旅遊，返國前已出現喉嚨癢、咳嗽有痰、腹瀉等症狀，入境時在機場被通報，經採檢後確診。
            `,
    },
    {
        no: '390',
        case: '390',
        date: '4/13',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案390》' +
            '<br>' +
            `
            50多歲男性，曾搭乘珊瑚公主號郵輪旅遊，返國前已出現喉嚨癢症狀，入境時在機場被通報，經採檢後確診。
            `,
    },
    {
        no: '391',
        case: '391',
        date: '4/13',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案391》' +
            '<br>' +
            `
            60多歲女性，曾搭乘珊瑚公主號郵輪旅遊，返國前已出現喉嚨癢、乾咳、腹瀉、肌肉痠痛等症狀，入境時在機場被通報，經採檢後確診。
            `,
    },
    {
        no: '392',
        case: '392',
        date: '4/13',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案388》' +
            '<br>' +
            `
            60多歲男性，曾搭乘珊瑚公主號郵輪旅遊，返國前已出現咳嗽有痰、呼吸微喘、肌肉痠痛等症狀，入境時在機場被通報，經採檢後確診。
            `,
    },
    {
        no: '393',
        case: '393',
        date: '4/13',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案393》' +
            '<br>' +
            `
            60多歲女性，長期居住美國，為384案的家人，返臺前已出現咳嗽有痰、腹瀉症狀，入境時在機場被通報，經採檢後確診。
            `,
    },
    {
        no: '394',
        case: '394',
        date: '4/15',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案394》' +
            '<br>' +
            `
            60多歲女性，於1月22日至美國探親，3月30日返國，4月6日、7日陸續出現全身痠痛、胃痛、嘔吐、胸悶及發燒症狀，分別於8日及10日由衛生單位安排採檢確診。
            `,
    },
    {
        no: '395',
        case: '395',
        date: '4/15',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案395》' +
            '<br>' +
            `
            20多歲女性，於1月23日至美國就學，4月4日出現咳嗽、鼻塞、流鼻水及嗅覺喪失情形，4月13日返國入境時主動申報有前述症狀，由機場採檢通報確診。
            `,
    },
    {
        no: '396',
        case: '396',
        date: '4/18',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案396》' +
            '<br>' +
            `
            20多歲男性，在我國盤石軍艦實習與訓練，4月12日出現頭痛、嗅覺異常情形，4月15日下船後返家後二度就醫，由醫院採檢通報確診。
            `,
    },
    {
        no: '397',
        case: '397',
        date: '4/18',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案397》' +
            '<br>' +
            `
            20多歲男性，在我國盤石軍艦實習與訓練，4月初開始出現上呼吸道腫痛、頭痛、流鼻水、咳嗽、嗅覺異常等症狀，返家後於4月17日就醫並採檢通報確診。
            `,
    },
    {
        no: '398',
        case: '398',
        date: '4/18',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案398》' +
            '<br>' +
            `
            20多歲男性，在我國盤石軍艦實習與訓練，4月13日開始有嗅味覺異常，於4月17日自行前往醫院急診就醫後採檢通報確診。
            `,
    },
    {
        no: '399',
        case: '399',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案399》' +
            '<br>' +
            `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `,
    },
    {
        no: '400',
        case: '400',
        date: '4/19',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案400》' +
            '<br>' +
            `
            20多歲男性，去年4月21日前往美國就學，2020年4月10日發病，17日抵臺時機場採檢確診。
            `,
    },
    {
        no: '401',
        case: '401',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案401》' +
            '<br>' +
            `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `,
    },
    {
        no: '402',
        case: '402',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案402》' +
            '<br>' +
            `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `,
    },
    {
        no: '403',
        case: '403',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案403》' +
            '<br>' +
            `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `,
    },
    {
        no: '404',
        case: '404',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案404》' +
            '<br>' +
            `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `,
    },
    {
        no: '405',
        case: '405',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案405》' +
            '<br>' +
            `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `,
    },
    {
        no: '406',
        case: '406',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案406》' +
            '<br>' +
            `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `,
    },
    {
        no: '407',
        case: '407',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案407》' +
            '<br>' +
            `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `,
    },
    {
        no: '408',
        case: '408',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案408》' +
            '<br>' +
            `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `,
    },
    {
        no: '409',
        case: '409',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案409》' +
            '<br>' +
            `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `,
    },
    {
        no: '410',
        case: '410',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案410》' +
            '<br>' +
            `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `,
    },
    {
        no: '411',
        case: '411',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案411》' +
            '<br>' +
            `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `,
    },
    {
        no: '412',
        case: '412',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案412》' +
            '<br>' +
            `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `,
    },
    {
        no: '413',
        case: '413',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案413》' +
            '<br>' +
            `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `,
    },
    {
        no: '414',
        case: '414',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案414》' +
            '<br>' +
            `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `,
    },
    {
        no: '415',
        case: '415',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案415》' +
            '<br>' +
            `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `,
    },
    {
        no: '416',
        case: '416',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案416》' +
            '<br>' +
            `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `,
    },
    {
        no: '417',
        case: '417',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案417》' +
            '<br>' +
            `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `,
    },
    {
        no: '418',
        case: '418',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案418》' +
            '<br>' +
            `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `,
    },
    {
        no: '419',
        case: '419',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案419》' +
            '<br>' +
            `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `,
    },
    {
        no: '420',
        case: '420',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案420》' +
            '<br>' +
            `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `,
    },
    {
        no: '421',
        case: '421',
        date: '4/20',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案421》' +
            '<br>' +
            `
            20多歲女性，曾赴加拿大就學，回國前已出現咳嗽有痰症狀，返國入境時在機場被通報，經採檢確診。
            `,
    },
    {
        no: '422',
        case: '422',
        date: '4/20',
        status: 'default',
        group: 'trp_m',
        info:
            '《案422》' +
            '<br>' +
            `
            20多歲女性，曾赴美國就學，並前往西班牙旅遊，返國前已出現呼吸困難、喉嚨痛及腹痛等症狀，曾於美國當地就醫，入境時在機場被通報，經採檢確診。
            `,
    },
    {
        no: '423',
        case: '423',
        date: '4/21',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案423》' +
            '<br>' +
            `
            20多歲男性，磐石軍艦實習生，3月30日出現嗅味覺異常，因與案396、案397同艙間，主動通報衛生單位後就醫，一採結果陰性，20日進行二採確診。
            `,
    },
    {
        no: '424',
        case: '424',
        date: '4/21',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案424》' +
            '<br>' +
            `
            30多歲女性，磐石軍艦軍人，4月5日出現頭暈、鼻塞、頭痛及嗅覺異常症狀，航行期間症狀改善，4月18日至集中檢疫所隔離採檢，因一採陰性，20日進行二採確診。
            `,
    },
    {
        no: '425',
        case: '425',
        date: '4/21',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案425》' +
            '<br>' +
            `
            20多歲男性，磐石軍艦軍人，3月23日出現流鼻水、發燒、頭痛症狀，4月18日至集中檢疫所隔離採檢，一採結果陰性，21日進行二採確診。
            `,
    },
    {
        no: '426',
        case: '426',
        date: '4/22',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案426》' +
            '<br>' +
            `
            20多歲男性，曾於磐石鑑實習，3月23日出現發燒、咳嗽、味覺喪失等症狀，4月18日至集中檢疫所隔離採檢，一採結果陰性，後續再出現鼻塞、嗅覺異常狀況，19日二採確診。
            `,
    },
    {
        no: '427',
        case: '427',
        date: '4/23',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案427》' +
            '<br>' +
            `
            20多歲男性，為敦睦艦隊（磐石艦）軍人。4月18日至集中檢疫所隔離採檢，一採結果陰性，4月19日起陸續出現喉嚨痛癢、咳嗽等症狀，21日再次採檢後確診。
            `,
    },
    {
        no: '428',
        case: '428',
        date: '4/24',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案428》' +
            '<br>' +
            `
            30多歲男性，為敦睦艦隊（磐石艦）軍人，4月18日至集中檢疫所隔離採檢，一採結果陰性，4月22日出現嗅覺異常、流鼻水、鼻塞等症狀，23日再次採檢後確診。
            `,
    },
    {
        no: '429',
        case: '429',
        date: '4/25',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案429》' +
            '<br>' +
            `
            20多歲男性，為敦睦艦隊磐石艦實習生，4月18日至集中檢疫所隔離採檢，一採結果陰性，因血中抗體陽性，24日進行二採確診。
            `,
    },
    {
        no: '430',
        case: '430',
        date: '5/2',
        status: 'default',
        group: 'trp_m',
        info:
            '《案430》' +
            '<br>' +
            `
            60多歲女性，自澳洲前往日本，期間出現現發燒、咳嗽、嘔吐症狀，返國入境時主動告知曾有症狀，經採檢後確診。
            `,
    },
    {
        no: '431',
        case: '431',
        date: '5/2',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案431》' +
            '<br>' +
            `
            30多歲女性，與案432為夫婦，於至塞內加爾工作，期間陸續出現全身倦怠及咳嗽等症狀，由機場檢疫人員採檢通報後確診。
            `,
    },
    {
        no: '432',
        case: '432',
        date: '5/2',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案432》' +
            '<br>' +
            `
            40多歲男性，與案431為夫婦，於至塞內加爾工作，期間陸續出現全身倦怠及咳嗽等症狀，由機場檢疫人員採檢通報後確診。
            `,
    },
    {
        no: '433',
        case: '433',
        date: '5/3',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案433》' +
            '<br>' +
            `
            為敦睦艦隊（磐石艦）人員，無症狀，隔離期滿後再次採檢為陽性，送醫治療。
            `,
    },
    {
        no: '434',
        case: '434',
        date: '5/3',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案434》' +
            '<br>' +
            `
            為敦睦艦隊（磐石艦）人員，無症狀，隔離期滿後再次採檢為陽性，送醫治療。
            `,
    },
    {
        no: '435',
        case: '435',
        date: '5/3',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案435》' +
            '<br>' +
            `
            為敦睦艦隊（磐石艦）人員，無症狀，隔離期滿後再次採檢為陽性，送醫治療。
            `,
    },
    {
        no: '436',
        case: '436',
        date: '5/3',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案436》' +
            '<br>' +
            `
            為敦睦艦隊（磐石艦）人員，無症狀，隔離期滿後再次採檢為陽性，送醫治療。
            `,
    },
    {
        no: '437',
        case: '437',
        date: '5/4',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案437》' +
            '<br>' +
            `
            30多歲女性，1月30日至美國就學，4月9日入境時無症狀，居家檢疫期間因同班機旅客確診（案383）列為居家隔離對象。4月15日出現流鼻水症狀，認為是過敏而未通報，隔離期滿後主動聯繫衛生單位，表示有流鼻水、鼻塞症狀，由衛生單位安排就醫採檢確診。
            `,
    },
    {
        no: '438',
        case: '438',
        date: '5/4',
        status: 'case_s3',
        group: 'tw_flt',
        info:
            '《案438》' +
            '<br>' +
            `
            為敦睦艦隊（磐石艦）人員，無症狀，隔離期滿後初次採檢結果呈現弱陽性，隔日再次採檢後確診，個案無症狀。
            `,
    },
    {
        no: '439',
        case: '439',
        date: '5/6',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案439》' +
            '<br>' +
            `
            30多歲女性，2020年1月至英國工作，4月26日返國時因為有鼻塞、倦怠症狀，入境時主動申報，但篩檢結果為陰性。居家檢疫期間持續有流鼻水及鼻塞，且出現味覺異常症狀，由衛生單位協助安排就醫採檢確診。
            `,
    },
    {
        no: '440',
        case: '440',
        date: '5/7',
        status: 'default',
        group: 'trp_A',
        info:
            '《案440》' +
            '<br>' +
            `
            20多歲女性，2020年2月下旬至卡達工作，曾於3月8日出現喉嚨痛、流鼻水與失去味覺等症狀，3月10日於卡達確診並接受治療，4月8日二採陰性後返回宿舍隔離，5月3日返國入境時無症狀，因主動告知，由機場檢疫人員採檢後送至集中檢疫所，並於5月4日檢驗陰性後，搭乘防疫專車返家居家檢疫，當日即出現腹瀉症狀，5月5日由衛生單位安排就醫採檢，於7日確診。
            `,
    },
    {
        no: '441',
        case: '441',
        date: '5/21',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案441》' +
            '<br>' +
            `
            30多歲男性，2020年1月下旬赴墨西哥工作，曾於4月30日-5月1日間出現發燒症狀，5月5日起出現輕微咳嗽，症狀持續至今，5月11日-13日有腹瀉情形，20日返國入境時主動告知有症狀，由機場檢疫人員採檢後確診。
            `,
    },
    {
        no: '442',
        case: '442',
        date: '5/29',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案442》' +
            '<br>' +
            `
            20多歲男性，2020年2月赴俄羅斯就學，個案於5月15日起出現喉嚨痛症狀，16日出現嗅覺喪失及全身倦怠等症狀，26日入境時主動通報，由機場檢疫人員採檢後送至集中檢疫所隔離，檢驗結果雖為陰性，但因個案曾有嗅覺異常情形，於28日進行二採後確診。
            `,
    },
    {
        no: '443',
        case: '443',
        date: '6/1',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案443》' +
            '<br>' +
            `
            50多歲女性，2020年3月至美國出差，個案5月18日出現發燒、流鼻水、咳嗽等症狀，21日出現嗅覺喪失情形，31日返國入境時主動通報，由機場檢疫人員安排採檢後確診。
            `,
    },
    {
        no: '444',
        case: '444',
        date: '6/15',
        status: 'default',
        group: 'trp_A',
        info:
            '《案444》' +
            '<br>' +
            `
            50多歲男性，與案445為夫婦，曾至孟加拉工作，在當地時已出現發燒、咳嗽、喉嚨痛等症狀，並確診住院治療，返國前已在5月28日及6月2日採檢陰性，後來搭機經由馬來西亞返國，入境時主動告知並送集中檢疫所隔離，採檢後確診。
            `,
    },
    {
        no: '445',
        case: '445',
        date: '6/15',
        status: 'default',
        group: 'trp_A',
        info:
            '《案445》' +
            '<br>' +
            `
            40多歲女性，與案445為夫婦，曾至孟加拉工作，在當地出現發燒症狀，後來確診住院治療，返國前於6月2日採檢陰性，後來搭機經由馬來西亞返國，入境時主動告知並送集中檢疫所隔離，採檢後確診。
            `,
    },
    {
        no: '446',
        case: '446',
        date: '6/18',
        status: 'default',
        group: 'trp_A',
        info:
            '《案446》' +
            '<br>' +
            `
            60多歲男性，2020年1月下旬獨自前往孟加拉工作，6月12日自孟加拉搭機至馬來西亞，13日與案444、445等12名台商一同自馬來西亞搭乘專機返臺（座位於案444、445前一排）。
            `,
    },
    {
        no: '447',
        case: '447',
        date: '6/18',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案447》' +
            '<br>' +
            `
            60多歲男性，2020年4月初赴瓜地馬拉從事商務活動，6月1日出現咳嗽、呼吸喘及骨頭酸等症狀，曾在當地就診檢驗兩次皆為陰性反應，6月23日呼吸喘的症狀加劇，6月24日返國入境時主動通報，由機場檢疫人員安排採檢後確診。
            `,
    },
    {
        no: '448',
        case: '448',
        date: '7/2',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案448》' +
            '<br>' +
            `
            50多歲男性，2020年2月初至墨西哥工作，6月17日-22日陸續出現頭痛、咳嗽、四肢無力及發燒症狀，曾於墨西哥當地多次就醫但未採檢經治療後於6月25日症狀緩解。個案7月1日返國入境時主動告知曾有不適症狀，由機場檢疫人員安排採檢後確診。
            `,
    },
    {
        no: '449',
        case: '449',
        date: '7/3',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案449》' +
            '<br>' +
            `
            50多歲男性，因工作長期居住南非，於當地採驗新型冠狀病毒時為陰性，無症狀，但結果出爐同日下午出現發燒、全身無力及喉嚨有異物感等症狀，至當地醫院就醫評估為一般感冒。個案服藥後自覺症狀好轉，當日自南非搭機至杜拜轉機，7月1日晚間入境臺灣時主動告知曾有不適症狀，由機場檢疫人員安排採檢後確診。
            `,
    },
    {
        no: '450',
        case: '450',
        date: '7/10',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案450》' +
            '<br>' +
            `
            20多歲女性，於（109）年7月5日返國，入境時無不適症狀。7月7日居家檢疫期間出現全身倦怠及肌肉痠痛等症狀，7月8日由衛生單位安排就醫採檢確診。
            `,
    },
    {
        no: '451',
        case: '451',
        date: '7/10',
        status: 'default',
        group: 'trp_A',
        info:
            '《案451》' +
            '<br>' +
            `
            50多歲男性，長期於阿曼工（前次自臺灣出境時間為108年11月），2020年7月2日出現發燒症狀，僅自行服用退燒藥，未曾於國外就醫。個案於7月8日自阿曼經杜拜轉機返國，入境時主動告知有不適症狀，當日機場檢疫人員安排採檢後確診。
            `,
    },
    {
        no: '452',
        case: '452',
        date: '7/16',
        status: 'default',
        group: 'trp_A',
        info:
            '《案452》' +
            '<br>' +
            `
            30多歲女性，1月下旬至菲律賓工作，返國前曾接受公司安排之武漢肺炎採檢，檢驗結果為陰性，之後於7月14日下午出現嗅覺異常情形，同日晚間入境時主動告知有疑似症狀，由機場檢疫人員安排採檢後確診。
            `,
    },
    {
        no: '453',
        case: '453',
        date: '7/17',
        status: 'default',
        group: 'trp_A',
        info:
            '《案453》' +
            '<br>' +
            `
            20多歲女性，去年12月下旬至菲律賓工作，7月14日出現倦怠、喉嚨痛、咳嗽有痰及鼻塞等症狀，7月15日返國入境時主動告知有不適症狀，由機場檢疫人員安排採檢後確診。
            `,
    },
    {
        no: '454',
        case: '454',
        date: '7/17',
        status: 'default',
        group: 'trp_A',
        info:
            '《案454》' +
            '<br>' +
            `
            40多歲男性，1月下旬至菲律賓工作，於當地出現發燒、嗅覺異常及伴隨感冒症狀，7月15日返國入境時主動告知有相關症狀，由機場檢疫人員安排採檢後確診。
            `,
    },
    {
        no: '455',
        case: '455',
        date: '7/19',
        status: 'default',
        group: 'trp_A',
        info:
            '《案455》' +
            '<br>' +
            `
            40多歲男性，工作長期居住香港，7月15日開始出現乾咳、喉嚨痛症狀，未就醫，17日入境時主動告知有不適症狀，當日機場檢疫人員安排採檢後確診。
            `,
    },
    {
        no: '456',
        case: '456',
        date: '7/24',
        status: 'default',
        group: 'trp_A',
        info:
            '《案456》' +
            '<br>' +
            `
            曾至菲律賓工作，陸續出現咳嗽、倦怠症狀，於當地就醫。返臺入境時有咳嗽、頭痛等症狀，在機場採檢後送集中檢疫。初次採檢雖結果為陰性但仍咳嗽劇烈，安排送醫後再次採檢確診。
            `,
    },
    {
        no: '457',
        case: '457',
        date: '7/24',
        status: 'default',
        group: 'trp_A',
        info:
            '《案457》' +
            '<br>' +
            `
            曾至菲律賓探親，返臺後進行居家檢疫，出現頭痛、嗅味覺異常、發燒、頭痛等情形，經通報採檢後確診。
            `,
    },
    {
        no: '458',
        case: '458',
        date: '7/24',
        status: 'default',
        group: 'trp_A',
        info:
            '《案458》' +
            '<br>' +
            `
            曾至菲律賓工作，出現發燒、嗅味覺異常、腹瀉等症狀，自行服藥後症狀緩解，在當地採檢結果為陰性。返臺入境時主動告知有症狀，經機場人員安排採檢並集中隔離後確診。
            `,
    },
    {
        no: '459',
        case: '459',
        date: '7/27',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案459》' +
            '<br>' +
            `
            12月至賴索托工作，2020年7月19日出現頭痛症狀，21日出現流鼻水、鼻塞、嗅覺異常及咳嗽等症狀，因當地醫療資源缺乏，僅自行服藥未就醫。個案7月23日自南非搭機至杜拜轉機，7月25日返國入境時因症狀持續，主動通報機場檢疫人員安排檢驗後確診。
            `,
    },
    {
        no: '460',
        case: '460',
        date: '7/27',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案460》' +
            '<br>' +
            `
            案460、461為一對母子，長期居住南非（前次自臺灣出境時間為2020年1月），案460於7月21日起陸續出現流鼻水、喉嚨癢及鼻塞症狀，兩人7月25日經杜拜轉機返國入境時，主動告知有症狀，由機場檢疫人員安排採檢後確診。
            `,
    },
    {
        no: '461',
        case: '461',
        date: '7/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案461》' +
            '<br>' +
            `
            案460、461為一對母子，長期居住南非（前次自臺灣出境時間為2020年1月），案461於7月22日起陸續出現流鼻水、咳嗽等症狀，兩人7月25日經杜拜轉機返國入境時，主動告知有症狀，由機場檢疫人員安排採檢後確診。
            `,
    },
    {
        no: '462',
        case: '462',
        date: '7/27',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案462》' +
            '<br>' +
            `
            案4622020年2月獨自至美國探親，7月20日返國入境時無症狀，搭乘防疫計程車返家居家檢疫，7月24日出現味覺異常及全身無力症狀，26日因呼吸急促、喉嚨及關節痛，聯絡衛生單位安排就醫，經X光檢查診斷有肺炎情形，由醫院採檢通報後確診。
            `,
    },
    {
        no: '463',
        case: '463',
        date: '7/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案463》' +
            '<br>' +
            `
            50多歲男性，2020年3月至菲律賓工作，7月21日起陸續出現發燒、咳嗽、嗅覺異常、腹瀉及全身倦怠等症狀，24日於當地就醫並採檢，但未接獲檢驗報告。26日返國入境時因體溫偏高，由機場檢疫人員安排採檢後確診。
            `,
    },
    {
        no: '464',
        case: '464',
        date: '7/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案464》' +
            '<br>' +
            `
            30多歲男性，2020年1月至香港工作，7月16日曾出現發冷、盜汗症狀，經自行服藥後症狀緩解，23日出現有痰、嗅味覺異常等症狀，26日返國入境時主動告知有症狀，由機場檢疫人員安排採檢後確診。
            `,
    },
    {
        no: '465',
        case: '465',
        date: '7/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案465》' +
            '<br>' +
            `
            30多歲男性，2020年1月至菲律賓工作，6月19日陸續出現嗅味覺異常、咳嗽、喉嚨痛及肌肉酸痛等症狀，當日前往就醫並於醫院進行快篩，結果為陰性。26日返國入境時主動告知曾有症狀，由機場檢疫人員安排採檢後確診。
            `,
    },
    {
        no: '466',
        case: '466',
        date: '7/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案466》' +
            '<br>' +
            `
            70多歲男性，與案467為夫妻，於2020年1月陸續前往菲律賓探親，7月26日入境時無不適症狀，但經機場檢疫人員安排採檢後確診。
            `,
    },
    {
        no: '467',
        case: '467',
        date: '7/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案467》' +
            '<br>' +
            `
            70多歲女性，與案466為夫妻，於7月12日出現發燒、咳嗽及走路喘等症狀，經自行服藥後症狀緩解，26日入境主動告知曾有症狀，由機場檢疫人員安排採檢後確診。
            `,
    },
    {
        no: '468',
        case: '468',
        date: '8/1',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案468》' +
            '<br>' +
            `
            為來臺執行公務之瓜地馬拉籍，有三日內採檢陰性證明，7月26日入境後有輕微喉嚨痛於檢疫旅館進行居家檢疫，30日因喉嚨痛症狀明顯，由衛生單位安排就醫採檢後確診。
            `,
    },
    {
        no: '469',
        case: '469',
        date: '8/1',
        status: 'non',
        group: 'trp_EU',
        info:
            '《案469》' +
            '<br>' +
            `
            為比利時籍20多歲男性，感染源待釐清。5月3日入境來臺工作，7月29日因欲出境返國，至醫院自費採檢後確診。
            `,
    },
    {
        no: '470',
        case: '470',
        date: '8/1',
        status: 'default',
        group: 'trp_A',
        info:
            '《案470》' +
            '<br>' +
            `
            為菲律賓籍船員，7月18日由菲律賓飛至香港，並進行COVID-19檢驗，20日於航程中接獲香港通知檢驗陽性後，即隔離於艙房，30日靠港後由救護車送醫採檢送驗後確診。
            `,
    },
    {
        no: '471',
        case: '471',
        date: '8/1',
        status: 'default',
        group: 'trp_A',
        info:
            '《案471》' +
            '<br>' +
            `
            為本國籍，1月8日出境至菲律賓經商，因有慢性疾病安排返臺就醫，7月10日出現咳嗽、腹瀉，28日入境時機場採檢陰性，因症狀持續且有慢性疾病，至醫院負壓隔離病房治療，經醫院採檢2次後確診。
            `,
    },
    {
        no: '472',
        case: '472',
        date: '8/1',
        status: 'default',
        group: 'trp_A',
        info:
            '《案472》' +
            '<br>' +
            `
            為本國籍，2月22日出境至菲律賓出差，7月28日出現全身倦怠、腹瀉及咳嗽等症狀，30日入境後採檢送驗後確診。
            `,
    },
    {
        no: '473',
        case: '473',
        date: '8/1',
        status: 'default',
        group: 'trp_A',
        info:
            '《案473》' +
            '<br>' +
            `
            為來臺工作之菲律賓籍，7月15日與案453同班機入境，後於集中檢疫所進行居家隔離，27日出現腹瀉症狀，29日通報採檢後確診。
    
            `,
    },
    {
        no: '474',
        case: '474',
        date: '8/1',
        status: 'default',
        group: 'trp_A',
        info:
            '《案474》' +
            '<br>' +
            `
            為本國籍，5月29日出境至菲律賓工作，7月24日入境進行居家檢疫，29日出現發燒、四肢無力、頭痛、鼻塞等症狀，由衛生單位安排採檢送驗後確診。
    
            `,
    },
    {
        no: '475',
        case: '475',
        date: '8/2',
        status: 'default',
        group: 'trp_A',
        info:
            '《案475》' +
            '<br>' +
            `
            20多歲女性，該個案於7月31日自菲律賓來臺探親，入境時無相關症狀，由家人開車送至防疫旅館進行居家檢疫，8月1日出現輕微發燒，經機場採檢後確診。
    
            `,
    },
    {
        no: '476',
        case: '476',
        date: '8/4',
        status: 'default',
        group: 'trp_A',
        info:
            '《案476》' +
            '<br>' +
            `
            50多歲女性，長期居住菲律賓，於7月30日開始發燒，未於菲律賓當地就醫，8月2日返國時填報有發燒症狀，入境量測體溫略（37.7度）且有咳嗽、喉嚨有痰及肌肉痠痛等症狀，於機場接受採檢後送至集中檢疫所，經檢驗於後確診。
    
            `,
    },
    {
        no: '477',
        case: '477',
        date: '8/6',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案477》' +
            '<br>' +
            `
            60多歲男性，長期於南非工作，與案460、案461一同自南非搭車前往機場，7月25日抵臺，入境時無症狀，至防疫旅館進行居家檢疫，因案460、461確診改列為居家隔離對象。8月3日出現腹瀉、肌肉痠痛及全身倦怠等症狀，由衛生單位安排就醫採檢確診。
    
            `,
    },
    {
        no: '478',
        case: '478',
        date: '8/8',
        status: 'default',
        group: 'trp_A',
        info:
            '《案478》' +
            '<br>' +
            `
            與案479皆長期於菲律賓工作，於7月23日出現發燒、全身痠痛及流鼻水等症狀，兩人皆曾自行服藥後症狀緩解，未曾於國外就醫。兩人於8月6日一同自菲律賓搭機返臺，入境時均主動告知曾有疑似症狀，於機場採檢後確診。
    
            `,
    },
    {
        no: '479',
        case: '479',
        date: '8/8',
        status: 'default',
        group: 'trp_A',
        info:
            '《案479》' +
            '<br>' +
            `
            與案478皆長期於菲律賓工作，於7月23日出現發燒、全身痠痛及流鼻水等症狀，兩人皆曾自行服藥後症狀緩解，未曾於國外就醫。兩人於8月6日一同自菲律賓搭機返臺，入境時均主動告知曾有疑似症狀，於機場採檢後確診。
    
            `,
    },
    {
        no: '480',
        case: '480',
        date: '8/9',
        status: 'default',
        group: 'trp_A',
        info:
            '《案480》' +
            '<br>' +
            `
            於7月30日出現咳嗽、流鼻水等症狀，自行服用成藥，未於菲律賓當地就醫，8月4日出現嗅覺異常，7日恢復正常，搭機時全程配戴口罩及隔離衣，未取下口罩用餐飲水，入境時主動通報曾有症狀，於機場接受採檢後確診。
    
            `,
    },
    {
        no: '481',
        case: '481',
        date: '8/12',
        status: 'default',
        group: 'trp_A',
        info:
            '《案481》' +
            '<br>' +
            `
            自菲律賓返國，於7月26日至28日間出現腹瀉症狀，自行服用成藥後症狀緩解，7月底曾出現畏寒情形，8月8日起再次出現畏寒，未於當地就醫。個案入境時主動通報曾有症狀，於機場接受採檢後確診。
    
            `,
    },
    {
        no: '482',
        case: '482',
        date: '8/15',
        status: 'default',
        group: 'trp_A',
        info:
            '《案482》' +
            '<br>' +
            `
            自菲律賓返國，於8月10日出現嗅覺喪失、肌肉痠痛及流鼻水等症狀，曾自行服藥後症狀緩解，未曾於國外就醫，入境時主動告知曾有疑似症狀，於機場採檢後確診。
            `,
    },
    {
        no: '483',
        case: '483',
        date: '8/16',
        status: 'default',
        group: 'trp_O',
        info:
            '《案483》' +
            '<br>' +
            `
            於2020年2月至澳洲工作，8月6日起陸續出現流鼻水、鼻塞及咳嗽等症狀，8月14日自澳洲返臺，入境時主動告知曾有疑似症狀，由機場檢疫人員安排採檢後送至集中檢疫所後確診。
    
            `,
    },
    {
        no: '484',
        case: '484',
        date: '8/16',
        status: 'default',
        group: 'trp_A',
        info:
            '《案484》' +
            '<br>' +
            `
            於2020年2月至菲律賓工作，8月8日出現咳嗽，8月12日發燒、頭痛及咳嗽加劇並味覺喪失，曾自行服藥未就醫，8月13日出現腹瀉，8月14日自菲律賓返臺，於入境時主動告知曾有疑似症狀，機場採檢後送至集中檢疫所隔離，當晚出現發燒、呼吸喘症狀，由衛生局協助安排送醫收治住院後確診。
    
            `,
    },
    {
        no: '485',
        case: '485',
        date: '8/17',
        status: 'default',
        group: 'trp_A',
        info:
            '《案485》' +
            '<br>' +
            `
            為10多歲本國籍少年，長期居住美國，2020年8月5日獨自返臺探親，入境臺灣迄今無疑似症狀，8月15日經地方衛生單位採檢後確診。
    
            `,
    },
    {
        no: '486',
        case: '486',
        date: '8/18',
        status: 'default',
        group: 'trp_A',
        info:
            '《案486》' +
            '<br>' +
            `
            為60多歲本國籍男性，長期於菲律賓工作，與妻子於8月2日出現發燒症狀，經當地採檢結果為陰性，後兩人於8月12日返臺，入境時無症狀，於機場採檢結果為陰性。於8月14日及15日反覆出現發燒情形，15日由檢疫所安排採檢後確診。
    
            `,
    },
    {
        no: '487',
        case: '487',
        date: '8/22',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案487》' +
            '<br>' +
            `
            為20多歲本國籍女性，7月15日出現嘔吐、腹瀉症狀，8月1日個案出現頭痛、喉嚨痛、呼吸時胸痛等情形，8月9日因症狀加劇再次就醫，經診斷疑似新型冠狀病毒感染。個案經公司安排於8月19日返國，入境時主動通報曾有症狀，由機場安排採檢後確診。
    
            `,
    },
    {
        no: '488',
        case: '488',
        date: '8/29',
        status: 'default',
        group: 'trp_A',
        info:
            '《案488》' +
            '<br>' +
            `
            40多歲本國籍男性，8月20日曾出現喉嚨痛症狀，未在菲律賓當地就醫，8月27日返國入境時在機場完成採檢後確診。
    
            `,
    },
    {
        no: '489',
        case: '489',
        date: '9/2',
        status: 'default',
        group: 'trp_A',
        info:
            '《案489》' +
            '<br>' +
            `
            40多歲印尼籍男性船員，入境後直接前往防疫旅館進行14日居家檢疫，8月31日由公司安排專車送至醫院自費採檢，於9月2日確診。
    
            `,
    },
    {
        no: '490',
        case: '490',
        date: '9/4',
        status: 'default',
        group: 'trp_A',
        info:
            '《案490》' +
            '<br>' +
            `
            40多歲女性，在日本工作期間，曾於8月25日出現流鼻水症狀，9月1日返國入境時無症狀，因主動聲明曾有不適症狀，由機場安排採檢後確診。
    
            `,
    },
    {
        no: '491',
        case: '491',
        date: '9/5',
        status: 'default',
        group: 'trp_A',
        info:
            '《案491》' +
            '<br>' +
            `
            案491為移工，9月3日自菲律賓來臺工作，入境時無症狀，於機場完成採檢後確診。
    
            `,
    },
    {
        no: '492',
        case: '492',
        date: '9/5',
        status: 'default',
        group: 'trp_A',
        info:
            '《案492》' +
            '<br>' +
            `
            案492於2020年6月至印尼工作，8月15日至22日間陸續出現打噴嚏、流鼻水、發燒及嗅味覺異常等症狀，9月4日自印尼返國入境時主動告知有症狀，由機場安排採檢後確診。
    
            `,
    },
    {
        no: '493',
        case: '493',
        date: '9/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案493》' +
            '<br>' +
            `
            40多歲本國籍男性，長期居住於菲律賓經商，個案於9月1日在菲律賓當地出現發燒、喉嚨痛、咳嗽、呼吸急促、胸悶及肌肉痠痛等症狀，未自行服藥也未就醫，9月3日登機前主動告知航空公司身體不適，經醫師評估再次採檢後確診。
    
            `,
    },
    {
        no: '494',
        case: '494',
        date: '9/7',
        status: 'default',
        group: 'trp_A',
        info:
            '《案494》' +
            '<br>' +
            `
            20多歲本國籍男性，9月3日自尼泊爾與友人返國入境時無症狀，9月5日出現發燒、流鼻水、頭痛、肌肉痠痛及腹瀉等症狀，經通報衛生單位後安排就醫及採檢後確診。
    
            `,
    },
    {
        no: '495',
        case: '495',
        date: '9/8',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案495》' +
            '<br>' +
            `
            20多歲本國籍女性，於8月30日出現頭痛、肌肉痠痛等症狀，曾於法國當地就醫並診斷為流感，經服藥後症狀改善。9月6日返國入境時，因流鼻水症狀，主動向機場檢疫人員通報，經安排採檢後確診。
    
            `,
    },
    {
        no: '496',
        case: '496',
        date: '9/10',
        status: 'default',
        group: 'trp_A',
        info:
            '《案496》' +
            '<br>' +
            `
            本國籍60多歲男性，2020年2月至印尼工作，與案492搭乘同班機。9月4日入境時無不適症狀，9月7日晚間出現發燒及流鼻水情形，8日通報衛生單位協助安排就醫，經採檢後確診。
    
            `,
    },
    {
        no: '497',
        case: '497',
        date: '9/11',
        status: 'default',
        group: 'trp_A',
        info:
            '《案497》' +
            '<br>' +
            `
            30多歲女性，與家人於8月29日自菲律賓經香港轉機來臺探親，8月30日入境臺灣時無症狀，9月10日因需緊急生產，待產前再次採檢後確診。
    
            `,
    },
    {
        no: '498',
        case: '498',
        date: '9/11',
        status: 'default',
        group: 'trp_A',
        info:
            '《案498》' +
            '<br>' +
            `
            本國籍60多歲男性，2020年1月至菲律賓工作，7月14日出現發燒、乾咳及背痛症狀，於菲律賓當地就醫及採檢結果為陽性，8月8日出院迄今無不適症狀，9月9日自菲律賓返國，入境時採檢後確診。
    
            `,
    },
    {
        no: '499',
        case: '499',
        date: '9/14',
        status: 'default',
        group: 'trp_A',
        info:
            '《案499》' +
            '<br>' +
            `
            菲律賓籍20多歲女性，因工作於9月10日自菲律賓來臺，入境時無症狀，由機場檢疫人員安排採檢後確診。
    
            `,
    },
    {
        no: '500',
        case: '500',
        date: '9/16',
        status: 'default',
        group: 'trp_A',
        info:
            '《案500》' +
            '<br>' +
            `
            菲律賓籍30多歲女性，因工作於2020年9月13日抵達臺灣，入境時無症狀，由機場檢疫人員安排採檢後確診。
    
            `,
    },
    {
        no: '501',
        case: '501',
        date: '9/17',
        status: 'default',
        group: 'trp_A',
        info:
            '《案501》' +
            '<br>' +
            `
            本國籍40多歲女性，2020年2月至緬甸工作，9月13日返國入境時無症狀，個案自述在當地曾與確診個案同桌用餐超過2小時，故由機場檢疫人員安排採檢後確診。
    
            `,
    },
    {
        no: '502',
        case: '502',
        date: '9/17',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案502》' +
            '<br>' +
            `
            本國籍20多歲女性，2019年2月至英國工作，9月6日入境時無不適症狀，入境後前往防疫旅館居家檢疫，個案9月10日曾有輕微喉嚨痛，15日出現腹瀉、腹痛、喉嚨痛、流鼻水及鼻塞等症狀，經通報衛生單位後安排就醫及採檢後確診。
    
            `,
    },
    {
        no: '503',
        case: '503',
        date: '9/17',
        status: 'default',
        group: 'trp_A',
        info:
            '《案503》' +
            '<br>' +
            `
            本國籍30多歲男性，2020年3月至菲律賓工作，9月10日陸續出現鼻塞、流鼻水、喉嚨乾癢、咳嗽、嗅覺變差及胸悶等症狀，僅自行服用成藥，未在當地就醫，9月13日與案500搭乘同班機（非案500座位前後二排旅客）返國，入境時主動告知有症狀，初次採檢結果為陰性，因個案症狀持續，16日由檢疫所安排就醫採檢後確診。
    
            `,
    },
    {
        no: '504',
        case: '504',
        date: '9/19',
        status: 'default',
        group: 'trp_A',
        info:
            '《案504》' +
            '<br>' +
            `
            菲律賓籍20多歲男性，因工作於2020年9月17日來臺，入境時無症狀，於機場完成採檢後前往集中檢疫所檢疫，9月18日出現喉嚨有痰情形，於9月19日確診。
    
            `,
    },
    {
        no: '505',
        case: '505',
        date: '9/19',
        status: 'default',
        group: 'trp_A',
        info:
            '《案505》' +
            '<br>' +
            `
            本國籍30多歲男性，2020年2月至緬甸經商，9月17日返國，入境時無不適症狀，且主動告知在緬甸當地曾與確診個案一起用餐，由機場檢疫人員安排採檢後確診。
    
            `,
    },
    {
        no: '506',
        case: '506',
        date: '9/19',
        status: 'default',
        group: 'trp_A',
        info:
            '《案506》' +
            '<br>' +
            `
            本國籍50多歲女性，長期旅居日本，2020年8月28日至30日出現喉嚨痛症狀，9月11日返臺奔喪，入境時因有咳嗽症狀，於機場進行採檢，檢驗結果為陰性；9月18日個案已無症狀，因申請外出奔喪，由衛生單位安排自費採檢後確診。
    
            `,
    },
    {
        no: '507',
        case: '507',
        date: '9/20',
        status: 'default',
        group: 'trp_A',
        info:
            '《案507》' +
            '<br>' +
            `
            菲律賓籍30多歲女性，9月18日入境時無症狀，由機場檢疫人員安排採檢後確診。
    
            `,
    },
    {
        no: '508',
        case: '508',
        date: '9/21',
        status: 'default',
        group: 'trp_A',
        info:
            '《案508》' +
            '<br>' +
            `
            20多歲男性，2020年6月至印尼工作，9月17日出現發燒、嗅覺異常症狀，未在當地就醫，9月19日返國入境時有發燒情形，並主動告知有症狀，由機場檢疫人員安排採檢後確診。
    
            `,
    },
    {
        no: '509',
        case: '509',
        date: '9/21',
        status: 'default',
        group: 'trp_A',
        info:
            '《案509》' +
            '<br>' +
            `
            30多歲男性，2019年4月赴緬甸經商，與案505同班機前一排座位旅客，2020年9月17日入境時無症狀，入境後前往防疫旅館進行居家檢疫。9月17日晚間出現咳嗽症狀，18日因咳嗽、發燒及味覺異常主動聯繫衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '510',
        case: '510',
        date: '9/25',
        status: 'default',
        group: 'trp_A',
        info:
            '《案510》' +
            '<br>' +
            `
            菲律賓籍30多歲男性，入境時無症狀，於機場採檢結果為陰性，個案9月21日、22日曾出現腹瀉情形，因自認吃壞肚子故未通報，9月24日集中檢疫期滿前進行採檢後確診。
    
            `,
    },
    {
        no: '511',
        case: '511',
        date: '9/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案511》' +
            '<br>' +
            `
            菲律賓籍20多歲男性，因工作於9月11日自菲律賓搭機來臺，機場檢驗結果為陰性，入境迄今無疑似症狀，集中檢疫期滿再次採檢後確診。
    
            `,
    },
    {
        no: '512',
        case: '512',
        date: '9/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案512》' +
            '<br>' +
            `
            菲律賓籍40多歲男性，因工作於9月23日自菲律賓搭機來臺，入境迄今無疑似症狀，由於機場採檢結果為弱陽性，於9月26日再次採檢後確診。
    
            `,
    },
    {
        no: '513',
        case: '513',
        date: '9/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案513》' +
            '<br>' +
            `
            本國籍40多歲男性，7月下旬前往印尼工作，9月19日因出現倦怠、腹瀉、腹痛症狀，於當地就醫並診斷為胃潰瘍；個案9月26日獨自搭機返臺，入境時主動告知曾有症狀，由機場檢疫人員安排採檢後確診。
    
            `,
    },
    {
        no: '514',
        case: '514',
        date: '9/30',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案514》' +
            '<br>' +
            `
            50多歲法國籍男性製造業技師，持有登機前3日內檢驗陰性報告，入境迄今無疑似症狀，於2020年9月11日入境後，直接前往防疫旅館進行居家檢疫，居家檢疫期滿後至9月26日於飯店進行自主健康管理，9月28日由公司安排自費檢驗後確診。
    
            `,
    },
    {
        no: '515',
        case: '515',
        date: '10/1',
        status: 'default',
        group: 'trp_A',
        info:
            '《案515》' +
            '<br>' +
            `
            本國籍40多歲男性，與家人長期居住印尼，9月29日登機前無不適症狀，個案因途中出現喉嚨痛及輕微咳嗽症狀，且其父親9月25日於當地確診，故入境時主動告知檢疫人員，採檢後確診。
    
            `,
    },
    {
        no: '516',
        case: '516',
        date: '10/2',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案516》' +
            '<br>' +
            `
            本國籍30多歲男性，長年於美國工作，9月20日返國探親，入境時無不適症狀，8月28日出現發燒、嗅覺消失及乾咳等症狀，9月24日至30日出現乾咳症狀，由衛生單位協助安排送醫採檢後確診。
    
            `,
    },
    {
        no: '517',
        case: '517',
        date: '10/2',
        status: 'default',
        group: 'trp_A',
        info:
            '《案517》' +
            '<br>' +
            `
            本國籍40多歲男性，於2020年1月赴日本工作，9月15日至22日間陸續出現輕微腹瀉、肌肉痠痛、鼻塞、發燒、咳嗽及嗅覺異常等症狀，9月30日返國入境時主動告知有症狀，由機場安排採檢後確診。
    
            `,
    },
    {
        no: '518',
        case: '518',
        date: '10/5',
        status: 'default',
        group: 'trp_A',
        info:
            '《案518》' +
            '<br>' +
            `
            本國籍30多歲女性，曾於6月19日至27日間陸續出現發燒、嗅覺喪失、腹瀉等症狀，於當地就醫及檢出武漢肺炎陽性，並於7月下旬進行兩次採檢，結果皆為陰性。9月18日自菲律賓返臺，入境迄今無不適症狀，因擔心自身健康，前往醫院自費採檢，因檢出弱陽性（Ct值33）。
    
            `,
    },
    {
        no: '519',
        case: '519',
        date: '10/6',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案519》' +
            '<br>' +
            `
            30多歲男性，長期在美國工作，約2至3個月返臺一次，在美國期間無不適症狀，10月4日返臺，入境時主動告知搭機時出現喉嚨癢症狀，由機場檢疫人員協助採檢後確診。
    
            `,
    },
    {
        no: '520',
        case: '520',
        date: '10/6',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案520》' +
            '<br>' +
            `
            20多歲女性，9月中旬前往法國處理私人事務，9月27日至30日陸續出現發燒、頭痛、流鼻水、鼻塞及嗅覺異常症狀，未於法國當地就醫；10月4日返國，入境時主動告知檢疫人員有流鼻水、鼻塞症狀，於機場進行採檢後確診。
    
            `,
    },
    {
        no: '521',
        case: '521',
        date: '10/6',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案521》' +
            '<br>' +
            `
            30多歲男性，長期於美國工作，2020年10月3日起陸續出現腹瀉、喉嚨腫情形，10月4日返臺，入境時主動告知檢疫人員有腹瀉情形，於機場進行採檢後確診。
    
            `,
    },
    {
        no: '522',
        case: '522',
        date: '10/7',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案522》' +
            '<br>' +
            `
            本國籍20多歲女性，於2019年10月前往愛爾蘭工作，2020年10月4日入境時無疑似症狀，直接返家進行居家檢疫，10月5日出現發燒及全身肌肉痠痛等不適症狀，經衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '523',
        case: '523',
        date: '10/7',
        status: 'default',
        group: 'trp_A',
        info:
            '《案523》' +
            '<br>' +
            `
            印度籍30多歲男性，因工作來臺，持有登機前3日內檢驗陰性報告，入境迄今無疑似症狀，9月9日入境後前往防疫旅館進行居家檢疫（9月9日至9月23日），9月24日至30日於飯店進行自主健康管理，10月5日因工作需求自費檢驗後確診。
    
            `,
    },
    {
        no: '524',
        case: '524',
        date: '10/8',
        status: 'default',
        group: 'trp_A',
        info:
            '《案524》' +
            '<br>' +
            `
            菲律賓籍50多歲男性船員，個案入境迄今均無症狀，9月15日入境後進行集中檢疫至9月29日，9月30日檢疫期滿後搭乘專車至飯店，10月5日由公司安排至醫院自費採檢，因檢驗結果呈現弱陽性，10月6日再次採檢後確診。
    
            `,
    },
    {
        no: '525',
        case: '525',
        date: '10/9',
        status: 'default',
        group: 'trp_A',
        info:
            '《案525》' +
            '<br>' +
            `
            菲律賓籍20多歲男性，9月24日自菲律賓首次搭機來臺，入境時無症狀，10月7日集中檢疫期滿前進行採檢後確診。
    
            `,
    },
    {
        no: '526',
        case: '526',
        date: '10/9',
        status: 'default',
        group: 'trp_A',
        info:
            '《案526》' +
            '<br>' +
            `
            菲律賓籍30多歲女性，9月24日自菲律賓入境，入境時無症狀，10月7日集中檢疫期滿前採檢為弱陽性，10月8日再次採檢後確診。
    
            `,
    },
    {
        no: '527',
        case: '527',
        date: '10/9',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案527》' +
            '<br>' +
            `
            烏克蘭籍30多歲男性，因工作於9月22日自烏克蘭入境，於10月7日居家檢疫期滿解除後，由公司安排自費採檢後確診。
    
            `,
    },
    {
        no: '528',
        case: '528',
        date: '10/12',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案528》' +
            '<br>' +
            `
            本國籍20多歲女性，2020年1月至法國留學，10月4日與1名友人一同返國，入境時無症狀，兩人一同返家進行居家檢疫。個案10月7日起出現流鼻水、喉嚨癢等症狀，10月9日由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '529',
        case: '529',
        date: '10/12',
        status: 'default',
        group: 'trp_A',
        info:
            '《案529》' +
            '<br>' +
            `
            本國籍20多歲女性，期於杜拜及其他國家工作，9月30日回國休假，入境時無症狀，居家檢疫期間，於10月10日出現味覺異常症狀，由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '530',
        case: '530',
        date: '10/13',
        status: 'default',
        group: 'trp_A',
        info:
            '《案530》' +
            '<br>' +
            `
            病例移除。
    
            `,
        // 本國籍40多歲男性，2020年2月至中國江蘇工作，返臺前於10月1日出現流鼻水及有痰等症狀，僅自行買藥服用，未在當地就醫，10月11日返臺因入境時有咳嗽、流鼻水及鼻塞等症狀，於機場由衛生單位安排就醫採檢後確診。
    },
    {
        no: '531',
        case: '531',
        date: '10/15',
        status: 'default',
        group: 'trp_A',
        info:
            '《案531》' +
            '<br>' +
            `
            菲律賓籍30多歲男性移工，搭機前3日內之檢驗、9月17日入境機場採檢以及10月1日集中檢疫期滿前採檢之結果皆為陰性，10月2日檢疫期滿後搭乘專車至旅館自主健康管理，10月12日由仲介安排專車至醫院自費採檢，因檢驗結果呈現弱陽性，個案同日收治住院隔離，為求慎重，10月13日再次採驗，並於10月15日確診。
    
            `,
    },
    {
        no: '532',
        case: '532',
        date: '10/16',
        status: 'default',
        group: 'trp_A',
        info:
            '《案532》' +
            '<br>' +
            `
            案532，與案533、534、535皆為印尼籍學生，介於10-20歲，個案入境迄今均無疑似症狀，9月30日入境後即由校方分別安排至國內4家防疫旅館居家檢疫，10月15日檢疫期滿由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '533',
        case: '533',
        date: '10/16',
        status: 'default',
        group: 'trp_A',
        info:
            '《案533》' +
            '<br>' +
            `
            案533，與案532、534、535皆為印尼籍學生，介於10-20歲，個案入境迄今均無疑似症狀，9月30日入境後即由校方分別安排至國內4家防疫旅館居家檢疫，10月15日檢疫期滿由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '534',
        case: '534',
        date: '10/16',
        status: 'default',
        group: 'trp_A',
        info:
            '《案534》' +
            '<br>' +
            `
            案534，與案532、533、535皆為印尼籍學生，介於10-20歲，個案入境迄今均無疑似症狀，9月30日入境後即由校方分別安排至國內4家防疫旅館居家檢疫，10月15日檢疫期滿由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '535',
        case: '535',
        date: '10/16',
        status: 'default',
        group: 'trp_A',
        info:
            '《案535》' +
            '<br>' +
            `
            案535，與案532、533、534皆為印尼籍學生，介於10-20歲，個案入境迄今均無疑似症狀，9月30日入境後即由校方分別安排至國內4家防疫旅館居家檢疫，10月15日檢疫期滿由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '536',
        case: '536',
        date: '10/19',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案536》' +
            '<br>' +
            `
            案536為本國籍20多歲男性，長期於法國工作，10月11日返國入境時，主動告知10月9日有喉嚨痛症狀，於機場採檢結果為陰性；居家檢疫期間，於10月12日至13日陸續出現咳嗽、腹瀉、全身倦怠及呼吸困難，且症狀持續，10月16日由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '537',
        case: '537',
        date: '10/19',
        status: 'default',
        group: 'trp_A',
        info:
            '《案537》' +
            '<br>' +
            `
            案537為本國籍40多歲男性，長期於菲律賓工作，約1至2個月返臺一次，本次因休假於10月4日返臺，入境迄今無症狀，10月17日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '538',
        case: '538',
        date: '10/19',
        status: 'default',
        group: 'trp_A',
        info:
            '《案538》' +
            '<br>' +
            `
            案538為菲律賓籍30多歲男性，因工作於10月4日入境臺灣，入境迄今無症狀，10月17日由衛生單位安排進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '539',
        case: '539',
        date: '10/19',
        status: 'default',
        group: 'trp_A',
        info:
            '《案539》' +
            '<br>' +
            `
            案539為印尼籍10多歲女性，因就學於10月3日入境臺灣，入境迄今無症狀，10月18日由校方安排至醫院進行檢疫期滿採檢後確診。
    
            `,
    },
    {
        no: '540',
        case: '540',
        date: '10/19',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案540》' +
            '<br>' +
            `
            案540為俄羅斯籍10多歲女性，因就學於10月9日入境臺灣，10月7日曾於國外自費檢驗結果為陰性。個案居家檢疫期間，於10月16日出現味覺喪失情形，17日由衛生單位安排採檢後確診。
    
            `,
    },
    {
        no: '541',
        case: '541',
        date: '10/19',
        status: 'default',
        group: 'trp_A',
        info:
            '《案541》' +
            '<br>' +
            `
            菲律賓籍20多歲女性，案541、542因工作於2020年10月5日搭乘同班機入境臺灣，入境後至集中檢疫所檢疫，迄今無疑似症狀，10月18日檢疫期滿前進行採後確診。
    
            `,
    },
    {
        no: '542',
        case: '542',
        date: '10/19',
        status: 'default',
        group: 'trp_A',
        info:
            '《案542》' +
            '<br>' +
            `
            菲律賓籍20多歲男性，案541、542因工作於2020年10月5日搭乘同班機入境臺灣，入境後至集中檢疫所檢疫，迄今無疑似症狀，10月18日檢疫期滿前進行採後確診。
    
            `,
    },
    {
        no: '543',
        case: '543',
        date: '10/19',
        status: 'default',
        group: 'trp_A',
        info:
            '《案543》' +
            '<br>' +
            `
            案543為本國籍50多歲男性，長期於菲律賓工作，10月5日出現輕微發燒、肌肉痠痛、咳嗽、呼吸困難情形，10月15日於菲律賓當地就醫診斷為肺炎，僅服藥但未住院治療，個案10月18日自菲律賓返臺，入境時主動告知有呼吸道症狀，於機場採檢後確診。
    
            `,
    },
    {
        no: '544',
        case: '544',
        date: '10/21',
        status: 'default',
        group: 'trp_A',
        info:
            '《案544》' +
            '<br>' +
            `
            10多歲印尼籍男性，個案入境時無疑似症狀且檢附3日內檢驗抗體陰性報告，個案於居家檢疫期間均回覆無疑似症狀，惟後續經疫調了解，個案曾於10月8日至10月9日出現咳嗽、喉嚨痛症狀，10月10日後症狀緩解。個案於10月20日居家檢疫期滿，由校方安排專車至醫院自費採檢後確診。
    
            `,
    },
    {
        no: '545',
        case: '545',
        date: '10/22',
        status: 'default',
        group: 'trp_A',
        info:
            '《案545》' +
            '<br>' +
            `
            案545為印尼籍30多歲女性，因工作於10月14日入境臺灣，搭機前3日內檢驗陰性，入境時無症狀。個案集中檢疫期間，於10月17日出現頭暈、食慾不振、嘔吐及全身倦怠，20日由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '546',
        case: '546',
        date: '10/22',
        status: 'default',
        group: 'trp_A',
        info:
            '《案546》' +
            '<br>' +
            `
            案546為本國籍30多歲男性，2019年12月前往菲律賓工作，2020年10月13日至17日於菲律賓當地出現上半身骨頭刺痛、輕微咳嗽及嗅覺異常情形，但未就醫；10月20日自菲律賓返國，機上全程佩戴口罩、防護衣及面罩，入境時主動告知嗅覺喪失，於機場進行採檢後確診。
    
            `,
    },
    {
        no: '547',
        case: '547',
        date: '10/22',
        status: 'default',
        group: 'trp_A',
        info:
            '《案547》' +
            '<br>' +
            `
            案547為印尼籍30多歲女性，因工作於10月8日入境臺灣，入境迄今無疑似症狀，個案10月21日進行檢疫期滿前採檢，因檢出陽性。
    
            `,
    },
    {
        no: '548',
        case: '548',
        date: '10/22',
        status: 'default',
        group: 'trp_A',
        info:
            '《案548》' +
            '<br>' +
            `
            案548為菲律賓籍30多歲女性，過去2年於土耳其工作，因預定來臺工作，於10月13日入境臺灣，搭機前3日內檢驗陰性，入境時無症狀。個案於防疫旅館居家檢疫期間，10月17日至20日因陸續出現流鼻水、倦怠及嗅味覺異常情形通報衛生單位，經安排就醫採檢後確診。
    
            `,
    },
    {
        no: '549',
        case: '549',
        date: '10/24',
        status: 'default',
        group: 'trp_A',
        info:
            '《案549》' +
            '<br>' +
            `
            案549為20多歲菲律賓籍女性，因工作於2020年9月30日入境臺灣，搭機前3日內檢驗陰性，入境時至集中檢疫期滿均無症狀，10月13日檢疫期滿前採檢結果為陰性，檢疫期滿後由仲介安排至隔離宿舍進行自主健康管理，並於10月22由仲介安排至醫院自費檢驗後確診。
    
            `,
    },
    {
        no: '550',
        case: '550',
        date: '10/24',
        status: 'default',
        group: 'trp_A',
        info:
            '《案550》' +
            '<br>' +
            `
            案550為30多歲本國籍男性，2020年10月2日出境至美國，並於10月18日返國，入境時無不適症狀。個案於10月21日居家檢疫期間出現發燒、咳嗽、肌肉痠痛、關節痛及全身倦怠等症狀，由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '551',
        case: '551',
        date: '10/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案551》' +
            '<br>' +
            `
            印尼籍10多歲女性移工，入境時無症狀且檢附三日內檢驗陰性報告，由仲介安排入住防疫宿舍進行居家檢疫，檢疫期間均無症狀。至10月22日檢疫期滿後於10月26日由仲介安排至醫院自費採檢後確診。
    
            `,
    },
    {
        no: '552',
        case: '552',
        date: '10/29',
        status: 'default',
        group: 'trp_A',
        info:
            '《案552》' +
            '<br>' +
            `
            本國籍30多歲男性，2019年12月至菲律賓工作，2020年10月14日起陸續出現咳嗽、流鼻水、喉嚨痛、腹瀉、全身痠痛及倦怠等症狀。10月25日返國，10月26日因出現咳嗽伴隨胸痛、全身痠痛，由集中檢疫所人員安排就醫採檢後確診。
    
            `,
    },
    {
        no: '553',
        case: '553',
        date: '10/29',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案553》' +
            '<br>' +
            `
            本國籍60多歲女性，長期居住美國，10月15日與友人聚餐（其中2名確診），10月26日返國，27日入境時主動告知曾於美國接觸確診個案且有不適症狀，於機場進行採檢後確診。
    
            `,
    },
    {
        no: '554',
        case: '554',
        date: '10/29',
        status: 'default',
        group: 'trp_A',
        info:
            '《案554》' +
            '<br>' +
            `
            印尼籍20多歲女性，10月15日來臺工作，入境後至集中檢疫所檢疫，迄今無疑似症狀，10月28日檢疫期滿前進行採檢後確診。
    
            `,
    },
    {
        no: '555',
        case: '555',
        date: '10/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案555》' +
            '<br>' +
            `
            菲律賓籍30多歲男性，10月15日來臺工作，2020年9月10日獨自返回菲律賓，曾於13日與確診病患接觸也與確診人員同住，20日因出現咳嗽、呼吸困難等症狀收治住院，於當地採驗結果為陰性。10月15日自菲律賓搭機來臺，入境迄今無症狀，10月29日集中檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '556',
        case: '556',
        date: '10/31',
        status: 'default',
        group: 'trp_A',
        info:
            '《案556》' +
            '<br>' +
            `
            60歲本國籍男性，10月24日出現呼吸困難、咳嗽、發燒等症狀，未曾於印度當地就醫。個案入境時，主動通報有症狀，由機場安排採檢後送至醫院就醫，於昨（30）日確診，目前住院隔離治療中。
    
            `,
    },
    {
        no: '557',
        case: '557',
        date: '11/1',
        status: 'default',
        group: 'trp_A',
        info:
            '《案557》' +
            '<br>' +
            `
            印尼籍10多歲女性，10月7日曾出現嗅覺喪失症狀，未於當地就醫，10月29日入境時主動告知嗅覺喪失，於機場進行採後確診。
    
            `,
    },
    {
        no: '558',
        case: '558',
        date: '11/1',
        status: 'default',
        group: 'trp_A',
        info:
            '《案558》' +
            '<br>' +
            `
            印尼籍30多歲男性移工，10月14日來臺工作，10月10日曾於國外自費檢驗結果為陰性，個案曾於10月14日晚間出現流鼻水症狀，自行服用成藥後症狀緩解。個案10月29日檢疫期滿後，與另2名移工一同由仲介開車送至醫院自費採檢後確診。
    
            `,
    },
    {
        no: '559',
        case: '559',
        date: '11/1',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案559》' +
            '<br>' +
            `
            本國籍50多歲男性，因工作長期居住美國，10月26日出現發燒、肌肉痠痛、關節痛、咳嗽等情形，僅自行服藥未就醫，10月30日自美國返臺入境時主動告知有發燒、咳嗽症狀，於機場採檢後確診。
    
            `,
    },
    {
        no: '560',
        case: '560',
        date: '11/2',
        status: 'default',
        group: 'trp_A',
        info:
            '《案560》' +
            '<br>' +
            `
            印度籍30多歲男性，來臺前曾於10月12日及14日採驗，結果皆為陰性，10月15日與1名同事來臺工作，入境迄今無症狀。個案居家檢疫期滿後，因公司要求，10月31日自費採檢後確診。
    
            `,
    },
    {
        no: '561',
        case: '561',
        date: '11/2',
        status: 'default',
        group: 'trp_A',
        info:
            '《案561》' +
            '<br>' +
            `
            印尼籍30多歲女性，10月18日來臺工作，入境迄今無症狀，10月31日檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '562',
        case: '562',
        date: '11/2',
        status: 'default',
        group: 'trp_A',
        info:
            '《案562》' +
            '<br>' +
            `
            印尼籍30多歲女性，10月10日來臺工作，入境迄今無症狀，10月23日檢疫期滿前採檢結果為陰性。個案10月25日檢疫期滿後，由仲介安排至宿舍進行自主健康管理，因雇主要求，10月30日至醫院自費採檢後確診。
    
            `,
    },
    {
        no: '563',
        case: '563',
        date: '11/2',
        status: 'default',
        group: 'trp_A',
        info:
            '《案563》' +
            '<br>' +
            `
            印尼籍20多歲男性，為昨（1）日公布案558之同行入境移工，登機前3日內檢驗為陰性，個案與另1名同行入境移工因入境前與案558密切接觸，2人皆於10月30日出現咳嗽、喉嚨痛症狀住院隔離並採檢，其中案563檢出陽性確診。
    
            `,
    },
    {
        no: '564',
        case: '564',
        date: '11/2',
        status: 'default',
        group: 'trp_A',
        info:
            '《案564》' +
            '<br>' +
            `
            菲律賓籍20多歲女性，10月19日來臺工作，登機前3日內檢驗為陰性，入境迄今無症狀，11月1日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '565',
        case: '565',
        date: '11/3',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案565》' +
            '<br>' +
            `
            本國籍20多歲男性，2020年8月至法國就學，10月中旬出現喉嚨痛、流鼻水、咳嗽等症狀，10月30日出現嗅覺異常。自述9月20日、10月8日、10月15日及10月19日由學校合作實驗室進行PCR檢驗結果均為陰性。個案11月1日返國，入境時主動通報有相關症狀，經採檢後確診。
    
            `,
    },
    {
        no: '566',
        case: '566',
        date: '11/3',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案566》' +
            '<br>' +
            `
            本國籍20多歲女性，2020年8月至英國就學，10月29日出現鼻塞症狀。個案於11月1日返國，入境時主動通報有相關症狀，採檢後確診。
    
            `,
    },
    {
        no: '567',
        case: '567',
        date: '11/3',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案567》' +
            '<br>' +
            `
            本國籍10多歲男性，2020年10月至德國就學，10月31日曾出現流鼻水症狀。個案於11月1日返國後於自家進行居家檢疫，因肌肉痠痛、頭痛、流鼻水等症狀，通報衛生單位後安排採檢送驗後確診。
    
            `,
    },
    {
        no: '568',
        case: '568',
        date: '11/3',
        status: 'default',
        group: 'trp_A',
        info:
            '《案568》' +
            '<br>' +
            `
            菲律賓籍10多歲女性，10月20日來臺就學，持入境前3日內檢驗結果陰性報告，入境迄今無症狀，11月2日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '569',
        case: '569',
        date: '11/4',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案569》' +
            '<br>' +
            `
            本國籍20多歲女性，2020年9月16日與2名同事至波蘭工作，10月25日一同返臺，入境時無症狀，並於宿舍居家檢疫。個案10月30日至11月2日陸續出現全身倦怠、咳嗽、喉嚨痛、流鼻水、嗅味覺異常等症狀，經衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '570',
        case: '570',
        date: '11/5',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案570》' +
            '<br>' +
            `
            本國籍20多歲女性，2020年9月中旬赴捷克就學，本身有過敏性鼻炎病史，10月10日在捷克曾出現發燒、味覺異常情形，未於當地就醫，約10天後症狀改善。11月2日自荷蘭搭機經曼谷返國，入境時有流鼻水、有痰症狀。個案返國後至防疫旅館進行居家檢疫，11月3日主動通報在捷克期間曾有發燒、味覺異常情形，由衛生單位安排採檢送驗後確診。
    
            `,
    },
    {
        no: '571',
        case: '571',
        date: '11/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案571》' +
            '<br>' +
            `
            與572及573均為印尼籍女性，年齡介於20多歲至40多歲，2020年10月22日搭乘同一班機來臺工作，入境迄今均無症狀，11月4日檢疫期滿前進行採檢後確診。
    
            `,
    },
    {
        no: '572',
        case: '572',
        date: '11/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案572》' +
            '<br>' +
            `
            與571及573均為印尼籍女性，年齡介於20多歲至40多歲，2020年10月22日搭乘同一班機來臺工作，入境迄今均無症狀，11月4日檢疫期滿前進行採檢後確診。
    
            `,
    },
    {
        no: '573',
        case: '573',
        date: '11/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案573》' +
            '<br>' +
            `
            與571及572均為印尼籍女性，年齡介於20多歲至40多歲，2020年10月22日搭乘同一班機來臺工作，入境迄今均無症狀，11月4日檢疫期滿前進行採檢後確診。
    
            `,
    },
    {
        no: '574',
        case: '574',
        date: '11/6',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案574》' +
            '<br>' +
            `
            本國籍20多歲女性，2020年2月至墨西哥工作，曾於當地接觸確診個案，10月30日陸續出現流鼻水、鼻塞、頭暈症狀，11月4日返臺入境時主動告知症狀及接觸史，在機場進行採檢，於集中檢疫所等待結果期間出現嗅味覺異常情形，後續因確診收治住院隔離。
    
            `,
    },
    {
        no: '575',
        case: '575',
        date: '11/8',
        status: 'default',
        group: 'trp_A',
        info:
            '《案575》' +
            '<br>' +
            `
            與案576均為印尼籍女性，年齡介於30多歲至40多歲，2020年10月24日搭乘同一班機來臺工作，11月6日檢疫期滿前進行採檢，皆檢出陽性。
    
            `,
    },
    {
        no: '576',
        case: '576',
        date: '11/8',
        status: 'default',
        group: 'trp_A',
        info:
            '《案576》' +
            '<br>' +
            `
            與案575均為印尼籍女性，年齡介於30多歲至40多歲，2020年10月24日搭乘同一班機來臺工作，11月6日檢疫期滿前進行採檢，皆檢出陽性。
    
            `,
    },
    {
        no: '577',
        case: '577',
        date: '11/8',
        status: 'default',
        group: 'trp_A',
        info:
            '《案577》' +
            '<br>' +
            `
            菲律賓籍20多歲男性，10月16日來臺工作，入境迄今無症狀，10月29日檢疫期滿前採檢結果為陰性。個案於10月31日檢疫期滿後，至防疫旅館進行自主健康管理，並由仲介安排於11月5日至醫院自費採檢後確診。
    
            `,
    },
    {
        no: '578',
        case: '578',
        date: '11/8',
        status: 'default',
        group: 'trp_A',
        info:
            '《案578》' +
            '<br>' +
            `
            菲律賓籍10多歲男性，10月25日來臺就學，入境迄今無症狀，11月7日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '579',
        case: '579',
        date: '11/9',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案579》' +
            '<br>' +
            `
            烏克蘭籍20多歲女子，2020年11月3日來臺工作，搭機前3日內檢驗陰性，入境時無上呼吸道症狀，入境後至防疫旅館進行居家檢疫，11月6日居家檢疫期間主動通報有鼻塞、嗅味覺異常情形，由衛生單位採檢送驗後確診。
    
            `,
    },
    {
        no: '580',
        case: '580',
        date: '11/10',
        status: 'default',
        group: 'trp_A',
        info:
            '《案580》' +
            '<br>' +
            `
            案580、581分別於2020年10月26日及27日自印尼搭機來臺工作，入境迄今均無疑似症狀，2人分別於11月8日及9日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '581',
        case: '581',
        date: '11/10',
        status: 'default',
        group: 'trp_A',
        info:
            '《案581》' +
            '<br>' +
            `
            案580、581分別於2020年10月26日及27日自印尼搭機來臺工作，入境迄今均無疑似症狀，2人分別於11月8日及9日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '582',
        case: '582',
        date: '11/11',
        status: 'default',
        group: 'trp_A',
        info:
            '《案582》' +
            '<br>' +
            `
            案582、584、585均為印尼籍女性，年齡介於20多歲至40多歲，10月28日自印尼搭機來臺工作，入境後分別前往國內3處集中檢疫所檢疫。3人入境迄今均無症狀，11月9日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '583',
        case: '583',
        date: '11/11',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案583》' +
            '<br>' +
            `
            比利時籍30多歲男性，因受邀來臺從事商務活動，10月24日自比利時至荷蘭搭機，於10月25日入境時無症狀，並持有登機前3日內檢驗陰性報告，曾於10月31日出現嗅味覺異常症狀，因症狀緩解未就醫及通報；個案11月9日檢疫期滿後，至其他旅宿進行自主健康管理，11月10日至醫院自費採檢後確診。
    
            `,
    },
    {
        no: '584',
        case: '584',
        date: '11/11',
        status: 'default',
        group: 'trp_A',
        info:
            '《案584》' +
            '<br>' +
            `
            案582、584、585均為印尼籍女性，年齡介於20多歲至40多歲，10月28日自印尼搭機來臺工作，入境後分別前往國內3處集中檢疫所檢疫。3人入境迄今均無症狀，11月9日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '585',
        case: '585',
        date: '11/11',
        status: 'default',
        group: 'trp_A',
        info:
            '《案585》' +
            '<br>' +
            `
            案582、584、585均為印尼籍女性，年齡介於20多歲至40多歲，10月28日自印尼搭機來臺工作，入境後分別前往國內3處集中檢疫所檢疫。3人入境迄今均無症狀，11月9日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '586',
        case: '586',
        date: '11/12',
        status: 'default',
        group: 'trp_A',
        info:
            '《案586》' +
            '<br>' +
            `
            來臺工作之20多歲至30多歲印尼籍女性移工，分別於10月28日及29日自印尼搭機來臺，入境後至集中檢疫所檢疫。其中案590於10月29日至11月11日有輕微發燒症狀，僅自行服藥未向檢疫所人員通報，其餘4人檢疫期間均無症狀。5人分別於11月10日及11日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '587',
        case: '587',
        date: '11/12',
        status: 'default',
        group: 'trp_A',
        info:
            '《案587》' +
            '<br>' +
            `
            來臺工作之20多歲至30多歲印尼籍女性移工，分別於10月28日及29日自印尼搭機來臺，入境後至集中檢疫所檢疫。其中案590於10月29日至11月11日有輕微發燒症狀，僅自行服藥未向檢疫所人員通報，其餘4人檢疫期間均無症狀。5人分別於11月10日及11日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '588',
        case: '588',
        date: '11/12',
        status: 'default',
        group: 'trp_A',
        info:
            '《案588》' +
            '<br>' +
            `
            來臺工作之20多歲至30多歲印尼籍女性移工，分別於10月28日及29日自印尼搭機來臺，入境後至集中檢疫所檢疫。其中案590於10月29日至11月11日有輕微發燒症狀，僅自行服藥未向檢疫所人員通報，其餘4人檢疫期間均無症狀。5人分別於11月10日及11日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '589',
        case: '589',
        date: '11/12',
        status: 'default',
        group: 'trp_A',
        info:
            '《案589》' +
            '<br>' +
            `
            來臺工作之20多歲至30多歲印尼籍女性移工，分別於10月28日及29日自印尼搭機來臺，入境後至集中檢疫所檢疫。其中案590於10月29日至11月11日有輕微發燒症狀，僅自行服藥未向檢疫所人員通報，其餘4人檢疫期間均無症狀。5人分別於11月10日及11日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '590',
        case: '590',
        date: '11/12',
        status: 'default',
        group: 'trp_A',
        info:
            '《案590》' +
            '<br>' +
            `
            來臺工作之20多歲至30多歲印尼籍女性移工，分別於10月28日及29日自印尼搭機來臺，入境後至集中檢疫所檢疫。其中案590於10月29日至11月11日有輕微發燒症狀，僅自行服藥未向檢疫所人員通報，其餘4人檢疫期間均無症狀。5人分別於11月10日及11日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '591',
        case: '591',
        date: '11/13',
        status: 'default',
        group: 'trp_A',
        info:
            '《案591》' +
            '<br>' +
            `
            案591、592、596、597為菲律賓籍移工，分別於2020年10月28日及29日入境後前往集中檢疫所，檢疫期間均無疑似症狀，並於11月11日及12日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '592',
        case: '592',
        date: '11/13',
        status: 'default',
        group: 'trp_A',
        info:
            '《案592》' +
            '<br>' +
            `
            案591、592、596、597為菲律賓籍移工，分別於2020年10月28日及29日入境後前往集中檢疫所，檢疫期間均無疑似症狀，並於11月11日及12日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '593',
        case: '593',
        date: '11/13',
        status: 'default',
        group: 'trp_A',
        info:
            '《案593》' +
            '<br>' +
            `
            50多歲本國籍女性，2020年7月中旬至菲律賓探親，10月29日返臺，入境時無症狀。個案於集中檢疫所檢疫期間，11月3日上午雖曾回報有輕微鼻塞及流鼻水症狀，但同日下午即回報已改善無症狀，經評估後未安排就醫。個案11月11日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '594',
        case: '594',
        date: '11/13',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案594》' +
            '<br>' +
            `
            20多歲本國籍男性，2020年8月中旬前往波蘭就學，11月5日起陸續出現嗅覺異常及喉嚨痛情形，僅自行服藥未在當地就醫。個案11月10日返臺，入境時主動告知有症狀，於機場採檢後確診。
    
            `,
    },
    {
        no: '595',
        case: '595',
        date: '11/13',
        status: 'default',
        group: 'trp_A',
        info:
            '《案595》' +
            '<br>' +
            `
            印尼籍移工，於2020年29日入境後前往集中檢疫所，檢疫期間均無疑似症狀，並於11月11日及12日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '596',
        case: '596',
        date: '11/13',
        status: 'default',
        group: 'trp_A',
        info:
            '《案596》' +
            '<br>' +
            `
            案591、592、596、597為菲律賓籍移工，分別於2020年10月28日及29日入境後前往集中檢疫所，檢疫期間均無疑似症狀，並於11月11日及12日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '597',
        case: '597',
        date: '11/13',
        status: 'default',
        group: 'trp_A',
        info:
            '《案597》' +
            '<br>' +
            `
            案591、592、596、597為菲律賓籍移工，分別於2020年10月28日及29日入境後前往集中檢疫所，檢疫期間均無疑似症狀，並於11月11日及12日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '598',
        case: '598',
        date: '11/13',
        status: 'default',
        group: 'trp_A',
        info:
            '《案598》' +
            '<br>' +
            `
            30多歲本國籍男性，2020年9月上旬至印尼工作，11月11日返臺，入境時主動告知有喉嚨痛症狀，於機場採檢後確診。
    
            `,
    },
    {
        no: '599',
        case: '599',
        date: '11/14',
        status: 'default',
        group: 'trp_A',
        info:
            '《案599》' +
            '<br>' +
            `
            40多歲本國籍女性，2020年2月上旬至菲律賓探親，10月29日返臺，入境迄今無症狀，11月11日進行檢疫期滿前採檢，檢驗結果有微弱訊號，經複驗結果為陰性；為求慎重，又逢實驗室引進新的檢驗試劑，故將個案檢體再以新試劑進行檢驗，結果呈現陽性（Ct值33）。
    
            `,
    },
    {
        no: '600',
        case: '600',
        date: '11/14',
        status: 'default',
        group: 'trp_A',
        info:
            '《案600》' +
            '<br>' +
            `
            30多歲印尼籍女性移工，11月7日來臺工作，入境時無症狀，集中檢疫所檢疫期間，於11月9日出現輕微發燒、嗅覺異常、咳嗽、流鼻水及喉嚨痛等症狀，因症狀持續，11月13日採檢後確診。
    
            `,
    },
    {
        no: '601',
        case: '601',
        date: '11/14',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案601》' +
            '<br>' +
            `
            40多歲克羅埃西亞籍男性，平時即有鼻子過敏情形，2020年7月曾出現症狀，並於克羅埃西亞確診武漢肺炎，隔離14天後症狀緩解，且經複驗陰性故解除隔離。個案本次因受臺灣公司聘請，於10月29日來臺工作，入境時無症狀，並持有登機前3日內陰性報告。個案居家檢疫期間，曾於11月1日出現鼻塞症狀，自認是過敏故未通報；11月13日檢疫期滿，因臺灣公司要求，同日自費採檢後確診。
    
            `,
    },
    {
        no: '602',
        case: '602',
        date: '11/15',
        status: 'default',
        group: 'trp_A',
        info:
            '《案602》' +
            '<br>' +
            `
            40多歲本國籍女性，長期定居日本（前次自臺灣出境日期為2020年2月），11月初陸續出現鼻塞、頭痛、噁心、流鼻水及嗅味覺異常等症狀，自行服藥後症狀緩解，未在當地就醫。11月12日與2名家人一同返臺探親，入境時主動告知有症狀，於機場採檢確診。
    
            `,
    },
    {
        no: '603',
        case: '603',
        date: '11/15',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案603》' +
            '<br>' +
            `
            30多歲本國籍女性，因工作長期居住美國（前次自臺灣出境日期為2020年8月），11月13日與家人一同返國，入境時個案主動告知搭機時自覺出現嗅味覺異常情形，但下機後即恢復，於機場採檢後確診。
    
            `,
    },
    {
        no: '604',
        case: '604',
        date: '11/16',
        status: 'default',
        group: 'trp_A',
        info:
            '《案604》' +
            '<br>' +
            `
            20多歲印尼籍女性，無症狀，11月1日入境後前往集中檢疫所檢疫，11月14日進行檢疫期滿前採檢因檢出陽性。
    
            `,
    },
    {
        no: '605',
        case: '605',
        date: '11/17',
        status: 'default',
        group: 'trp_A',
        info:
            '《案605》' +
            '<br>' +
            `
            30多歲本國籍男性，2020年3月至緬甸工作，9月6日起陸續出現嗜睡、發燒、嗅味覺喪失等症狀，於當地就醫確診武漢肺炎，隔離期間未再採檢，因症狀緩解於9月下旬解除隔離。11月8日返國主動告知曾於緬甸確診，且曾在當地接觸我國案501及案505，故由機場檢疫人員安排採檢，同日個案於檢疫所出現喉嚨癢及輕微咳嗽症狀，後續因機場採檢結果為陰性，轉至防疫旅館居家檢疫；個案11月13日咳嗽症狀加劇，主動回報衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '606',
        case: '606',
        date: '11/17',
        status: 'default',
        group: 'trp_A',
        info:
            '《案606》' +
            '<br>' +
            `
            50多歲本國籍男性，因工作於2020年9月前往印尼，11月9日起陸續出現咳嗽、味覺異常、呼吸不順、發燒、腹瀉及肌肉痠痛等症狀，僅自行服藥未就醫；個案11月15日入境時持有登機前3日內血清抗體檢驗陰性報告，因主動告知曾有症狀，且曾接觸確診個案，於機場進行採檢後確診。
    
            `,
    },
    {
        no: '607',
        case: '607',
        date: '11/18',
        status: 'default',
        group: 'trp_A',
        info:
            '《案607》' +
            '<br>' +
            `
            30多歲印尼籍女性，11月12日來臺工作，入境後搭乘專車前往集中檢疫所，14日出現喉嚨痛及全身痠痛未通知檢疫所，16日因發燒、流鼻水及喉嚨痛經安排就醫採檢後確診。
    
            `,
    },
    {
        no: '608',
        case: '608',
        date: '11/18',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案608》' +
            '<br>' +
            `
            60多歲本國籍男性，長期居住美國（前次自臺灣出境日期為2019年10月），並於11月11日返國，入境時無不適症狀，前往防疫旅館進行居家檢疫；11月12日起陸續出現體溫偏高、肌肉痠痛、頭痛、咳嗽及流鼻水等症狀，16日由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '609',
        case: '609',
        date: '11/19',
        status: 'default',
        group: 'trp_A',
        info:
            '《案609》' +
            '<br>' +
            `
            案609為土耳其籍20多歲女性，外國籍航空公司空服員，11月10日值勤自土耳其來臺之班機，於11月12日出現肌肉痠痛及發燒症狀，隔日航空公司聯繫我國醫療單位至旅館協助診療，並由該醫療單位通知疾管署；個案11月16日依作業流程安排採檢後確診。
    
            `,
    },
    {
        no: '610',
        case: '610',
        date: '11/19',
        status: 'default',
        group: 'trp_A',
        info:
            '《案610》' +
            '<br>' +
            `
            印尼籍20多歲女性，於11月17日來臺工作，入境時因體溫異常於檢疫站攔檢，個案告知檢疫人員於機上出現倦怠、全身痠痛及肚子不適等症狀，於機場採檢後確診。
    
            `,
    },
    {
        no: '611',
        case: '611',
        date: '11/20',
        status: 'default',
        group: 'trp_A',
        info:
            '《案611》' +
            '<br>' +
            `
            印尼籍30多歲女性，於11月5日自印尼來臺工作，入境後至集中檢疫所檢疫，迄今無疑似症狀。2人11月18日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '612',
        case: '612',
        date: '11/20',
        status: 'default',
        group: 'trp_A',
        info:
            '《案612》' +
            '<br>' +
            `
            印尼籍30多歲女性，於11月5日自印尼來臺工作，入境後至集中檢疫所檢疫，迄今無疑似症狀。2人11月18日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '613',
        case: '613',
        date: '11/20',
        status: 'default',
        group: 'trp_A',
        info:
            '《案613》' +
            '<br>' +
            `
            20多歲印尼籍女性，分別於11月7日、8日自印尼來臺工作，入境迄今皆無症狀，11月20日、21日進行期滿前採檢送驗後確診。
    
            `,
    },
    {
        no: '614',
        case: '614',
        date: '11/20',
        status: 'default',
        group: 'trp_A',
        info:
            '《案614》' +
            '<br>' +
            `
            20多歲印尼籍女性，分別於11月7日、8日自印尼來臺工作，入境迄今皆無症狀，11月20日、21日進行期滿前採檢送驗後確診。
    
            `,
    },
    {
        no: '615',
        case: '615',
        date: '11/20',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案615》' +
            '<br>' +
            `
            20多歲本國籍男性，2020年8月中旬赴美國就學，11月6日陸續出現肌肉痠痛、咳嗽、有痰、流鼻水、頭痛及嗅覺異常等疑似症狀，自行服藥未就醫，11月20日入境時主動通報有疑似症狀，於機場採檢後確診。
    
            `,
    },
    {
        no: '616',
        case: '616',
        date: '11/20',
        status: 'default',
        group: 'trp_A',
        info:
            '《案616》' +
            '<br>' +
            `
            30多歲菲律賓籍女性，11月8日自菲律賓來臺工作，入境迄今皆無症狀，11月21日進行期滿前採檢送驗後確診。

            `,
    },
    {
        no: '617',
        case: '617',
        date: '11/20',
        status: 'default',
        group: 'trp_A',
        info:
            '《案617》' +
            '<br>' +
            `
            20多歲印尼籍女性，分別於11月7日、8日自印尼來臺工作，入境迄今皆無症狀，11月20日、21日進行期滿前採檢送驗後確診。
    
            `,
    },
    {
        no: '618',
        case: '618',
        date: '11/20',
        status: 'default',
        group: 'trp_A',
        info:
            '《案618》' +
            '<br>' +
            `
            20多歲印尼籍女性，分別於11月7日、8日自印尼來臺工作，入境迄今皆無症狀，11月20日、21日進行期滿前採檢送驗後確診。
    
            `,
    },
    {
        no: '619',
        case: '619',
        date: '11/25',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案619》' +
            '<br>' +
            `
            本國籍50多歲男性，2020年2月至迦納經商，10月下旬曾接觸確診個案，11月5日當地進行採檢，驗出陽性確診。個案原於自宅隔離，但後續出現呼吸短促、胸悶、發燒等情形，11月11日送至當地醫院治療，因病情加重，期間完成國際緊急醫療專機轉送國人返國就醫申請作業。11月20日個案搭乘國際緊急醫療專機抵臺，入境後即後送就醫，經採檢通報後確診。
    
            `,
    },
    {
        no: '620',
        case: '620',
        date: '11/25',
        status: 'default',
        group: 'trp_A',
        info:
            '《案620》' +
            '<br>' +
            `
            案620、621、622皆為印尼籍女性，年齡介於30多歲至40多歲，於11月10日自印尼來臺工作，入境後至集中檢疫所檢疫，迄今皆無症狀，11月23日進行期滿前採檢送驗後確診。
    
            `,
    },
    {
        no: '621',
        case: '621',
        date: '11/25',
        status: 'default',
        group: 'trp_A',
        info:
            '《案621》' +
            '<br>' +
            `
            案620、621、622皆為印尼籍女性，年齡介於30多歲至40多歲，於11月10日自印尼來臺工作，入境後至集中檢疫所檢疫，迄今皆無症狀，11月23日進行期滿前採檢送驗後確診。
    
            `,
    },
    {
        no: '622',
        case: '622',
        date: '11/25',
        status: 'default',
        group: 'trp_A',
        info:
            '《案622》' +
            '<br>' +
            `
            案620、621、622皆為印尼籍女性，年齡介於30多歲至40多歲，於11月10日自印尼來臺工作，入境後至集中檢疫所檢疫，迄今皆無症狀，11月23日進行期滿前採檢送驗後確診。
    
            `,
    },
    {
        no: '623',
        case: '623',
        date: '11/25',
        status: 'default',
        group: 'trp_A',
        info:
            '《案623》' +
            '<br>' +
            `
            案623、624皆為菲律賓籍，分別為20多歲女性及30多歲男性，於11月10日、11日自菲律賓來臺工作，入境後至集中檢疫所檢疫，迄今皆無症狀，11月23日、24日進行期滿前採檢送驗後確診。
    
            `,
    },
    {
        no: '624',
        case: '624',
        date: '11/25',
        status: 'default',
        group: 'trp_A',
        info:
            '《案624》' +
            '<br>' +
            `
            案623、624皆為菲律賓籍，分別為20多歲女性及30多歲男性，於11月10日、11日自菲律賓來臺工作，入境後至集中檢疫所檢疫，迄今皆無症狀，11月23日、24日進行期滿前採檢送驗後確診。
    
            `,
    },
    {
        no: '625',
        case: '625',
        date: '11/26',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案625》' +
            '<br>' +
            `
            本國籍20多歲男性，2020年8月下旬至美國就學，11月20日出現喉嚨痛、咳嗽等症狀，11月24日返國入境時主動通報有症狀，於機場進行採檢後確診
    
            `,
    },
    {
        no: '626',
        case: '626',
        date: '11/26',
        status: 'default',
        group: 'trp_A',
        info:
            '《案626》' +
            '<br>' +
            `
            印尼籍50多歲女性，因工作不定期來臺（前次自臺灣出境時間為2020年2月），本次因處理私人事務及探訪友人，於11月9日再度來臺，入境時無症狀。11月22日起陸續出現輕微頭痛、咳嗽、喉嚨痛及聲音沙啞等症狀，但自覺症狀輕微，檢疫期間均回報無症狀；11月24日檢疫期滿後前往探訪友人，因仍有不適症狀，同日就醫採檢後確診。
    
            `,
    },
    {
        no: '627',
        case: '627',
        date: '11/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案627》' +
            '<br>' +
            `
            印尼籍女性移工，於11月11日入境且無症狀，檢疫期滿前採檢並檢出陽性確診。

            `,
    },
    {
        no: '628',
        case: '628',
        date: '11/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案628》' +
            '<br>' +
            `
            印尼籍女性移工，於11月12日（與先前公布案607同班機）入境且無症狀，檢疫期滿前採檢並檢出陽性確診。

            `,
    },
    {
        no: '629',
        case: '629',
        date: '11/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案629》' +
            '<br>' +
            `
            印尼籍女性移工，於11月12日（與先前公布案607同班機）入境且無症狀，檢疫期滿前採檢並檢出陽性確診。

            `,
    },
    {
        no: '630',
        case: '630',
        date: '11/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案630》' +
            '<br>' +
            `
            印尼籍女性移工，於11月12日（與先前公布案607同班機）入境且無症狀，檢疫期滿前採檢並檢出陽性確診。

            `,
    },
    {
        no: '631',
        case: '631',
        date: '11/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案631》' +
            '<br>' +
            `
            印尼籍女性移工，於11月12日（與先前公布案607同班機）入境且無症狀，檢疫期滿前採檢並檢出陽性確診。

            `,
    },
    {
        no: '632',
        case: '632',
        date: '11/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案632》' +
            '<br>' +
            `
            印尼籍女性移工，於11月12日（與先前公布案607同班機）入境。曾於11月19通報喉嚨不適，11月23日出現流鼻水、鼻塞情形但未通報，自認症狀輕微而未就醫，檢疫期滿前採檢並檢出陽性確診。

            `,
    },
    {
        no: '633',
        case: '633',
        date: '11/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案633》' +
            '<br>' +
            `
            印尼籍女性移工，於11月12日（與先前公布案607同班機）入境且無症狀，檢疫期滿前採檢並檢出陽性確診。

            `,
    },
    {
        no: '634',
        case: '634',
        date: '11/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案634》' +
            '<br>' +
            `
            印尼籍女性移工，於11月12日（與先前公布案607同班機）入境且無症狀，檢疫期滿前採檢並檢出陽性確診。

            `,
    },
    {
        no: '635',
        case: '635',
        date: '11/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案635》' +
            '<br>' +
            `
            印尼籍女性移工，於11月12日（與先前公布案607同班機）入境且無症狀，檢疫期滿前採檢並檢出陽性確診。

            `,
    },
    {
        no: '636',
        case: '636',
        date: '11/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案636》' +
            '<br>' +
            `
            印尼籍女性移工，於11月12日（與先前公布案607同班機）入境且無症狀，檢疫期滿前採檢並檢出陽性確診。

            `,
    },
    {
        no: '637',
        case: '637',
        date: '11/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案637》' +
            '<br>' +
            `
            印尼籍女性移工，於11月12日（與先前公布案607同班機）入境且無症狀，檢疫期滿前採檢並檢出陽性確診。

            `,
    },
    {
        no: '638',
        case: '638',
        date: '11/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案638》' +
            '<br>' +
            `
            印尼籍女性移工，於11月12日（與先前公布案607同班機）入境且無症狀，檢疫期滿前採檢並檢出陽性確診。

            `,
    },
    {
        no: '639',
        case: '639',
        date: '11/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案639》' +
            '<br>' +
            `
            印尼籍女性移工，於11月12日（與先前公布案607同班機）入境且無症狀，檢疫期滿前採檢並檢出陽性確診。

            `,
    },
    {
        no: '640',
        case: '640',
        date: '11/27',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案640》' +
            '<br>' +
            `
            本國籍30多歲男性，長期在美國工作（前次自臺灣出境日期為2019年9月），11月20日返臺探親，入境時無症狀，並至防疫旅館居家檢疫。個案11月21日起陸續出現疲倦、喉嚨乾、喉嚨痛等症狀，11月25日通報衛生單位安排就醫採檢後確診。

            `,
    },
    {
        no: '641',
        case: '641',
        date: '11/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案641》' +
            '<br>' +
            `
            案641至644均為印尼籍女性移工，年齡介於20多歲至30多歲，2020年11月25日搭乘同一班機來臺工作，入境時主動告知有不適症狀，經採檢後確診。

            `,
    },
    {
        no: '642',
        case: '642',
        date: '11/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案642》' +
            '<br>' +
            `
            案641至644均為印尼籍女性移工，年齡介於20多歲至30多歲，2020年11月25日搭乘同一班機來臺工作，入境時主動告知有不適症狀，經採檢後確診。

            `,
    },
    {
        no: '643',
        case: '643',
        date: '11/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案643》' +
            '<br>' +
            `
            案641至644均為印尼籍女性移工，年齡介於20多歲至30多歲，2020年11月25日搭乘同一班機來臺工作，入境時主動告知有不適症狀，經採檢後確診。

            `,
    },
    {
        no: '644',
        case: '644',
        date: '11/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案644》' +
            '<br>' +
            `
            案641至644均為印尼籍女性移工，年齡介於20多歲至30多歲，2020年11月25日搭乘同一班機來臺工作。無症狀，但主動告知有服用藥物（後經釐清為維他命C），經採檢後確診。

            `,
    },
    {
        no: '645',
        case: '645',
        date: '11/28',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案645》' +
            '<br>' +
            `
            本國籍40多歲女性，長期居住美國（前次自臺灣出境日期為2019年11月），因計劃返臺探親，2020年11月19日入境，迄今無疑似症狀。個案居家檢疫期間，提出外出奔喪申請，於11月26日由衛生單位安排自費採檢後確診。

            `,
    },
    {
        no: '646',
        case: '646',
        date: '11/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案646》' +
            '<br>' +
            `
            案646、647及649均為印尼籍女性移工，年齡介於20多歲至40多歲，2020年11月13日搭乘同一班機來臺工作，入境至檢疫期間無症狀，11月26日進行集中檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '647',
        case: '647',
        date: '11/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案647》' +
            '<br>' +
            `
            案646、647及649均為印尼籍女性移工，年齡介於20多歲至40多歲，2020年11月13日搭乘同一班機來臺工作，入境至檢疫期間無症狀，11月26日進行集中檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '648',
        case: '648',
        date: '11/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案648》' +
            '<br>' +
            `
            案648為印尼籍20多歲男性移工，2020年11月15日來臺工作，入境至檢疫期間均無症狀，於11月27日採檢後確診。

            `,
    },
    {
        no: '649',
        case: '649',
        date: '11/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案649》' +
            '<br>' +
            `
            案646、647及649均為印尼籍女性移工，年齡介於20多歲至40多歲，2020年11月13日搭乘同一班機來臺工作，入境至檢疫期間無症狀，11月26日進行集中檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '650',
        case: '650',
        date: '11/29',
        status: 'default',
        group: 'trp_A',
        info:
            '《案650》' +
            '<br>' +
            `
            案650、652分別為40多歲及30多歲印尼籍女性，於11月14日自印尼來臺工作，入境迄今皆無症狀，11月27日進行期滿前採檢送驗後確診。

            `,
    },
    {
        no: '651',
        case: '651',
        date: '11/29',
        status: 'default',
        group: 'trp_A',
        info:
            '《案651》' +
            '<br>' +
            `
            20多歲印尼籍女性，於11月14日自印尼來臺工作，11月24日於集中檢疫所曾出現嗅覺異常，因持續時間短暫且自覺症狀輕微、無其他相關症狀，因此未回報，11月27日進行期滿前採檢送驗後確診。

            `,
    },
    {
        no: '652',
        case: '652',
        date: '11/29',
        status: 'default',
        group: 'trp_A',
        info:
            '《案652》' +
            '<br>' +
            `
            案650、652分別為40多歲及30多歲印尼籍女性，於11月14日自印尼來臺工作，入境迄今皆無症狀，11月27日進行期滿前採檢送驗後確診。

            `,
    },
    {
        no: '653',
        case: '653',
        date: '11/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案653》' +
            '<br>' +
            `
        印尼籍移工，分別為17女3男，年齡介於20多歲至40多歲，入境日介於11月20日至11月27日，無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '654',
        case: '654',
        date: '11/30',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案654》' +
            '<br>' +
            `
            本國籍20多歲女性，2019年9月至英國就學，2020年11月7日起陸續出現流鼻水、發燒及嗅味覺異常等症狀，未在英國當地就醫，11月11日於當地採檢，並於11月13日確診；個案11月27日返國，入境時主動通報曾有症狀，於機場採檢後確診。
    
            `,
    },
    {
        no: '655',
        case: '655',
        date: '11/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案655》' +
            '<br>' +
            `
        印尼籍移工，分別為17女3男，年齡介於20多歲至40多歲，入境日介於11月20日至11月27日，無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '656',
        case: '656',
        date: '11/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案656》' +
            '<br>' +
            `
            印尼籍移工，分別為17女3男，年齡介於20多歲至40多歲，入境日介於11月20日至11月27日，無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '657',
        case: '657',
        date: '11/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案657》' +
            '<br>' +
            `
            印尼籍移工，分別為17女3男，年齡介於20多歲至40多歲，入境日介於11月20日至11月27日，無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '658',
        case: '658',
        date: '11/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案658》' +
            '<br>' +
            `
            印尼籍移工，分別為17女3男，年齡介於20多歲至40多歲，入境日介於11月20日至11月27日，無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '659',
        case: '659',
        date: '11/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案659》' +
            '<br>' +
            `
            印尼籍移工，分別為17女3男，年齡介於20多歲至40多歲，入境日介於11月20日至11月27日，無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '660',
        case: '660',
        date: '11/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案660》' +
            '<br>' +
            `
            印尼籍移工，分別為17女3男，年齡介於20多歲至40多歲，入境日介於11月20日至11月27日，無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '661',
        case: '661',
        date: '11/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案661》' +
            '<br>' +
            `
            印尼籍移工，分別為17女3男，年齡介於20多歲至40多歲，入境日介於11月20日至11月27日，無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '662',
        case: '662',
        date: '11/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案662》' +
            '<br>' +
            `
            印尼籍移工，分別為17女3男，年齡介於20多歲至40多歲，入境日介於11月20日至11月27日，無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '663',
        case: '663',
        date: '11/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案663》' +
            '<br>' +
            `
            印尼籍移工，分別為17女3男，年齡介於20多歲至40多歲，入境日介於11月20日至11月27日，無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '664',
        case: '664',
        date: '11/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案664》' +
            '<br>' +
            `
            印尼籍移工，分別為17女3男，年齡介於20多歲至40多歲，入境日介於11月20日至11月27日，無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '665',
        case: '665',
        date: '11/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案665》' +
            '<br>' +
            `
            印尼籍移工，分別為17女3男，年齡介於20多歲至40多歲，入境日介於11月20日至11月27日，無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '666',
        case: '666',
        date: '11/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案666》' +
            '<br>' +
            `
            印尼籍移工，分別為17女3男，年齡介於20多歲至40多歲，入境日介於11月20日至11月27日，無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '667',
        case: '667',
        date: '11/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案667》' +
            '<br>' +
            `
            印尼籍移工，分別為17女3男，年齡介於20多歲至40多歲，入境日介於11月20日至11月27日，無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '668',
        case: '668',
        date: '11/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案668》' +
            '<br>' +
            `
            印尼籍移工，分別為17女3男，年齡介於20多歲至40多歲，入境日介於11月20日至11月27日，無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '669',
        case: '669',
        date: '11/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案669》' +
            '<br>' +
            `
            本國籍30多歲男性，2015年6月自臺灣出境，2020年11月16日於菲律賓當地出現咳嗽、頭痛等症狀，僅自行服藥未就醫，因通緝到案，於11月27日自菲律賓遣送返臺，入境時於機場採檢結果為陰性，11月28日進行二採後確診。
    
            `,
    },
    {
        no: '670',
        case: '670',
        date: '11/30',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案670》' +
            '<br>' +
            `
            本國籍30多歲男性，去年8月至美國就學，2020年11月22日返國，入境後進行居家檢疫，11月24日起陸續出現咳嗽、流鼻水及嗅味覺異常症狀，11月27日通報衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '671',
        case: '671',
        date: '11/30',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案671》' +
            '<br>' +
            `
            本國籍50多歲男性，長期居住美國（前次自臺灣出境日期為2020年7月），11月20日返國，入境後進行居家檢疫，11月26日起陸續出現喉嚨痛、咳嗽及流鼻水症狀，11月27日通報衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '672',
        case: '672',
        date: '11/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案672》' +
            '<br>' +
            `
            印尼籍移工，分別為17女3男，年齡介於20多歲至40多歲，入境日介於11月20日至11月27日，無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '673',
        case: '673',
        date: '11/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案673》' +
            '<br>' +
            `
            印尼籍移工，分別為17女3男，年齡介於20多歲至40多歲，入境日介於11月20日至11月27日，無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '674',
        case: '674',
        date: '11/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案674》' +
            '<br>' +
            `
            印尼籍移工，分別為17女3男，年齡介於20多歲至40多歲，入境日介於11月20日至11月27日，於11月29日出現喉嚨不適症狀，經採檢後確診。
    
            `,
    },
    {
        no: '675',
        case: '675',
        date: '11/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案675》' +
            '<br>' +
            `
            印尼籍移工，分別為17女3男，年齡介於20多歲至40多歲，入境日介於11月20日至11月27日，無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '676',
        case: '676',
        date: '11/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案676》' +
            '<br>' +
            `
            印尼籍移工，分別為17女3男，年齡介於20多歲至40多歲，入境日介於11月20日至11月27日，無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '677',
        case: '677',
        date: '12/1',
        status: 'default',
        group: 'trp_A',
        info:
            '《案677》' +
            '<br>' +
            `
            菲律賓籍20多歲男性，11月16日來臺工作，集中檢疫期間，於11月27日出現流鼻水情形，11月29日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '678',
        case: '678',
        date: '12/1',
        status: 'default',
        group: 'trp_A',
        info:
            '《案678》' +
            '<br>' +
            `
            印尼籍30多歲女性，11月28日來臺工作，入境時主動通報自11月21日起有頭暈症狀，僅自行服藥未就醫，經檢疫人員評估後安排於機場採檢後確診。
    
            `,
    },
    {
        no: '679',
        case: '679',
        date: '12/1',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案679》' +
            '<br>' +
            `
            本國籍30多歲男性，長期於英國工作，10月26日出現全身倦怠、流鼻水及鼻塞情形，10月28日於英國當地就醫，經檢驗確診武漢肺炎，後續依當地規定自我隔離10天，隔離期間出現嗅味覺喪失情形。個案11月7日隔離期滿後症狀緩解，11月28日返國，入境時無症狀，並主動告知曾確診武漢肺炎，於機場進行採檢後確診。
    
            `,
    },
    {
        no: '680',
        case: '680',
        date: '12/1',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案680》' +
            '<br>' +
            `
            白俄羅斯籍40多歲男性，持有我國居留證，10月中旬返回母國探親，11月13日再次來臺工作，入境迄今無疑似症狀。個案檢疫期滿後，於11月30日由公司安排至醫院自費採檢後確診。
    
            `,
    },
    {
        no: '681',
        case: '681',
        date: '12/2',
        status: 'default',
        group: 'trp_A',
        info:
            '《案681》' +
            '<br>' +
            `
            案681、682分別為40多歲及20多歲印尼籍女性，於11月17日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境迄今皆無症狀；依11月28日因應「1127印尼專案」檢驗皆陰性，30日進行期滿前採檢後確診。
    
            `,
    },
    {
        no: '682',
        case: '682',
        date: '12/2',
        status: 'default',
        group: 'trp_A',
        info:
            '《案682》' +
            '<br>' +
            `
            案681、682分別為40多歲及20多歲印尼籍女性，於11月17日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境迄今皆無症狀；依11月28日因應「1127印尼專案」檢驗皆陰性，30日進行期滿前採檢後確診。
    
            `,
    },
    {
        no: '683',
        case: '683',
        date: '12/2',
        status: 'default',
        group: 'trp_A',
        info:
            '《案683》' +
            '<br>' +
            `
            20多歲印尼籍男性移工，於11月14日自印尼來臺工作，持有登機前3日內抗體陰性報告，入境迄今無疑似症狀。個案入境後前往防疫旅館進行居家檢疫，11月29日檢疫期滿後搭乘專車至公司宿舍自主健康管理，同日由公司安排自費採檢後確診
    
            `,
    },
    {
        no: '684',
        case: '684',
        date: '12/2',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案684》' +
            '<br>' +
            `
            30多歲本國籍男性，長期於美國工作，11月22日返國入境後前往防疫旅館居家檢疫，同日晚間出現輕微嗅覺異常，11月23日症狀緩解，但隔天因嗅覺異常症狀加劇通報，11月26日經衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '685',
        case: '685',
        date: '12/2',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案685》' +
            '<br>' +
            `
            40多歲賽普勒斯籍男性，11月29日自美國來臺洽商，持有登機前3日內核酸檢驗陰性報告，入境時因體溫異常（38.6度），由機場檢疫人員安排至醫院採檢後前往集中檢疫所等待結果，11月30日持續有發燒症狀，12月1日因食慾不振，由衛生單位安排採檢通報後確診。
    
            `,
    },
    {
        no: '686',
        case: '686',
        date: '12/2',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案686》' +
            '<br>' +
            `
            50多歲法國籍男性，來臺從事商務活動，持有登機前3日內核酸檢驗陰性報告，11月19日自法國經土耳其轉機，於11月20日入境後，前往防疫旅館居家檢疫。個案11月27日曾出現喉嚨痛症狀，因症狀持續，11月30日由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '687',
        case: '687',
        date: '12/3',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案687》' +
            '<br>' +
            `
            案687於美國工作，11月29日返臺探親，入境後至住處居家檢疫，同日於住處出現喉嚨不適情形並主動通報，由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '688',
        case: '688',
        date: '12/4',
        status: 'default',
        group: 'trp_A',
        info:
            '《案688》' +
            '<br>' +
            `
            印尼籍30多歲女性移工，2020年11月13日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境迄今無症狀，檢疫期滿前採檢為陰性。個案11月28日檢疫期滿後，由仲介安排至宿舍自主健康管理至11月30日，因雇主要求，於12月1日由仲介安排至醫院自費採檢後確診。
    
            `,
    },
    {
        no: '689',
        case: '689',
        date: '12/4',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案689》' +
            '<br>' +
            `
            法國籍40多歲男性，因工作於11月23日前往美國，因被毒蜘蛛咬傷，分別於11月27日及28日至當地醫院就醫，11月30日入境臺灣後前往防疫旅館居家檢疫。個案因咬傷部位不適情形未改善，分別於11月30日及12月2日由衛生單位安排就醫，並於12月2日收治住院隔離及採檢，並於12月3日出現嗅味覺喪失，於12月4日確診。
    
            `,
    },
    {
        no: '690',
        case: '690',
        date: '12/4',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案690》' +
            '<br>' +
            `
            本國籍20多歲男性，2020年8月至美國就學，11月30日返臺，入境時無症狀並返回住處居家檢疫。個案12月1日出現發冷症狀，隔天因發燒及咳嗽通報衛生單位，經安排就醫及採檢後確診。
    
            `,
    },
    {
        no: '691',
        case: '691',
        date: '12/4',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案691》' +
            '<br>' +
            `
            本國籍90多歲男性，不定期於美國及臺灣兩地居住，2020年11月上旬前往美國，同月22日返臺，入境時無症狀，並持有登機前3日內檢驗陰性報告。個案居家檢疫期間，12月2日出現全身倦怠、頭暈及發燒症狀送醫並住院隔離，X光檢查有肺炎情形，經採檢通報後確診。
    
            `,
    },
    {
        no: '692',
        case: '692',
        date: '12/5',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案692》' +
            '<br>' +
            `
            本國籍30多歲女性，2019年7月至愛爾蘭就學，於2020年11月19日返臺後至防疫旅館居家檢疫，入境時自覺輕微喉嚨癢，11月23日症狀改善，11月25日接獲通知其愛爾蘭友人確診，才自覺有嗅覺異常情形，自行通報衛生單位，經再次採檢後確診。
    
            `,
    },
    {
        no: '693',
        case: '693',
        date: '12/5',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案693》' +
            '<br>' +
            `
            德國籍30多歲男性，於11月29日來臺探親，入境無不適症狀，且持有72小時內核酸檢驗陰性報告，入境後至防疫旅館居家檢疫。個案自述11月28日於德國曾接觸確診個案，12月3日開始出現頭痛、畏寒、流鼻水等症狀，經衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '694',
        case: '694',
        date: '12/5',
        status: 'default',
        group: 'trp_A',
        info:
            '《案694》' +
            '<br>' +
            `
            本國籍30多歲男性，2020年8月中旬赴印尼工作，於10月12日起陸續出現疲倦、發燒及腹瀉等症狀，並於10月21日自覺已恢復，11月8日入境後，進行居家檢疫，檢疫期間無不適症狀；12月2日因需返回印尼工作，故進行自費採檢後確診。
    
            `,
    },
    {
        no: '695',
        case: '695',
        date: '12/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案695》' +
            '<br>' +
            `
            20多歲印尼籍女性移工，於2020年11月14日來臺工作，持有登機前3日內核酸檢驗陰性報告，檢疫期間均無不適症狀，檢疫期滿前採檢結果為陰性，12月4日因「案688印尼移工接觸者專案」入住集中檢疫所並進行採檢後確診。
    
            `,
    },
    {
        no: '696',
        case: '696',
        date: '12/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案696》' +
            '<br>' +
            `
            案696至712，分別為15女2男，年齡介於20多歲至40多歲，入境日介於11月28日至12月3日。無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '697',
        case: '697',
        date: '12/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案697》' +
            '<br>' +
            `
            案696至712，分別為15女2男，年齡介於20多歲至40多歲，入境日介於11月28日至12月3日。無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '698',
        case: '698',
        date: '12/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案698》' +
            '<br>' +
            `
            案696至712，分別為15女2男，年齡介於20多歲至40多歲，入境日介於11月28日至12月3日。無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '699',
        case: '699',
        date: '12/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案699》' +
            '<br>' +
            `
            案696至712，分別為15女2男，年齡介於20多歲至40多歲，入境日介於11月28日至12月3日。案699於12月1日出現鼻塞、腹瀉等症狀，經採檢後確診。
    
            `,
    },
    {
        no: '700',
        case: '700',
        date: '12/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案700》' +
            '<br>' +
            `
            案696至712，分別為15女2男，年齡介於20多歲至40多歲，入境日介於11月28日至12月3日。無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '701',
        case: '701',
        date: '12/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案701》' +
            '<br>' +
            `
            案696至712，分別為15女2男，年齡介於20多歲至40多歲，入境日介於11月28日至12月3日。案701於12月1日出現肌肉痠痛、關節痛、嘔吐、味覺異常等症狀，經採檢後確診。
    
            `,
    },
    {
        no: '702',
        case: '702',
        date: '12/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案702》' +
            '<br>' +
            `
            案696至712，分別為15女2男，年齡介於20多歲至40多歲，入境日介於11月28日至12月3日。無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '703',
        case: '703',
        date: '12/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案703》' +
            '<br>' +
            `
            案696至712，分別為15女2男，年齡介於20多歲至40多歲，入境日介於11月28日至12月3日。無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '704',
        case: '704',
        date: '12/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案704》' +
            '<br>' +
            `
            案696至712，分別為15女2男，年齡介於20多歲至40多歲，入境日介於11月28日至12月3日。無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '705',
        case: '705',
        date: '12/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案705》' +
            '<br>' +
            `
            案696至712，分別為15女2男，年齡介於20多歲至40多歲，入境日介於11月28日至12月3日。無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '706',
        case: '706',
        date: '12/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案706》' +
            '<br>' +
            `
            案696至712，分別為15女2男，年齡介於20多歲至40多歲，入境日介於11月28日至12月3日。無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '707',
        case: '707',
        date: '12/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案707》' +
            '<br>' +
            `
            案696至712，分別為15女2男，年齡介於20多歲至40多歲，入境日介於11月28日至12月3日。無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '708',
        case: '708',
        date: '12/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案708》' +
            '<br>' +
            `
            案696至712，分別為15女2男，年齡介於20多歲至40多歲，入境日介於11月28日至12月3日。無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '709',
        case: '709',
        date: '12/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案709》' +
            '<br>' +
            `
            案696至712，分別為15女2男，年齡介於20多歲至40多歲，入境日介於11月28日至12月3日。無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '710',
        case: '710',
        date: '12/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案710》' +
            '<br>' +
            `
            案696至712，分別為15女2男，年齡介於20多歲至40多歲，入境日介於11月28日至12月3日。無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '711',
        case: '711',
        date: '12/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案711》' +
            '<br>' +
            `
            案696至712，分別為15女2男，年齡介於20多歲至40多歲，入境日介於11月28日至12月3日。無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '712',
        case: '712',
        date: '12/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案712》' +
            '<br>' +
            `
            案696至712，分別為15女2男，年齡介於20多歲至40多歲，入境日介於11月28日至12月3日。無症狀，經採檢後確診。
    
            `,
    },
    {
        no: '713',
        case: '713',
        date: '12/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案713》' +
            '<br>' +
            `
            案713為30多歲印尼籍男性，11月19日來臺工作，入境後至檢疫旅館進行居家檢疫，迄今無症狀，檢疫期滿後12月4日由仲介公司安排自費採檢後確診。
    
            `,
    },
    {
        no: '714',
        case: '714',
        date: '12/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案714》' +
            '<br>' +
            `
            案714為30多歲印尼籍女性，11月12日來臺工作，入境後至集中檢疫所進行檢疫，迄今無症狀，11月25日檢疫期滿前採檢結果為陰性，後至仲介公司安排住所自主健康管理，12月4日由雇主安排自費採檢後確診。
    
            `,
    },
    {
        no: '715',
        case: '715',
        date: '12/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案715》' +
            '<br>' +
            `
            案715為20多歲菲律賓籍女性，11月11日來臺工作，入境後至集中檢疫所進行檢疫，迄今無症狀，11月24日檢疫期滿前採檢結果為陰性，後至仲介公司安排住所自主健康管理，12月4日由仲介公司安排自費採檢後確診。
    
            `,
    },
    {
        no: '716',
        case: '716',
        date: '12/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案716》' +
            '<br>' +
            `
            案716為20多歲菲律賓籍男性，11月22日來臺工作，入境後至集中檢疫所進行檢疫，迄今無症狀，12月5日進行期滿前採檢後確診。
    
            `,
    },
    {
        no: '717',
        case: '717',
        date: '12/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案717》' +
            '<br>' +
            `
            案717為40多歲印尼籍男性，11月20日來臺工作，入境後至檢疫旅館進行居家檢疫，迄今無症狀，12月5日檢疫期滿後由仲介公司安排自費採檢後確診。
    
            `,
    },
    {
        no: '718',
        case: '718',
        date: '12/8',
        status: 'default',
        group: 'trp_A',
        info:
            '《案718》' +
            '<br>' +
            `
            印尼籍20多歲女性移工，11月23日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境迄今無症狀，12月7日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '719',
        case: '719',
        date: '12/8',
        status: 'default',
        group: 'trp_A',
        info:
            '《案719》' +
            '<br>' +
            `
            本國籍50多歲男性，2020年9月中旬至中國浙江處理公事，11月22日返臺，入境時無症狀，並持有登機前3日內核酸檢驗陰性報告。個案於防疫旅館居家檢疫期間，12月4日出現發冷及發燒症狀，12月5日由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '720',
        case: '720',
        date: '12/9',
        status: 'default',
        group: 'trp_A',
        info:
            '《案720》' +
            '<br>' +
            `
            緬甸籍40多歲男性，11月22日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後至防疫旅館居家檢疫，迄今無症狀；12月7日檢疫期滿後，搭乘專車至其他處所自主健康管理，同日由仲介安排自費採檢後確診。
    
            `,
    },
    {
        no: '721',
        case: '721',
        date: '12/9',
        status: 'default',
        group: 'trp_A',
        info:
            '《案721》' +
            '<br>' +
            `
            印尼籍40多歲男性，11月21日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後至防疫旅館進行居家檢疫，迄今無症狀；12月6日檢疫期滿後進行自主健康管理，12月7日由公司安排自費採檢後確診。
    
            `,
    },
    {
        no: '722',
        case: '722',
        date: '12/10',
        status: 'default',
        group: 'trp_A',
        info:
            '《案722》' +
            '<br>' +
            `
            印尼籍30多歲女性，持有登機前3日內血清抗體檢驗陰性報告，11月29日曾進行「1127印尼專案」採檢，結果為陰性。進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '723',
        case: '723',
        date: '12/10',
        status: 'default',
        group: 'trp_A',
        info:
            '《案723》' +
            '<br>' +
            `
            菲律賓籍20多歲男性，進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '724',
        case: '724',
        date: '12/10',
        status: 'default',
        group: 'trp_A',
        info:
            '《案724》' +
            '<br>' +
            `
            菲律賓籍30多歲男性，持有10月29日採檢之核酸檢驗陰性報告。進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '725',
        case: '725',
        date: '12/10',
        status: 'default',
        group: 'trp_A',
        info:
            '《案725》' +
            '<br>' +
            `
            菲律賓籍40多歲女性，進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '726',
        case: '726',
        date: '12/11',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案726》' +
            '<br>' +
            `
            本國籍20多歲女性，長期居住美國（前次自臺灣出境時間為2019年9月），2020年11月30日獨自返臺探親，入境後至住處居家檢疫；個案12月7日出現嗅覺異常及流鼻水症狀，12月9日由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '727',
        case: '727',
        date: '12/12',
        status: 'default',
        group: 'trp_A',
        info:
            '《案727》' +
            '<br>' +
            `
            印尼籍女性移工，於2020年11月27日來臺工作，並持有登機前3日內血清抗體檢驗陰性報告。曾於11月28日接受「1127印尼專案」採檢，結果皆為陰性；後於12月10日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '728',
        case: '728',
        date: '12/12',
        status: 'default',
        group: 'trp_A',
        info:
            '《案728》' +
            '<br>' +
            `
            本國籍40多歲女性，2020年7月至英國工作，11月27日與2名家人一同返國；個案居家檢疫期間，於12月4日出現全身倦怠、肌肉關節痠痛、頭暈等症狀，12月6日發燒並由衛生單位安排就醫採檢，檢驗結果為陰性，因症狀未改善，12月9日再次就醫採檢後確診。
    
            `,
    },
    {
        no: '729',
        case: '729',
        date: '12/12',
        status: 'default',
        group: 'trp_A',
        info:
            '《案729》' +
            '<br>' +
            `
            本國籍20多歲女性，2019年8月至美國就學，2020年11月30日自美國搭機，12月2日入境臺灣後返回住處居家檢疫。個案12月5日曾有喉嚨痛症狀但未回報，12月8日起陸續出現鼻塞、流鼻水及嗅味覺異常症狀，12月9日通報衛生單位後安排就醫採檢後確診。
    
            `,
    },
    {
        no: '730',
        case: '730',
        date: '12/12',
        status: 'default',
        group: 'trp_A',
        info:
            '《案730》' +
            '<br>' +
            `
            印尼籍女性移工，於2020年11月27日來臺工作，持有登機前3日內核酸檢驗陰性報告。曾於11月28日接受「1127印尼專案」採檢，結果皆為陰性；後於12月10日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '731',
        case: '731',
        date: '12/12',
        status: 'default',
        group: 'trp_A',
        info:
            '《案731》' +
            '<br>' +
            `
            印尼籍20多歲女性商務人士，2020年11月25日與5名同行者來臺，持有登機前3日內核酸檢驗陰性報告，入境迄今無症狀。個案12月10日檢疫期滿後至醫院自費採檢後確診。
    
            `,
    },
    {
        no: '732',
        case: '732',
        date: '12/12',
        status: 'default',
        group: 'trp_A',
        info:
            '《案732》' +
            '<br>' +
            `
            印尼籍女性移工，於2020年11月27日來臺工作，持有登機前3日內核酸檢驗陰性報告。曾於11月28日接受「1127印尼專案」採檢，結果皆為陰性；後於12月10日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '733',
        case: '733',
        date: '12/12',
        status: 'default',
        group: 'trp_A',
        info:
            '《案733》' +
            '<br>' +
            `
            本國籍30多歲女性，與734為家人，長期居住美國（前次自臺灣出境時間為2019年3月），2020年12月6日一同返臺，持有登機前3日內核酸檢驗陰性報告，入境後至住處居家檢疫。於12月9日起陸續出現打噴嚏、喉嚨癢及嗅覺異常情形，經採檢通報後確診。
    
            `,
    },
    {
        no: '734',
        case: '734',
        date: '12/12',
        status: 'default',
        group: 'trp_A',
        info:
            '《案734》' +
            '<br>' +
            `
            未滿5歲男童，與733為家人，長期居住美國（前次自臺灣出境時間為2019年3月），2020年12月6日一同返臺，持有登機前3日內核酸檢驗陰性報告，入境後至住處居家檢疫。於12月9日起陸續出現打噴嚏、喉嚨癢及嗅覺異常情形，就醫時出現發燒症狀，經採檢通報後確診。
    
            `,
    },
    {
        no: '735',
        case: '735',
        date: '12/13',
        status: 'default',
        group: 'trp_A',
        info:
            '《案735》' +
            '<br>' +
            `
            印尼籍20多歲男性，2020年11月24日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後至防疫旅館進行居家檢疫，迄今無症狀；12月9日檢疫期滿後，由公司安排自費採檢後確診。
    
            `,
    },
    {
        no: '736',
        case: '736',
        date: '12/13',
        status: 'default',
        group: 'trp_A',
        info:
            '《案736》' +
            '<br>' +
            `
            印尼籍20多歲女性移工，11月28日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境時無症狀，12月4日進行ㄋ入境一週採檢為陰性，12月10日曾出現腹脹、嘔吐症狀，12月11日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '737',
        case: '737',
        date: '12/13',
        status: 'default',
        group: 'trp_A',
        info:
            '《案737》' +
            '<br>' +
            `
            印尼籍30多歲女性移工，11月25日來臺工作，11月23日曾於當地檢驗陰性，但入境時未檢附報告，入境迄今無症狀。11月28日及12月8日於集中檢疫所兩次採檢陰性，12月10日檢疫期滿後，由仲介安排自費採檢後確診。
    
            `,
    },
    {
        no: '738',
        case: '738',
        date: '12/14',
        status: 'default',
        group: 'trp_A',
        info:
            '《案738》' +
            '<br>' +
            `
            菲律賓籍20多歲女性，2020年11月26日來臺工作(非移工)，持有登機前3日內核酸檢驗陰性報告，入境後至防疫旅館檢疫，迄今無症狀。個案12月11日檢疫期滿後，12月12日至醫院採檢後確診。
    
            `,
    },
    {
        no: '739',
        case: '739',
        date: '12/14',
        status: 'default',
        group: 'trp_A',
        info:
            '《案739》' +
            '<br>' +
            `
            律賓籍20多歲男性移工，2020年11月20日來臺工作，持有入境前3日內核酸檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀。個案12月3日檢疫期滿前採檢結果為陰性，自主健康管理期滿後，由仲介安排就醫採檢後確診。
    
            `,
    },
    {
        no: '740',
        case: '740',
        date: '12/14',
        status: 'default',
        group: 'trp_A',
        info:
            '《案740》' +
            '<br>' +
            `
            印尼籍20多歲男性漁工，2020年11月26日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後至防疫旅館檢疫，迄今無症狀。個案12月11日檢疫期滿後，由仲介安排專車就醫採檢後確診。
    
            `,
    },
    {
        no: '741',
        case: '741',
        date: '12/14',
        status: 'default',
        group: 'trp_A',
        info:
            '《案741》' +
            '<br>' +
            `
            印尼籍40多歲女性移工，2020年11月19日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後迄今無症狀。個案接受「1127印尼專案」及檢疫期滿前採檢均為陰性。於12月4日檢疫期滿後，由仲介安排至醫院體檢，12月7日再由仲介安排至住所自主健康管理；12月11日因雇主要求至醫院採檢後確診。
    
            `,
    },
    {
        no: '742',
        case: '742',
        date: '12/15',
        status: 'default',
        group: 'trp_A',
        info:
            '《案742》' +
            '<br>' +
            `
            菲律賓籍移工，於2020年11月30日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後皆至集中檢疫所檢疫，迄今無症狀。於12月13日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '743',
        case: '743',
        date: '12/15',
        status: 'default',
        group: 'trp_A',
        info:
            '《案743》' +
            '<br>' +
            `
            印尼籍移工，於2020年11月30日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後皆至集中檢疫所檢疫，迄今無症狀。曾於12月4日接受印尼專案採檢，結果為陰性；於12月13日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '744',
        case: '744',
        date: '12/16',
        status: 'default',
        group: 'trp_A',
        info:
            '《案744》' +
            '<br>' +
            `
            律賓籍20多歲男性移工，2020年12月1日來臺工作，持有入境前3日內核酸檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀。個案12月14日檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '745',
        case: '745',
        date: '12/16',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案745》' +
            '<br>' +
            `
            案745、746、747、748為俄羅斯籍藝文表演團體成員，共2男2女，年齡介於20至60多歲，因受邀來臺參演，於2020年11月29日入境，皆持有登機前3日內核酸檢驗陰性報告，入境後至防疫旅館檢疫，迄今皆無症狀；12月14日檢疫期滿後，由邀請單位安排自費採檢後確診。
    
            `,
    },
    {
        no: '746',
        case: '746',
        date: '12/16',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案746》' +
            '<br>' +
            `
            案745、746、747、748為俄羅斯籍藝文表演團體成員，共2男2女，年齡介於20至60多歲，因受邀來臺參演，於2020年11月29日入境，皆持有登機前3日內核酸檢驗陰性報告，入境後至防疫旅館檢疫，迄今皆無症狀；12月14日檢疫期滿後，由邀請單位安排自費採檢後確診。
    
            `,
    },
    {
        no: '747',
        case: '747',
        date: '12/16',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案747》' +
            '<br>' +
            `
            案745、746、747、748為俄羅斯籍藝文表演團體成員，共2男2女，年齡介於20至60多歲，因受邀來臺參演，於2020年11月29日入境，皆持有登機前3日內核酸檢驗陰性報告，入境後至防疫旅館檢疫，迄今皆無症狀；12月14日檢疫期滿後，由邀請單位安排自費採檢後確診。
    
            `,
    },
    {
        no: '748',
        case: '748',
        date: '12/16',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案748》' +
            '<br>' +
            `
            案745、746、747、748為俄羅斯籍藝文表演團體成員，共2男2女，年齡介於20至60多歲，因受邀來臺參演，於2020年11月29日入境，皆持有登機前3日內核酸檢驗陰性報告，入境後至防疫旅館檢疫，迄今皆無症狀；12月14日檢疫期滿後，由邀請單位安排自費採檢後確診。
    
            `,
    },
    {
        no: '749',
        case: '749',
        date: '12/16',
        status: 'default',
        group: 'trp_A',
        info:
            '《案749》' +
            '<br>' +
            `
            菲律賓籍20多歲男性漁工，2020年11月29日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後至防疫旅館檢疫，迄今無症狀。個案12月14日檢疫期滿後，由仲介安排自費採檢後確診。
    
            `,
    },
    {
        no: '750',
        case: '750',
        date: '12/16',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案750》' +
            '<br>' +
            `
            本國籍40多歲男性，2020年3月前往美國探親，12月8日入境臺灣後返回住處居家檢疫，持有登機前3日內核酸檢驗陰性報告。個案曾於12月11日及12日出現畏寒及發燒等症狀，13日因出現嗅味覺異常症狀由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '751',
        case: '751',
        date: '12/17',
        status: 'default',
        group: 'trp_A',
        info:
            '《案751》' +
            '<br>' +
            `
            印尼籍40多歲女性移工，2020年12月2日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀。個案曾於12月4日接受「印尼專案」採檢，結果為陰性，12月15日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '752',
        case: '752',
        date: '12/17',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案752》' +
            '<br>' +
            `
            本國籍70多歲男性，長期居住美國，11月30日與1名家人自美國搭機返臺探親，12月2日入境後至住處檢疫。個案12月5日及8日分別出現咳嗽、喉嚨痛症狀，13日出現嗅覺異常，15日通報衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '753',
        case: '753',
        date: '12/17',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案753》' +
            '<br>' +
            `
            本國籍60多歲女性，2019年6月至美國工作，2020年12月9日返國，持有登機前3日內核酸檢驗陰性報告，入境後至防疫旅館檢疫。個案12月10日出現喉嚨不適，15日因咳嗽、食慾不佳等症狀，由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '754',
        case: '754',
        date: '12/17',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案754》' +
            '<br>' +
            `
            美國籍50多歲男性，持有我國居留證，2019年12月於美國工作，2020年11月29日入境臺灣，入境後至防疫旅館檢疫，迄今無症狀。個案12月14日檢疫期滿後搭車返回住處，15日前往醫院自費採檢後確診。
    
            `,
    },
    {
        no: '755',
        case: '755',
        date: '12/17',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案755》' +
            '<br>' +
            `
            俄羅斯籍，為昨（16）日公布案745至748之同團成員，共3女1男，年齡介於20多歲至30多歲，11月29日入境迄今均無症狀。昨日針對其餘48名團員進行採檢，其中案755至758共4人因檢出陽性確診。
    
            `,
    },
    {
        no: '756',
        case: '756',
        date: '12/17',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案756》' +
            '<br>' +
            `
            俄羅斯籍，為昨（16）日公布案745至748之同團成員，共3女1男，年齡介於20多歲至30多歲，11月29日入境迄今均無症狀。昨日針對其餘48名團員進行採檢，其中案755至758共4人因檢出陽性確診。
    
            `,
    },
    {
        no: '757',
        case: '757',
        date: '12/17',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案757》' +
            '<br>' +
            `
            俄羅斯籍，為昨（16）日公布案745至748之同團成員，共3女1男，年齡介於20多歲至30多歲，11月29日入境迄今均無症狀。昨日針對其餘48名團員進行採檢，其中案755至758共4人因檢出陽性確診。
    
            `,
    },
    {
        no: '758',
        case: '758',
        date: '12/17',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案758》' +
            '<br>' +
            `
            俄羅斯籍，為昨（16）日公布案745至748之同團成員，共3女1男，年齡介於20多歲至30多歲，11月29日入境迄今均無症狀。昨日針對其餘48名團員進行採檢，其中案755至758共4人因檢出陽性確診。
    
            `,
    },
    {
        no: '759',
        case: '759',
        date: '12/18',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案759》' +
            '<br>' +
            `
            本國籍50多歲女性，為昨（17）日公布案752之家人，2人11月30日一同自美國搭機返臺探親。因案752檢驗確診，衛生單位將案759列為接觸者，經進一步疫調，發現案759自12月4日起有喉嚨癢、咳嗽有痰症狀，且症狀持續未改善，故安排就醫採檢後確診。
    
            `,
    },
    {
        no: '760',
        case: '760',
        date: '12/18',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案760》' +
            '<br>' +
            `
            本國籍30多歲女性，因工作於12月12日前往美國，12月16日返臺。個案入境後，至公司宿舍居家檢疫，同日出現咳嗽、流鼻水、全身痠痛、發燒等症狀，由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '761',
        case: '761',
        date: '12/19',
        status: 'default',
        group: 'trp_A',
        info:
            '《案761》' +
            '<br>' +
            `
            印尼籍20多歲男性漁工，2020年12月1日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後至防疫旅館檢疫，迄今無症狀。個案12月15日檢疫期滿後，12月17日由仲介安排自費採檢後確診。
    
            `,
    },
    {
        no: '762',
        case: '762',
        date: '12/19',
        status: 'default',
        group: 'trp_A',
        info:
            '《案762》' +
            '<br>' +
            `
            緬甸籍30多歲男性船員，2020年12月2日來臺工作，持有入境前3日內核酸檢驗陰性報告，入境後至防疫旅館檢疫，迄今無症狀。個案12月17日檢疫期滿後，由仲介安排自費採檢後確診。
    
            `,
    },
    {
        no: '763',
        case: '763',
        date: '12/19',
        status: 'default',
        group: 'trp_A',
        info:
            '《案763》' +
            '<br>' +
            `
            本國籍20多歲女性，2020年8月至美國就學，12月7日自美國搭機，持有登機前3日內檢驗陰性報告，12月9日入境臺灣後至防疫旅館檢疫。個案12月14日出現咳嗽有痰及嗅覺異常症狀，12月16日由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '764',
        case: '764',
        date: '12/19',
        status: 'default',
        group: 'trp_A',
        info:
            '《案764》' +
            '<br>' +
            `
            印度籍30多歲男性船員，2020年10月21日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後至防疫旅館檢疫，迄今無症狀，12月16日由公司安排自費採檢後確診。
    
            `,
    },
    {
        no: '765',
        case: '765',
        date: '12/20',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案765》' +
            '<br>' +
            `
            60多歲紐西蘭籍男性，曾於11月29日飛往美國、12月4日返臺，12月12日與案760同班機前往美國，於機上有咳嗽症狀，12月15日返臺後進行居家檢疫，12月18日安排接觸者採檢後確診。
    
            `,
    },
    {
        no: '766',
        case: '766',
        date: '12/20',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案766》' +
            '<br>' +
            `
            20多歲日本籍男性，曾於12月5日飛往美國，12月7日返臺，12月12日案760同班機前往美國，12月15日返臺後進行居家檢疫，12月18日安排接觸者採檢，自述12月17日有咳嗽症狀，12月19日出現輕微腹瀉，經採檢通報後確診。
    
            `,
    },
    {
        no: '767',
        case: '767',
        date: '12/20',
        status: 'default',
        group: 'trp_A',
        info:
            '《案767》' +
            '<br>' +
            `
            40多歲印尼籍男性，12月3日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後至防疫旅館檢疫，迄今無症狀。12月18日檢疫期滿後由船務公司安排自費採檢後確診。
    
            `,
    },
    {
        no: '768',
        case: '768',
        date: '12/22',
        status: 'default',
        group: 'trp_A',
        info:
            '《案768》' +
            '<br>' +
            `
            菲律賓籍40多歲男性移工，12月7日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀；12月20日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '769',
        case: '769',
        date: '12/22',
        status: 'default',
        group: 'trp_A',
        info:
            '《案769》' +
            '<br>' +
            `
            30多歲女性移工，12月7日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀，12月20日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '770',
        case: '770',
        date: '12/22',
        status: 'default',
        group: 'trp_A',
        info:
            '《案770》' +
            '<br>' +
            `
            菲律賓籍30多歲男性漁工，11月8日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀。個案曾於11月21日檢疫期滿前採檢結果為陰性，11月23日檢疫期滿後，由仲介安排登船後未再下船。因原預訂於12月21日出海，12月20日由仲介安排自費採檢後確診。
    
            `,
    },
    {
        no: '771',
        case: '771',
        date: '12/22',
        status: 'case_s1',
        group: 'trp_A',
        info:
            '《案771》' +
            '<br>' +
            `
            為2020年12月20日公布之案765友人（30多歲女性），案765曾於12月7日至12日間與案771密切往來，故列為接觸者，同日由衛生單位安排採檢後確診。
    
            `,
    },
    {
        no: '772',
        case: '772',
        date: '12/23',
        status: 'default',
        group: 'trp_A',
        info:
            '《案772》' +
            '<br>' +
            `
            菲律賓籍30多歲女性移工，12月8日自菲律賓來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀；12月21日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '773',
        case: '773',
        date: '12/23',
        status: 'default',
        group: 'trp_A',
        info:
            '《案773》' +
            '<br>' +
            `
            菲律賓籍20多歲男性移工，12月8日自菲律賓來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀；12月21日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '774',
        case: '774',
        date: '12/23',
        status: 'default',
        group: 'trp_A',
        info:
            '《案774》' +
            '<br>' +
            `
            印尼籍30多歲男性漁工，12月3日自印尼來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後至防疫旅館進行居家檢疫，迄今無症狀；12月21日由仲介安排自費採檢後確診。
    
            `,
    },
    {
        no: '775',
        case: '775',
        date: '12/23',
        status: 'default',
        group: 'trp_A',
        info:
            '《案775》' +
            '<br>' +
            `
            印尼籍20多歲男性漁工，12月17日自印尼來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後至集中檢疫所檢疫；個案12月21日因有咳嗽、流鼻水症狀，由檢疫所人員協助安排就醫採檢後確診。
    
            `,
    },
    {
        no: '776',
        case: '776',
        date: '12/23',
        status: 'default',
        group: 'trp_A',
        info:
            '《案776》' +
            '<br>' +
            `
            印尼籍30多歲女性移工，11月27日自印尼來臺工作，持有登機前3日內核酸檢驗陰性報告，迄今無症狀。個案曾於11月27日配合印尼專案及12月10日檢疫期滿前採檢皆為陰性；21日經雇主安排自費採檢後確診。
    
            `,
    },
    {
        no: '777',
        case: '777',
        date: '12/23',
        status: 'default',
        group: 'trp_A',
        info:
            '《案777》' +
            '<br>' +
            `
            菲律賓籍20多歲女性移工，12月9日自菲律賓來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀；12月22日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '778',
        case: '778',
        date: '12/25',
        status: 'default',
        group: 'trp_A',
        info:
            '《案778》' +
            '<br>' +
            `
            菲律賓籍30多歲女性移工，2020年12月10日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀。個案12月23日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '779',
        case: '779',
        date: '12/25',
        status: 'default',
        group: 'trp_A',
        info:
            '《案779》' +
            '<br>' +
            `
            印尼籍40多歲女性，2020年12月16日來臺處理事務，持有登機前3日內核酸檢驗陰性報告，入境當天即有流鼻水症狀，因自覺症狀輕微故未通報機場檢疫人員。個案12月18日及19日陸續出現鼻塞、咳嗽症狀，自行服藥後症狀改善，因23日仍有咳嗽症狀通報，由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '780',
        case: '780',
        date: '12/25',
        status: 'default',
        group: 'trp_A',
        info:
            '《案780》' +
            '<br>' +
            `
            本國籍50多歲男性，2020年11月18日至巴基斯坦探親，12月14日起出現咳嗽症狀，曾於當地就醫。個案12月22日自巴基斯坦經杜拜轉機返國，23日入境，持有登機前3日內核酸檢驗陰性報告，因仍有症狀，於機場主動告知檢疫人員經採檢後確診。
    
            `,
    },
    {
        no: '781',
        case: '781',
        date: '12/25',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案781》' +
            '<br>' +
            `
            本國籍40多歲男性，長期於美國工作，2020年12月20日與家人一同返國，持有登機前3日內核酸檢驗陰性報告，入境後至住處居家檢疫。個案12月22日及23日陸續出現全身倦怠、流鼻水、發燒及喉嚨痛症狀，由衛生單位安排就醫採檢後日確診。
    
            `,
    },
    {
        no: '782',
        case: '782',
        date: '12/26',
        status: 'default',
        group: 'trp_A',
        info:
            '《案782》' +
            '<br>' +
            `
            為菲律賓籍20多歲男性船員，2020年12月9日與其他28名船員同行來臺，皆持有登機前3日內核酸檢驗陰性報告，入境後至防疫旅館檢疫，迄今無症狀。2名個案檢疫期滿後，於12月24日由公司安排專車前往醫院採檢後確診。
    
            `,
    },
    {
        no: '783',
        case: '783',
        date: '12/26',
        status: 'default',
        group: 'trp_A',
        info:
            '《案783》' +
            '<br>' +
            `
            為菲律賓籍20多歲男性船員，2020年12月9日與其他28名船員同行來臺，皆持有登機前3日內核酸檢驗陰性報告，入境後至防疫旅館檢疫，迄今無症狀。2名個案檢疫期滿後，於12月24日由公司安排專車前往醫院採檢後確診。
    
            `,
    },
    {
        no: '784',
        case: '784',
        date: '12/26',
        status: 'default',
        group: 'trp_A',
        info:
            '《案784》' +
            '<br>' +
            `
            印尼籍20多歲男性漁工，2020年12月10日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後至防疫旅館檢疫，迄今無症狀。個案於12月24日檢疫期滿，25日由仲介安排專車至醫院採檢後確診。
    
            `,
    },
    {
        no: '785',
        case: '785',
        date: '12/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案785》' +
            '<br>' +
            `
            印尼籍30多歲男性漁工，於2020年12月10日來臺工作，皆持有登機前3日內核酸檢驗陰性報告，入境後至防疫旅館檢疫，迄今無症狀。2名個案於12月24日檢疫期滿，25日分別由仲介安排專車至醫院採檢後確診。
    
            `,
    },
    {
        no: '786',
        case: '786',
        date: '12/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案786》' +
            '<br>' +
            `
            印尼籍20多歲男性漁工，於2020年12月10日來臺工作，皆持有登機前3日內核酸檢驗陰性報告，入境後至防疫旅館檢疫，迄今無症狀。2名個案於12月24日檢疫期滿，25日分別由仲介安排專車至醫院採檢後確診。
    
            `,
    },
    {
        no: '787',
        case: '787',
        date: '12/28',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案787》' +
            '<br>' +
            `
            英國籍20多歲男性，2020年12月20日來臺探親，持有登機前3日內核酸檢驗陰性報告，入境後至住處居家檢疫；12月25日出現扁桃腺腫痛及耳朵痛，26日通報後，由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '788',
        case: '788',
        date: '12/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案788》' +
            '<br>' +
            `
            菲律賓籍20多歲女性移工，12月13日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀；12月26日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '789',
        case: '789',
        date: '12/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案789》' +
            '<br>' +
            `
            印尼籍20多歲男性漁工，12月12日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後至防疫旅館檢疫，迄今無症狀；12月27日檢疫期滿，由仲介安排專車至醫院採檢後確診。
    
            `,
    },
    {
        no: '790',
        case: '790',
        date: '12/28',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案790》' +
            '<br>' +
            `
            英國籍20多歲男性，曾於8月29日在英國確診，12月9日至21日採檢4次核酸檢驗均為陰性；12月23日來臺處理事務，持有登機前3日內核酸檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀；12月27日因「英國專案」採檢後確診。
    
            `,
    },
    {
        no: '791',
        case: '791',
        date: '12/28',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案791》' +
            '<br>' +
            `
            本國籍20多歲男性，2020年2月至英國就學，12月22日返國，持有登機前3日內核酸檢驗陰性報告，入境後至住處居家檢疫；12月26日出現發燒、咳嗽、流鼻水及肌肉痠痛症狀，由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '792',
        case: '792',
        date: '12/28',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案792》' +
            '<br>' +
            `
            案792至794為昨（27）日英國班機127人當中驗出3名陽性，包括昨日發燒那1位旅客，另外2位則無症狀。
    
            `,
    },
    {
        no: '793',
        case: '793',
        date: '12/28',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案793》' +
            '<br>' +
            `
            案792至794為昨（27）日英國班機127人當中驗出3名陽性，包括昨日發燒那1位旅客，另外2位則無症狀。
    
            `,
    },
    {
        no: '794',
        case: '794',
        date: '12/28',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案794》' +
            '<br>' +
            `
            案792至794為昨（27）日英國班機127人當中驗出3名陽性，包括昨日發燒那1位旅客，另外2位則無症狀。
    
            `,
    },
    {
        no: '795',
        case: '795',
        date: '12/29',
        status: 'default',
        group: 'trp_A',
        info:
            '《案795》' +
            '<br>' +
            `
            菲律賓籍30多歲男性移工，2020年12月14日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀；個案12月27日接受檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '796',
        case: '796',
        date: '12/29',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案796》' +
            '<br>' +
            `
            印度籍30多歲男性，長期居住美國，因受聘來臺工作，12月13日與家人一同入境，持有登機前3日內核酸檢驗陰性報告，入境後至防疫旅館檢疫，迄今無症狀；個案檢疫期滿後，12月28日由公司安排至醫院採檢後確診。
    
            `,
    },
    {
        no: '797',
        case: '797',
        date: '12/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案797》' +
            '<br>' +
            `
            菲律賓籍20多歲女性移工，於12月15日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀。個案於12月28日接受檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '798',
        case: '798',
        date: '12/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案798》' +
            '<br>' +
            `
            菲律賓籍20多歲女性移工，於12月16日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀。個案於12月29日接受檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '799',
        case: '799',
        date: '12/31',
        status: 'case_s2',
        group: 'trp_EU',
        info:
            '《案799》' +
            '<br>' +
            `
            英國籍70多歲男性，2020年12月18日來臺探親，持有登機前3日內核酸檢驗陰性報告，入境後至住所居家檢疫；個案12月26日起有乾咳及活動後呼吸喘情形，29日因全身倦怠及喉嚨痛症狀，由衛生單位安排就醫採檢後確診。案例有心血管疾病病史，2020年12月26日發病，住院期間因病況持續不佳，陸續出現器官衰竭等症狀，於2021年2月4日死亡。
    
            `,
    },
    {
        no: '800',
        case: '800',
        date: '12/31',
        status: 'default',
        group: 'trp_A',
        info:
            '《案800》' +
            '<br>' +
            `
            印度籍20多歲男性，2020年12月15日來臺洽商，持有登機前3日內核酸檢驗陰性報告，入境後至防疫旅館進行居家檢疫，迄今無症狀；個案12月30日檢疫期滿後，由公司安排至醫院自費採檢後確診。
    
            `,
    },
    {
        no: '801',
        case: '801',
        date: '1/1',
        status: 'default',
        group: 'trp_A',
        info:
            '《案801》' +
            '<br>' +
            `
            與案802均為印尼籍20多歲男性漁工，同於2020年12月17日來臺工作，皆持有登機前3日內核酸檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀；於檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '802',
        case: '802',
        date: '1/1',
        status: 'default',
        group: 'trp_A',
        info:
            '《案802》' +
            '<br>' +
            `
            與案801均為印尼籍20多歲男性漁工，同於2020年12月17日來臺工作，皆持有登機前3日內核酸檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀；於檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '803',
        case: '803',
        date: '1/1',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案803》' +
            '<br>' +
            `
            本國籍20多歲男性，長期居住美國，2020年12月26日返國，持有登機前3日內核酸檢驗陰性報告，入境後於住處居家檢疫；12月29日出現發燒症狀，由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '804',
        case: '804',
        date: '1/2',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案804》' +
            '<br>' +
            `
            英國籍30多歲男性，2020年12月30日來臺工作，持有登機前3日內核酸檢驗陰性報告。個案入境後至集中檢疫所檢疫，自述12月28日起即有輕微鼻塞症狀，但自覺為英國天氣寒冷所致，12月31日進行採檢後確診。
    
            `,
    },
    {
        no: '805',
        case: '805',
        date: '1/2',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案805》' +
            '<br>' +
            `
            本國籍20多歲女性，長期於美國就學，2020年12月30日入境，持有登機前3日內核酸檢驗陰性報告。個案入境後入住防疫旅宿進行居家檢疫，當日晚間出現喉嚨不適症狀，12月31日由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '806',
        case: '806',
        date: '1/2',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案806》' +
            '<br>' +
            `
            美國籍40多歲女性，2020年12月24日來臺工作，入境時無不適症狀，持有登機前3日內核酸檢驗陰性報告。個案於12月29日居家檢疫期間出現全身倦怠、嗅覺異常及腹瀉等症狀，12月30日由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '807',
        case: '807',
        date: '1/2',
        status: 'default',
        group: 'trp_A',
        info:
            '《案807》' +
            '<br>' +
            `
            與案808均為菲律賓籍30多歲女性移工，2020年12月18日來臺，且均持有登機前3日內核酸檢驗陰性報告。入境後前往集中檢疫所進行檢疫，入境迄今均無症狀，12月31日檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '808',
        case: '808',
        date: '1/2',
        status: 'default',
        group: 'trp_A',
        info:
            '《案808》' +
            '<br>' +
            `
            與案807均為菲律賓籍30多歲女性移工，2020年12月18日來臺，且均持有登機前3日內核酸檢驗陰性報告。入境後前往集中檢疫所進行檢疫，入境迄今均無症狀，12月31日檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '809',
        case: '809',
        date: '1/2',
        status: 'default',
        group: 'trp_A',
        info:
            '《案809》' +
            '<br>' +
            `
            印尼籍20多歲男性船員，2020年12月17日來臺，持有登機前3日內核酸檢驗陰性報告。個案入境後入住防疫旅宿進行居家檢疫，入境迄今均無症狀，於今（2021）年1月1日進行自費採檢後確診。
    
            `,
    },
    {
        no: '810',
        case: '810',
        date: '1/3',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案810》' +
            '<br>' +
            `
            本國籍20多歲女性，2020年8月至英國就學，12月30日於當地登機時出現喉嚨癢症狀，31日返國，持有登機前3日內檢驗陰性報告，入境後主動告知有症狀；於集中檢疫所時，因有發燒症狀再次採檢，兩次採檢結果皆為陽性。
    
            `,
    },
    {
        no: '811',
        case: '811',
        date: '1/3',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案811》' +
            '<br>' +
            `
            本國籍20多歲女性，2020年9月至德國就學，12月28日返國，持有登機前3日內檢驗陰性報告，入境後至住處居家檢疫；個案12月31日出現喉嚨痛症狀，1月1日由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '812',
        case: '812',
        date: '1/3',
        status: 'default',
        group: 'tw_hos',
        info:
            '《案812》' +
            '<br>' +
            `
            本國籍60多歲男性，2020年10月至美國探親，12月27日返國，持有登機前3日內檢驗陰性報告，入境後至住處居家檢疫；個案12月29日至31日陸續出現全身痠痛、發燒及咳嗽症狀，1月1日由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '813',
        case: '813',
        date: '1/3',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案813》' +
            '<br>' +
            `
            史瓦帝尼籍30多歲男性，2020年12月24日來臺工作，持有登機前3日內檢驗陰性報告，入境後至住處居家檢疫；個案12月31日出現頭痛、流鼻水及鼻塞症狀，1月1日由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '814',
        case: '814',
        date: '1/4',
        status: 'default',
        group: 'trp_A',
        info:
            '《案814》' +
            '<br>' +
            `
            菲律賓籍30多歲女性移工，2020年12月10日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀；檢疫期滿後由仲介安排至宿舍自主健康管理，期滿後於由雇主安排至醫院自費採檢後確診。
    
            `,
    },
    {
        no: '815',
        case: '815',
        date: '1/4',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案815》' +
            '<br>' +
            `
            本國籍20多歲女性，2020年2月至多明尼加訪友，今（2021）年1月1日返國，迄今無症狀，因入境時提供之檢驗陰性報告不符規定，於機場自費採檢後確診。
    
            `,
    },
    {
        no: '816',
        case: '816',
        date: '1/4',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案816》' +
            '<br>' +
            `
            本國籍40多歲女性，長期於法國工作，2020年10月初曾在當地社區採檢站採檢確診，但未就醫治療。個案於今（2021）年1月1日獨自返臺，持有登機前3日內核酸檢驗陰性報告，入境後至住處居家檢疫，迄今無症狀；於1月2日申請外出奔喪，由衛生單位安排至醫院自費採檢後確診。
    
            `,
    },
    {
        no: '817',
        case: '817',
        date: '1/5',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案817》' +
            '<br>' +
            `
            本國籍70多歲女性，居住美國，今（2021）年1月1日有喉嚨不適及輕微咳嗽症狀，1月3日與一名家人一同返國，持有登機前3日內檢驗陰性報告，入境後主動告知有不適症狀，於機場採檢後確診。
    
            `,
    },
    {
        no: '818',
        case: '818',
        date: '1/5',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案818》' +
            '<br>' +
            `
            本國籍20多歲女性，2020年12月上旬曾有流鼻水及鼻塞症狀，分別於12月15日、26日及29日在美國當地採檢，結果皆為陰性；個案今（2021）年1月2日出現嗅覺異常，1月3日與一名家人一同返臺，持有登機前3日內檢驗陰性報告，因出現味覺異常，入境時主動告知檢疫人員，於機場採檢後確診。
    
            `,
    },
    {
        no: '819',
        case: '819',
        date: '1/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案819》' +
            '<br>' +
            `
            印尼籍30多歲男性漁工，2020年12月22日來臺工作，持有登機前3日內核酸檢驗陰性報告。個案入境後至集中檢疫所檢疫，迄今無症狀，今（2021）年1月4日接受檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '820',
        case: '820',
        date: '1/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案820》' +
            '<br>' +
            `
            菲律賓籍20多歲男性移工，2020年12月13日來臺工作，持有登機前3日內核酸檢驗陰性報告。個案入境後至集中檢疫所檢疫，迄今無症狀，12月26日檢疫期滿前採檢結果為陰性，今（2021）年1月4日自主健康管理期滿後進行自費採檢後確診。
    
            `,
    },
    {
        no: '821',
        case: '821',
        date: '1/7',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案821》' +
            '<br>' +
            `
            本國籍50多歲男性，長期在美國工作，今（2021）年1月5日返國，持有搭機前3日內檢驗陰性報告，因入境時主動告知1月4日起有咳嗽症狀，於機場接受採檢後確診。
    
            `,
    },
    {
        no: '822',
        case: '822',
        date: '1/7',
        status: 'default',
        group: 'trp_A',
        info:
            '《案822》' +
            '<br>' +
            `
            菲律賓籍30多歲女性移工，於2020年12月23日來臺，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，迄今均無症狀。今（2021）年1月5日接受檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '823',
        case: '823',
        date: '1/7',
        status: 'default',
        group: 'trp_A',
        info:
            '《案823》' +
            '<br>' +
            `
            印尼籍30多歲男性漁工，於2020年12月24日來臺，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，迄今均無症狀。今（2021）年1月6日接受檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '824',
        case: '824',
        date: '1/8',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案824》' +
            '<br>' +
            `
            本國籍70多歲男性，於奈及利亞經商，2020年12月24日出現發燒、呼吸困難、虛弱症狀，27日因病況加重，至當地醫院就醫住院，並診斷有肺炎情形，經2次COVID-19採檢皆為陰性；個案因有返臺就醫需求，提出國際緊急醫療專機申請並獲同意，於今（2021）年1月5日入境後即收治住院隔離。
    
            `,
    },
    {
        no: '825',
        case: '825',
        date: '1/8',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案825》' +
            '<br>' +
            `
            埃及籍未滿10歲女童，因家人在臺工作，經常往返埃及與臺灣兩地個案無症狀，今（2021）年1月5日與其他3名家人一同來臺，因個案較為年幼，無法於埃及當地進行COVID-19檢驗，故入境時於機場自費採檢後確診。
    
            `,
    },
    {
        no: '826',
        case: '826',
        date: '1/8',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案826》' +
            '<br>' +
            `
            本國籍20多歲女性，2020年8月至美國就學，今年1月1日起陸續出現咳嗽、喉嚨痛及流鼻水等症狀，因1月2日於當地進行核酸檢驗結果為陰性，故未就醫；個案於1月6日返國，入境時主動通報有症狀，於機場採檢後確診。
    
            `,
    },
    {
        no: '827',
        case: '827',
        date: '1/9',
        status: 'default',
        group: 'trp_A',
        info:
            '《案827》' +
            '<br>' +
            `
            印尼籍30多歲男性漁工，2020年12月23日來臺，持有搭機前3日內檢驗陰性報告。個案入境後入住防疫旅宿進行居家檢疫，入境迄今均無症狀，檢疫期滿後於今（2021）年1月7日進行自費採檢後確診。
    
            `,
    },
    {
        no: '828',
        case: '828',
        date: '1/9',
        status: 'default',
        group: 'trp_A',
        info:
            '《案828》' +
            '<br>' +
            `
            菲律賓籍20多歲女性移工，2020年12月13日來臺，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，迄今均無症狀；於12月27日接受檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '829',
        case: '829',
        date: '1/9',
        status: 'default',
        group: 'trp_A',
        info:
            '《案829》' +
            '<br>' +
            `
            菲律賓籍30多歲男性移工，2020年12月18日來臺，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，迄今均無症狀；於12月31日接受檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '830',
        case: '830',
        date: '1/11',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案830》' +
            '<br>' +
            `
            埃及籍10多歲男性，為案825之親屬，同於1月5日來臺，均持有搭機前3日內檢驗陰性報告，因案825確診，列為居家隔離對象，且皆於1月7日出現頭暈、流鼻水、喉嚨痛等症狀，經衛生局安排採檢後確診。
    
            `,
    },
    {
        no: '831',
        case: '831',
        date: '1/11',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案831》' +
            '<br>' +
            `
            埃及籍10多歲女性，為案825之親屬，同於1月5日來臺，均持有搭機前3日內檢驗陰性報告，因案825確診，列為居家隔離對象，且皆於1月7日出現頭暈、流鼻水、喉嚨痛等症狀，經衛生局安排採檢後確診。
    
            `,
    },
    {
        no: '832',
        case: '832',
        date: '1/11',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案832》' +
            '<br>' +
            `
            埃及籍30多歲女性，為案825之親屬，同於1月5日來臺，均持有搭機前3日內檢驗陰性報告，因案825確診，列為居家隔離對象，且皆於1月7日出現頭暈、流鼻水、喉嚨痛等症狀，經衛生局安排採檢後確診。
    
            `,
    },
    {
        no: '833',
        case: '833',
        date: '1/11',
        status: 'default',
        group: 'trp_A',
        info:
            '《案833》' +
            '<br>' +
            `
            菲律賓籍40多歲女性移工，於2020年12月20日來臺，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所進行檢疫，迄今無症狀；今（2021）年1月2日接受檢疫期滿前採檢，結果為陰性；後至公司安排單人宿舍進行自主健康管理，1月8日由仲介安排自費採檢後確診。
    
            `,
    },
    {
        no: '834',
        case: '834',
        date: '1/11',
        status: 'default',
        group: 'trp_A',
        info:
            '《案834》' +
            '<br>' +
            `
            印尼籍20多歲男性漁工，於2020年12月25日來臺，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀；於今（2021）年1月7日接受檢疫期滿前採檢，結果為陰性；1月9日由仲介安排自費採檢後確診。
    
            `,
    },
    {
        no: '835',
        case: '835',
        date: '1/11',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案835》' +
            '<br>' +
            `
            本國籍30多歲男性，2020年11月下旬赴美探親，今年1月3日返臺，持有搭機前3日內檢驗陰性報告；1月4日出現短暫發燒、8日出現嗅、味覺異常，由衛生局安排就醫採檢後確診。
    
            `,
    },
    {
        no: '836',
        case: '836',
        date: '1/12',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案836》' +
            '<br>' +
            `
            本國籍60多歲女性，長期居住美國，今（2021）年1月5日返國探親，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館居家檢疫；個案1月10日出現咳嗽、流鼻水及有痰症狀，由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '837',
        case: '837',
        date: '1/12',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案837》' +
            '<br>' +
            `
            英國籍30多歲男性，2020年12月29日來臺洽公，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，12月30日曾接受「英國專案」採檢，結果為陰性，迄今無症狀；個案今年1月11日接受檢疫期滿前採檢確診。
    
            `,
    },
    {
        no: '838',
        case: '838',
        date: '1/12',
        status: 'case_s1',
        group: 'tw_hos',
        info:
            '《案838》' +
            '<br>' +
            `
            本國籍30多歲男性，為北部某醫院醫師，曾照顧COVID-19確診個案，1月8日起陸續出現咳嗽、發燒症狀，1月10日就醫採檢，11日檢出陽性 。
    
            `,
    },
    {
        no: '839',
        case: '839',
        date: '1/12',
        status: 'case_s1',
        group: 'tw_hos',
        info:
            '《案839》' +
            '<br>' +
            `
            本國籍20多歲女性，為案838同住接觸者，亦為上述醫院之護理師，但未接觸或照顧COVID-19確診個案，1月9日起陸續出現咳嗽、發燒症狀，11日進行接觸者採檢並檢出陽性。
    
            `,
    },
    {
        no: '840',
        case: '840',
        date: '1/13',
        status: 'default',
        group: 'trp_A',
        info:
            '《案840》' +
            '<br>' +
            `
            印度籍30多歲男性，2020年12月18日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館居家檢疫，迄今無症狀；個案今（2021）年1月2日檢疫期滿後，於住處自主健康管理至1月8日，因公司要求，1月11日至醫院自費採檢後確診。
    
            `,
    },
    {
        no: '841',
        case: '841',
        date: '1/13',
        status: 'default',
        group: 'trp_A',
        info:
            '《案841》' +
            '<br>' +
            `
            案841、案842、案843均為印尼籍男性漁工，年齡介於20多歲至30多歲，分別於2020年12月27日及12月30日來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後分別至防疫旅館與集中檢疫所檢疫，迄今均無症狀。於今年1月11日檢疫期滿後，搭乘專車至醫院自費採檢後確診。
    
            `,
    },
    {
        no: '842',
        case: '842',
        date: '1/13',
        status: 'default',
        group: 'trp_A',
        info:
            '《案842》' +
            '<br>' +
            `
            案841、案842、案843均為印尼籍男性漁工，年齡介於20多歲至30多歲，分別於2020年12月27日及12月30日來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後分別至防疫旅館與集中檢疫所檢疫，迄今均無症狀。於今年1月11日檢疫期滿後，搭乘專車至醫院自費採檢後確診。
    
            `,
    },
    {
        no: '843',
        case: '843',
        date: '1/13',
        status: 'default',
        group: 'trp_A',
        info:
            '《案843》' +
            '<br>' +
            `
            案841、案842、案843均為印尼籍男性漁工，年齡介於20多歲至30多歲，分別於2020年12月27日及12月30日來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後分別至防疫旅館與集中檢疫所檢疫，迄今均無症狀。於1月12日進行檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '844',
        case: '844',
        date: '1/15',
        status: 'default',
        group: 'trp_A',
        info:
            '《案844》' +
            '<br>' +
            `
            印尼籍20多歲男性漁工，2020年12月31日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀。於今年1月13日接受檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '845',
        case: '845',
        date: '1/16',
        status: 'default',
        group: 'trp_A',
        info:
            '《案845》' +
            '<br>' +
            `
            菲律賓籍30多歲男性移工，2020年12月24日來臺工作，持有登機前3日內核酸檢驗陰性報告。個案入境後至集中檢疫所檢疫，迄今無症狀，今年1月6日檢疫期滿前採檢結果為陰性，1月14日自主健康管理期滿後進行自費採檢後確診。
    
            `,
    },
    {
        no: '846',
        case: '846',
        date: '1/16',
        status: 'default',
        group: 'trp_A',
        info:
            '《案846》' +
            '<br>' +
            `
            菲律賓籍20多歲男性移工，2020年12月24日來臺工作，持有登機前3日內核酸檢驗陰性報告。個案入境後至集中檢疫所檢疫，迄今無症狀，今年1月6日檢疫期滿前採檢結果為陰性，1月14日自主健康管理期滿後進行自費採檢後確診。
    
            `,
    },
    {
        no: '847',
        case: '847',
        date: '1/16',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案847》' +
            '<br>' +
            `
            俄羅斯籍50多歲男性，今年1月5日來臺工作，入境時無症狀，持有登機前3日內核酸檢驗陰性報告。個案入境後入住防疫旅宿進行居家檢疫，1月13日出現嗅覺異常，由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '848',
        case: '848',
        date: '1/16',
        status: 'default',
        group: 'trp_A',
        info:
            '《案848》' +
            '<br>' +
            `
            印尼籍20多歲男性漁工，2020年12月27日來臺工作，迄今無症狀，持有登機前3日內核酸檢驗陰性報告。個案入境後入住防疫旅宿進行居家檢疫，今年1月11日檢疫期滿後，由仲介安排搭乘專車至醫院自費採檢，該次採檢共6人同行，2人陽性（為日前公布之案841及842），餘4人陰性。1月14日仲介安排4人至醫院進行第二次自費採檢後確診。
    
            `,
    },
    {
        no: '849',
        case: '849',
        date: '1/16',
        status: 'default',
        group: 'trp_A',
        info:
            '《案849》' +
            '<br>' +
            `
            菲律賓籍40多歲男性漁工，2020年12月30日來臺工作，迄今無症狀，持有登機前3日內核酸檢驗陰性報告。個案入境後入住防疫旅宿進行居家檢疫，今年1月14日檢疫期滿後，由仲介安排搭乘專車至醫院自費採檢後確診。
    
            `,
    },
    {
        no: '850',
        case: '850',
        date: '1/16',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案850》' +
            '<br>' +
            `
            本國籍40多歲女性，為案817一同自美國返臺之家人，持有登機前3日內檢驗陰性報告，入境後主動告知有不適症狀，於機場採檢，採檢結果為陰性。個案於1月5日再次採檢，檢驗結果為陰性，後於居家隔離期間陸續出現咳嗽、味覺異常等症狀，1月13日由衛生單位安排就醫採檢後確診。
    
            `,
    },
    {
        no: '851',
        case: '851',
        date: '1/16',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案851》' +
            '<br>' +
            `
            本國籍30多歲男性，長期於南非工作，2020年12月16日返臺，持有登機前3日內檢驗陰性報告。個案入境後於家中進行居家檢疫，檢疫期間無不適症狀，自述1月6日自主健康管理期間有腹瀉症狀。個案於1月14日至醫院自費檢驗後確診。
    
            `,
    },
    {
        no: '852',
        case: '852',
        date: '1/16',
        status: 'case_s1',
        group: 'tw_hos',
        info:
            '《案852》' +
            '<br>' +
            `
                本國籍20多歲女性，與案838同醫院工作之護理師，曾與案838於1月10日工作時短暫接觸。案852於1月11日採檢結果陰性。期間除上班外皆待在家中，未出外活動。1月14日起出現輕微咳嗽、喉嚨癢症狀，15日晚間至診所看診，因出現發燒症狀回醫院進行採檢後確診。
    
            `,
    },
    {
        no: '853',
        case: '853',
        date: '1/17',
        status: 'default',
        group: 'trp_A',
        info:
            '《案853》' +
            '<br>' +
            `
            印尼籍20多歲男性漁工，皆於今（2021）年1月3日來臺工作，均持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀；2名個案於1月16日接受檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '854',
        case: '854',
        date: '1/17',
        status: 'default',
        group: 'trp_A',
        info:
            '《案854》' +
            '<br>' +
            `
            印尼籍20多歲男性漁工，皆於今（2021）年1月3日來臺工作，均持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀；2名個案於1月16日接受檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '855',
        case: '855',
        date: '1/17',
        status: 'default',
        group: 'trp_A',
        info:
            '《案855》' +
            '<br>' +
            `
            印尼籍20多歲男性漁工，2020年12月31日來臺工作，持有搭機前3日內檢驗陰性報告，入境後由仲介公司安排專車至防疫旅館居家檢疫；今年1月15日檢疫期滿後搭乘專車至醫院自費採檢後確診。
    
            `,
    },
    {
        no: '856',
        case: '856',
        date: '1/17',
        status: 'case_s1',
        group: 'tw_hos',
        info:
            '《案856》' +
            '<br>' +
            `
            本國籍30多歲男性，與案838為同一醫院之醫師，1月10日工作時曾與案838接觸，1月11日採檢結果為陰性，因應案852確診，衛生單位於昨（16）日陸續針對案838、839匡列之265名醫院人員進行二採，其中案856檢出陽性確診。
    
            `,
    },
    {
        no: '857',
        case: '857',
        date: '1/18',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案857》' +
            '<br>' +
            `
            與案858、859為一家人，為本國籍40多歲，長期居住美國，今（2021）年1月4日一同返臺，均持有登機前3日內檢驗陰性報告，入境後至住處居家檢疫。於1月10日出現咳嗽、全身倦怠症狀，14日出現發燒，由衛生單位安排就醫採檢後確診。
。
    
            `,
    },
    {
        no: '858',
        case: '858',
        date: '1/18',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案858》' +
            '<br>' +
            `
            與案857、859為一家人，為未滿10歲男童，長期居住美國，今（2021）年1月4日一同返臺，均持有登機前3日內檢驗陰性報告，入境後至住處居家檢疫。迄今無症狀，由衛生單位安排就醫採檢後確診。
。
    
            `,
    },
    {
        no: '859',
        case: '859',
        date: '1/18',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案859》' +
            '<br>' +
            `
            與案857、858為一家人，為未滿10歲女童，長期居住美國，今（2021）年1月4日一同返臺，均持有登機前3日內檢驗陰性報告，入境後至住處居家檢疫。迄今無症狀，由衛生單位安排就醫採檢後確診。
。
    
            `,
    },
    {
        no: '860',
        case: '860',
        date: '1/18',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案860》' +
            '<br>' +
            `
            瑞典籍50多歲男性，於臺灣工作，2020年12月3日赴英國洽公，今年1月3日返臺，持有登機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫；1月4日接受「英國專案」採檢，結果為陰性；個案曾於1月9日出現頭痛症狀，1月16日接受檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '861',
        case: '861',
        date: '1/18',
        status: 'default',
        group: 'trp_A',
        info:
            '《案861》' +
            '<br>' +
            `
            菲律賓籍10多歲女性，2020年12月31日來臺就學，持有登機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀。個案檢疫期滿後，於今年1月15日搭乘專車至醫院自費採檢後確診。
    
            `,
    },
    {
        no: '862',
        case: '862',
        date: '1/18',
        status: 'default',
        group: 'trp_A',
        info:
            '《案862》' +
            '<br>' +
            `
            緬甸籍40多歲船員，2020年12月27日來臺工作，持有登機前3日內檢驗陰性報告，入境後入住防疫旅宿進行居家檢疫，迄今無症狀。個案今年1月14日自主健康管理期滿後進行自費採檢後確診。
    
            `,
    },
    {
        no: '863',
        case: '863',
        date: '1/18',
        status: 'case_s1',
        group: 'tw_hos',
        info:
            '《案863》' +
            '<br>' +
            `
            為案838等人之同醫院護理師，1月12日曾接受採檢結果為陰性，1月14日、15日陸續出現鼻塞及咳嗽症狀，因匡列為案856接觸者，於昨（17）日再次採檢後確診。
    
            `,
    },
    {
        no: '864',
        case: '864',
        date: '1/19',
        status: 'case_s1',
        group: 'tw_hos',
        info:
            '《案864》' +
            '<br>' +
            `
            為案863之同住家人，50多歲男性，有咳嗽、流鼻水症狀，於昨（18）日進行採檢後確診。
    
            `,
    },
    {
        no: '865',
        case: '865',
        date: '1/19',
        status: 'case_s1',
        group: 'tw_hos',
        info:
            '《案865》' +
            '<br>' +
            `
            為案863之同住家人，20多歲女性，有咳嗽、流鼻水症狀，於昨（18）日進行採檢後確診。
    
            `,
    },
    {
        no: '866',
        case: '866',
        date: '1/19',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案866》' +
            '<br>' +
            `
            本國籍50多歲女性，2002年10月12日前往美國探親，今（2021）年1月17日返臺，持有登機前3日內檢驗陰性報告，入境時無不適症狀。個案入境時主動通報曾在美國接觸COVID-19確診個案，且曾出現疑似症狀，於機場採檢後確診。
    
            `,
    },
    {
        no: '867',
        case: '867',
        date: '1/19',
        status: 'default',
        group: 'trp_A',
        info:
            '《案867》' +
            '<br>' +
            `
            印尼籍20多歲男性漁工，今年1月5日來臺工作，持有登機前3日內核酸檢驗陰性報告，入境時無不適症狀。個案入境後至集中檢疫所檢疫，1月18日出現咳嗽症狀，同日接受檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '868',
        case: '868',
        date: '1/19',
        status: 'case_s1',
        group: 'tw_hos',
        info:
            '《案868》' +
            '<br>' +
            `
            30多歲女性護理人員，與案863於同一病房工作，曾於1月12日、15日及17日接受採檢，結果皆為陰性，1月18日因發燒、喉嚨癢及頭痛症狀，至醫院再次採檢後確診。
    
            `,
    },
    {
        no: '869',
        case: '869',
        date: '1/19',
        status: 'case_s1',
        group: 'tw_hos',
        info:
            '《案869》' +
            '<br>' +
            `
            越南籍40多歲女性，為住院病患之看護，於雇主住院期間，均在醫院照顧雇主，1月7日案838曾至病房為其雇主治療。個案於1月13日雇主出院後，持續於雇主家中照顧雇主，未外出且無其他人來訪；個案1月16日起陸續出現痠痛、全身倦怠及咳嗽症狀，18日由雇主家人帶至醫院採檢。
    
            `,
    },
    {
        no: '870',
        case: '870',
        date: '1/20',
        status: 'case_s1',
        group: 'tw_hos',
        info:
            '《案870》' +
            '<br>' +
            `
            曾與案839同住，1月11日匡列為案839接觸者後進行居家隔離，1月12日採檢結果為陰性；個案1月18日出現發燒症狀，由衛生單位安排就醫並再次採檢後確診。
    
            `,
    },
    {
        no: '871',
        case: '871',
        date: '1/20',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案871》' +
            '<br>' +
            `
            本國籍20多歲女性，2019年12月前往西班牙訪友，今（2021）年1月8日返臺，持有搭機前3日內檢驗陰性報告。個案於1月17日出現咳嗽、喉嚨痛及嗅覺異常症狀，18日由衛生單位安排至醫院採檢後確診。
    
            `,
    },
    {
        no: '872',
        case: '872',
        date: '1/21',
        status: 'default',
        group: 'trp_A',
        info:
            '《案872》' +
            '<br>' +
            `
            菲律賓籍30多歲男性漁工，於今（2021）年1月6日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀；於1月19日接受檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '873',
        case: '873',
        date: '1/21',
        status: 'default',
        group: 'trp_A',
        info:
            '《案873》' +
            '<br>' +
            `
            菲律賓籍20多歲女性移工，於今（2021）年1月7日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀；於1月20日接受檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '874',
        case: '874',
        date: '1/21',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案874》' +
            '<br>' +
            `
            丹麥籍30多歲男性，2020年12月30日來臺洽公，持有搭機前3天內檢驗陰性報告，入境後至防疫旅館居家檢疫，迄今無症狀；個案於1月14日檢疫期滿，因預定出境，於1月20日至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '875',
        case: '875',
        date: '1/22',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案875》' +
            '<br>' +
            `
            喀麥隆籍30多歲男性，於臺灣工作，2020年12月上旬曾返回喀麥隆，今年1月5日再次來臺，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館檢疫，迄今無症狀。因預定返回職場工作，於1月20日檢疫期滿後自費採檢後確診。
        
            `,
    },
    {
        no: '876',
        case: '876',
        date: '1/22',
        status: 'default',
        group: 'trp_A',
        info:
            '《案876》' +
            '<br>' +
            `
            本國籍20多歲男性，2020年8月至印尼工作，今年1月1日起陸續出現喉嚨痛、嗅味覺異常症狀，僅自行服藥未就醫；個案於1月19日返臺，持有搭機前3日內檢驗陰性報告，入境時主動告知有症狀，於機場接受採檢後確診。
        
            `,
    },
    {
        no: '877',
        case: '877',
        date: '1/22',
        status: 'default',
        group: 'trp_A',
        info:
            '《案877》' +
            '<br>' +
            `
            印尼籍男性漁工，年齡約20至30多歲，今年1月7日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，迄今均無症狀；於1月20日接受檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '878',
        case: '878',
        date: '1/22',
        status: 'default',
        group: 'trp_A',
        info:
            '《案878》' +
            '<br>' +
            `
            菲律賓男性漁工，年齡約20至30多歲，今年1月7日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，迄今均無症狀；於1月20日接受檢疫期滿前採檢後確診。
    
            `,
    },
    {
        no: '879',
        case: '879',
        date: '1/22',
        status: 'default',
        group: 'trp_A',
        info:
            '《案879》' +
            '<br>' +
            `
            印尼籍男性漁工，年齡約20至30多歲，今年1月7日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，迄今均無症狀；於1月20日接受檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '880',
        case: '880',
        date: '1/22',
        status: 'default',
        group: 'trp_A',
        info:
            '《案880》' +
            '<br>' +
            `
            印尼籍男性漁工，年齡約20至30多歲，今年1月7日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，迄今均無症狀；於1月20日接受檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '881',
        case: '881',
        date: '1/22',
        status: 'case_s1',
        group: 'tw_hos',
        info:
            '《案881》' +
            '<br>' +
            `
            由案852負責照護之本國籍90多歲男性，今（2021）年1月上旬因其他疾病住院，1月11日採檢結果為陰性，於16日匡列為接觸者並居家隔離，21日因其他病症由衛生單位安排就醫，經檢查發現有發燒、肺浸潤等情形，經採檢後確診。
        
            `,
    },
    {
        no: '882',
        case: '882',
        date: '1/22',
        status: 'case_s1',
        group: 'tw_hos',
        info:
            '《案882》' +
            '<br>' +
            `
            本國籍60多歲女性，與案881之同住家人。案881住院至出院返家期間負責煮食及送餐，迄今無症狀。因爲案881接觸者而進行採檢後檢驗出陽性確診。
        
            `,
    },
    {
        no: '883',
        case: '883',
        date: '1/23',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案883》' +
            '<br>' +
            `
            英國籍10多歲男性，2020年12月28日曾於當地確診，並自我隔離10天，今（2021）年1月20日來臺，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀。個案今年1月21日接受「英國專案」採檢後確診。
        
            `,
    },
    {
        no: '884',
        case: '884',
        date: '1/23',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案884》' +
            '<br>' +
            `
            美國籍20多歲女性學生，去年12月31日搭機來臺進行語言文化交流，並於今年1月1日入境，持有12月24日採檢陰性報告，入境後至防疫旅館檢疫，迄今無症狀。個案居家檢疫期滿後，於1月20日進行自費採檢後確診。
        
            `,
    },
    {
        no: '885',
        case: '885',
        date: '1/23',
        status: 'case_s1',
        group: 'tw_hos',
        info:
            '《案885》' +
            '<br>' +
            `
            本國籍50多歲女性，為案881同住家人及主要照顧者之一，先前已列為案852之接觸者，並曾於1月11日及1月17日採檢，結果皆為陰性，續於家中進行居家隔離；昨（22）日因案881、882確診，再次進行接觸者採檢後確診。
        
            `,
    },
    {
        no: '886',
        case: '886',
        date: '1/24',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案886》' +
            '<br>' +
            `
            本國籍40多歲男性，2020年1月至南非工作，今（2021）年1月7日返臺，持有搭機前3日內檢驗陰性報告，入境後至住處居家檢疫；個案檢疫期滿後，於1月22日自費採檢後確診。
        
            `,
    },
    {
        no: '887',
        case: '887',
        date: '1/24',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案887》' +
            '<br>' +
            `
            本國籍50多歲女性，長期居住美國，今年1月20日返臺，持有搭機前3日內檢驗陰性報告，入境後至住處居家檢疫；個案於1月22日出現發燒、肌肉痠痛、全身倦怠等症狀，由衛生單位安排就醫採檢後確診。
        
            `,
    },
    {
        no: '888',
        case: '888',
        date: '1/24',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案888》' +
            '<br>' +
            `
            美國籍30多歲男性，在臺工作，2020年11月下旬曾返回美國洽公，今（2020）年1月19日再次來臺，持有搭機前3日內檢驗陰性報告。個案於1月22日出現發燒、頭痛症狀，由衛生單位安排就醫採檢後確診。
        
            `,
    },
    {
        no: '889',
        case: '889',
        date: '1/24',
        status: 'case_s2',
        group: 'tw_hos',
        info:
            '《案889》' +
            '<br>' +
            `
            本國籍60多歲男性，今（2021）年1月8日至11日期間因其他疾病住院，住院期間由案890陪病，1月11日出院；案889於1月16日至18日期間有出疹，就醫後症狀改善，20日起出現發冷、疲倦等症狀，23日因其他疾病就醫，因量測體溫發燒即隔離採檢後確診。個案於入院後病況加劇，使用呼吸器及葉克膜治療，2月22日因檢驗條件符合規定而解除隔離，惟因其他疾病持續住院治療，3月17日移除葉克膜後仍持續使用呼吸器，4月8日個案陸續出現呼吸喘、血壓下降及嚴重心律不整，次日經急救仍因肺炎併敗血性休克不幸病逝
        
            `,
    },
    {
        no: '890',
        case: '890',
        date: '1/24',
        status: 'case_s1',
        group: 'tw_hos',
        info:
            '《案890》' +
            '<br>' +
            `
            本國籍60多歲女性，為案889同住家人，曾於1月20日出現喉嚨痛，22日出現發燒，為案889密切接觸者，經衛生單位安排採檢後確診。
        
            `,
    },
    {
        no: '891',
        case: '891',
        date: '1/26',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案891》' +
            '<br>' +
            `
            本國籍40多歲男性，2020年11月至墨西哥出差，今年1月3日陸續出現鼻塞、喉嚨痛及咳嗽症狀，1月6日檢出COVID-19陽性，1月7日至23日分別於當地飯店及醫院隔離；個案因有返臺就醫需求，提出國際緊急醫療專機申請並獲同意，1月24日抵臺後收治住院隔離，經採檢後確診。
        
            `,
    },
    {
        no: '892',
        case: '892',
        date: '1/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案892》' +
            '<br>' +
            `
            菲律賓籍30多歲男性移工，今年1月6日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀；個案1月19日檢疫期滿前採檢結果為陰性，檢疫期滿後至宿舍自主健康管理，因公司要求，1月25日至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '893',
        case: '893',
        date: '1/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案893》' +
            '<br>' +
            `
            緬甸籍30多歲男性船員，今年1月3日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館檢疫，迄今無症狀；個案1月18日檢疫期滿後，接續至其他處所自主健康管理，因預計出海工作，1月25日搭乘專車至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '894',
        case: '894',
        date: '1/27',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案894》' +
            '<br>' +
            `
            本國籍40多歲女性，2019年10月至美國工作，今年1月17日返國，持有搭機前3日內檢驗陰性報告，入境後至住處居家檢疫；個案1月19日出現咳嗽、流鼻水及喉嚨痛症狀，自行服藥後症狀改善，因1月24日有腹瀉及發燒症狀，25日主動通報後，由衛生單位安排就醫採檢後確診。
        
            `,
    },
    {
        no: '895',
        case: '895',
        date: '1/28',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案895》' +
            '<br>' +
            `
            本國籍20多歲男性，去年10月前往美國，今（2021）年1月24日返國，持有搭機前3日內檢驗陰性報告，入境後至住處居家檢疫；個案1月25日出現嗅味覺異常症狀，由衛生單位安排就醫採檢後確診。
        
            `,
    },
    {
        no: '896',
        case: '896',
        date: '1/28',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案896》' +
            '<br>' +
            `
            本國籍30多歲男性，去年8月至德國就學，今（2021）年1月22日返國，持有搭機前3日內檢驗陰性報告，入境後至住處居家檢疫；個案1月25日及26日陸續出現頭痛、發燒、流鼻水症狀，由衛生單位安排就醫採檢後確診。
        
            `,
    },
    {
        no: '897',
        case: '897',
        date: '1/29',
        status: 'default',
        group: 'trp_A',
        info:
            '《案897》' +
            '<br>' +
            `
            菲律賓籍30多歲女性移工，今（2021）年1月14日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀；於1月27日接受檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '898',
        case: '898',
        date: '1/29',
        status: 'default',
        group: 'trp_A',
        info:
            '《案898》' +
            '<br>' +
            `
            菲律賓籍30多歲女性移工，今（2021）年1月14日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀；於1月27日接受檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '899',
        case: '899',
        date: '1/29',
        status: 'default',
        group: 'trp_A',
        info:
            '《案899》' +
            '<br>' +
            `
            菲律賓籍30多歲女性移工，今（2021）年1月14日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀；於1月27日接受檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '900',
        case: '900',
        date: '1/29',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案900》' +
            '<br>' +
            `
            本國籍60多歲男性，2020年10月至南非探親，今年1月12日返國，持有搭機前3日內檢驗陰性報告，入境後至住處居家檢疫；個案1月19日起陸續出現喉嚨痛、鼻塞及咳嗽情形，並自行服藥，1月24日雖曾向衛生單位通報，但個案表示已服藥且症狀改善，故未就醫；個案於1月27日檢疫期滿後，自行前往就醫後確診。
        
            `,
    },
    {
        no: '901',
        case: '901',
        date: '1/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案901》' +
            '<br>' +
            `
            本國籍40多歲男性，2020年7月前往印尼，今（2021）年1月21日返國，持有搭機前3日內檢驗陰性報告，入境後至住處居家檢疫；個案1月22日起陸續出現發燒、咳嗽及喉嚨痛等症狀，於1月27日主動通報後由衛生單位安排就醫採檢後確診。
        
            `,
    },
    {
        no: '902',
        case: '902',
        date: '1/30',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案902》' +
            '<br>' +
            `
            本國籍20多歲女性，2020年9月至捷克就學，曾接觸確診個案並於今年1月4日確診，後分別持有1月15日及22日兩次檢驗陰性報告，於1月25日搭機返臺。個案1月27日入境時有嗅覺異常症狀，於機場採檢陰性後轉至集中檢疫所檢疫，1月29日二採陽性並確診後確診。
        
            `,
    },
    {
        no: '903',
        case: '903',
        date: '1/30',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案903》' +
            '<br>' +
            `
            案903至案906皆為本國籍，包括2名未滿10歲女童、40多歲男性及30多歲女性，為長期居住巴西之家庭，於1月20日舉家搭機返臺，皆持搭機前3日內檢驗陰性報告，入境後於住處居家檢疫。於1月27日陸續出現症狀，經通報後採檢陽性確診，為一起境外移入家庭群聚。
        
            `,
    },
    {
        no: '904',
        case: '904',
        date: '1/30',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案904》' +
            '<br>' +
            `
            案903至案906皆為本國籍，包括2名未滿10歲女童、40多歲男性及30多歲女性，為長期居住巴西之家庭，於1月20日舉家搭機返臺，皆持搭機前3日內檢驗陰性報告，入境後於住處居家檢疫。於1月27日陸續出現症狀，經通報後採檢陽性確診，為一起境外移入家庭群聚。
        
            `,
    },
    {
        no: '905',
        case: '905',
        date: '1/30',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案905》' +
            '<br>' +
            `
            案903至案906皆為本國籍，包括2名未滿10歲女童、40多歲男性及30多歲女性，為長期居住巴西之家庭，於1月20日舉家搭機返臺，皆持搭機前3日內檢驗陰性報告，入境後於住處居家檢疫。於1月24日起出現發燒及喉嚨痛等症狀，經通報後採檢陽性確診，為一起境外移入家庭群聚。
        
            `,
    },
    {
        no: '906',
        case: '906',
        date: '1/30',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案906》' +
            '<br>' +
            `
            案903至案906皆為本國籍，包括2名未滿10歲女童、40多歲男性及30多歲女性，為長期居住巴西之家庭，於1月20日舉家搭機返臺，皆持搭機前3日內檢驗陰性報告，入境後於住處居家檢疫。於1月27日陸續出現症狀，經通報後採檢陽性確診，為一起境外移入家庭群聚。
        
            `,
    },
    {
        no: '907',
        case: '907',
        date: '1/30',
        status: 'case_s2',
        group: 'tw_hos',
        info:
            '《案907》' +
            '<br>' +
            `
            為案863之同住家人，80多歲女性，於1月18日採檢陰性後居家隔離，有慢性腎病、糖尿病、高血壓、心臟衰竭等病史，於1月28日出現食慾不振、倦怠、發燒等症狀，1月29日因症狀持續且有咳嗽、呼吸困難症狀，安排採檢就醫檢驗陽性，於昨（29）日晚間死亡。
        
            `,
    },
    {
        no: '908',
        case: '908',
        date: '1/30',
        status: 'case_s1',
        group: 'tw_hos',
        info:
            '《案908》' +
            '<br>' +
            `
            為案889之就醫相關接觸者，50多歲男性，於1月23日陪同其母就醫，過程均有戴口罩，於1月26日經衛生單位通知居家隔離，迄今無症狀，因與其母同為案889之就醫相關接觸者，於1月29日安排採檢後確診。
        
            `,
    },
    {
        no: '909',
        case: '909',
        date: '1/30',
        status: 'case_s1',
        group: 'tw_hos',
        info:
            '《案909》' +
            '<br>' +
            `
            為案863之同住家人，20多歲女性，於1月18日採檢陰性後居家隔離，為案863密切接觸者，於1月29日與案907一起安排採檢後確診。
        
            `,
    },
    {
        no: '910',
        case: '910',
        date: '1/30',
        status: 'case_s1',
        group: 'tw_hos',
        info:
            '《案910》' +
            '<br>' +
            `
            為案863之同住家人，80多歲男性，於1月18日採檢陰性後居家隔離，為案863密切接觸者，於1月29日與案907一起安排採檢後確診。
        
            `,
    },
    {
        no: '911',
        case: '911',
        date: '1/31',
        status: 'default',
        group: 'trp_A',
        info:
            '《案911》' +
            '<br>' +
            `
            菲律賓籍20多歲男性，今（2021）年1月14日來臺工作，持有搭機前3日內檢驗陰性報告，入境後自費申請至集中檢疫所檢疫，迄今無症狀。個案於1月28日檢疫期滿，原定至另一家旅館住宿，因該旅館要求須出示檢驗陰性證明，故個案於集中檢疫所進行自費採檢後確診。
        
            `,
    },
    {
        no: '912',
        case: '912',
        date: '1/31',
        status: 'default',
        group: 'trp_A',
        info:
            '《案912》' +
            '<br>' +
            `
            菲律賓籍20多歲女性移工，今年1月7日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，迄今無症狀。個案於1月20日接受檢疫期滿前採檢，結果為陰性，檢疫期滿後至宿舍自主健康管理，因公司要求，個案於1月29日至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '913',
        case: '913',
        date: '2/1',
        status: 'default',
        group: 'trp_A',
        info:
            '《案913》' +
            '<br>' +
            `
            本國籍30多歲男性，2020年1月至日本工作，因工作地有COVID-19確診者，個案於12月25日自行至當地醫院採檢後確診，並住院隔離，12月29日第二次採檢陰性後，今（2021）年1月1日解除隔離出院，並於1月2日至6日間共自行採檢5次，結果皆為陰性。
        
            `,
    },
    {
        no: '914',
        case: '914',
        date: '2/2',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案914》' +
            '<br>' +
            `
            本國籍60多歲女性，2020年9月至美國工作，今（2021）年1月30日返國，持有搭機前3日內檢驗陰性報告，入境時主動告知搭機後出現腹瀉症狀，於機場進行採檢，結果為陰性，2月1日於集中檢疫所進行二採後確診。
        
            `,
    },
    {
        no: '915',
        case: '915',
        date: '2/2',
        status: 'default',
        group: 'trp_A',
        info:
            '《案915》' +
            '<br>' +
            `
            日本籍50多歲男性，今年1月15日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館檢疫，迄今無症狀。個案1月30日檢疫期滿後，由公司安排至醫院自費採檢，因結果呈現弱陽性，收治住院隔離；個案1月30日之檢體經實驗室複驗，核酸及血清總抗體均為陽性。
        
            `,
    },
    {
        no: '916',
        case: '916',
        date: '2/2',
        status: 'default',
        group: 'trp_A',
        info:
            '《案916》' +
            '<br>' +
            `
            本國籍20多歲男性，去年1月至菲律賓就學，今年1月26日返國，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館檢疫。個案1月28日及29日陸續出現喉嚨不適及咳嗽症狀，1月31日主動回報，2月1日由衛生單位安排就醫採檢後確診。
        
            `,
    },
    {
        no: '917',
        case: '917',
        date: '2/3',
        status: 'default',
        group: 'trp_A',
        info:
            '《案917》' +
            '<br>' +
            `
            案917及918均為印尼籍20多歲男性漁工，今（2021）年1月16日搭乘同班機來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至防疫旅館居家檢疫，迄今無症狀。2人2月1日檢疫期滿後，由仲介公司安排專車至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '918',
        case: '918',
        date: '2/3',
        status: 'default',
        group: 'trp_A',
        info:
            '《案918》' +
            '<br>' +
            `
            案917及918均為印尼籍20多歲男性漁工，今（2021）年1月16日搭乘同班機來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至防疫旅館居家檢疫，迄今無症狀。2人2月1日檢疫期滿後，由仲介公司安排專車至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '919',
        case: '919',
        date: '2/4',
        status: 'default',
        group: 'trp_A',
        info:
            '《案919》' +
            '<br>' +
            `
            印尼籍40多歲男性船員，今（2021）年1月10日來臺工作，持有搭機前3日內檢驗陰性報告，入境後由公司安排至宿舍進行居家檢疫及自主健康管理；個案自主健康管理期滿，因預計登船工作，於2月2日由雇主安排至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '920',
        case: '920',
        date: '2/4',
        status: 'default',
        group: 'trp_A',
        info:
            '《案920》' +
            '<br>' +
            `
            美國籍60多歲女性，今（2021）年1月15日來臺，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館居家檢疫，迄今無症狀。個案居家檢疫期滿後，於1月30日至2月3日間在臺洽公，因預計2月6日返回美國，2月3日至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '921',
        case: '921',
        date: '2/5',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案921》' +
            '<br>' +
            `
            荷蘭籍60多歲男性，今（2021）年1月2日來臺ㄞ工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館居家檢疫，迄今無症狀；個案檢疫期滿後，1月17日開始工作，因返國需要，2月3日至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '922',
        case: '922',
        date: '2/5',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案922》' +
            '<br>' +
            `
            本國籍20多歲男性，長期居住美國，今年1月13日與3名家人一同返臺過年，持有搭機前3日內檢驗陰性報告，入境後至住處居家檢疫及自主健康管理，迄今無症狀；個案自主健康管理期滿後，為與親友團聚，故與同行家人一同至醫院自費採檢，其中個案檢出陽性確診，其餘3人陰性。

            `,
    },
    {
        no: '923',
        case: '923',
        date: '2/5',
        status: 'default',
        group: 'trp_A',
        info:
            '《案923》' +
            '<br>' +
            `
            阿富汗籍40多歲男性，長期居住阿拉伯聯合大公國（杜拜），因工作經常往返臺灣及杜拜兩地。於今年1月7日再次來臺，持有搭機前3日內檢驗陰性報告，入境後至住處居家檢疫，期間均無症狀，檢疫期滿後於1月24日出現咳嗽症狀，因自覺為感冒未就醫，經自行服藥後症狀改善；因預定返國，2月4日至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '924',
        case: '924',
        date: '2/5',
        status: 'case_s1',
        group: 'tw_hos',
        info:
            '《案924》' +
            '<br>' +
            `
            本國籍40多歲女性，為案839及案870之家人，自1月12日起於住處居家隔離，2月1日曾出現喉嚨癢症狀，3日解除隔離未外出，4日進行隔離期滿採檢後確診。
        
            `,
    },
    {
        no: '925',
        case: '925',
        date: '2/6',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案925》' +
            '<br>' +
            `
            本國籍40多歲男性，2020年10月外派至美國工作，曾與確診者接觸，於今（2021）年1月8日返臺探親及處理公務，持有搭機前3日內檢驗陰性報告，入境後至住處居家檢疫，迄今無症狀。個案檢疫期滿後，因近期將再次赴美工作，於2月4日至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '926',
        case: '926',
        date: '2/7',
        status: 'default',
        group: 'trp_A',
        info:
            '《案926》' +
            '<br>' +
            `
            印尼籍20多歲男性，今（2021）年2月4日來臺就學，持有搭機前3日內檢驗陰性報告，入境時主動通報有症狀，由機場安排採檢後送至集中檢疫所進行集中檢疫後確診。
        
            `,
    },
    {
        no: '927',
        case: '927',
        date: '2/7',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案927》' +
            '<br>' +
            `
            本國籍30多歲男性，長期於迦納工作，因年度休假之故，今年2月3日經杜拜轉機入境返國，入境時因有咳嗽症狀，由機場安排採檢後送至集中檢疫所進行集中檢疫後確診。
        
            `,
    },
    {
        no: '928',
        case: '928',
        date: '2/7',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案928》' +
            '<br>' +
            `
            美國籍40多歲男性，今年1月13日出現咳嗽症狀，曾於美國當地就醫並診斷為支氣管炎。個案於2月5日入境來臺工作，持有搭機前3日內檢驗陰性報告，入境時主動通報有症狀，由機場安排採檢後送至集中檢疫所進行集中檢疫後確診。
        
            `,
    },
    {
        no: '929',
        case: '929',
        date: '2/8',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案929》' +
            '<br>' +
            `
            本國籍20多歲女性，2020年2月至英國工作，曾接觸確診個案，12月20日起陸續出現發燒、腹瀉及嗅覺異常症狀，12月23日於英國當地檢驗確診COVID-19，並於今年1月3日及11日再次採檢，結果皆為陰性。個案於1月15日返國，入境迄今無疑似症狀，集中檢疫期間曾於1月19日及28日採檢，結果均為陰性；檢疫期滿後返回住處自主健康管理，2月5日至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '930',
        case: '930',
        date: '2/9',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案930》' +
            '<br>' +
            `
            本國籍20多歲女性，2020年8月至美國就學，12月22日返國，持有搭機前3日內檢驗陰性報告，入境後於住家完成居家檢疫及自主健康管理，迄今無症狀；個案因出境需要，於今（2021）年2月6日至醫院自費採檢，因結果顯示為無法判定，2月7日進行2採複驗後確診。
        
            `,
    },
    {
        no: '931',
        case: '931',
        date: '2/9',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案931》' +
            '<br>' +
            `
            本國籍60多歲女性，為案932之親戚，長期居住法國（去年2月自臺灣出境），於1月29日出現咳嗽症狀。兩人於1月28日返臺，皆持有搭機前3日內檢驗陰性報告，入境後至住處居家檢疫，2月5日由衛生單位安排就醫採檢後確診。
        
            `,
    },
    {
        no: '932',
        case: '932',
        date: '2/9',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案932》' +
            '<br>' +
            `
            本國籍20多歲女性，為案931之親戚，於2019年至法國就學，期間曾至比利時，今年1月21日返回法國與案931同住。個案於1月30日陸續出現喉嚨痛、流鼻水、鼻塞、嗅覺異常及腹瀉情形。兩人於1月28日返臺，皆持有搭機前3日內檢驗陰性報告，入境後至住處居家檢疫，2月5日由衛生單位安排就醫採檢後確診。
        
            `,
    },
    {
        no: '933',
        case: '933',
        date: '2/9',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案933》' +
            '<br>' +
            `
            本國籍50多歲女性，去年12月與1名家人一同至美國探親，今年1月29日一同返國，持有搭機前3日內檢驗陰性報告，入境後至住處居家檢疫。個案於2月4日出現喉嚨異物感及咳嗽症狀，因症狀持續，2月6日由衛生單位安排就醫採檢結果為陰性，2月7日再次採檢後確診。
        
            `,
    },
    {
        no: '934',
        case: '934',
        date: '2/9',
        status: 'case_s1',
        group: 'tw_hos',
        info:
            '《案934》' +
            '<br>' +
            `
            本國籍50多歲女性，因匡列為案864、907、909及910之接觸者，自1月19日起進行居家隔離，隔離期間曾接受5次採檢，結果皆為陰性；個案2月7日曾出現發燒、鼻涕倒流情形，2月8日自覺已無症狀，因申請外出奔喪，由衛生單位安排至醫院採檢後確診。
        
            `,
    },
    {
        no: '935',
        case: '935',
        date: '2/10',
        status: 'case_s2',
        group: 'trp_A',
        info:
            '《案935》' +
            '<br>' +
            `
            本國籍60多歲男性，有糖尿病及高血壓病史。2020年1月至緬甸工作，12月24日出現發燒及咳嗽等症狀，12月29日檢出陽性，12月30日於當地住院治療，並於今（2021）年1月27日症狀緩解後出院；後續因再度出現呼吸困難，2月3日於當地住院治療，2月7日搭乘醫療專機返臺，入境後收治住院隔離經醫院採檢後確診。個案住院期間因呼吸衰竭持續使用呼吸器治療，今（2021）年3月1日因病情惡化使用葉克膜治療，後續因多重器官衰竭不幸於3月5日病逝。
        
            `,
    },
    {
        no: '936',
        case: '936',
        date: '2/10',
        status: 'default',
        group: 'trp_A',
        info:
            '《案936》' +
            '<br>' +
            `
            印尼籍40多歲男性，1月24日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館檢疫，個案2月8日檢疫期滿至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '937',
        case: '937',
        date: '2/11',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案937》' +
            '<br>' +
            `
            2020年9月至法國就學，今（2921）年1月29日返臺，持有搭機前3日內檢驗陰性報告，入境後至住處居家檢疫；個案於2月9日出現咳嗽、流鼻水、噁心及嘔吐症狀，由衛生單位安排就醫採檢後確診。
        
            `,
    },
    {
        no: '938',
        case: '938',
        date: '2/12',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案938》' +
            '<br>' +
            `
            美國籍50多歲男性，於今（2021）年1月26日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館居家檢疫，迄今無症狀；個案2月10日檢疫期滿後至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '939',
        case: '939',
        date: '2/17',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案939》' +
            '<br>' +
            `
            本國籍50多歲女性，2020年10月17日曾出現喉嚨不適情形，10月21日在美國當地檢出COVID-19陽性後，於美國家中自主隔離，11月14日及18日兩次檢驗結果皆為陰性。2020年11月27日返臺探親，入境後至住處居家檢疫，迄今無症狀；個案因出境需要，今（2021）年2月15日至醫院自費採檢後確診(Ct值35，次日再驗核酸為陰性，血清抗體IgM及IgG皆為陽性)。
        
            `,
    },
    {
        no: '940',
        case: '940',
        date: '2/18',
        status: 'default',
        group: 'trp_A',
        info:
            '《案940》' +
            '<br>' +
            `
            菲律賓籍20多歲女性移工，今（2021）年2月3日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，2月16日接受檢疫期滿採檢後確診。
        
            `,
    },
    {
        no: '941',
        case: '941',
        date: '2/18',
        status: 'default',
        group: 'trp_A',
        info:
            '《案941》' +
            '<br>' +
            `
            馬來西亞籍30多歲男性，今年1月31日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館檢疫，迄今無症狀；個案2月15日檢疫期滿後，至其他旅館自主健康管理，因公司要求，於2月16日至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '942',
        case: '942',
        date: '2/19',
        status: 'default',
        group: 'trp_A',
        info:
            '《案942》' +
            '<br>' +
            `
            印尼籍20多歲男性漁工，今（2021）年2月4日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，並無症狀。指揮中心表示，個案於2月17日接受檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '943',
        case: '943',
        date: '2/20',
        status: 'default',
        group: 'trp_A',
        info:
            '《案943》' +
            '<br>' +
            `
            律賓籍20多歲男性，今（2021）年2月3日來臺工作，持有搭機前3日內檢驗陰性報告。個案於2月18日檢疫期滿，因公司要求，同日至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '944',
        case: '944',
        date: '2/24',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案944》' +
            '<br>' +
            `
            美國籍30多歲男性，今（2021）年1月5日曾於美國當地檢出COVID-19陽性，後於1月26日、27日及2月3日三次檢驗結果皆為陰性，在美期間均無症狀。個案於2月5日來臺洽公，入境檢疫迄今無症狀；個案2月21日檢疫期滿，22日至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '945',
        case: '945',
        date: '2/24',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案945》' +
            '<br>' +
            `
            本國籍30多歲女性，長期居住美國，2020年10月30日曾出現喉嚨不適情形，並於美國當地檢出COVID-19陽性，11月3日症狀好轉，12月30日再次檢驗為陰性，於今年1月3日返臺，入境檢疫迄今無症狀。個案因出境需要，2月22日至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '946',
        case: '946',
        date: '2/24',
        status: 'default',
        group: 'trp_A',
        info:
            '《案946》' +
            '<br>' +
            `
            本國籍40多歲男性，長期於馬來西亞工作，去年11月30日曾出現發燒、嗅味覺異常等症狀，於當地採檢COVID-19陽性後住院隔離，12月12日出院。個案今年1月14日及1月27日檢驗陰性，並於1月29日返臺，入境檢疫迄今無症狀。個案因出境需要，2月21日至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '947',
        case: '947',
        date: '2/24',
        status: 'default',
        group: 'trp_A',
        info:
            '《案947》' +
            '<br>' +
            `
            本國籍20多歲女性，長期於美國工作，個案自述曾於美國出現嗅味覺異常症狀，並於去年12月2日在當地檢出COVID-19陽性，後於去年12月31日及今年1月6日兩次檢驗結果皆為陰性；個案1月9日返臺，入境檢疫迄今無症狀。個案因出境需要，2月22日至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '948',
        case: '948',
        date: '2/25',
        status: 'default',
        group: 'trp_A',
        info:
            '《案948》' +
            '<br>' +
            `
            菲律賓籍女性移工，年齡介於20多歲至30多歲，今（2021）年2月3日搭乘同班機來臺工作，皆持有搭機前3日內檢驗陰性報告，入境時無症狀，5名個案曾於2月16日接受檢疫期滿前採檢，結果皆為陰性，檢疫期滿後由仲介安排至住宿地點自主健康管理，2月23日由仲介安排專車接送至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '949',
        case: '949',
        date: '2/25',
        status: 'default',
        group: 'trp_A',
        info:
            '《案949》' +
            '<br>' +
            `
            菲律賓籍女性移工，年齡介於20多歲至30多歲，今（2021）年2月3日搭乘同班機來臺工作，皆持有搭機前3日內檢驗陰性報告，入境時無症狀，5名個案曾於2月16日接受檢疫期滿前採檢，結果皆為陰性，檢疫期滿後由仲介安排至住宿地點自主健康管理，2月23日由仲介安排專車接送至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '950',
        case: '950',
        date: '2/25',
        status: 'default',
        group: 'trp_A',
        info:
            '《案950》' +
            '<br>' +
            `
            菲律賓籍女性移工，年齡介於20多歲至30多歲，今（2021）年2月3日搭乘同班機來臺工作，皆持有搭機前3日內檢驗陰性報告，入境時無症狀，5名個案曾於2月16日接受檢疫期滿前採檢，結果皆為陰性，檢疫期滿後由仲介安排至住宿地點自主健康管理，2月23日由仲介安排專車接送至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '951',
        case: '951',
        date: '2/25',
        status: 'default',
        group: 'trp_A',
        info:
            '《案951》' +
            '<br>' +
            `
            菲律賓籍女性移工，年齡介於20多歲至30多歲，今（2021）年2月3日搭乘同班機來臺工作，皆持有搭機前3日內檢驗陰性報告，入境時無症狀，5名個案曾於2月16日接受檢疫期滿前採檢，結果皆為陰性，檢疫期滿後由仲介安排至住宿地點自主健康管理，2月23日由仲介安排專車接送至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '952',
        case: '952',
        date: '2/25',
        status: 'default',
        group: 'trp_A',
        info:
            '《案952》' +
            '<br>' +
            `
            菲律賓籍女性移工，年齡介於20多歲至30多歲，今（2021）年2月3日搭乘同班機來臺工作，皆持有搭機前3日內檢驗陰性報告，入境時無症狀，5名個案曾於2月16日接受檢疫期滿前採檢，結果皆為陰性，檢疫期滿後由仲介安排至住宿地點自主健康管理，2月23日由仲介安排專車接送至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '953',
        case: '953',
        date: '2/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案953》' +
            '<br>' +
            `
            英國籍20多歲女性，個案今（2021）年1月8日曾於英國當地檢出COVID-19陽性，後於2月12日來臺就學，持有2次搭機前檢驗陰性報告，入境後即至集中檢疫所進行集中檢疫，並於2月13日第1次採檢，檢驗結果為陰性，入境檢疫迄今均無不適症狀；於2月25日檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '954',
        case: '954',
        date: '2/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案954》' +
            '<br>' +
            `
            印尼籍20多歲男性船員，於108年5月23日入境，並於同日搭船出境；返臺前航程為今年2月3日自越南出境，2月8日入境。入境後至防疫旅館檢疫，檢疫期滿後返回船上自主健康管理，迄今皆無症狀；2月25日個案由仲介公司安排專車至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '955',
        case: '955',
        date: '2/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案955》' +
            '<br>' +
            `
            菲律賓籍30多歲女性移工，於今年2月5日入境，持有搭機前3日內檢驗陰性報告，入境後即至集中檢疫所進行集中檢疫，2月18日檢疫期滿前採檢，檢驗結果為陰性，檢疫期滿後由仲介安排至住宿地點自主健康管理，2月26日由仲介安排專車接送至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '956',
        case: '956',
        date: '2/28',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案956》' +
            '<br>' +
            `
            本國籍20多歲男性，今年1月28日返臺，持有搭機前3日內檢驗陰性報告，入境後獨自於親戚家檢疫。因預定回波蘭就學，2月26日至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '957',
        case: '957',
        date: '3/3',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案957》' +
            '<br>' +
            `
            本國籍20多歲男性，長期於加拿大就學，今（2021）年2月26日入境，持有搭機前3日內檢驗陰性報告，入境時無不適症狀，於住家進行居家檢疫。個案於2月28日出現嗅味覺異常、流鼻水及鼻塞等症狀，由衛生單位安排就醫採檢後確診。
        
            `,
    },
    {
        no: '958',
        case: '958',
        date: '3/3',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案958》' +
            '<br>' +
            `
            本國籍50多歲女性，2020年11月前往美國探親，今年2月26日返臺，持有搭機前3日內檢驗陰性報告，入境時無不適症狀，由友人接送至防疫旅宿進行居家檢疫。個案於3月1日出現喉嚨癢症狀，由衛生單位安排就醫採檢後確診。
        
            `,
    },
    {
        no: '959',
        case: '959',
        date: '3/3',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案959》' +
            '<br>' +
            `
            波蘭籍40多歲男性，今年2月18日來臺工作，持有搭機前3日內檢驗陰性報告，入境時無不適症狀，入住防疫旅宿進行居家檢疫。個案於3月1日出現嗅味覺異常症狀，由衛生單位安排就醫採檢後確診。
        
            `,
    },
    {
        no: '960',
        case: '960',
        date: '3/4',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案960》' +
            '<br>' +
            `
            奈及利亞籍50多歲男性，長期居住臺灣，並持有我國居留證，今（2021）年1月8日返回奈及利亞奔喪，在當地曾於1月18日出現輕微咳嗽，經自行服藥後症狀緩解；個案2月28日返臺，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館檢疫，3月2日因全身倦怠及有慢性病之就醫需求，由衛生單位安排就醫採檢後確診。
        
            `,
    },
    {
        no: '961',
        case: '961',
        date: '3/4',
        status: 'default',
        group: 'trp_A',
        info:
            '《案961》' +
            '<br>' +
            `
            菲律賓籍20多歲男性移工，今年2月9日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，2月22日接受檢疫期滿前採檢，結果為陰性。個案檢疫期滿後，由仲介安排至其他住所自主健康管理，2月26日搭乘專車至醫院自費採檢，因核酸檢測未確定，27日先行收治住院隔離，同日及3月2日進行核酸檢驗後確診。
        
            `,
    },
    {
        no: '962',
        case: '962',
        date: '3/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案962》' +
            '<br>' +
            `
            2人為印尼籍（案962、963），5人為菲律賓籍（案964、965、966、967、968），年齡介於20多歲至40多歲，今（2021）年2月19日來臺工作，皆持有搭機前3日內檢驗陰性報告且入境時無不適症狀，入境後至集中檢疫所檢疫；7人於3月4日接受檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '963',
        case: '963',
        date: '3/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案963》' +
            '<br>' +
            `
            2人為印尼籍（案962、963），5人為菲律賓籍（案964、965、966、967、968），年齡介於20多歲至40多歲，今（2021）年2月19日來臺工作，皆持有搭機前3日內檢驗陰性報告且入境時無不適症狀，入境後至集中檢疫所檢疫；7人於3月4日接受檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '964',
        case: '964',
        date: '3/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案964》' +
            '<br>' +
            `
            2人為印尼籍（案962、963），5人為菲律賓籍（案964、965、966、967、968），年齡介於20多歲至40多歲，今（2021）年2月19日來臺工作，皆持有搭機前3日內檢驗陰性報告且入境時無不適症狀，入境後至集中檢疫所檢疫；7人於3月4日接受檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '965',
        case: '965',
        date: '3/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案965》' +
            '<br>' +
            `
            2人為印尼籍（案962、963），5人為菲律賓籍（案964、965、966、967、968），年齡介於20多歲至40多歲，今（2021）年2月19日來臺工作，皆持有搭機前3日內檢驗陰性報告且入境時無不適症狀，入境後至集中檢疫所檢疫；7人於3月4日接受檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '966',
        case: '966',
        date: '3/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案966》' +
            '<br>' +
            `
            2人為印尼籍（案962、963），5人為菲律賓籍（案964、965、966、967、968），年齡介於20多歲至40多歲，今（2021）年2月19日來臺工作，皆持有搭機前3日內檢驗陰性報告且入境時無不適症狀，入境後至集中檢疫所檢疫；7人於3月4日接受檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '967',
        case: '967',
        date: '3/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案967》' +
            '<br>' +
            `
            2人為印尼籍（案962、963），5人為菲律賓籍（案964、965、966、967、968），年齡介於20多歲至40多歲，今（2021）年2月19日來臺工作，皆持有搭機前3日內檢驗陰性報告且入境時無不適症狀，入境後至集中檢疫所檢疫；7人於3月4日接受檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '968',
        case: '968',
        date: '3/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案968》' +
            '<br>' +
            `
            2人為印尼籍（案962、963），5人為菲律賓籍（案964、965、966、967、968），年齡介於20多歲至40多歲，今（2021）年2月19日來臺工作，皆持有搭機前3日內檢驗陰性報告且入境時無不適症狀，入境後至集中檢疫所檢疫；7人於3月4日接受檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '969',
        case: '969',
        date: '3/7',
        status: 'default',
        group: 'trp_A',
        info:
            '《案969》' +
            '<br>' +
            `
            印度籍30多歲男性，今（2021）年2月18日經杜拜轉機來臺工作，持有搭機前3日內檢驗陰性報告且入境時無不適症狀，入境後至防疫旅館進行居家檢疫，並無症狀。3月5日檢疫期滿後自費採檢後確診。
        
            `,
    },
    {
        no: '970',
        case: '970',
        date: '3/7',
        status: 'default',
        group: 'trp_A',
        info:
            '《案970》' +
            '<br>' +
            `
            菲律賓籍30多歲女性，今年3月5日來臺工作，持有搭機前3日內檢驗陰性報告，入境時因有發燒症狀，由機場安排就醫採檢後確診。
        
            `,
    },
    {
        no: '971',
        case: '971',
        date: '3/8',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案971》' +
            '<br>' +
            `
            巴拉圭籍20多歲女性，今（2021）年3月5日從巴拉圭經巴西至杜拜，並搭乘同班機轉機來臺就學（與案972、案973同班機來臺），持有搭機前3日內檢驗陰性報告且入境時無不適症狀。入境後安排至檢疫所集中檢疫及採檢後並無症狀，但於今（8）日確診。
        
            `,
    },
    {
        no: '972',
        case: '972',
        date: '3/8',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案972》' +
            '<br>' +
            `
            本國籍10多歲女性，長期居住於英國，1月18日曾於當地確診，2月27日、3月3日檢驗結果均為陰性。3月5日經杜拜轉機返臺，持有搭機前3日內檢驗陰性報告且無症狀，入境後至檢疫所集中檢疫及採檢後確診。
        
            `,
    },
    {
        no: '973',
        case: '973',
        date: '3/8',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案973》' +
            '<br>' +
            `
            本國籍30多歲女性，2020年1月起於英國就學，曾於當地接觸確診者，個案3月5日經杜拜轉機返臺，持有搭機前三日內檢驗陰性報告且無症狀，入境後安排至檢疫所集中檢疫及採檢後確診。
        
            `,
    },
    {
        no: '974',
        case: '974',
        date: '3/8',
        status: 'default',
        group: 'trp_A',
        info:
            '《案974》' +
            '<br>' +
            `
            菲律賓籍20多歲女性，2月19日來臺工作，持搭機前3日內檢驗陰性報告且無症狀，入境後至檢疫旅館進行居家檢疫，3月6日檢疫期滿後自費採檢後確診。
        
            `,
    },
    {
        no: '975',
        case: '975',
        date: '3/8',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案975》' +
            '<br>' +
            `
            巴拉圭籍20多歲男性，今（2021）年3月5日從巴拉圭經巴西至杜拜，並搭乘同班機轉機來臺就學（與案972、案973同班機來臺），持有搭機前3日內檢驗陰性報告且入境時無不適症狀。入境後安排至檢疫所集中檢疫及採檢後並無症狀，但於今（8）日確診。
        
            `,
    },
    {
        no: '976',
        case: '976',
        date: '3/8',
        status: 'default',
        group: 'trp_A',
        info:
            '《案976》' +
            '<br>' +
            `
            印尼籍20多歲男性，於2月21日來臺工作，均持搭機前3日內檢驗陰性報告且入境時無症狀，入境後至檢疫所集中檢疫，3月6日進行期滿前採檢後確診。
        
            `,
    },
    {
        no: '977',
        case: '977',
        date: '3/8',
        status: 'default',
        group: 'trp_A',
        info:
            '《案977》' +
            '<br>' +
            `
            印尼籍30多歲男性，於2月21日來臺工作，均持搭機前3日內檢驗陰性報告且入境時無症狀，入境後至檢疫所集中檢疫，3月6日進行期滿前採檢後確診。
        
            `,
    },
    {
        no: '978',
        case: '978',
        date: '3/9',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案978》' +
            '<br>' +
            `
            本國籍30多歲女性，2019年5月至宏都拉斯工作，今（2021）年1月即有鼻塞症狀，1月6日於當地確診COVID-19後，於住處隔離至2月19日，期間曾分別於1月16日、1月18日、2月8日及2月17日進行採檢，結果皆為陰性。個案與友人於2月21日一同返臺，入境後至防疫旅館檢疫，期間皆無症狀；個案於3月8日檢疫期滿，因工作需要，同日至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '979',
        case: '979',
        date: '3/10',
        status: 'default',
        group: 'trp_A',
        info:
            '《案979》' +
            '<br>' +
            `
            菲律賓籍20多歲男性移工，持有搭機前3日內檢驗陰性報告，入境時無不適症狀，今（2021）年3月4日起陸續出現輕微咳嗽、發燒症狀，由集中檢疫所人員安排就醫採檢後確診。
        
            `,
    },
    {
        no: '980',
        case: '980',
        date: '3/12',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案980》' +
            '<br>' +
            `
            美國之墨西哥籍20多歲男性，今（2021）年1月20日曾有喉嚨痛症狀，1月22日於美國檢驗COVID-19陽性，2月6日及2月8日再次採檢為陰性。個案2月13日來臺工作，入境後至防疫旅館檢疫，期滿後至其他住所自主健康管理至3月6日，因工作需要，3月10日至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '981',
        case: '981',
        date: '3/12',
        status: 'default',
        group: 'trp_A',
        info:
            '《案981》' +
            '<br>' +
            `
            菲律賓籍30多歲男性移工，今年2月17日來臺工作，有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，3月2日接受檢疫期滿前採檢，結果為陰性，檢疫期滿後，至其他住所自主健康管理，3月10日自主健康管理期滿，因工作需要，由仲介安排專車至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '982',
        case: '982',
        date: '3/12',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案982》' +
            '<br>' +
            `
            法國籍50多歲男性，今年1月12日來臺工作，有搭機前3日內檢驗陰性報告，入境後至防疫旅館檢疫，期滿後至其他住所自主健康管理至2月3日，因返國需要，3月10日至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '983',
        case: '983',
        date: '3/12',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案983》' +
            '<br>' +
            `
            英國籍40多歲男性，今年1月1日曾在英國確診COVID-19，3月10日來臺工作，有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，3月11日進行專案採檢後確診。
        
            `,
    },
    {
        no: '984',
        case: '984',
        date: '3/12',
        status: 'default',
        group: 'trp_A',
        info:
            '《案984》' +
            '<br>' +
            `
            與案985同為菲律賓籍20多歲男性，今年2月17日來臺工作，皆有搭機前3日內檢驗陰性報告，入境後至防疫旅館檢疫，期滿後再至其他住所自主健康管理至3月10日。2人因工作需要，3月11日至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '985',
        case: '985',
        date: '3/12',
        status: 'default',
        group: 'trp_A',
        info:
            '《案985》' +
            '<br>' +
            `
            與案984同為菲律賓籍20多歲男性，今年2月17日來臺工作，皆有搭機前3日內檢驗陰性報告，入境後至防疫旅館檢疫，期滿後再至其他住所自主健康管理至3月10日。2人因工作需要，3月11日至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '986',
        case: '986',
        date: '3/14',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案986》' +
            '<br>' +
            `
            南非籍20多歲女性，於今（2021）年2月19日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，經2月20日入境採檢及3月4日檢疫期滿前採檢，結果皆為陰性。個案於3月6日檢疫期滿後，至其他住所進行自主健康管理，因工作需要，3月12日至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '987',
        case: '987',
        date: '3/15',
        status: 'default',
        group: 'trp_A',
        info:
            '《案987》' +
            '<br>' +
            `
            菲律賓籍30多歲女性，今（2021）年2月28日來臺工作，持有搭機前3日內陰性檢驗報告，入境時無症狀，入境後至檢疫所集中檢疫，3月13日進行期滿前採檢後確診。
        
            `,
    },
    {
        no: '988',
        case: '988',
        date: '3/15',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案988》' +
            '<br>' +
            `
            法國籍50多歲男性，為案982同事，今年1月12日來臺工作，持有搭機前3日內陰性檢驗報告，入境時無症狀，至防疫旅館進行居家檢疫，期滿後至其他住所自主健康管理至2月3日，期間皆無症狀，3月12日自費採檢結果陰性，3月13日由衛生單位通知為案982接觸者，安排接觸者採檢後確診。
        
            `,
    },
    {
        no: '989',
        case: '989',
        date: '3/15',
        status: 'default',
        group: 'trp_A',
        info:
            '《案989》' +
            '<br>' +
            `
            本國籍50多歲男性，2019年1月赴菲律賓，因通緝到案，於今年3月12日自菲律賓戒送回臺，持有搭機前3日內陰性檢驗報告，入境時無症狀，入境後至看守所居家檢疫並安排採檢後確診。
        
            `,
    },
    {
        no: '990',
        case: '990',
        date: '3/15',
        status: 'default',
        group: 'trp_A',
        info:
            '《案990》' +
            '<br>' +
            `
            與案991同為菲律賓籍20多歲男性漁工，今年2月26日來臺工作，皆持有搭機前3日內陰性檢驗報告，入境時無症狀，入境後至防疫旅館進行居家檢疫，期間皆無症狀，3月13日檢疫期滿後由公司安排自費採檢後確診。
        
            `,
    },
    {
        no: '991',
        case: '991',
        date: '3/15',
        status: 'default',
        group: 'trp_A',
        info:
            '《案991》' +
            '<br>' +
            `
            與案990同為菲律賓籍20多歲男性漁工，今年2月26日來臺工作，皆持有搭機前3日內陰性檢驗報告，入境時無症狀，入境後至防疫旅館進行居家檢疫，期間皆無症狀，3月13日檢疫期滿後由公司安排自費採檢後確診。
        
            `,
    },
    {
        no: '992',
        case: '992',
        date: '3/18',
        status: 'default',
        group: 'trp_A',
        info:
            '《案992》' +
            '<br>' +
            `
            本國籍30多歲男性，今（2021）年2月1日至阿曼工作，3月5日返臺，持有搭機前3日內檢驗陰性報告，入境時無症狀，並至防疫旅館檢疫。個案3月14日起陸續出現嗅覺異常、喉嚨癢及咳嗽症狀，3月16日因發燒由衛生單位安排就醫採檢後確診。
        
            `,
    },
    {
        no: '993',
        case: '993',
        date: '3/18',
        status: 'default',
        group: 'trp_A',
        info:
            '《案993》' +
            '<br>' +
            `
            菲律賓籍30多歲移工，分別為1男2女，今年3月3日搭乘同班機來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，3月16日接受檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '994',
        case: '994',
        date: '3/18',
        status: 'default',
        group: 'trp_A',
        info:
            '《案994》' +
            '<br>' +
            `
            菲律賓籍30多歲移工，分別為1男2女，今年3月3日搭乘同班機來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，3月16日接受檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '995',
        case: '995',
        date: '3/18',
        status: 'default',
        group: 'trp_A',
        info:
            '《案995》' +
            '<br>' +
            `
            菲律賓籍30多歲移工，分別為1男2女，今年3月3日搭乘同班機來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，3月16日接受檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '996',
        case: '996',
        date: '3/18',
        status: 'default',
        group: 'trp_A',
        info:
            '《案996》' +
            '<br>' +
            `
            本國籍40多歲女性，今年3月5日至埃及奔喪，於3月10日至15日陸續出現咳嗽、喉嚨痛、倦怠、嘔吐、腹瀉及發燒症狀，於當地未就醫，因主動聲明有症狀，入境時於機場發燒篩檢站攔檢，經篩檢後確診。
        
            `,
    },
    {
        no: '997',
        case: '997',
        date: '3/18',
        status: 'default',
        group: 'trp_A',
        info:
            '《案997》' +
            '<br>' +
            `
            本國籍40多歲女性，今年3月5日至埃及奔喪，於3月13日至16日陸續出現鼻塞、咳嗽及腹瀉症狀，於當地未就醫，因主動聲明有症狀，入境時於機場發燒篩檢站攔檢，經篩檢後確診。
        
            `,
    },
    {
        no: '998',
        case: '998',
        date: '3/18',
        status: 'default',
        group: 'trp_A',
        info:
            '《案998》' +
            '<br>' +
            `
            中國籍30多歲男性船員，2019年12月下旬自臺灣出境，返臺前曾於今年1月4日至2月3日在越南2處港口停泊，2月8日入境臺灣。入境後至防疫旅館檢疫至2月22日，2月23日返船自主健康管理；2月26日因案954確診，被列為密切接觸者並進行居家隔離及自主健康管理，因預計返回中國，3月16日搭乘專車至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '999',
        case: '999',
        date: '3/18',
        status: 'default',
        group: 'trp_A',
        info:
            '《案999》' +
            '<br>' +
            `
            中國籍30多歲男性船員，2019年12月下旬自臺灣出境，返臺前曾於今年1月4日至2月3日在越南2處港口停泊，2月8日入境臺灣。入境後至防疫旅館檢疫至2月22日，2月23日返船自主健康管理；2月26日因案954確診，被列為密切接觸者並進行居家隔離及自主健康管理，因預計返回中國，3月16日搭乘專車至醫院自費採檢後確診。
        
            `,
    },

    {
        no: '1000',
        case: '1000',
        date: '3/19',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1000》' +
            '<br>' +
            `
            菲律賓籍30多歲男性，今（2021）年2月28日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館居家檢疫，期間並無症狀。個案自述其在菲律賓之同住家人2月底於當地確診，自主健康管理期間由公司安排於3月17日進行自費採檢後確診。
        
            `,
    },
    {
        no: '1001',
        case: '1001',
        date: '3/19',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1001》' +
            '<br>' +
            `
            菲律賓籍20多歲女性移工，今年3月4日來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，3月17日接受檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '1002',
        case: '1002',
        date: '3/19',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1002》' +
            '<br>' +
            `
            菲律賓籍30多歲女性移工，今年3月4日來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，3月17日接受檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '1003',
        case: '1003',
        date: '3/19',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案1003》' +
            '<br>' +
            `
            美國籍50多歲女性，今年1月14日曾在美國確診COVID-19，2月7日隨家人來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館居家檢疫，2月22日檢疫期滿後與家人至其他旅館居住。個案入境至今並無症狀，因預定返回美國，3月17日至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '1004',
        case: '1004',
        date: '3/19',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案1004》' +
            '<br>' +
            `
            巴拉圭籍20多歲男性，今年1月16日曾在巴拉圭確診COVID-19，3月4日自巴拉圭經巴西至杜拜轉機來臺就學，3月5日入境臺灣，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，3月6日進行專案採檢，結果為陰性，3月18日接受檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '1005',
        case: '1005',
        date: '3/19',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1005》' +
            '<br>' +
            `
            印尼籍20多歲男性漁工，今年3月5日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，3月18日接受檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '1006',
        case: '1006',
        date: '3/20',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1006》' +
            '<br>' +
            `
            印尼籍20多歲男性漁工，今（2021）年3月5日來臺工作，持有搭機前3日內檢驗陰性報告，入境迄今並無症狀。個案入境後至集中檢疫所檢疫，3月18日接受檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '1007',
        case: '1007',
        date: '3/21',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案1007》' +
            '<br>' +
            `
            本國籍30多歲男性，2020年11月至波蘭出差，於今（2021）年2月25日返臺，持有搭機前3日內檢驗陰性報告且入境時無不適症狀。入境時自述曾於3月1日出現輕微咳嗽，但自覺不嚴重故無通報，3月10日檢疫期滿後於自家自主健康管理，3月19日因工作需要，同日至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '1008',
        case: '1008',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案1008》' +
            '<br>' +
            `
            荷蘭籍20多歲男性，今（2021）年2月8日來臺工作，持有搭機前3日內檢驗陰性報告，入境時無症狀，並至防疫旅館檢疫。個案2月23日檢疫期滿後，因工作需要，曾至醫院自費採檢，結果為陰性，因預計返回荷蘭，3月21日再次前往醫院自費採檢後確診。
        
            `,
    },
    {
        no: '1009',
        case: '1009',
        date: '3/24',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1009》' +
            '<br>' +
            `
            印尼籍20多歲女性，2020年11月曾在印尼確診COVID-19，並於當地治療後康復；個案今（2021）年3月9日來臺就學，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，3月22日接受檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '1010',
        case: '1010',
        date: '3/24',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1010》' +
            '<br>' +
            `
            菲律賓籍20多歲男性移工，今年3月9日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，3月22日接受檢疫期滿前採檢後確診。
        
            `,
    },
    {
        no: '1011',
        case: '1011',
        date: '3/25',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1011》' +
            '<br>' +
            `
            菲律賓籍20多歲男性移工，今（2021）年3月2日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，3月15日接受檢疫期滿前採檢，結果為陰性，3月17日檢疫期滿後，由公司安排至宿舍自主健康管理；因工作需要，個案3月23日搭乘專車至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '1012',
        case: '1012',
        date: '3/25',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案1012》' +
            '<br>' +
            `
            本國籍20多歲男性，2020年11月19日因工作前往美國，11月22日經由韓國轉機返臺，入境後至防疫旅館檢疫，返臺至今並無症狀。個案近期因計劃再次出國，今年3月23日至醫院自費採檢後確診。
        
            `,
    },
    {
        no: '1013',
        case: '1013',
        date: '3/25',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1013》' +
            '<br>' +
            `
            菲律賓籍30多歲女性，今年3月16日來臺工作，持有搭機前3日內檢驗陰性報告，入境時無症狀，並至集中檢疫所檢疫。個案3月22日起出現頭痛、咳嗽及喉嚨痛症狀，3月24日於檢疫所採檢後確診。
        
            `,
    },
    {
        no: '1014',
        case: '1014',
        date: '3/26',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1014》' +
            '<br>' +
            `
            菲律賓籍30多歲男性移工，今（2021）年2月28日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，3月13日接受檢疫期滿前採檢，結果為陰性。檢疫期滿後，由公司安排至其他住所自主健康管理，因工作需要，3月25日搭乘專車至醫院自費採檢後確診。

            `,
    },
    {
        no: '1015',
        case: '1015',
        date: '3/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1015》' +
            '<br>' +
            `
            案1015至案1019均為印尼籍20多歲男性漁工，今（2021）年3月4日來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，3月17日接受檢疫期滿前採檢，結果均為陰性。5人檢疫期滿後，至其他住所自主健康管理，因工作需要，3月24日搭乘專車至醫院自費採檢後確診。

            `,
    },
    {
        no: '1016',
        case: '1016',
        date: '3/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1016》' +
            '<br>' +
            `
            案1015至案1019均為印尼籍20多歲男性漁工，今（2021）年3月4日來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，3月17日接受檢疫期滿前採檢，結果均為陰性。5人檢疫期滿後，至其他住所自主健康管理，因工作需要，3月24日搭乘專車至醫院自費採檢後確診。

            `,
    },
    {
        no: '1017',
        case: '1017',
        date: '3/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1017》' +
            '<br>' +
            `
            案1015至案1019均為印尼籍20多歲男性漁工，今（2021）年3月4日來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，3月17日接受檢疫期滿前採檢，結果均為陰性。5人檢疫期滿後，至其他住所自主健康管理，因工作需要，3月24日搭乘專車至醫院自費採檢後確診。

            `,
    },
    {
        no: '1018',
        case: '1018',
        date: '3/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1018》' +
            '<br>' +
            `
            案1015至案1019均為印尼籍20多歲男性漁工，今（2021）年3月4日來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，3月17日接受檢疫期滿前採檢，結果均為陰性。5人檢疫期滿後，至其他住所自主健康管理，因工作需要，3月24日搭乘專車至醫院自費採檢後確診。

            `,
    },
    {
        no: '1019',
        case: '1019',
        date: '3/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1019》' +
            '<br>' +
            `
            案1015至案1019均為印尼籍20多歲男性漁工，今（2021）年3月4日來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，3月17日接受檢疫期滿前採檢，結果均為陰性。5人檢疫期滿後，至其他住所自主健康管理，因工作需要，3月24日搭乘專車至醫院自費採檢後確診。

            `,
    },
    {
        no: '1020',
        case: '1020',
        date: '3/27',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案1020》' +
            '<br>' +
            `
            美國籍40多歲男性，今（2021）年3月9日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館檢疫，3月24日檢疫期滿後，由公司安排至其他旅館自主健康管理，因工作需要，3月25日搭車至醫院自費採檢後確診。

            `,
    },
    {
        no: '1021',
        case: '1021',
        date: '3/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1021》' +
            '<br>' +
            `
            菲律賓籍30多歲男性移工，今（2021）年3月13日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，3月26日接受檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '1022',
        case: '1022',
        date: '3/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1022》' +
            '<br>' +
            `
            菲律賓籍30多歲女性移工，今（2021）年3月25日來臺工作，持有搭機前3日內檢驗陰性報告，入境時因體溫異常（39°C），由機場檢疫人員後送醫院採檢後確診。

            `,
    },
    {
        no: '1023',
        case: '1023',
        date: '3/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1023》' +
            '<br>' +
            `
            菲律賓籍30多歲男性，今年3月9日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至宿舍居家檢疫，3月24日檢疫期滿後，由公司安排至另一宿舍自主健康管理，因工作需要，3月26日至醫院自費採檢後確診。

            `,
    },
    {
        no: '1024',
        case: '1024',
        date: '3/29',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1024》' +
            '<br>' +
            `
            本國籍30多歲男性，2020年12月中旬至菲律賓工作，今（2021）年3月12日返國，持有搭機前3日內檢驗陰性報告，入境時無症狀，並至住處居家檢疫。個案於3月25日出現嗅味覺異常情形，3月26日由衛生單位安排就醫採檢後確診。

            `,
    },
    {
        no: '1025',
        case: '1025',
        date: '3/31',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案1025》' +
            '<br>' +
            `
            本國籍30多歲女性，2019年9月至英國就學，今（2021）年3月28日返臺，持有搭機前3日內檢驗陰性報告，入境時無症狀，並至集中檢疫所檢疫。指揮中心表示，個案3月29日於檢疫所進行專案採檢後確診。

            `,
    },
    {
        no: '1026',
        case: '1026',
        date: '3/31',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案1026》' +
            '<br>' +
            `
            本國籍70多歲男性，長期居住美國，今（2021）年1月3日返臺，持有搭機前3日內檢驗陰性報告，入境後於住家單獨居家檢疫。個案在臺期間並無症狀，3月29日因出境需要，至醫院自費採檢後確診。

            `,
    },
    {
        no: '1027',
        case: '1027',
        date: '3/31',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1027》' +
            '<br>' +
            `
            緬甸籍30多歲男性漁工，今年3月14日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅宿居家檢疫。個案3月29日檢疫期滿後由公司安排至醫院自費採檢後確診。

            `,
    },
    {
        no: '1028',
        case: '1028',
        date: '3/31',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1028》' +
            '<br>' +
            `
            為印尼籍20多歲男性漁工，今年3月4日來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，3月17日接受檢疫期滿前採檢，結果均為陰性。檢疫期滿後，至其他住所自主健康管理。3月24日搭乘專車至醫院自費採檢，自費採檢結果為陰性，因同行中有5人確診（案1015至1019），轉列居家隔離對象。3月29日公司逕自安排至醫院自費採檢後確診。

            `,
    },
    {
        no: '1029',
        case: '1029',
        date: '3/31',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1029》' +
            '<br>' +
            `
            為印尼籍20多歲男性漁工，今年3月4日來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，3月17日接受檢疫期滿前採檢，結果均為陰性。檢疫期滿後，至其他住所自主健康管理。3月24日搭乘專車至醫院自費採檢，自費採檢結果為陰性，因同行中有5人確診（案1015至1019），轉列居家隔離對象。3月29日公司逕自安排至醫院自費採檢後確診。

            `,
    },
    {
        no: '1030',
        case: '1030',
        date: '3/31',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案1030》' +
            '<br>' +
            `
            本國籍20多歲男性，去年10月至衣索比亞工作，今年3月28日返臺，持有搭機前3日內檢驗陰性報告，入境時無症狀，主動通報曾於國外出現咳嗽、嗅味覺異常等症狀，入境採檢陰性。個案入境後至集中檢疫所檢疫，3月30日再次採檢後確診。

            `,
    },
    {
        no: '1031',
        case: '1031',
        date: '3/31',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1031》' +
            '<br>' +
            `
            孟加拉籍20多歲女性，今年3月26日來臺就學，持有搭機前3日內檢驗陰性報告，入境後至防疫旅宿居家檢疫。3月28日出現咳嗽症狀，由衛生單位安排就醫採檢後確診。

            `,
    },
    {
        no: '1032',
        case: '1032',
        date: '4/1',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1032》' +
            '<br>' +
            `
            巴拉圭籍20多歲男性，今（2021）年3月5日自巴拉圭經巴西至杜拜轉機來臺就學，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，並於3月6日及3月18日接受專案採檢，結果為陰性。個案檢疫期滿後，由校方安排至其他住所自主健康管理，因預計返校就學，3月29日至醫院自費採檢後確診。

            `,
    },
    {
        no: '1033',
        case: '1033',
        date: '4/1',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案1033》' +
            '<br>' +
            `
            愛爾蘭籍20多歲男性，今年1月8日曾在愛爾蘭當地檢出COVID-19陽性，1月21日及3月12日採檢結果為陰性。個案3月15日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館檢疫，3月30日檢疫期滿後，因工作需要，至醫院自費採檢後確診。

            `,
    },
    {
        no: '1034',
        case: '1034',
        date: '4/1',
        status: 'default',
        group: 'trp_m',
        info:
            '《案1034》' +
            '<br>' +
            `
            本國籍50多歲女性，因工作長期往返中國、非洲、杜拜等地。個案今年3月5日自杜拜返國，持有搭機前3日內檢驗陰性報告，入境後至住處居家檢疫至3月19日；個案在臺期間並無症狀，原規劃3月25日出國，故於3月24日至醫院自費採檢，結果為陰性。由於出國行程變動，3月30日再度至醫院自費採檢後確診。

            `,
    },
    {
        no: '1035',
        case: '1035',
        date: '4/1',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1035》' +
            '<br>' +
            `
            菲律賓籍20多歲男性移工，今年3月17日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，期間曾於3月24日出現嗅味覺喪失情形，因自覺症狀輕微未通報，3月30日接受檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '1036',
        case: '1036',
        date: '4/1',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1036》' +
            '<br>' +
            `
            印尼籍30多歲女性，長期居住印尼，其丈夫（本國籍）今年2月先行返臺，個案與另一名家人則於3月28日來臺，持有搭機前3日內檢驗陰性報告；個案於機上曾有忽冷忽熱症狀，入境時體溫異常於機場檢疫站攔檢，經量測耳溫有發燒情形，後送就醫並採檢後確診。

            `,
    },
    {
        no: '1037',
        case: '1037',
        date: '4/1',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1037》' +
            '<br>' +
            `
            菲律賓籍40多歲女性移工，今年3月24日來臺工作，持有搭機前3日內檢驗陰性報告，入境時無症狀，並至集中檢疫所檢疫；個案3月30日出現味覺異常症狀，同日由衛生單位安排就醫採檢後確診。

            `,
    },
    {
        no: '1038',
        case: '1038',
        date: '4/2',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1038》' +
            '<br>' +
            `
            印尼籍50多歲男性漁工，今（2021）年3月18日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，3月31日接受檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '1039',
        case: '1039',
        date: '4/2',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1039》' +
            '<br>' +
            `
            印尼籍20多歲男性漁工，今年3月11日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，3月24日接受檢疫期滿前採檢，結果為陰性，3月26日檢疫期滿後，搭乘專車至防疫旅館進行自主健康管理；因工作需要，個案3月31日由公司安排搭乘專車至醫院自費採檢後確診。

            `,
    },
    {
        no: '1040',
        case: '1040',
        date: '4/2',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案1040》' +
            '<br>' +
            `
            瑞士籍30多歲男性，今年3月13日自瑞士經新加坡轉機來臺工作，3月14日入境臺灣，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館居家檢疫，期間均無症狀，3月29日檢疫期滿後，由公司安排至另一旅館自主健康管理，因工作需要，3月31日至醫院自費採檢後確診。

            `,
    },
    {
        no: '1041',
        case: '1041',
        date: '4/3',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1041》' +
            '<br>' +
            `
            案1041、1042及1046均為菲律賓籍女性移工，年齡介於20多歲至30多歲，案1041於3月10日入境，案1042及1046於3月19日入境，皆持有登機前3日內核酸檢驗陰性報告，入境後至集中檢疫所檢疫。案1041於3月23日接受檢疫期滿採檢陰性，因工作需求，自主健康管理期滿後，於4月1日進行自費採檢後確診。

            `,
    },
    {
        no: '1042',
        case: '1042',
        date: '4/3',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1042》' +
            '<br>' +
            `
            案1041、1042及1046均為菲律賓籍女性移工，年齡介於20多歲至30多歲，案1041於3月10日入境，案1042及1046於3月19日入境，皆持有登機前3日內核酸檢驗陰性報告，入境後至集中檢疫所檢疫。案1041於3月23日接受檢疫期滿採檢陰性，因工作需求，自主健康管理期滿後，於4月1日進行自費採檢後確診。

        
            `,
    },
    {
        no: '1043',
        case: '1043',
        date: '4/3',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1043》' +
            '<br>' +
            `
            案1043至1045均為印尼籍男性船員，年齡介於20多歲至40多歲，該船停靠我國後，3月13日起進行全船居家檢疫，4月1日進行全船自費採檢，其中3名個案經採檢後確診。

            `,
    },
    {
        no: '1044',
        case: '1044',
        date: '4/3',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1044》' +
            '<br>' +
            `
            案1043至1045均為印尼籍男性船員，年齡介於20多歲至40多歲，該船停靠我國後，3月13日起進行全船居家檢疫，4月1日進行全船自費採檢，其中3名個案經採檢後確診。

            `,
    },
    {
        no: '1045',
        case: '1045',
        date: '4/3',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1045》' +
            '<br>' +
            `
            案1043至1045均為印尼籍男性船員，年齡介於20多歲至40多歲，該船停靠我國後，3月13日起進行全船居家檢疫，4月1日進行全船自費採檢，其中3名個案經採檢後確診。

            `,
    },
    {
        no: '1046',
        case: '1046',
        date: '4/3',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1046》' +
            '<br>' +
            `
            案1041、1042及1046均為菲律賓籍女性移工，年齡介於20多歲至30多歲，案1041於3月10日入境，案1042及1046於3月19日入境，皆持有登機前3日內核酸檢驗陰性報告，入境後至集中檢疫所檢疫。案1041於3月23日接受檢疫期滿採檢陰性，因工作需求，自主健康管理期滿後，於4月1日進行自費採檢後確診。

            `,
    },
    {
        no: '1047',
        case: '1047',
        date: '4/4',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1047》' +
            '<br>' +
            `
            印尼籍20多歲男性，今（2021）年3月31日來臺就學，持有搭機前3日內檢驗陰性報告，入境時無症狀，並至集中檢疫所進行檢疫。個案4月2日出現發燒、流鼻水、頭痛等症狀，由衛生單位安排就醫採檢後確診。

            `,
    },
    {
        no: '1048',
        case: '1048',
        date: '4/4',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1048》' +
            '<br>' +
            `
            本國籍60多歲男性，長期於菲律賓工作，今年3月23日出現發燒症狀並在當地就醫，3月29日及30日陸續出現呼吸喘、持續發燒、味覺異常等症狀再度就醫，因檢出COVID-19陽性，且檢查雙側肺部有異狀，收治當地醫院治療。個案於4月2日搭乘醫療專機返臺，4月3日入境後收治住院隔離及採檢後確診。

            `,
    },
    {
        no: '1049',
        case: '1049',
        date: '4/5',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1049》' +
            '<br>' +
            `
            印尼籍20多歲女性，今（2021）年3月21日來臺就學，持有搭機前3日內檢驗陰性報告，入境時無症狀，並至集中檢疫所進行檢疫，4月3日由衛生單位安排期滿前採檢後確診。

            `,
    },
    {
        no: '1050',
        case: '1050',
        date: '4/6',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案1050》' +
            '<br>' +
            `
            案1050、1051為本國籍10多歲及20多歲男性，今（2021）年3月上旬一同至埃及工作，案1050於3月29日出現咳嗽症狀，案1051亦自同日起出現咳嗽、流鼻水、喉嚨痛及頭痛情形；2人於4月4日返國，持有搭機前3日內檢驗陰性報告，入境時主動通報有症狀，在機場採檢後確診。

            `,
    },
    {
        no: '1051',
        case: '1051',
        date: '4/6',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案1051》' +
            '<br>' +
            `
            案1050、1051為本國籍10多歲及20多歲男性，今（2021）年3月上旬一同至埃及工作，案1050於3月29日出現咳嗽症狀，案1051亦自同日起出現咳嗽、流鼻水、喉嚨痛及頭痛情形；2人於4月4日返國，持有搭機前3日內檢驗陰性報告，入境時主動通報有症狀，在機場採檢後確診。

            `,
    },
    {
        no: '1052',
        case: '1052',
        date: '4/9',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案1052》' +
            '<br>' +
            `
            本國籍50多歲女性，長期居住義大利，2020年11月上旬出現咳嗽及有痰症狀，於義大利當地就醫，並確診COVID-19，因症狀輕微未住院治療，後續於12月21日及12月25日採檢結果皆為陰性；個案12月27日返臺，入境後至防疫旅館進行居家檢疫，在臺期間並無症狀。個案於今（2021）年4月6日因持續發燒，至醫院就醫及採檢，並留院觀察，隔天個案因出現呼吸喘情形，轉至負壓隔離病房治療，經採檢後確診。

            `,
    },
    {
        no: '1053',
        case: '1053',
        date: '4/9',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1053》' +
            '<br>' +
            `
            菲律賓籍20多歲女性移工，今年3月5日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所進行檢疫，3月18日接受檢疫期滿前採檢，結果為陰性，檢疫期滿後，由公司安排至其他住所自主健康管理，因工作需要，4月7日搭乘專車至醫院自費採檢後確診。

            `,
    },
    {
        no: '1054',
        case: '1054',
        date: '4/9',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1054》' +
            '<br>' +
            `
            菲律賓籍20多歲男性移工，今年3月17日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所進行檢疫，3月30日接受檢疫期滿前採檢，結果為陰性，檢疫期滿後由公司安排至宿舍自主健康管理，因工作需要，4月7日至醫院自費採檢後確診。

            `,
    },
    {
        no: '1055',
        case: '1055',
        date: '4/9',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案1055》' +
            '<br>' +
            `
            本國籍30多歲男性，2020年1月至英國工作，去年11月下旬出現發燒、咳嗽症狀，於當地就醫並確診COVID-19；個案今年3月26日返臺，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，3月27日進行專案採檢，結果為陰性，4月8日接受檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '1056',
        case: '1056',
        date: '4/10',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1056》' +
            '<br>' +
            `
            印尼籍20多歲男性漁工，今（2021）年3月26日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，4月8日接受檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '1057',
        case: '1057',
        date: '4/10',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1057》' +
            '<br>' +
            `
            菲律賓籍20多歲女性移工，今（2021）年3月26日來臺工作，持有搭機前3日內檢驗陰性報告，入境時無症狀，並至集中檢疫所進行檢疫。個案自述4月6日曾短暫出現輕微咳嗽情形，4月8日接受檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '1058',
        case: '1058',
        date: '4/11',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1058》' +
            '<br>' +
            `
            本國籍20多歲女性，2020年10月至美國工作，於今（2021）年4月3日返臺，持有搭機前3日內檢驗陰性報告，入境時並無症狀，並返家單獨居家檢疫。個案於4月4日至8日期間陸續出現咳嗽、流鼻水、鼻塞、腹瀉及嗅味覺異常等症狀，4月9日因症狀持續由衛生單位安排就醫採檢後確診。

            `,
    },
    {
        no: '1059',
        case: '1059',
        date: '4/12',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1059》' +
            '<br>' +
            `
            本國籍20多歲女性，2020年10月至日本就學，於今（2021）年4月4日返臺，持有搭機前3日內檢驗陰性報告，入境時並無症狀，並至防疫旅館居家檢疫。個案於4月9日期間出現頭暈、噁心等症狀，4月10日由衛生單位安排就醫採檢後確診。

            `,
    },
    {
        no: '1060',
        case: '1060',
        date: '4/13',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1060》' +
            '<br>' +
            `
            本國籍40多歲男性，今（2021）年2月中旬至孟加拉工作，4月1日返臺，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館進行檢疫，4月9日出現鼻塞、流鼻水及咳嗽症狀，4月10日由衛生單位安排就醫採檢後確診。

            `,
    },
    {
        no: '1061',
        case: '1061',
        date: '4/13',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1061》' +
            '<br>' +
            `
            本國籍50多歲男性，長期居住菲律賓，因有其他疾病之緊急就醫需求，今年4月11日返國，持有搭機前3日內檢驗陰性報告，入境後即至醫院就醫及採檢，經評估有轉院必要，由院方安排轉院並於次日再次採檢。個案4月12日出現輕微喘症狀，兩次採檢皆呈COVID-19陽性。

            `,
    },
    {
        no: '1062',
        case: '1062',
        date: '4/13',
        status: 'default',
        group: 'trp_AF',
        info:
            '《案1062》' +
            '<br>' +
            `
            本國籍30多歲男性，去年10月至衣索比亞工作，今年3月12日至14日陸續出現咳嗽、頭痛、全身痠痛及嗅覺異常症狀，3月26日於當地檢出COVID-19陽性，4月1日及7日二次採檢皆為陰性。個案4月9日返臺，持有搭機前3日內檢驗陰性報告，入境時主動通報有咳嗽症狀，於機場採檢，結果為陰性，4月12日於集中檢疫所再次採檢後確診。

            `,
    },
    {
        no: '1063',
        case: '1063',
        date: '4/13',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案1063》' +
            '<br>' +
            `
            本國籍20多歲男性，去年9月至愛爾蘭就學，今年4月8日返臺，持有搭機前3日內檢驗陰性報告，入境時有短暫流鼻水症狀，入境後至住處進行檢疫。個案4月12日因發燒症狀，由衛生單位安排就醫採檢後確診。

            `,
    },
    {
        no: '1064',
        case: '1064',
        date: '4/14',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1064》' +
            '<br>' +
            `
            菲律賓籍20多歲女性移工，今年3月31日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所進行檢疫，4月13日接受檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '1065',
        case: '1065',
        date: '4/14',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1065》' +
            '<br>' +
            `
            菲律賓籍30多歲男性船員，今年3月28日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館進行檢疫，4月12日檢疫期滿後搭乘專車至醫院自費採檢後確診。

            `,
    },
    {
        no: '1066',
        case: '1066',
        date: '4/14',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案1066》' +
            '<br>' +
            `
            俄羅斯籍40多歲男性，去年12月曾在俄羅斯當地檢出COVID-19陽性。今年1月20日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館進行檢疫；檢疫期滿後，2月4日至4月10日出海工作，期間並無下船，4月11日返回臺灣，因出境需要，4月12日至醫院自費採檢後確診。

            `,
    },
    {
        no: '1067',
        case: '1067',
        date: '4/14',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案1067》' +
            '<br>' +
            `
            英國籍40多歲男性，今年1月曾於英國當地確診COVID-19，3月31日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所進行檢疫，4月13日接受檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '1068',
        case: '1068',
        date: '4/14',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案1068》' +
            '<br>' +
            `
            本國籍70多歲男性，今年3月1日至加拿大探親，4月9日返臺，持有搭機前3日內檢驗陰性報告，入境時無症狀，並返家進行居家檢疫。個案4月12日因其他疾病之就醫需求，由衛生單位安排就醫採檢後確診。

            `,
    },
    {
        no: '1069',
        case: '1069',
        date: '4/15',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1069》' +
            '<br>' +
            `
            本國籍未滿5歲女童，長期居住印尼，今（2021）年3月21日即有咳嗽症狀，於印尼當地就醫服藥後症狀改善；3月28日與案1036（印尼籍30多歲女性）同行來臺，持有搭機前3日內檢驗陰性報告，入境時隨同案1036後送就醫，因案1069曾於3月21日有咳嗽症狀，亦進行採檢，其中案1036檢驗COVID-19陽性，於4月1日確診，案1069則檢驗陰性，返家由家人照顧，並列為居家隔離對象。指揮中心表示，考量案1069居家隔離前皆由案1036照顧，接觸時間長，為求慎重，4月13日由衛生單位安排至醫院進行隔離期滿採檢後確診。

            `,
    },
    {
        no: '1070',
        case: '1070',
        date: '4/16',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1070》' +
            '<br>' +
            `
            本國籍30多歲男性，2020年1月至菲律賓工作，因過敏體質平時會流鼻水，今（2021）年3月10日出現嗅味覺喪失，症狀持續5至6天後改善，期間僅自行服藥未在菲律賓當地就醫。個案4月13日返臺，持有搭機前3日內檢驗陰性報告，入境時主動通報流鼻水及曾有嗅味覺喪失情形，在機場進行採檢後確診。

            `,
    },
    {
        no: '1071',
        case: '1071',
        date: '4/16',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案1071》' +
            '<br>' +
            `
            克羅埃西亞籍30多歲男性，去年12月10日在克羅埃西亞曾出現發燒及嗅味覺異常症狀，分別於今（2021）年1月14日、1月20日及1月27日採檢COVID-19陽性，後續於2月1日及2月3日兩次採檢陰性。個案2月4日來臺工作，持有搭機前3日內檢驗陰性報告，入境後進行居家檢疫至2月18日，2月20日在臺採檢取得檢驗陰性報告後，接續完成自主健康管理。指揮中心進一步表示，案1071於3月7日登船出海工作，期間並無症狀，4月13日返回我國港口，因出境需要，4月14日與其他15名預計離臺之同船人員進行自費採檢後確診。

            `,
    },
    {
        no: '1072',
        case: '1072',
        date: '4/17',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1072》' +
            '<br>' +
            `
            案1072及1073均為印度籍，分別為30多歲及20多歲男性，今年3月30日來臺就學，皆持有搭機前3日內檢驗陰性報告，入境後至防疫旅館檢疫至4月13日，期間均無症狀。指揮中心表示，2名個案4月14日各自經校方安排至醫院進行檢疫期滿後採檢後確診。

            `,
    },
    {
        no: '1073',
        case: '1073',
        date: '4/17',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1073》' +
            '<br>' +
            `
            案1072及1073均為印度籍，分別為30多歲及20多歲男性，今年3月30日來臺就學，皆持有搭機前3日內檢驗陰性報告，入境後至防疫旅館檢疫至4月13日，期間均無症狀。指揮中心表示，2名個案4月14日各自經校方安排至醫院進行檢疫期滿後採檢後確診。

            `,
    },
    {
        no: '1074',
        case: '1074',
        date: '4/18',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1074》' +
            '<br>' +
            `
            馬來西亞籍40多歲男性，今（2021）年4月15日來臺工作，持有搭機前3日內檢驗陰性報告，入境時因體溫異常(38.5℃)，經送醫院採檢後確診。

            `,
    },
    {
        no: '1075',
        case: '1075',
        date: '4/19',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1075》' +
            '<br>' +
            `
            案1075、案1076皆為菲律賓籍30多歲女性，今（2021）年4月4日來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至檢疫所集中檢疫，2名個案入境時及集中檢疫期間並無症狀，4月17日進行檢疫期滿採檢後確診。

            `,
    },
    {
        no: '1076',
        case: '1076',
        date: '4/19',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1076》' +
            '<br>' +
            `
            案1075、案1076皆為菲律賓籍30多歲女性，今（2021）年4月4日來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至檢疫所集中檢疫，2名個案入境時及集中檢疫期間並無症狀，4月17日進行檢疫期滿採檢後確診。

            `,
    },
    {
        no: '1077',
        case: '1077',
        date: '4/19',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1077》' +
            '<br>' +
            `
            印度籍20多歲男性，4月2日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館進行居家檢疫，入境及檢疫期間並無症狀，4月17日居家檢疫期滿，由公司安排自費採檢後確診。

            `,
    },
    {
        no: '1078',
        case: '1078',
        date: '4/20',
        status: 'case_s4',
        group: 'tw_air',
        info:
            '《案1078》' +
            '<br>' +
            `
            案1078、1079本國籍50多歲及60多歲男性，皆為某航空公司之貨機機組員，2人於今（2021）年4月14日與另1名機組員一同執勤至美國，並由公司安排於當地旅館檢疫，4月16日返臺後進行3天居家檢疫。案1078於4月18日出現喉嚨癢，2人因出勤需要，4月19日經公司安排進行採檢後確診。

            `,
    },
    {
        no: '1079',
        case: '1079',
        date: '4/20',
        status: 'case_s4',
        group: 'tw_air',
        info:
            '《案1079》' +
            '<br>' +
            `
            案1078、1079本國籍50多歲及60多歲男性，皆為某航空公司之貨機機組員，2人於今（2021）年4月14日與另1名機組員一同執勤至美國，並由公司安排於當地旅館檢疫，4月16日返臺後進行3天居家檢疫。案1079於4月17日出現喉嚨癢、全身痠痛症狀，2人因出勤需要，4月19日經公司安排進行採檢後確診。

            `,
    },
    {
        no: '1080',
        case: '1080',
        date: '4/21',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案1080》' +
            '<br>' +
            `
            本國籍40多歲男性，長期於斯洛伐克工作，今（2021）年3月曾出現嗅味覺異常、發冷、頭暈等症狀，並在斯洛伐克當地檢出COVID-19陽性。個案4月4日返臺，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館進行檢疫，4月19日檢疫期滿後至醫院自費採檢後確診。

            `,
    },
    {
        no: '1081',
        case: '1081',
        date: '4/21',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1081》' +
            '<br>' +
            `
            印尼籍40多歲男性，今年4月3日來臺就學，持有搭機前3日內檢驗陰性報告，入境後由校方安排住所進行檢疫，4月19日接受檢疫期滿採檢後確診。

            `,
    },
    {
        no: '1082',
        case: '1082',
        date: '4/21',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1082》' +
            '<br>' +
            `
            菲律賓籍20多歲女性移工，今年4月6日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，4月19日接受檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '1083',
        case: '1083',
        date: '4/21',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1083》' +
            '<br>' +
            `
            菲律賓籍20多歲女性移工，今年3月17日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所進行檢疫，3月30日接受檢疫期滿前採檢，結果為陰性；檢疫期滿後，由公司安排至其他住所自主健康管理，因工作需要，4月19日搭乘專車至醫院自費採檢後確診。

            `,
    },
    {
        no: '1084',
        case: '1084',
        date: '4/22',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1084》' +
            '<br>' +
            `
            哈薩克籍30多歲女性，今（2021）年4月14日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館進行檢疫；個案於4月16日出現咳嗽症狀，4月18日因咳嗽、呼吸困難等情形，由衛生單位安排就醫採檢後確診。

            `,
    },
    {
        no: '1085',
        case: '1085',
        date: '4/22',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1085》' +
            '<br>' +
            `
            案1085、1086為菲律賓籍20多歲及30多歲女性移工，今（2021）年4月7日來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，4月20日接受檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '1086',
        case: '1086',
        date: '4/22',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1086》' +
            '<br>' +
            `
            案1085、1086為菲律賓籍20多歲及30多歲女性移工，今（2021）年4月7日來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，4月20日接受檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '1087',
        case: '1087',
        date: '4/22',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1087》' +
            '<br>' +
            `
            印尼籍30多歲男性船員，今（2021）年3月25日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館檢疫至4月8日，期滿後接續於其他住所自主健康管理，個案因工作需要，4月20日由公司安排至醫院自費採檢後確診。

            `,
    },
    {
        no: '1088',
        case: '1088',
        date: '4/23',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1088》' +
            '<br>' +
            `
            印度籍30多歲男性，今（2021）年4月6日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館進行檢疫；因工作需要，個案於4月21日檢疫期滿後，至醫院自費採檢後確診。

            `,
    },
    {
        no: '1089',
        case: '1089',
        date: '4/23',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案1089》' +
            '<br>' +
            `
            比利時籍40多歲男性，今年4月6日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館進行檢疫，4月20日出現頭痛、喉嚨痛、流鼻水及嗅味覺異常等症狀，隔日由衛生單位安排就醫採檢後確診。

            `,
    },
    {
        no: '1090',
        case: '1090',
        date: '4/23',
        status: 'case_s1',
        group: 'tw_air',
        info:
            '《案1090》' +
            '<br>' +
            `
            我國今（2021）年4月21日接獲我國某航空公司通報，該公司1名印尼籍40多歲男性貨機機師，4月20日執勤至澳洲時，自覺出現喉嚨癢情形，並於當地檢出COVID-19陽性。

            案1090為印尼籍10多歲男性，為該名機師之同住家人，近期無出國史，4月21日匡列為居家隔離接觸者，並由衛生單位安排就醫採檢，4月22日出現喉嚨乾痛、暈眩等症狀，經採檢後確診。

            `,
    },
    {
        no: '1091',
        case: '1091',
        date: '4/23',
        status: 'case_s4',
        group: 'tw_air',
        info:
            '《案1091》' +
            '<br>' +
            `
            我國今（2021）年4月21日接獲我國某航空公司通報，該公司1名印尼籍40多歲男性貨機機師，4月20日執勤至澳洲時，自覺出現喉嚨癢情形，並於當地檢出COVID-19陽性。

            案1091為印尼籍50多歲男性，為該名機師之同事，4月4日至4月10日曾執勤至美國，期間無症狀，返臺後於4月15日進行檢疫期滿採檢，結果為陰性；個案4月16日自覺有疲憊、身體微熱情形，同日中午與該機師及案1090一同於台北清真寺活動，4月18日出現輕微咳嗽症狀，經服藥後症狀改善，因預計返回印尼探親，4月21日進行自費採檢後確診。

            `,
    },
    {
        no: '1092',
        case: '1092',
        date: '4/24',
        status: 'case_s4',
        group: 'tw_air',
        info:
            '《案1092》' +
            '<br>' +
            `
            我國今（2021）年4月21日接獲我國某航空公司通報，該公司1名印尼籍40多歲男性貨機機師，4月20日執勤至澳洲時，自覺出現喉嚨癢情形，並於當地檢出COVID-19陽性。

            案1092為本國籍40多歲男性，為該航空公司之貨機機組員，個案今年4月9日至4月16日曾執勤至紐西蘭及荷蘭，因出勤需求曾於4月9日及13日進行採檢，結果皆為陰性，出勤期間無症狀，返臺後於4月19日進行檢疫期滿採檢，結果為陰性；個案4月22日執勤往返日本，返臺後於住家居家檢疫，同日下午因指揮中心針對澳洲檢出陽性機師之接觸者進行回溯採檢後確診。

            `,
    },
    {
        no: '1093',
        case: '1093',
        date: '4/24',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1093》' +
            '<br>' +
            `
            菲律賓籍20多歲男性，今（2021）年3月17日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所進行檢疫，期間並無症狀及期滿採檢為陰性；個案於4月7日因同行移工確診（案1054）進行居家隔離，於4月11日解除後進行自主健康管理，因工作需要，4月22日由公司安排至醫院自費採檢後確診。

            `,
    },
    {
        no: '1094',
        case: '1094',
        date: '4/24',
        status: 'case_s2',
        group: 'trp_A',
        info:
            '《案1094》' +
            '<br>' +
            `
            本國籍70多歲男性，長期居住菲律賓，並於今年4月8日來臺，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館進行檢疫，4月19日因心情不佳無食慾等狀況，由衛生局安排就醫，因無發燒及呼吸道相關症狀，故無採檢並返回旅館繼續檢疫，4月21日因個案未領早餐，旅館人員發現個案已無心跳，經法醫採檢後確診。

            `,
    },
    {
        no: '1095',
        case: '1095',
        date: '4/24',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1095》' +
            '<br>' +
            `
            印度籍20多歲男性學生，今年4月8日首次來臺，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館檢疫至4月22日，期滿後隔日由學校專案安排至醫院採檢後確診。

            `,
    },
    {
        no: '1096',
        case: '1096',
        date: '4/24',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1096》' +
            '<br>' +
            `
            印尼籍20多歲男性學生，今年4月8日首次來臺，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館檢疫至4月22日，期滿後隔日由學校專案安排至醫院採檢後確診。

            `,
    },
    {
        no: '1097',
        case: '1097',
        date: '4/24',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1097》' +
            '<br>' +
            `
            印尼籍30多歲男性漁工，4月22日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，4月23日因有咳嗽症狀，由集中檢疫所安排採檢後確診。

            `,
    },
    {
        no: '1098',
        case: '1098',
        date: '4/24',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1098》' +
            '<br>' +
            `
            菲律賓籍20多歲女性移工，今年3月26日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，4月8日接受檢疫期滿前採檢陰性；因工作需要，個案於4月23日至醫院自費採檢後確診。

            `,
    },
    {
        no: '1099',
        case: '1099',
        date: '4/25',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案1099》' +
            '<br>' +
            `
            本國籍40多歲男性，今（2021）年2月3日至墨西哥洽公，4月12日至16日停留美國，於4月18日抵臺，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館進行檢疫；4月22日因出現發燒及咳嗽症狀，由衛生單位安排至醫院就醫採檢後確診。

            `,
    },
    {
        no: '1100',
        case: '1100',
        date: '4/25',
        status: 'case_s4',
        group: 'tw_air',
        info:
            '《案1100》' +
            '<br>' +
            `
            本國籍50多歲男性，為該航空公司之貨機機組員，個案今（2021）年4月13日至4月17日曾執勤至美國，4月18日抵臺，居家檢疫3天，4月21由公司安排自費期滿採檢，結果為陰性；4月22日因指揮中心針對澳洲檢出陽性機師之接觸者進行回溯採檢後確診。

            `,
    },
    {
        no: '1101',
        case: '1101',
        date: '4/25',
        status: 'case_s4',
        group: 'tw_air',
        info:
            '《案1101》' +
            '<br>' +
            `
            本國籍30多歲男性，同為該航空公司之貨機機師，於今年4月18日與另3名機組員一同執勤至德國，並由公司安排於當地旅館檢疫，4月22日返臺後進行3天居家檢疫，4月24日檢疫期滿後由公司安排採檢後確診。

            `,
    },
    {
        no: '1102',
        case: '1102',
        date: '4/26',
        status: 'case_s4',
        group: 'tw_air',
        info:
            '《案1102》' +
            '<br>' +
            `
            本國籍30多歲男性，為該航空公司貨機機師，個案今（2021）年4月6日至4月9日曾執勤美國，返臺後居家檢疫至4月14日，採檢結果為陰性，在臺期間並無症狀；4月19日至4月22日再次執勤至美國，返臺後於住家進行居家檢疫，4月24日出現咳嗽、發燒等症狀，4月25日進行期滿前採檢後確診。

            `,
    },
    {
        no: '1103',
        case: '1103',
        date: '4/26',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1103》' +
            '<br>' +
            `
            緬甸籍40多歲男性，多次航行往返日本及菲律賓2國，4月22日出現發燒、肌肉痛、疲勞及呼吸喘等症狀，個案自出現症狀起，便分別單獨於艙房內隔離，並於4月24日該船停靠我國後，經衛生單位安排就醫採檢後確診。

            `,
    },
    {
        no: '1104',
        case: '1104',
        date: '4/26',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1104》' +
            '<br>' +
            `
            中國籍40多歲男性，今年3月自日本登船，4月23日出現發燒及咳嗽症狀，個案自出現症狀起，便分別單獨於艙房內隔離，並於4月24日該船停靠我國後，經衛生單位安排就醫採檢後確診。

            `,
    },
    {
        no: '1105',
        case: '1105',
        date: '4/26',
        status: 'case_s4',
        group: 'tw_air',
        info:
            '《案1105》' +
            '<br>' +
            `
            本國籍40多歲男性，為該航空公司貨機機師，個案今年4月8日至4月10日曾執勤美國，返臺後居家檢疫至4月15日，採檢結果為陰性，檢疫期間並無症狀；4月25日因飛航機師採檢專案進行採檢後確診。

            `,
    },
    {
        no: '1106',
        case: '1106',
        date: '4/27',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案1106》' +
            '<br>' +
            `
            本國籍70多歲女性，今（2021）年3月1日與日前公布之案1068一同至加拿大探親，4月8日返臺，持有搭機前3日內檢驗陰性報告，入境後至住處居家檢疫，因案1068確診，改列為居家隔離對象，4月13日進行接觸者採檢，結果為陰性。個案隔離期間並無症狀，4月25日由衛生單位安排至醫院進行隔離期滿前採檢後確診。

            `,
    },
    {
        no: '1107',
        case: '1107',
        date: '4/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1107》' +
            '<br>' +
            `
            緬甸籍30多歲男性，為昨（26）日公布案1103及案1104之同船船員，於4月24日起陸續出現發燒及咳嗽症狀，4月25日後送就醫並採檢後確診。

            `,
    },
    {
        no: '1108',
        case: '1108',
        date: '4/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1108》' +
            '<br>' +
            `
            菲律賓籍20多歲女性移工，今年4月25日來臺工作，持有搭機前3日內檢驗陰性報告，入境時無症狀，因主動通報3月下旬於菲律賓當地確診COVID-19，故在機場進行採檢後確診。

            `,
    },
    {
        no: '1109',
        case: '1109',
        date: '4/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1109》' +
            '<br>' +
            `
            中國籍40多歲男性，為昨（26）日公布案1103及案1104之同船船員，於4月26日進行接觸者採檢後確診。

            `,
    },
    {
        no: '1110',
        case: '1110',
        date: '4/27',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1110》' +
            '<br>' +
            `
            緬甸籍20多歲男性，為昨（26）日公布案1103及案1104之同船船員，於4月26日進行接觸者採檢後確診。

            `,
    },
    {
        no: '1111',
        case: '1111',
        date: '4/27',
        status: 'case_s1',
        group: 'tw_air',
        info:
            '《案1111》' +
            '<br>' +
            `
            印尼籍40多歲女性，為澳洲驗出陽性機師及案1090之同住家人，近期無出國史，今（2021）年4月21日匡列為居家隔離接觸者，當日及次（22）日採檢結果均為陰性。4月26日出現喉嚨乾、身體痛、暈眩、口苦、噁心、睡不著等症狀，由衛生單位安排採檢後確診。

            `,
    },
    {
        no: '1112',
        case: '1112',
        date: '4/28',
        status: 'case_s1',
        group: 'trp_NA',
        info:
            '《案1112》' +
            '<br>' +
            `
            本國籍70多歲男性，為境外移入個案（案1068、案1106）之非同住家人，近期無出國史，亦無疑似症狀，曾因案1068居家檢疫期間於住處跌倒，前往該案住處停留半個多小時，另於案1106居家隔離期間，協助送餐事宜。衛生單位於4月26日安排案1112進行接觸者採檢後確診。

            `,
    },
    {
        no: '1113',
        case: '1113',
        date: '4/28',
        status: 'case_s1',
        group: 'tw_air',
        info:
            '《案1113》' +
            '<br>' +
            `
            本國籍10多歲男性，為昨日公布某航空公司血清抗體陽性另一機師之同住家人，近期無出國史，亦無疑似症狀，4月26日由衛生單位安排進行接觸者採檢後確診。

            `,
    },
    {
        no: '1114',
        case: '1114',
        date: '4/28',
        status: 'case_s1',
        group: 'tw_air',
        info:
            '《案1114》' +
            '<br>' +
            `
            本國籍40多歲女性，為昨日公布某航空公司血清抗體陽性機師之同住家人，近期無出國史，亦無疑似症狀，4月26日由衛生單位安排進行接觸者採檢後確診。

            `,
    },
    {
        no: '1115',
        case: '1115',
        date: '4/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1115》' +
            '<br>' +
            `
            印尼籍20多歲女性，今（2021）年4月11日來臺就學，持有搭機前3日內檢驗陰性報告，入境後由校方安排住所進行居家檢疫，期間並無症狀；4月26日檢疫期滿後，經校方安排專車至醫院採檢後確診。

            `,
    },
    {
        no: '1116',
        case: '1116',
        date: '4/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1116》' +
            '<br>' +
            `
            印尼籍20多歲男性，今（2021）年4月11日來臺就學，持有搭機前3日內檢驗陰性報告，入境後由校方安排住所進行居家檢疫，期間並無症狀；4月26日檢疫期滿後，經校方安排專車至醫院採檢後確診。

            `,
    },
    {
        no: '1117',
        case: '1117',
        date: '4/28',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1117》' +
            '<br>' +
            `
            本國籍30多歲男性，2020年2月至印度工作，今年4月13日返國，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館進行檢疫，4月24日出現輕微咳嗽症狀，隔日因腹瀉及發燒，由衛生單位安排就醫採檢後確診。

            `,
    },
    {
        no: '1118',
        case: '1118',
        date: '4/29',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1118》' +
            '<br>' +
            `
            菲律賓籍20多歲女性移工，4月7日來台工作，入境後至集中檢疫所進行檢疫，4月20日接受檢疫期滿前採檢，結果為陰性；檢疫期滿後，由公司安排至其他住所單獨自主健康管理，因工作需要，4月27日搭乘專車至醫院自費採檢確診。

            `,
    },
    {
        no: '1119',
        case: '1119',
        date: '4/29',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案1119》' +
            '<br>' +
            `
            本國籍40多歲男性，今年1月至墨西哥洽公，4月18日返台，入境後至防疫旅館進行檢疫，4月24日陸續出現咳嗽、發燒症狀，4月26日經衛生單位安排就醫採檢後確診。

            `,
    },
    {
        no: '1120',
        case: '1120',
        date: '4/29',
        status: 'case_s1',
        group: 'tw_air',
        info:
            '《案1120》' +
            '<br>' +
            `
            本國籍40多歲男性，為機場防疫旅館員工，近期無出國史，平時工作項目為檢查房間環境之清潔，偶爾協助機組員購買物品或送備品，工作期間佩戴口罩及手套。個案4月17日起陸續出現咳嗽、流鼻水、食慾不振及呼吸喘等症狀，並於4月19日至4月26日間多次至診所就醫，因症狀未改善，4月27日至醫院就醫，經診斷有肺炎情形，收治住院隔離並採檢確診。

            `,
    },
    {
        no: '1121',
        case: '1121',
        date: '4/29',
        status: 'case_s1',
        group: 'tw_air',
        info:
            '《案1121》' +
            '<br>' +
            `
            本國籍40多歲女性，為案1078（某航空公司機師）之同住家人，4月20日列為居家隔離接觸者並採檢，檢驗結果為陰性；個案4月27日因出現胸悶、呼吸困難等情形，由衛生單位安排就醫採檢確診。
            
            `,
    },
    {
        no: '1122',
        case: '1122',
        date: '4/29',
        status: 'case_s1',
        group: 'tw_air',
        info:
            '《案1122》' +
            '<br>' +
            `
            本國籍50多歲男性，為某航空公司貨機機師，4月2日至4月9日曾執勤至美國，返台後於防疫旅館檢疫至4月15日，期間無症狀，檢疫期滿採檢結果為陰性；個案4月19日再次執勤至美國，4月24日自美國經日本返台，4月25日入境後返回住處居家檢疫，4月27日出現喉嚨痛及發燒症狀，由衛生單位安排就醫採檢確診。

            `,
    },
    {
        no: '1123',
        case: '1123',
        date: '4/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1123》' +
            '<br>' +
            `
            本國籍50多歲男性，今年2月至哈薩克洽公，3月30日返台，入境後至防疫旅館進行檢疫，4月14日檢疫期滿後返家；因預計再次出國洽公，4月28日至醫院自費採檢確診。

            `,
    },
    {
        no: '1124',
        case: '1124',
        date: '4/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1124》' +
            '<br>' +
            `
            菲律賓籍20多歲男性船員，今年3月自埃及登船工作。該船航行途中經過我國，申請4月9日於我國外海進行物資補給，因當日個案出現意識不清及呼吸急促症狀，4月10日入境我國後，經衛生單位安排就醫治療並採檢；個案住院期間，曾採檢3次檢驗結果均為陰性，4月28日因出境需要，由船務公司安排進行自費採檢確診。

            `,
    },
    {
        no: '1125',
        case: '1125',
        date: '4/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1125》' +
            '<br>' +
            `
            菲律賓籍30多歲男性移工，今年4月16日來台工作，入境後至集中檢疫所進行檢疫，4月29日進行檢疫期滿前採檢確診。

            `,
    },
    {
        no: '1126',
        case: '1126',
        date: '4/30',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1126》' +
            '<br>' +
            `
            印度籍30多歲男性，今年2月21日來台工作，入境後至防疫旅館進行檢疫，2月27日檢疫期滿後返回住處。個案在台期間並無症狀，因預計返回印度，4月27日至醫院自費採檢確診。

            `,
    },
    {
        no: '1127',
        case: '1127',
        date: '4/30',
        status: 'case_s1',
        group: 'tw_air',
        info:
            '《案1127》' +
            '<br>' +
            `
            本國籍20多歲女性，為機場防疫旅館餐飲部員工，近期無出國史，4月29日依旅館清空計畫至集中檢疫所，當日下午出現喉嚨癢症狀，於檢疫所進行採檢確診。

            `,
    },
    {
        no: '1128',
        case: '1128',
        date: '4/30',
        status: 'case_s1',
        group: 'tw_air',
        info:
            '《案1128》' +
            '<br>' +
            `
            本國籍20多歲男性，為機場防疫旅館房務部員工，近期無出國史，4月29日依旅館清空計畫至集中檢疫所，但因量測體溫有發燒情形，後送就醫採檢及隔離治療後確診。

            `,
    },
    {
        no: '1129',
        case: '1129',
        date: '4/30',
        status: 'case_s1',
        group: 'tw_air',
        info:
            '《案1129》' +
            '<br>' +
            `
            本國籍60多歲女性，為機場防疫旅館房務部員工，近期無出國史，4月26日曾出現輕微咳嗽、喉嚨痛症狀，並自行購買成藥服用，4月29日依旅館清空計畫前往集中檢疫所，並於檢疫所內進行採檢後確診。

            `,
    },
    {
        no: '1130',
        case: '1130',
        date: '5/1',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1130》' +
            '<br>' +
            `
            菲律賓籍40多歲男性漁工，今（2021）年4月16日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所進行檢疫，4月29日進行檢疫期滿前採檢確診。

            `,
    },
    {
        no: '1131',
        case: '1131',
        date: '5/1',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1131》' +
            '<br>' +
            `
            本國籍40多歲男性，去（2020）年12月至印尼洽公，於今年3月28日返臺，持有搭機前3日內檢驗陰性報告，入境後至其他住所進行檢疫，4月12日檢疫期滿後返回住家；因預計再次出國，4月30日至醫院自費採檢。

            `,
    },
    {
        no: '1132',
        case: '1132',
        date: '5/1',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1132》' +
            '<br>' +
            `
            本國籍40多歲男性，去年3月至菲律賓工作，並於今年3月13日至19日間陸續出現喉嚨癢、發燒、畏寒等症狀，3月20日在當地檢出COVID-19陽性，並於4月11日及12日兩次採檢皆為陰性。個案4月15日返臺，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館進行檢疫；4月30日檢疫期滿前往醫院自費採檢確診。

            `,
    },
    {
        no: '1133',
        case: '1133',
        date: '5/1',
        status: 'case_s1',
        group: 'tw_air',
        info:
            '《案1133》' +
            '<br>' +
            `
            本國籍未滿5歲男童，近期無出國史，今（2021）年4月25日匡列為居家隔離對象，4月29日出現發燒症狀，由衛生單位安排就醫採檢確診。

            `,
    },
    {
        no: '1134',
        case: '1134',
        date: '5/2',
        status: 'case_s1',
        group: 'tw_air',
        info:
            '《案1134》' +
            '<br>' +
            `
            本國籍30多歲男性，為機場防疫旅館房務部員工（案1129）之同住家人，近期無出國史，於4月29日出現肌肉痠痛、咳嗽等症狀，衛生單位於4月30日安排進行接觸者採檢確診。

            `,
    },
    {
        no: '1135',
        case: '1135',
        date: '5/2',
        status: 'case_s1',
        group: 'tw_air',
        info:
            '《案1135》' +
            '<br>' +
            `
            本國籍60多歲男性，同為機場防疫旅館房務部員工（案1129）之同住家人，近期無出國史，4月29日出現咳嗽、發燒及腹瀉等症狀，4月30日由衛生單位安排進行接觸者採檢確診。

            `,
    },
    {
        no: '1136',
        case: '1136',
        date: '5/2',
        status: 'case_s1',
        group: 'tw_air',
        info:
            '《案1136》' +
            '<br>' +
            `
            本國籍30多歲女性，亦為機場防疫旅館房務部員工（案1129）之同住家人，近期無出國史，4月28日至29日陸續有喉嚨痛及發燒症狀，自行至診所就醫，4月30日由衛生單位安排進行接觸者採檢確診。

            `,
    },
    {
        no: '1137',
        case: '1137',
        date: '5/2',
        status: 'case_s1',
        group: 'tw_air',
        info:
            '《案1137》' +
            '<br>' +
            `
            本國籍未滿5歲女童，為航空公司貨機機師（案1129）及昨日公布案1133之同住家人，近期無出國史，亦無疑似症狀，因案1133確診，經評估感染風險，於4月30日由衛生單位安排就醫採檢確診。

            `,
    },
    {
        no: '1138',
        case: '1138',
        date: '5/2',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1138》' +
            '<br>' +
            `
            印尼籍20多歲男性，今（2021）年4月15日來臺就學，持有搭機前3日內檢驗陰性報告且入境時無不適症狀，入境後至防疫旅館進行居家檢疫。檢疫期滿後由學校安排至醫院採檢確診。

            `,
    },
    {
        no: '1139',
        case: '1139',
        date: '5/3',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案1139》' +
            '<br>' +
            `
            荷蘭籍40多歲男性船員，今（2021）年4月10日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館進行檢疫；4月25日檢疫期滿後，由公司安排至其他住所自主健康管理，因工作需要，5月1日搭乘專車至醫院自費採檢確診。

            `,
    },
    {
        no: '1140',
        case: '1140',
        date: '5/3',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案1140》' +
            '<br>' +
            `
            30多歲荷蘭籍男性船員，今年4月8日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館進行檢疫；4月23日檢疫期滿後，由公司安排至其他住所自主健康管理，因工作需要，5月1日搭乘專車至醫院自費採檢確診。

            `,
    },
    {
        no: '1141',
        case: '1141',
        date: '5/3',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1141》' +
            '<br>' +
            `
            案1141至案1143均為印尼籍男性漁工，年齡介於10多歲至40多歲，今年4月19日來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所進行檢疫，5月2日進行檢疫期滿前採檢。

            `,
    },
    {
        no: '1142',
        case: '1142',
        date: '5/3',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1142》' +
            '<br>' +
            `
            案1141至案1143均為印尼籍男性漁工，年齡介於10多歲至40多歲，今年4月19日來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所進行檢疫，5月2日進行檢疫期滿前採檢。

            `,
    },
    {
        no: '1143',
        case: '1143',
        date: '5/3',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1143》' +
            '<br>' +
            `
            案1141至案1143均為印尼籍男性漁工，年齡介於10多歲至40多歲，今年4月19日來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所進行檢疫，5月2日進行檢疫期滿前採檢。

            `,
    },
    {
        no: '1144',
        case: '1144',
        date: '5/3',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1144》' +
            '<br>' +
            `
            本國籍20多歲女性，今年4月21日前往烏茲別克工作，4月27日返臺，持有搭機前3日內檢驗陰性報告，入境後返家進行檢疫；4月28日起陸續出現頭痛、發燒及噁心症狀，4月30日因症狀未改善，由衛生單位安排就醫採檢確診。

            `,
    },
    {
        no: '1145',
        case: '1145',
        date: '5/3',
        status: 'case_s1',
        group: 'tw_air',
        info:
            '《案1145》' +
            '<br>' +
            `
            本國籍40多歲男性，為機場防疫旅館之外包商工作人員，今（2021）年4月初至4月28日間除休假外皆在該旅館工作，個案4月28日出現咳嗽症狀，4月30日曾至診所就醫，5月1日經衛生單位調查評估後，同日安排就醫採檢確診。

            `,
    },
    {
        no: '1146',
        case: '1146',
        date: '5/3',
        status: 'case_s1',
        group: 'tw_air',
        info:
            '《案1146》' +
            '<br>' +
            `
            印尼籍10多歲女性，為澳洲檢出陽性機師、案1090及案1111之同住家人，近期無出國史，4月21日匡列為居家隔離接觸者並進行採檢，結果為陰性；個案於4月30日出現身體微熱、流鼻水、喉嚨不適等情形，因自覺症狀輕微故未回報，衛生單位考量個案之其他家人皆已確診，為求慎重，於5月2日再次安排採檢後確診。

            `,
    },
    {
        no: '1147',
        case: '1147',
        date: '5/4',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1147》' +
            '<br>' +
            `
            印尼籍20多歲男性漁工，今（2021）年4月16日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館進行檢疫；5月1日檢疫期滿後，由公司安排自費採檢確診。

            `,
    },
    {
        no: '1148',
        case: '1148',
        date: '5/4',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1148》' +
            '<br>' +
            `
            本國籍60多歲男性，2020年12月至印度洽公，曾於工作期間接觸確診個案，並於今年4月24日出現虛弱、倦怠等症狀；5月1日返國，持有搭機前3日內檢驗陰性報告，入境時無症狀，並至防疫旅館進行檢疫，5月2日因嗅覺異常，由衛生單位安排就醫採檢後確診。

            `,
    },
    {
        no: '1149',
        case: '1149',
        date: '5/4',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1149》' +
            '<br>' +
            `
            本國籍50多歲男性，今年1月至泰國工作，5月2日返國，入境時因發燒（38.2度）於機場攔檢，並後送就醫隔離採檢後確診。

            `,
    },
    {
        no: '1150',
        case: '1150',
        date: '5/4',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1150》' +
            '<br>' +
            `
            印尼籍30多歲男性漁工，今年4月20日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所進行檢疫，5月3日進行檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '1151',
        case: '1151',
        date: '5/4',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1151》' +
            '<br>' +
            `
            印度籍20多歲男性，今年4月16日來臺就學，持有搭機前3日內檢驗陰性報告，入境後由校方安排住所進行檢疫，5月3日接受檢疫期滿採檢後確診。

            `,
    },
    {
        no: '1152',
        case: '1152',
        date: '5/4',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1152》' +
            '<br>' +
            `
            菲律賓籍20多歲男性移工，今年4月20日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，5月3日進行檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '1153',
        case: '1153',
        date: '5/4',
        status: 'case_s4',
        group: 'tw_air',
        info:
            '《案1153》' +
            '<br>' +
            `
            本國籍30多歲男性，為某航空公司機師，今（2021）年4月16日至4月18日曾執勤至美國，返臺後於住家檢疫至4月21日，檢疫期滿前採檢結果為陰性；4月25日進行機師專案採檢，核酸檢測及血清抗體皆為陰性。個案5月1日出現發燒、咳嗽、流鼻水等症狀向公司通報，同日經衛生單位安排就醫採檢後確診。

            `,
    },
    {
        no: '1154',
        case: '1154',
        date: '5/4',
        status: 'case_s4',
        group: 'tw_air',
        info:
            '《案1154》' +
            '<br>' +
            `
            本國籍20多歲女性，為某航空公司空服員，今年4月22日至4月25日曾執勤至美國，返臺後於機場防疫旅館檢疫至4月28日，檢疫期滿前採檢結果為陰性；4月29日晚間因應機場防疫旅館清空計畫，至集中檢疫所檢疫，4月30日進行採檢，核酸檢測及血清抗體皆為陰性。個案5月2日出現發熱、頭暈及胃痛等症狀，由檢疫所安排就醫採檢後確診。

            `,
    },
    {
        no: '1155',
        case: '1155',
        date: '5/5',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1155》' +
            '<br>' +
            `
            菲律賓籍20多歲女性移工，今（2021）年4月20日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫；5月3日進行檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '1156',
        case: '1156',
        date: '5/5',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1156》' +
            '<br>' +
            `
            印尼籍30多歲男性漁工，今年4月20日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫；5月3日進行檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '1157',
        case: '1157',
        date: '5/5',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1157》' +
            '<br>' +
            `
            日本籍40多歲男性，今年4月28日來臺洽公，持有搭機前3日內檢驗陰性報告，入境時無症狀，並至防疫旅館檢疫；5月2日出現喉嚨癢、肌肉痠痛等症狀，隔天由衛生單位安排就醫採檢後確診。

            `,
    },
    {
        no: '1158',
        case: '1158',
        date: '5/5',
        status: 'default',
        group: 'trp_NA',
        info:
            '《案1158》' +
            '<br>' +
            `
            本國籍20多歲男性，2020年9月至美國工作，今年3月23日曾在當地確診COVID-19；個案4月11日返國，持有搭機前3日內檢驗陰性報告，入境時主動通報曾在美國確診，於機場及集中檢疫所共兩次採檢結果皆為陰性，並於4月12日移至防疫旅館接續完成居家檢疫；個案4月26日檢疫期滿返家，因工作需要，5月3日至醫院自費採檢後確診。

            `,
    },
    {
        no: '1159',
        case: '1159',
        date: '5/5',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1159》' +
            '<br>' +
            `
            案1159及案1160為印尼籍20多歲女性及10多歲男性，今年4月21日來臺就學，皆持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，5月4日進行檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '1160',
        case: '1160',
        date: '5/5',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1160》' +
            '<br>' +
            `
            案1159及案1160為印尼籍20多歲女性及10多歲男性，今年4月21日來臺就學，皆持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，5月4日進行檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '1161',
        case: '1161',
        date: '5/5',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1161》' +
            '<br>' +
            `
            印尼籍10多歲男性漁工，今年4月21日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，5月4日進行檢疫期滿前採檢後確診。

            `,
    },

    {
        no: '1162',
        case: '1162',
        date: '5/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1162》' +
            '<br>' +
            `
            案1162至案1166均為菲律賓籍移工，分別為3女2男，年齡介於3 0多歲至40多歲，今（2021）年4月21日來臺工作，皆持有登機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，5月4日進行檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '1163',
        case: '1163',
        date: '5/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1163》' +
            '<br>' +
            `
            案1162至案1166均為菲律賓籍移工，分別為3女2男，年齡介於3 0多歲至40多歲，今（2021）年4月21日來臺工作，皆持有登機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，5月4日進行檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '1164',
        case: '1164',
        date: '5/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1164》' +
            '<br>' +
            `
            案1162至案1166均為菲律賓籍移工，分別為3女2男，年齡介於3 0多歲至40多歲，今（2021）年4月21日來臺工作，皆持有登機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，5月4日進行檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '1165',
        case: '1165',
        date: '5/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1165》' +
            '<br>' +
            `
            案1162至案1166均為菲律賓籍移工，分別為3女2男，年齡介於3 0多歲至40多歲，今（2021）年4月21日來臺工作，皆持有登機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，5月4日進行檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '1166',
        case: '1166',
        date: '5/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1166》' +
            '<br>' +
            `
            案1162至案1166均為菲律賓籍移工，分別為3女2男，年齡介於3 0多歲至40多歲，今（2021）年4月21日來臺工作，皆持有登機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，5月4日進行檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '1167',
        case: '1167',
        date: '5/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1167》' +
            '<br>' +
            `
            菲律賓籍30多歲男性漁工，今年4月22日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，5月5日進行檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '1168',
        case: '1168',
        date: '5/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1168》' +
            '<br>' +
            `
            案1168及案1169均為越南籍20多歲女性移工，今年4月19日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館檢疫，5月4日進行檢疫期滿採檢後確診。

            `,
    },
    {
        no: '1169',
        case: '1169',
        date: '5/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1169》' +
            '<br>' +
            `
            案1168及案1169均為越南籍20多歲女性移工，今年4月19日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館檢疫，5月4日進行檢疫期滿採檢後確診。

            `,
    },
    {
        no: '1170',
        case: '1170',
        date: '5/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1170》' +
            '<br>' +
            `
            印尼籍20多歲男性漁工，今年4月22日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，5月5日進行檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '1171',
        case: '1171',
        date: '5/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1171》' +
            '<br>' +
            `
            菲律賓籍20多歲男性移工，今年4月14日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，4月27日進行檢疫期滿前採檢，檢驗結果為陰性；個案因工作需要，5月5日至醫院自費採檢後確診。

            `,
    },
    {
        no: '1172',
        case: '1172',
        date: '5/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1172》' +
            '<br>' +
            `
            菲律賓籍10多歲女性，今年4月22日來臺就學，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫；5月5日進行檢疫期滿前採檢後確診。

            `,
    },
    {
        no: '1173',
        case: '1173',
        date: '5/6',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1173》' +
            '<br>' +
            `
            菲律賓籍20多歲女性，今年5月4日來臺工作，持有搭機前3日內檢驗陰性報告，入境時因發燒攔檢，並後送就醫採檢後確診。

            `,
    },
    {
        no: '1174',
        case: '1174',
        date: '5/6',
        status: 'case_s1',
        group: 'tw_air',
        info:
            '《案1174》' +
            '<br>' +
            `
            本國籍30多歲男性，為機場防疫旅館工程部員工，近期無出國史，因業務需要，經常與房務部往來，並與案1120及案1129有密切接觸。案1174於4月29日配合機場防疫旅館清空計畫前往集中檢疫所，當日採檢之核酸檢測及血清抗體皆為陰性，5月3日起陸續出現喉嚨痛、發燒及肌肉痠痛等情形，5月4日回報症狀後，由檢疫所安排至醫院採檢確診。

            `,
    },
    {
        no: '1175',
        case: '1175',
        date: '5/7',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1175》' +
            '<br>' +
            `
            菲律賓籍30多歲男性船員，今（2021）年4月20日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館檢疫，5月5日檢疫期滿，同日由公司安排專車至醫院自費採檢確診。

            `,
    },
    {
        no: '1176',
        case: '1176',
        date: '5/7',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1176》' +
            '<br>' +
            `
            菲律賓籍20多歲女性移工，今年4月7日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，4月20日進行檢疫期滿前採檢，結果為陰性；個案4月22日檢疫期滿後，由公司安排至其他住所自主健康管理，4月27日曾至醫院自費採檢，結果為陰性；因工作需要，5月5日再度至醫院自費採檢確診。

            `,
    },
    {
        no: '1177',
        case: '1177',
        date: '5/7',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1177》' +
            '<br>' +
            `
            菲律賓籍30多歲男性漁工，今年4月23日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，5月6日進行檢疫期滿前採檢確診。

            `,
    },
    {
        no: '1178',
        case: '1178',
        date: '5/7',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1178》' +
            '<br>' +
            `
            本國籍40多歲男性，2020年2月至印度工作，今年4月23日返國，持有搭機前3日內檢驗陰性報告，入境後至住處居家檢疫，4月25日出現咳嗽、喉嚨痛等症狀，4月28日由衛生單位安排就醫採檢，結果為陰性；個案因仍有喉嚨痛情形，衛生單位於5月5日再次安排就醫採檢確診。

            `,
    },
    {
        no: '1179',
        case: '1179',
        date: '5/7',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案1179》' +
            '<br>' +
            `
            本國籍20多歲女性，2019年4月至英國工作，今年4月23日返國，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館檢疫，4月30日至5月5日陸續出現流鼻水、咳嗽、喉嚨痛、肌肉痠痛、倦怠、腹瀉、嗅味覺異常及發燒等症狀，5月5日由衛生單位安排就醫採檢確診。

            `,
    },
    {
        no: '1180',
        case: '1180',
        date: '5/8',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1180》' +
            '<br>' +
            `
            菲律賓籍30多歲女性移工，今（2021）年4月23日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，5月5日出現流鼻水症狀，5月6日進行檢疫期滿採檢確診。

            `,
    },
    {
        no: '1181',
        case: '1181',
        date: '5/8',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1181》' +
            '<br>' +
            `
            菲律賓籍30多歲男性船員，今（2021）年4月21日來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館檢疫，5月6日檢疫期滿，同日由公司安排專車至醫院自費採檢確診。

            `,
    },
    {
        no: '1182',
        case: '1182',
        date: '5/8',
        status: 'default',
        group: 'trp_EU',
        info:
            '《案1182》' +
            '<br>' +
            `
            印尼籍20多歲男性，今（2021）年4月21日自荷蘭搭機，於4月22日入境來臺工作，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館檢疫，檢疫期滿後進行自主健康管理，5月7日至醫院自費採檢確診。

            `,
    },
    {
        no: '1183',
        case: '1183',
        date: '5/8',
        status: 'case_s4',
        group: 'tw_air',
        info:
            '《案1183》' +
            '<br>' +
            `
            本國籍50多歲男性，為某航空公司機師，今（2021）年4月19日及22日分別執勤至越南、泰國，4月28日擔任案1153模擬飛行訓練教官。4月24日進行機師專案採檢，核酸檢測及血清抗體皆為陰性，4月29日接種第一劑AZ疫苗。個案5月4日出現全身倦怠，5月6日出現發燒，同日就醫採檢後確診。

            `,
    },
    {
        no: '1184',
        case: '1184',
        date: '5/8',
        status: 'case_s1',
        group: 'tw_air',
        info:
            '《案1184》' +
            '<br>' +
            `
            本國籍50多歲女性，為案1183之同住家人，因案1183檢驗陽性，於5月7日由衛生單位安排就醫採檢確診。

            `,
    },
    {
        no: '1185',
        case: '1185',
        date: '5/9',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1185》' +
            '<br>' +
            `
            菲律賓籍20多歲女性，今（2021）年5月6日因親屬重病來臺探親，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館進行檢疫，因有探視親人需求，5月7日搭乘防疫計程車外出至醫院自費採檢後確診。

            `,
    },
    {
        no: '1186',
        case: '1186',
        date: '5/10',
        status: 'case_s1',
        group: 'tw_air',
        info:
            '《案1186》' +
            '<br>' +
            `
            本國籍40多歲男性，為機場防疫旅館員工接駁車司機，近期無出國史，今（2021）年4月23日至4月28日間曾分別接送過案1128及案1129，4月29日配合旅館清空計畫前往集中檢疫所，當日採檢核酸檢測及血清抗體皆為陰性。個案5月7日出現發燒、咳嗽及腹瀉症狀，5月8日由檢疫所安排就醫採檢確診。

            `,
    },
    {
        no: '1187',
        case: '1187',
        date: '5/10',
        status: 'case_s4',
        group: 'tw_air',
        info:
            '《案1187》' +
            '<br>' +
            `
            本國籍40多歲男性，為某航空公司機師，今年4月20日至4月22日曾執勤至美國，4月25日進行機師專案採檢，核酸檢測及血清抗體皆為陰性，5月2日曾與案1183搭乘同一部車至公司。個案5月6日出現發燒症狀，僅自行服藥未就醫，5月8日匡列為案1183之居家隔離接觸者，同日個案因發燒症狀，由衛生單位安排就醫採檢確診。

            `,
    },
    {
        no: '1188',
        case: '1188',
        date: '5/10',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1188》' +
            '<br>' +
            `
            本國籍20多歲女性，2019年5月至菲律賓工作，今（2021）年4月21日返臺，持有搭機前3日內檢驗陰性報告，入境後至防疫旅館檢疫至5月4日，檢疫期滿後，於5月7日至醫院自費採檢確診。

            `,
    },
    {
        no: '1189',
        case: '1189',
        date: '5/10',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1189》' +
            '<br>' +
            `
            敘利亞籍50多歲男性，今年4月16日來臺洽公，持有搭機前3日內檢驗陰性報告，入境後至其他住所進行檢疫；因預計返回敘利亞，5月8日至醫院自費採確診。

            `,
    },
    {
        no: '1190',
        case: '1190',
        date: '5/10',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1190》' +
            '<br>' +
            `
            案1190及案1191均為本國籍50多歲男性，2020年9月至印度工作。案1190於今年4月28日起陸續出現咳嗽、流鼻水、發燒、腹瀉、肌肉痠痛及嗅味覺異常等症狀，5月3日在當地檢出COVID-19陽性，5月4日因呼吸困難至醫院就醫檢出肺炎；2人於5月8日一同搭乘國際緊急醫療專機返臺，入境後即收治住院隔離及採檢確診。

            `,
    },
    {
        no: '1191',
        case: '1191',
        date: '5/10',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1191》' +
            '<br>' +
            `
            案1190及案1191均為本國籍50多歲男性，2020年9月至印度工作。案1191於今年4月15日起陸續出現咳嗽、流鼻水、倦怠及腹瀉等症狀，5月3日在當地檢出COVID-19陽性，5月6日就醫檢出肺炎；2人於5月8日一同搭乘國際緊急醫療專機返臺，入境後即收治住院隔離及採檢確診。

            `,
    },
    {
        no: '1192',
        case: '1192',
        date: '5/10',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1192》' +
            '<br>' +
            `
            案1192及案1193分別為本國籍40多歲及20多歲男性，皆於今年3月至印度工作。案1192曾於4月26日出現喉嚨痛、流鼻水及嗅味覺異常等症狀。2人同於5月8日返臺，均持有搭機前3日內檢驗陰性報告，入境時主動通報曾有症狀，於機場採檢後，至集中檢疫所檢疫後確診。

            `,
    },
    {
        no: '1193',
        case: '1193',
        date: '5/10',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1193》' +
            '<br>' +
            `
            案1192及案1193分別為本國籍40多歲及20多歲男性，皆於今年3月至印度工作。案1193曾於4月29日出現咳嗽、流鼻水及喉嚨痛等症狀。2人同於5月8日返臺，均持有搭機前3日內檢驗陰性報告，入境時主動通報曾有症狀，於機場採檢後，至集中檢疫所檢疫後確診。

            `,
    },
    {
        no: '1194',
        case: '1194',
        date: '5/10',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1194》' +
            '<br>' +
            `
            案1194至案1198為印尼籍男性漁工，年齡介於10多歲至20多歲，今年4月26日來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，5月9日進行檢疫期滿前採檢確診。

            `,
    },
    {
        no: '1195',
        case: '1195',
        date: '5/10',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1195》' +
            '<br>' +
            `
            案1194至案1198為印尼籍男性漁工，年齡介於10多歲至20多歲，今年4月26日來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，5月9日進行檢疫期滿前採檢確診。

            `,
    },
    {
        no: '1196',
        case: '1196',
        date: '5/10',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1196》' +
            '<br>' +
            `
            案1194至案1198為印尼籍男性漁工，年齡介於10多歲至20多歲，今年4月26日來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，5月9日進行檢疫期滿前採檢確診。

            `,
    },
    {
        no: '1197',
        case: '1197',
        date: '5/10',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1197》' +
            '<br>' +
            `
            案1194至案1198為印尼籍男性漁工，年齡介於10多歲至20多歲，今年4月26日來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，5月9日進行檢疫期滿前採檢確診。

            `,
    },
    {
        no: '1198',
        case: '1198',
        date: '5/10',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1198》' +
            '<br>' +
            `
            案1194至案1198為印尼籍男性漁工，年齡介於10多歲至20多歲，今年4月26日來臺工作，皆持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，5月9日進行檢疫期滿前採檢確診。

            `,
    },
    {
        no: '1199',
        case: '1199',
        date: '5/10',
        status: 'case_s1',
        group: 'tw_air',
        info:
            '《案1199》' +
            '<br>' +
            `
            案1199及案1200為40多歲女性及10多歲女性，為案1105之同住家人，2人與另1名家人於4月26日匡列為居家隔離對象，當日採檢核酸檢測及血清抗體皆為陰性。2人隔離期間並無症狀，5月9日進行隔離期滿前採檢確診。

            `,
    },
    {
        no: '1200',
        case: '1200',
        date: '5/10',
        status: 'case_s1',
        group: 'tw_air',
        info:
            '《案1200》' +
            '<br>' +
            `
            案1199及案1200為40多歲女性及10多歲女性，為案1105之同住家人，2人與另1名家人於4月26日匡列為居家隔離對象，當日採檢核酸檢測及血清抗體皆為陰性。2人隔離期間並無症狀，5月9日進行隔離期滿前採檢確診。

            `,
    },
    {
        no: '1201',
        case: '1201',
        date: '5/11',
        status: 'case_s1',
        group: 'tw_air',
        info:
            '《案1201》' +
            '<br>' +
            `
            本國籍40多歲女性，為案1187同住家人，近期無出國史，亦無疑似症狀，因案1187檢驗確診，5月9日經衛生單位安排採檢後居家隔離確診。

            `,
    },
    {
        no: '1202',
        case: '1202',
        date: '5/11',
        status: 'case_s1',
        group: 'non',
        info:
            '《案1202》' +
            '<br>' +
            `
            本國籍30多歲女性，於宜蘭縣羅東鎮中正北路之「銀河百家樂」遊藝場工作。個案5月9日出現發冷、全身無力、咳嗽、發燒等症狀，至醫院就醫及採檢確診。

            `,
    },
    {
        no: '1203',
        case: '1203',
        date: '5/11',
        status: 'case_s1',
        group: 'non',
        info:
            '《案1203》' +
            '<br>' +
            `
            本國籍60多歲男性，近期無出國史，5月7日出現疲倦、咳嗽、畏寒等情形，5月9日因發燒至醫院就醫採檢確診。

            `,
    },
    {
        no: '1204',
        case: '1204',
        date: '5/11',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1204》' +
            '<br>' +
            `
            案1204至案1206為50多歲男性、40多歲女性及20多歲男性，皆為本國籍，分別於2019年12月、今（2021）年3月及2月至印度工作。案1204無症狀，於5月8日搭乘同一班機返臺，皆持有搭機前3日內檢驗陰性報告，案1204入境後至集中檢疫所檢疫並於5月9日接受採檢確診。

            `,
    },
    {
        no: '1205',
        case: '1205',
        date: '5/11',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1205》' +
            '<br>' +
            `
            案1204至案1206為50多歲男性、40多歲女性及20多歲男性，皆為本國籍，分別於2019年12月、今（2021）年3月及2月至印度工作。案1205於4月24日至4月26日陸續出現咳嗽、鼻塞、發燒及嗅味覺異常等症狀，於5月8日搭乘同一班機返臺，皆持有搭機前3日內檢驗陰性報告，案1205及案1206於入境時主動通報曾有症狀，於機場採檢後確診。

            `,
    },
    {
        no: '1206',
        case: '1206',
        date: '5/11',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1206》' +
            '<br>' +
            `
            案1204至案1206為50多歲男性、40多歲女性及20多歲男性，皆為本國籍，分別於2019年12月、今（2021）年3月及2月至印度工作。案1206於5月3日出現咳嗽、胸悶及胸痛等症狀，案1205及案1206於入境時主動通報曾有症狀，於機場採檢後確診。

            `,
    },
    {
        no: '1207',
        case: '1207',
        date: '5/11',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1207》' +
            '<br>' +
            `
            印度籍20多歲女性，長期在臺工作，今年4月22日返回印度處理私事，並於5月9日來臺，持有搭機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，5月10日接受採檢確診。

            `,
    },
    {
        no: '1208',
        case: '1208',
        date: '5/11',
        status: 'case_s1',
        group: 'non',
        info:
            '《案1208》' +
            '<br>' +
            `
            案1208、案1209及案1211為案1202同事，皆為女性，年齡介於10多歲至40多歲，其中2人無症狀，案1211於5月8日曾有不適情形。

            `,
    },
    {
        no: '1209',
        case: '1209',
        date: '5/11',
        status: 'case_s1',
        group: 'non',
        info:
            '《案1209》' +
            '<br>' +
            `
            案1208、案1209及案1211為案1202同事，皆為女性，年齡介於10多歲至40多歲，其中2人無症狀，案1211於5月8日曾有不適情形。

            `,
    },
    {
        no: '1210',
        case: '1210',
        date: '5/11',
        status: 'case_s1',
        group: 'non',
        info:
            '《案1210》' +
            '<br>' +
            `
            30多歲男性確診，為遊藝場常客，5月9日曾有咳嗽、腹瀉症狀，經採檢後確診。

            `,
    },
    {
        no: '1211',
        case: '1211',
        date: '5/11',
        status: 'case_s1',
        group: 'non',
        info:
            '《案1211》' +
            '<br>' +
            `
            案1208、案1209及案1211為案1202同事，皆為女性，年齡介於10多歲至40多歲，其中2人無症狀，案1211於5月8日曾有不適情形。

            `,
    },
    {
        no: '1212',
        case: '1212',
        date: '5/12',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1212》' +
            '<br>' +
            `
            分別為2男1女，年齡介於20至30多歲，今（2021）年4月27日來臺工作，皆持有登機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，5月10日進行檢疫期滿前採檢。

            `,
    },
    {
        no: '1213',
        case: '1213',
        date: '5/12',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1213》' +
            '<br>' +
            `
            分別為2男1女，年齡介於20至30多歲，今（2021）年4月27日來臺工作，皆持有登機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，5月10日進行檢疫期滿前採檢。

            `,
    },
    {
        no: '1214',
        case: '1214',
        date: '5/12',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1214》' +
            '<br>' +
            `
            分別為2男1女，年齡介於20至30多歲，今（2021）年4月27日來臺工作，皆持有登機前3日內檢驗陰性報告，入境後至集中檢疫所檢疫，5月10日進行檢疫期滿前採檢。

            `,
    },
    {
        no: '1215',
        case: '1215',
        date: '5/12',
        status: 'default',
        group: 'trp_A',
        info:
            '《案1215》' +
            '<br>' +
            `
            本國籍40多歲男性，今年2月至印度工作，並於5月10日返臺，持有搭機前3日內檢驗陰性報告，入境時因有鼻塞症狀於機場採檢後採檢。

            `,
    },
    {
        no: '1216',
        case: '1216',
        date: '5/12',
        status: 'case_s1',
        group: 'non',
        info:
            '《案1216》' +
            '<br>' +
            `
            30多歲女性，為宜蘭羅東「銀河百家樂」遊藝場員工，近期無出國，亦無疑似症狀，因該遊藝場發生群聚事件，經衛生單位調查後匡列為接觸者並進行採檢後確診。

            `,
    },
    {
        no: '1217',
        case: '1217',
        date: '5/12',
        status: 'case_s1',
        group: 'non',
        info:
            '《案1217》' +
            '<br>' +
            `
            50多歲女性，近期無出國，5月2日起陸續出現發燒、咳嗽、呼吸喘症狀，並於5月4日至5月10日間前往同一家診所就醫5次，5月11日因症狀持續，且出現呼吸困難、腹痛、肌肉痠痛，至醫院就醫，經診斷有肺炎情形，由醫院採檢通報確診。

            `,
    },
    {
        no: '1218',
        case: '1218',
        date: '5/12',
        status: 'case_s1',
        group: 'non',
        info:
            '《案1218》' +
            '<br>' +
            `
            案1218、案1219，及案1223至案1230等10人為5女5男，年齡介於50多歲至70多歲，其中1人為案1203同住家人，其餘9人為友人，因案1203確診，經衛生單位調查後匡列為接觸者並進行採檢。

            `,
    },
    {
        no: '1219',
        case: '1219',
        date: '5/12',
        status: 'case_s1',
        group: 'non',
        info:
            '《案1219》' +
            '<br>' +
            `
            案1218、案1219，及案1223至案1230等10人為5女5男，年齡介於50多歲至70多歲，其中1人為案1203同住家人，其餘9人為友人，因案1203確診，經衛生單位調查後匡列為接觸者並進行採檢。

            `,
    },
    {
        no: '1220',
        case: '1220',
        date: '5/12',
        status: 'case_s1',
        group: 'non',
        info:
            '《案1220》' +
            '<br>' +
            `
            為60多歲女性，近期無出國，於臺北市萬華區三水街「鴻達茶藝館」工作，5月6日起出現疲倦、發燒、喉嚨不適等症狀，並於同日、5月7日及5月8日至診所就醫，因症狀持續，5月11日前往醫院就醫，經診斷有肺炎情形，由醫院採檢通報確診。

            `,
    },
    {
        no: '1221',
        case: '1221',
        date: '5/12',
        status: 'case_s1',
        group: 'non',
        info:
            '《案1221》' +
            '<br>' +
            `
            為50多歲女性，近期無出國，於臺北市萬華區西園路1段「楓香清茶館」工作，5月10日起出現喉嚨癢、咳嗽及畏寒症狀，5月11日至醫院採檢確診。

            `,
    },
    {
        no: '1222',
        case: '1222',
        date: '5/12',
        status: 'case_s4',
        group: 'tw_air',
        info:
            '《案1222》' +
            '<br>' +
            `
            為30多歲女性，為某航空公司空服員，5月5日曾與案1187一同執勤至越南，5月9日出現喉嚨痛症狀未就醫，5月10日匡列為案1187接觸者並進行居家隔離，同日接受採檢。

            `,
    },
    {
        no: '1223',
        case: '1223',
        date: '5/12',
        status: 'case_s1',
        group: 'non',
        info:
            '《案1223》' +
            '<br>' +
            `
            案1218、案1219，及案1223至案1230等10人為5女5男，年齡介於50多歲至70多歲，其中1人為案1203同住家人，其餘9人為友人，因案1203確診，經衛生單位調查後匡列為接觸者並進行採檢確診。

            `,
    },
    {
        no: '1224',
        case: '1224',
        date: '5/12',
        status: 'case_s1',
        group: 'non',
        info:
            '《案1224》' +
            '<br>' +
            `
            案1218、案1219，及案1223至案1230等10人為5女5男，年齡介於50多歲至70多歲，其中1人為案1203同住家人，其餘9人為友人，因案1203確診，經衛生單位調查後匡列為接觸者並進行採檢確診。

            `,
    },
    {
        no: '1225',
        case: '1225',
        date: '5/12',
        status: 'case_s1',
        group: 'non',
        info:
            '《案1225》' +
            '<br>' +
            `
            案1218、案1219，及案1223至案1230等10人為5女5男，年齡介於50多歲至70多歲，其中1人為案1203同住家人，其餘9人為友人，因案1203確診，經衛生單位調查後匡列為接觸者並進行採檢確診。

            `,
    },
    {
        no: '1226',
        case: '1226',
        date: '5/12',
        status: 'case_s1',
        group: 'non',
        info:
            '《案1226》' +
            '<br>' +
            `
            案1218、案1219，及案1223至案1230等10人為5女5男，年齡介於50多歲至70多歲，其中1人為案1203同住家人，其餘9人為友人，因案1203確診，經衛生單位調查後匡列為接觸者並進行採檢確診。

            `,
    },
    {
        no: '1227',
        case: '1227',
        date: '5/12',
        status: 'case_s1',
        group: 'non',
        info:
            '《案1227》' +
            '<br>' +
            `
            案1218、案1219，及案1223至案1230等10人為5女5男，年齡介於50多歲至70多歲，其中1人為案1203同住家人，其餘9人為友人，因案1203確診，經衛生單位調查後匡列為接觸者並進行採檢確診。

            `,
    },
    {
        no: '1228',
        case: '1228',
        date: '5/12',
        status: 'case_s1',
        group: 'non',
        info:
            '《案1228》' +
            '<br>' +
            `
            案1218、案1219，及案1223至案1230等10人為5女5男，年齡介於50多歲至70多歲，其中1人為案1203同住家人，其餘9人為友人，因案1203確診，經衛生單位調查後匡列為接觸者並進行採檢確診。

            `,
    },
    {
        no: '1229',
        case: '1229',
        date: '5/12',
        status: 'case_s1',
        group: 'non',
        info:
            '《案1229》' +
            '<br>' +
            `
            案1218、案1219，及案1223至案1230等10人為5女5男，年齡介於50多歲至70多歲，其中1人為案1203同住家人，其餘9人為友人，因案1203確診，經衛生單位調查後匡列為接觸者並進行採檢確診。

            `,
    },
    {
        no: '1230',
        case: '1230',
        date: '5/12',
        status: 'case_s1',
        group: 'non',
        info:
            '《案1230》' +
            '<br>' +
            `
            案1218、案1219，及案1223至案1230等10人為5女5男，年齡介於50多歲至70多歲，其中1人為案1203同住家人，其餘9人為友人，因案1203確診，經衛生單位調查後匡列為接觸者並進行採檢確診。

            `,
    },
    {
        no: '1231',
        case: '1231',
        date: '5/12',
        status: 'case_s1',
        group: 'non',
        info:
            '《案1231》' +
            '<br>' +
            `
            未滿10歲男童，為案1211接觸者，近期無出國，亦無疑似症狀，因該遊藝場發生群聚事件，經衛生單位調查後匡列為接觸者並進行採檢後確診。

            `,
    },
    {
        no: '1232',
        case: '1232',
        date: '5/12',
        status: 'case_s1',
        group: 'non',
        info:
            '《案1232》' +
            '<br>' +
            `
            60多歲女性，為案1210接觸者，近期無出國，亦無疑似症狀，因該遊藝場發生群聚事件，經衛生單位調查後匡列為接觸者並進行採檢後確診。

            `,
    },
]

// 案例群組設定
var case_total = case_data.list
var case_html = `
<div class="case_box">
  <div class="case_d">{{date}}</div>
  <div id="case_{{case}}" class="case_i {{status}}">{{no}}</div>
</div>
`

for (var i = 0; i < case_total.length; i++) {
    var case_result = case_html
        .replace('{{date}}', case_total[i].date)
        .replace('{{case}}', case_total[i].case)
        .replace('{{no}}', case_total[i].no)
        .replace('{{status}}', case_total[i].status)
    var group = case_total[i].group
    if (group === 'non') {
        $('#non').append(case_result)
    } else if (group === 'trp_A') {
        $('#trp_A').append(case_result)
    } else if (group === 'tw_flt') {
        $('#tw_flt').append(case_result)
    } else if (group === 'tw_hos') {
        $('#tw_hos').append(case_result)
    } else if (group === 'tw_air') {
        $('#tw_air').append(case_result)
    } else if (group === 'trp_NA') {
        $('#trp_NA').append(case_result)
    } else if (group === 'trp_EU') {
        $('#trp_EU').append(case_result)
    } else if (group === 'trp_AF') {
        $('#trp_AF').append(case_result)
    } else if (group === 'trp_OC') {
        $('#trp_OC').append(case_result)
    } else {
        $('#trp_m').append(case_result)
    }
}
