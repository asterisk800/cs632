/**
 * Created by ghambissa on 2/14/16.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('NGN Driver Registration Page');
});

module.exports = router;
