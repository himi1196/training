var express = require('express');
var router = express.Router();

var users = require('./users');

//var app = express();
// router.use('/users', users);




/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

router.use('/users',users);

module.exports = router;
