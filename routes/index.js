var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	let result;
	if (req.query.price !== undefined) {
		result = req.query.myNetWorth / req.query.otherNetWorth * req.query.price;
	}
	else {
		result = 0;
	}
	const query = {result, vars: req.query};
	res.render('index', { title: 'My Net Worth', query });
});

module.exports = router;
