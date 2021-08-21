// importing Express
const express = require("express");

// initializes the Express server and sets it to a variable called app
const app = express();

// to parse the incoming requests with JSON payloads
app.use(express.json()); 
app.use(express.urlencoded());


const sayHi = (req, res) => {
    res.send("Hi!");
}


//GET request
app.get("/", sayHi);

//POST request
app.post("/add", (req, res) => {
    const { a, b } = req.body;
    res.send(`The sum is ${a + b}`);
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});