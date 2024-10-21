const fs = require('fs');

fs.readFile('database.config', (err, data) =>
{
    const passwordarr = data.toString().split("\n");
    for (let i = 0; i < passwordarr.length; i++)
    {
        console.log(passwordarr[i]);
    }
})
