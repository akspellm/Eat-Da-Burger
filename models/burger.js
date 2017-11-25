const orm = require('../config/orm.js');

const burger = {
    all: function(done) {
        orm.selectAll('burgers', function(res) {
            done(res);
        })
    },
    update: function(objColVals, condition, done) {
        orm.updateOne('burgers', objColVals, condition, function(res) {
            done(res);
        });
    },
    create: function(cols, vals, done) {
        orm.insertOne('burgers', cols, vals, function(res) {
            done(res);
        })
    }
};

module.exports = burger;