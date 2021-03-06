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

router.put('/api/burgers/:id', function(req, res) {
    let condition = 'id = ' + req.params.id;

    console.log('condition', condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.post('/api/burgers', function(req, res) {
    burger.create([
        'burger_name', 'devoured'
    ], [
        req.body.burger_name, false
    ], function(result) {
        res.json({ id: result.insertId });
    });
});


router.post('/', function(req, res) {
    console.log(req.body);

    let burger_name = req.body.burger_name;
    let devoured = false;

    res.redirect('/');
});

module.exports = router;


