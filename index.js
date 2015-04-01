'use strict';

var express = require('express'),
    bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencode());

app.post('/:project', function(req, res){
  
});

app.listen(3000);

console.log('Docker Deploy started on port 3000');
