var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var user = {
    username: 'admin',
    password: 'admin'
  };
  res.send(user);
});

module.exports = router;
