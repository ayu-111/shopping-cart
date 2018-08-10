var request = require('request');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var {mongoose} = require('./db/mongoose');
var {entry} = require('./model/user');


app.use(express.static(path.join(__dirname + '/views')));
app.use(express.static(path.join(__dirname + '/scripts')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname + '/views/login.html'));
});


app.post('/signup',(req, res) => {
  var file = new entry({
    name : req.body.name,
    email : req.body.email,
    pwd : req.body.password
  });
  file.save().then( (doc) => {
    res.status(200).send("Registered");
  }, (e) => {
    console.log(e);
    res.status(400).send(e);
  });
});


app.listen(3000, () => {
  console.log('Running on port 3000');
});
