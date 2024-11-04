const express = require("express");
const cors = require("cors");
const app = express();
const conn = require('../config/database.js')
app.use(cors());
app.use(express.json());

app.post("/signup", (req, res) =>
{
    console.log("Received name: " + req.body.name);
    console.log("Received email: " + req.body.email);
    console.log("Received password: " + req.body.password);
    res.send("Successfully received login details");

    //put post request towards end here
});
app.post("/console", (req, res) =>
{
    res.send("This is where you can see any messages.");
    console.log(req.body.text);
});


const PORT = 3000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));
