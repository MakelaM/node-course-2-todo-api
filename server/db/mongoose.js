var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://MakelaM:Tietokanta1#@ds151014.mlab.com:51014/todoappdb' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};