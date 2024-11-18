const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const runQuery = require("./database/database-api");


app.post("/signup", (req, res) =>
{
    const username = req.body.name;
    const password = req.body.password;
    console.log("Received email: " + req.body.name + " and password: " + req.body.password);
    runQuery(`INSERT INTO LOGIN VALUES('${username}', '${password}');`)
    res.send("Successfully received login details")
});


app.post("/console", (req, res) =>
{
    res.send("This is where you can see any messages.");
    console.log(req.body.text);
});


const PORT = 3000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));

//fake DATA cause cant connect atm
let users = [
    { id: 1, name: "Alice", bio: "Loves hiking", imageUrl: "/images/alice.jpg" },
    { id: 2, name: "Bob", bio: "Engineer", imageUrl: "/images/bob.jpg" },
    { id: 3, name: "Charlie", bio: "Photographer", imageUrl: "/images/charlie.jpg" },
];

//get all the users
app.get("/users", (req, res) => {
    res.json(users);
});

//for swiping
app.post("/swipePage", (req, res) => {
    const { userId, action } = req.body;

    //from the request
    if (!userId || !action || (action !== "left" && action !== "right")) {
        return res.status(400).send("Invalid request data");
    }
    console.log(`User with ID ${userId} was swiped ${action}.`); //log that
    users = users.filter((user) => user.id !== userId); //remove user from list OPTIONAL!!!!
    res.status(200).send(`User with ID ${userId} swiped ${action}.`); //it worked!
});