var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('news', {
        news: [{title:"新闻1", href:"1"}, {title:"新闻2", href:"2"}, {title:"新闻3", href:"3"},
            {title:"新闻4", href:"4"}, {title:"新闻5", href:"5"}, {title:"新闻6", href:"6"},
            {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"},
            {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"},
            {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"},
            {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"},
            {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"},
            {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"},
            {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"},
            {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"},
            {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"},
            {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"},
            {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"},
            {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"},
            {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"},
            {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"},
            {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"},
            {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"}, {title:"新闻1", href:"1"}]
    });
});

// router.get('/:id', function (req, res, next) {
//     res.render('new', {index:req.params.id});
// });

module.exports = router;
