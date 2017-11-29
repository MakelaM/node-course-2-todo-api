// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    } else {
        // Connected successfully
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat  lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({text: 'Walk the dog'}).then((result) => {
    //     console.log(result);
    // });

    // deleteMany    
    db.collection('Users').deleteMany({name: 'Mika'}).then((result) => {
        console.log(result);
    });

    // findOneAndDelete
    db.collection('Users').findOneAndDelete({_id: ObjectID('5a1ea77d392e1e14949cff2e')}).then((result) => {
        console.log(result);
    });

    // db.close();
});