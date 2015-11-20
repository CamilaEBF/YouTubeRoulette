var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use('/', express.static(path.join(__dirname, '')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/videos', function(req, res) {
	var videos = require('./videos.js');
	var index = Math.floor((Math.random() * videos.length));
	res.send(videos[index]);
});
app.listen(3000, function() {
	console.log('Hey! Listen! (on http://localhost:3000)');
});
