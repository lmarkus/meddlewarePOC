'use strict';


var IndexModel = require('../models/index'),
    assert = require('assert');


module.exports = function (router) {

    var model = new IndexModel();


    router.get('/', function (req, res) {
        assert(req.mw1);
        assert(req.mw2);
        res.sendStatus(200);
    });

};
