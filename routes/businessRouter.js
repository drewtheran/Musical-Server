const express = require('express');
const bodyParser = require('body-parser');

const businessRouter = express.Router();

businessRouter.use(bodyParser.json());

businessRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will hire all the business people for you');
})
.post((req, res) => {
    res.end(`Will add the business person: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Dismissing all business people');
});

module.exports = performerRouter;


