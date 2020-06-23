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

module.exports = recordistRouter;

