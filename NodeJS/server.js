// importing Express
const express = require("express");
// importing Path to manipulate path cross-platform
const path = require("path");

// initializes the Express server and sets it to a variable called app
const app = express();

// to parse the incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 


//GET request
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });


app.use(express.static('/public'));


// app.get('/post.js', function(req, res) {
//     res.sendFile(__dirname + "/public/js/post.js");
//   });

//POST request
app.post("/add", (req, res) => {
    const { a, b } = req.body;
    res.send({
      result: parseInt(a) + parseInt(b)
    });
  });

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});