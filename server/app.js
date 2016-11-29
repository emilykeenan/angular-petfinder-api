var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var portDecision = process.env.PORT || 3000;
var request = require('request');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.sendFile(path.resolve('./server/public/views/index.html'));
});

app.get('/random', function(req, res){

  var key = 'b900e0d5e332753a460a64eaa8de00fd';

  var query = 'http://api.petfinder.com/';
  query += 'pet.getRandom';
  query += '?key=' + key;
  query += '&format=json';
  query += '&output=basic';

  request(query, function(error, response) {
    if(error) {
      console.log(error);
      res.sendStatus(500);
    } else {
      console.log(repsonse);
      var body = JSON.parse(response.body);
      res.sendStatus(body.petfinder.pet.contact.state);
    }
  });
});

app.use(express.static('server/public'));

app.listen(portDecision, function(){
  console.log('running on port', portDecision);
});
