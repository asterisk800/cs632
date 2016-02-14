var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //render view to index.ejs (we don't have to add the ejs file extension)
  //this also define the variable 'title' which is going to be passed to router, then to the index.ejs file
  res.render('index',
      { title: 'NGN' });
});

module.exports = router;
