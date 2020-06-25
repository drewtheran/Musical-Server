const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const businessRouter = require('./routes/businessRouter');
const educatorRouter = require('./routes/educatorRouter');
const performerRouter = require('./routes/performerRouter');
const recordistRouter = require('./routes/recordistRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

function auth(req, res, next) {
   console.log(req.headers);
   const authHeader = req.headers.authorization;
   if (!authHeader) {
      const err = new Error('You are not authenticated');
      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401; //Standard error status
      return next(err);
   }

   //parse the authorization header
   const auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
   const user = auth[0];
   const pass = auth[1];
   if (user === 'admin' && pass === 'password') {
      return next(); //authorized
   } else {
      const err = new Error('You are not authenticated!');
      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401;
      return next(err);
   }
}

app.use(auth);

app.use('/businesses', businessRouter);
app.use('/educators', educatorRouter);
app.use('/performers', performerRouter);
app.use('/recordists', recordistRouter);

//Adding Express Middleware

app.use(express.static(__dirname + '/public'));


app.use((req, res) => {
   console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is my Musical Server</h1></body></html>')
});

/* This is being taken care of by bin/www
app.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});
*/
module.exports = app;