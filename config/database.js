const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'database-1.cpmic0gmoeys.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'mjbbl1975', //it is either this or databasepassword!
    database: 'database-1',
    port: 3306 //pirt
});

conn.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});