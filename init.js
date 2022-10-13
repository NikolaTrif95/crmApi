const express = require('express');
const app = express();
const mongoose = require("mongoose");
const Router = require("./router");
const port = 3000;
app.use(express.json());
app.use(Router);

console.log('WDASDSDADDSDASDA')
mongoose.connect('mongodb://localhost:27017/crmDb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

