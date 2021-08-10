const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const Friend = require('./friendSchema');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

// solves the cors error about accessing api from a diffrent link
app.use("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

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

app.post('/addFriend', (req, res) => {
    // const friend = new Friend({
    //     firstname: 'bu',
    //     lastname: 'hu',
    //     email: 'test@test.com',
    //     phone: '12313212312',
    //     language: 'html'
    // });
    const friend = new Friend({
        _id: new mongoose.Types.ObjectId(),
        firstname: req.body.firstname,
        lastname: req.body.lastname,
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
            console.log(result)
        })
        .catch((err) => {
            console.log(err)
        });
});

// Update data from database
app.put('/:id', (req, res) => {
    Friend.find()
        .then((result) => {
            res.send(result);
            console.log(result)
        })
        .catch((err) => {
            console.log(err)
        });
});

// Delete data from database
app.delete('/deleteFriend/:id', (req, res) => {
    Friend.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.send(result);
            console.log(result)
        })
        .catch((err) => {
            console.log(err)
        });
});


app.listen(port, function () {});