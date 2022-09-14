const express = require('express');
const app = express();
const port = 8088;

const signinData = require('./signinData.json');

app.get('/test', (req, res) => {
    console.log(' Calling get /test');
  res.send(signinData);
})

app.post('/login', (req, res) => {
  console.log(' Calling post /login');
res.send(signinData);
})

app.listen(port, () => {
  console.log(`Mock server app listening on port ${port}`)
})