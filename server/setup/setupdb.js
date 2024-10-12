let mysql = require('mysql')

let con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
});

con.connect(() =>
{
    let sql = "CREATE TABLE Login (username VARCHAR(255), password VARCHAR(255), PRIMARY KEY(username))"
    con.query(sql);
});

