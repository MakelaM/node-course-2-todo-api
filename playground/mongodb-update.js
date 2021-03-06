// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    } else {
        // Connected successfully
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a1ea6852de7dc1e8cf80f36')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5a1ea6852de7dc1e8cf80f36')
    }, {
        $set: {
            name: 'Mika',
        },
        $inc: {
            age: 1, // Lisää ikään yhden vuoden, vähennys olisi -1.
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
    // db.close();
});