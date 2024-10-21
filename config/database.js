const mysql = require('mysql2');
const fs = require('fs');

let passwordarr = []

fs.readFile('database.config', (err, data) =>
{
    passwordarr = data.toString().split("\n");
})

const conn = mysql.createConnection({
    host: passwordarr[0],
    user: passwordarr[1],
    password: passwordarr[2],
    database: passwordarr[3],
    port: Number(passwordarr[4])
});

conn.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});