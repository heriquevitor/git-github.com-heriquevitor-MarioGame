const express = require("express");
const app = express();

app.get("/", function (req, res){
  res.send("Hello, World!");
});

app.get("/oi", function(req, res){
  res.send("Olá, mundo!");
});
//Lista com as pontuações

const lista = [
  {
    id: 1,
    nome: "Herique",
    pontos: 200,
  },
  {
    id: 2,
    nome: "Daniel",
    pontos: 300,
  },
  {
    id: 3,
    nome: "Bia",
    pontos: 400,
  },
];
app.get("/pontuacoes", function(req, res) {
  res.send("Ler todas as pontuações");
});

app.listen(3000);