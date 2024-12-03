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
    });
    conn.query("DROP TABLE IF EXISTS MATCHES;")
    conn.query("CREATE TABLE MATCHES(match_id CHAR(36), username VARCHAR(255), matched_username VARCHAR(255), PRIMARY KEY(match_id));")
    conn.query("DROP TABLE IF EXISTS MESSAGES;")
    conn.query("CREATE TABLE MESSAGES(message_id CHAR(36), match_id CHAR(36), message_content VARCHAR(512), sender_id INT, date DATE, PRIMARY KEY(message_id));");
    conn.query("DROP TABLE IF EXISTS PROFILE");
    conn.query("CREATE TABLE PROFILE(username INT, picture_path VARCHAR(256), answers VARCHAR(256), display_name VARCHAR(256), PRIMARY KEY(username))");
    conn.query("DROP TABLE IF EXISTS SWIPES;")
    conn.query("CREATE TABLE SWIPES (first_user VARCHAR(255), second_user VARCHAR(255), action VARCHAR(10));") //idk if the datatypes here are right
    conn.end(); //11.26 how to rectify with the matches?? like idk why this is an int
});



