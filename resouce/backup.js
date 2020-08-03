// 長條圖：中國 確診/死亡/痊癒
// 隔一天新增一筆
var ctx = document.getElementById('lineChart_china_confirm').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1/21', '1/23', '1/25', '1/27', '1/29', '1/31', '2/2', '2/4', '2/6', '2/8', '2/10', '2/12', '2/14', '2/16', '2/18', '2/20', '2/22', '2/24', '2/26', '2/28', '3/1', '3/3', '3/5', '3/7', '3/9', '3/11', '3/13', '3/15', '3/17', '3/19', '3/21', '3/23', '3/25', '3/27', '3/29', '3/31', '4/2', '4/4', '4/6', '4/8', '4/10', '4/12', '4/14', '4/16', '4/18', '4/20'],
        datasets: [{
            label: '確診',
            data: [440, 830, 1975, 4515, 7711, 11791, 17205, 24324, 31161, 37198, 42638, 52526, 66492, 70548, 74185, 75567, 77041, 77658, 78497, 79389, 80026, 80270, 80552, 80695, 80757, 80793, 80824, 80860, 80881, 80967, 81054, 81171, 81285, 81394, 81470, 81554, 81621, 81669, 81740, 81865, 81953, 82160, 82295, 82367, 82735, 82757],
            backgroundColor: 'rgba(227, 89, 89, 1)',
            borderColor: 'rgba(227, 89, 89, 1)',
            pointStyle: 'dash',
            borderWidth: 2,
            fill: false

        }, {
            label: '痊癒',
            data: [0, 34, 49, 60, 124, 243, 475, 892, 1540, 2649, 3996, 5911, 8096, 10844, 14376, 18284, 22930, 27323, 32495, 39049, 44462, 49856, 53726, 57065, 59897, 62888, 65541, 67749, 69601, 71150, 72244, 73159, 74051, 74971, 75770, 76238, 76571, 76964, 77167, 77370, 77525, 77663, 77816, 77944, 77062, 77123],
            backgroundColor: 'rgba(201, 165, 46, 1)',
            borderColor: 'rgba(201, 165, 46, 1)',
            pointStyle: 'dash',
            borderWidth: 2,
            fill: false
        }, {
            label: '死亡',
            data: [9, 25, 56, 106, 170, 259, 361, 490, 636, 811, 1016, 1367, 1523, 1770, 2004, 2239, 2445, 2663, 2744, 2838, 2912, 2981, 3042, 3097, 3136, 3169, 3189, 3213, 3226, 3248, 3261, 3277, 3287, 3295, 3304, 3312, 3322, 3329, 3331, 3335, 3339, 3341, 3342, 3342, 4632, 4632],
            backgroundColor: 'rgba(87, 32, 32, 1)',
            borderColor: 'rgba(87, 32, 32, 1)',
            pointStyle: 'dash',
            borderWidth: 2,
            fill: false

        }]
    },
    options: {
        aspectRatio: 1,
        scales: {
            yAxes: [{
                ticks: {
                    fontSize: 14
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: 14
                }
            }],
        }
    }
});
