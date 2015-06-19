var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/',
//
//   function(req, res, next) {
//     // Adds headers to the response
//     res.set('X-One', 'One!');
//       next();
//   },
//
//   function(req, res, next) {
//    // Adds another header to the response
//     res.set('X-Two', 'Two!');
//     next();
//   },
//
//   function(req, res) {
//     res.send('Lets go');
//   }
// );

module.exports = router;
