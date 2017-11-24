var express = require('express');
var burger = require('../models/burger.js');
const router = express.Router();

router.get('/', function(req, res) {
    burger.all(function(data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.get('/getburgers', function(req,res) {

});


router.post('/', function(req, res) {
    console.log(req.body);

    let burger_name = req.body.burger_name;
    let devoured = false;

    res.redirect('/');
});

module.exports = router;


