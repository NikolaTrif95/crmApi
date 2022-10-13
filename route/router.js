const express = require("express");
const userModel = require("./model/schema");
const app = express();
const interfaces = require("./interface");

app.post("/user");

app.delete("/user");

app.put("/user");

app.get("/users");

app.put("/permission");



module.exports = app;
