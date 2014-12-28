var express = require('express'),
	app		= express(),
	path 	= require('path'),
	bodyParser = require('body-parser'),
	meetupsController = require('./server/controller/meetups-controller');

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/client/views/index.html'));
});

app.use(bodyParser());

app.use('/js', express.static(__dirname + '/client/js'));

app.post('/api/meetups', meetupsController.create);

app.listen(3000, function(){
	console.log('I am  now listening');
	if(express.static)
		console.log("It does");
})		 