const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const Friend = require('./friendSchema');
//const bodyParser = require('body-parser');

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

//app.use(Router);

//let allFriends = [{firstname: 'Coach', lastname: 'Tim', email: 'tim.broos@becode.org', phone: '0469420666', language: 'Javascript'}];

// Below you can define how your API handles a get or a post request.
// Try sending a get request to the root, you should get a "Hello from server" back.

// Put data to database

app.get('/add-friend', (req, res) => {
  const friend = new Friend({
      firstName: 'test',
      email: 'test@test.com',
      phone: '12313212312',
      language: 'html'
  });

  friend.save()
      .then((result) => {
          res.send(result + "for add friend")
      })
      .catch((err) => {{
          console.log(err + "for add friend")
      }})
})

app.get('/', function (request, response) {
    response.send('Hello from server');
});

// Get data from database
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

// app.post('/', function (request, response) {
//     response.status(200).send({"message": "Data received"});
// });
// app.post('/allFriends', function (request, response) {
//     allFriends.push(request.body); 
//     // request.body contains the friend data
// });


app.listen(port, function () {});