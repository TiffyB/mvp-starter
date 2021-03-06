var express = require('express');
var bodyParser = require('body-parser');

var items = require('../database-mongo');

var app = express();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/items', jsonParser, function(req, res) {
	console.log(req.body); //{ itemname: 'apricots', quantity: '4' }
	return items.addItem(req.body)
	.then((item) => {
		res.end('got it');
	})
	.error((error) => {
		res.sendStatus(500);
	})	
})

app.post('/items/remove', jsonParser, function(req, res) {
	console.log(req.body);
	return items.removeItem(req.body)
		.then(() => {
			res.send('received post to items/remove')
		})
		.error(error => {
			res.sendStatus(500);
		})
}) 

app.get('/groceries', function (req, res) {
  items.selectAllGroceries(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
}); 

app.post('/groceries', jsonParser, function(req, res) {
	console.log(req.body)
	return items.addGroceryItem(req.body)
	.then((item) => {
		res.end('got it');
	})
	.error((error) => {
		res.sendStatus(500);
	})	
})

app.post('/groceries/remove', jsonParser, function(req, res) {
	console.log("in remove groceries endpoint", req.body);
	return items.removeGrocery(req.body)
		.then(() => {
			res.send('received post to items/remove')
		})
		.error(error => {
			res.sendStatus(500);
		})
})

app.post('/groceries/move', jsonParser, function(req, res) {
	console.log("request body of move groceries endpoint ", req.body);
  return items.moveFromGroceryToItem(req.body)
    .then(() => {
      res.send('received post to items/remove')
    })
    .error(error => {
      res.sendStatus(500);
    })
})


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

