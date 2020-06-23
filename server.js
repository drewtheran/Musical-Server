const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const businessRouter = require('./routes/businessRouter');
const educatorRouter = require('./routes/educatorRouter');
const performerRouter = require('./routes/performerRouter');
const recordistRouter = require('./routes/recordistRouter');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/businesses', businessRouter);
app.use('/educators', educatorRouter);
app.use('/performers', performerRouter);
app.use('./recordists', recordistRouter);

app.use(express.static(__dirname + '/public'));


app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>')
})

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});