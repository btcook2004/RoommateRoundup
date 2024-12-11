const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const { runQuery, getUsers, runOtherQuery, generateUniqueId } = require("./database/database-api");
//const runQuery = require("./database/database-api");
//const getUsers = require("./database/database-api"); //this is new to get users
//I THINK THE ISSUE IS WITH MY SESSION COOKIES!!!

//const session = require("express-session"); //also added for signing in tho idk

//const MemoryStore = require('express-session').MemoryStore;

/*app.use(session({
    secret: 'ASecretThing',
    resave: false,
    saveUninitialized: false,
    store: new MemoryStore(),
    cookie: {  secure: false, // Ensure it's set to false if you're not using HTTPS
        sameSite: 'None', // Allow cookies in cross-origin requests
        maxAge: 1000 * 60 * 60 * 24 }
}));
app.use((req, res, next) => {
    console.log("Middleware: req.session.user =", req.session.user); // Log session info
    req.user = req.session.user || null;  // Set req.user to session user
    console.log("Middleware: req.user =", req.user); // Log req.user
    next();
});
app.use((req, res, next) => {
    console.log("Session ID:", req.sessionID);
    next();
});
*/
app.post("/checkUsername", async (req, res) => {
    const username = req.body.name;
    console.log("Received email: " + req.body.name);
    try {
        const query = `SELECT * FROM LOGIN WHERE username = '${username}';`;
        console.log("Query: " + query);

        const rows = await getUsers(query); //goes to getUsers function in other file
        //await waits for promise to resolve
        console.log("HELLO: " + JSON.stringify(rows));
        if (rows.length > 0) {
            res.send("Username already exists");
        } else {
            res.send("Username is available");
        }
    }
    catch (error) {
        console.error("Error retrieving users:", error);
        res.status(500).send("Internal Server Error");
    }
});  

app.post("/saveAnswers", async (req, res) => {
    const username = req.body.name;
    const answer1 = req.body.Q1;
    const answer2 = req.body.Q2;
    const answer3 = req.body.Q3;
    const answer4 = req.body.Q4;
    const answer5 = req.body.Q5;
    const answer6 = req.body.Q6;
    const answer7 = req.body.Q7;

    try{
        console.log("Received email: " + req.body.name + " Q1: " + req.body.Q1 + " Q2: " + req.body.Q2 + " Q3: " + req.body.Q3 + " Q4: " + req.body.Q4 + " Q5: " + req.body.Q5 + " Q6: " + req.body.Q6 + " Q7: " + req.body.Q7);
        const query = `UPDATE QUESTIONS SET Q1 = '${answer1}', Q2 = '${answer2}', Q3 = '${answer3}', Q4 = '${answer4}', Q5 = '${answer5}', Q6 = '${answer6}', Q7 = '${answer7}' WHERE username = '${username}'`;
        const rows = await getUsers(query);
        res.send("Sent query");
    }
    catch (error) {
        console.error("Error saving answers:", error);
        res.status(500).send("Internal Server Error");
    }

});


app.post( "/getQuestionAnswers", async (req, res) => {
    const username = req.body.name;
    console.log("Received email: " + req.body.name);
    try {
        const query = `SELECT * FROM QUESTIONS WHERE username = '${username}';`;
        console.log("Query: " + query);

        const rows = await getUsers(query); //goes to getUsers function in other file
        //await waits for promise to resolve
        console.log("HELLO: " + JSON.stringify(rows));
        res.send(rows);
    }
    catch (error) {
        console.error("Error retrieving users:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.post( "/getAnswer", async (req, res) => {
    const username = req.body.name;
    const Q = req.body.QNumber;
    try{
        const query = `SELECT Q${Q} FROM QUESTIONS WHERE username = '${username}';`;
        console.log("Query: " + query);

        const rows = await getUsers(query);
        // console.log("SingleAnswer: " + "test");
        // console.log("SingleAnswer: " + JSOSN.stringify(rows));
        let answer = rows[0][`Q${Q}`];
        res.send(answer);
    }
    catch (error) {
        console.error("Error retrieving users:", error);
        res.status(500).send("Internal Server Error");
    }
});


app.post("/getBio", async (req, res) => {
    const username = req.body.name;
    try{
        const query = `SELECT bio FROM LOGIN WHERE username = '${username}';`;
        console.log("Query: " + query);

        const rows = await getUsers(query);
        // console.log("SingleBio: " + "test");
        // console.log("SingleAnswer: " + JSOSN.stringify(rows));
        let answer = rows[0].bio;
        res.send(answer);
    }
    catch (error) {
        console.error("Error retrieving users:", error);
        res.status(500).send("Internal Server Error");
    }
});


app.post("/saveBio", async (req, res) => {
    const username = req.body.name;
    const bio = req.body.Bio;
    try{
        console.log("Received email: " + req.body.name + " Bio: " + req.body.bio);
        const query = `UPDATE LOGIN SET bio = '${bio}' WHERE username = '${username}'`;
        const rows = await getUsers(query);
        res.send("Sent query");
    }
    catch (error) {
        console.error("Error saving bio:", error);
        res.status(500).send("Internal Server Error");
    }

});


app.post("/signup", (req, res) =>
{ //ADD IN DEFAULT QUESTION VALUES OF NULL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const username = req.body.name;
    const password = req.body.password;
    const bio = req.body.bio;
    const contact = req.body.contact;
    console.log("Received email: " + req.body.name + " and password: " + req.body.password);
    runQuery(`INSERT INTO LOGIN VALUES('${username}', '${password}', '${bio}', '${contact});`);
    runQuery(`INSERT INTO QUESTIONS (username, Q1, Q2, Q3, Q4, Q5, Q6, Q7) VALUES ('${username}', 'null', 'null', 'null', 'null', 'null', 'null', 'null');`);
    res.send("Successfully received login details");
});


app.post("/signIn", async (req, res) => {


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
            bio: row.bio,
        }));

        res.json(users); //users array sent!
    } catch (error) { //if that whole thing does not work

        console.error("Error retrieving users:", error);
        res.status(500).send("Internal Server Error");
    }
});

//for swiping
app.post("/swipePage", async (req, res) => {
    //console.log("Cookies:", req.cookies); //log cookies to see if the session cookie is there
    //const { userId, action } = req.body;
    //const swiper = req.user?.username;
    //console.log("REQ: ", req)
    const { swiper, userId, action } = req.body;

    console.log("SwipePage Endpoint: Request received with data:", { swiper, userId, action });

    if (!swiper || !userId || (action !== "left" && action !== "right")) {
        console.error("Invalid request data:", { swiper, userId, action });
        return res.status(400).send("Invalid request data");
    }

    try {
        console.log("Inserting swipe:", { swiper, userId, action });
        const insertSwipeQuery = "INSERT INTO SWIPES (first_user, second_user, action) VALUES (?, ?, ?)";
        await runOtherQuery(insertSwipeQuery, [swiper, userId, action]);

        if (action === "right") {
            console.log("Checking for mutual right swipe (potential match)...");
            const matchCheckQuery = `
                SELECT * FROM SWIPES
                WHERE first_user = ? AND second_user = ? AND action = 'right';
            `;
            const rows = await runOtherQuery(matchCheckQuery, [userId, swiper]);
            console.log("Match check result:", rows);

            if (rows.length > 0) {
                console.log("Mutual swipe detected! Inserting match...");
                const matchQuery = `
                    INSERT INTO MATCHES (match_id, username, matched_username)
                    VALUES (?, ?, ?);
                `;
                const matchId = generateUniqueId();
                await runOtherQuery(matchQuery, [matchId, swiper, userId]);

                console.log("Match successfully created!");
                return res.status(200).send("Match created!");
            }
        }

        console.log("Swipe recorded successfully.");
        res.status(200).send("Swipe recorded!");
    } catch (error) {
        console.error("Error processing swipe:", error);
        res.status(500).send("Internal Server Error");
    }
});


/*app.get("/matches/:userId", async (req, res) => {
    const userId = req.params.userId;

    if (!userId) {
        return res.status(400).send("User ID is required");
    }

    try {
        const query = `
            SELECT match_id, username, matched_username 
            FROM MATCHES 
            WHERE username = '${userId}' OR matched_username = '${userId}';
        `;
        const matches = await getUsers(query); //i think this may cause issuess

        res.json(matches); // Return the list of matches
    } catch (error) {
        console.error("Error retrieving matches:", error);
        res.status(500).send("Internal Server Error");
    }
}); */
