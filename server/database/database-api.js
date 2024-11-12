const connCreator = require("./createconnection");
function runQuery(query)
{
    const conn = connCreator();
    conn.query(query);
}

module.exports = runQuery;