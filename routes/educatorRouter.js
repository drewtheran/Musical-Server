const express = require('express');
const bodyParser = require('body-parser');

const educatorRouter = express.Router();

educatorRouter.use(bodyParser.json());

educatorRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will hire all the educators for you');
})
.post((req, res) => {
    res.end(`Will add the educators: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Letting go of all educators');
});

module.exports = educatorRouter;