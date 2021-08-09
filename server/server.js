const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const Friend = require('./friendSchema');
const { request } = require('express');

const app = express();
const port = 3000;


// solves the cors error about accessing api from a diffrent link
app.use(cors({
    origin: "*",
}));

//Mongoose connection

mongoose.connect(`mongodb+srv://admin:becode@cluster0.c7kwf.mongodb.net/friendbook`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
mongoose.connection.on("error", err => {
  console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})

// Create data

app.post('/add-friend', (req, res) => {
    // const friend = new Friend({
    //     firstName: 'bu',
    //     email: 'test@test.com',
    //     phone: '12313212312',
    //     language: 'html'
    // });
    const friend = new Friend({
        firstname: req.body.firstname,
        firstname: req.body.lastname,
        email: req.body.email,
        phone:  req.body.phone,
        language:  req.body.language
    });
  
    friend.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {{
            console.log(err)
        }})
  })
  
  app.get('/', function (request, response) {
      response.send('Hello from server');
  });
  
// Read data from database
app.get('/allFriends', (req, res) => {
        Friend.find()
        .then((result) => {
            res.send(result);
            console.log(result + "for allfriends")
        })
        .catch((err) => {
            console.log(err + "for allfriends")
        });
});

// Update data from database
app.put('/:id', (req, res) => {
    Friend.find()
        .then((result) => {
            res.send(result);
            console.log(result + "for allfriends")
        })
        .catch((err) => {
            console.log(err + "for allfriends")
        });
});

// Delete data from database
app.delete('/:id', (req, res) => {
    Friend.find()
        .then((result) => {
            res.send(result);
            console.log(result + "for allfriends")
        })
        .catch((err) => {
            console.log(err + "for allfriends")
        });
});


app.listen(port, function () {});