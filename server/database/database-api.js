const connCreator = require("./createconnection");
const { v4: uuidv4 } = require('uuid');

function generateUniqueId() {
    return uuidv4();
}

function runQuery(query)
{
    const conn = connCreator();
    conn.query(query);
    conn.end();
}
function runOtherQuery(query, params = []) {
    const conn = connCreator();
    return new Promise((resolve, reject) => {
        conn.query(query, params, (err, results) => {
            conn.end(); // Close connection
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
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
module.exports = { runQuery, getUsers, runOtherQuery, generateUniqueId};
//module.exports = getUsers; //delete this if bad!
