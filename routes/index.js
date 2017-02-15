'use strict';

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res/*, next*/) {
  res.render('index', {});
});

router.get('/hello', function(req, res) {
  res.json({hello:"hello you!"});
});

module.exports = router;
