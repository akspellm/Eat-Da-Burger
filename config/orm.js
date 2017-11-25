const connection = require('../config/connection.js');


function printQuestionMarks(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push('?');
    };

    return arr.toString();
};

function objToSql(ob) {
    let arr = [];

    for (let key in ob) {
        let value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
};

const orm = {
    selectAll: function (tableInput, done) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        pool.getConnection(function (err, connection) {

            connection.query(queryString, function (err, result) {
                if (err) {
                    throw err;
                }
                done(result);

                connection.release();
                if (err) throw err;
            });
        });
    },

    updateOne: function (table, objColVals, condition, done) {
        let queryString = 'UPDATE ' + table + ' SET ' + objToSql(objColVals) + ' WHERE ' + condition;

        pool.getConnection(function (err, connection) {

            connection.query(queryString, function (err, result) {
                if (err) {
                    throw err;
                }
                done(result);

                connection.release();
                if (err) throw err;
            });
        });
    },

    insertOne: function (table, cols, vals, done) {
        let queryString = 'INSERT INTO ' + table + ' (' + cols.toString() + ') ' + 'VALUES (' + printQuestionMarks(vals.length) + ') ';

        pool.getConnection(function (err, connection) {

            connection.query(queryString, function (err, result) {
                if (err) {
                    throw err;
                }
                done(result);

                connection.release();
                if (err) throw err;
            });
        });
    }
};
module.exports = orm;