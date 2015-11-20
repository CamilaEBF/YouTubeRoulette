var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

app.use('/', express.static(path.join(__dirname, '')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, function() {
	console.log('Hey! Listen! (on http://localhost:3000)');
});
