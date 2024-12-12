const connCreator = require("./createconnection")
const fs = require('fs')
const readline = require('readline')

conn = connCreator()

async function processFiles()
{
    const number_stream = fs.createReadStream('phone-numbers.txt');
    const read_numbers = readline.createInterface({input: number_stream, crlfDelay: Infinity})

    let number_arr = []
    let name_arr = []
    let counter = 0
    for await (const line of read_numbers)
    {

        number_arr.push(line)
        counter += 1
        if (counter >= 20)
        {
            break
        }
    }

    const name_stream = fs.createReadStream('first-names.txt')
    const read_names = readline.createInterface({input: name_stream, crlfDelay: Infinity})

    counter = 0
    for await (const line of read_names)
    {
        name_arr.push(line)
        counter += 1
        if (counter >= 20)
        {
            break
        }
    }

    console.log(name_arr)
    console.log(number_arr)


    await conn.connect((err) =>
    {
        if (err)
        {
            console.log("error...")
        }
        else
        {
            let random_int = function getRandomInt(min, max) {
                const minCeiled = Math.ceil(min);
                const maxFloored = Math.floor(max);
                return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
            }
            let q1_arr = ['1', '2', '3', '4']
            let q2_arr = ['Morning', 'Night']
            let q3_arr = ['Peanuts', 'Frogs', 'Cows','Pizza', 'Smelly CS Majors'];
            let q4_arr = ['NeatFreak', 'Clean', 'Average', 'Messy', 'PigSty'];
            let q5_q8_arr = ['Yes', 'No']
            let q6_arr = ['Yes', 'YesNotInside', 'No']
            // add values into database
            for (let i = 0; i <= 19; i++)
            {
                const username = name_arr[i]
                let query = `INSERT INTO LOGIN(username, password, contact) VALUES('${username}', 'password', '${number_arr[i]}')`;
                conn.query(query, (error, results) =>
                {
                    if (error)
                    {
                        console.log("error has occurred in the query, PINGPONG " + error);
                    }
                    else
                    {
                        console.log("result: " + results)
                    }
                })
                query = `INSERT INTO QUESTIONS(username, Q1, Q2, Q3, Q4, Q5, Q6, Q7) VALUES('${username}', '${q1_arr[random_int(0, 4)]}', '${q2_arr[random_int(0, 2)]}', '${q3_arr[random_int(0, 5)]}', '${q4_arr[random_int(0, 5)]}', '${q5_q8_arr[random_int(0, 2)]}', '${q6_arr[random_int(0, 3)]}', '${q5_q8_arr[random_int(0, 2)]}')`
                conn.query(query, (error, results) =>
                {
                    if (error)
                    {
                        console.log("error has occurred in the query, DINGDONG" + error);
                    }
                    else
                    {
                        console.log("result: " + results)
                    }
                })
            }

            for (let i = 0; i < 10; i++)
            {
                let matcher = name_arr[i]
                let match_arr = []
                let prev_matched = {}
                for (let i = 0; i < 4; i++)
                {
                    let matchee = name_arr[random_int(10, 18)];
                    if (matchee in prev_matched)
                        continue;
                    else
                    {
                        prev_matched[matchee] = 1;
                        let query = `INSERT INTO SWIPES(first_user, second_user, action) VALUES('${matcher}', '${matchee}', 'right');`
                        conn.query(query, (error, results) =>
                        {
                            if (error)
                            {
                                console.log(query)
                                console.log("error has occurred in the query, DINGDONGPINGPONG1 " + error);
                            }
                            else
                            {
                                console.log("result: " + results)
                            }
                        })
                        query = `INSERT INTO SWIPES(first_user, second_user, action) VALUES('${matchee}', '${matcher}', 'right');`
                        conn.query(query, (error, results) =>
                        {
                            if (error)
                            {
                                console.log("error has occurred in the query, DINGDONGPINGPONG2 " + error);
                            }
                            else
                            {
                                console.log("result: " + results)
                            }
                        })
                        query = `INSERT INTO MATCHES(match_id, username, matched_username) VALUES('${crypto.randomUUID()}', '${matchee}', '${matcher}');`
                        console.log(query)
                        conn.query(query, (error, results) =>
                        {
                            if (error)
                            {
                                console.log(query)
                                console.log("error has occurred in the query, DINGDONGPINGPONG " + error);
                            }
                            else
                            {
                                console.log("result: " + results)
                            }
                        })
                    }
                }
            }
        }
    })

}

processFiles()

/*conn.connect((err) =>
{
    if(err)
    {
        console.log("an error has occurred")
    }
    else
    {
        const numbers_file = new File([""], "phone-numbers.txt")
        let reader = new FileReader()

    }
})*/