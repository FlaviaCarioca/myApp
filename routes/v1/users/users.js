var express = require('express');
var router = express.Router();
var userRoutes = require('./userRoutesFunctions');

/* GET users listing. */
router.get('/', userRoutes['/'].fn);

router.get('/new', userRoutes['/new'].fn);


module.exports = router;
