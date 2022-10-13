const express = require('express');
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./route/userRouter/router");
const permissionRouter = require("./route/permissionRouter/router");
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(userRouter);
// app.use(permissionRouter);
mongoose.connect('mongodb://localhost:27017/crmDb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

