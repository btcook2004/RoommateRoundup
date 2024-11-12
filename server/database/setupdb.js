const connCreator = require("./createconnection");

conn = connCreator()

conn.connect(() =>
{
    let sql = "CREATE TABLE Login (username VARCHAR(255), password VARCHAR(255), PRIMARY KEY(username))"
    conn.query(sql);
});

