var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
	res.redirect('DMANTZ_Home_Page');
});

module.exports = router;
