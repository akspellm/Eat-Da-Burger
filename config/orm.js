const connection = require('../config/connection.js');


function printQuestionMarks(num) {
    let arr = [];

    for (let i=0; i < num; i++) {
       arr.push('?'); 
    };

    return arr.toString();
};

function objToSql(ob) {
    let arr = [];

    for (let key in ob) {
        let value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >=0) {
                value = "'" + value + "'";
            }
        
        arr.push(key + "=" + value);
        }
    }

    return arr.toString();
};

const orm = {
    selectAll: function(tableInput, done) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            done(result);
        });
    },

    updateOne: function(table, objColVals, condition, done) {
        let queryString ='UPDATE ' + table + ' SET ' + objToSql(objColVals) + ' WHERE ' + condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            done(result);
        });
    },

    insertOne: function(table, cols, vals, done) {
        let queryString = 'INSERT INTO ' + table + ' (' + cols.toString() + ') ' + 'VALUES (' + printQuestionMarks(vals.length) + ') ';

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            };

            done(result);
        })
    }   
    
};
module.exports = orm;