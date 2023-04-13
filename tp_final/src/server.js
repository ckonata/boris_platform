const express = require("express");
const path = require("path");
require('dotenv').config();

const app = express();

app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {   
  res.send("Hello World");
});

app

module.exports