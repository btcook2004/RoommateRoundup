const mysql = require('mysql2');
const fs = require('fs');
function createConnection()
{
    const data = fs.readFileSync('database.config');
    const passwordArr = data.toString().split("\n");
    return mysql.createConnection
    (
        {
            host: passwordArr[0],
            user: passwordArr[1],
            password: passwordArr[2],
            port: Number(passwordArr[3])
        }
    );
}

module.exports = createConnection