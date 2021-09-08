//server setup
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Notes App'));

app.listen(port, () => console.log(`notes-app listening on port ${port}!`));


//Database setup
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


    //creating a model for mapping
const Note = sequelize.define('notes', { note: Sequelize.TEXT, tag: Sequelize.STRING });

//mapping the model to the database
sequelize.sync({force: true})
    .then(() => {
        console.log(`Database & tables created!`);
    });
//creating data that persists in the database
sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`);

    Note.bulkCreate([
      { note: 'pick up some bread after work', tag: 'shopping' },
      { note: 'remember to write up meeting notes', tag: 'work' },
      { note: 'learn how to use node orm', tag: 'work' }
    ]).then(function() {
      return Note.findAll();
    }).then(function(notes) {
      console.log(notes);
    });
  });

//