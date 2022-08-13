const express = require("express");
const app = express();

app.get("/", function (req, res){
  res.send("Hello, World!");
});

app.gewt("/oi", function(req, res){
  res.sen("Olá, mundo!");
});

app.listen(3000);