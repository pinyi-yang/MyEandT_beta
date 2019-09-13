require('dotenv').config();
const express = require('express');


const app = express();

app.get('/test', (req, res) => {
  res.send('server is up if you see this');
})



app.listen(process.env.PORT || 3001, function() {
  console.log(`Connected to port ${process.env.PORT}`);
})