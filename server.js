var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

app.use('/', express.static(path.join(__dirname, '')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/videos', function(req, res) {
	fs.readFile(path.join(__dirname, 'videos.js'), function(err, data) {
		res.setHeader('Cache-Control', 'no-cache');
		res.json(JSON.parse(data));
	});
});

app.listen(port, function() {
	console.log('Hey! Listen! (on http://localhost:3000)');
});
