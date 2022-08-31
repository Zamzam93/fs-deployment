const express = require('express');
const path = require('path');

const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

const port = process.env.PORT|| 4005;
//this will get the port variable from Heroku. however, if one isnt assigned it will use port 4005.

app.listen(port, () => {
    console.log(`Listening on the port ${port}`);
})