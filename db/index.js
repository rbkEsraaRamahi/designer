var mongoose = require('mongoose');
var mongod = require("mongod")
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {
  useMongoClient: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function(){console.log("doneeeeeeeeeee")})

var Schema = mongoose.Schema;
var patternSchema = new Schema({
    yourStatment: String,
    repeats: Number
});
var pat1 = new patternSchema({ yourStatment: 'finally...',
    repeats: 50});


pat1.save(function (err, pat1) {
  if (err) return console.error(err);
});


pattern.find(function (err, pattern) {
  if (err) return console.error(err);
  console.log(pattern);
})


var pattern = mongoose.model('pattern', patternSchema );



