//import express and body-parser modules
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//parse requests of content: application/json
app.use(bodyParser.json());

// create an Express app, then add body-parser middlewares using app.use() method
app.use(bodyParser.urlencoded({ extended: true }));

//define a GET route.
app.get("/", (req, res) => {
    res.json({ message: "Welcome!" })l
});

//listen on port 3000 for incoming requests.
app.listen(3000, () => {
    console.log("server is running on port 3000. ");
});





