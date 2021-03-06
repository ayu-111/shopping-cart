var request = require('request');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var {mongoose} = require('./db/mongoose');
var {entry} = require('./model/user');

process.on('unhandledRejection', up => { throw up })

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
    res.status(200).end();
  }, (e) => {
    console.log(e);
    res.status(400).end();
  });
});

app.post('/login', (req, res) => {
  var em = req.body.email;
  var pass = req.body.password;
  console.log(req.body);
  entry.findOne({
    "email" : em,
  }).exec().then( (doc) => {
    if(!doc){
      return res.status(400).send({"message" : "Invalid Email"});
    }
    if(doc.pwd == pass){
        return res.status(200).end();
    }else{
      return res.status(400).send({"message" : "Invalid Pass"});
    }
  }, (e) => {
    console.log(e);
    return res.status(400).send({"message" : "Can't connect to mongoDB"});
  });
});



app.listen(3000, () => {
  console.log('Running on port 3000');
});
