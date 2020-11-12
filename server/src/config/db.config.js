
const mysql = require('mysql');

// local mysql db connection
const dbConn = mysql.createConnection({
    host: 'localhost',
    port: '8889',
    user: 'root',
    password: 'root',
    database: 'node_mysql_crud_db'
});

dbConn.connect( (err) => {
    if(err) throw err;
    console.log('Database Connected!');
});

module.exports = dbConn;