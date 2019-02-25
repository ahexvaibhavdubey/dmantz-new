var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('careers', { title: 'Express' });
});

module.exports = router;
