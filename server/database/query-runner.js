const connCreator = require("./createconnection");
const readline = require("readline")

conn = connCreator();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

conn.connect((err) =>
{
    if (err)
    {
        console.log("An error has occurred...");
    }
    rl.question("Please input your query\n", (query) =>
    {
        conn.query(query, (queryErr, results) => {
            if (queryErr)
            {
                console.error("Query error:", queryErr);
            } else
            {
                console.log("Query results:", results);
            }
        })
        rl.close()
        conn.close();
    })
})