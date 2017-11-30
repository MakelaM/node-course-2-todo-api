const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

Todo.remove({}).then((result) => {
    console.log(result);
});

Todo.findOneAndRemove({_id:'5a20014a2f1540fdb7e6245a'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5a20014a2f1540fdb7e6245a').then((todo) => {
    console.log(todo);
});