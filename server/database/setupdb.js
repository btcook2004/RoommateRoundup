const connCreator = require("./createconnection");

conn = connCreator()

conn.connect((err) =>
{
    if (err)
    {
        console.log("An error has occured...")
    }
    conn.query("DROP TABLE IF EXISTS LOGIN;");
    let sql = "CREATE TABLE LOGIN (username VARCHAR(255), password VARCHAR(255), PRIMARY KEY(username))"
    conn.query(sql, (queryErr, queryResults) =>
    {
        if (queryErr)
        {
            console.error("Query error:", queryErr);
        }
        else
        {
            console.log("Query results:", queryResults);
        }
    });
    conn.query("INSERT INTO LOGIN VALUES('John', 'Password');", (err, results) =>
    {
        if (err)
        {
            console.error("error: " + err);
        }
        else
        {
            console.log("results: " + results);
        }
    });
    conn.end();
});



