const mysql = require('mysql2');
const fs = require('fs');
const appRoot = require('app-root-path');
function createConnection()
{
    const data = fs.readFileSync(appRoot + '/database/database.config');
    const passwordArr = data.toString().split("\n");
    return mysql.createConnection
    (
        {
            host: passwordArr[0],
            user: passwordArr[1],
            password: passwordArr[2],
            port: Number(passwordArr[3]),
            database: passwordArr[4]
        }
    );
}

module.exports = createConnection