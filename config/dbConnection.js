var mysql = require('mysql');

var connMySQL = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias'
    });
}

module.exports = function () {
    console.log('autoload')
    return connMySQL;
}