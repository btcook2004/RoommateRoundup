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
    console.log("Received email: " + req.body.email)
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
