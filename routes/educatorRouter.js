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

//End Points
educatorRouter.route('/:educatorsId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send the details of educator: ${req.params.educatorsId}`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /educator/${req.params.educatorsId}`);
})
.put((req, res) => {
    res.write(`Updating the educators: ${req.params.educatorsId}\n`)
    res.end(`Will update the educatorsa ${req.body.name} with descripton: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Releasing educators: ${req.params.educatorsId}`);
});

module.exports = educatorRouter;