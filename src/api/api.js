const express = require('express');
const http = require('serverless-http');

const app = express();

const echoRouter = express.Router();

app.get('/', function(req, res) {
  res.json({
    message: 'ok'
  })
});

echoRouter.get('/:id', function(req, res) {
  console.log(req.params);
  res.json({
    message: `${req.params.id} back`
  })
});

app.use('/echo', echoRouter);

module.exports.handler = http(app);
