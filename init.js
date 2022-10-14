const express = require('express');
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./route/userRouter/router");
const {logger} = require("./logger");
const permissionRouter = require("./route/permissionRouter/router");
const config = require("./config/config");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(userRouter);
app.use(permissionRouter);
mongoose.connect(config.mongodb.connectUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.listen(config.app.port, () => {
  logger.info(`CRM API listening at http://localhost:${config.app.port}`);
});

