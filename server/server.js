'use strict';
const http = require('http');
const express = require('express');
// const bodyParser = require('body-parser');
const router = new express.Router();
const path = require('path');

const app = express();
const PROJECT_ROOT_DIR = process.cwd();
const STATIC_DIR = `${PROJECT_ROOT_DIR}/build`;

// app.use(require('morgan')('dev'));
app.use(express.static(STATIC_DIR));

router.get('*', (req, res) => {
  res.sendFile(`${STATIC_DIR}/index.html`);
});
app.use(router);


const HOST = 'localhost';
const PORT = 3001;

app.set('host', process.env.HOST || HOST);
app.set('port', process.env.PORT || PORT);

app.listen(PORT, HOST, function(error) {
  if(error) {
    console.error(error);
  } else {
    console.log('Listening to ', PORT);
  }
});
