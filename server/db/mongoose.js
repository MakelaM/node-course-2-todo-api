var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI ,{ useMongoClient: true })
// mongoose.connect('mongodb://MakelaM:Tietokanta1#@ds151014.mlab.com:51014/todoappdb');


module.exports = {mongoose};