//Dependencies//
const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const http = require("http");
const path = require("path");
const bodyParser=require("body-parser");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

//PORTS//
const app = express();
// const PORT = 3000;

//Create Server//
const server = http.createServer(app);
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./public")));
app.use(helmet());
app.use(limiter);

//Set up DB //
let db = new sqlite3.Database('emp');
db.run("CREATE TABLE IF NOT EXISTS emp(id TEXT, name TEXT)");

//ROUTES//
//Set up a GET request to render our HTML PAGE
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/form.html"));
});

// Add
app.post("/add", function (req, res) {
  db.serialize(() => {
    db.run(
      "INSERT INTO emp(id,name) VALUES(?,?)",
      [req.body.id, req.body.name],
      function (err) {
        if (err) {
          return console.log(err.message);
        }
        console.log("New employee has been added");
        res.send(
          "New employee has been added into the database with ID = " +
            req.body.id +
            " and Name = " +
            req.body.name
        );
      }
    );
  });
});

// View
app.post("/view", function (req, res) {
  db.serialize(() => {
    db.each(
      "SELECT id ID, name NAME FROM emp WHERE id =?",
      [req.body.id],
      function (err, row) {
        //db.each() is only one which is funtioning while reading data from the DB
        if (err) {
          res.send("Error encountered while displaying");
          return console.error(err.message);
        }
        res.send(` ID: ${row.ID},    Name: ${row.NAME}`);
        console.log("Entry displayed successfully");
      }
    );
  });
});

//Update
app.post("/update", function (req, res) {
  db.serialize(() => {
    db.run(
      "UPDATE emp SET name = ? WHERE id = ?",
      [req.body.name, req.body.id],
      function (err) {
        if (err) {
          res.send("Error encountered while updating");
          return console.error(err.message);
        }
        res.send("Entry updated successfully");
        console.log("Entry updated successfully");
      }
    );
  });
});

// Delete
app.post("/delete", function (req, res) {
  db.serialize(() => {
    db.run("DELETE FROM emp WHERE id = ?", req.body.id, function (err) {
      if (err) {
        res.send("Error encountered while deleting");
        return console.error(err.message);
      }
      res.send("Entry deleted");
      console.log("Entry deleted");
    });
  });
});

// Closing the database connection.
app.get('/close', function(req,res){
    db.close((err) => {
      if (err) {
        res.send('There is some error in closing the database');
        return console.error(err.message);
      }
      console.log('Closing the database connection.');
      res.send('Database connection successfully closed');
    });
  
  });


//Start your Server
server.listen(3000, function(){
    console.log("server is listening on port: 3000");
  });
  
