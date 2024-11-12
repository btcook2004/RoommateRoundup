const connCreator = require("./createconnection")

const conn = connCreator();
conn.connect((err) =>
{
    if (err)
    {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
    conn.end()
});

