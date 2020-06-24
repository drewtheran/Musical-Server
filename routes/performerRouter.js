const express = require('express');
const bodyParser = require('body-parser');

const performerRouter = express.Router();

//Performer Router Path
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

//End Points
performerRouter.route('/:performersId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send the details of hired performer: ${req.params.performersId}`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /performer/${req.params.performersId}`);
})
.put((req, res) => {
    res.write(`Updating the performers: ${req.params.performersId}\n`)
    res.end(`Will update the performers ${req.body.name} with descripton: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Releasing performers: ${req.params.performersId}`);
});
module.exports = performerRouter;