const mysql = require('mysql');

const pool = mysql.createPool({
    host: "us-cdbr-iron-east-05.cleardb.net",
    port: 3306,
	user:'bcb80830b6cb74',
	password:'660d26df',
	database:'heroku_91fb397d2b7010f'
});

pool.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;