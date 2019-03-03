var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('news', {
        news: [{title:"2018-2019年终奖个人所得税怎么计算", href:"1"}, {title:"Excel公式个税计算方法教程大全", href:"2"}, {title:"2018-2019年终奖个人所得税怎么计算", href:"3"},
            {title:"2018-2019年终奖个人所得税怎么计算", href:"4"}, {title:"2018-2019年终奖个人所得税怎么计算", href:"5"}, {title:"2018-2019年终奖个人所得税怎么计算", href:"6"},
            {title:"2018-2019年终奖个人所得税怎么计算", href:"1"}, {title:"2018-2019年终奖个人所得税怎么计算", href:"1"}, {title:"2018-2019年终奖个人所得税怎么计算", href:"1"},
            {title:"2018-2019年终奖个人所得税怎么计算", href:"1"}, {title:"2018-2019年终奖个人所得税怎么计算", href:"1"}, {title:"2018-2019年终奖个人所得税怎么计算", href:"1"},
            {title:"2018-2019年终奖个人所得税怎么计算", href:"1"}, {title:"2018-2019年终奖个人所得税怎么计算", href:"1"}, {title:"2018-2019年终奖个人所得税怎么计算", href:"1"},
            {title:"2018-2019年终奖个人所得税怎么计算", href:"1"}, {title:"2018-2019年终奖个人所得税怎么计算", href:"1"}, {title:"2018-2019年终奖个人所得税怎么计算", href:"1"}]
    });
});

// router.get('/:id', function (req, res, next) {
//     res.render('new', {index:req.params.id});
// });

module.exports = router;
