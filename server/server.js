const mongoose = require('mongoose');
const express = require('express');
//const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.json());

//Mongoose connection

mongoose.connect(`mongodb+srv://admin:becode@cluster0.c7kwf.mongodb.net/friendsbook`, {
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

app.get('/', function (request, response) {
    response.send('Hello from server');
});

app.get('/allFriends', function (request, response) {
    response.send(allFriends);
});
app.post('/', function (request, response) {
    response.status(200).send({"message": "Data received"});
});
app.post('/allFriends', function (request, response) {
    allFriends.push(request.body); 
    // request.body contains the friend data
});


app.listen(port, function () {});