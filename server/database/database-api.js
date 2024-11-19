const connCreator = require("./createconnection");

function runQuery(query)
{
    const conn = connCreator();
    conn.query(query);
    conn.end();
}

async function getUsers(query) { //async = promised based code as if synchronous
                                //using async because we need the outcome done before moving on
    return new Promise((resolve, reject) => { 
        const conn = connCreator();
        conn.query(query, (err, results) => {
            if (err)
            {
                conn.end(); //close that
                return reject(err); //no promise if error
            }
            conn.end(); //close connection!

            resolve(results); //resolve w results
        });
    });
}

//module.exports = runQuery;
module.exports = { runQuery, getUsers };
//module.exports = getUsers; //delete this if bad!
