var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res){
  var users = ['John', 'Betty', 'Hal'];
  res.json(users);
});

router.get('/new', function(req, res){
  var users = ['John'];
  res.json(users);
});


module.exports = router;
