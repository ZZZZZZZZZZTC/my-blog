/**
 * Created by 123 on 2017/2/28.
 */
var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

// GET /signout 登出
router.get('/', checkLogin, function(req, res, next) {
    res.send(req.flash());
});

module.exports = router;