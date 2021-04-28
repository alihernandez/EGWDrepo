// //
// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// const port = 3000;
// app.listen(port, () => console.log(`notes-app listening on port ${port}!`));
// //
// // Database Setup
// //
// const Sequelize = require("sequelize");
// const sequelize = new Sequelize({
//   // The `host` parameter is required for other databases
//   // host: 'localhost'
//   dialect: "sqlite",
//   storage: "./database.sqlite",
// });
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch((err) => {
//     console.error("Unable to connect to the database:", err);
//   });
// const Note = sequelize.define("notes", {
//   note: Sequelize.TEXT,
//   tag: Sequelize.STRING,
//   name: Sequelize.STRING,
// });
// sequelize.sync({ force: true }).then(() => {
//   console.log(`Database & tables created!`);
//   Note.bulkCreate([
//     { note: "pick up some bread after work", tag: "shopping", name: "April" },
//     { note: "remember to write up meeting notes", tag: "work", name: "April" },
//     { note: "learn how to use node orm", tag: "work", name: "April" },
//   ])
//     .then(function () {
//       return Note.findAll();
//     })
//     .then(function (notes) {
//       console.log(notes);
//     });
// });
// //
// // Routes
// //
// app.get("/", (req, res) => res.send("Notes App"));
// app.get("/notes", function (req, res) {
//   Note.findAll().then((notes) => res.json(notes));
// });
// // app.get('/notes/search', function(req, res) {
// //   Note.findAll({ where: { note: req.query.note, tag: req.query.tag } }).then(notes => res.json(notes));
// // });
// const Op = Sequelize.Op;

// app.get("/notes/search", function (req, res) {
//   Note.findAll({
//     limit: 3,
//     where: {
//       tag: {
//         [Op.or]: [].concat(req.query.tag),
//       },
//     },
//   }).then((notes) => res.json(notes));
// });
// app.get("/notes/:id", function (req, res) {
//   Note.findAll({ where: { id: req.params.id } }).then((notes) =>
//     res.json(notes)
//   );
// });
// app.post("/notes", function (req, res) {
//   Note.create({ note: req.body.note, tag: req.body.tag }).then(function (note) {
//     res.json(note);
//   });
// });
// app.put("/notes/:id", function (req, res) {
//   Note.findByPk(req.params.id).then(function (note) {
//     note
//       .update({
//         note: req.body.note,
//         tag: req.body.tag,
//       })
//       .then((note) => {
//         res.json(note);
//       });
//   });
// });
// app.delete("/notes/:id", function (req, res) {
//   Note.findByPk(req.params.id)
//     .then(function (note) {
//       note.destroy();
//     })
//     .then((note) => {
//       res.sendStatus(200);
//     });
// });
// // **Instructions:**
// // * Spend the next few ~15 minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).
// //   * Question: What is Sequelize?
// //     * ORM.
// //   * Question: What advantages does it offer?
// //     * Easy to test.
// //     * Gives you support for syncing databases.
// //     * Validation, restricts to specific form of data.
// //     * Complex SQL queries in simple syntax,
// //   * Question: How do I install it? How do I incorporate it into my app?
// //     * `npm install sequelize`
// //   * Question: What the heck is a Sequelize model? What role will it play?
// //     * A representation of table data for Sequelize
// //   * Let's say I have the below table in MySQL.
// //     | Country     | PhoneCode | Capital   | IndependenceYear |
// //     | ----------- | --------- | --------- | ---------------- |
// //     | Afghanistan | 93        | Kabul     | 1919             |
// //     | Belarus     | 375       | Misk      | 1991             |
// //     | Netherlands | 31        | Amsterdam | 1648             |
// //     | Oman        | 968       | Muscat    | 1970             |
// //     | Zambia      | 260       | Lusaka    | 1964             |
// //     * Question: How would I model it in Sequelize?
// //       ```javascript
// //       var tableName = sequelize.define('tableName', {
// //         Country: {
// //           type: Sequelize.STRING
// //         },
// //         PhoneCode: {
// //           type: Sequelize.INTEGER
// //         },
// //         Capital: {
// //           type: Sequelize.STRING
// //         },
// //         IndependenceYear: {
// //           type: Sequelize.INTEGER
// //         },
// //       },
// //       {
// //         freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
// //       });
// //       // force: true will drop the table if it already exists
// //       tableName.sync({force: true}).then(function() {
// //         // Table created
// //         return tableName.create({
// //           Country: 'Afghanistan',
// //           PhoneCode: 93,
// //           Capital: 'Kabul',
// //           IndependenceYear: 1919
// //         });
// //       });
// //       ```
// //     * Question: How would I query for all the records where the Independence Year was less than 50 years ago?
// //       ```javascript
// //       tableName.findAll({
// //         where: {
// //           IndependenceYear: { $gt: new Date().getFullYear() - 50}
// //         }
// //       });
// //       ```
// //     * How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)
// //       ```javascript
// //       tableName.findAll({
// //         offset: 2,
// //         limit: 2,
// //         order: [[sequelize.col('IndependenceYear'), 'DESC']]
// //       })
// //       ```
// //   * Bonus: How do I use sequelize to make changes to an existing table with data in it?
// //     * Use sequelize migrations from the command line: <http://docs.sequelizejs.com/en/latest/docs/migrations/>


//server setup
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = 3000;
//start server
app.listen(PORT,()=> console.log(`app listening on port: ${PORT}`));
//database setup
const Sequelize= require('sequelize');
const sequelize = new Sequelize({
    // host:'localhost',
    dialect:'sqlite',
    storage: './database.sqlite'
});
//authenticate database
sequelize.authenticate()
.then(() => {
    console.log('Connection has been established successfully');
})
.catch(err => {
    console.error('Unable to connect to the database:',err);
});
//set up model for mapping
const Note=sequelize.define('notes', {
    note: Sequelize.TEXT,
    tag:Sequelize.STRING,
    name: Sequelize.STRING,
    age: Sequelize.INTEGER
});
//Authenticate database
//create notes
//.sync is syncronizing/adding all the defined models to the database
//similar to insert in sql
//adding all of the information we put in teh database
sequelize.sync({force:true})
.then(()=>{
    console.log('Database and tables have been created')
    Note.bulkCreate([
        {note:'Note for XXX XXX XXXXX', tag:'noteONe',name:'noteOneName',age: 20},
        {note:'Note two description',tag:'noteTwoTag',}
    ]).then(function(){
        return Note.findAll();
    }).then(function(notes){
        console.log(notes)
    });
});
//routes
//reading entities
app.get('/', (req,res)=>
    res.send('This is the homepage/////'));
app.get('/notes',function(req,res){
    Note.findAll().then(notes => res.json(notes));
});
app.get('/notes/search',function(req,res){
    Note.findAll({
        where:{
            note: req.query.note,
            tag: req.query.tag,
            name: req.query.name,
            age: req.query.age
        }
    }).then(notes=> res.json(notes));
})
//write route to get id parameter
//read all entities
app.get('/notes:id', function(req,res){
    Note.findAll({
        where:{id:req.params.id}}).then(notes =>res.json(notes));
});