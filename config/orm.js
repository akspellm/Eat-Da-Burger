const connection = require('../config/connection.js');

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
    selectAll: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function(table, objColVals, condition, cb) {
        let queryString ='UPDATE ' + table + ' SET ' + objToSql(objColVals) + ' WHERE ' + condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
    
};
module.exports = orm;