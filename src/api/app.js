const express = require('express');
const echoRouter = express.Router();
const app = express();

app.get('/', function(req, res) {
  res.json({
    message: 'ok'
  })
});

echoRouter.get('/:id', function(req, res) {
  res.json({
    message: `${req.params.id} back`
  })
});

app.use('/echo', echoRouter);

module.exports = app;
