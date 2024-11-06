const mysql = require('mysql2');
const fs = require('fs');

const data = fs.readFileSync('database.config');
const passwordArr = data.toString().split("\n")

const conn = mysql.createConnection
(
    {
        host: passwordArr[0],
        user: passwordArr[1],
        password: passwordArr[2],
        port: Number(passwordArr[4])
    }
);

conn.connect((err) =>
{
    if (err)
    {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});