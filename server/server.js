const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const { runQuery, getUsers } = require("./database/database-api");
//const runQuery = require("./database/database-api");
//const getUsers = require("./database/database-api"); //this is new to get users

app.post("/signup", (req, res) =>
{
    const username = req.body.name;
    const password = req.body.password;
    console.log("Received email: " + req.body.name + " and password: " + req.body.password);
    runQuery(`INSERT INTO LOGIN VALUES('${username}', '${password}');`)
    res.send("Successfully received login details")
});

app.post("/signIn", async (req, res) =>
{
    const username = req.body.name;
    const password = req.body.password;
    console.log("Received email: " + req.body.name + " and password: " + req.body.password);
    try {
        const query = `SELECT * FROM LOGIN WHERE username = '${username}' AND password = '${password}';`;
        console.log("Query: " + query);

        const rows = await getUsers(query); //goes to getUsers function in other file
        //await waits for promise to resolve
        console.log("HELLO: " + JSON.stringify(rows));
        if (rows.length > 0) {
            res.send("Success");
        } else {
            res.send("Failure");
        }
    }
    catch (error) {
        console.error("Error retrieving users:", error);
        res.status(500).send("Internal Server Error");
    }

});

app.post("/console", (req, res) =>
{
    res.send("This is where you can see any messages.");
    console.log(req.body.text);
});


const PORT = 3000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));

//universal array for users, unsure if i should put this in individual functions
let users = [];

//get all the users
app.get("/users", async (req, res) => { //this is async btw

    try {
        const query = "SELECT * FROM LOGIN;";

        const rows = await getUsers(query); //goes to getUsers function in other file
                                            //await waits for promise to resolve
        //map those guys or whatever to the user array
        users = rows.map(row => ({

            id: row.username, //sends id to (username) to frontend
            password: row.password, //samesies with password
        }));

        res.json(users); //users array sent!
    } catch (error) { //if that whole thing does not work

        console.error("Error retrieving users:", error);
        res.status(500).send("Internal Server Error");
    }
});

//for swiping
app.post("/swipePage", (req, res) => {
    const { userId, action } = req.body; //when there is an action on a swipe page

    //from the request
    if (!userId || !action || (action !== "left" && action !== "right")) {

        return res.status(400).send("Invalid request data"); //checks if that is okay
    }
    console.log(`User with ID ${userId} was swiped ${action}.`); //log that
    //add sql stuff to store likes

    //users = users.filter((user) => user.id !== userId); //remove user from list OPTIONAL!!!!
    res.status(200).send(`User with ID ${userId} swiped ${action}.`); //it worked!
});
