const express = require('express');
const bodyParser = require('body-parser');

const performerRouter = express.Router();

performerRouter.use(bodyParser.json());

performerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will hire all the performers for you');
})
.post((req, res) => {
    res.end(`Will add the performer: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Dismissing all performers');
});

module.exports = performerRouter;