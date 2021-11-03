//import express and body-parser modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

app.use(cors());
//parse requests of content: application/json
app.use(express.json());
app.use(bodyParser.json());


// create an Express app, then add body-parser middlewares using app.use() method
app.use(bodyParser.urlencoded({ extended: true }));

//
app.use(express.urlencoded({ extended: false }));

//define a GET route.
app.get("/", (req, res) => {
    res.json({ message: "Welcome!" })
});

app.get("/getAll", (req, res) => {
    console.log("test");
})

//include routes
require("./routes/customer.routes.js")(app);

//listen on port 3000 for incoming requests.
app.listen(process.env.PORT, () => {
    console.log("server is running");
});





