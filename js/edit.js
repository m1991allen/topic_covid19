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
            ///////本土案例 ////////////
            ///////////////////////////

            // 基隆市
            var data_tc1 = data.feed.entry[23].content.$t;
            $('.data_tc1').addClass('deg4');
            $('.data_tc1').attr('title', '基隆市：' + data_tc1 + '例');
            $('.data_tc1').html(data_tc1);

            // 台北市
            var data_tc2 = data.feed.entry[25].content.$t;
            $('.data_tc2').addClass('deg2');
            $('.data_tc2').html(data_tc2);
            $('.data_tc2').attr('title', '台北市：' + data_tc2 + '例');

            // 新北市
            var data_tc3 = data.feed.entry[27].content.$t;
            $('.data_tc3').addClass('deg2');
            $('.data_tc3').html(data_tc3);
            $('.data_tc3').attr('title', '新北市：' + data_tc3 + '例');

            // 桃園市
            var data_tc4 = data.feed.entry[29].content.$t;
            $('.data_tc4').addClass('deg2');
            $('.data_tc4').html(data_tc4);
            $('.data_tc4').attr('title', '桃園市：' + data_tc4 + '例');

            // 新竹市
            var data_tc5 = data.feed.entry[31].content.$t;
            $('.data_tc5').addClass('deg3');
            $('.data_tc5').html(data_tc5);
            $('.data_tc5').attr('title', '新竹市：' + data_tc5 + '例');

            // 新竹縣
            var data_tc6 = data.feed.entry[33].content.$t;
            $('.data_tc6').addClass('degNone');
            $('.data_tc6').html(data_tc6);
            $('.data_tc6').attr('title', '新竹縣：' + data_tc6 + '例');

            // 苗栗縣
            var data_tc7 = data.feed.entry[35].content.$t;
            $('.data_tc7').addClass('degNone');
            $('.data_tc7').html(data_tc7);
            $('.data_tc7').attr('title', '苗栗縣：' + data_tc7 + '例');

            // 台中市
            var data_tc8 = data.feed.entry[37].content.$t;;
            $('.data_tc8').addClass('deg2');
            $('.data_tc8').html(data_tc8);
            $('.data_tc8').attr('title', '台中市：' + data_tc8 + '例');

            // 彰化縣
            var data_tc9 = data.feed.entry[39].content.$t;;
            $('.data_tc9').addClass('deg2');
            $('.data_tc9').html(data_tc9);
            $('.data_tc9').attr('title', '彰化縣：' + data_tc9 + '例');

            // 南投縣
            var data_tc10 = data.feed.entry[41].content.$t;
            $('.data_tc10').addClass('deg4');
            $('.data_tc10').html(data_tc10);
            $('.data_tc10').attr('title', '南投縣：' + data_tc10 + '例');

            // 嘉義市
            var data_tc11 = data.feed.entry[43].content.$t;
            $('.data_tc11').addClass('degNone');
            $('.data_tc11').html(data_tc11);
            $('.data_tc11').attr('title', '嘉義市：' + data_tc11 + '例');

            // 嘉義縣
            var data_tc12 = data.feed.entry[45].content.$t;
            $('.data_tc12').addClass('degNone');
            $('.data_tc12').html(data_tc12);
            $('.data_tc12').attr('title', '嘉義縣：' + data_tc12 + '例');

            // 雲林縣
            var data_tc13 = data.feed.entry[47].content.$t;
            $('.data_tc13').addClass('degNone');
            $('.data_tc13').html(data_tc13);
            $('.data_tc13').attr('title', '雲林縣：' + data_tc13 + '例');

            // 台南市
            var data_tc14 = data.feed.entry[49].content.$t;
            $('.data_tc14').addClass('deg4');
            $('.data_tc14').html(data_tc14);
            $('.data_tc14').attr('title', '台南市：' + data_tc14 + '例');

            // 高雄市
            var data_tc15 = data.feed.entry[51].content.$t;
            $('.data_tc15').addClass('degNone');
            $('.data_tc15').html(data_tc15);
            $('.data_tc15').attr('title', '高雄市：' + data_tc15 + '例');

            // 屏東縣
            var data_tc16 = data.feed.entry[53].content.$t;
            $('.data_tc16').addClass('degNone');
            $('.data_tc16').html(data_tc16);
            $('.data_tc16').attr('title', '屏東縣：' + data_tc16 + '例');

            // 宜蘭縣
            var data_tc17 = data.feed.entry[55].content.$t;
            $('.data_tc17').addClass('degNone');
            $('.data_tc17').html(data_tc17);
            $('.data_tc17').attr('title', '宜蘭縣：' + data_tc17 + '例');

            // 花蓮縣
            var data_tc18 = data.feed.entry[57].content.$t;
            $('.data_tc18').addClass('degNone');
            $('.data_tc18').html(data_tc18);
            $('.data_tc18').attr('title', '花蓮縣：' + data_tc18 + '例');

            // 台東縣
            var data_tc19 = data.feed.entry[59].content.$t;
            $('.data_tc19').addClass('degNone');
            $('.data_tc19').html(data_tc19);
            $('.data_tc19').attr('title', '台東縣：' + data_tc19 + '例');

            // 連江縣
            var data_tc20 = data.feed.entry[61].content.$t;
            $('.data_tc20').addClass('degNone');
            $('.data_tc20').html(data_tc20);
            $('.data_tc20').attr('title', '連江縣：' + data_tc20 + '例');

            // 金門縣
            var data_tc21 = data.feed.entry[63].content.$t;
            $('.data_tc21').addClass('degNone');
            $('.data_tc21').html(data_tc21);
            $('.data_tc21').attr('title', '金門縣：' + data_tc21 + '例');

            // 澎湖縣
            var data_tc22 = data.feed.entry[65].content.$t;
            $('.data_tc22').addClass('degNone');
            $('.data_tc22').html(data_tc22);
            $('.data_tc22').attr('title', '澎湖縣：' + data_tc22 + '例');

            ////////////////
            ///////////////////
            /////// 台灣 /////////
            ///////境外移入 ////////////
            ///////////////////////////

            // 其他（磐石艦）
            var data_imp1 = data.feed.entry[71].content.$t;
            $('.data_imp1').html(data_imp1);

            // 美國
            var data_imp2 = data.feed.entry[73].content.$t;
            $('.data_imp2').html(data_imp2);

            // 英國
            var data_imp3 = data.feed.entry[75].content.$t;
            $('.data_imp3').html(data_imp3);

            // 菲律賓
            var data_imp4 = data.feed.entry[77].content.$t;
            $('.data_imp4').html(data_imp4);

            // 法國
            var data_imp5 = data.feed.entry[79].content.$t;
            $('.data_imp5').html(data_imp5);

            // 西班牙
            var data_imp6 = data.feed.entry[81].content.$t;
            $('.data_imp6').html(data_imp6);

            // 土耳其
            var data_imp7 = data.feed.entry[83].content.$t;
            $('.data_imp7').html(data_imp7);

            // 埃及
            var data_imp8 = data.feed.entry[85].content.$t;
            $('.data_imp8').html(data_imp8);

            // 中國
            var data_imp9 = data.feed.entry[87].content.$t;
            $('.data_imp9').html(data_imp9);

            // 奧地利
            var data_imp10 = data.feed.entry[89].content.$t;
            $('.data_imp10').html(data_imp10);

            // 印尼
            var data_imp11 = data.feed.entry[91].content.$t;
            $('.data_imp11').html(data_imp11);

            // 荷蘭
            var data_imp12 = data.feed.entry[93].content.$t;
            $('.data_imp12').html(data_imp12);

            // 捷克
            var data_imp13 = data.feed.entry[95].content.$t;
            $('.data_imp13').html(data_imp13);

            // 德國
            var data_imp14 = data.feed.entry[97].content.$t;
            $('.data_imp14').html(data_imp14);

            // 瑞士
            var data_imp15 = data.feed.entry[99].content.$t;
            $('.data_imp15').html(data_imp15);

            // 義大利
            var data_imp16 = data.feed.entry[101].content.$t;
            $('.data_imp16').html(data_imp16);

            // 南非
            var data_imp17 = data.feed.entry[103].content.$t;
            $('.data_imp17').html(data_imp17);

            // 智利
            var data_imp18 = data.feed.entry[105].content.$t;
            $('.data_imp18').html(data_imp18);

            // 愛爾蘭
            var data_imp19 = data.feed.entry[107].content.$t;
            $('.data_imp19').html(data_imp19);

            // 日本
            var data_imp20 = data.feed.entry[109].content.$t;
            $('.data_imp20').html(data_imp20);

            // 孟加拉
            var data_imp21 = data.feed.entry[111].content.$t;
            $('.data_imp21').html(data_imp21);

            // 加拿大
            var data_imp22 = data.feed.entry[113].content.$t;
            $('.data_imp22').html(data_imp22);

            // 冰島
            var data_imp23 = data.feed.entry[115].content.$t;
            $('.data_imp23').html(data_imp23);

            // 墨西哥
            var data_imp24 = data.feed.entry[117].content.$t;
            $('.data_imp24').html(data_imp24);

            // 摩洛哥
            var data_imp25 = data.feed.entry[119].content.$t;
            $('.data_imp25').html(data_imp25);

            // 阿根廷
            var data_imp26 = data.feed.entry[121].content.$t;
            $('.data_imp26').html(data_imp26);

            // 澳洲
            var data_imp27 = data.feed.entry[123].content.$t;
            $('.data_imp27').html(data_imp27);

            // 比利時
            var data_imp28 = data.feed.entry[125].content.$t;
            $('.data_imp28').html(data_imp28);

            // 丹麥
            var data_imp29 = data.feed.entry[127].content.$t;
            $('.data_imp29').html(data_imp29);

            // 瓜地馬拉
            var data_imp30 = data.feed.entry[129].content.$t;
            $('.data_imp30').html(data_imp30);

            // 香港
            var data_imp31 = data.feed.entry[131].content.$t;
            $('.data_imp31').html(data_imp31);

            // 紐西蘭
            var data_imp32 = data.feed.entry[133].content.$t;
            $('.data_imp32').html(data_imp32);

            // 卡達
            var data_imp33 = data.feed.entry[135].content.$t;
            $('.data_imp33').html(data_imp33);

            // 塞內加爾
            var data_imp34 = data.feed.entry[137].content.$t;
            $('.data_imp34').html(data_imp34);

            // 希臘
            var data_imp35 = data.feed.entry[139].content.$t;
            $('.data_imp35').html(data_imp35);

            // 賴索托
            var data_imp36 = data.feed.entry[141].content.$t;
            $('.data_imp36').html(data_imp36);

            // 澳門
            var data_imp37 = data.feed.entry[143].content.$t;
            $('.data_imp37').html(data_imp37);

            // 馬來西亞
            var data_imp38 = data.feed.entry[145].content.$t;
            $('.data_imp38').html(data_imp38);

            // 阿曼
            var data_imp39 = data.feed.entry[147].content.$t;
            $('.data_imp39').html(data_imp39);

            // 波蘭
            var data_imp40 = data.feed.entry[149].content.$t;
            $('.data_imp40').html(data_imp40);

            // 泰國
            var data_imp41 = data.feed.entry[151].content.$t;
            $('.data_imp41').html(data_imp41);

            // 俄羅斯
            var data_imp42 = data.feed.entry[153].content.$t;
            $('.data_imp42').html(data_imp42);

            // 尼泊爾
            var data_imp43 = data.feed.entry[155].content.$t;
            $('.data_imp43').html(data_imp43);

            // 緬甸
            var data_imp44 = data.feed.entry[157].content.$t;
            $('.data_imp44').html(data_imp44);

            // 印度
            var data_imp45 = data.feed.entry[159].content.$t;
            $('.data_imp45').html(data_imp45);

            // 烏克蘭
            var data_imp46 = data.feed.entry[161].content.$t;
            $('.data_imp46').html(data_imp46);

            // 阿聯
            var data_imp47 = data.feed.entry[163].content.$t;
            $('.data_imp47').html(data_imp47);

            // 阿聯
            var data_imp48 = data.feed.entry[165].content.$t;
            $('.data_imp48').html(data_imp48);

            // 台灣本土／境外 表格 //

            $('#dt_loc_taiwan').DataTable({
                "paging": false,
                "searching": false,
                "aaSorting": [],
                columnDefs: [{
                    orderable: false,
                    targets: 0
                }],
                destroy: true,
            });
            $('#dt_imp_taiwan').DataTable({
                "paging": false,
                "searching": false,
                "aaSorting": [],
                columnDefs: [{
                    orderable: false,
                    targets: 0
                }],
                destroy: true,
            });

            // 總數-本土案例 變數：tc-local
            var data_tcloc = data.feed.entry[21].content.$t;
            $('.data_tcloc').html(data_tcloc);

            // 總數-境外移入 變數：tc-import
            var data_tcimp = data.feed.entry[69].content.$t;
            $('.data_tcimp').html(data_tcimp);

            //// 台灣總和 ////
            $('#count_recently_taiwan').html(data.feed.entry[11].content.$t);
            $('#count_sumConfirm_taiwan').html(data.feed.entry[13].content.$t);
            $('#tw_con').html(data.feed.entry[13].content.$t);
            $('#tw_die').html(data.feed.entry[15].content.$t);
            $('#tw_rec').html(data.feed.entry[17].content.$t);

            //// 全球總合 ////
            $('#inc_con').html(data.feed.entry[5].content.$t);
            $('#inc_die').html(data.feed.entry[6].content.$t);

            //// 台灣 首屏動態數字 ////
            $('#tw_con').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3500,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });

            $('#tw_die').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3500,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });

            $('#tw_rec').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3500,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });

            //// 全球 首屏動態數字 ////

            $('#inc_con').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function (now) {
                        console.log(now)
                        // let newNum = now.toString.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        $(this).text(Math.floor(now));
                    }
                });
            });

            $('#inc_die').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    });
} ajax_gsheet();


// END get API

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
/////////////    國家警示    //////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////


// 此區新增
var alert1_country = '暫無';
var alert2_country = '暫無';
var alert3_country = '全球';

//////////////////////////////////// 此區不要動！！
$('.alr1_country').html(alert1_country);
$('.alr2_country').html(alert2_country);
$('.alr3_country').html(alert3_country);



// 此區新增
/////////////// group：

// 磐石艦：tw_flt 
// 未知感染：non ; 
// 旅美：trp_NA ; 
// 旅歐：trp_EU ; 
// 旅亞：trp_A ; 
// 旅非：trp_AF ; 
// 旅大洋：trp_OC ; 
// 旅多國：trp_m

/////////////// status：

// 一般案例（粉）：default ;
// 境內感染（綠）：case_s1 ; 
// 死亡（紅）：case_s2

/////////////////////
/////////////////////
/////////////////////
///    台灣個案    ///
/////////////////////
/////////////////////
/////////////////////
var case_data = {};
case_data.list = [
    {
        no: '1',
        case: '1',
        date: '1/21',
        status: 'default',
        group: 'trp_A',
        info: '《首例》' + '<br>' + `
            台灣出現首例境外移入確診病例，為50多歲於武漢工作女台商，經機場檢疫人員安排送醫後，確診為武漢肺炎陽性。
            `
    }, {
        no: '2',
        case: '2',
        date: '1/24',
        status: 'default',
        group: 'trp_A',
        info: '《案2》' + '<br>' + `
            50多歲女性中國遊客，1月23日因發燒就醫，經過快篩檢驗後確診。
            `
    }, {
        no: '3',
        case: '3',
        date: '1/24',
        status: 'default',
        group: 'trp_A',
        info: '《案3》' + '<br>' + `
            50多歲高雄台商，入境前已經出現症狀，但入境時未交代武漢活動史，直到回台就醫才坦承，經通報後確診。
            `
    }, {
        no: '4',
        case: '4',
        date: '1/26',
        status: 'default',
        group: 'trp_A',
        info: '《案4》' + '<br>' + `
            曾赴武漢旅遊的50多歲女性，1月25日咳嗽症狀加劇，自廣州入境後主動通報機場檢疫人員，送負壓隔離病房檢驗確診。
            `
    }, {
        no: '5',
        case: '5',
        date: '1/27',
        status: 'default',
        group: 'trp_A',
        info: '《案5》' + '<br>' + `
            曾赴武漢工作的50多歲女性，返台後出現發燒、肌肉痠痛症狀，就醫後由院方通報確診。
            `
    }, {
        no: '6',
        case: '6',
        date: '1/28',
        status: 'default',
        group: 'trp_A',
        info: '《案6》' + '<br>' + `
            70多歲女性中國遊客，抵台時尚無症狀，1月25日因發燒就醫，醫院通報後確診。
            `
    }, {
        no: '7',
        case: '7',
        date: '1/28',
        status: 'default',
        group: 'trp_A',
        info: '《案7》' + '<br>' + `
            70多歲女性中國遊客，與第6例同自由行。
            `
    }, {
        no: '8',
        case: '8',
        date: '1/28',
        status: 'case_s1',
        group: 'trp_A',
        info: '《案8》' + '<br>' + `
            50多歲男性，為第5例境外移入個案丈夫，1月26日出現咳嗽症狀就醫，經檢驗後確診，為首例本土病例。
            `
    }, {
        no: '9',
        case: '9',
        date: '1/30',
        status: 'case_s1',
        group: 'trp_A',
        info: '《案9》' + '<br>' + `
            40多歲中部女性，遭到在武漢工作丈夫傳染，1月27日出現咳嗽症狀，就醫檢驗後確診，為本土第二例。
            `
    }, {
        no: '10',
        case: '10',
        date: '1/31',
        status: 'default',
        group: 'trp_A',
        info: '《案10》' + '<br>' + `
            40多歲中部男性，為第9例個案丈夫，回台時出現咳嗽、流鼻水症狀，但因為沒發燒判定為感冒，直到太太出現症狀後再度檢驗確診。
            `
    }, {
        no: '11',
        case: '11',
        date: '1/31',
        status: 'default',
        group: 'trp_A',
        info: '《案11》' + '<br>' + `
            50多歲男性，為首批武漢包機台商，原先不在搭機名單內，回台後發現有發燒症狀，立即送負壓隔離病房，檢驗後確診為武漢肺炎。
            `
    }, {
        no: '12',
        case: '12',
        date: '2/6',
        status: 'default',
        group: 'trp_A',
        info: '《案12》' + '<br>' + `
            40多歲北部男性，去年12至武漢工作，2月2日自遼寧返台後出現發燒、咳嗽、頭痛，就醫篩檢後確診。
            `
    }, {
        no: '13',
        case: '13',
        date: '2/6',
        status: 'default',
        group: 'trp_A',
        info: '《案13》' + '<br>' + `
            長住武漢的20多歲女性，1月21日自武漢經深圳返台，2月1日出現咳嗽有痰、胸悶症狀，就醫篩檢後確診。
            `
    }, {
        no: '14',
        case: '14',
        date: '2/6',
        status: 'default',
        group: 'trp_EU',
        info: '《案14》' + '<br>' + `
            北部50多歲男性，1月22日自香港轉機至義大利旅遊，2月1日自香港轉機返台，入境時有發燒症狀，就醫後診斷為感冒，後來症狀未改善，再次就醫檢驗後確診。
            `
    }, {
        no: '15',
        case: '15',
        date: '2/6',
        status: 'default',
        group: 'trp_EU',
        info: '《案15》' + '<br>' + `
            北部50多歲女性，和第14例為夫妻，入境時無發燒症狀，2月3日就醫時診斷為一般感冒，因丈夫於4日通報，一併採檢通報檢驗後，均確診感染新型冠狀病毒。
            `
    }, {
        no: '16',
        case: '16',
        date: '2/6',
        status: 'default',
        group: 'trp_A',
        info: '《案16》' + '<br>' + `
            南部40多歲女性，曾到澳門旅遊，2月1日出現發燒、走路會喘等症狀，5日二度就醫時收治負壓隔離病房並採檢，經檢驗確診。
            `
    }, {
        no: '17',
        case: '17',
        date: '2/8',
        status: 'default',
        group: 'trp_EU',
        info: '《案17》' + '<br>' + `
            原列為接觸者的20多歲男性，是14例、15例確診夫婦之兒子。該個案1月27日在義大利旅遊時，出現咳嗽症狀，回台進行篩檢後確診。
            `
    }, {
        no: '18',
        case: '18',
        date: '2/9',
        status: 'default',
        group: 'trp_EU',
        info: '《案18》' + '<br>' + `
            原列為接觸者的20多歲男性，是14例、15例確診夫婦之兒子。該個案亦為與父母出國同遊，但無疑似症狀，經衛生單位安排隔離並住院採檢，檢驗結果陽性。
            `
    }, {
        no: '19',
        case: '19',
        date: '2/16',
        status: 'case_s2',
        group: 'trp_A',
        info: '《案19》' + '<br>' + `
            中部61歲男性，1月27日出現咳嗽，2月3日因呼吸急促赴醫院就醫，但因無出國旅遊史、也非密切接觸者，診斷為肺炎。2月12日起指揮中心擴大檢驗，該病患為唯一檢驗陽性者，但於2月15日晚間因肺炎合併敗血症死亡。
            `
    }, {
        no: '20',
        case: '20',
        date: '2/16',
        status: 'case_s1',
        group: 'trp_A',
        info: '《案20》' + '<br>' + `
            中部50多歲男性，為第19例弟弟，因屬於密切接觸者，進行採檢後確診。
            `
    }, {
        no: '21',
        case: '21',
        date: '2/17',
        status: 'case_s1',
        group: 'trp_A',
        info: '《案21》' + '<br>' + `
            中部80多歲女性，為第19例媽媽，平時同住，曾於2月6日出現症狀就醫，後來因身為密切接觸者進行採檢，結果為陽性。
            `
    }, {
        no: '22',
        case: '22',
        date: '2/17',
        status: 'case_s1',
        group: 'trp_A',
        info: '《案22》' + '<br>' + `
            中部30多歲男性，為第19例外甥女婿，平日未與其他3位同住，研判是過年期間家族聚會時遭到傳染。
            `
    }, {
        no: '23',
        case: '23',
        date: '2/19',
        status: 'case_s1',
        group: 'trp_A',
        info: '《案23》' + '<br>' + `
            中部60歲女性，為第19例妹妹，同樣判定是過年家庭聚餐時感染。
            `
    }, {
        no: '24',
        case: '24',
        date: '2/19',
        status: 'case_s1',
        group: 'non',
        info: '《案24》' + '<br>' + `
            北部60多歲女性，近兩年無出國史，1月22日出現發燒、咳嗽等症狀，22日至29日四度就醫，於30日收治住院。因病情惡化，2月10日轉入加護病房，並於2月17日配合進行通報採檢，19日宣布確診。
            `
    }, {
        no: '25',
        case: '25',
        date: '2/21',
        status: 'case_s1',
        group: 'non',
        info: '《案25》' + '<br>' + `
            北部20歲女性，為第24例外孫女，1月底便出現咳嗽、發燒症狀，多次就醫，後因列為案24接觸者，採檢並住院隔離後確診。
            `
    }, {
        no: '26',
        case: '26',
        date: '2/21',
        status: 'case_s1',
        group: 'non',
        info: '《案26》' + '<br>' + `
            北部40多歲女性，為第24例小女兒，無發燒或呼吸道症狀，因食道逆流情形曾二度就醫，因列為案24接觸者，採檢並住院隔離後確診。
            `
    }, {
        no: '27',
        case: '27',
        date: '2/23',
        status: 'case_s2',
        group: 'non',
        info: '《案27》' + '<br>' + `
            北部80多歲男性，本身為具高血壓、糖尿病等慢性病之洗腎病人，近期無出國史，2月初出現咳嗽、流鼻水、發燒症狀診斷為肺炎，隨後通報採檢送驗，確診感染武漢肺炎。
            `
    }, {
        no: '28',
        case: '28',
        date: '2/23',
        status: 'case_s1',
        group: 'non',
        info: '《案28》' + '<br>' + `
            北部50多歲男性，為第27例大兒子，1月底出現發燒、流鼻水及喉嚨痛等症狀，就醫後診斷為肺炎，隨後通報採檢送驗，確診感染武漢肺炎。
            `
    }, {
        no: '29',
        case: '29',
        date: '2/24',
        status: 'case_s1',
        group: 'non',
        info: '《案29》' + '<br>' + `
            北部40多歲男性，為第27例小兒子，1月底出現出現喉嚨不適症狀，但未就醫，2月23日列為確診個案之密切接觸者，收治入院採檢後確診。
            `+ '<br>' + `
            因工作關係頻繁往返中國武漢及其它地區，最後一次為去年12月2日自廣州返台，且過年期間亦曾與具中國旅遊史友人聚餐，目前感染源釐清中。
            `
    }, {
        no: '30',
        case: '30',
        date: '2/24',
        status: 'case_s1',
        group: 'non',
        info: '《案30》' + '<br>' + `
            北部70多歲女性，為第27例太太，2月開始因身體不適多次就醫，後因列為確診個案之密切接觸者，收治入院採檢後確診。
            `
    }, {
        no: '31',
        case: '31',
        date: '2/25',
        status: 'case_s1',
        group: 'non',
        info: '《案31》' + '<br>' + `
            為第27例孫子、第28例的兒子，曾於2月11日及19日至醫院探視第27例，無疑似症狀，因列為確診個案之密切接觸者，採檢後確診，已收治醫院隔離觀察。
            `
    }, {
        no: '32',
        case: '32',
        date: '2/26',
        status: 'case_s1',
        group: 'non',
        info: '《案32》' + '<br>' + `
            北部30多歲外籍女性，為第27例看護，因列為確診個案之密切接觸者，透過警政單位尋獲後，送往醫院採檢通報並確診，當時有輕微喉嚨不適。
            `
    }, {
        no: '33',
        case: '33',
        date: '2/28',
        status: 'default',
        group: 'trp_A',
        info: '《案33》' + '<br>' + `
            北部30多歲男性，2月中曾跟團至日本大阪旅遊，返國後出現咳嗽、喉嚨癢情形，經醫院通報送驗確診。
            `
    }, {
        no: '34',
        case: '34',
        date: '2/28',
        status: 'case_s2',
        group: 'non',
        info: '《案34》' + '<br>' + `
            50多歲女性，有糖尿病、心血管疾病等慢性病史，近期無國外旅遊史。因低血糖、全身倦怠情形就醫，後出現咳嗽、喉嚨痛、發燒症狀，診斷有肺炎情形，經醫院通報送驗確診，經過治療後仍因為心臟衰竭病逝。
            `
    }, {
        no: '35',
        case: '35',
        date: '2/29',
        status: 'case_s1',
        group: 'non',
        info: '《案35》' + '<br>' + `
            為一名清潔人員，於醫院急診室工作時曾接觸過案34，後出現咳嗽、流鼻水、發燒等症狀，並於案34確診後列為接觸者採檢，確診為武漢肺炎。
            `
    }, {
        no: '36',
        case: '36',
        date: '2/29',
        status: 'case_s1',
        group: 'non',
        info: '《案36》' + '<br>' + `
            均為案34確診前住院病房之護理人員，陸續於2月18至25日間出現咳嗽、流鼻水、發燒等症狀，並於案34確診後列為接觸者，採檢後確診，為一起群聚事件。
            `
    }, {
        no: '37',
        case: '37',
        date: '2/29',
        status: 'case_s1',
        group: 'non',
        info: '《案37》' + '<br>' + `
            均為案34確診前住院病房之護理人員，陸續於2月18至25日間出現咳嗽、流鼻水、發燒等症狀，並於案34確診後列為接觸者，採檢後確診，為一起群聚事件。
            `
    }, {
        no: '38',
        case: '38',
        date: '2/29',
        status: 'case_s1',
        group: 'non',
        info: '《案38》' + '<br>' + `
            均為案34確診前住院病房之護理人員，陸續於2月18至25日間出現咳嗽、流鼻水、發燒等症狀，並於案34確診後列為接觸者，採檢後確診，為一起群聚事件。
            `
    }, {
        no: '39',
        case: '39',
        date: '2/29',
        status: 'default',
        group: 'trp_AF',
        info: '《案39》' + '<br>' + `
            北部60多歲女性，曾與親友跟團至杜拜、埃及旅遊，在國外出現喉嚨痛、咳嗽症狀，返國後至診所就醫，但咳嗽加劇，且出現胸悶、肚子不適及嘔吐症狀情形，於28日就醫並採檢通報，經檢驗後確診。
            `
    }, {
        no: '40',
        case: '40',
        date: '3/1',
        status: 'default',
        group: 'trp_A',
        info: '《案40》' + '<br>' + `
            北部70多歲女性，為郵輪鑽石公主號旅客，先前經日方檢驗陽性後住院，經治療返台後安排入住負壓隔離病房，經三次採檢後確診。
            `
    }, {
        no: '41',
        case: '41',
        date: '3/2',
        status: 'case_s1',
        group: 'non',
        info: '《案41》' + '<br>' + `
            北部20多歲女性，為第34例女兒，近期無旅遊史，除自身有過敏體質外，無任何不適症狀。因先前多次至病房陪伴，經衛生單位安排接觸者採檢及住院隔離後，二採呈現陽性確診。
            `
    }, {
        no: '42',
        case: '42',
        date: '3/3',
        status: 'case_s1',
        group: 'non',
        info: '《案42》' + '<br>' + `
            北部50多歲女性，為案34確診前同病房、不同病室已出院病人的陪病家屬，曾因全身倦怠及咳嗽至診所就醫，後因衛生單位追蹤採檢確診。
            `
    }, {
        no: '43',
        case: '43',
        date: '3/5',
        status: 'default',
        group: 'trp_EU',
        info: '《案43》' + '<br>' + `
            北部50多歲女性，在案39確診前曾一起在插花班上課，因出現發燒及喉嚨痛症狀，由衛生單位安排就醫並住院隔離，採檢後確診。
            `
    }, {
        no: '44',
        case: '44',
        date: '3/5',
        status: 'default',
        group: 'trp_EU',
        info: '《案44》' + '<br>' + `
            北部30多歲男性，曾與友人至菲律賓旅遊，於當地出現胃脹及腹瀉症狀，返國後因喉嚨乾、倦怠情形至診所就醫，院方發現有國外旅遊史且出現症狀故採檢通報，經檢驗確診。
            `
    }, {
        no: '45',
        case: '45',
        date: '3/6',
        status: 'case_s1',
        group: 'non',
        info: '《案45》' + '<br>' + `
            50多歲女性，近期無國外旅遊史，2月中因其他疾病收治住院，與案34同病房不同病室，出院後衛生單位進行案34相關風險對象追蹤採檢時，因檢體異常再次採檢，發現確診，目前已隔離。
            `
    }, {
        no: '46',
        case: '46',
        date: '3/10',
        status: 'case_s1',
        group: 'non',
        info: '《案46》' + '<br>' + `
            近期無出國史，與案34、案41同住，曾於案34住院期間陪病，並於案34確診後，以接觸者身分住院隔離並進行兩次採檢陰性。隨後出現咳嗽症狀，安排就醫後收治負壓隔離病房並進行第三次採檢確診。
            `
    }, {
        no: '47',
        case: '47',
        date: '3/10',
        status: 'default',
        group: 'trp_EU',
        info: '《案47》' + '<br>' + `
            3月初曾與2名同事至荷蘭出差，返國後出現微燒及乾咳情形並即時就醫，因個案有國外旅遊史且出現症狀，故院方進行採檢通報後並確診，目前收治負壓隔離病房，研判於境外感染的可能性較高。
            `
    }, {
        no: '48',
        case: '48',
        date: '3/11',
        status: 'default',
        group: 'trp_EU',
        info: '《案48》' + '<br>' + `
            北部30多歲女性，2月28日至3月8日獨自前往英國旅遊，返國後於因頭暈、頭痛等症狀至診所就醫，後出現發燒、咳嗽，經醫院通報檢驗後確診。
            `
    }, {
        no: '49',
        case: '49',
        date: '3/12',
        status: 'default',
        group: 'trp_EU',
        info: '《案49》' + '<br>' + `
            北部40多歲女性，曾自台灣經英國轉機至愛爾蘭旅遊，再前往比利時，最後經土耳其轉機返台。入境時並無症狀，返家後出現頭痛、倦怠及喉嚨痛症狀，就醫後並通報採檢後確診。
            `
    }, {
        no: '50',
        case: '50',
        date: '3/13',
        status: 'default',
        group: 'trp_NA',
        info: '《案50》' + '<br>' + `
            中部50多歲美國籍男性，獨自在台工作，2月曾接待4名來台的美國友人（均於2月26日離境），後出現畏寒、咳嗽及發燒症狀，就醫經醫院通報後確診。
            `
    }, {
        no: '51',
        case: '51',
        date: '3/14',
        status: 'default',
        group: 'trp_EU',
        info: '《案51》' + '<br>' + `
            30多歲荷蘭籍男性，曾去過奧地利，來台後出現呼吸困難、胸悶和全身倦怠等症狀，至醫院急診就醫，經診斷有肺炎情形，採檢通報後確診，目前住院隔離。
            `
    }, {
        no: '52',
        case: '52',
        date: '3/14',
        status: 'default',
        group: 'trp_EU',
        info: '《案52》' + '<br>' + `
            30多歲本國籍男性，曾與友人經土耳其轉機至瑞士，接著自瑞士前往巴黎滑雪，再自巴黎至瑞士搭機，經土耳其轉機返台後，出現發燒、咳嗽、流鼻水等症狀，至醫院就醫後採檢通報確診，已收治負壓隔離病房。
            `
    }, {
        no: '53',
        case: '53',
        date: '3/14',
        status: 'default',
        group: 'trp_EU',
        info: '《案53》' + '<br>' + `
            30多歲本國籍男性，曾前往德國慕尼黑、紐倫堡出差，返國後出現咳嗽有痰、喉嚨痛等症狀，就醫後檢驗通報確診，已收治負壓隔離病房。
            `
    }, {
        no: '54',
        case: '54',
        date: '3/15',
        status: 'default',
        group: 'trp_A',
        info: '《案54》' + '<br>' + `
            北部30多歲男性，2月28日至3月8日期間，先後赴泰國、日本北海道旅遊，返國後出現流鼻水症狀，後因全身倦怠及頭痛等症狀就醫並採檢通報確診。
            `
    }, {
        no: '55',
        case: '55',
        date: '3/15',
        status: 'default',
        group: 'trp_AF',
        info: '《案55》' + '<br>' + `
            北部50多歲男性，3月初參加埃及團體旅遊，返國後因全身倦怠與肌肉痠痛就醫，經檢測有發燒情形，由醫院採檢通報後確診。
            `
    }, {
        no: '56',
        case: '56',
        date: '3/15',
        status: 'default',
        group: 'trp_A',
        info: '《案56》' + '<br>' + `
            北部40多歲男性，3月初至土耳其旅行（曾於杜拜轉機），在土耳其時出現身體不適，入境後因喉嚨癢、腹瀉、自覺發熱等症狀就醫，經醫院採檢後通報確診。
            `
    }, {
        no: '57',
        case: '57',
        date: '3/15',
        status: 'default',
        group: 'trp_A',
        info: '《案57》' + '<br>' + `
            北部70歲女性，與案56為同旅遊團團員，返國後因發燒就醫，經醫院採檢後通報確診。
            `
    }, {
        no: '58',
        case: '58',
        date: '3/15',
        status: 'default',
        group: 'trp_NA',
        info: '《案58》' + '<br>' + `
            北部20多歲女性，今年1月至西班牙就學，3月12日曾出現體溫偏高，13日返國時經發燒篩檢站採檢送驗確診。
            `
    }, {
        no: '59',
        case: '59',
        date: '3/15',
        status: 'default',
        group: 'trp_EU',
        info: '《案59》' + '<br>' + `
            北部10多歲男性，1月與家人同遊希臘，3月5日返台，12日出現喉嚨痛情形、13日因咳嗽、流鼻水及頭痛等症狀就醫，採檢後確診。
            `
    }, {
        no: '60',
        case: '60',
        date: '3/16',
        status: 'default',
        group: 'trp_EU',
        info: '《案60》' + '<br>' + `
            中部20多歲女性，2月9日至3月11日獨自赴義大利、希臘、德國旅遊，返國後出現發燒、畏寒及倦怠就醫，經通報檢驗後確診。
            `
    }, {
        no: '61',
        case: '61',
        date: '3/16',
        status: 'default',
        group: 'trp_EU',
        info: '《案61》' + '<br>' + `
            南部50多歲女性，3月5日至14日與家人參加奧地利、捷克團體旅遊，入境時因發燒被檢疫站攔檢送驗後確診。
            `
    }, {
        no: '62',
        case: '62',
        date: '3/16',
        status: 'default',
        group: 'trp_A',
        info: '《案62》' + '<br>' + `
            北部60多歲女性，3月7日至14日與家人至菲律賓探親，於當地出現發燒、咳嗽、肌肉痠痛、後眼窩痛症狀，入境後由家人送至醫院就醫，並採檢送驗後確診。
            `
    }, {
        no: '63',
        case: '63',
        date: '3/16',
        status: 'default',
        group: 'trp_AF',
        info: '《案63》' + '<br>' + `
            北部50多歲男性，為案55埃及旅遊之同團團員，因咳嗽有痰、流鼻水、寒顫等症狀至醫院就醫後通報送驗後確診。
            `
    }, {
        no: '64',
        case: '64',
        date: '3/16',
        status: 'default',
        group: 'trp_EU',
        info: '《案64》' + '<br>' + `
            北部20多歲男性，去年8月底至西班牙就學，由於就讀學校有確診個案，故與就讀同校的家人及同學一同返國，後出現畏寒、流鼻水及眼睛癢症狀，至醫院就醫並採檢通報後確診。
            `
    }, {
        no: '65',
        case: '65',
        date: '3/16',
        status: 'default',
        group: 'trp_A',
        info: '《案65》' + '<br>' + `
            南部2名50多歲女性、1名60多歲男性，與案56、案57同團至土耳其旅遊，分別於3月14日、15日發病，經由衛生單位通知前往醫院採檢通報確診。
            `
    }, {
        no: '66',
        case: '66',
        date: '3/16',
        status: 'default',
        group: 'trp_A',
        info: '《案66》' + '<br>' + `
            南部2名50多歲女性、1名60多歲男性，與案56、案57同團至土耳其旅遊，分別於3月14日、15日發病，經由衛生單位通知前往醫院採檢通報確診。
            `
    }, {
        no: '67',
        case: '67',
        date: '3/16',
        status: 'default',
        group: 'trp_A',
        info: '《案67》' + '<br>' + `
            南部2名50多歲女性、1名60多歲男性，與案56、案57同團至土耳其旅遊，分別於3月14日、15日發病，經由衛生單位通知前往醫院採檢通報確診。
            `
    }, {
        no: '68',
        case: '68',
        date: '3/17',
        status: 'default',
        group: 'trp_A',
        info: '《案68》' + '<br>' + `
            年齡介於20多歲-60多歲的2女2男，分別居住北部、中部，3月初至土耳其旅遊（與案56、案57、案65、案66、案67同團），由衛生單位安排就醫採檢後確診。
            `
    }, {
        no: '69',
        case: '69',
        date: '3/17',
        status: 'default',
        group: 'trp_A',
        info: '《案69》' + '<br>' + `
            年齡介於20多歲-60多歲的2女2男，分別居住北部、中部，3月初至土耳其旅遊（與案56、案57、案65、案66、案67同團），由衛生單位安排就醫採檢後確診。
            `
    }, {
        no: '70',
        case: '70',
        date: '3/17',
        status: 'default',
        group: 'trp_A',
        info: '《案70》' + '<br>' + `
            年齡介於20多歲-60多歲的2女2男，分別居住北部、中部，3月初至土耳其旅遊（與案56、案57、案65、案66、案67同團），由衛生單位安排就醫採檢後確診。
            `
    }, {
        no: '71',
        case: '71',
        date: '3/17',
        status: 'default',
        group: 'trp_AF',
        info: '《案71》' + '<br>' + `
            北部60多歲男性，3月初參加埃及團體旅遊（與案55、案63同團），返國後出現咳嗽、流鼻水、腹瀉症狀，經安排就醫並採檢通報後檢驗確診。
            `
    }, {
        no: '72',
        case: '72',
        date: '3/17',
        status: 'default',
        group: 'trp_EU',
        info: '《案72》' + '<br>' + `
            南部70多歲女性，3月初與家人（案61）參加奧地利、捷克團體旅遊，返國後出現發燒症狀且有肺炎情形，由醫院採檢通報後確診。
            `
    }, {
        no: '73',
        case: '73',
        date: '3/17',
        status: 'default',
        group: 'trp_A',
        info: '《案73》' + '<br>' + `
            年齡介於20多歲-60多歲的2女2男，分別居住北部、中部，3月初至土耳其旅遊（與案56、案57、案65、案66、案67同團），由衛生單位安排就醫採檢後確診。
            `
    }, {
        no: '74',
        case: '74',
        date: '3/17',
        status: 'default',
        group: 'trp_EU',
        info: '《案74》' + '<br>' + `
            南部30多歲男性，先前至冰島自助旅遊，返國後出現牙痛、全身倦怠症狀，就醫時因有國外旅遊史，由醫院採檢通報後確診。
            `
    }, {
        no: '75',
        case: '75',
        date: '3/17',
        status: 'default',
        group: 'trp_EU',
        info: '《案75》' + '<br>' + `
            南部20多歲男性，曾至德國旅遊，返國後出現流鼻水、自覺嗅覺喪失症狀，二度就醫經診斷有肺炎情形，故採檢通報後確診。
            `
    }, {
        no: '76',
        case: '76',
        date: '3/17',
        status: 'default',
        group: 'trp_EU',
        info: '《案76》' + '<br>' + `
            北部30多歲女性，與2名友人至法國巴黎旅遊，返國後出現喉嚨痛、流鼻水政狀，就醫後採檢通報後確診。
            `
    }, {
        no: '77',
        case: '77',
        date: '3/17',
        status: 'default',
        group: 'trp_A',
        info: '《案77》' + '<br>' + `
            北部60多歲女性，1月自台灣經杜拜轉機至捷克旅遊，並於3月自捷克搭機至美國紐約探親，16日入境台灣。該案例在紐約出現發燒、腹瀉症狀，曾於當地就醫，返國後再赴醫院就醫後隨即採檢通報確診。
            `
    }, {
        no: '78',
        case: '78',
        date: '3/18',
        status: 'default',
        group: 'trp_EU',
        info: '《案78》' + '<br>' + `
            50多歲男性，3月6日至3月16日赴德國工作，15日出現咳嗽、鼻塞症狀，返國就醫後檢驗確診。
            `
    }, {
        no: '79',
        case: '79',
        date: '3/18',
        status: 'default',
        group: 'trp_EU',
        info: '《案79》' + '<br>' + `
            40多歲女性，3月1日至3月14日赴英國工作，返國後出現流鼻水、鼻塞症狀，就醫後檢驗確診。
            `
    }, {
        no: '80',
        case: '80',
        date: '3/18',
        status: 'default',
        group: 'trp_EU',
        info: '《案80》' + '<br>' + `
            20多歲女性，先前在西班牙就學，和陸續確診的案58、案64為同群返台學生，當時一起列入居家檢疫，後出現身體無力、鼻塞症狀，經通報檢驗確診。
            `
    }, {
        no: '81',
        case: '81',
        date: '3/18',
        status: 'default',
        group: 'trp_A',
        info: '《案81》' + '<br>' + `
            50多歲女性，為指標性土耳其旅行團團員，無症狀，因列為確診個案之密切接觸者，經檢驗後確診。
            `
    }, {
        no: '82',
        case: '82',
        date: '3/18',
        status: 'default',
        group: 'trp_A',
        info: '《案82》' + '<br>' + `
            20多歲女性，為指標性土耳其旅行團團員，11日於當地就出現喉嚨痛、乾咳症狀，回台後二度就醫，經檢驗後確診。
            `
    }, {
        no: '83',
        case: '83',
        date: '3/18',
        status: 'default',
        group: 'trp_A',
        info: '《案83》' + '<br>' + `
            40多歲女性，為指標性土耳其旅行團團員，無症狀，因列為確診個案之密切接觸者，經檢驗後確診。
            `
    }, {
        no: '84',
        case: '84',
        date: '3/18',
        status: 'default',
        group: 'trp_EU',
        info: '《案84》' + '<br>' + `
            20多歲男性，為來台旅遊的法國籍人士，3月12日入境後大多待在台北旅遊，16日早上發燒就醫，經院所通報採檢確診。
            `
    }, {
        no: '85',
        case: '85',
        date: '3/18',
        status: 'default',
        group: 'trp_EU',
        info: '《案85》' + '<br>' + `
            30多歲女性，先前赴美國自助旅遊，在當地出現全身倦怠、鼻塞、流鼻水症狀，返台就醫通報採檢確診。
            `
    }, {
        no: '86',
        case: '86',
        date: '3/18',
        status: 'default',
        group: 'trp_NA',
        info: '《案86》' + '<br>' + `
            20多歲男性，先前在美國就學，並於當地出現咳嗽症狀，16日於台灣機場入境，在填寫健康聲明書時表明自己出現相關症狀，因此當場進行採檢後確診。
            `
    }, {
        no: '87',
        case: '87',
        date: '3/18',
        status: 'default',
        group: 'trp_EU',
        info: '《案87》' + '<br>' + `
            30多歲男性，2月10日至3月16日至英國、義大利、法國工作及旅遊，並於法國當地出現喉嚨痛、咳嗽症狀。因此回台填寫健康聲明書時，表明自己出現相關症狀，當場進行採檢後確診。
            `
    }, {
        no: '88',
        case: '88',
        date: '3/18',
        status: 'default',
        group: 'trp_EU',
        info: '《案88》' + '<br>' + `
            20多歲女性，2月14日至3月16日赴西班牙研習，但於當地出現咳嗽、發燒、胸悶症狀，因此於入境時主動告知，當場進行採檢後確診。
            `
    }, {
        no: '89',
        case: '89',
        date: '3/18',
        status: 'default',
        group: 'trp_NA',
        info: '《案89》' + '<br>' + `
            30多歲女性，長期住在美國，3月14日出現咳嗽、喉嚨痛、發燒症狀，16日入境後表明自己出現症狀，當場進行採檢後確診。
            `
    }, {
        no: '90',
        case: '90',
        date: '3/18',
        status: 'default',
        group: 'trp_EU',
        info: '《案90》' + '<br>' + `
            30多歲男性，2月14日至3月16日赴西班牙工作及旅遊，於當地出現流鼻水、打噴嚏、喉嚨癢、咳嗽症狀，16日返台後主動告知症狀，當場進行採檢後確診。
            `
    }, {
        no: '91',
        case: '91',
        date: '3/18',
        status: 'default',
        group: 'trp_EU',
        info: '《案91》' + '<br>' + `
            30多歲男性，2月27日至3月16日赴法國、西班牙、英國自助旅遊，並於法國當地出現喉嚨痛、流鼻水、鼻塞、咳嗽狀況，16日返台後主動告知症狀，當場進行採檢後確診。
            `
    }, {
        no: '92',
        case: '92',
        date: '3/18',
        status: 'case_s1',
        group: 'trp_AF',
        info: '《案92》' + '<br>' + `
            20多歲男性，為埃及團確診個案接觸者，無症狀，經接觸者採檢確診。
            `
    }, {
        no: '93',
        case: '93',
        date: '3/18',
        status: 'default',
        group: 'trp_A',
        info: '《案93》' + '<br>' + `
            30多歲女性，先前曾到卡達旅遊，並於當地出現背痛症狀，16日返台後主動告知症狀，當場進行採檢後確診。
            `
    }, {
        no: '94',
        case: '94',
        date: '3/18',
        status: 'default',
        group: 'trp_A',
        info: '《案94》' + '<br>' + `
            30多歲男性，為指標性土耳其旅行團團員，返台後出現發燒，經檢驗後確診。
            `
    }, {
        no: '95',
        case: '95',
        date: '3/18',
        status: 'default',
        group: 'trp_A',
        info: '《案95》' + '<br>' + `
            20多歲女性，3月6日至3月12日與丈夫赴印尼峇里島遊玩，在當地就出現喉嚨腫痛、輕微咳嗽等症狀，入境時沒有發燒也未通報，直到16日就醫，經院所通報採檢確診。
            `
    }, {
        no: '96',
        case: '96',
        date: '3/18',
        status: 'default',
        group: 'trp_EU',
        info: '《案96》' + '<br>' + `
            20多歲女性，先前到英國就學，於當地出現發燒、咳嗽有痰、輕微鼻塞現象，後經泰國轉機返台，16日於機場主動告知症狀，當場進行採檢後確診。
            `
    }, {
        no: '97',
        case: '97',
        date: '3/18',
        status: 'default',
        group: 'trp_EU',
        info: '《案97》' + '<br>' + `
            20多歲男性，先前到瑞士就學，於當地出現全身無力、發燒、咳嗽、喉嚨痛症狀，於奧地利經泰國轉機返台，16日入境時主動通報身體不適，當場進行採檢後確診。
            `
    }, {
        no: '98',
        case: '98',
        date: '3/18',
        status: 'default',
        group: 'trp_EU',
        info: '《案98》' + '<br>' + `
            20多歲女性，先前到法國就學，於當地出現全身無力、發燒、咳嗽、喉嚨有痰等症狀，回台後主動通報身體狀況，當場進行採檢後確診。
            `
    }, {
        no: '99',
        case: '99',
        date: '3/18',
        status: 'default',
        group: 'trp_A',
        info: '《案99》' + '<br>' + `
            20多歲女性，2月1日至3月16日赴菲律賓工作，於當地出現流鼻水、倦怠、喉嚨痛、腹瀉、鼻塞、咳嗽等症狀，16日返台填寫健康聲明書時，表明自己出現相關症狀，當場進行採檢後確診。
            `
    }, {
        no: '100',
        case: '100',
        date: '3/18',
        status: 'case_s1',
        group: 'non',
        info: '《案100》' + '<br>' + `
            南部20多歲女性，近期無出國史，3月12日開始出現喉嚨痛、發燒、頭痛症狀，當天曾就醫，16日再次就醫診斷為一般感冒，隔日又因症狀未緩解到急診就醫，後來經醫師採檢通報確診，感染源待釐清。
            `
    }, {
        no: '101',
        case: '101',
        date: '3/19',
        status: 'default',
        group: 'trp_AF',
        info: '《案101》' + '<br>' + `
            為70多歲男性，曾至埃及旅遊（與案55、63、71同團），返國後出現發燒、流鼻水、肌肉痠痛等症狀，由衛生單位安排就醫並採檢通報確診。
            `
    }, {
        no: '102',
        case: '102',
        date: '3/19',
        status: 'default',
        group: 'trp_NA',
        info: '《案102》' + '<br>' + `
            50多歲女性，曾與非同住家人至美國參加商務活動，入境時有輕微咳嗽，後來自覺有發燒情形就醫，採檢通報後確診。
            `
    }, {
        no: '103',
        case: '103',
        date: '3/19',
        status: 'case_s1',
        group: 'trp_EU',
        info: '《案103》' + '<br>' + `
            為案59（高中生）之同班男同學，與案59座位鄰近，因出現喉嚨癢、發燒症狀，先行致電1922通知後，依指示前往醫院採檢後確診。
            `
    }, {
        no: '104',
        case: '104',
        date: '3/19',
        status: 'default',
        group: 'trp_EU',
        info: '《案104》' + '<br>' + `
            40多歲女性，曾跟團至奧地利、捷克旅遊（與案61、72同團）。其中案104出現咳嗽、流鼻水症狀，案108出現發燒症狀，就醫採檢通報後確診。
            `
    }, {
        no: '105',
        case: '105',
        date: '3/19',
        status: 'default',
        group: 'trp_EU',
        info: '《案105》' + '<br>' + `
            20多歲男性，曾赴法國留學，返台入境時主動向檢疫人員通報喉嚨不適，安排採檢通報後確診。
            `
    }, {
        no: '106',
        case: '106',
        date: '3/19',
        status: 'default',
        group: 'trp_EU',
        info: '《案106》' + '<br>' + `
            20多歲男性，曾至西班牙遊學，出現喉嚨癢症狀，入境時主動向檢疫人員說明症狀，安排採檢通報後確診。
            `
    }, {
        no: '107',
        case: '107',
        date: '3/19',
        status: 'default',
        group: 'trp_EU',
        info: '《案107》' + '<br>' + `
            50多歲法國籍男性，來台探親，入境後直接至防疫旅宿居家檢疫，出現流鼻水、咳嗽症狀，安排採檢通報後確診。
            `
    }, {
        no: '108',
        case: '108',
        date: '3/19',
        status: 'case_s2',
        group: 'trp_EU',
        info: '《案108》' + '<br>' + `
            40多歲男性，曾跟團至奧地利、捷克旅遊（與案61、72同團）。其中案104出現咳嗽、流鼻水症狀，案108出現發燒症狀，就醫採檢通報後確診，但因為體重較重、心肺功能差，後續因嚴重肺炎病逝。
            `
    }, {
        no: '109',
        case: '109',
        date: '3/20',
        status: 'default',
        group: 'trp_AF',
        info: '《案109》' + '<br>' + `
            80多歲男性，曾跟團至埃及旅遊，返國後發病，有發燒、流鼻水、咳嗽等症狀，自行就醫後，經通報採檢確診
            `
    }, {
        no: '110',
        case: '110',
        date: '3/20',
        status: 'default',
        group: 'trp_EU',
        info: '《案110》' + '<br>' + `
            30多歲女性，曾至英國留學後，又前往法國旅遊，返國時出現胸悶、咳嗽等症狀，入境時主動通報，經採檢後確診。
            `
    }, {
        no: '111',
        case: '111',
        date: '3/20',
        status: 'default',
        group: 'trp_AF',
        info: '《案111》' + '<br>' + `
            50多歲女性，曾跟團至埃及旅遊，返國進行居家隔離後發病，有喉嚨痛、發燒等症狀，經通報採檢後確診。
            `
    }, {
        no: '112',
        case: '112',
        date: '3/20',
        status: 'default',
        group: 'trp_EU',
        info: '《案112》' + '<br>' + `
            20多歲女性，曾至法國旅遊，返國時出現喉嚨痛、流鼻涕等症狀，入境時主動通報，經採檢後確診。
            `
    }, {
        no: '113',
        case: '113',
        date: '3/20',
        status: 'default',
        group: 'trp_NA',
        info: '《案113》' + '<br>' + `
            30多歲男性，曾至美國、墨西哥旅遊，回國後出現流鼻水、鼻塞等症狀，自行就醫後，經通報採檢確診。
            `
    }, {
        no: '114',
        case: '114',
        date: '3/20',
        status: 'default',
        group: 'trp_EU',
        info: '《案114》' + '<br>' + `
            10多歲男性，曾因比賽前往西班牙、德國、英國，並經過法國轉機返台，回國進行居家檢疫，出現頭痛、鼻塞、眼睛痛等症狀，經採檢後確診。
            `
    }, {
        no: '115',
        case: '115',
        date: '3/20',
        status: 'default',
        group: 'trp_EU',
        info: '《案115》' + '<br>' + `
            20多歲女性，曾至波蘭遊學，返國後進行居家檢疫，出現發燒、咳嗽、全身倦怠等症狀，經採檢後確診。
            `
    }, {
        no: '116',
        case: '116',
        date: '3/20',
        status: 'default',
        group: 'trp_EU',
        info: '《案116》' + '<br>' + `
            20多歲女性，曾至英國留學，返國前就出現咳嗽、流鼻水等症狀，入境時主動通報，經採檢後確診。
            `
    }, {
        no: '117',
        case: '117',
        date: '3/20',
        status: 'default',
        group: 'trp_EU',
        info: '《案117》' + '<br>' + `
            40多歲男性，曾至葡萄牙、西班牙旅遊，返國後出現腹瀉症狀，自行就醫後，經通報採檢確診。
            `
    }, {
        no: '118',
        case: '118',
        date: '3/20',
        status: 'case_s1',
        group: 'trp_NA',
        info: '《案118》' + '<br>' + `
            30多歲女性，是案85的同行友人，曾前往美國旅遊，返國後進行居家隔離，經採檢後確診。
            `
    }, {
        no: '119',
        case: '119',
        date: '3/20',
        status: 'default',
        group: 'trp_NA',
        info: '《案119》' + '<br>' + `
            60多歲男性，曾至美國探親，回國後出現喉嚨痛、鼻塞、流鼻水症狀，自行就醫後，經通報採檢確診。
            `
    }, {
        no: '120',
        case: '120',
        date: '3/20',
        status: 'default',
        group: 'trp_EU',
        info: '《案120》' + '<br>' + `
            20多歲女性，曾至法國留學，返國前已出現流鼻水、喉嚨痛、全身倦怠等症狀，返國後居家檢疫後，經通報採檢確診。
            `
    }, {
        no: '121',
        case: '121',
        date: '3/20',
        status: 'case_s1',
        group: 'trp_NA',
        info: '《案121》' + '<br>' + `
            30多歲女性，是案85的同行友人，曾前往美國旅遊，返國後進行居家隔離，經採檢後確診。
            `
    }, {
        no: '122',
        case: '122',
        date: '3/20',
        status: 'default',
        group: 'trp_A',
        info: '《案122》' + '<br>' + `
            為60多歲女性，曾跟團至土耳其旅遊，返國時與發生群聚的土耳其旅遊團搭乘同班機，因此列為接觸者進行居家隔離，發病後自行就醫，經採檢後確診。
            `
    }, {
        no: '123',
        case: '123',
        date: '3/20',
        status: 'default',
        group: 'trp_NA',
        info: '《案123》' + '<br>' + `
            為40多歲美國籍男性，曾至新加坡、美國加州、日本東京洽公，返國後進行居家檢疫，出現發燒、倦怠等症狀，經採檢後確診。
            `
    }, {
        no: '124',
        case: '124',
        date: '3/20',
        status: 'case_s1',
        group: 'trp_NA',
        info: '《案124》' + '<br>' + `
            30多歲男性，近期無出國史，發病後自行就醫採檢通報確診，個案表示曾與自美國返台的上司接觸，同事也出現症狀，感染源待釐清。
            `
    }, {
        no: '125',
        case: '125',
        date: '3/20',
        status: 'default',
        group: 'trp_EU',
        info: '《案125》' + '<br>' + `
            20多歲女性，曾前往荷蘭、奧地利旅遊與工作，回國前已出現鼻塞、流鼻水、全身無力等症狀，入境時於機場主動通報，經採檢後確診。
            `
    }, {
        no: '126',
        case: '126',
        date: '3/20',
        status: 'default',
        group: 'trp_NA',
        info: '《案126》' + '<br>' + `
            30多歲男性，曾至加拿大旅遊，回國後出現乾咳症狀，自行就醫後，經通報採檢確診。
            `
    }, {
        no: '127',
        case: '127',
        date: '3/20',
        status: 'default',
        group: 'trp_EU',
        info: '《案127》' + '<br>' + `
            20多歲男性，曾至西班牙留學，回國前出現喉嚨痛、咳嗽等症狀，入境時於機場主動通報，經採檢後確診。
            `
    }, {
        no: '128',
        case: '128',
        date: '3/20',
        status: 'default',
        group: 'trp_EU',
        info: '《案128》' + '<br>' + `
            20多歲女性，曾至法國留學，並曾前往盧森堡、比利時、德國旅遊，返國前已出現喉嚨痛、咳嗽症狀，於機場主動通報，經採檢後確診。
            `
    }, {
        no: '129',
        case: '129',
        date: '3/20',
        status: 'default',
        group: 'trp_NA',
        info: '《案129》' + '<br>' + `
            40多歲男性，曾至美國工作，回國前已出現發燒、喉嚨癢等症狀，於機場主動通報，經採檢後確診。
            `
    }, {
        no: '130',
        case: '130',
        date: '3/20',
        status: 'case_s1',
        group: 'trp_EU',
        info: '《案130》' + '<br>' + `
            10多歲女性，為案59同班同學，居家隔離後出現乾咳症狀，經採檢後確診。
            `
    }, {
        no: '131',
        case: '131',
        date: '3/20',
        status: 'default',
        group: 'trp_EU',
        info: '《案131》' + '<br>' + `
            40多歲女性，曾跟團至葡萄牙、西班牙旅遊，經杜拜轉機，回國後出現喉嚨痛症狀，自行就醫後，經通報採檢確診。
            `
    }, {
        no: '132',
        case: '132',
        date: '3/20',
        status: 'default',
        group: 'trp_A',
        info: '《案132》' + '<br>' + `
            20多歲女性，曾至菲律賓工作，回國前出現頭痛、發燒、流鼻水症狀，入境時主動通報，經採檢後確診。
            `
    }, {
        no: '133',
        case: '133',
        date: '3/20',
        status: 'default',
        group: 'trp_EU',
        info: '《案133》' + '<br>' + `
            10多歲女性，曾至英國留學，回國後加強自主健康管理，出現頭痛、發燒、流鼻水等症狀，通報後採檢確診。
            `
    }, {
        no: '134',
        case: '134',
        date: '3/20',
        status: 'case_s1',
        group: 'non',
        info: '《案134》' + '<br>' + `
            30多歲女性，近期無出國史，出現發燒、喉嚨痛症狀後自行就醫，經通報後採檢確診，感染源待釐清。
            `
    }, {
        no: '135',
        case: '135',
        date: '3/20',
        status: 'default',
        group: 'trp_NA',
        info: '《案135》' + '<br>' + `
            20多歲女性，長住美國，返台後出現咳嗽、流鼻水等症狀，自行就醫後，經通報採檢確診。
            `
    }, {
        no: '136',
        case: '136',
        date: '3/21',
        status: 'default',
        group: 'trp_A',
        info: '《案136》' + '<br>' + `
            30多歲女性，曾跟團赴土耳其旅遊，返國當日出現咳嗽、流鼻水、有痰症狀，自行就醫後確診。
            `
    }, {
        no: '137',
        case: '137',
        date: '3/21',
        status: 'default',
        group: 'trp_NA',
        info: '《案137》' + '<br>' + `
            20多歲女性，3月5日至3月19日赴美國旅遊，於當地出現喉嚨痛、發燒、噁心、頭暈症狀，返國後自行通報，由機場採檢送驗確診。
            `
    }, {
        no: '138',
        case: '138',
        date: '3/21',
        status: 'default',
        group: 'trp_EU',
        info: '《案138》' + '<br>' + `
            20多歲男性，1月初至法國就學，返台居家檢疫期間出現咳嗽、有痰症狀，經安排就醫及採檢通報後確診。
            `
    }, {
        no: '139',
        case: '139',
        date: '3/21',
        status: 'default',
        group: 'trp_EU',
        info: '《案139》' + '<br>' + `
            20多歲女性，去年4月赴英國就學，3月14日返台，17日出現喉嚨癢、咳嗽、發燒、肌肉痠痛等症狀，就醫後因有境外旅遊史採檢通報確診。
            `
    }, {
        no: '140',
        case: '140',
        date: '3/21',
        status: 'default',
        group: 'trp_AF',
        info: '《案140》' + '<br>' + `
            50多歲女性，埃及旅客團員，原列為接觸者，居家隔離期間於3月18日發病，經安排就醫及採檢通報後確診。
            `
    }, {
        no: '141',
        case: '141',
        date: '3/21',
        status: 'default',
        group: 'trp_EU',
        info: '《案141》' + '<br>' + `
            20多歲女性，去年9月至英國就學，於當地出現流鼻水、咳嗽、頭痛、有痰症狀，返台入境時主動通報，由機場採檢送驗確診。
            `
    }, {
        no: '142',
        case: '142',
        date: '3/21',
        status: 'default',
        group: 'trp_EU',
        info: '《案142》' + '<br>' + `
            30多歲女性，去年赴英國教會服務，於當地出現咳嗽、有痰症狀，返台入境時經機場採檢送驗確診。
            `
    }, {
        no: '143',
        case: '143',
        date: '3/21',
        status: 'default',
        group: 'trp_EU',
        info: '《案143》' + '<br>' + `
            50多歲男性，因工作關係長住捷克，為案77境外移入個案親人，曾於3月7日至14日間與案77自捷克赴美國探親，並於3月14日出現淋巴腫脹、微燒症狀，19日返國入境時由機場採檢送驗確診。
            `
    }, {
        no: '144',
        case: '144',
        date: '3/21',
        status: 'default',
        group: 'trp_EU',
        info: '《案144》' + '<br>' + `
            30多歲女性，和案143為夫妻、和案77境外移入個案為親人，長住捷克。於3月6日出現肌肉痠痛、喉嚨痛症狀，隨後於3月7日至14日間與案77自捷克赴美國探親，19日返國入境時由機場採檢送驗確診。
            `
    }, {
        no: '145',
        case: '145',
        date: '3/21',
        status: 'default',
        group: 'trp_NA',
        info: '《案145》' + '<br>' + `
            20多歲女性，曾於3月初赴美國自助旅遊，並於當地出現咳嗽、有痰症狀，19日返國入境時由機場採檢送驗確診。
            `
    }, {
        no: '146',
        case: '146',
        date: '3/21',
        status: 'default',
        group: 'trp_AF',
        info: '《案146》' + '<br>' + `
            50多歲男性，3月9日至3月18日至南非工作，於返台當日出現發燒症狀，隔日自行就醫採檢通報確診。
            `
    }, {
        no: '147',
        case: '147',
        date: '3/21',
        status: 'default',
        group: 'trp_A',
        info: '《案147》' + '<br>' + `
            印尼籍20多歲女性，3月中曾返回印尼參加婚禮，來台後出現咳嗽、腹瀉、頭痛症狀，自行就醫後採檢通報確診。
            `
    }, {
        no: '148',
        case: '148',
        date: '3/21',
        status: 'default',
        group: 'trp_NA',
        info: '《案148》' + '<br>' + `
            20多歲女性，1月24日至3月15日至美國就學，返國時與案85搭乘同班機，並列為案85接觸者，3月18日發病，經採檢通報確診。
            `
    }, {
        no: '149',
        case: '149',
        date: '3/21',
        status: 'default',
        group: 'trp_EU',
        info: '《案149》' + '<br>' + `
            70多歲男性，3月9日至3月14日跟團至英國旅遊，返台後出現喉嚨癢、發燒症狀，自行就醫後因有國外旅遊史，因此採檢通報確診。
            `
    }, {
        no: '150',
        case: '150',
        date: '3/21',
        status: 'default',
        group: 'trp_EU',
        info: '《案150》' + '<br>' + `
            20多歲男性，為案133家人，1月14日至3月14日至英國就學，3月14日與案133一同返國，3月19日發病，經檢驗於今日確診。
            `
    }, {
        no: '151',
        case: '151',
        date: '3/21',
        status: 'default',
        group: 'trp_EU',
        info: '《案151》' + '<br>' + `
            30多歲男性，3月10日至3月14日赴荷蘭工作，返台後出現咳嗽、胸悶、發熱、喉嚨癢症狀，自行就醫後採檢確診。
            `
    }, {
        no: '152',
        case: '152',
        date: '3/21',
        status: 'default',
        group: 'trp_EU',
        info: '《案152》' + '<br>' + `
            20多歲女性，去年赴英國就學，於當地出現喉嚨痛症狀，3月17日返台後，於居家檢疫期間通報症狀，經安排就醫後採檢確診。
            `
    }, {
        no: '153',
        case: '153',
        date: '3/21',
        status: 'default',
        group: 'trp_EU',
        info: '《案153》' + '<br>' + `
            20多歲女性，去年赴法國就學，3月14日返台後，於3月18日居家檢疫期間出現發燒症狀，經通報安排就醫後採檢確診。
            `
    }, {
        no: '154',
        case: '154',
        date: '3/22',
        status: 'default',
        group: 'trp_NA',
        info: '《案154》' + '<br>' + `
            30多歲男性，與案85、118、121曾一同前往美國旅遊，返國後出現肌肉痠痛、頭痛及喉嚨痛等症狀，自行就醫後，經通報採檢確診。
            `
    }, {
        no: '155',
        case: '155',
        date: '3/22',
        status: 'default',
        group: 'trp_EU',
        info: '《案155》' + '<br>' + `
            70多歲男性，曾前往丹麥探親，返國後進行居家檢疫時，出現肌肉痠痛、發燒等症狀，且X光片顯示肺炎，經採檢後確診。
            `
    }, {
        no: '156',
        case: '156',
        date: '3/22',
        status: 'case_s1',
        group: 'non',
        info: '《案156》' + '<br>' + `
            20多歲女性，近期無出國旅遊史，3月12日開始出現發燒、全身無力、頭暈等症狀後，二度就醫後經通報採檢確診。
            `
    }, {
        no: '157',
        case: '157',
        date: '3/22',
        status: 'default',
        group: 'trp_OC',
        info: '《案157》' + '<br>' + `
            20多歲男性，先前曾赴紐西蘭旅遊，返頭後出現全身倦怠、胸痛及呼吸困難症狀，自行就醫後經通報採檢確診。
            `
    }, {
        no: '158',
        case: '158',
        date: '3/22',
        status: 'default',
        group: 'trp_NA',
        info: '《案158》' + '<br>' + `
            10多歲女性，今年1月19日-3月18日到美國就學，返台當日出現咳嗽、有痰、微燒、頭痛及肌肉痠痛症狀，且X光片顯示肺炎，經採檢後確診。
            `
    }, {
        no: '159',
        case: '159',
        date: '3/22',
        status: 'default',
        group: 'trp_NA',
        info: '《案159》' + '<br>' + `
            60多歲男性，先前曾前往美國工作，返台後出現肌肉酸痛、流鼻水症狀，X光片顯示肺炎，經採檢後確診。
            `
    }, {
        no: '160',
        case: '160',
        date: '3/22',
        status: 'default',
        group: 'trp_NA',
        info: '《案160》' + '<br>' + `
            50多歲男性，3月1日-3月10日曾赴美國，返台後於14日因頭痛至診所就醫，20日被匡列為案124之接觸者後經衛生單位採檢。
            `
    }, {
        no: '161',
        case: '161',
        date: '3/22',
        status: 'default',
        group: 'trp_AF',
        info: '《案161》' + '<br>' + `
            60多歲男性，為埃及旅遊團團員，原列為案55接觸者，居家隔離期間於3月20日發病，經安排就醫後發現肺炎症狀，採檢後確診。
            `
    }, {
        no: '162',
        case: '162',
        date: '3/22',
        status: 'default',
        group: 'trp_AF',
        info: '《案162》' + '<br>' + `
            60多歲女性，為埃及旅遊團團員，原列為案55接觸者，居家隔離期間於3月20日發病，經安排就醫後發現肺炎症狀，採檢後確診。
            `
    }, {
        no: '163',
        case: '163',
        date: '3/22',
        status: 'default',
        group: 'trp_EU',
        info: '《案163》' + '<br>' + `
            20多歲女性，去年9月1日-3月18日到法國就學，返台居家檢疫期間出現咳嗽、喉嚨痛，經安排就醫後採檢確診。
            `
    }, {
        no: '164',
        case: '164',
        date: '3/22',
        status: 'default',
        group: 'trp_A',
        info: '《案164》' + '<br>' + `
            20多歲女性，2月2日-3月18日曾赴菲律賓就學，於當地出現咳嗽、全身痠痛症狀，返台居家檢疫期間通報，經安排就醫後採檢確診。
            `
    }, {
        no: '165',
        case: '165',
        date: '3/22',
        status: 'default',
        group: 'trp_EU',
        info: '《案165》' + '<br>' + `
            20多歲女性，去年12月30日-3月5日前往義大利就學，返台居家檢疫期間出現流鼻水、鼻塞症狀，經安排就醫後採檢確診。
            `
    }, {
        no: '166',
        case: '166',
        date: '3/22',
        status: 'default',
        group: 'trp_EU',
        info: '《案166》' + '<br>' + `
            20多歲男性，1月6日-3月18日赴德國工作，於當地開始出現喉嚨痛症狀，居家檢疫期間通報，經安排就醫後採檢確診。
            `
    }, {
        no: '167',
        case: '167',
        date: '3/22',
        status: 'default',
        group: 'trp_EU',
        info: '《案167》' + '<br>' + `
            10多歲男性，1月9日-3月20日赴英國就學，返台當日出現發燒、全身倦怠、咳嗽症狀，入境時由機場採檢送驗確診。
            `
    }, {
        no: '168',
        case: '168',
        date: '3/22',
        status: 'case_s1',
        group: 'trp_NA',
        info: '《案168》' + '<br>' + `
            德國籍30多歲男性，原列為案124接觸者，居家隔離時出現咳嗽、流鼻水、喉嚨痛症狀，經安排就醫後採檢確診。
            `
    }, {
        no: '169',
        case: '169',
        date: '3/22',
        status: 'case_s1',
        group: 'trp_NA',
        info: '《案169》' + '<br>' + `
            奧地利籍30多歲女性，原列為案124接觸者，居家隔離時出現發燒症狀，經安排就醫後採檢確診。
            `
    }, {
        no: '170',
        case: '170',
        date: '3/23',
        status: 'case_s2',
        group: 'trp_EU',
        info: '《案170》' + '<br>' + `
            60多歲男性，與案189為夫妻，3月12日至20日一起赴西班牙旅遊，返國入境時因為有發燒、咳嗽症狀，經機場篩檢後確診。個案本身有癌症病史，住院過程中使用奎寧藥物，但情況不見好轉轉入加護病房，後因多重器官衰竭病逝。
            `
    }, {
        no: '171',
        case: '171',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info: '《案171》' + '<br>' + `
            30多歲男性，與案174為職場同事，1月12日-3月20日前往荷蘭工作，在當地出現發燒、全身痠痛、輕微鼻塞、失去嗅覺味覺狀況，返國入境時經機場篩檢後確診。
            `
    }, {
        no: '172',
        case: '172',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info: '《案172》' + '<br>' + `
            30多歲男性，與案173為夫妻，去年12月起二度前往法國工作及旅遊，於當地出現發燒、咳嗽、喉嚨痛、有痰症狀，返國入境時經機場篩檢後確診。
            `
    }, {
        no: '173',
        case: '173',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info: '《案173》' + '<br>' + `
            30多歲女性，與案172為夫妻，去（2019）年12月21日至今（2020）年3月20日，前往法國工作及旅遊，於當地出現發燒、流鼻水症狀，返國入境時經機場篩檢後確診。
            `
    }, {
        no: '174',
        case: '174',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info: '《案174》' + '<br>' + `
            30多歲男性，與案171為職場同事，2月25日-3月20日赴荷蘭工作，於當地出現發燒、全身倦怠、喉嚨痛、咳嗽、胸痛症狀，返國入境時經機場篩檢後確診。
            `
    }, {
        no: '175',
        case: '175',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info: '《案175》' + '<br>' + `
            4歲男性，為案171隨行家人，1月12日-3月20日前往荷蘭，於當地出現發燒症狀， 返國入境時經機場篩檢後確診。
            `
    }, {
        no: '176',
        case: '176',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info: '《案176》' + '<br>' + `
            20多歲男性，3月7日-3月15日前往瑞士工作，返台居家檢疫期間出現發燒、頭痛、頭暈症狀，通報後經安排就醫採檢確診。
            `
    }, {
        no: '177',
        case: '177',
        date: '3/23',
        status: 'default',
        group: 'trp_NA',
        info: '《案177》' + '<br>' + `
            40多歲男性，與案129為職場同事，3月11日-3月18日前往美國工作，返台居家檢疫期間出現喉嚨癢、發燒、咳嗽、肌肉痠痛症狀， 通報後經安排就醫採檢確診。
            `
    }, {
        no: '178',
        case: '178',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info: '《案178》' + '<br>' + `
            30多歲女性，為案171隨行家人，1月12日-3月20日前往荷蘭，於當地出現發燒、全身痠痛症狀，返國入境時經機場篩檢後確診。
            `
    }, {
        no: '179',
        case: '179',
        date: '3/23',
        status: 'default',
        group: 'trp_NA',
        info: '《案179》' + '<br>' + `
            20多歲女性，1月10日-3月17日赴美國就學，返台後出現流鼻水、微燒症狀，自行就醫後採檢確診。
            `
    }, {
        no: '180',
        case: '180',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info: '《案180》' + '<br>' + `
            20多歲男性，去年11月1日-3月20日前往捷克工作，於當地出現咳嗽、疲憊、發冷、肌肉痠痛症狀，返國入境時經機場篩檢後確診。
            `
    }, {
        no: '181',
        case: '181',
        date: '3/23',
        status: 'default',
        group: 'trp_NA',
        info: '《案181》' + '<br>' + `
            30多歲女性，2月23日-3月18日前往美國、3月19日-3月20日前往日本旅遊，於3月1日便出現流鼻水、發燒、全身倦怠症狀， 返國入境時經機場篩檢後確診。
            `
    }, {
        no: '182',
        case: '182',
        date: '3/23',
        status: 'default',
        group: 'trp_NA',
        info: '《案182》' + '<br>' + `
            40多歲男性，3月7日-3月19日前往美國旅遊，返台後於居家檢疫期間出現微燒、喉嚨癢、咳嗽症狀，經安排就醫後採檢確診。
            `
    }, {
        no: '183',
        case: '183',
        date: '3/23',
        status: 'default',
        group: 'trp_m',
        info: '《案183》' + '<br>' + `
            70多歲女性，2月18日-3月16日前往法國、巴西、智利、祕魯旅遊，返台居家檢疫期間出現咳嗽、微燒症狀，經安排就醫後採檢確診。
            `
    }, {
        no: '184',
        case: '184',
        date: '3/23',
        status: 'default',
        group: 'trp_NA',
        info: '《案184》' + '<br>' + `
            30多歲女性，3月13日-3月19日前往美國處理個人事務，返台居家檢疫期間出現肌肉痠痛症狀，經安排就醫後採檢確診。
            `
    }, {
        no: '185',
        case: '185',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info: '《案185》' + '<br>' + `
            20多歲男性，去年8月8日-今年3月20日前往英國就學，於當地出現四肢無力、呼吸不順情形，返台居家檢疫期間通報，經安排就醫後採檢確診。
            `
    }, {
        no: '186',
        case: '186',
        date: '3/23',
        status: 'case_s1',
        group: 'trp_NA',
        info: '《案186》' + '<br>' + `
            30多歲女性，為中研院群聚個案（案168）同住接觸者，3月17日發病，因案124於3月20日確診，且案168曾有症狀，故於3月20日自行就醫並採檢通報確診。
            `
    }, {
        no: '187',
        case: '187',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info: '《案187》' + '<br>' + `
            30多歲女性，2月20日-3月19日前往英國工作，返台居家檢疫期間出現喉嚨痛、頭痛、呼吸困難、失去嗅覺症狀，安排就醫後X光片顯示肺炎，採檢通報確診。
            `
    }, {
        no: '188',
        case: '188',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info: '《案188》' + '<br>' + `
            20多歲女性，1月27日-3月21日前往英國工作， 並於當地出現發燒、頭痛、鼻塞、喉嚨乾症狀，返國入境時經機場篩檢後確診。
            `
    }, {
        no: '189',
        case: '189',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info: '《案189》' + '<br>' + `
            50多歲女性，與案170為夫妻，3月12日至20日一起赴西班牙旅遊，返台居家檢疫期間出現發燒、咳嗽症狀，經安排就醫後採檢確診。
            `
    }, {
        no: '190',
        case: '190',
        date: '3/23',
        status: 'default',
        group: 'trp_NA',
        info: '《案190》' + '<br>' + `
            20多歲女性，2月25日-3月21日赴美國工作，於當地便出現咳嗽症狀，返國入境時經機場篩檢後確診。
            `
    }, {
        no: '191',
        case: '191',
        date: '3/23',
        status: 'default',
        group: 'trp_NA',
        info: '《案191》' + '<br>' + `
            20多歲男性，1月9日-3月21日赴美國工作，於當地出現流鼻水症狀，返國入境時經機場篩檢後確診。
            `
    }, {
        no: '192',
        case: '192',
        date: '3/23',
        status: 'default',
        group: 'trp_NA',
        info: '《案192》' + '<br>' + `
            20多歲女性，去年10月赴美國就學，18日返台後出現肺炎、咳嗽、流鼻水、發燒、頭痛症狀，自行就醫後採檢確診。
            `
    }, {
        no: '193',
        case: '193',
        date: '3/23',
        status: 'default',
        group: 'trp_EU',
        info: '《案193》' + '<br>' + `
            30多歲男性，3月3日-3月19日赴英國工作，於當地出現喉嚨癢、咳嗽症狀，居家檢疫期間通報，經安排就醫後檢疫確診。
            `
    }, {
        no: '194',
        case: '194',
        date: '3/23',
        status: 'default',
        group: 'trp_NA',
        info: '《案194》' + '<br>' + `
            20多歲女性，2月5日-3月19日赴美國工作， 於當地出現咳嗽、流鼻水、全身倦怠症狀，居家檢疫期間通報，經安排就醫後檢疫確診。
            `
    }, {
        no: '195',
        case: '195',
        date: '3/23',
        status: 'default',
        group: 'trp_NA',
        info: '《案195》' + '<br>' + `
            20多歲女性，3月5日-3月19日與另2名友人（案137、案145）前往美國旅遊，返台居家檢疫期間出現3 乾咳、喉嚨痛症狀，經安排就醫後檢疫確診。
            `
    }, {
        no: '196',
        case: '196',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info: '《案196》' + '<br>' + `
            美國籍50多歲男性，3月7日自美國離境前往德國、保加利亞、泰國，3月20日來台轉機時因為有發燒、咳嗽、呼吸喘症狀，於機場篩檢後確診。
            `
    }, {
        no: '197',
        case: '197',
        date: '3/24',
        status: 'case_s2',
        group: 'trp_NA',
        info: '《案197》' + '<br>' + `
            40多歲男性，和案202為夫妻，3月8日-3月18日至美國探親，返台後開始發燒，自行就醫採檢通報後確診，3月19日發病，3月28日因呼吸喘，轉至加護病房隔離，因多重器官衰竭於5月10日病逝。
            `
    }, {
        no: '198',
        case: '198',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info: '《案198》' + '<br>' + `
            20多歲女性，去年底赴愛爾蘭讀書，3月19日返台後，於居家檢疫期間出現腹瀉、全身酸痛、咳嗽、喉嚨痛、流鼻水症狀，經採檢後確診。
            `
    }, {
        no: '199',
        case: '199',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info: '《案199》' + '<br>' + `
            20多歲男性，1月8日-3月19日到義大利、德國、比利時、英國旅遊，返台居家檢疫期間出現頭暈、全身倦怠，經採檢後確診。
            `
    }, {
        no: '200',
        case: '200',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info: '《案200》' + '<br>' + `
            20多歲女性，1月18日-3月19日到英國就學，返台居家檢疫期間出現胸悶、有痰症狀，經採檢後確診。
            `
    }, {
        no: '201',
        case: '201',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info: '《案201》' + '<br>' + `
            30多歲女性，2月25日-3月17日到愛爾蘭工作，返台居家檢疫期間出現流鼻水、鼻塞症狀，經採檢後確診。
            `
    }, {
        no: '202',
        case: '202',
        date: '3/24',
        status: 'default',
        group: 'trp_NA',
        info: '《案202》' + '<br>' + `
            40多歲女性，和案197為夫妻，3月8日-3月18日至美國探親，返台後開始發燒、喉嚨癢、有痰，自行就醫採檢通報後確診。
            `
    }, {
        no: '203',
        case: '203',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info: '《案203》' + '<br>' + `
            30多歲男性，2月16日-3月21日赴法國工作，返台前就出現發燒、頭痛、喉嚨痛、流鼻水、全身無力症狀，入境時於機場採檢後確診。
            `
    }, {
        no: '204',
        case: '204',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info: '《案204》' + '<br>' + `
            20多歲女性，1月26日-3月21日到英國就學，於國外就有發燒症狀，入境台灣時於機場採檢後確診。
            `
    }, {
        no: '205',
        case: '205',
        date: '3/24',
        status: 'default',
        group: 'trp_A',
        info: '《案205》' + '<br>' + `
            5歲以下女性，3月11日-3月19日到土耳其旅遊，返台居家檢疫期間出現發燒症狀，經採檢後確診。
            `
    }, {
        no: '206',
        case: '206',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info: '《案206》' + '<br>' + `
            20多歲女性，1月8日-3月21日赴英國就學，返國前就出現喉嚨痛、流鼻水、鼻塞及嗅覺、味覺喪失症狀，入境時於機場採檢後確診。
            `
    }, {
        no: '207',
        case: '207',
        date: '3/24',
        status: 'default',
        group: 'trp_NA',
        info: '《案207》' + '<br>' + `
            20多歲女性，3月6日-3月20日赴美國工作，於當地出現頭脹、鼻涕倒流、嗅覺和味覺喪失症狀，入境時於機場採檢後確診。
            `
    }, {
        no: '208',
        case: '208',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info: '《案208》' + '<br>' + `
            長住英國30多歲女性，19日從英國經日本轉機回台，因為有咳嗽、流鼻水、鼻塞症狀，因此入境時於機場採檢後確診。
            `
    }, {
        no: '209',
        case: '209',
        date: '3/24',
        status: 'default',
        group: 'trp_NA',
        info: '《案209》' + '<br>' + `
            60多歲女性，1月9日-3月1日前往美國探親，返台居家檢疫期間出現咳嗽、輕微發燒，經採檢後確診。
            `
    }, {
        no: '210',
        case: '210',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info: '《案210》' + '<br>' + `
            20多歲女性，去年8月赴英國就學，3月21日返台時因為有發燒、胸悶、胸痛、頭痛症狀，因此於機場採檢後確診。
            `
    }, {
        no: '211',
        case: '211',
        date: '3/24',
        status: 'default',
        group: 'trp_A',
        info: '《案211》' + '<br>' + `
            40多歲印尼籍男性，3月22日來台工作，因為有發燒症狀，經機場檢驗後確診。
            `
    }, {
        no: '212',
        case: '212',
        date: '3/24',
        status: 'default',
        group: 'trp_NA',
        info: '《案212》' + '<br>' + `
            30多歲女性，因工作長居美國，3月19日返台，於居家檢疫期間開始發燒，經採檢後確診。
            `
    }, {
        no: '213',
        case: '213',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info: '《案213》' + '<br>' + `
            20多歲男性，先前於西班牙就學，3月13日返國時與發生群聚的土耳其旅遊團搭乘同班機，因此列為接觸者並進行居家隔離，3月15日開始發燒，經採檢後確診。
            `
    }, {
        no: '214',
        case: '214',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info: '《案214》' + '<br>' + `
            20多歲男性，先前於英國就學，在當地就開始發燒、咳嗽，20日從英國經日本轉機回台，於機場採檢後確診。
            `
    }, {
        no: '215',
        case: '215',
        date: '3/24',
        status: 'default',
        group: 'trp_NA',
        info: '《案215》' + '<br>' + `
            10多歲女性，1月23日-3月22日赴美國就學，返台居家檢疫期間出現發燒、肌肉痠痛、咳嗽症狀，經採檢後確診。
            `
    }, {
        no: '216',
        case: '216',
        date: '3/24',
        status: 'case_s1',
        group: 'trp_EU',
        info: '《案216》' + '<br>' + `
            北部30多歲法國籍男性，原列為案84之接觸者，居家隔離期間於3月20日出現發燒、咳嗽等症狀，經安排就醫及採檢通報後確診。
            `
    }, {
        no: '217',
        case: '217',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info: '《案217》' + '<br>' + `
            10多歲男性，曾至英國就學，返國後進行居家檢疫時，出現流鼻水症狀，經通報採檢確診。
            `
    }, {
        no: '218',
        case: '218',
        date: '3/24',
        status: 'default',
        group: 'trp_NA',
        info: '《案218》' + '<br>' + `
            20多歲女性，曾至美國就學，返國後進行居家檢疫時，出現喉嚨痛、咳嗽、流鼻水、肺炎等症狀，經通報採檢確診。
            `
    }, {
        no: '219',
        case: '219',
        date: '3/24',
        status: 'default',
        group: 'trp_NA',
        info: '《案219》' + '<br>' + `
            20多歲男性，曾至美國工作，返國後進行居家檢疫時，出現發燒、全身無力症狀，經通報採檢後確診。
            `
    }, {
        no: '220',
        case: '220',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info: '《案220》' + '<br>' + `
            30多歲女性，曾至英國求職，返國前已出現發燒、肌肉痠痛、流鼻水等症狀，於機場入境時被通報，經採檢後確診。
            `
    }, {
        no: '221',
        case: '221',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info: '《案221》' + '<br>' + `
            多歲男性，曾至英國就學，返國前已出現喉嚨痛、咳嗽、鼻塞、流鼻水等症狀，於機場入境時被通報，經採檢後確診。
            `
    }, {
        no: '222',
        case: '222',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info: '《案222》' + '<br>' + `
            20多歲女性，曾至英國就學，與案152同校，返國前已出現喉嚨痛、咳嗽等症狀，於機場入境時被通報，經採檢後確診。
            `
    }, {
        no: '223',
        case: '223',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info: '《案223》' + '<br>' + `
            20多歲女性，曾至英國就學，與案152同校，返國前已出現喉嚨痛、流鼻水、全身倦怠等症狀，於機場入境時被通報，經採檢後確診。
            `
    }, {
        no: '224',
        case: '224',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info: '《案224》' + '<br>' + `
            20多歲女性，曾至英國就學，與案152同校，返國前已出現發燒、喉嚨痛等症狀，於機場入境時被通報，經採檢後確診。
            `
    }, {
        no: '225',
        case: '225',
        date: '3/24',
        status: 'default',
        group: 'trp_EU',
        info: '《案225》' + '<br>' + `
            20多歲男性，曾至英國就學，與案152同校，返國前已出現身體悶熱不適、肌肉痠痛、頭痛、味覺變差等症狀，於機場入境時被通報，經採檢後確診。
            `
    }, {
        no: '226',
        case: '226',
        date: '3/25',
        status: 'default',
        group: 'trp_AF',
        info: '《案226》' + '<br>' + `
            60多歲男性，為埃及旅遊團團員，居家隔離期間於3月21日出現喉嚨乾情形，經安排就醫及採檢通報後確診，該旅遊團群聚截至目前共10人確診（9名團員、1名接觸者）。
            `
    }, {
        no: '227',
        case: '227',
        date: '3/25',
        status: 'default',
        group: 'trp_EU',
        info: '《案227》' + '<br>' + `
            長住英國30多歲女性，返國前已出現全身痠痛、發燒、喉嚨痛、咳嗽、肺炎症狀，22日入境機場時經採檢確診。
            `
    }, {
        no: '228',
        case: '228',
        date: '3/25',
        status: 'default',
        group: 'trp_EU',
        info: '《案228》' + '<br>' + `
            20多歲女性，今年1月初赴荷蘭就學，3月17日返台後，居家檢疫期間出現發燒、輕微流鼻水、輕微咳嗽、肺炎症狀，經安排就醫採檢確診。
            `
    }, {
        no: '229',
        case: '229',
        date: '3/25',
        status: 'default',
        group: 'trp_NA',
        info: '《案229》' + '<br>' + `
            30多歲美國籍男性，長期在台灣工作，3月4日-3月18日返回美國，居家檢疫期間出現發燒、咳嗽、全身倦怠、肌肉痠痛症狀， 經安排就醫採檢確診。
            `
    }, {
        no: '230',
        case: '230',
        date: '3/25',
        status: 'default',
        group: 'trp_NA',
        info: '《案230》' + '<br>' + `
            10多歲女性，今年1月至美國就學，3月21日返台後進行家檢疫期間出現發燒症狀，經安排就醫採檢確診。
            `
    }, {
        no: '231',
        case: '231',
        date: '3/25',
        status: 'default',
        group: 'trp_NA',
        info: '《案231》' + '<br>' + `
            10多歲女性，去年底至美國就學，3月19日返台後進行家檢疫期間，出現喉嚨癢、發燒、頭痛症狀，經安排就醫採檢確診。
            `
    }, {
        no: '232',
        case: '232',
        date: '3/25',
        status: 'default',
        group: 'trp_m',
        info: '《案232》' + '<br>' + `
            20多歲女性，3月8日-3月11日赴美國工作、3月15日再到印尼，返台後出現發燒、喉嚨痛、全身倦怠、肌肉及關節痠痛症狀，自行就醫後採檢確診。
            `
    }, {
        no: '233',
        case: '233',
        date: '3/25',
        status: 'default',
        group: 'trp_EU',
        info: '《案233》' + '<br>' + `
            20多歲女性，去年12月至英國就學，3月13日-21日與高中同學（案210）同遊英國並一同返國，由於入境時無症狀故返家居家檢疫，於3月23日出現發燒、咳嗽、鼻塞、四肢無力症狀，經安排就醫及採檢通報確診。
            `
    }, {
        no: '234',
        case: '234',
        date: '3/25',
        status: 'default',
        group: 'trp_EU',
        info: '《案234》' + '<br>' + `
            20多歲女性，去年底赴法國工作，3月20日返國後，於居家檢疫期間出現發燒症狀，經安排就醫採檢確診。
            `
    }, {
        no: '235',
        case: '235',
        date: '3/25',
        status: 'default',
        group: 'trp_m',
        info: '《案235》' + '<br>' + `
            20多歲男性，先前曾到過比利時、土耳其、泰國，3月20日返台後，於居家檢疫期間出現咳嗽症狀，經安排就醫採檢確診。
            `
    }, {
        no: '236',
        case: '236',
        date: '3/26',
        status: 'default',
        group: 'trp_m',
        info: '《案236》' + '<br>' + `
            50多歲男性，曾至美國、聖地牙哥、智利、南極、阿根廷、卡達等地旅遊，並在泰國轉機，返國後進行居家檢疫時，出現肌肉痠痛、頭痛等症狀，通報採檢後確診。
            `
    }, {
        no: '237',
        case: '237',
        date: '3/26',
        status: 'default',
        group: 'trp_m',
        info: '《案237》' + '<br>' + `
            50多歲男性，曾至美國、聖地牙哥、智利、南極、阿根廷、卡達等地旅遊，並在泰國轉機，返國後進行居家檢疫時，出現肌肉痠痛、頭痛等症狀，通報採檢後確診。
            `
    }, {
        no: '238',
        case: '238',
        date: '3/26',
        status: 'default',
        group: 'trp_EU',
        info: '《案238》' + '<br>' + `
            30多歲男性，曾至英國就學與工作，返國前已出現發燒、咳嗽等症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '239',
        case: '239',
        date: '3/26',
        status: 'default',
        group: 'trp_EU',
        info: '《案239》' + '<br>' + `
            20多歲女性，曾至英國就學，返國前已出現發燒、咳嗽等症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '240',
        case: '240',
        date: '3/26',
        status: 'default',
        group: 'trp_NA',
        info: '《案240》' + '<br>' + `
            30多歲女性，曾至美國工作，返國前已出現喉嚨痛、咳嗽、發燒等症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '241',
        case: '241',
        date: '3/26',
        status: 'default',
        group: 'trp_EU',
        info: '《案241》' + '<br>' + `
            40多歲女性，曾至英國工作，返國時出現喉嚨癢、咳嗽等症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '242',
        case: '242',
        date: '3/26',
        status: 'default',
        group: 'trp_EU',
        info: '《案242》' + '<br>' + `
            20多歲男性，曾至英國就學，返國前已出現咳嗽、流鼻水等症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '243',
        case: '243',
        date: '3/26',
        status: 'default',
        group: 'trp_NA',
        info: '《案243》' + '<br>' + `
            20多歲女性，曾至美國就學，返國前已出現流鼻水、鼻塞、喪失味覺等症狀，進行居家檢疫時通報，經採檢後確診。
            `
    }, {
        no: '244',
        case: '244',
        date: '3/26',
        status: 'default',
        group: 'trp_OC',
        info: '《案244》' + '<br>' + `
            30多歲男性，曾至紐西蘭旅遊，返國前已出現發燒、全身倦怠、頭痛、流鼻水等症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '245',
        case: '245',
        date: '3/26',
        status: 'default',
        group: 'trp_EU',
        info: '《案245》' + '<br>' + `
            20多歲女性，曾至英國就學，返國後進行居家檢疫，出現咳嗽、發燒、呼吸急促等症狀，通報採檢後確診。
            `
    }, {
        no: '246',
        case: '246',
        date: '3/26',
        status: 'case_s1',
        group: 'trp_NA',
        info: '《案246》' + '<br>' + `
            60多歲男性，近期無出國旅遊史，為案209同住家人，居家隔離時未出現症狀，經採檢後確診。
            `
    }, {
        no: '247',
        case: '247',
        date: '3/26',
        status: 'case_s1',
        group: 'trp_EU',
        info: '《案247》' + '<br>' + `
            40多歲女性，近期無出國旅遊史，為案228同住家人，居家隔離時出現發燒、全身倦怠、咳嗽等症狀，通報採檢後確診。
            `
    }, {
        no: '248',
        case: '248',
        date: '3/26',
        status: 'default',
        group: 'trp_EU',
        info: '《案248》' + '<br>' + `
            20多歲男性，曾與案170、189同團至西班牙旅遊，居家隔離時未出現症狀，經採檢後確診。
            `
    }, {
        no: '249',
        case: '249',
        date: '3/26',
        status: 'default',
        group: 'trp_A',
        info: '《案249》' + '<br>' + `
            60多歲男性，曾至馬來西亞、菲律賓工作，返國後出現倦怠、咳嗽、發燒、肺炎等症狀，自行就醫後，經通報採檢確診。
            `
    }, {
        no: '250',
        case: '250',
        date: '3/26',
        status: 'default',
        group: 'trp_EU',
        info: '《案250》' + '<br>' + `
            30多歲女性，曾至摩納哥工作，返國前已出現體溫偏高、喪失嗅覺等症狀，居家檢疫時通報，經採檢後確診。
            `
    }, {
        no: '251',
        case: '251',
        date: '3/26',
        status: 'default',
        group: 'trp_m',
        info: '《案251》' + '<br>' + `
            60多歲男性，曾至澳洲、墨西哥旅遊，返國後居家隔離，出現喉嚨痛、發燒等症狀，經通報採檢後確診。 
            `
    }, {
        no: '252',
        case: '252',
        date: '3/26',
        status: 'default',
        group: 'trp_EU',
        info: '《案252》' + '<br>' + `
            20多歲男性，曾至英國就學，返國前已出現咳嗽、流鼻水、喉嚨痛等症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '253',
        case: '253',
        date: '3/27',
        status: 'default',
        group: 'trp_NA',
        info: '《案253》' + '<br>' + `
            50多歲女性，曾至美國就學，返國前已出現發燒、腹瀉、胸痛等症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '254',
        case: '254',
        date: '3/27',
        status: 'default',
        group: 'trp_NA',
        info: '《案254》' + '<br>' + `
            20多歲男性，曾至美國就學，為案218友人，返國前已出現咳嗽、頭痛、胸悶等症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '255',
        case: '255',
        date: '3/27',
        status: 'default',
        group: 'trp_NA',
        info: '《案255》' + '<br>' + `
            30多歲男性，曾至美國探親，返國前已出現發燒、咳嗽有痰、全身痠痛等症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '256',
        case: '256',
        date: '3/27',
        status: 'default',
        group: 'trp_NA',
        info: '《案256》' + '<br>' + `
            30多歲男性，曾至美國工作，返國後進行自主健康管理，出現喉嚨癢症狀，經通報後採檢確診。
            `
    }, {
        no: '257',
        case: '257',
        date: '3/27',
        status: 'default',
        group: 'trp_EU',
        info: '《案257》' + '<br>' + `
            20多歲男性，曾至英國就學，與案258同校，返國前已出現流鼻水、喉嚨痛、咳嗽等症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '258',
        case: '258',
        date: '3/27',
        status: 'default',
        group: 'trp_EU',
        info: '《案258》' + '<br>' + `
            20多歲女性，曾至英國就學，與案257同校，返國後進行居家檢疫，出現咳嗽、喉嚨痛等症狀，經通報採檢後確診。
            `
    }, {
        no: '259',
        case: '259',
        date: '3/27',
        status: 'default',
        group: 'trp_NA',
        info: '《案259》' + '<br>' + `
            60多歲女性，曾至美國、中南美洲旅遊與探親，返國時出現發燒及喉嚨痛症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '260',
        case: '260',
        date: '3/27',
        status: 'default',
        group: 'trp_NA',
        info: '《案260》' + '<br>' + `
            40多歲男性，曾至美國工作，返國前已出現咽喉不適、輕度頭痛、咳嗽等症狀，進行居家檢疫時通報採檢確診。
            `
    }, {
        no: '261',
        case: '261',
        date: '3/27',
        status: 'default',
        group: 'trp_A',
        info: '《案261》' + '<br>' + `
            60多歲女性，曾至菲律賓工作，返國後進行居家檢疫時，出現微燒、喉嚨有痰等症狀，經通報採檢確診。
            `
    }, {
        no: '262',
        case: '262',
        date: '3/27',
        status: 'default',
        group: 'trp_EU',
        info: '《案262》' + '<br>' + `
            30多歲男性，曾至英國就學，返國前已出現喉嚨痛及癢、鼻塞等症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '263',
        case: '263',
        date: '3/27',
        status: 'default',
        group: 'trp_OC',
        info: '《案263》' + '<br>' + `
            30多歲男性，曾至澳洲工作，返國前已出現發燒、咳嗽、腹瀉等症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '264',
        case: '264',
        date: '3/27',
        status: 'default',
        group: 'trp_EU',
        info: '《案264》' + '<br>' + `
            50多歲女性，曾至英國工作，與案267同行，返國前已出現喉嚨癢、咳嗽等症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '265',
        case: '265',
        date: '3/27',
        status: 'default',
        group: 'trp_NA',
        info: '《案265》' + '<br>' + `
            10多歲女性，曾至美國就學，返國前已出現發燒症狀，返國後進行居家檢疫，經通報採檢後確診。
            `
    }, {
        no: '266',
        case: '266',
        date: '3/27',
        status: 'default',
        group: 'trp_EU',
        info: '《案266》' + '<br>' + `
            30多歲男性，曾至英國工作，返國後進行居家檢疫，出現發燒、全身倦怠等症狀，經通報採檢後確診。
            `
    }, {
        no: '267',
        case: '267',
        date: '3/27',
        status: 'default',
        group: 'trp_EU',
        info: '《案267》' + '<br>' + `
            50多歲男性，曾至英國工作，與案264同行，返國前已出現咳嗽、流鼻水等症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '268',
        case: '268',
        date: '3/28',
        status: 'case_s1',
        group: 'non',
        info: '《案268》' + '<br>' + `
            50多歲男性，2月28日就出現咳嗽、喉嚨痛、頭痛、發燒、呼吸喘、腹瀉等症狀，期間兩度自行就醫，也曾因病情加重轉往醫院急診。3月26日採檢後確診，感染源待釐清。
            `
    }, {
        no: '269',
        case: '269',
        date: '3/28',
        status: 'case_s1',
        group: 'trp_A',
        info: '《案269》' + '<br>' + `
            30多歲男性，近期無出國史，因出現肌肉痠痛、腹瀉、發燒症狀而自行就醫，經過追查是遭到菲律賓回國的案277傳染。
            `
    }, {
        no: '270',
        case: '270',
        date: '3/28',
        status: 'default',
        group: 'trp_EU',
        info: '《案270》' + '<br>' + `
            20多歲女性，在英國就學，出現咳嗽有痰、流鼻水症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '271',
        case: '271',
        date: '3/28',
        status: 'default',
        group: 'trp_EU',
        info: '《案271》' + '<br>' + `
            20多歲女性，在英國就學，出現全身無力、咳嗽、喉嚨乾、失去味覺及嗅覺、流鼻水等症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '272',
        case: '272',
        date: '3/28',
        status: 'default',
        group: 'trp_EU',
        info: '《案272》' + '<br>' + `
            20多歲男性，在英國就學，與案152、222至225等5人同校，出現發燒、咳嗽、失去嗅覺、倦怠、鼻塞、骨頭肌肉痠痛、喉嚨痛症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '273',
        case: '273',
        date: '3/28',
        status: 'default',
        group: 'trp_EU',
        info: '《案273》' + '<br>' + `
            60多歲女性，曾到西班牙旅遊，返國後進行居家檢疫，期間出現失去嗅覺、輕微咳嗽症狀，經通報採檢後確診。
            `
    }, {
        no: '274',
        case: '274',
        date: '3/28',
        status: 'default',
        group: 'trp_EU',
        info: '《案274》' + '<br>' + `
            30多歲男性，在國外工作，曾到倫敦與瑞士，返國後進行居家檢疫，期間出現喉嚨癢／痛、咳嗽、失去味覺及嗅覺等症狀，經通報採檢後確診。
            `
    }, {
        no: '275',
        case: '275',
        date: '3/28',
        status: 'default',
        group: 'trp_OC',
        info: '《案275》' + '<br>' + `
            40多歲女性，在澳洲工作，返國後出現流鼻水、失去嗅覺、輕微咳嗽等症狀，自行就醫採檢後確診。
            `
    }, {
        no: '276',
        case: '276',
        date: '3/28',
        status: 'default',
        group: 'trp_EU',
        info: '《案276》' + '<br>' + `
            10多歲女性，在西班牙就學，與案58、64、80、213同校，返國居家檢疫期間出現鼻塞、流鼻水、失去嗅覺等症狀，經通報採檢後確診。
            `
    }, {
        no: '277',
        case: '277',
        date: '3/28',
        status: 'default',
        group: 'trp_A',
        info: '《案277》' + '<br>' + `
            20多歲男性，在菲律賓工作，返國後進行居家檢疫，出現喉嚨痛、發燒等症狀，經通報採檢後確診。
            `
    }, {
        no: '278',
        case: '278',
        date: '3/28',
        status: 'default',
        group: 'trp_EU',
        info: '《案278》' + '<br>' + `
            50多歲男性，在捷克工作，返國居家檢疫期間出現咳嗽、喉嚨痛等症狀，經通報採檢後確診。
            `
    }, {
        no: '279',
        case: '279',
        date: '3/28',
        status: 'default',
        group: 'trp_NA',
        info: '《案279》' + '<br>' + `
            10多歲女性，在美國就學，返國居家檢疫期間出現咳嗽、發燒等症狀，經通報採檢後確診。
            `
    }, {
        no: '280',
        case: '280',
        date: '3/28',
        status: 'default',
        group: 'trp_NA',
        info: '《案280》' + '<br>' + `
            20多歲男性，在加拿大就學，出現流鼻水、咳嗽有痰、鼻塞等症狀，入境時於機場被通報，經採檢後確診。
    
            `
    }, {
        no: '281',
        case: '281',
        date: '3/28',
        status: 'default',
        group: 'trp_NA',
        info: '《案281》' + '<br>' + `
            10多歲女性，在美國就學，出現發燒、有痰症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '282',
        case: '282',
        date: '3/28',
        status: 'default',
        group: 'trp_EU',
        info: '《案282》' + '<br>' + `
            20多女性，在愛爾蘭就學，出現發燒、鼻塞、咳嗽、失去味覺等症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '283',
        case: '283',
        date: '3/28',
        status: 'default',
        group: 'trp_NA',
        info: '《案283》' + '<br>' + `
            20多歲女性，在美國工作，返國居家檢疫期間出現失去嗅覺與味覺等症狀，經通報採檢後確診。
            `
    }, {
        no: '284',
        case: '284',
        date: '3/29',
        status: 'default',
        group: 'trp_A',
        info: '《案284》' + '<br>' + `
            20多歲男性，曾在菲律賓工作，返國後進行居家防疫，期間出現小腿肌肉痠痛、發燒、喉嚨痛、咳嗽有痰等症狀，經通報採檢後確診。
            `
    }, {
        no: '285',
        case: '285',
        date: '3/29',
        status: 'default',
        group: 'trp_NA',
        info: '《案285》' + '<br>' + `
            30多歲男性，曾到美國工作，返國後出現腹瀉、肌肉痠痛、咳嗽等症狀，自行就醫採檢後確診。
            `
    }, {
        no: '286',
        case: '286',
        date: '3/29',
        status: 'default',
        group: 'trp_A',
        info: '《案286》' + '<br>' + `
            30多歲女性，曾跟團到土耳其旅遊，返國居家檢疫期間出現發燒、咳嗽、全身倦怠無力等症狀，經通報採檢後確診。
            `
    }, {
        no: '287',
        case: '287',
        date: '3/29',
        status: 'default',
        group: 'trp_EU',
        info: '《案287》' + '<br>' + `
            30多歲男性，在英國就學，期間出現發燒、疲倦等症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '288',
        case: '288',
        date: '3/29',
        status: 'default',
        group: 'trp_AF',
        info: '《案288》' + '<br>' + `
            20多歲男性，曾到摩洛哥旅遊，與案250同旅行團，返國居家檢疫期間出現咳嗽、發燒等症狀，經通報採檢後確診。
            `
    }, {
        no: '289',
        case: '289',
        date: '3/29',
        status: 'case_s1',
        group: 'trp_EU',
        info: '《案289》' + '<br>' + `
            40多歲女性，先生是3月16日從西班牙回國的案293，3月22日出現發燒、鼻炎症狀，自行就醫採檢後確診。
            `
    }, {
        no: '290',
        case: '290',
        date: '3/29',
        status: 'default',
        group: 'trp_A',
        info: '《案290》' + '<br>' + `
            50多歲女性，曾到印尼旅遊，返國後出現無嗅覺症狀，自行就醫採檢後確診，與案291為家庭群聚。
            `
    }, {
        no: '291',
        case: '291',
        date: '3/29',
        status: 'default',
        group: 'trp_A',
        info: '《案291》' + '<br>' + `
            60多歲男性，曾到印尼旅遊，返國後出現咳嗽、肌肉痠痛、關節痛、全身倦怠等症狀，自行就醫採檢後確診，與案290為家庭群聚。
            `
    }, {
        no: '292',
        case: '292',
        date: '3/29',
        status: 'default',
        group: 'trp_NA',
        info: '《案292》' + '<br>' + `
            10多歲女性，在美國工作，返國居家檢疫期間出現咳嗽、頭痛、冒冷汗、發燒等症狀，經通報採檢後確診。
    
            `
    }, {
        no: '293',
        case: '293',
        date: '3/29',
        status: 'default',
        group: 'trp_EU',
        info: '《案293》' + '<br>' + `
            40多歲男性，案289的先生，曾跟團到葡萄牙、西班牙旅遊，居家檢疫期間出現咳嗽症狀，經通報採檢後確診。
            `
    }, {
        no: '294',
        case: '294',
        date: '3/29',
        status: 'default',
        group: 'trp_EU',
        info: '《案294》' + '<br>' + `
            20多歲女性，在瑞士工作，返國居家檢疫期間出現喉嚨痛、鼻塞等症狀，經通報採檢後確診。
            `
    }, {
        no: '295',
        case: '295',
        date: '3/29',
        status: 'default',
        group: 'trp_EU',
        info: '《案295》' + '<br>' + `
            60多歲男性，曾到英國旅遊，返國後進行居家檢疫出現咳嗽、喉嚨痛、發燒等症狀，經通報採檢後確診。
    
            `
    }, {
        no: '296',
        case: '296',
        date: '3/29',
        status: 'default',
        group: 'trp_EU',
        info: '《案296》' + '<br>' + `
            20多歲女性，在歐洲就學，曾去過西班牙、突尼西亞、法國，出現發燒、咳嗽、喉嚨痛、腹痛、嘔吐等症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '297',
        case: '297',
        date: '3/29',
        status: 'default',
        group: 'trp_EU',
        info: '《案297》' + '<br>' + `
            10多歲男性，在法國就學，期間出現發燒、咳嗽、喉嚨痛、全身倦怠、肌肉痠痛、流鼻水、鼻塞、頭痛等症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '298',
        case: '298',
        date: '3/29',
        status: 'default',
        group: 'trp_EU',
        info: '《案298》' + '<br>' + `
            30多歲男性，在法國工作，期間出現發燒、全身倦怠、頭痛、結膜充血、流鼻水、鼻塞、胸痛、肌肉痠痛、腹瀉、嗅味覺喪失等症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '299',
        case: '299',
        date: '3/30',
        status: 'case_s1',
        group: 'trp_A',
        info: '《案299》' + '<br>' + `
            未滿10歲男性，為案269本土病例同住家人，3月26日出現發燒症狀，27日由衛生單位安排接觸者採檢確診，為一起家庭群聚。
            `
    }, {
        no: '300',
        case: '300',
        date: '3/30',
        status: 'default',
        group: 'trp_EU',
        info: '《案300》' + '<br>' + `
            20多歲女性，與案257、258就讀英國同一所學校，返國前曾與案258密切接觸。3月22日入境時無不適症狀，25日居家隔離期間發病，由衛生單位安排採檢確診。
            `
    }, {
        no: '301',
        case: '301',
        date: '3/30',
        status: 'default',
        group: 'trp_NA',
        info: '《案301》' + '<br>' + `
            30多歲男性，2月20日-3月2日至美國旅遊，返國後出現咳嗽症狀至診所就醫，並診斷為感冒，因症狀未改善又二度就醫，後續出現發燒、頭痛、氣喘症狀，再到醫院就醫並收治住院，經檢驗通報後確診。
            `
    }, {
        no: '302',
        case: '302',
        date: '3/30',
        status: 'default',
        group: 'trp_EU',
        info: '《案302》' + '<br>' + `
            20多歲男性，與案152、案222至225、案272等六人就讀英國同一所學校，也曾一同聚餐，自3月16日返國至今無疑似症狀，經衛生單位進行接觸者採檢後確診。
            `
    }, {
        no: '303',
        case: '303',
        date: '3/30',
        status: 'default',
        group: 'trp_NA',
        info: '《案303》' + '<br>' + `
            50多歲男性，3月7日-3月19日與案182一同至美國自助旅遊，返國後於3月20日出現發燒、嗅覺遲鈍症狀，經衛生單位安排採檢後確診，為一起旅遊群聚。
            `
    }, {
        no: '304',
        case: '304',
        date: '3/30',
        status: 'default',
        group: 'trp_NA',
        info: '《案304》' + '<br>' + `
            40多歲女性，3月7日-3月19日與案182一同至美國自助旅遊，3月26日出現流鼻水、微燒、失去嗅覺及味覺，經衛生單位安排採檢後確診，為一起旅遊群聚。
            `
    }, {
        no: '305',
        case: '305',
        date: '3/30',
        status: 'default',
        group: 'trp_A',
        info: '《案305》' + '<br>' + `
            70多歲女性，2月8日-3月14日赴菲律賓探親，期間曾與案164密切接觸，返國後於3月24日出現喉嚨乾症狀，經採檢後確診。
            `
    }, {
        no: '306',
        case: '306',
        date: '3/30',
        status: 'default',
        group: 'trp_AF',
        info: '《案306》' + '<br>' + `
            30多歲男性，3月11日-3月19日跟團到埃及旅遊，返台居家檢疫期間出現咳嗽、腹瀉、喉嚨痛症狀，經採檢後確診。
            `
    }, {
        no: '307',
        case: '307',
        date: '3/31',
        status: 'case_s1',
        group: 'trp_A',
        info: '《案307》' + '<br>' + `
            70多歲男性，近期無出國史，曾與案122（土耳其境外移入）聚餐，3月25日因胸悶、肌肉痠痛等症狀就醫，之後又因發燒分別至診所及醫院就醫，因診斷有肺炎情形收治住院，並採檢通報後確診。
            `
    }, {
        no: '308',
        case: '308',
        date: '3/31',
        status: 'default',
        group: 'trp_A',
        info: '《案308》' + '<br>' + `
            40多歲男性，3月1日-3月20日曾赴泰國、菲律賓工作，返台居家檢疫期間出現胸悶、肌肉痠痛、咳嗽症狀，由衛生單位安排採檢確診。
            `
    }, {
        no: '309',
        case: '309',
        date: '3/31',
        status: 'default',
        group: 'trp_EU',
        info: '《案309》' + '<br>' + `
            30多歲女性，長住英國工作，於當地就出現鼻塞、喉嚨不適、頭痛症狀，返台時於機場主動通報採檢確診。
            `
    }, {
        no: '310',
        case: '310',
        date: '3/31',
        status: 'default',
        group: 'trp_EU',
        info: '《案310》' + '<br>' + `
            20多歲女性，長期於英國就學，去年底曾至芬蘭、冰島旅遊，在英國時就有發燒、流鼻涕、咳嗽症狀，返台時於機場主動通報採檢確診。
            `
    }, {
        no: '311',
        case: '311',
        date: '3/31',
        status: 'default',
        group: 'trp_EU',
        info: '《案311》' + '<br>' + `
            30多歲女性，3月1日-3月28日到英國、冰島自助旅遊，於當地出現流鼻水、鼻塞、失去嗅覺症狀，返台時於機場主動通報採檢確診。
            `
    }, {
        no: '312',
        case: '312',
        date: '3/31',
        status: 'default',
        group: 'trp_EU',
        info: '《案312》' + '<br>' + `
            30多歲女性，去年底赴英國工作，於當地出現失去嗅覺、味覺異常、輕微咳嗽、有痰症狀，返台時於機場主動通報採檢確診。
            `
    }, {
        no: '313',
        case: '313',
        date: '3/31',
        status: 'default',
        group: 'trp_EU',
        info: '《案313》' + '<br>' + `
            40多歲女性，長住英國工作，於當地出現倦怠、失去味覺及嗅覺症狀，28日返台時於機場主動通報採檢確診。
            `
    }, {
        no: '314',
        case: '314',
        date: '3/31',
        status: 'default',
        group: 'trp_NA',
        info: '《案314》' + '<br>' + `
            20多歲男性，1月初到美國就學，於當地就出現咳嗽、喉嚨痛、發燒症狀，居家檢疫期間由衛生單位安排採檢確診。
            `
    }, {
        no: '315',
        case: '315',
        date: '3/31',
        status: 'default',
        group: 'trp_EU',
        info: '《案315》' + '<br>' + `
            20多歲女性，與案257、案258、案300就讀英國同一所學校，返國前曾與案258、案300接觸。入境時無不適症狀，25日開始咳嗽、失去嗅覺，由衛生單位安排採檢確診。
            `
    }, {
        no: '316',
        case: '316',
        date: '3/31',
        status: 'default',
        group: 'trp_NA',
        info: '《案316》' + '<br>' + `
            20多歲男性，2月初赴美國工作，3月16日返台後自主健康管理，28日出現流鼻水、頭痛、全身無力症狀，就醫後採檢確診。
            `
    }, {
        no: '317',
        case: '317',
        date: '3/31',
        status: 'default',
        group: 'trp_NA',
        info: '《案317》' + '<br>' + `
            60多歲男性，於台美兩地往返居住，3月18日返台後自主健康管理，26日出現咳嗽、有痰症狀，就醫後採檢確診。
            `
    }, {
        no: '318',
        case: '318',
        date: '3/31',
        status: 'default',
        group: 'trp_EU',
        info: '《案318》' + '<br>' + `
            20多歲男性，長期於法國就學，3月17日入境因與案112搭乘同班機返國，因此列為接觸者，3月27日出現發燒、喉嚨痛症狀，由衛生單位安排就醫採檢確診。
            `
    }, {
        no: '319',
        case: '319',
        date: '3/31',
        status: 'default',
        group: 'trp_EU',
        info: '《案319》' + '<br>' + `
            30多歲男性，長期在英國工作，於當地就有咳嗽、呼吸道症狀，返台時於機場主動通報採檢確診。
            `
    }, {
        no: '320',
        case: '320',
        date: '3/31',
        status: 'default',
        group: 'trp_EU',
        info: '《案320》' + '<br>' + `
            30多歲女性，2月底赴英國就學，於當地出現咳嗽、流鼻水、喉嚨痛症狀，返台時於機場主動通報採檢確診。
            `
    }, {
        no: '321',
        case: '321',
        date: '3/31',
        status: 'default',
        group: 'trp_EU',
        info: '《案321》' + '<br>' + `
            20多歲男性，2月9日至3月20日至瑞士工作，返國迄今雖無任何不適症狀，但由於同行者中已有1人（案294）確診，為求慎重，經衛生單位安排案至醫院採檢確診。
            `
    }, {
        no: '322',
        case: '322',
        date: '3/31',
        status: 'default',
        group: 'trp_EU',
        info: '《案322》' + '<br>' + `
            20多歲男性，2月9日至3月20日至瑞士工作，返國迄今雖無任何不適症狀，但由於同行者中已有1人（案294）確診，為求慎重，經衛生單位安排案至醫院採檢確診。
            `
    }, {
        no: '323',
        case: '323',
        date: '4/1',
        status: 'default',
        group: 'trp_EU',
        info: '《案323》' + '<br>' + `
            20多歲男性，1月初赴英國就學，3月19日返台居家檢疫期間，出現喉嚨痛、癢症狀，經安排就醫後確診。
            `
    }, {
        no: '324',
        case: '324',
        date: '4/1',
        status: 'default',
        group: 'trp_NA',
        info: '《案324》' + '<br>' + `
            20多歲女性，去年赴美國就學，3月25日返台居家檢疫期間，出現流鼻水、鼻塞及嗅覺不靈敏症狀，經安排就醫後確診。
            `
    }, {
        no: '325',
        case: '325',
        date: '4/1',
        status: 'default',
        group: 'trp_NA',
        info: '《案325》' + '<br>' + `
            20多歲女性，2月6日-3月30日與案329、另1名友人，一起至美國自助旅遊，於當地就出現嗅覺喪失情形，返國入境時主動聲明有症狀，由機場檢疫人員採檢通報確診。
            `
    }, {
        no: '326',
        case: '326',
        date: '4/1',
        status: 'default',
        group: 'trp_NA',
        info: '《案326》' + '<br>' + `
            30多歲女性，1月初赴美國就學，返台前便開始發燒，入境時主動通報經採檢確診。
            `
    }, {
        no: '327',
        case: '327',
        date: '4/1',
        status: 'default',
        group: 'trp_NA',
        info: '《案327》' + '<br>' + `
            30多歲男性，去年就前往美國工作，於當地出現喉嚨痛、鼻塞、肌肉痠痛、發燒症狀，返國入境時主動聲明有症狀，由機場檢疫人員採檢通報確診。
            `
    }, {
        no: '328',
        case: '328',
        date: '4/1',
        status: 'default',
        group: 'trp_NA',
        info: '《案328》' + '<br>' + `
            70多歲男性，去年底前往美國探親，於當地便開始發燒，3月30日返台入境時，在機場主動通報經採檢確診。
            `
    }, {
        no: '329',
        case: '329',
        date: '4/1',
        status: 'default',
        group: 'trp_NA',
        info: '《案329》' + '<br>' + `
            20多歲女性，2月6日-3月30日與案325、另1名友人，一起至美國自助旅遊，於當地就出現味覺及嗅覺喪失、有痰症狀，返國入境時主動聲明有症狀，由機場檢疫人員採檢通報確診。
            `
    }, {
        no: '330',
        case: '330',
        date: '4/2',
        status: 'default',
        group: 'trp_NA',
        info: '《案330》' + '<br>' + `
            20多歲男性，曾至美國工作，回國後進行居家檢疫，出現咳嗽、喉嚨痛、發燒等症狀，經通報採檢後確診。
            `
    }, {
        no: '331',
        case: '331',
        date: '4/2',
        status: 'default',
        group: 'trp_NA',
        info: '《案331》' + '<br>' + `
            60多歲男性，曾與案259同團至至秘魯、智利、阿根廷、玻利維亞、巴西等國旅遊，返國後進行居家隔離，出現全身倦怠、喉嚨乾等症狀，經採檢後確診。
            `
    }, {
        no: '332',
        case: '332',
        date: '4/2',
        status: 'default',
        group: 'trp_EU',
        info: '《案332》' + '<br>' + `
            10多歲男性，曾至英國就學，返國前已自覺有發燒、味覺喪失等症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '333',
        case: '333',
        date: '4/2',
        status: 'default',
        group: 'trp_EU',
        info: '《案333》' + '<br>' + `
            60多歲女性，曾與丈夫（案155）至丹麥探親，返國後進行居家隔離，出現喉嚨痛、發燒、肌肉痠痛等症狀，經採檢後確診。
            `
    }, {
        no: '334',
        case: '334',
        date: '4/2',
        status: 'default',
        group: 'trp_NA',
        info: '《案334》' + '<br>' + `
            30多歲女性，曾至加拿大就學，並前往美國旅遊，與案182、案303同團，返國後進行居家隔離，出現流鼻水、咳嗽等症狀，經採檢後確診。
            `
    }, {
        no: '335',
        case: '335',
        date: '4/2',
        status: 'case_s1',
        group: 'trp_A',
        info: '《案335》' + '<br>' + `
            50多歲男性，近期無出國史，曾與案291有接觸，出現腹瀉、發燒、肺炎症狀，自行就醫後，經通報採檢確診。
            `
    }, {
        no: '336',
        case: '336',
        date: '4/2',
        status: 'case_s1',
        group: 'non',
        info: '《案336》' + '<br>' + `
            50多歲女性，近期無出國史，出現發燒、全身倦怠、喉嚨痛、流鼻水等症狀，自行就醫後，經通報採檢確診。
            `
    }, {
        no: '337',
        case: '337',
        date: '4/2',
        status: 'default',
        group: 'trp_EU',
        info: '《案337》' + '<br>' + `
            10多歲男性，曾至英國就學，返國後進行居家檢疫，出現腹瀉、喉嚨痛、味覺及嗅覺喪失等症狀，經通報採檢後確診。
            `
    }, {
        no: '338',
        case: '338',
        date: '4/2',
        status: 'default',
        group: 'trp_EU',
        info: '《案338》' + '<br>' + `
            60多歲男性，曾至奧地利、捷克旅遊，與案61、案72、案104、案108等奧捷團旅客有接觸，返國後出現腹瀉、咳嗽等症狀，自行就醫後，經通報採檢確診。
            `
    }, {
        no: '339',
        case: '339',
        date: '4/2',
        status: 'default',
        group: 'trp_A',
        info: '《案339》' + '<br>' + `
            50多歲男性，曾至印尼工作，返國前已出現發燒、味覺嗅覺喪失等症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '340',
        case: '340',
        date: '4/3',
        status: 'default',
        group: 'trp_EU',
        info: '《案340》' + '<br>' + `
            20多歲男性，曾前往丹麥就學、並在英國旅遊，返國後進行居家檢疫，出現發燒、畏寒、頭暈等症狀，經通報採檢後確診。
            `
    }, {
        no: '341',
        case: '341',
        date: '4/3',
        status: 'default',
        group: 'trp_EU',
        info: '《案341》' + '<br>' + `
            60多歲女性，曾前往奧地利、捷克旅遊，與案61、72、104、108、338同團，與案338為夫妻，返國後進行居家隔離，出現腹瀉症狀，經通報採檢後確診。
            `
    }, {
        no: '342',
        case: '342',
        date: '4/3',
        status: 'default',
        group: 'trp_EU',
        info: '《案342》' + '<br>' + `
            30多歲女性，曾前往英國工作，返國後進行居家檢疫，出現咳嗽、流鼻水、發燒等症狀，經通報採檢後確診。
            `
    }, {
        no: '343',
        case: '343',
        date: '4/3',
        status: 'case_s1',
        group: 'trp_NA',
        info: '《案343》' + '<br>' + `
            60多歲女性，近期無出國史，但其夫3月17日自美國返台，個案出現咳嗽、流鼻水等症狀，曾多次自行就診，收治住院採檢後確診。
            `
    }, {
        no: '344',
        case: '344',
        date: '4/3',
        status: 'default',
        group: 'trp_NA',
        info: '《案344》' + '<br>' + `
            40多歲女性，曾前往美國旅遊，與案182、303、304、334同團，與案182為夫妻，返國後進行居家隔離，出現發燒症狀，經通報採檢後確診。
            `
    }, {
        no: '345',
        case: '345',
        date: '4/3',
        status: 'default',
        group: 'trp_A',
        info: '《案345》' + '<br>' + `
            30多歲男性，曾前往泰國工作，返國後進行居家檢疫，出現嗅覺喪失症狀，經通報採檢後確診。
            `
    }, {
        no: '346',
        case: '346',
        date: '4/3',
        status: 'default',
        group: 'trp_NA',
        info: '《案346》' + '<br>' + `
            20多歲女性，曾前往美國就學，返國後進行居家檢疫，出現頭痛、關節痛、腹瀉、咳嗽、味覺喪失等症狀，經通報採檢後確診。
            `
    }, {
        no: '347',
        case: '347',
        date: '4/3',
        status: 'case_s1',
        group: 'non',
        info: '《案347》' + '<br>' + `
            40多歲女性，近期無出國史，曾接觸案336，出現畏寒、發燒等症狀，自行就醫，經通報採檢後確診。
            `
    }, {
        no: '348',
        case: '348',
        date: '4/3',
        status: 'default',
        group: 'trp_NA',
        info: '《案348》' + '<br>' + `
            20多歲女性，曾前往美國就學，返國前已出現嗅覺喪失症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '349',
        case: '349',
        date: '4/4',
        status: 'default',
        group: 'trp_EU',
        info: '《案349》' + '<br>' + `
            20多歲男性，在瑞士就學，返國居家檢疫後出現喉嚨痛、嗅覺異常等症狀，經通報採檢後確診。
            `
    }, {
        no: '350',
        case: '350',
        date: '4/4',
        status: 'default',
        group: 'trp_NA',
        info: '《案350》' + '<br>' + `
            30多歲男性，於美國工作，是案197、202同班機接觸者，返國居家隔離後出現輕微腹瀉、輕微胸悶等症狀，經通報採檢後確診。
            `
    }, {
        no: '351',
        case: '351',
        date: '4/4',
        status: 'default',
        group: 'trp_EU',
        info: '《案351》' + '<br>' + `
            20多歲女性，於德國就學，返國居家檢疫後出現鼻塞、失去嗅覺等症狀，經通報採檢後確診。
            `
    }, {
        no: '352',
        case: '352',
        date: '4/4',
        status: 'case_s1',
        group: 'trp_NA',
        info: '《案352》' + '<br>' + `
            40多歲男性，3月30日出現發燒、味覺及嗅覺喪失等症狀，自行就醫採檢後確診。經追查發現和美國返台的案301曾一起喝飲料超過一小時，研判遭受感染。
            `
    }, {
        no: '353',
        case: '353',
        date: '4/4',
        status: 'default',
        group: 'trp_EU',
        info: '《案353》' + '<br>' + `
            30多歲女性，於英國工作，返國居家檢疫後出現流鼻水、頭痛、全身無力、倦怠、輕微發燒等症狀，經通報採檢後確診。
            `
    }, {
        no: '354',
        case: '354',
        date: '4/4',
        status: 'default',
        group: 'trp_NA',
        info: '《案354》' + '<br>' + `
            30多歲女性，長住美國工作，返國前出現腹瀉、全身倦怠、喉嚨痛、流鼻水、咳嗽、發燒、腹瀉等症狀，於機場通報後採檢確診。
            `
    }, {
        no: '355',
        case: '355',
        date: '4/4',
        status: 'default',
        group: 'trp_NA',
        info: '《案355》' + '<br>' + `
            60多歲女性，曾到秘魯、智利、阿根廷、玻利維亞、巴西等多國旅遊，是案259、331同團團員，居家隔離後確診，但毫無發病症狀。
            `
    }, {
        no: '356',
        case: '356',
        date: '4/5',
        status: 'default',
        group: 'trp_NA',
        info: '《案356》' + '<br>' + `
            60多歲男性，為案343本土個案丈夫，2月23日-3月17日至美國工作，返國至今無不適症狀，經衛生單位進行接觸者採檢後確診，研判為一起家庭群聚事件。
            `
    }, {
        no: '357',
        case: '357',
        date: '4/5',
        status: 'default',
        group: 'trp_AF',
        info: '《案357》' + '<br>' + `
            50多歲女性，3月10日-3月22日跟團赴摩洛哥旅遊，該旅遊團先前已有2人確診（案250、288），個案於3月25日出現發燒症狀，由衛生單位安排就醫後採檢確診。
            `
    }, {
        no: '358',
        case: '358',
        date: '4/5',
        status: 'default',
        group: 'trp_EU',
        info: '《案358》' + '<br>' + `
            40多歲男性，1月22日-4月2日赴英國探親，於當地出現喉嚨痛、發燒、咳嗽、有痰症狀，返台入境時於機場採檢確診。
            `
    }, {
        no: '359',
        case: '359',
        date: '4/5',
        status: 'default',
        group: 'trp_EU',
        info: '《案359》' + '<br>' + `
            60多歲男性，為奧捷旅遊團團員，返國後於3月16日-3月29日進行居家隔離，迄今均無症狀，但經X光檢查顯示肺部有輕微浸潤，因此為求慎重，衛生單位進行回溯採檢時確診。
            `
    }, {
        no: '360',
        case: '360',
        date: '4/5',
        status: 'default',
        group: 'trp_EU',
        info: '《案360》' + '<br>' + `
            60多歲女性，為奧捷旅遊團團員，返國後於3月16日-3月29日進行居家隔離，迄今均無症狀，但經X光檢查顯示肺部有輕微浸潤，因此為求慎重，衛生單位進行回溯採檢時確診。
            `
    }, {
        no: '361',
        case: '361',
        date: '4/5',
        status: 'default',
        group: 'trp_EU',
        info: '《案361》' + '<br>' + `
            30多歲女性，3月5日-3月23日赴美國探親，因返國時與案240搭乘同班機，因此列為接觸者，居家隔離期間於4月2日出現發燒、嗅覺遲鈍情形，由衛生單位安排就醫採檢確診。
            `
    }, {
        no: '362',
        case: '362',
        date: '4/5',
        status: 'default',
        group: 'trp_NA',
        info: '《案362》' + '<br>' + `
            50多歲男性，2月29日-3月16日赴美國工作，返台自主健康管理期間出現發燒、味覺及嗅覺異常，就醫採檢後確診。
            `
    }, {
        no: '363',
        case: '363',
        date: '4/5',
        status: 'default',
        group: 'trp_EU',
        info: '《案363》' + '<br>' + `
            40多歲女性，為奧捷旅遊團團員，返國後於3月16日-3月29日進行居家隔離，迄今均無症狀，但因該團有多位團員確診，衛生單位為求慎重進行回溯採檢時確診。
            `
    }, {
        no: '364',
        case: '364',
        date: '4/6',
        status: 'default',
        group: 'trp_NA',
        info: '《案364》' + '<br>' + `
            30多歲女性，於美國工作時出現咳嗽、呼吸不順、肌肉痠痛、發燒症狀，3月30日入境時主動向機場申報有症狀並採檢，檢驗結果為陰性。居家檢疫期間，因所搭乘班機上有旅客確診（案325、328、329），因此改列為接觸者，個案因持續有不適症狀，再度安排就醫採檢確診。
            `
    }, {
        no: '365',
        case: '365',
        date: '4/6',
        status: 'case_s1',
        group: 'trp_NA',
        info: '《案365》' + '<br>' + `
            4歲男性，為案343、案356同住家人，3月25日曾出現發燒症狀，4月2日案343檢驗陽性後，經衛生單位進行接觸者採檢確診。
            `
    }, {
        no: '366',
        case: '366',
        date: '4/6',
        status: 'default',
        group: 'trp_EU',
        info: '《案366》' + '<br>' + `
            30多歲女性，先前於英國就學，4月2日與同學校之案367一同返國，居家檢疫期間出現咳嗽、嗅覺喪失症狀，由衛生單位安排就醫採檢確診。
            `
    }, {
        no: '367',
        case: '367',
        date: '4/6',
        status: 'default',
        group: 'trp_EU',
        info: '《案367》' + '<br>' + `
            20多歲男性，先前於英國就學，4月2日與同學校之案366一同返國，居家檢疫期間出現咳嗽、全身倦怠、痠痛、腹瀉症狀，由衛生單位安排就醫採檢確診。
            `
    }, {
        no: '368',
        case: '368',
        date: '4/6',
        status: 'default',
        group: 'trp_EU',
        info: '《案368》' + '<br>' + `
            20多歲女性，曾至英國就學，返台前已出現喉嚨痛症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '369',
        case: '369',
        date: '4/6',
        status: 'default',
        group: 'trp_A',
        info: '《案369》' + '<br>' + `
            40多歲男性，曾至印尼工作，返國前已出現發燒症狀，入境時於機場被通報，經採檢後確診。
            `
    }, {
        no: '370',
        case: '370',
        date: '4/6',
        status: 'default',
        group: 'trp_NA',
        info: '《案370》' + '<br>' + `
            20多歲男性，與案371為家人，先前於美國就學及工作，3月30日入境後返家居家檢疫，因所搭乘班機上有旅客確診（案325、328、329），因此改列為居家隔離之接觸者。個案於4月4日嗅覺喪失，由衛生單位安排就醫採檢確診。
            `
    }, {
        no: '371',
        case: '371',
        date: '4/6',
        status: 'default',
        group: 'trp_NA',
        info: '《案371》' + '<br>' + `
            20多歲男性，與案370為家人，先前於美國就學，3月30日入境後返家居家檢疫，因所搭乘班機上有旅客確診（案325、328、329），因此改列為居家隔離之接觸者。個案於4月2日開始喉嚨痛、味覺喪失，由衛生單位安排就醫採檢確診。
            `
    }, {
        no: '372',
        case: '372',
        date: '4/6',
        status: 'default',
        group: 'trp_EU',
        info: '《案372》' + '<br>' + `
            30多歲男性，與案373為家人，兩人於3月6日-3月21日一同至英國、冰島自助旅遊，返國後進行居家檢疫期間，出現流鼻水、鼻塞、味覺及嗅覺異常症狀，由衛生單位安排就醫採檢確診。
            `
    }, {
        no: '373',
        case: '373',
        date: '4/6',
        status: 'default',
        group: 'trp_EU',
        info: '《案373》' + '<br>' + `
            30多歲女性，與案372為家人，兩人於3月6日-3月21日一同至英國、冰島自助旅遊，返國後進行居家檢疫期間，出現流鼻水、鼻塞、嗅覺喪失症狀，由衛生單位安排就醫採檢確診。
            `
    }, {
        no: '374',
        case: '374',
        date: '4/7',
        status: 'default',
        group: 'trp_EU',
        info: '《案374》' + '<br>' + `
            20多歲男性，先前於英國就學，3月29日入境後返家進行居家檢疫，4月4日起出現腹瀉、咳嗽、流鼻水、嗅覺遲鈍等症狀，主動通知衛生單位安排就醫採檢後確診。
            `
    }, {
        no: '375',
        case: '375',
        date: '4/7',
        status: 'default',
        group: 'trp_EU',
        info: '《案375》' + '<br>' + `
            20多歲女性，2月25日-3月27日至法國探親，期間曾至英國、荷蘭、比利時旅遊，返國後進行居家檢疫，陸續出現鼻塞、喉嚨不適、失去嗅覺、微喘、發燒、腹瀉等症狀，聯繫衛生單位後就醫採檢後確診。
            `
    }, {
        no: '376',
        case: '376',
        date: '4/7',
        status: 'default',
        group: 'trp_NA',
        info: '《案376》' + '<br>' + `
            30多歲女性，與案372為家人，兩人於3月6日-3月21日一同至英國、冰島自助旅遊，返國後進行居家檢疫期間，出現流鼻水、鼻塞、嗅覺喪失症狀，由衛生單位安排就醫採檢確診。
            `
    }, {
        no: '377',
        case: '377',
        date: '4/8',
        status: 'default',
        group: 'trp_EU',
        info: '《案377》' + '<br>' + `
            20多歲女性，先前於西班牙就學，3月22日入境後進行居家檢疫期間，出現喉嚨乾痛、腹瀉症狀等症狀，自行服藥，之後地方政府追蹤健康狀況時反應，由衛生單位安排就醫採檢確診。
            `
    }, {
        no: '378',
        case: '378',
        date: '4/8',
        status: 'default',
        group: 'trp_A',
        info: '《案378》' + '<br>' + `
            60多歲女性，2月16日-3月29日前往印尼探親，返國進行居家檢疫期間出現呼吸困難、咳嗽、發燒、全身倦怠症狀，就醫後經診斷有肺炎情形 ，收治住院後由醫院採檢通報確診。
            `
    }, {
        no: '379',
        case: '379',
        date: '4/8',
        status: 'case_s1',
        group: 'non',
        info: '《案379》' + '<br>' + `
            40多歲女性，近期無出國旅遊史，為案228同住家人，居家隔離時出現發燒、全身倦怠、咳嗽等症狀，通報採檢後確診。
            `
    }, {
        no: '380',
        case: '380',
        date: '4/9',
        status: 'case_s1',
        group: 'trp_EU',
        info: '《案380》' + '<br>' + `
            20多歲男性，為案322宿舍同寢室室友，無症狀，於居家隔離期間採檢確診。
            `
    }, {
        no: '381',
        case: '381',
        date: '4/10',
        status: 'default',
        group: 'trp_NA',
        info: '《案381》' + '<br>' + `
            20多歲女性，於美國就學，同班機旅客已有10人確診，因此由居家檢疫改列為居家隔離，期間出現流鼻水、鼻塞及嗅覺異常症狀，安排就醫採檢後確診。
            `
    }, {
        no: '382',
        case: '382',
        date: '4/10',
        status: 'default',
        group: 'trp_A',
        info: '《案382》' + '<br>' + `
            60多歲男性，為案378丈夫，曾一同至印尼探親，返國後進行居家檢疫，因妻子確診改列為接觸者居家隔離，無症狀，安排採檢後確診。
            `
    }, {
        no: '383',
        case: '383',
        date: '4/11',
        status: 'default',
        group: 'trp_NA',
        info: '《案383》' + '<br>' + `
            60多歲男性，長期於美國工作，3月31日出現胃部不適、食慾不佳並自覺發熱，曾於當地就醫，4月10日入境因主動申報有不適症狀，由機場採檢通報確診。
            `
    }, {
        no: '384',
        case: '384',
        date: '4/11',
        status: 'default',
        group: 'trp_NA',
        info: '《案384》' + '<br>' + `
            70多歲男性，長期旅居美國，於當地出現咳嗽、有痰症狀，4月10日入境因主動申報有不適症狀，由機場採檢通報確診。
            `
    }, {
        no: '385',
        case: '385',
        date: '4/11',
        status: 'default',
        group: 'trp_EU',
        info: '《案385》' + '<br>' + `
            20多歲女性，先前於法國就學，4月3日入境後進行居家檢疫期間，出現流鼻水、鼻塞、發燒症狀，後經由衛生單位安排就醫採檢確診。
            `
    }, {
        no: '386',
        case: '386',
        date: '4/12',
        status: 'case_s1',
        group: 'trp_NA',
        info: '《案386》' + '<br>' + `
            20多歲男性，與案195（自美國境外移入）之同住友人，有過敏症狀，於案195確診後列為接觸者，進行居家隔離，安排就醫採檢後確診。
            `
    }, {
        no: '387',
        case: '387',
        date: '4/12',
        status: 'default',
        group: 'trp_NA',
        info: '《案387》' + '<br>' + `
            40多歲男性，於2月20日前往美國工作，3月25日出現咳嗽、喉嚨痛等症狀，自行服藥並無就醫，4月10日返國時機場採檢確診。
            `
    }, {
        no: '388',
        case: '388',
        date: '4/12',
        status: 'default',
        group: 'trp_EU',
        info: '《案388》' + '<br>' + `
            為案358之妻子，於1月13日一同前往英國探親，4月2日抵台後，居家檢疫期間出現味覺及嗅覺喪失，於3日就醫採檢確診。
            `
    }, {
        no: '389',
        case: '389',
        date: '4/13',
        status: 'default',
        group: 'trp_NA',
        info: '《案389》' + '<br>' + `
            50多歲女性，曾搭乘珊瑚公主號郵輪旅遊，返國前已出現喉嚨癢、咳嗽有痰、腹瀉等症狀，入境時在機場被通報，經採檢後確診。
            `
    }, {
        no: '390',
        case: '390',
        date: '4/13',
        status: 'default',
        group: 'trp_NA',
        info: '《案390》' + '<br>' + `
            50多歲男性，曾搭乘珊瑚公主號郵輪旅遊，返國前已出現喉嚨癢症狀，入境時在機場被通報，經採檢後確診。
            `
    }, {
        no: '391',
        case: '391',
        date: '4/13',
        status: 'default',
        group: 'trp_NA',
        info: '《案391》' + '<br>' + `
            60多歲女性，曾搭乘珊瑚公主號郵輪旅遊，返國前已出現喉嚨癢、乾咳、腹瀉、肌肉痠痛等症狀，入境時在機場被通報，經採檢後確診。
            `
    }, {
        no: '392',
        case: '392',
        date: '4/13',
        status: 'default',
        group: 'trp_NA',
        info: '《案388》' + '<br>' + `
            60多歲男性，曾搭乘珊瑚公主號郵輪旅遊，返國前已出現咳嗽有痰、呼吸微喘、肌肉痠痛等症狀，入境時在機場被通報，經採檢後確診。
            `
    }, {
        no: '393',
        case: '393',
        date: '4/13',
        status: 'default',
        group: 'trp_NA',
        info: '《案393》' + '<br>' + `
            60多歲女性，長期居住美國，為384案的家人，返台前已出現咳嗽有痰、腹瀉症狀，入境時在機場被通報，經採檢後確診。
            `
    }, {
        no: '394',
        case: '394',
        date: '4/15',
        status: 'default',
        group: 'trp_NA',
        info: '《案394》' + '<br>' + `
            60多歲女性，於1月22日至美國探親，3月30日返國，4月6日、7日陸續出現全身痠痛、胃痛、嘔吐、胸悶及發燒症狀，分別於8日及10日由衛生單位安排採檢確診。
            `
    }, {
        no: '395',
        case: '395',
        date: '4/15',
        status: 'default',
        group: 'trp_NA',
        info: '《案395》' + '<br>' + `
            20多歲女性，於1月23日至美國就學，4月4日出現咳嗽、鼻塞、流鼻水及嗅覺喪失情形，4月13日返國入境時主動申報有前述症狀，由機場採檢通報確診。
            `
    }, {
        no: '396',
        case: '396',
        date: '4/18',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案396》' + '<br>' + `
            20多歲男性，在我國盤石軍艦實習與訓練，4月12日出現頭痛、嗅覺異常情形，4月15日下船後返家後二度就醫，由醫院採檢通報確診。
            `
    }, {
        no: '397',
        case: '397',
        date: '4/18',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案397》' + '<br>' + `
            20多歲男性，在我國盤石軍艦實習與訓練，4月初開始出現上呼吸道腫痛、頭痛、流鼻水、咳嗽、嗅覺異常等症狀，返家後於4月17日就醫並採檢通報確診。
            `
    }, {
        no: '398',
        case: '398',
        date: '4/18',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案398》' + '<br>' + `
            20多歲男性，在我國盤石軍艦實習與訓練，4月13日開始有嗅味覺異常，於4月17日自行前往醫院急診就醫後採檢通報確診。
            `
    }, {
        no: '399',
        case: '399',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案399》' + '<br>' + `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `
    }, {
        no: '400',
        case: '400',
        date: '4/19',
        status: 'default',
        group: 'trp_NA',
        info: '《案400》' + '<br>' + `
            20多歲男性，去年4月21日前往美國就學，今年4月10日發病，17日抵台時機場採檢確診。
            `
    }, {
        no: '401',
        case: '401',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案401》' + '<br>' + `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `
    }, {
        no: '402',
        case: '402',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案402》' + '<br>' + `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `
    }, {
        no: '403',
        case: '403',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案403》' + '<br>' + `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `
    }, {
        no: '404',
        case: '404',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案404》' + '<br>' + `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `
    }, {
        no: '405',
        case: '405',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案405》' + '<br>' + `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `
    }, {
        no: '406',
        case: '406',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案406》' + '<br>' + `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `
    }, {
        no: '407',
        case: '407',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案407》' + '<br>' + `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `
    }, {
        no: '408',
        case: '408',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案408》' + '<br>' + `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `
    }, {
        no: '409',
        case: '409',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案409》' + '<br>' + `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `
    }, {
        no: '410',
        case: '410',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案410》' + '<br>' + `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `
    }, {
        no: '411',
        case: '411',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案411》' + '<br>' + `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `
    }, {
        no: '412',
        case: '412',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案412》' + '<br>' + `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `
    }, {
        no: '413',
        case: '413',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案413》' + '<br>' + `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `
    }, {
        no: '414',
        case: '414',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案414》' + '<br>' + `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `
    }, {
        no: '415',
        case: '415',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案415》' + '<br>' + `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `
    }, {
        no: '416',
        case: '416',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案416》' + '<br>' + `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `
    }, {
        no: '417',
        case: '417',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案417》' + '<br>' + `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `
    }, {
        no: '418',
        case: '418',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案418》' + '<br>' + `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `
    }, {
        no: '419',
        case: '419',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案419》' + '<br>' + `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `
    }, {
        no: '420',
        case: '420',
        date: '4/19',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案420》' + '<br>' + `
            盤石軍艦實習生及軍人（19男2女），年齡介於20多歲-40多歲，發病日介於4月14日至18日，感染源待釐清，相關接觸者疫調中。
            `
    }, {
        no: '421',
        case: '421',
        date: '4/20',
        status: 'default',
        group: 'trp_NA',
        info: '《案421》' + '<br>' + `
            20多歲女性，曾赴加拿大就學，回國前已出現咳嗽有痰症狀，返國入境時在機場被通報，經採檢確診。
            `
    }, {
        no: '422',
        case: '422',
        date: '4/20',
        status: 'default',
        group: 'trp_m',
        info: '《案422》' + '<br>' + `
            20多歲女性，曾赴美國就學，並前往西班牙旅遊，返國前已出現呼吸困難、喉嚨痛及腹痛等症狀，曾於美國當地就醫，入境時在機場被通報，經採檢確診。
            `
    }, {
        no: '423',
        case: '423',
        date: '4/21',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案423》' + '<br>' + `
            20多歲男性，磐石軍艦實習生，3月30日出現嗅味覺異常，因與案396、案397同艙間，主動通報衛生單位後就醫，一採結果陰性，20日進行二採確診。
            `
    }, {
        no: '424',
        case: '424',
        date: '4/21',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案424》' + '<br>' + `
            30多歲女性，磐石軍艦軍人，4月5日出現頭暈、鼻塞、頭痛及嗅覺異常症狀，航行期間症狀改善，4月18日至集中檢疫所隔離採檢，因一採陰性，20日進行二採確診。
            `
    }, {
        no: '425',
        case: '425',
        date: '4/21',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案425》' + '<br>' + `
            20多歲男性，磐石軍艦軍人，3月23日出現流鼻水、發燒、頭痛症狀，4月18日至集中檢疫所隔離採檢，一採結果陰性，21日進行二採確診。
            `
    }, {
        no: '426',
        case: '426',
        date: '4/22',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案426》' + '<br>' + `
            20多歲男性，曾於磐石鑑實習，3月23日出現發燒、咳嗽、味覺喪失等症狀，4月18日至集中檢疫所隔離採檢，一採結果陰性，後續再出現鼻塞、嗅覺異常狀況，19日二採確診。
            `
    }, {
        no: '427',
        case: '427',
        date: '4/23',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案427》' + '<br>' + `
            20多歲男性，為敦睦艦隊（磐石艦）軍人。4月18日至集中檢疫所隔離採檢，一採結果陰性，4月19日起陸續出現喉嚨痛癢、咳嗽等症狀，21日再次採檢後確診。
            `
    }, {
        no: '428',
        case: '428',
        date: '4/24',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案428》' + '<br>' + `
            30多歲男性，為敦睦艦隊（磐石艦）軍人，4月18日至集中檢疫所隔離採檢，一採結果陰性，4月22日出現嗅覺異常、流鼻水、鼻塞等症狀，23日再次採檢後確診。
            `
    }, {
        no: '429',
        case: '429',
        date: '4/25',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案429》' + '<br>' + `
            20多歲男性，為敦睦艦隊磐石艦實習生，4月18日至集中檢疫所隔離採檢，一採結果陰性，因血中抗體陽性，24日進行二採確診。
            `
    }, {
        no: '430',
        case: '430',
        date: '5/2',
        status: 'default',
        group: 'trp_m',
        info: '《案430》' + '<br>' + `
            60多歲女性，自澳洲前往日本，期間出現現發燒、咳嗽、嘔吐症狀，返國入境時主動告知曾有症狀，經採檢後確診。
            `
    }, {
        no: '431',
        case: '431',
        date: '5/2',
        status: 'default',
        group: 'trp_EU',
        info: '《案431》' + '<br>' + `
            30多歲女性，與案432為夫婦，於至塞內加爾工作，期間陸續出現全身倦怠及咳嗽等症狀，由機場檢疫人員採檢通報後確診。
            `
    }, {
        no: '432',
        case: '432',
        date: '5/2',
        status: 'default',
        group: 'trp_EU',
        info: '《案432》' + '<br>' + `
            40多歲男性，與案431為夫婦，於至塞內加爾工作，期間陸續出現全身倦怠及咳嗽等症狀，由機場檢疫人員採檢通報後確診。
            `
    }, {
        no: '433',
        case: '433',
        date: '5/3',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案433》' + '<br>' + `
            為敦睦艦隊（磐石艦）人員，無症狀，隔離期滿後再次採檢為陽性，送醫治療。
            `
    }, {
        no: '434',
        case: '434',
        date: '5/3',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案434》' + '<br>' + `
            為敦睦艦隊（磐石艦）人員，無症狀，隔離期滿後再次採檢為陽性，送醫治療。
            `
    }, {
        no: '435',
        case: '435',
        date: '5/3',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案435》' + '<br>' + `
            為敦睦艦隊（磐石艦）人員，無症狀，隔離期滿後再次採檢為陽性，送醫治療。
            `
    }, {
        no: '436',
        case: '436',
        date: '5/3',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案436》' + '<br>' + `
            為敦睦艦隊（磐石艦）人員，無症狀，隔離期滿後再次採檢為陽性，送醫治療。
            `
    }, {
        no: '437',
        case: '437',
        date: '5/4',
        status: 'default',
        group: 'trp_NA',
        info: '《案437》' + '<br>' + `
            30多歲女性，1月30日至美國就學，4月9日入境時無症狀，居家檢疫期間因同班機旅客確診（案383）列為居家隔離對象。4月15日出現流鼻水症狀，認為是過敏而未通報，隔離期滿後主動聯繫衛生單位，表示有流鼻水、鼻塞症狀，由衛生單位安排就醫採檢確診。
            `
    }, {
        no: '438',
        case: '438',
        date: '5/4',
        status: 'case_s3',
        group: 'tw_flt',
        info: '《案438》' + '<br>' + `
            為敦睦艦隊（磐石艦）人員，無症狀，隔離期滿後初次採檢結果呈現弱陽性，隔日再次採檢後確診，個案無症狀。
            `
    }, {
        no: '439',
        case: '439',
        date: '5/6',
        status: 'default',
        group: 'trp_EU',
        info: '《案439》' + '<br>' + `
            30多歲女性，今年1月至英國工作，4月26日返國時因為有鼻塞、倦怠症狀，入境時主動申報，但篩檢結果為陰性。居家檢疫期間持續有流鼻水及鼻塞，且出現味覺異常症狀，由衛生單位協助安排就醫採檢確診。
            `
    }, {
        no: '440',
        case: '440',
        date: '5/7',
        status: 'default',
        group: 'trp_A',
        info: '《案440》' + '<br>' + `
            20多歲女性，今年2月下旬至卡達工作，曾於3月8日出現喉嚨痛、流鼻水與失去味覺等症狀，3月10日於卡達確診並接受治療，4月8日二採陰性後返回宿舍隔離，5月3日返國入境時無症狀，因主動告知，由機場檢疫人員採檢後送至集中檢疫所，並於5月4日檢驗陰性後，搭乘防疫專車返家居家檢疫，當日即出現腹瀉症狀，5月5日由衛生單位安排就醫採檢，於7日確診。
            `
    }, {
        no: '441',
        case: '441',
        date: '5/21',
        status: 'default',
        group: 'trp_NA',
        info: '《案441》' + '<br>' + `
            30多歲男性，今年1月下旬赴墨西哥工作，曾於4月30日-5月1日間出現發燒症狀，5月5日起出現輕微咳嗽，症狀持續至今，5月11日-13日有腹瀉情形，20日返國入境時主動告知有症狀，由機場檢疫人員採檢後確診。
            `
    }, {
        no: '442',
        case: '442',
        date: '5/29',
        status: 'default',
        group: 'trp_EU',
        info: '《案442》' + '<br>' + `
            20多歲男性，今年2月赴俄羅斯就學，個案於5月15日起出現喉嚨痛症狀，16日出現嗅覺喪失及全身倦怠等症狀，26日入境時主動通報，由機場檢疫人員採檢後送至集中檢疫所隔離，檢驗結果雖為陰性，但因個案曾有嗅覺異常情形，於28日進行二採後確診。
            `
    }, {
        no: '443',
        case: '443',
        date: '6/1',
        status: 'default',
        group: 'trp_NA',
        info: '《案443》' + '<br>' + `
            50多歲女性，今年3月至美國出差，個案5月18日出現發燒、流鼻水、咳嗽等症狀，21日出現嗅覺喪失情形，31日返國入境時主動通報，由機場檢疫人員安排採檢後確診。
            `
    }, {
        no: '444',
        case: '444',
        date: '6/15',
        status: 'default',
        group: 'trp_A',
        info: '《案444》' + '<br>' + `
            50多歲男性，與案445為夫婦，曾至孟加拉工作，在當地時已出現發燒、咳嗽、喉嚨痛等症狀，並確診住院治療，返國前已在5月28日及6月2日採檢陰性，後來搭機經由馬來西亞返國，入境時主動告知並送集中檢疫所隔離，採檢後確診。
            `
    }, {
        no: '445',
        case: '445',
        date: '6/15',
        status: 'default',
        group: 'trp_A',
        info: '《案445》' + '<br>' + `
            40多歲女性，與案445為夫婦，曾至孟加拉工作，在當地出現發燒症狀，後來確診住院治療，返國前於6月2日採檢陰性，後來搭機經由馬來西亞返國，入境時主動告知並送集中檢疫所隔離，採檢後確診。
            `
    }, {
        no: '446',
        case: '446',
        date: '6/18',
        status: 'default',
        group: 'trp_A',
        info: '《案446》' + '<br>' + `
            60多歲男性，今（2020）年1月下旬獨自前往孟加拉工作，6月12日自孟加拉搭機至馬來西亞，13日與案444、445等12名台商一同自馬來西亞搭乘專機返台（座位於案444、445前一排）。
            `
    }, {
        no: '447',
        case: '447',
        date: '6/18',
        status: 'default',
        group: 'trp_NA',
        info: '《案447》' + '<br>' + `
            60多歲男性，今（2020）年4月初赴瓜地馬拉從事商務活動，6月1日出現咳嗽、呼吸喘及骨頭酸等症狀，曾在當地就診檢驗兩次皆為陰性反應，6月23日呼吸喘的症狀加劇，6月24日返國入境時主動通報，由機場檢疫人員安排採檢後確診。
            `
    }, {
        no: '448',
        case: '448',
        date: '7/2',
        status: 'default',
        group: 'trp_NA',
        info: '《案448》' + '<br>' + `
            50多歲男性，今年2月初至墨西哥工作，6月17日-22日陸續出現頭痛、咳嗽、四肢無力及發燒症狀，曾於墨西哥當地多次就醫但未採檢經治療後於6月25日症狀緩解。個案7月1日返國入境時主動告知曾有不適症狀，由機場檢疫人員安排採檢後確診。
            `
    }, {
        no: '449',
        case: '449',
        date: '7/3',
        status: 'default',
        group: 'trp_AF',
        info: '《案449》' + '<br>' + `
            50多歲男性，因工作長期居住南非，於當地採驗新型冠狀病毒時為陰性，無症狀，但結果出爐同日下午出現發燒、全身無力及喉嚨有異物感等症狀，至當地醫院就醫評估為一般感冒。個案服藥後自覺症狀好轉，當日自南非搭機至杜拜轉機，7月1日晚間入境台灣時主動告知曾有不適症狀，由機場檢疫人員安排採檢後確診。
            `
    }, {
        no: '450',
        case: '450',
        date: '7/10',
        status: 'default',
        group: 'trp_NA',
        info: '《案450》' + '<br>' + `
            20多歲女性，於（109）年7月5日返國，入境時無不適症狀。7月7日居家檢疫期間出現全身倦怠及肌肉痠痛等症狀，7月8日由衛生單位安排就醫採檢確診。
            `
    }, {
        no: '451',
        case: '451',
        date: '7/10',
        status: 'default',
        group: 'trp_A',
        info: '《案451》' + '<br>' + `
            50多歲男性，長期於阿曼工（前次自台灣出境時間為108年11月），今年7月2日出現發燒症狀，僅自行服用退燒藥，未曾於國外就醫。個案於7月8日自阿曼經杜拜轉機返國，入境時主動告知有不適症狀，當日機場檢疫人員安排採檢後確診。
            `
    }, {
        no: '452',
        case: '452',
        date: '7/16',
        status: 'default',
        group: 'trp_A',
        info: '《案452》' + '<br>' + `
            30多歲女性，1月下旬至菲律賓工作，返國前曾接受公司安排之武漢肺炎採檢，檢驗結果為陰性，之後於7月14日下午出現嗅覺異常情形，同日晚間入境時主動告知有疑似症狀，由機場檢疫人員安排採檢後確診。
            `
    }, {
        no: '453',
        case: '453',
        date: '7/17',
        status: 'default',
        group: 'trp_A',
        info: '《案453》' + '<br>' + `
            20多歲女性，去年12月下旬至菲律賓工作，7月14日出現倦怠、喉嚨痛、咳嗽有痰及鼻塞等症狀，7月15日返國入境時主動告知有不適症狀，由機場檢疫人員安排採檢後確診。
            `
    }, {
        no: '454',
        case: '454',
        date: '7/17',
        status: 'default',
        group: 'trp_A',
        info: '《案454》' + '<br>' + `
            40多歲男性，1月下旬至菲律賓工作，於當地出現發燒、嗅覺異常及伴隨感冒症狀，7月15日返國入境時主動告知有相關症狀，由機場檢疫人員安排採檢後確診。
            `
    }, {
        no: '455',
        case: '455',
        date: '7/19',
        status: 'default',
        group: 'trp_A',
        info: '《案455》' + '<br>' + `
            40多歲男性，工作長期居住香港，7月15日開始出現乾咳、喉嚨痛症狀，未就醫，17日入境時主動告知有不適症狀，當日機場檢疫人員安排採檢後確診。
            `
    }, {
        no: '456',
        case: '456',
        date: '7/24',
        status: 'default',
        group: 'trp_A',
        info: '《案456》' + '<br>' + `
            曾至菲律賓工作，陸續出現咳嗽、倦怠症狀，於當地就醫。返台入境時有咳嗽、頭痛等症狀，在機場採檢後送集中檢疫。初次採檢雖結果為陰性但仍咳嗽劇烈，安排送醫後再次採檢確診。
            `
    }, {
        no: '457',
        case: '457',
        date: '7/24',
        status: 'default',
        group: 'trp_A',
        info: '《案457》' + '<br>' + `
            曾至菲律賓探親，返台後進行居家檢疫，出現頭痛、嗅味覺異常、發燒、頭痛等情形，經通報採檢後確診。
            `
    }, {
        no: '458',
        case: '458',
        date: '7/24',
        status: 'default',
        group: 'trp_A',
        info: '《案458》' + '<br>' + `
            曾至菲律賓工作，出現發燒、嗅味覺異常、腹瀉等症狀，自行服藥後症狀緩解，在當地採檢結果為陰性。返台入境時主動告知有症狀，經機場人員安排採檢並集中隔離後確診。
            `
    }, {
        no: '459',
        case: '459',
        date: '7/27',
        status: 'default',
        group: 'trp_AF',
        info: '《案459》' + '<br>' + `
            12月至賴索托工作，今年7月19日出現頭痛症狀，21日出現流鼻水、鼻塞、嗅覺異常及咳嗽等症狀，因當地醫療資源缺乏，僅自行服藥未就醫。個案7月23日自南非搭機至杜拜轉機，7月25日返國入境時因症狀持續，主動通報機場檢疫人員安排檢驗後確診。
            `
    }, {
        no: '460',
        case: '460',
        date: '7/27',
        status: 'default',
        group: 'trp_AF',
        info: '《案460》' + '<br>' + `
            案460、461為一對母子，長期居住南非（前次自台灣出境時間為今年1月），案460於7月21日起陸續出現流鼻水、喉嚨癢及鼻塞症狀，兩人7月25日經杜拜轉機返國入境時，主動告知有症狀，由機場檢疫人員安排採檢後確診。
            `
    }, {
        no: '461',
        case: '461',
        date: '7/27',
        status: 'default',
        group: 'trp_A',
        info: '《案461》' + '<br>' + `
            案460、461為一對母子，長期居住南非（前次自台灣出境時間為今年1月），案461於7月22日起陸續出現流鼻水、咳嗽等症狀，兩人7月25日經杜拜轉機返國入境時，主動告知有症狀，由機場檢疫人員安排採檢後確診。
            `
    }, {
        no: '462',
        case: '462',
        date: '7/27',
        status: 'default',
        group: 'trp_NA',
        info: '《案462》' + '<br>' + `
            案462今年2月獨自至美國探親，7月20日返國入境時無症狀，搭乘防疫計程車返家居家檢疫，7月24日出現味覺異常及全身無力症狀，26日因呼吸急促、喉嚨及關節痛，聯絡衛生單位安排就醫，經X光檢查診斷有肺炎情形，由醫院採檢通報後確診。
            `
    }, {
        no: '463',
        case: '463',
        date: '7/28',
        status: 'default',
        group: 'trp_A',
        info: '《案463》' + '<br>' + `
            50多歲男性，今年3月至菲律賓工作，7月21日起陸續出現發燒、咳嗽、嗅覺異常、腹瀉及全身倦怠等症狀，24日於當地就醫並採檢，但未接獲檢驗報告。26日返國入境時因體溫偏高，由機場檢疫人員安排採檢後確診。
            `
    }, {
        no: '464',
        case: '464',
        date: '7/28',
        status: 'default',
        group: 'trp_A',
        info: '《案464》' + '<br>' + `
            30多歲男性，今年1月至香港工作，7月16日曾出現發冷、盜汗症狀，經自行服藥後症狀緩解，23日出現有痰、嗅味覺異常等症狀，26日返國入境時主動告知有症狀，由機場檢疫人員安排採檢後確診。
            `
    }, {
        no: '465',
        case: '465',
        date: '7/28',
        status: 'default',
        group: 'trp_A',
        info: '《案465》' + '<br>' + `
            30多歲男性，今年1月至菲律賓工作，6月19日陸續出現嗅味覺異常、咳嗽、喉嚨痛及肌肉酸痛等症狀，當日前往就醫並於醫院進行快篩，結果為陰性。26日返國入境時主動告知曾有症狀，由機場檢疫人員安排採檢後確診。
            `
    }, {
        no: '466',
        case: '466',
        date: '7/28',
        status: 'default',
        group: 'trp_A',
        info: '《案466》' + '<br>' + `
            70多歲男性，與案467為夫妻，於今年1月陸續前往菲律賓探親，7月26日入境時無不適症狀，但經機場檢疫人員安排採檢後確診。
            `
    }, {
        no: '467',
        case: '467',
        date: '7/28',
        status: 'default',
        group: 'trp_A',
        info: '《案467》' + '<br>' + `
            70多歲女性，與案466為夫妻，於7月12日出現發燒、咳嗽及走路喘等症狀，經自行服藥後症狀緩解，26日入境主動告知曾有症狀，由機場檢疫人員安排採檢後確診。
            `
    }, {
        no: '468',
        case: '468',
        date: '8/1',
        status: 'default',
        group: 'trp_NA',
        info: '《案468》' + '<br>' + `
            為來台執行公務之瓜地馬拉籍，有三日內採檢陰性證明，7月26日入境後有輕微喉嚨痛於檢疫旅館進行居家檢疫，30日因喉嚨痛症狀明顯，由衛生單位安排就醫採檢後確診。
            `
    }, {
        no: '469',
        case: '469',
        date: '8/1',
        status: 'non',
        group: 'trp_EU',
        info: '《案469》' + '<br>' + `
            為比利時籍20多歲男性，感染源待釐清。5月3日入境來台工作，7月29日因欲出境返國，至醫院自費採檢後確診。
            `
    }, {
        no: '470',
        case: '470',
        date: '8/1',
        status: 'default',
        group: 'trp_A',
        info: '《案470》' + '<br>' + `
            為菲律賓籍船員，7月18日由菲律賓飛至香港，並進行COVID-19檢驗，20日於航程中接獲香港通知檢驗陽性後，即隔離於艙房，30日靠港後由救護車送醫採檢送驗後確診。
            `
    }, {
        no: '471',
        case: '471',
        date: '8/1',
        status: 'default',
        group: 'trp_A',
        info: '《案471》' + '<br>' + `
            為本國籍，1月8日出境至菲律賓經商，因有慢性疾病安排返台就醫，7月10日出現咳嗽、腹瀉，28日入境時機場採檢陰性，因症狀持續且有慢性疾病，至醫院負壓隔離病房治療，經醫院採檢2次後確診。
            `
    }, {
        no: '472',
        case: '472',
        date: '8/1',
        status: 'default',
        group: 'trp_A',
        info: '《案472》' + '<br>' + `
            為本國籍，2月22日出境至菲律賓出差，7月28日出現全身倦怠、腹瀉及咳嗽等症狀，30日入境後採檢送驗後確診。
            `
    }, {
        no: '473',
        case: '473',
        date: '8/1',
        status: 'default',
        group: 'trp_A',
        info: '《案473》' + '<br>' + `
            為來台工作之菲律賓籍，7月15日與案453同班機入境，後於集中檢疫所進行居家隔離，27日出現腹瀉症狀，29日通報採檢後確診。
    
            `
    }, {
        no: '474',
        case: '474',
        date: '8/1',
        status: 'default',
        group: 'trp_A',
        info: '《案474》' + '<br>' + `
            為本國籍，5月29日出境至菲律賓工作，7月24日入境進行居家檢疫，29日出現發燒、四肢無力、頭痛、鼻塞等症狀，由衛生單位安排採檢送驗後確診。
    
            `
    }, {
        no: '475',
        case: '475',
        date: '8/2',
        status: 'default',
        group: 'trp_A',
        info: '《案475》' + '<br>' + `
            20多歲女性，該個案於7月31日自菲律賓來台探親，入境時無相關症狀，由家人開車送至防疫旅館進行居家檢疫，8月1日出現輕微發燒，經機場採檢後確診。
    
            `
    }, {
        no: '476',
        case: '476',
        date: '8/4',
        status: 'default',
        group: 'trp_A',
        info: '《案476》' + '<br>' + `
            50多歲女性，長期居住菲律賓，於7月30日開始發燒，未於菲律賓當地就醫，8月2日返國時填報有發燒症狀，入境量測體溫略（37.7度）且有咳嗽、喉嚨有痰及肌肉痠痛等症狀，於機場接受採檢後送至集中檢疫所，經檢驗於後確診。
    
            `
    }, {
        no: '477',
        case: '477',
        date: '8/6',
        status: 'default',
        group: 'trp_AF',
        info: '《案477》' + '<br>' + `
            60多歲男性，長期於南非工作，與案460、案461一同自南非搭車前往機場，7月25日抵台，入境時無症狀，至防疫旅館進行居家檢疫，因案460、461確診改列為居家隔離對象。8月3日出現腹瀉、肌肉痠痛及全身倦怠等症狀，由衛生單位安排就醫採檢確診。
    
            `
    }, {
        no: '478',
        case: '478',
        date: '8/8',
        status: 'default',
        group: 'trp_A',
        info: '《案478》' + '<br>' + `
            與案479皆長期於菲律賓工作，於7月23日出現發燒、全身痠痛及流鼻水等症狀，兩人皆曾自行服藥後症狀緩解，未曾於國外就醫。兩人於8月6日一同自菲律賓搭機返台，入境時均主動告知曾有疑似症狀，於機場採檢後確診。
    
            `
    }, {
        no: '479',
        case: '479',
        date: '8/8',
        status: 'default',
        group: 'trp_A',
        info: '《案479》' + '<br>' + `
            與案478皆長期於菲律賓工作，於7月23日出現發燒、全身痠痛及流鼻水等症狀，兩人皆曾自行服藥後症狀緩解，未曾於國外就醫。兩人於8月6日一同自菲律賓搭機返台，入境時均主動告知曾有疑似症狀，於機場採檢後確診。
    
            `
    }, {
        no: '480',
        case: '480',
        date: '8/9',
        status: 'default',
        group: 'trp_A',
        info: '《案480》' + '<br>' + `
            於7月30日出現咳嗽、流鼻水等症狀，自行服用成藥，未於菲律賓當地就醫，8月4日出現嗅覺異常，7日恢復正常，搭機時全程配戴口罩及隔離衣，未取下口罩用餐飲水，入境時主動通報曾有症狀，於機場接受採檢後確診。
    
            `
    }, {
        no: '481',
        case: '481',
        date: '8/12',
        status: 'default',
        group: 'trp_A',
        info: '《案481》' + '<br>' + `
            自菲律賓返國，於7月26日至28日間出現腹瀉症狀，自行服用成藥後症狀緩解，7月底曾出現畏寒情形，8月8日起再次出現畏寒，未於當地就醫。個案入境時主動通報曾有症狀，於機場接受採檢後送至集中檢疫所，於12日確診。
    
            `
    }, {
        no: '482',
        case: '482',
        date: '8/15',
        status: 'default',
        group: 'trp_A',
        info: '《案482》' + '<br>' + `
            自菲律賓返國，於8月10日出現嗅覺喪失、肌肉痠痛及流鼻水等症狀，曾自行服藥後症狀緩解，未曾於國外就醫，入境時主動告知曾有疑似症狀，於機場採檢後確診。
            `
    }, {
        no: '483',
        case: '483',
        date: '8/16',
        status: 'default',
        group: 'trp_O',
        info: '《案483》' + '<br>' + `
            於今（2020）年2月至澳洲工作，8月6日起陸續出現流鼻水、鼻塞及咳嗽等症狀，8月14日自澳洲返台，入境時主動告知曾有疑似症狀，由機場檢疫人員安排採檢後送至集中檢疫所後確診。
    
            `
    }, {
        no: '484',
        case: '484',
        date: '8/16',
        status: 'default',
        group: 'trp_A',
        info: '《案484》' + '<br>' + `
            於今（2020）年2月至菲律賓工作，8月8日出現咳嗽，8月12日發燒、頭痛及咳嗽加劇並味覺喪失，曾自行服藥未就醫，8月13日出現腹瀉，8月14日自菲律賓返台，於入境時主動告知曾有疑似症狀，機場採檢後送至集中檢疫所隔離，當晚出現發燒、呼吸喘症狀，由衛生局協助安排送醫收治住院後確診。
    
            `
    }, {
        no: '485',
        case: '485',
        date: '8/17',
        status: 'default',
        group: 'trp_A',
        info: '《案485》' + '<br>' + `
            為10多歲本國籍少年，長期居住美國，今（2020）年8月5日獨自返台探親，入境台灣迄今無疑似症狀，8月15日經地方衛生單位採檢後確診。
    
            `
    }, {
        no: '486',
        case: '486',
        date: '8/18',
        status: 'default',
        group: 'trp_A',
        info: '《案486》' + '<br>' + `
            為60多歲本國籍男性，長期於菲律賓工作，與妻子於8月2日出現發燒症狀，經當地採檢結果為陰性，後兩人於8月12日返台，入境時無症狀，於機場採檢結果為陰性。於8月14日及15日反覆出現發燒情形，15日由檢疫所安排採檢後確診。
    
            `
    }, {
        no: '487',
        case: '487',
        date: '8/22',
        status: 'default',
        group: 'trp_NA',
        info: '《案487》' + '<br>' + `
            為20多歲本國籍女性，7月15日出現嘔吐、腹瀉症狀，8月1日個案出現頭痛、喉嚨痛、呼吸時胸痛等情形，8月9日因症狀加劇再次就醫，經診斷疑似新型冠狀病毒感染。個案經公司安排於8月19日返國，入境時主動通報曾有症狀，由機場安排採檢後確診。
    
            `
    }, {
        no: '488',
        case: '488',
        date: '8/29',
        status: 'default',
        group: 'trp_A',
        info: '《案488》' + '<br>' + `
            40多歲本國籍男性，8月20日曾出現喉嚨痛症狀，未在菲律賓當地就醫，8月27日返國入境時在機場完成採檢後確診。
    
            `
    }, {
        no: '489',
        case: '489',
        date: '9/2',
        status: 'default',
        group: 'trp_A',
        info: '《案489》' + '<br>' + `
            40多歲印尼籍男性船員，入境後直接前往防疫旅館進行14日居家檢疫，8月31日由公司安排專車送至醫院自費採檢，於9月2日確診。
    
            `
    }, {
        no: '490',
        case: '490',
        date: '9/4',
        status: 'default',
        group: 'trp_A',
        info: '《案490》' + '<br>' + `
            40多歲女性，在日本工作期間，曾於8月25日出現流鼻水症狀，9月1日返國入境時無症狀，因主動聲明曾有不適症狀，由機場安排採檢後確診。
    
            `
    }, {
        no: '491',
        case: '491',
        date: '9/5',
        status: 'default',
        group: 'trp_A',
        info: '《案491》' + '<br>' + `
            案491為移工，9月3日自菲律賓來台工作，入境時無症狀，於機場完成採檢後確診。
    
            `
    }, {
        no: '492',
        case: '492',
        date: '9/5',
        status: 'default',
        group: 'trp_A',
        info: '《案492》' + '<br>' + `
            案492於今（2020）年6月至印尼工作，8月15日至22日間陸續出現打噴嚏、流鼻水、發燒及嗅味覺異常等症狀，9月4日自印尼返國入境時主動告知有症狀，由機場安排採檢後確診。
    
            `
    }, {
        no: '493',
        case: '493',
        date: '9/6',
        status: 'default',
        group: 'trp_A',
        info: '《案493》' + '<br>' + `
            40多歲本國籍男性，長期居住於菲律賓經商，個案於9月1日在菲律賓當地出現發燒、喉嚨痛、咳嗽、呼吸急促、胸悶及肌肉痠痛等症狀，未自行服藥也未就醫，9月3日登機前主動告知航空公司身體不適，經醫師評估再次採檢後確診。
    
            `
    }, {
        no: '494',
        case: '494',
        date: '9/7',
        status: 'default',
        group: 'trp_A',
        info: '《案494》' + '<br>' + `
            20多歲本國籍男性，9月3日自尼泊爾與友人返國入境時無症狀，9月5日出現發燒、流鼻水、頭痛、肌肉痠痛及腹瀉等症狀，經通報衛生單位後安排就醫及採檢後確診。
    
            `
    }, {
        no: '495',
        case: '495',
        date: '9/8',
        status: 'default',
        group: 'trp_EU',
        info: '《案495》' + '<br>' + `
            20多歲本國籍女性，於8月30日出現頭痛、肌肉痠痛等症狀，曾於法國當地就醫並診斷為流感，經服藥後症狀改善。9月6日返國入境時，因流鼻水症狀，主動向機場檢疫人員通報，經安排採檢後確診。
    
            `
    }, {
        no: '496',
        case: '496',
        date: '9/10',
        status: 'default',
        group: 'trp_A',
        info: '《案496》' + '<br>' + `
            本國籍60多歲男性，今（2020）年2月至印尼工作，與案492搭乘同班機。9月4日入境時無不適症狀，9月7日晚間出現發燒及流鼻水情形，8日通報衛生單位協助安排就醫，經採檢後確診。
    
            `
    }, {
        no: '497',
        case: '497',
        date: '9/11',
        status: 'default',
        group: 'trp_A',
        info: '《案497》' + '<br>' + `
            30多歲女性，與家人於8月29日自菲律賓經香港轉機來台探親，8月30日入境台灣時無症狀，9月10日因需緊急生產，待產前再次採檢後確診。
    
            `
    }, {
        no: '498',
        case: '498',
        date: '9/11',
        status: 'default',
        group: 'trp_A',
        info: '《案498》' + '<br>' + `
            本國籍60多歲男性，今（2020）年1月至菲律賓工作，7月14日出現發燒、乾咳及背痛症狀，於菲律賓當地就醫及採檢結果為陽性，8月8日出院迄今無不適症狀，9月9日自菲律賓返國，入境時採檢後確診。
    
            `
    }, {
        no: '499',
        case: '499',
        date: '9/14',
        status: 'default',
        group: 'trp_A',
        info: '《案499》' + '<br>' + `
            菲律賓籍20多歲女性，因工作於9月10日自菲律賓來台，入境時無症狀，由機場檢疫人員安排採檢後確診。
    
            `
    }, {
        no: '500',
        case: '500',
        date: '9/16',
        status: 'default',
        group: 'trp_A',
        info: '《案500》' + '<br>' + `
            菲律賓籍30多歲女性，因工作於今（2020）年9月13日抵達台灣，入境時無症狀，由機場檢疫人員安排採檢後確診。
    
            `
    }, {
        no: '501',
        case: '501',
        date: '9/17',
        status: 'default',
        group: 'trp_A',
        info: '《案501》' + '<br>' + `
            本國籍40多歲女性，今（2020）年2月至緬甸工作，9月13日返國入境時無症狀，個案自述在當地曾與確診個案同桌用餐超過2小時，故由機場檢疫人員安排採檢後確診。
    
            `
    }, {
        no: '502',
        case: '502',
        date: '9/17',
        status: 'default',
        group: 'trp_EU',
        info: '《案502》' + '<br>' + `
            本國籍20多歲女性，去（2019）年2月至英國工作，9月6日入境時無不適症狀，入境後前往防疫旅館居家檢疫，個案9月10日曾有輕微喉嚨痛，15日出現腹瀉、腹痛、喉嚨痛、流鼻水及鼻塞等症狀，經通報衛生單位後安排就醫及採檢後確診。
    
            `
    }, {
        no: '503',
        case: '503',
        date: '9/17',
        status: 'default',
        group: 'trp_A',
        info: '《案503》' + '<br>' + `
            本國籍30多歲男性，今（2020）年3月至菲律賓工作，9月10日陸續出現鼻塞、流鼻水、喉嚨乾癢、咳嗽、嗅覺變差及胸悶等症狀，僅自行服用成藥，未在當地就醫，9月13日與案500搭乘同班機（非案500座位前後二排旅客）返國，入境時主動告知有症狀，初次採檢結果為陰性，因個案症狀持續，16日由檢疫所安排就醫採檢後確診。
    
            `
    }, {
        no: '504',
        case: '504',
        date: '9/19',
        status: 'default',
        group: 'trp_A',
        info: '《案504》' + '<br>' + `
            菲律賓籍20多歲男性，因工作於今（2020）年9月17日來台，入境時無症狀，於機場完成採檢後前往集中檢疫所檢疫，9月18日出現喉嚨有痰情形，於19日確診。
    
            `
    }, {
        no: '505',
        case: '505',
        date: '9/19',
        status: 'default',
        group: 'trp_A',
        info: '《案505》' + '<br>' + `
            本國籍30多歲男性，今年2月至緬甸經商，9月17日返國，入境時無不適症狀，且主動告知在緬甸當地曾與確診個案一起用餐，由機場檢疫人員安排採檢後確診。
    
            `
    }, {
        no: '506',
        case: '506',
        date: '9/19',
        status: 'default',
        group: 'trp_A',
        info: '《案506》' + '<br>' + `
            本國籍50多歲女性，長期旅居日本，今年8月28日至30日出現喉嚨痛症狀，9月11日返台奔喪，入境時因有咳嗽症狀，於機場進行採檢，檢驗結果為陰性；9月18日個案已無症狀，因申請外出奔喪，由衛生單位安排自費採檢後確診。
    
            `
    }, {
        no: '507',
        case: '507',
        date: '9/20',
        status: 'default',
        group: 'trp_A',
        info: '《案507》' + '<br>' + `
            菲律賓籍30多歲女性，9月18日入境時無症狀，由機場檢疫人員安排採檢後確診。
    
            `
    }, {
        no: '508',
        case: '508',
        date: '9/21',
        status: 'default',
        group: 'trp_A',
        info: '《案508》' + '<br>' + `
            20多歲男性，今（2020）年6月至印尼工作，9月17日出現發燒、嗅覺異常症狀，未在當地就醫，9月19日返國入境時有發燒情形，並主動告知有症狀，由機場檢疫人員安排採檢後確診。
    
            `
    }, {
        no: '509',
        case: '509',
        date: '9/21',
        status: 'default',
        group: 'trp_A',
        info: '《案509》' + '<br>' + `
            30多歲男性，去（2019）年4月赴緬甸經商，與案505同班機前一排座位旅客，今年9月17日入境時無症狀，入境後前往防疫旅館進行居家檢疫。9月17日晚間出現咳嗽症狀，18日因咳嗽、發燒及味覺異常主動聯繫衛生單位安排就醫採檢，於今日確診。
    
            `
    }, {
        no: '510',
        case: '510',
        date: '9/25',
        status: 'default',
        group: 'trp_A',
        info: '《案510》' + '<br>' + `
            菲律賓籍30多歲男性，入境時無症狀，於機場採檢結果為陰性，個案9月21日、22日曾出現腹瀉情形，因自認吃壞肚子故未通報，9月24日集中檢疫期滿前進行採檢，因檢出武漢肺炎陽性於今（26）日確診。
    
            `
    }, {
        no: '511',
        case: '511',
        date: '9/28',
        status: 'default',
        group: 'trp_A',
        info: '《案511》' + '<br>' + `
            菲律賓籍20多歲男性，因工作於9月11日自菲律賓搭機來台，機場檢驗結果為陰性，入境迄今無疑似症狀，集中檢疫期滿再次採檢，於今（28）日確診。
    
            `
    }, {
        no: '512',
        case: '512',
        date: '9/28',
        status: 'default',
        group: 'trp_A',
        info: '《案512》' + '<br>' + `
            菲律賓籍40多歲男性，因工作於9月23日自菲律賓搭機來台，入境迄今無疑似症狀，由於機場採檢結果為弱陽性，於9月26日再次採檢，並於今（28）日確診。
    
            `
    }, {
        no: '513',
        case: '513',
        date: '9/28',
        status: 'default',
        group: 'trp_A',
        info: '《案513》' + '<br>' + `
            本國籍40多歲男性，7月下旬前往印尼工作，9月19日因出現倦怠、腹瀉、腹痛症狀，於當地就醫並診斷為胃潰瘍；個案9月26日獨自搭機返台，入境時主動告知曾有症狀，由機場檢疫人員安排採檢，於今（28）日確診。
    
            `
    }, {
        no: '514',
        case: '514',
        date: '9/30',
        status: 'default',
        group: 'trp_EU',
        info: '《案514》' + '<br>' + `
            50多歲法國籍男性製造業技師，持有登機前3日內檢驗陰性報告，入境迄今無疑似症狀，於今（2020）年9月11日入境後，直接前往防疫旅館進行居家檢疫，居家檢疫期滿後至9月26日於飯店進行自主健康管理，9月28日由公司安排自費檢驗後確診。
    
            `
    }, {
        no: '515',
        case: '515',
        date: '10/1',
        status: 'default',
        group: 'trp_A',
        info: '《案515》' + '<br>' + `
            本國籍40多歲男性，與家人長期居住印尼，9月29日登機前無不適症狀，個案因途中出現喉嚨痛及輕微咳嗽症狀，且其父親9月25日於當地確診，故入境時主動告知檢疫人員，採檢後確診。
    
            `
    }, {
        no: '516',
        case: '516',
        date: '10/2',
        status: 'default',
        group: 'trp_NA',
        info: '《案516》' + '<br>' + `
            本國籍30多歲男性，長年於美國工作，9月20日返國探親，入境時無不適症狀，8月28日出現發燒、嗅覺消失及乾咳等症狀，9月24日至30日出現乾咳症狀，由衛生單位協助安排送醫採檢後確診。
    
            `
    }, {
        no: '517',
        case: '517',
        date: '10/2',
        status: 'default',
        group: 'trp_A',
        info: '《案517》' + '<br>' + `
            本國籍40多歲男性，於今年1月赴日本工作，9月15日至22日間陸續出現輕微腹瀉、肌肉痠痛、鼻塞、發燒、咳嗽及嗅覺異常等症狀，9月30日返國入境時主動告知有症狀，由機場安排採檢後確診。
    
            `
    }, {
        no: '518',
        case: '518',
        date: '10/5',
        status: 'default',
        group: 'trp_A',
        info: '《案518》' + '<br>' + `
            本國籍30多歲女性，曾於6月19日至27日間陸續出現發燒、嗅覺喪失、腹瀉等症狀，於當地就醫及檢出武漢肺炎陽性，並於7月下旬進行兩次採檢，結果皆為陰性。9月18日自菲律賓返台，入境迄今無不適症狀，因擔心自身健康，前往醫院自費採檢，因檢出弱陽性（Ct值33）。
    
            `
    }, {
        no: '519',
        case: '519',
        date: '10/6',
        status: 'default',
        group: 'trp_NA',
        info: '《案519》' + '<br>' + `
            30多歲男性，長期在美國工作，約2至3個月返台一次，在美國期間無不適症狀，10月4日返台，入境時主動告知搭機時出現喉嚨癢症狀，由機場檢疫人員協助採檢後確診。
    
            `
    }, {
        no: '520',
        case: '520',
        date: '10/6',
        status: 'default',
        group: 'trp_EU',
        info: '《案520》' + '<br>' + `
            20多歲女性，9月中旬前往法國處理私人事務，9月27日至30日陸續出現發燒、頭痛、流鼻水、鼻塞及嗅覺異常症狀，未於法國當地就醫；10月4日返國，入境時主動告知檢疫人員有流鼻水、鼻塞症狀，於機場進行採檢後確診。
    
            `
    }, {
        no: '521',
        case: '521',
        date: '10/6',
        status: 'default',
        group: 'trp_NA',
        info: '《案521》' + '<br>' + `
            30多歲男性，長期於美國工作，今年10月3日起陸續出現腹瀉、喉嚨腫情形，10月4日返台，入境時主動告知檢疫人員有腹瀉情形，於機場進行採檢後確診。
    
            `
    }, {
        no: '522',
        case: '522',
        date: '10/7',
        status: 'default',
        group: 'trp_EU',
        info: '《案522》' + '<br>' + `
            本國籍20多歲女性，於2019年10月前往愛爾蘭工作，今（2020）年10月4日入境時無疑似症狀，直接返家進行居家檢疫，10月5日出現發燒及全身肌肉痠痛等不適症狀，經衛生單位安排就醫採檢後確診。
    
            `
    }, {
        no: '523',
        case: '523',
        date: '10/7',
        status: 'default',
        group: 'trp_A',
        info: '《案523》' + '<br>' + `
            印度籍30多歲男性，因工作來台，持有登機前3日內檢驗陰性報告，入境迄今無疑似症狀，9月9日入境後前往防疫旅館進行居家檢疫（9月9日至9月23日），9月24日至30日於飯店進行自主健康管理，10月5日因工作需求自費檢驗，於今（7）日確診。
    
            `
    }, {
        no: '524',
        case: '524',
        date: '10/8',
        status: 'default',
        group: 'trp_A',
        info: '《案524》' + '<br>' + `
            菲律賓籍50多歲男性船員，個案入境迄今均無症狀，9月15日入境後進行集中檢疫至9月29日，9月30日檢疫期滿後搭乘專車至飯店，10月5日由公司安排至醫院自費採檢，因檢驗結果呈現弱陽性，10月6日再次採檢，並於今（8）日確診。
    
            `
    }, {
        no: '525',
        case: '525',
        date: '10/9',
        status: 'default',
        group: 'trp_A',
        info: '《案525》' + '<br>' + `
            菲律賓籍20多歲男性，9月24日自菲律賓首次搭機來台，入境時無症狀，10月7日集中檢疫期滿前進行採檢後確診。
    
            `
    }, {
        no: '526',
        case: '526',
        date: '10/9',
        status: 'default',
        group: 'trp_A',
        info: '《案526》' + '<br>' + `
            菲律賓籍30多歲女性，9月24日自菲律賓入境，入境時無症狀，10月7日集中檢疫期滿前採檢為弱陽性，10月8日再次採檢後確診。
    
            `
    }, {
        no: '527',
        case: '527',
        date: '10/9',
        status: 'default',
        group: 'trp_EU',
        info: '《案527》' + '<br>' + `
            烏克蘭籍30多歲男性，因工作於9月22日自烏克蘭入境，於10月7日居家檢疫期滿解除後，由公司安排自費採檢後確診。
    
            `
    }, {
        no: '528',
        case: '528',
        date: '10/12',
        status: 'default',
        group: 'trp_EU',
        info: '《案528》' + '<br>' + `
            本國籍20多歲女性，今（2020）年1月至法國留學，10月4日與1名友人一同返國，入境時無症狀，兩人一同返家進行居家檢疫。個案10月7日起出現流鼻水、喉嚨癢等症狀，10月9日由衛生單位安排就醫採檢後確診。
    
            `
    }, {
        no: '529',
        case: '529',
        date: '10/12',
        status: 'default',
        group: 'trp_A',
        info: '《案529》' + '<br>' + `
            本國籍20多歲女性，期於杜拜及其他國家工作，9月30日回國休假，入境時無症狀，居家檢疫期間，於10月10日出現味覺異常症狀，由衛生單位安排就醫採檢後確診。
    
            `
    }, {
        no: '530',
        case: '530',
        date: '10/13',
        status: 'default',
        group: 'trp_A',
        info: '《案530》' + '<br>' + `
            病例移除。
    
            `
        // 本國籍40多歲男性，今（2020）年2月至中國江蘇工作，返台前於10月1日出現流鼻水及有痰等症狀，僅自行買藥服用，未在當地就醫，10月11日返台因入境時有咳嗽、流鼻水及鼻塞等症狀，於機場由衛生單位安排就醫採檢後確診。
    }, {
        no: '531',
        case: '531',
        date: '10/15',
        status: 'default',
        group: 'trp_A',
        info: '《案531》' + '<br>' + `
            菲律賓籍30多歲男性移工，搭機前3日內之檢驗、9月17日入境機場採檢以及10月1日集中檢疫期滿前採檢之結果皆為陰性，10月2日檢疫期滿後搭乘專車至旅館自主健康管理，10月12日由仲介安排專車至醫院自費採檢，因檢驗結果呈現弱陽性，個案同日收治住院隔離，為求慎重，10月13日再次採驗，並於15日確診。
    
            `
    }, {
        no: '532',
        case: '532',
        date: '10/16',
        status: 'default',
        group: 'trp_A',
        info: '《案532》' + '<br>' + `
            案532，與案533、534、535皆為印尼籍學生，介於10-20歲，個案入境迄今均無疑似症狀，9月30日入境後即由校方分別安排至國內4家防疫旅館居家檢疫，10月15日檢疫期滿由衛生單位安排就醫採檢，並於今（16）日確診。
    
            `
    }, {
        no: '533',
        case: '533',
        date: '10/16',
        status: 'default',
        group: 'trp_A',
        info: '《案533》' + '<br>' + `
            案533，與案532、534、535皆為印尼籍學生，介於10-20歲，個案入境迄今均無疑似症狀，9月30日入境後即由校方分別安排至國內4家防疫旅館居家檢疫，10月15日檢疫期滿由衛生單位安排就醫採檢，並於今（16）日確診。
    
            `
    }, {
        no: '534',
        case: '534',
        date: '10/16',
        status: 'default',
        group: 'trp_A',
        info: '《案534》' + '<br>' + `
            案534，與案532、533、535皆為印尼籍學生，介於10-20歲，個案入境迄今均無疑似症狀，9月30日入境後即由校方分別安排至國內4家防疫旅館居家檢疫，10月15日檢疫期滿由衛生單位安排就醫採檢，並於今（16）日確診。
    
            `
    }, {
        no: '535',
        case: '535',
        date: '10/16',
        status: 'default',
        group: 'trp_A',
        info: '《案535》' + '<br>' + `
            案535，與案532、533、534皆為印尼籍學生，介於10-20歲，個案入境迄今均無疑似症狀，9月30日入境後即由校方分別安排至國內4家防疫旅館居家檢疫，10月15日檢疫期滿由衛生單位安排就醫採檢，並於今（16）日確診。
    
            `
    }, {
        no: '536',
        case: '536',
        date: '10/19',
        status: 'default',
        group: 'trp_EU',
        info: '《案536》' + '<br>' + `
            案536為本國籍20多歲男性，長期於法國工作，10月11日返國入境時，主動告知10月9日有喉嚨痛症狀，於機場採檢結果為陰性；居家檢疫期間，於10月12日至13日陸續出現咳嗽、腹瀉、全身倦怠及呼吸困難，且症狀持續，10月16日由衛生單位安排就醫採檢後確診。
    
            `
    }, {
        no: '537',
        case: '537',
        date: '10/19',
        status: 'default',
        group: 'trp_A',
        info: '《案537》' + '<br>' + `
            案537為本國籍40多歲男性，長期於菲律賓工作，約1至2個月返台一次，本次因休假於10月4日返台，入境迄今無症狀，10月17日進行檢疫期滿前採檢後確診。
    
            `
    }, {
        no: '538',
        case: '538',
        date: '10/19',
        status: 'default',
        group: 'trp_A',
        info: '《案538》' + '<br>' + `
            案538為菲律賓籍30多歲男性，因工作於10月4日入境台灣，入境迄今無症狀，10月17日由衛生單位安排進行檢疫期滿前採檢後確診。
    
            `
    }, {
        no: '539',
        case: '539',
        date: '10/19',
        status: 'default',
        group: 'trp_A',
        info: '《案539》' + '<br>' + `
            案539為印尼籍10多歲女性，因就學於10月3日入境台灣，入境迄今無症狀，10月18日由校方安排至醫院進行檢疫期滿採檢後確診。
    
            `
    }, {
        no: '540',
        case: '540',
        date: '10/19',
        status: 'default',
        group: 'trp_EU',
        info: '《案540》' + '<br>' + `
            案540為俄羅斯籍10多歲女性，因就學於10月9日入境台灣，10月7日曾於國外自費檢驗結果為陰性。個案居家檢疫期間，於10月16日出現味覺喪失情形，17日由衛生單位安排採檢後確診。
    
            `
    }, {
        no: '541',
        case: '541',
        date: '10/19',
        status: 'default',
        group: 'trp_A',
        info: '《案541》' + '<br>' + `
            菲律賓籍20多歲女性，案541、542因工作於今（2020）年10月5日搭乘同班機入境台灣，入境後至集中檢疫所檢疫，迄今無疑似症狀，10月18日檢疫期滿前進行採後確診。
    
            `
    }, {
        no: '542',
        case: '542',
        date: '10/19',
        status: 'default',
        group: 'trp_A',
        info: '《案542》' + '<br>' + `
            菲律賓籍20多歲男性，案541、542因工作於今（2020）年10月5日搭乘同班機入境台灣，入境後至集中檢疫所檢疫，迄今無疑似症狀，10月18日檢疫期滿前進行採後確診。
    
            `
    }, {
        no: '543',
        case: '543',
        date: '10/19',
        status: 'default',
        group: 'trp_A',
        info: '《案543》' + '<br>' + `
            案543為本國籍50多歲男性，長期於菲律賓工作，10月5日出現輕微發燒、肌肉痠痛、咳嗽、呼吸困難情形，10月15日於菲律賓當地就醫診斷為肺炎，僅服藥但未住院治療，個案10月18日自菲律賓返台，入境時主動告知有呼吸道症狀，於機場採檢後收治住院隔離，並於今（19）日確診。
    
            `
    }, {
        no: '544',
        case: '544',
        date: '10/21',
        status: 'default',
        group: 'trp_A',
        info: '《案544》' + '<br>' + `
            10多歲印尼籍男性，個案入境時無疑似症狀且檢附3日內檢驗抗體陰性報告，個案於居家檢疫期間均回覆無疑似症狀，惟後續經疫調了解，個案曾於10月8日至10月9日出現咳嗽、喉嚨痛症狀，10月10日後症狀緩解。個案於10月20日居家檢疫期滿，由校方安排專車至醫院自費採檢後確診。
    
            `
    }, {
        no: '545',
        case: '545',
        date: '10/22',
        status: 'default',
        group: 'trp_A',
        info: '《案545》' + '<br>' + `
            案545為印尼籍30多歲女性，因工作於10月14日入境台灣，搭機前3日內檢驗陰性，入境時無症狀。個案集中檢疫期間，於10月17日出現頭暈、食慾不振、嘔吐及全身倦怠，20日由衛生單位安排就醫採檢後確診。
    
            `
    }, {
        no: '546',
        case: '546',
        date: '10/22',
        status: 'default',
        group: 'trp_A',
        info: '《案546》' + '<br>' + `
            案546為本國籍30多歲男性，去（2019）年12月前往菲律賓工作，今年10月13日至17日於菲律賓當地出現上半身骨頭刺痛、輕微咳嗽及嗅覺異常情形，但未就醫；10月20日自菲律賓返國，機上全程佩戴口罩、防護衣及面罩，入境時主動告知嗅覺喪失，於機場進行採檢後確診。
    
            `
    }, {
        no: '547',
        case: '547',
        date: '10/22',
        status: 'default',
        group: 'trp_A',
        info: '《案547》' + '<br>' + `
            案547為印尼籍30多歲女性，因工作於10月8日入境台灣，入境迄今無疑似症狀，個案10月21日進行檢疫期滿前採檢，因檢出陽性。
    
            `
    }, {
        no: '548',
        case: '548',
        date: '10/22',
        status: 'default',
        group: 'trp_A',
        info: '《案548》' + '<br>' + `
            案548為菲律賓籍30多歲女性，過去2年於土耳其工作，因預定來台工作，於10月13日入境台灣，搭機前3日內檢驗陰性，入境時無症狀。個案於防疫旅館居家檢疫期間，10月17日至20日因陸續出現流鼻水、倦怠及嗅味覺異常情形通報衛生單位，經安排就醫採檢後確診。
    
            `
    }, {
        no: '549',
        case: '549',
        date: '10/24',
        status: 'default',
        group: 'trp_A',
        info: '《案549》' + '<br>' + `
            案549為20多歲菲律賓籍女性，因工作於今（2020）年9月30日入境台灣，搭機前3日內檢驗陰性，入境時至集中檢疫期滿均無症狀，10月13日檢疫期滿前採檢結果為陰性，檢疫期滿後由仲介安排至隔離宿舍進行自主健康管理，並於10月22由仲介安排至醫院自費檢驗後確診。
    
            `
    }, {
        no: '550',
        case: '550',
        date: '10/24',
        status: 'default',
        group: 'trp_A',
        info: '《案550》' + '<br>' + `
            案550為30多歲本國籍男性，今年10月2日出境至美國，並於10月18日返國，入境時無不適症狀。個案於10月21日居家檢疫期間出現發燒、咳嗽、肌肉痠痛、關節痛及全身倦怠等症狀，由衛生單位安排就醫採檢後確診。
    
            `
    }, {
        no: '551',
        case: '551',
        date: '10/28',
        status: 'default',
        group: 'trp_A',
        info: '《案551》' + '<br>' + `
            印尼籍10多歲女性移工，入境時無症狀且檢附三日內檢驗陰性報告，由仲介安排入住防疫宿舍進行居家檢疫，檢疫期間均無症狀。至10月22日檢疫期滿後於10月26日由仲介安排至醫院自費採檢後確診。
    
            `
    }, {
        no: '552',
        case: '552',
        date: '10/29',
        status: 'default',
        group: 'trp_A',
        info: '《案552》' + '<br>' + `
            本國籍30多歲男性，去（2019）年12月至菲律賓工作，今（2020）年10月14日起陸續出現咳嗽、流鼻水、喉嚨痛、腹瀉、全身痠痛及倦怠等症狀。10月25日返國，10月26日因出現咳嗽伴隨胸痛、全身痠痛，由集中檢疫所人員安排就醫採檢後確診。
    
            `
    }, {
        no: '553',
        case: '553',
        date: '10/29',
        status: 'default',
        group: 'trp_NA',
        info: '《案553》' + '<br>' + `
            本國籍60多歲女性，長期居住美國，10月15日與友人聚餐（其中2名確診），10月26日返國，27日入境時主動告知曾於美國接觸確診個案且有不適症狀，於機場進行採檢，並於今（29）日確診。
    
            `
    }, {
        no: '554',
        case: '554',
        date: '10/29',
        status: 'default',
        group: 'trp_A',
        info: '《案554》' + '<br>' + `
            印尼籍20多歲女性，10月15日來台工作，入境後至集中檢疫所檢疫，迄今無疑似症狀，10月28日檢疫期滿前進行採檢，因檢出陽性於今（29）日確診。
    
            `
    }, {
        no: '555',
        case: '555',
        date: '10/30',
        status: 'default',
        group: 'trp_A',
        info: '《案555》' + '<br>' + `
            菲律賓籍30多歲男性，10月15日來台工作，今（2020）年9月10日獨自返回菲律賓，曾於13日與確診病患接觸也與確診人員同住，20日因出現咳嗽、呼吸困難等症狀收治住院，於當地採驗結果為陰性。10月15日自菲律賓搭機來台，入境迄今無症狀，10月29日集中檢疫期滿前採檢後確診。
    
            `
    }, {
        no: '556',
        case: '556',
        date: '10/31',
        status: 'default',
        group: 'trp_A',
        info: '《案556》' + '<br>' + `
            60歲本國籍男性，10月24日出現呼吸困難、咳嗽、發燒等症狀，未曾於印度當地就醫。個案入境時，主動通報有症狀，由機場安排採檢後送至醫院就醫，於昨（30）日確診，目前住院隔離治療中。
    
            `
    }, {
        no: '557',
        case: '557',
        date: '11/1',
        status: 'default',
        group: 'trp_A',
        info: '《案557》' + '<br>' + `
            印尼籍10多歲女性，10月7日曾出現嗅覺喪失症狀，未於當地就醫，10月29日入境時主動告知嗅覺喪失，於機場進行採檢，並於今（1）日確診。
    
            `
    }, {
        no: '558',
        case: '558',
        date: '11/1',
        status: 'default',
        group: 'trp_A',
        info: '《案558》' + '<br>' + `
            印尼籍30多歲男性移工，10月14日來台工作，10月10日曾於國外自費檢驗結果為陰性，個案曾於10月14日晚間出現流鼻水症狀，自行服用成藥後症狀緩解。個案10月29日檢疫期滿後，與另2名移工一同由仲介開車送至醫院自費採檢，於今（1）日確診。
    
            `
    }, {
        no: '559',
        case: '559',
        date: '11/1',
        status: 'default',
        group: 'trp_NA',
        info: '《案559》' + '<br>' + `
            本國籍50多歲男性，因工作長期居住美國，10月26日出現發燒、肌肉痠痛、關節痛、咳嗽等情形，僅自行服藥未就醫，10月30日自美國返台入境時主動告知有發燒、咳嗽症狀，於機場採檢後安排至集中檢疫所，今（1）日確診。
    
            `
    }, {
        no: '560',
        case: '560',
        date: '11/2',
        status: 'default',
        group: 'trp_A',
        info: '《案560》' + '<br>' + `
            印度籍30多歲男性，來台前曾於10月12日及14日採驗，結果皆為陰性，10月15日與1名同事來台工作，入境迄今無症狀。個案居家檢疫期滿後，因公司要求，10月31日自費採檢，並於今（2）日確診。
    
            `
    }, {
        no: '561',
        case: '561',
        date: '11/2',
        status: 'default',
        group: 'trp_A',
        info: '《案561》' + '<br>' + `
            印尼籍30多歲女性，10月18日來台工作，入境迄今無症狀，10月31日檢疫期滿前採檢，於今日確診。
    
            `
    }, {
        no: '562',
        case: '562',
        date: '11/2',
        status: 'default',
        group: 'trp_A',
        info: '《案562》' + '<br>' + `
            印尼籍30多歲女性，10月10日來台工作，入境迄今無症狀，10月23日檢疫期滿前採檢結果為陰性。個案10月25日檢疫期滿後，由仲介安排至宿舍進行自主健康管理，因雇主要求，10月30日至醫院自費採檢，於今（2）日確診。。
    
            `
    }, {
        no: '563',
        case: '563',
        date: '11/2',
        status: 'default',
        group: 'trp_A',
        info: '《案563》' + '<br>' + `
            印尼籍20多歲男性，為昨（1）日公布案558之同行入境移工，登機前3日內檢驗為陰性，個案與另1名同行入境移工因入境前與案558密切接觸，2人皆於10月30日出現咳嗽、喉嚨痛症狀住院隔離並採檢，其中案563檢出陽性確診。
    
            `
    }, {
        no: '564',
        case: '564',
        date: '11/2',
        status: 'default',
        group: 'trp_A',
        info: '《案564》' + '<br>' + `
            菲律賓籍20多歲女性，10月19日來台工作，登機前3日內檢驗為陰性，入境迄今無症狀，11月1日進行檢疫期滿前採檢，於今（2）日確診。
    
            `
    }, {
        no: '565',
        case: '565',
        date: '11/3',
        status: 'default',
        group: 'trp_EU',
        info: '《案565》' + '<br>' + `
            本國籍20多歲男性，今（2020）年8月至法國就學，10月中旬出現喉嚨痛、流鼻水、咳嗽等症狀，10月30日出現嗅覺異常。自述9月20日、10月8日、10月15日及10月19日由學校合作實驗室進行PCR檢驗結果均為陰性。個案11月1日返國，入境時主動通報有相關症狀，採檢後至集中檢疫所隔離檢疫，於今（3）日確診。
    
            `
    }, {
        no: '566',
        case: '566',
        date: '11/3',
        status: 'default',
        group: 'trp_EU',
        info: '《案566》' + '<br>' + `
            本國籍20多歲女性，今（2020）年8月至英國就學，10月29日出現鼻塞症狀。個案於11月1日返國，入境時主動通報有相關症狀，採檢後至集中檢疫所進行隔離檢疫，於今（3）日確診。
    
            `
    }, {
        no: '567',
        case: '567',
        date: '11/3',
        status: 'default',
        group: 'trp_EU',
        info: '《案567》' + '<br>' + `
            本國籍10多歲男性，今（2020）年10月至德國就學，10月31日曾出現流鼻水症狀。個案於11月1日返國後於自家進行居家檢疫，因肌肉痠痛、頭痛、流鼻水等症狀，通報衛生單位後安排採檢送驗，於今（3）日確診。
    
            `
    }, {
        no: '568',
        case: '568',
        date: '11/3',
        status: 'default',
        group: 'trp_A',
        info: '《案568》' + '<br>' + `
            菲律賓籍10多歲女性，10月20日來台就學，持入境前3日內檢驗結果陰性報告，入境迄今無症狀，11月2日進行檢疫期滿前採檢，於今（3）日確診。
    
            `
    }, {
        no: '569',
        case: '569',
        date: '11/4',
        status: 'default',
        group: 'trp_EU',
        info: '《案569》' + '<br>' + `
            本國籍20多歲女性，今（2020）年9月16日與2名同事至波蘭工作，10月25日一同返台，入境時無症狀，並於宿舍居家檢疫。個案10月30日至11月2日陸續出現全身倦怠、咳嗽、喉嚨痛、流鼻水、嗅味覺異常等症狀，經衛生單位安排就醫採檢，於今（4）日確診。
    
            `
    }, {
        no: '570',
        case: '570',
        date: '11/5',
        status: 'default',
        group: 'trp_EU',
        info: '《案570》' + '<br>' + `
            本國籍20多歲女性，今（2020）年9月中旬赴捷克就學，本身有過敏性鼻炎病史，10月10日在捷克曾出現發燒、味覺異常情形，未於當地就醫，約10天後症狀改善。11月2日自荷蘭搭機經曼谷返國，入境時有流鼻水、有痰症狀。個案返國後至防疫旅館進行居家檢疫，11月3日主動通報在捷克期間曾有發燒、味覺異常情形，由衛生單位安排採檢送驗，於今（5）日確診。
    
            `
    }, {
        no: '571',
        case: '571',
        date: '11/6',
        status: 'default',
        group: 'trp_A',
        info: '《案571》' + '<br>' + `
            與572及573均為印尼籍女性，年齡介於20多歲至40多歲，今（2020）年10月22日搭乘同一班機來台工作，入境迄今均無症狀，11月4日檢疫期滿前進行採檢，皆檢出陽性於今（6）日確診。
    
            `
    }, {
        no: '572',
        case: '572',
        date: '11/6',
        status: 'default',
        group: 'trp_A',
        info: '《案572》' + '<br>' + `
            與571及573均為印尼籍女性，年齡介於20多歲至40多歲，今（2020）年10月22日搭乘同一班機來台工作，入境迄今均無症狀，11月4日檢疫期滿前進行採檢，皆檢出陽性於今（6）日確診。
    
            `
    }, {
        no: '573',
        case: '573',
        date: '11/6',
        status: 'default',
        group: 'trp_A',
        info: '《案573》' + '<br>' + `
            與571及572均為印尼籍女性，年齡介於20多歲至40多歲，今（2020）年10月22日搭乘同一班機來台工作，入境迄今均無症狀，11月4日檢疫期滿前進行採檢，皆檢出陽性於今（6）日確診。
    
            `
    }, {
        no: '574',
        case: '574',
        date: '11/6',
        status: 'default',
        group: 'trp_NA',
        info: '《案574》' + '<br>' + `
            本國籍20多歲女性，今（2020）年2月至墨西哥工作，曾於當地接觸確診個案，10月30日陸續出現流鼻水、鼻塞、頭暈症狀，11月4日返台入境時主動告知症狀及接觸史，在機場進行採檢，於集中檢疫所等待結果期間出現嗅味覺異常情形，後續因確診收治住院隔離。
    
            `
    }, {
        no: '575',
        case: '575',
        date: '11/8',
        status: 'default',
        group: 'trp_A',
        info: '《案575》' + '<br>' + `
            與案576均為印尼籍女性，年齡介於30多歲至40多歲，今（2020）年10月24日搭乘同一班機來台工作，11月6日檢疫期滿前進行採檢，皆檢出陽性並於今（8）日確診。
    
            `
    }, {
        no: '576',
        case: '576',
        date: '11/8',
        status: 'default',
        group: 'trp_A',
        info: '《案576》' + '<br>' + `
            與案575均為印尼籍女性，年齡介於30多歲至40多歲，今（2020）年10月24日搭乘同一班機來台工作，11月6日檢疫期滿前進行採檢，皆檢出陽性並於今（8）日確診。
    
            `
    }, {
        no: '577',
        case: '577',
        date: '11/8',
        status: 'default',
        group: 'trp_A',
        info: '《案577》' + '<br>' + `
            菲律賓籍20多歲男性，10月16日來台工作，入境迄今無症狀，10月29日檢疫期滿前採檢結果為陰性。個案於10月31日檢疫期滿後，至防疫旅館進行自主健康管理，並由仲介安排於11月5日至醫院自費採檢，於今（8）日確診。
    
            `
    }, {
        no: '578',
        case: '578',
        date: '11/8',
        status: 'default',
        group: 'trp_A',
        info: '《案578》' + '<br>' + `
            菲律賓籍10多歲男性，10月25日來台就學，入境迄今無症狀，11月7日進行檢疫期滿前採檢，於今（8）日確診。
    
            `
    }, {
        no: '579',
        case: '579',
        date: '11/9',
        status: 'default',
        group: 'trp_EU',
        info: '《案579》' + '<br>' + `
            烏克蘭籍20多歲女子，今（2020）年11月3日來台工作，搭機前3日內檢驗陰性，入境時無上呼吸道症狀，入境後至防疫旅館進行居家檢疫，11月6日居家檢疫期間主動通報有鼻塞、嗅味覺異常情形，由衛生單位採檢送驗，於今（9）日確診。
    
            `
    }, {
        no: '580',
        case: '580',
        date: '11/10',
        status: 'default',
        group: 'trp_A',
        info: '《案580》' + '<br>' + `
            案580、581分別於今（2020）年10月26日及27日自印尼搭機來台工作，入境迄今均無疑似症狀，2人分別於11月8日及9日進行檢疫期滿前採檢，並於今日確診。
    
            `
    }, {
        no: '581',
        case: '581',
        date: '11/10',
        status: 'default',
        group: 'trp_A',
        info: '《案581》' + '<br>' + `
            案580、581分別於今（2020）年10月26日及27日自印尼搭機來台工作，入境迄今均無疑似症狀，2人分別於11月8日及9日進行檢疫期滿前採檢，並於今日確診。
    
            `
    }, {
        no: '582',
        case: '582',
        date: '11/11',
        status: 'default',
        group: 'trp_A',
        info: '《案582》' + '<br>' + `
            案582、584、585均為印尼籍女性，年齡介於20多歲至40多歲，10月28日自印尼搭機來台工作，入境後分別前往國內3處集中檢疫所檢疫。3人入境迄今均無症狀，11月9日進行檢疫期滿前採檢，因檢出陽性於今（11）日確診。
    
            `
    }, {
        no: '583',
        case: '583',
        date: '11/11',
        status: 'default',
        group: 'trp_EU',
        info: '《案583》' + '<br>' + `
            比利時籍30多歲男性，因受邀來台從事商務活動，10月24日自比利時至荷蘭搭機，於10月25日入境時無症狀，並持有登機前3日內檢驗陰性報告，曾於10月31日出現嗅味覺異常症狀，因症狀緩解未就醫及通報；個案11月9日檢疫期滿後，至其他旅宿進行自主健康管理，11月10日至醫院自費採檢，並於今（11）日確診。
    
            `
    }, {
        no: '584',
        case: '584',
        date: '11/11',
        status: 'default',
        group: 'trp_A',
        info: '《案584》' + '<br>' + `
            案582、584、585均為印尼籍女性，年齡介於20多歲至40多歲，10月28日自印尼搭機來台工作，入境後分別前往國內3處集中檢疫所檢疫。3人入境迄今均無症狀，11月9日進行檢疫期滿前採檢，因檢出陽性於今（11）日確診。
    
            `
    }, {
        no: '585',
        case: '585',
        date: '11/11',
        status: 'default',
        group: 'trp_A',
        info: '《案585》' + '<br>' + `
            案582、584、585均為印尼籍女性，年齡介於20多歲至40多歲，10月28日自印尼搭機來台工作，入境後分別前往國內3處集中檢疫所檢疫。3人入境迄今均無症狀，11月9日進行檢疫期滿前採檢，因檢出陽性於今（11）日確診。
    
            `
    }, {
        no: '586',
        case: '586',
        date: '11/12',
        status: 'default',
        group: 'trp_A',
        info: '《案586》' + '<br>' + `
            來台工作之20多歲至30多歲印尼籍女性移工，分別於10月28日及29日自印尼搭機來台，入境後至集中檢疫所檢疫。其中案590於10月29日至11月11日有輕微發燒症狀，僅自行服藥未向檢疫所人員通報，其餘4人檢疫期間均無症狀。5人分別於11月10日及11日進行檢疫期滿前採檢，因檢出陽性於今（12）日確診。
    
            `
    }, {
        no: '587',
        case: '587',
        date: '11/12',
        status: 'default',
        group: 'trp_A',
        info: '《案587》' + '<br>' + `
            來台工作之20多歲至30多歲印尼籍女性移工，分別於10月28日及29日自印尼搭機來台，入境後至集中檢疫所檢疫。其中案590於10月29日至11月11日有輕微發燒症狀，僅自行服藥未向檢疫所人員通報，其餘4人檢疫期間均無症狀。5人分別於11月10日及11日進行檢疫期滿前採檢，因檢出陽性於今（12）日確診。
    
            `
    }, {
        no: '588',
        case: '588',
        date: '11/12',
        status: 'default',
        group: 'trp_A',
        info: '《案588》' + '<br>' + `
            來台工作之20多歲至30多歲印尼籍女性移工，分別於10月28日及29日自印尼搭機來台，入境後至集中檢疫所檢疫。其中案590於10月29日至11月11日有輕微發燒症狀，僅自行服藥未向檢疫所人員通報，其餘4人檢疫期間均無症狀。5人分別於11月10日及11日進行檢疫期滿前採檢，因檢出陽性於今（12）日確診。
    
            `
    }, {
        no: '589',
        case: '589',
        date: '11/12',
        status: 'default',
        group: 'trp_A',
        info: '《案589》' + '<br>' + `
            來台工作之20多歲至30多歲印尼籍女性移工，分別於10月28日及29日自印尼搭機來台，入境後至集中檢疫所檢疫。其中案590於10月29日至11月11日有輕微發燒症狀，僅自行服藥未向檢疫所人員通報，其餘4人檢疫期間均無症狀。5人分別於11月10日及11日進行檢疫期滿前採檢，因檢出陽性於今（12）日確診。
    
            `
    }, {
        no: '590',
        case: '590',
        date: '11/12',
        status: 'default',
        group: 'trp_A',
        info: '《案590》' + '<br>' + `
            來台工作之20多歲至30多歲印尼籍女性移工，分別於10月28日及29日自印尼搭機來台，入境後至集中檢疫所檢疫。其中案590於10月29日至11月11日有輕微發燒症狀，僅自行服藥未向檢疫所人員通報，其餘4人檢疫期間均無症狀。5人分別於11月10日及11日進行檢疫期滿前採檢，因檢出陽性於今（12）日確診。
    
            `
    }, {
        no: '591',
        case: '591',
        date: '11/13',
        status: 'default',
        group: 'trp_A',
        info: '《案591》' + '<br>' + `
            案591、592、596、597為菲律賓籍移工，分別於今（2020）年10月28日及29日入境後前往集中檢疫所，檢疫期間均無疑似症狀，並於11月11日及12日進行檢疫期滿前採檢，因檢出陽性於今（13）日確診。
    
            `
    }, {
        no: '592',
        case: '592',
        date: '11/13',
        status: 'default',
        group: 'trp_A',
        info: '《案592》' + '<br>' + `
            案591、592、596、597為菲律賓籍移工，分別於今（2020）年10月28日及29日入境後前往集中檢疫所，檢疫期間均無疑似症狀，並於11月11日及12日進行檢疫期滿前採檢，因檢出陽性於今（13）日確診。
    
            `
    }, {
        no: '593',
        case: '593',
        date: '11/13',
        status: 'default',
        group: 'trp_A',
        info: '《案593》' + '<br>' + `
            50多歲本國籍女性，今年7月中旬至菲律賓探親，10月29日返台，入境時無症狀。個案於集中檢疫所檢疫期間，11月3日上午雖曾回報有輕微鼻塞及流鼻水症狀，但同日下午即回報已改善無症狀，經評估後未安排就醫。個案11月11日進行檢疫期滿前採檢，於今（13）日確診。
    
            `
    }, {
        no: '594',
        case: '594',
        date: '11/13',
        status: 'default',
        group: 'trp_EU',
        info: '《案594》' + '<br>' + `
            20多歲本國籍男性，今年8月中旬前往波蘭就學，11月5日起陸續出現嗅覺異常及喉嚨痛情形，僅自行服藥未在當地就醫。個案11月10日返台，入境時主動告知有症狀，於機場採檢，並於今（13）日確診。
    
            `
    }, {
        no: '595',
        case: '595',
        date: '11/13',
        status: 'default',
        group: 'trp_A',
        info: '《案595》' + '<br>' + `
            印尼籍移工，於今（2020）年29日入境後前往集中檢疫所，檢疫期間均無疑似症狀，並於11月11日及12日進行檢疫期滿前採檢，因檢出陽性於今（13）日確診。
    
            `
    }, {
        no: '596',
        case: '596',
        date: '11/13',
        status: 'default',
        group: 'trp_A',
        info: '《案596》' + '<br>' + `
            案591、592、596、597為菲律賓籍移工，分別於今（2020）年10月28日及29日入境後前往集中檢疫所，檢疫期間均無疑似症狀，並於11月11日及12日進行檢疫期滿前採檢，因檢出陽性於今（13）日確診。
    
            `
    }, {
        no: '597',
        case: '597',
        date: '11/13',
        status: 'default',
        group: 'trp_A',
        info: '《案597》' + '<br>' + `
            案591、592、596、597為菲律賓籍移工，分別於今（2020）年10月28日及29日入境後前往集中檢疫所，檢疫期間均無疑似症狀，並於11月11日及12日進行檢疫期滿前採檢，因檢出陽性於今（13）日確診。
    
            `
    }, {
        no: '598',
        case: '598',
        date: '11/13',
        status: 'default',
        group: 'trp_A',
        info: '《案598》' + '<br>' + `
            30多歲本國籍男性，今年9月上旬至印尼工作，11月11日返台，入境時主動告知有喉嚨痛症狀，於機場採檢，並於今（13）日確診。
    
            `
    }, {
        no: '599',
        case: '599',
        date: '11/14',
        status: 'default',
        group: 'trp_A',
        info: '《案599》' + '<br>' + `
            40多歲本國籍女性，今（2020）年2月上旬至菲律賓探親，10月29日返台，入境迄今無症狀，11月11日進行檢疫期滿前採檢，檢驗結果有微弱訊號，經複驗結果為陰性；為求慎重，又逢實驗室引進新的檢驗試劑，故將個案檢體再以新試劑進行檢驗，結果呈現陽性（Ct值33），於今（14）日確診。。
    
            `
    }, {
        no: '600',
        case: '600',
        date: '11/14',
        status: 'default',
        group: 'trp_A',
        info: '《案600》' + '<br>' + `
            30多歲印尼籍女性移工，11月7日來台工作，入境時無症狀，集中檢疫所檢疫期間，於11月9日出現輕微發燒、嗅覺異常、咳嗽、流鼻水及喉嚨痛等症狀，因症狀持續，11月13日採檢通報，於今（14）日確診。
    
            `
    }, {
        no: '601',
        case: '601',
        date: '11/14',
        status: 'default',
        group: 'trp_EU',
        info: '《案601》' + '<br>' + `
            40多歲克羅埃西亞籍男性，平時即有鼻子過敏情形，今年7月曾出現症狀，並於克羅埃西亞確診武漢肺炎，隔離14天後症狀緩解，且經複驗陰性故解除隔離。個案本次因受台灣公司聘請，於10月29日來台工作，入境時無症狀，並持有登機前3日內陰性報告。個案居家檢疫期間，曾於11月1日出現鼻塞症狀，自認是過敏故未通報；11月13日檢疫期滿，因台灣公司要求，同日自費採檢，並於今（14）日確診。
    
            `
    }, {
        no: '602',
        case: '602',
        date: '11/15',
        status: 'default',
        group: 'trp_A',
        info: '《案602》' + '<br>' + `
            40多歲本國籍女性，長期定居日本（前次自台灣出境日期為2020年2月），11月初陸續出現鼻塞、頭痛、噁心、流鼻水及嗅味覺異常等症狀，自行服藥後症狀緩解，未在當地就醫。11月12日與2名家人一同返台探親，入境時主動告知有症狀，於機場採檢後安排至集中檢疫所，今（15）日確診。
    
            `
    }, {
        no: '603',
        case: '603',
        date: '11/15',
        status: 'default',
        group: 'trp_NA',
        info: '《案603》' + '<br>' + `
            30多歲本國籍女性，因工作長期居住美國（前次自台灣出境日期為今年8月），11月13日與家人一同返國，入境時個案主動告知搭機時自覺出現嗅味覺異常情形，但下機後即恢復，於機場採檢後安排至集中檢疫所，今（15）日確診。
    
            `
    }, {
        no: '604',
        case: '604',
        date: '11/16',
        status: 'default',
        group: 'trp_A',
        info: '《案604》' + '<br>' + `
            20多歲印尼籍女性，無症狀，11月1日入境後前往集中檢疫所檢疫，11月14日進行檢疫期滿前採檢因檢出陽性於今（16）日確診。
    
            `
    }, {
        no: '605',
        case: '605',
        date: '11/17',
        status: 'default',
        group: 'trp_A',
        info: '《案605》' + '<br>' + `
            30多歲本國籍男性，今（2020）年3月至緬甸工作，9月6日起陸續出現嗜睡、發燒、嗅味覺喪失等症狀，於當地就醫確診武漢肺炎，隔離期間未再採檢，因症狀緩解於9月下旬解除隔離。個案11月8日返國入境時，因主動告知曾於緬甸確診，且曾在當地接觸我國案501及案505，故由機場檢疫人員安排採檢，同日個案於檢疫所等待檢驗結果時，出現喉嚨癢及輕微咳嗽症狀，後續因機場採檢結果為陰性，轉至防疫旅館居家檢疫；個案11月13日咳嗽症狀加劇，主動回報衛生單位安排就醫採檢，於今（17）日確診。
    
            `
    }, {
        no: '606',
        case: '606',
        date: '11/17',
        status: 'default',
        group: 'trp_A',
        info: '《案606》' + '<br>' + `
            50多歲本國籍男性，因工作於今年9月前往印尼，11月9日起陸續出現咳嗽、味覺異常、呼吸不順、發燒、腹瀉及肌肉痠痛等症狀，僅自行服藥未就醫；個案11月15日入境時持有登機前3日內血清抗體檢驗陰性報告，因主動告知曾有症狀，且曾接觸確診個案，於機場進行採檢於今（17）日確診。
    
            `
    }, {
        no: '607',
        case: '607',
        date: '11/18',
        status: 'default',
        group: 'trp_A',
        info: '《案607》' + '<br>' + `
            30多歲印尼籍女性，11月12日來台工作，入境後搭乘專車前往集中檢疫所，14日出現喉嚨痛及全身痠痛未通知檢疫所，16日因發燒、流鼻水及喉嚨痛經安排就醫採檢，於今（18）日確診。
    
            `
    }, {
        no: '608',
        case: '608',
        date: '11/18',
        status: 'default',
        group: 'trp_NA',
        info: '《案608》' + '<br>' + `
            60多歲本國籍男性，長期居住美國（前次自台灣出境日期為2019年10月），並於11月11日返國，入境時無不適症狀，前往防疫旅館進行居家檢疫；11月12日起陸續出現體溫偏高、肌肉痠痛、頭痛、咳嗽及流鼻水等症狀，16日由衛生單位安排就醫採檢，於今（18）日確診。
    
            `
    }, {
        no: '609',
        case: '609',
        date: '11/19',
        status: 'default',
        group: 'trp_EU',
        info: '《案609》' + '<br>' + `
            案609為土耳其籍20多歲女性，外國籍航空公司空服員，11月10日值勤自土耳其來台之班機，於11月12日出現肌肉痠痛及發燒症狀，隔日航空公司聯繫我國醫療單位至旅館協助診療，並由該醫療單位通知疾管署；個案11月16日依作業流程安排採檢通報，並於今（19）日確診。
    
            `
    }, {
        no: '610',
        case: '610',
        date: '11/19',
        status: 'default',
        group: 'trp_A',
        info: '《案610》' + '<br>' + `
            印尼籍20多歲女性，於11月17日來台工作，入境時因體溫異常於檢疫站攔檢，個案告知檢疫人員於機上出現倦怠、全身痠痛及肚子不適等症狀，於機場採檢通報，於今（19）日確診。
    
            `
    }, {
        no: '611',
        case: '611',
        date: '11/20',
        status: 'default',
        group: 'trp_A',
        info: '《案611》' + '<br>' + `
            印尼籍30多歲女性，於11月5日自印尼來臺工作，入境後至集中檢疫所檢疫，迄今無疑似症狀。2人11月18日進行檢疫期滿前採檢，因檢出陽性於今（20）日確診。
    
            `
    }, {
        no: '612',
        case: '612',
        date: '11/20',
        status: 'default',
        group: 'trp_A',
        info: '《案612》' + '<br>' + `
            印尼籍30多歲女性，於11月5日自印尼來臺工作，入境後至集中檢疫所檢疫，迄今無疑似症狀。2人11月18日進行檢疫期滿前採檢，因檢出陽性於今（20）日確診。
    
            `
    }, {
        no: '613',
        case: '613',
        date: '11/20',
        status: 'default',
        group: 'trp_A',
        info: '《案613》' + '<br>' + `
            20多歲印尼籍女性，分別於11月7日、8日自印尼來台工作，入境迄今皆無症狀，11月20日、21日進行期滿前採檢送驗，皆於今（22）日確診。
    
            `
    }, {
        no: '614',
        case: '614',
        date: '11/20',
        status: 'default',
        group: 'trp_A',
        info: '《案614》' + '<br>' + `
            20多歲印尼籍女性，分別於11月7日、8日自印尼來台工作，入境迄今皆無症狀，11月20日、21日進行期滿前採檢送驗，皆於今（22）日確診。
    
            `
    }, {
        no: '615',
        case: '615',
        date: '11/20',
        status: 'default',
        group: 'trp_NA',
        info: '《案615》' + '<br>' + `
            20多歲本國籍男性，今年8月中旬赴美國就學，11月6日陸續出現肌肉痠痛、咳嗽、有痰、流鼻水、頭痛及嗅覺異常等疑似症狀，自行服藥未就醫，11月20日入境時主動通報有疑似症狀，於機場採檢後至檢疫所隔離，於今（22）日確診。
    
            `
    }, {
        no: '616',
        case: '616',
        date: '11/20',
        status: 'default',
        group: 'trp_A',
        info: '《案616》' + '<br>' + `
            30多歲菲律賓籍女性，11月8日自菲律賓來台工作，入境迄今皆無症狀，11月21日進行期滿前採檢送驗，於今（22）日確診。

            `
    }, {
        no: '617',
        case: '617',
        date: '11/20',
        status: 'default',
        group: 'trp_A',
        info: '《案617》' + '<br>' + `
            20多歲印尼籍女性，分別於11月7日、8日自印尼來台工作，入境迄今皆無症狀，11月20日、21日進行期滿前採檢送驗，皆於今（22）日確診。
    
            `
    }, {
        no: '618',
        case: '618',
        date: '11/20',
        status: 'default',
        group: 'trp_A',
        info: '《案618》' + '<br>' + `
            20多歲印尼籍女性，分別於11月7日、8日自印尼來台工作，入境迄今皆無症狀，11月20日、21日進行期滿前採檢送驗，皆於今（22）日確診。
    
            `
    }

];


// 案例群組設定
var case_total = case_data.list;
var case_html = `
<div class="case_box">
  <div class="case_d">{{date}}</div>
  <div id="case_{{case}}" class="case_i {{status}}">{{no}}</div>
</div>
`;

for (var i = 0; i < case_total.length; i++) {
    var case_result = case_html.replace("{{date}}", case_total[i].date)
        .replace("{{case}}", case_total[i].case)
        .replace("{{no}}", case_total[i].no)
        .replace("{{status}}", case_total[i].status)
        ;
    var group = case_total[i].group;
    if (group === "non") {
        $('#non').append(case_result);

    } else if (group === "trp_A") {
        $('#trp_A').append(case_result);

    } else if (group === "tw_flt") {
        $('#tw_flt').append(case_result);

    } else if (group === "trp_NA") {
        $('#trp_NA').append(case_result);

    } else if (group === "trp_EU") {
        $('#trp_EU').append(case_result);

    } else if (group === "trp_AF") {
        $('#trp_AF').append(case_result);

    } else if (group === "trp_OC") {
        $('#trp_OC').append(case_result);

    } else {
        $('#trp_m').append(case_result);

    }

}
