var mongoose = require('mongoose');
var Promise = require('bluebird');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  itemname: String,
  quantity: Number
});

var grocerySchema = mongoose.Schema({
  itemname: String,
  quantity: Number
});

var Item = mongoose.model('Item', itemSchema);
var Grocery = mongoose.model('Grocery', grocerySchema)

var addItem = function(item) {
  var itemname = item.item;
  var quantity = item.quantity;
  var newItem = new Item({ itemname: itemname, quantity: quantity });
  return new Promise(function(resolve, reject) {
    newItem.save(function(err, newItem) {
      if (err) {
        reject(err);
      }
      resolve(newItem);
    })
  })
}

var addGroceryItem = function(item) {
  var itemname = item.item;
  var quantity = item.quantity;
  var newItem = new Grocery({ itemname: itemname, quantity: quantity });
  return new Promise(function(resolve, reject) {
    newItem.save(function(err, newItem) {
      if (err) {
        reject(err);
      }
      resolve(newItem);
    })
  })

}

var removeItem = function(item) {
  return new Promise(function(resolve, reject) {
    Item.remove(item, function(err) {
      if (err) {
        reject(err);
      }
      resolve();
    })
  })
  
}

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var selectAllGroceries = function(callback) {
  Grocery.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.addItem = addItem;
module.exports.removeItem = removeItem;
module.exports.addGroceryItem = addGroceryItem;
module.exports.selectAllGroceries = selectAllGroceries;