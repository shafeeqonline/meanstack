var express = require('express'),
	app		= express(),
	path 	= require('path'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	meetupsController = require('./server/controller/meetups-controller');

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/client/views/index.html'));
});

mongoose.connect('mongodb://localhost:27017/mean-demo');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/js', express.static(__dirname + '/client/js'));


app.get('/api/meetups', meetupsController.list);
app.post('/api/meetups', meetupsController.create);

app.listen(3000, function(){
	console.log('I am  now listening on 3000');
})		 