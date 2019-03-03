var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('news', {
        news1: [{title:"Excel公式个税计算方法教程大全", href:"2"},
            {title:"2018工资个税反算税前工资 Excel WPS公式", href:"1"}, {title:"2018税后工资反算税前工资 Excel WPS公式", href:"2"},
            {title:"2018工资个税计算Excel WPS公式 3500起征点", href:"1"}, {title:"2018个人所得税Excel计算方法 LookUP函数", href:"2"},
            {title:"2018个人所得税的Excel函数计算公式整理", href:"1"}, {title:"2018工资税后反推 个税金额反算 Excel公式", href:"2"},
            {title:"Excel公式个税计算 INDEX函数取代IF的运用", href:"1"}, {title:"Excel公式个税计算方法教程大全", href:"2"},
            {title:"工资薪金个人所得税 Excel公式计算方法教程", href:"1"}, {title:"年终奖个人所得税 Excel公式计算方法教程", href:"2"},
            {title:"税后工资计算器2018 个人所得税excel计算公式", href:"1"}, {title:"劳务报酬个税反算 个税反推税前 EXCEL公式", href:"2"},
            {title:"劳务报酬税后反算 税后反推个税 EXCEL公式", href:"1"}, {title:"2018劳务报酬个税计算公式 Excel WPS公式", href:"2"}],

        news2: [{title:"2018-2019最新工资个人所得税税率表", href:"1"},{title:"2018-2019最新工资个人所得税税率表", href:"1"}, {title:"2018工资税后反推 个税金额反算 Excel公式", href:"2"},{title:"个税调整最新消息2018 工资个税计算方法", href:"1"}, {title:"个税计算器2018-2019 工资、年终奖个税计算器", href:"2"},
            {title:"2工资、薪金所得个人所得税计算方法 ", href:"1"}, {title:"工资高就是有钱人？你大错特错了", href:"2"},
            {title:"工资计算基数，你真的明白吗？", href:"1"}, {title:"工资计算器2018 个税税率表2018 个税计算方法", href:"2"},
            {title:"工资薪金个人所得税计算方法", href:"1"}, {title:"一般工资、薪金所得应纳个人所得税的计算", href:"2"},
            {title:"月工资高于上年职工平均工资三倍 以三倍补偿", href:"1"}, {title:"月收入只够买100斤猪肉 最低工资上调是好事吗", href:"2"},
            {title:"月月领工资，个税如何计算？", href:"1"}],

        news3: [{title:"“离职不享受年终奖”的规定是否有", href:"1"}, {title:"“年终奖计税盲区”问题该解决了", href:"2"},
            {title:"2018年公务员年终奖发放标准是什么", href:"1"}, {title:"2018年事业单位年终奖的发放规定", href:"2"},
            {title:"2018年休产假影响年终奖吗", href:"1"}, {title:"2018年一月份发年终奖合不合理", href:"2"},
            {title:"2018年终奖、工资个人所得税计算方法 详解", href:"1"}, {title:"2018年终奖个人所得税计算方法详解", href:"2"},
            {title:"2018年终奖金如何扣税?年终奖怎么扣税", href:"1"}, {title:"2018年最新年终奖个人所得税计算方法 精讲", href:"2"}],

        news4: [{title:"“个税抵房贷”何时实施？待到房价低落时", href:"1"}, {title:"“个税社保连缴满5年”未调整", href:"2"},
            {title:"“赡养父母可申请退个税”不涉道德问题", href:"1"}, {title:"“税务抵扣”不如提高个税起征点", href:"2"},
            {title:"“综合征个税”需要有明确时间表", href:"1"}, {title:"二孩家庭如何减轻个税负担", href:"2"},
            {title:"二手房个税怎么才能免得掉 必须满足这2个条件", href:"1"}, {title:"二线城市人才争夺战：购房无需个税社保证明", href:"2"},
            {title:"发放福利补贴哪些个税可以免？", href:"1"}, {title:"房产税与物业税不是一个税", href:"2"},
        ]
    });
});

// router.get('/:id', function (req, res, next) {
//     res.render('new', {index:req.params.id});
// });

module.exports = router;
