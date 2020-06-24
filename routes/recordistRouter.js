const express = require('express');
const bodyParser = require('body-parser');

const recordistRouter = express.Router();

recordistRouter.use(bodyParser.json());
recordistRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will hire all the recordists for you');
})
.post((req, res) => {
    res.end(`Will add the recordist: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Dismissing all recordists');
});

recordistRouter.route('/:recordistId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send the details of hired recordist: ${req.params.recordistId}`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /recordist/${req.params.recordistId}`);
})
.put((req, res) => {
    res.write(`Updating the recordists: ${req.params.recordistId}\n`)
    res.end(`Will update the recordists ${req.body.name} with descripton: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Releasing performers: ${req.params.recordistId}`);
});

module.exports = recordistRouter;

