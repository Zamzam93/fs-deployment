const express = require('express');
const path = require('path');
const cors  = require('cors')
const app = express();
app.use(cors())

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '87694effeeb34d0fb360bc2eb9fdb370',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

try {
    nonExistentFunction();
  } catch (error) {
    console.error(error);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }




app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

const port = process.env.PORT|| 4005;


app.listen(port, () => {
    console.log(`Listening on the port ${port}`);
})