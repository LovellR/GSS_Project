const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'pharmacy_db'
});

db.connect((err) => {
    if (err) {
        console.error('MySQL connection error:', err);
        return;
    }
    console.log('Connected to pharmacyDb MySQL database');
});

module.exports = db;