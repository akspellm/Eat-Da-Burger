const mysql = require('mysql');

const connection = mysql.createConnection({
    port: 3306,
    host:'cloud_instance_private_ip',
	user:'root',
	password:'password',
	database:'burgers_db'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;