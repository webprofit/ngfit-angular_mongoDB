const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://__name__:__pass__.mlab.com:__', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.post('/adduser', function (req, res) {
    connection((db) => {
        db.collection('users')
            .save(req.body)
            .then((result) => {
                response.data = result.ops[0];
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
})

router.delete('/deleteItem/:id', function (req, res) {
    connection((db) => {
        db.collection('users')
            .remove({"_id": ObjectID (req.params.id)})
            .then(() => {   
                response.data = req.params.id;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
})



module.exports = router;